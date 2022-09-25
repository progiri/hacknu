from django.contrib.gis.db import models


class GeoDataPacket(models.Model):
    point = models.PointField(srid=3857, dim=3)
    identifier = models.CharField(max_length=255, null=True, blank=True)
    timestamp = models.PositiveBigIntegerField(null=True, blank=True)
    floor_label = models.IntegerField(null=True, blank=True)
    hor_accuracy = models.FloatField(null=True, blank=True)
    ver_accuracy = models.FloatField(null=True, blank=True)
    cil_accuracy = models.FloatField(null=True, blank=True)
    activity = models.CharField(max_length=255, null=True, blank=True)
    dev = models.CharField(max_length=255, null=True, blank=True)

