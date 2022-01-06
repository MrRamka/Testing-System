from datetime import timedelta, datetime

from django.contrib.auth.base_user import BaseUserManager
from django.contrib.auth.models import AbstractUser, PermissionsMixin
from django.db import models
from django.utils import timezone

from user.utils import jwt_encode_handler


class UserManager(BaseUserManager):

    def create_user(self, username, email, password=None):
        if username is None:
            raise TypeError('Users must have a username.')

        if email is None:
            raise TypeError('Users must have an email address.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save()

        return user


class User(AbstractUser):
    password_updated_at = models.DateTimeField(default=timezone.now)
    email = models.EmailField(db_index=True, unique=True)
    username = models.CharField(db_index=True, max_length=255, unique=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    objects = UserManager()

    def set_password(self, raw_password):
        super().set_password(raw_password=raw_password)
        if self.pk is not None:
            self.password_updated_at = timezone.now()
            self.save(update_fields=["password_updated_at"])

    @property
    def token(self):
        return self._generate_jwt_token()

    def _generate_jwt_token(self):
        dt = datetime.now() + timedelta(days=2)
        payload = {
            'id': self.pk,
            'exp': int(dt.timestamp())
        }
        print(payload)
        token = jwt_encode_handler(payload)

        return token
