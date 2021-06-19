from rest_framework import viewsets, generics, filters
from rest_framework.permissions import AllowAny

from measurement.filters import MeasurementFilter, RecomendationFilter
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
    filterset_fields = ['created_at']

    serializer_class = UserMeasurementHistorySerializer
    permission_classes = (AllowAny,)


class PatientRecomendationHistoryView(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserRecomendationHistorySerializer
    permission_classes = (AllowAny,)


class MeasurementHistoryView(generics.ListAPIView):
    serializer_class = MeasurementSerializer
    filterset_class = MeasurementFilter

    def get_queryset(self):
        user_id = self.kwargs['pk']
        return Measurement.objects.filter(patient=user_id)


class RecomendationHistoryView(generics.ListAPIView):
    serializer_class = RecomendationSerializer
    filterset_class = RecomendationFilter

    def get_queryset(self):
        user_id = self.kwargs['pk']
        return Recomendation.objects.filter(patient=user_id)
