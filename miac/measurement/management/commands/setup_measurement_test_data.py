from django.core.management.base import BaseCommand
from django.db import transaction
import rstr

from measurement.factories import MeasurementFactory
from measurement.models import Measurement
from users.factories import UserFactory, SuperUserFactory
from users.models import User

NUM_MEASUREMENTS = 50
NUM_RECOMENDATIONS = 20


class Command(BaseCommand):
    help = "Generates test data"

    @transaction.atomic
    def handle(self, *args, **kwargs):
        self.stdout.write("Deleting old data...")
        models = [Measurement]
        for m in models:
            m.objects.all().delete()

        self.stdout.write("Creating new data...")

        for user in User.objects.all():
            for _ in range(NUM_MEASUREMENTS):
                MeasurementFactory(patient=user)

        for user in User.objects.all():
            for _ in range(NUM_RECOMENDATIONS):
                MeasurementFactory(patient=user)
