from rest_framework import authentication, exceptions

from .models import User
from .utils import jwt_decode_handler


class JWTAuthentication(authentication.BaseAuthentication):

    def authenticate(self, request):
        request.user = None

        auth_header = authentication.get_authorization_header(request).split()

        if not auth_header:
            return None

        token = auth_header[1].decode('utf-8')

        return self._authenticate_credentials(token)

    @staticmethod
    def _authenticate_credentials(token):

        try:
            payload = jwt_decode_handler(token)
        except Exception:
            msg = 'AuthenticationFailed: Token decode exception'
            raise exceptions.AuthenticationFailed(msg)

        try:
            user = User.objects.get(pk=payload['id'])
        except User.DoesNotExist:
            msg = 'AuthenticationFailed: User not found'
            raise exceptions.AuthenticationFailed(msg)

        return user, token
