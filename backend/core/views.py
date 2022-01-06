from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from core.models import Test
from core.serializers import TestSerializer


class TestListAPIView(ListAPIView):
    permission_classes = [IsAuthenticated]

    serializer_class = TestSerializer

    def get_queryset(self):
        return Test.objects.filter(author__email=self.request.user)
