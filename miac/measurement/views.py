from rest_framework import viewsets, generics
from rest_framework.permissions import AllowAny

from measurement.models import Measurement, Recomendation
from measurement.serializers import MeasurementSerializer, RecomendationSerializer, UserMeasurementHistorySerializer, \
    UserRecomendationHistorySerializer
from users.models import User


class MeasurementCRUDView(viewsets.ModelViewSet):
    queryset = Measurement.objects.all()
    serializer_class = MeasurementSerializer
    permission_classes = (AllowAny,)


class RecomendationCRUDView(viewsets.ModelViewSet):
    queryset = Recomendation.objects.all()
    serializer_class = RecomendationSerializer
    permission_classes = (AllowAny,)


class PatientMeasurementHistoryView(generics.RetrieveAPIView):
    queryset = User.objects.all()

    serializer_class = UserMeasurementHistorySerializer
    permission_classes = (AllowAny,)


class PatientRecomendationHistoryView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserRecomendationHistorySerializer
    permission_classes = (AllowAny,)
