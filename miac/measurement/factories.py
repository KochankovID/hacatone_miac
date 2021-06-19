import factory
from factory.django import DjangoModelFactory

from .models import Measurement, Recomendation


class MeasurementFactory(DjangoModelFactory):
    class Meta:
        model = Measurement

    pulse = factory.Faker('randomize_nb_elements', ge=False, number=210)
    pressure_high = factory.Faker('randomize_nb_elements', ge=False, number=150)
    pressure_low = factory.Faker('randomize_nb_elements', ge=False, number=90)
    saturation = factory.Faker('randomize_nb_elements', ge=False, number=100)
    type = factory.Faker('random_element', elements=('Нагрузка', 'Бег', 'Стресс', 'Покой'))


class RecomendationFactory(DjangoModelFactory):
    class Meta:
        model = Recomendation

    text = factory.Faker('sentence',
                         nb_words=5,
                         variable_nb_words=True)
    doctor = factory.Faker('first_name')
