import django_filters

from measurement.models import Measurement, Recomendation


class MeasurementFilter(django_filters.FilterSet):
    created_at = django_filters.DateTimeFilter()
    created_at__gte = django_filters.DateTimeFilter(field_name='created_at', lookup_expr='gte')
    created_at__lte = django_filters.DateTimeFilter(field_name='created_at', lookup_expr='lte')

    class Meta:
        model = Measurement
        fields = ['created_at']


class RecomendationFilter(django_filters.FilterSet):
    created_at = django_filters.DateTimeFilter()
    created_at__gte = django_filters.DateTimeFilter(field_name='created_at', lookup_expr='gte')
    created_at__lte = django_filters.DateTimeFilter(field_name='created_at', lookup_expr='lte')

    class Meta:
        model = Recomendation
        fields = ['created_at']
