from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('airlineemployeepage', index),
    path('airportemployeepage', index),
    path('airlineoptionpage', index),
    path('airportoptionpage', index),
    path('airlineemployeepage/1', index),
    path('loginpage', index),
    path('signuppage', index),
    path('forms', index),
]