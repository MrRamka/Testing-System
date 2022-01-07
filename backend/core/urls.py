from django.urls import path

from core.views import TestListAPIView, SingleTestRetrieveUpdateAPIView, QuestionListAPIView, \
    QuestionRetrieveUpdateAPIView

urlpatterns = [
    path('all-users-tests/', TestListAPIView.as_view(), name='all-tests'),
    path('test/<int:test_id>/', SingleTestRetrieveUpdateAPIView.as_view(), name='test-retrieve-update-destroy'),
    path('test-questions/<int:test_id>/', QuestionListAPIView.as_view(), name='question-list'),
    path('questions/<int:test_id>/<int:question_id>/', QuestionRetrieveUpdateAPIView.as_view(),
         name='question-retrieve-update-destroy')
]
