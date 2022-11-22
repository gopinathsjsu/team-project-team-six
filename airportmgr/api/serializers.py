from rest_framework import serializers
from .models import Flight, Airline, Employee, Gate, Baggage

class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = ('id','flightCode','flightSource','flightDestination','flightArrival','flightDeparture','flightStatus','flightType','flightNoOfStops', 'flightGate','flightCarouselNo')

class CreateFlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = ('flightCode', 'flightSource', 'flightDestination','flightArrival','flightDeparture','flightStatus','flightType','flightNoOfStops', 'flightGate','flightCarouselNo')

class AirlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airline
        fields = ('id','airlineID','airlineName')

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id','employeeID','employeeFirstName','employeeLastName', 'employeeEmail', 'employeeType')

class GateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gate
        fields = ('id','gateNo','gateStatus')

class BaggageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Baggage
        fields = ('id','baggageCarousalNo','baggageStatus')
