from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from mesurement.models import Mesurement, Recomendation
from mesurement.serializers import MesurementSerializer, RecomendationSerializer


class MesurementCRUDView(viewsets.ModelViewSet):
    queryset = Mesurement.objects.all()
    serializer_class = MesurementSerializer
    permission_classes = (AllowAny,)


class RecomendationCRUDView(viewsets.ModelViewSet):
    queryset = Recomendation.objects.all()
    serializer_class = RecomendationSerializer
    permission_classes = (AllowAny,)
