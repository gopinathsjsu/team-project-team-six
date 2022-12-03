from django.urls import path
from .views import FlightView, AirlineView, EmployeeView, GateView, BaggageView, CreateFlightView, CreateGateView, CreateEmployeeView, GetFlightView, CreateBaggageView, GetEmployeeView, CreateAirlineView, GetAirlineView, UpdateAirlineView, UpdateFlightView, UpdateEmployeeView, GetGateView, UpdateGateView, GetBaggageView, UpdateBaggageView,GateAssignmentView, BaggageCarousalAssignmentView

urlpatterns = [
    path('flight', FlightView.as_view()),
    path('create-flight', CreateFlightView.as_view()),
    path('get-flight', GetFlightView.as_view()),
    path('update-flight', UpdateFlightView.as_view()),
    path('airline', AirlineView.as_view()),
    path('create-airline', CreateAirlineView.as_view()),
    path('get-airline', GetAirlineView.as_view()),
    path('update-airline', UpdateAirlineView.as_view()),
    path('employee', EmployeeView.as_view()),
    path('create-employee', CreateEmployeeView.as_view()),
    path('get-employee', GetEmployeeView.as_view()),
    path('update-employee', UpdateEmployeeView.as_view()),
    path('gate', GateView.as_view()),
    path('get-gate',GetGateView.as_view()),
    path('update-gate', UpdateGateView.as_view()),
    path('create-gate', CreateGateView.as_view()),
    path('baggage', BaggageView.as_view()),
    path('create-baggage', CreateBaggageView.as_view()),
    path('get-baggage', GetBaggageView.as_view()),
    path('update-baggage', UpdateBaggageView.as_view()),
    path('assign-gate', GateAssignmentView.as_view()),
    path('assign-baggage', BaggageCarousalAssignmentView.as_view())
]