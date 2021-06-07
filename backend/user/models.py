from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone


class User(AbstractUser):
    password_updated_at = models.DateTimeField(default=timezone.now)

    def set_password(self, raw_password):
        super().set_password(raw_password=raw_password)
        # overriding `password_updated_at` field with an existing primary key
        # else it will be used default value
        if self.pk is not None:
            self.password_updated_at = timezone.now()
            self.save(update_fields=["password_updated_at"])
