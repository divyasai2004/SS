from django.urls import path
from . import views

urlpatterns = [
    path('notes/', views.get_notes),
    path('feedback/', views.submit_feedback),
    path('upload-note/', views.upload_note),
    path('feedbacks/', views.get_feedbacks), 
    path('notes/<str:note_id>/', views.delete_note), 
     

]
