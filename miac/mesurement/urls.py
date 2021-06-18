from rest_framework.routers import DefaultRouter

from mesurement.views import MesurementCRUDView, RecomendationCRUDView

router = DefaultRouter()
router.register('mesurement', MesurementCRUDView, basename='mesurement')
router.register('recomendation', RecomendationCRUDView, basename='recomendation')

urlpatterns = [
    *router.urls
]
