from django.db import models

from users.models import User


class Measurement(models.Model):
    pulse = models.IntegerField(blank=False, null=False)
    pressure_high = models.IntegerField(blank=False, null=False)
    pressure_low = models.IntegerField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='measurement')
    saturation = models.IntegerField(null=True)
    type = models.CharField(blank=False, null=False, max_length=255)


class Recomendation(models.Model):
    text = models.TextField(blank=False, null=False)
    doctor = models.TextField(blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recomendation')
