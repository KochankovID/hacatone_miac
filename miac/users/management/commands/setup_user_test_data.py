from django.core.management.base import BaseCommand
from django.db import transaction
import rstr

from users.factories import UserFactory, SuperUserFactory
from users.models import User

NUM_USERS = 50


class Command(BaseCommand):
    help = "Generates test data"

    @transaction.atomic
    def handle(self, *args, **kwargs):
        self.stdout.write("Deleting old data...")
        models = [User]
        for m in models:
            m.objects.all().delete()

        self.stdout.write("Creating new data...")
        self.stdout.write("Creating superuser")
        SuperUserFactory()

        people = []
        for _ in range(NUM_USERS):
            username_gen = rstr.xeger('^\d{3}-\d{3}-\d{3}-\d{2}$')
            UserFactory(username=username_gen)
