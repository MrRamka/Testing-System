from rest_framework import serializers
from .models import Test, Question


class TestSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Test
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Question
        fields = '__all__'
