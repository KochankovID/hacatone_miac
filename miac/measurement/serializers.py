from rest_framework import serializers
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
    measurement = MeasurementSerializer(many=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'measurement')


class UserRecomendationHistorySerializer(ModelSerializer):
    recomendation = RecomendationSerializer(many=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'recomendation')
