from rest_framework import status
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from user.models import User
from user.renderers import UserJSONRenderer
from user.serializers import RegistrationSerializer, LoginSerializer


class CreateUserView(CreateAPIView):
    model = User
    permission_classes = (AllowAny,)
    authentication_classes = ()
    serializer_class = RegistrationSerializer


class LoginAPIView(APIView):
    permission_classes = (AllowAny,)
    renderer_classes = (UserJSONRenderer,)
    serializer_class = LoginSerializer

    def post(self, request):
        user = request.data.get('user', {})
        serializer = self.serializer_class(data=user)
        serializer.is_valid(raise_exception=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
