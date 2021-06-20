from django.core.management.base import BaseCommand
from django.db import transaction
import rstr
import factory

from measurement.factories import MeasurementFactory, RecomendationFactory
from measurement.models import Measurement, Recomendation
from users.factories import UserFactory, SuperUserFactory
from users.models import User

NUM_MEASUREMENTS = 50
NUM_RECOMENDATIONS = 20


class Command(BaseCommand):
    help = "Generates test data"

    @transaction.atomic
    def handle(self, *args, **kwargs):
        self.stdout.write("Deleting old data...")
        models = [Measurement, Recomendation]
        for m in models:
            m.objects.all().delete()

        self.stdout.write("Creating new data...")

        for user in User.objects.all():
            for _ in range(NUM_MEASUREMENTS):
                mes = MeasurementFactory(patient=user)
                mes.created_at = MeasurementFactory.created_at.evaluate(mes, _, {'locale': None})
                mes.save()

        for user in User.objects.all():
            for _ in range(NUM_RECOMENDATIONS):
                rec = RecomendationFactory(patient=user)
                rec.created_at = MeasurementFactory.created_at.evaluate(rec, _, {'locale': None})
                rec.save()
