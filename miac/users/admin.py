from django.contrib import admin

from .models import User


@admin.register(User)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("username", "email", "first_name", "last_name")
