from django.shortcuts import render
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser
from rest_framework.response import Response
from .models import Note, Feedback
from django.conf import settings
import os
from bson import ObjectId
from rest_framework import status
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from cloudinary.uploader import upload

@api_view(['GET'])
def get_notes(request):
    notes = Note.objects()
    data = [{
        "id": str(note.id),
        "title": note.title,
        "subject": note.subject,
        "semester": note.semester,
        "course": note.course,
        "year": note.year,
        "file_url": note.file_url
    } for note in notes]
    return Response(data)

@api_view(['POST'])
def submit_feedback(request):
    data = request.data
    feedback = Feedback(
        name=data.get("name"),
        college_id=data.get("college_id"),
        message=data.get("message")
    )
    feedback.save()
    return Response({"message": "Thank you for your feedback!"})

@api_view(['GET'])
def get_feedbacks(request):
    feedbacks = Feedback.objects().order_by('-submitted_at')
    data = []
    for fb in feedbacks:
        data.append({
            "id": str(fb.id),
            "name": fb.name,
            "college_id": fb.college_id,
            "message": fb.message,
            "submitted_at": fb.submitted_at.strftime('%Y-%m-%d %H:%M:%S') if fb.submitted_at else "N/A"
        })
    return Response(data)

@api_view(['POST'])
@parser_classes([MultiPartParser])
def upload_note(request):
    file = request.FILES.get('file')
    title = request.POST.get('title')
    subject = request.POST.get('subject')
    semester = request.POST.get('semester')
    course = request.POST.get('course')
    year = request.POST.get('year')

    if not file:
        return Response({"error": "No file uploaded"}, status=400)

    # ✅ Upload directly to Cloudinary as raw file (PDF/DOCX/etc.)
    try:
        uploaded_file = upload(file, resource_type="raw")
        file_url = uploaded_file.get("secure_url")
    except Exception as e:
        return Response({"error": f"Upload to Cloudinary failed: {str(e)}"}, status=500)

    note = Note(
        title=title,
        subject=subject,
        semester=int(semester),
        course=course,
        year=year,
        file_url=file_url
    )
    note.save()

    return Response({"message": "Note uploaded successfully!", "file_url": file_url})

@api_view(['DELETE'])
def delete_note(request, note_id):
    try:
        note = Note.objects.get(id=note_id)
        note.delete()
        return Response({"message": "Note deleted successfully"})
    except Note.DoesNotExist:
        return Response({"error": "Note not found"}, status=404)

@api_view(['DELETE'])
def delete_feedback_by_id(request, feedback_id):
    try:
        feedback = Feedback.objects.get(id=feedback_id)
        feedback.delete()
        return Response({"message": "Feedback deleted successfully!"})
    except Feedback.DoesNotExist:
        return Response({"error": "Feedback not found"}, status=404)
