from django.db import models
from django.db.models import SET_NULL

from user.models import User


class Test(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    slug = models.SlugField()
    random_order = models.BooleanField()
    author = models.ForeignKey(User, on_delete=SET_NULL, null=True)


SINGLE, MULTIPLE, TEXT, MATCHING, SEQUENCE = range(5)
TYPES = (
    (SINGLE, "Single"),
    (MULTIPLE, "Multiple"),
    (TEXT, "Text"),
    (MATCHING, "Matching"),
    (SEQUENCE, "Sequence"),
)


class QuestionType(models.Model):
    name = models.CharField(max_length=100)
    type = models.IntegerField(choices=TYPES, default=SINGLE)


class Question(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500, null=True)
    image = models.ImageField()
    explanation = models.CharField(max_length=500, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    test = models.ForeignKey(Test, on_delete=SET_NULL, null=True)
    type = models.ForeignKey(QuestionType, on_delete=SET_NULL, null=True)
