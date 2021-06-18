from django.contrib import admin

from .models import Recomendation, Measurement


@admin.register(Measurement)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("created_at", "pulse", "pressure_high", "pressure_low")


@admin.register(Recomendation)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("created_at", "text", "doctor")
