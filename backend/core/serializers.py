from rest_framework import serializers
from .models import Test


class TestSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Test
        fields = '__all__'
