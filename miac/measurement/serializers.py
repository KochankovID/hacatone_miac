from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer

from users.models import User
from .models import Measurement, Recomendation


class MeasurementSerializer(ModelSerializer):
    class Meta:
        model = Measurement
        fields = '__all__'


class RecomendationSerializer(ModelSerializer):
    class Meta:
        model = Recomendation
        fields = '__all__'


class UserMeasurementHistorySerializer(ModelSerializer):
    measurement = SerializerMethodField()

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'measurement')

    def get_measurement(self, instance):
        players = instance.measurement.order_by('created_at')
        return MeasurementSerializer(players, many=True).data


class UserRecomendationHistorySerializer(ModelSerializer):
    recomendation = SerializerMethodField()

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'recomendation')

    def get_measurement(self, instance):
        players = instance.recomendation.order_by('created_at')
        return RecomendationSerializer(players, many=True).data
