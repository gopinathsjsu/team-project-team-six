from django.urls import path
from .views import FlightView, AirlineView, EmployeeView, GateView, BaggageView, CreateFlightView, CreateAirlineView

urlpatterns = [
    path('flight', FlightView.as_view()),
    path('create-flight', CreateFlightView.as_view()),
    path('airline', AirlineView.as_view()),
    path('create-airline', CreateAirlineView.as_view()),
    path('employee', EmployeeView.as_view()),
    path('gate', GateView.as_view()),
    path('baggage', BaggageView.as_view()),
]