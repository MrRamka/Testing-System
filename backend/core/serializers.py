from rest_framework import serializers
from .models import Test, Question, Answer


class TestSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Test
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Question
        fields = '__all__'


class AnswerSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Answer
        fields = '__all__'
