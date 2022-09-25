from django.contrib import admin
from .models import GeoDataPacket


@admin.register(GeoDataPacket)
class GroupUserAdmin(admin.ModelAdmin):
    list_display = ('id', 'identifier')