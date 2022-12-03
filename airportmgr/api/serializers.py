from rest_framework import serializers
from .models import Flight, Airline, Employee, Gate, Baggage

class FlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = ('id','flightCode','flightSource','flightDestination','flightArrival','flightDeparture','flightStatus','flightType', 'flightGate','flightCarouselNo')

class CreateFlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flight
        fields = ('flightCode', 'flightSource', 'flightDestination','flightArrival','flightDeparture','flightStatus','flightType', 'flightGate','flightCarouselNo')

class UpdateFlightSerializer(serializers.ModelSerializer):
    flightCode = serializers.CharField(validators = [])
    class Meta:
        model = Flight
        fields = ('flightCode', 'flightSource', 'flightDestination','flightArrival','flightDeparture','flightStatus','flightType', 'flightGate','flightCarouselNo')

class AirlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airline
        fields = ('airlineID','airlineName')

class CreateAirlineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airline
        fields = ('airlineID','airlineName')

class UpdateAirlineSerializer(serializers.ModelSerializer):
    airlineID = serializers.CharField(validators = [])    
    class Meta:
        model = Airline
        fields = ('airlineID','airlineName')

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('id','employeeFirstName','employeeLastName', 'employeeEmail', 'employeeType', 'password')

class CreateEmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = ('employeeFirstName','employeeLastName', 'employeeEmail', 'employeeType', 'password')

class UpdateEmployeeSerializer(serializers.ModelSerializer):
    # employeeID = serializers.CharField(validators = [])
    employeeEmail = serializers.CharField(validators = [])
    class Meta:
        model = Employee
        fields = ('employeeFirstName','employeeLastName', 'employeeEmail', 'employeeType', 'password')

class GateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gate
        fields = ('id','gateNo','gateStatus','gateMaintainenceStatus')

class CreateGateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gate
        fields = ('gateNo','gateStatus','gateMaintainenceStatus')

class UpdateGateSerializer(serializers.ModelSerializer):
    gateNo = serializers.CharField(validators = [])
    class Meta:
        model = Gate
        fields = ('gateNo','gateStatus','gateMaintainenceStatus')

class BaggageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Baggage
        fields = ('id','baggageCarouselNo','baggageStatus')

class CreateBaggageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Baggage
        fields = ('baggageCarouselNo','baggageStatus')

class UpdateBaggageSerializer(serializers.ModelSerializer):
    baggageCarouselNo = serializers.CharField(validators = [])
    class Meta:
        model = Baggage
        fields = ('baggageCarouselNo','baggageStatus')