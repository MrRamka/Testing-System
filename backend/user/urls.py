from django.urls import path

from user.views import CreateUserView, LoginAPIView

urlpatterns = [
    path('registration/', CreateUserView.as_view(), name='registration'),
    path('login/', LoginAPIView.as_view(), name='login'),
]
