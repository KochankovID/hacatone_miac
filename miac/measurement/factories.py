from datetime import datetime

import factory
import pytz
from django.utils import timezone
from factory.django import DjangoModelFactory

from .models import Measurement, Recomendation


class MeasurementFactory(DjangoModelFactory):
    class Meta:
        model = Measurement

    pulse = factory.Faker('random_int', min=50, max=140)
    pressure_high = factory.Faker('random_int', min=100, max=180)
    pressure_low = factory.Faker('random_int', min=60, max=110)
    saturation = factory.Faker('random_int', min=92, max=95)
    type = factory.Faker('random_element', elements=('Нагрузка', 'Бег', 'Стресс', 'Покой'))
    created_at = factory.Faker('date_time_this_year', before_now=True)
    updated_at = created_at


class RecomendationFactory(DjangoModelFactory):
    class Meta:
        model = Recomendation

    text = factory.Faker('sentence',
                         nb_words=5,
                         variable_nb_words=True)
    doctor = factory.Faker('first_name')
    created_at = factory.Faker('date_time_this_year', before_now=True, tzinfo=pytz.UTC)
    updated_at = created_at
