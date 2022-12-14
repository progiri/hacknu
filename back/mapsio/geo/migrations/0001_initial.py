# Generated by Django 4.1.1 on 2022-09-23 17:36

import django.contrib.gis.db.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="GeoDataPacket",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("point", django.contrib.gis.db.models.fields.PointField(srid=3857)),
                ("identifier", models.CharField(max_length=255)),
                ("timestamp", models.PositiveBigIntegerField()),
                ("floor_label", models.IntegerField()),
                ("hor_accuracy", models.FloatField()),
                ("ver_accuracy", models.FloatField()),
                ("cil_accuracy", models.FloatField()),
                ("activity", models.CharField(max_length=255)),
            ],
        ),
    ]
