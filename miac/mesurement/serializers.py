from rest_framework.serializers import ModelSerializer

from .models import Mesurement, Recomendation


class MesurementSerializer(ModelSerializer):
    class Meta:
        model = Mesurement
        fields = '__all__'


class RecomendationSerializer(ModelSerializer):
    class Meta:
        model = Recomendation
        fields = '__all__'
