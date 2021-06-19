from django.test import TestCase

import rstr
from users.models import User
from django_any.models import any_model


class GenerateUsers(TestCase):
    def generate_Users(self):
        username_gen = rstr.xeger('^\d{3}-\d{3}-\d{3}-\d{2}$')
        user = any_model(User, username=username_gen)
