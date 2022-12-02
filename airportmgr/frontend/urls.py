from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('airlineemployeepage', index),
    path('airportemployeepage', index),
    path('forms', index),
    # path('join', index),
    # path('create', index),
    path('airlineemployeepage/1', index)
]