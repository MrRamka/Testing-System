from django.db import transaction
from rest_framework.generics import ListAPIView, RetrieveUpdateAPIView, get_object_or_404
from rest_framework.permissions import IsAuthenticated

from core.models import Test, Question, Answer
from core.permissions import IsOwnerPermission
from core.serializers import TestSerializer, QuestionSerializer, AnswerSerializer
from django.db.models import Q


class TestListAPIView(ListAPIView):
    permission_classes = [IsAuthenticated]

    serializer_class = TestSerializer

    def get_queryset(self):
        return Test.objects.filter(author__email=self.request.user)


class SingleTestRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    """
        get: retrieve Test
        put: update Test
        patch: update Test
     """
    serializer_class = TestSerializer
    permission_classes = [IsAuthenticated, IsOwnerPermission]
    http_method_names = ['get', 'put', 'patch']

    @transaction.atomic
    def get_object(self):
        test_id = self.kwargs['test_id']
        obj = get_object_or_404(Test, pk=test_id)
        self.check_object_permissions(self.request, obj)
        return obj


class QuestionListAPIView(ListAPIView):
    permission_classes = [IsAuthenticated, IsOwnerPermission]

    serializer_class = QuestionSerializer

    @transaction.atomic
    def get_queryset(self):
        test_id = self.kwargs['test_id']
        test_owner_contains = Q(test__author=self.request.user)
        question_contains = Q(test_id=test_id)

        obj = get_object_or_404(Test, pk=test_id)
        self.check_object_permissions(self.request, obj)

        return Question.objects.filter(question_contains & test_owner_contains)


class QuestionRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    """
        get: retrieve Question
        put: update Question
        patch: update Question
     """
    serializer_class = QuestionSerializer
    permission_classes = [IsAuthenticated, IsOwnerPermission]
    http_method_names = ['get', 'put', 'patch']

    @transaction.atomic
    def get_object(self):
        test_id = self.kwargs['test_id']
        question_id = self.kwargs['question_id']

        test_obj = get_object_or_404(Test, pk=test_id)
        self.check_object_permissions(self.request, test_obj)

        obj = get_object_or_404(Question, pk=question_id)
        return obj


class QuestionAnswerListAPIView(ListAPIView):
    permission_classes = [IsAuthenticated, IsOwnerPermission]

    serializer_class = AnswerSerializer

    @transaction.atomic
    def get_queryset(self):
        test_id = self.kwargs['test_id']
        question_id = self.kwargs['question_id']

        obj = get_object_or_404(Test, pk=test_id)
        self.check_object_permissions(self.request, obj)
        return Answer.objects.filter(question_id=question_id)

class QuestionAnswerRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    """
        get: retrieve Question
        put: update Question
        patch: update Question
     """
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated, IsOwnerPermission]
    http_method_names = ['get', 'put', 'patch']

    @transaction.atomic
    def get_object(self):
        # TODO update
        test_id = self.kwargs['test_id']
        question_id = self.kwargs['question_id']

        test_obj = get_object_or_404(Test, pk=test_id)
        self.check_object_permissions(self.request, test_obj)

        obj = get_object_or_404(Question, pk=question_id)
        return obj
