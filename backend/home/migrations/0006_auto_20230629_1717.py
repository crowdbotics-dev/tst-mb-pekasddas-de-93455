# Generated by Django 2.2.28 on 2023-06-29 17:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_auto_20230629_1710'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hello',
            name='klklkjjrddddds',
        ),
        migrations.AddField(
            model_name='hello',
            name='klklkjjrdd',
            field=models.BigIntegerField(blank=True, null=True),
        ),
    ]
