import factory
from django.contrib.auth.hashers import make_password
from factory.django import DjangoModelFactory

from .models import User


class UserFactory(DjangoModelFactory):
    class Meta:
        model = User

    email = factory.Faker('email')
    first_name = factory.Faker('first_name')
    last_name = factory.Faker('last_name')
    created_at = factory.Faker('date_between', start_date='-30d', end_date='today')
    updated_at = created_at


class SuperUserFactory(DjangoModelFactory):
    class Meta:
        model = User

    username = '999-999-999-99'
    email = 'fakafafakafa@mail.ru'
    first_name = "Ilya"
    last_name = "Kochankov"
    password = make_password('14122000')
    is_staff = True
    is_superuser = True
