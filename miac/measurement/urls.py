from django.urls import path
from rest_framework.routers import DefaultRouter

from measurement.views import MeasurementCRUDView, RecomendationCRUDView, PatientMeasurementHistoryView, \
    PatientRecomendationHistoryView, MeasurementHistoryView

router = DefaultRouter()
router.register('measurement', MeasurementCRUDView, basename='measurement')
router.register('recomendation', RecomendationCRUDView, basename='recomendation')

urlpatterns = [
    path('measurements/<int:pk>', PatientMeasurementHistoryView.as_view(), name='measurements'),
    path('recomendations/<int:pk>', PatientRecomendationHistoryView.as_view(), name='recomendations'),
    path('measurements/<int:pk>/', MeasurementHistoryView.as_view(), name='measurements_no_user'),
]
urlpatterns += router.urls
