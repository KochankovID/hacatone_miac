# Generated by Django 3.2.4 on 2021-06-16 07:36
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0001_initial"),
    ]

    operations = [
        migrations.RenameField(
            model_name="user",
            old_name="second_name",
            new_name="last_name",
        ),
    ]
