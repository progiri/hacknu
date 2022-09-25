from rest_framework import serializers
from .models import GeoDataPacket

class GeoDataPacketSerializer(serializers.ModelSerializer):
    point = serializers.SerializerMethodField()

    class Meta:
        model = GeoDataPacket
        fields = "__all__"

    def get_point(self, obj):
        return obj.point.coords
