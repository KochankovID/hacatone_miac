from django.urls import path
from rest_framework.routers import DefaultRouter

from mesurement.views import MesurementCRUDView, RecomendationCRUDView, PatientMesurementHistoryView

router = DefaultRouter()
router.register('mesurement', MesurementCRUDView, basename='mesurement')
router.register('recomendation', RecomendationCRUDView, basename='recomendation')

urlpatterns = [
    path('mesurements/<int:pk>', PatientMesurementHistoryView.as_view(), name='mesulements'),
]
urlpatterns += router.urls
