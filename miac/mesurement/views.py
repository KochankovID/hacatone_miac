from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny

from mesurement.models import Mesurement, Recomendation
from mesurement.serializers import MesurementSerializer, RecomendationSerializer, UserMesurementHistorySerializer, \
    UserRecomendationHistorySerializer
from users.models import User


class MesurementCRUDView(viewsets.ModelViewSet):
    queryset = Mesurement.objects.all()
    serializer_class = MesurementSerializer
    permission_classes = (AllowAny,)


class RecomendationCRUDView(viewsets.ModelViewSet):
    queryset = Recomendation.objects.all()
    serializer_class = RecomendationSerializer
    permission_classes = (AllowAny,)


class PatientMesurementHistoryView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserMesurementHistorySerializer
    permission_classes = (AllowAny,)


class PatientRecomendationHistoryView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserRecomendationHistorySerializer
    permission_classes = (AllowAny,)
