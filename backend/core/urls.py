from django.urls import path

from core.views import TestListAPIView

urlpatterns = [
    path('all-tests/', TestListAPIView.as_view(), name='all-tests'),
]