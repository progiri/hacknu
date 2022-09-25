from django.urls import path
from . import views

urlpatterns = [
    path("", views.GetGeoDataPacketsView.as_view()),
    path("<str:dev>/", views.GetGeoDataPacketsByDev.as_view())
]
