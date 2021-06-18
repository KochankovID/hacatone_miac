from django.urls import path
from rest_framework.routers import DefaultRouter

from mesurement.views import MesurementCRUDView, RecomendationCRUDView, PatientMesurementHistoryView, \
    PatientRecomendationHistoryView

router = DefaultRouter()
router.register('mesurement', MesurementCRUDView, basename='mesurement')
router.register('recomendation', RecomendationCRUDView, basename='recomendation')

urlpatterns = [
    path('mesurements/<int:pk>', PatientMesurementHistoryView.as_view(), name='mesulements'),
    path('recomendations/<int:pk>', PatientRecomendationHistoryView.as_view(), name='recomendations'),
]
urlpatterns += router.urls
