from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from users.models import User
from .models import Mesurement, Recomendation


class MesurementSerializer(ModelSerializer):
    class Meta:
        model = Mesurement
        fields = '__all__'


class RecomendationSerializer(ModelSerializer):
    class Meta:
        model = Recomendation
        fields = '__all__'


class UserMesurementHistorySerializer(ModelSerializer):
    mesurement = MesurementSerializer(many=True)

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name', 'last_name', 'mesurement')

