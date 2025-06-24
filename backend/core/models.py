from django.db import models

# Create your models here.
from mongoengine import Document, StringField, IntField, DateTimeField
import datetime

class Note(Document):
    title = StringField(required=True)
    subject = StringField(required=True)
    course = StringField(required=True)  # ✅ This must be added
    year = StringField(required=True)    # ✅ This must be added
    semester = IntField(required=True)
    file_url = StringField(required=True)
    uploaded_at = DateTimeField(default=datetime.datetime.utcnow)


class Feedback(Document):
    name = StringField(required=True)
    college_id = StringField(required=True)
    message = StringField(required=True)
    submitted_at = DateTimeField(default=datetime.datetime.utcnow)

