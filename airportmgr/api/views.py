from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import FlightSerializer, AirlineSerializer, EmployeeSerializer, GateSerializer, BaggageSerializer, CreateFlightSerializer, CreateGateSerializer, CreateEmployeeSerializer, CreateBaggageSerializer, UpdateFlightSerializer
from .models import Flight, Airline, Employee, Gate, Baggage

# Create your views here.

class FlightView(generics.CreateAPIView):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer

class CreateFlightView(APIView):
    serializer_class = CreateFlightSerializer
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            flightCode = serializer.data.get('flightCode')
            flightSource = serializer.data.get('flightSource')
            flightDestination = serializer.data.get('flightDestination')
            flightArrival = serializer.data.get('flightArrival')
            flightDeparture = serializer.data.get('flightDeparture')
            flightStatus = serializer.data.get('flightStatus')
            flightType = serializer.data.get('flightType')
            flightNoOfStops = serializer.data.get('flightNoOfStops')
            flightGate = serializer.data.get('flightGate')
            flightCarouselNo = serializer.data.get('flightCarouselNo')
                    
            flight = Flight(flightCode=flightCode, flightSource=flightSource, flightDestination=flightDestination, flightArrival=flightArrival, flightDeparture=flightDeparture, flightStatus=flightStatus, flightType=flightType, flightNoOfStops=flightNoOfStops, flightGate=flightGate, flightCarouselNo=flightCarouselNo)
            flight.save()

            return Response(FlightSerializer(flight).data, status=status.HTTP_201_CREATED)

        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)

class GetFlightView(APIView):
    serializer_class = FlightSerializer
    lookup_url_kwarg = 'flightCode'
    def get(self, request, format=None):

        flightCode = request.GET.get(self.lookup_url_kwarg)
        if flightCode != None:
            flight = Flight.objects.filter(flightCode=flightCode)
            if (len(flight) > 0):
                data = FlightSerializer(flight[0]).data
                return Response(data, status=status.HTTP_200_OK)

            return Response('Flight not found: Invalid flight code', status=status.HTTP_404_NOT_FOUND)

        return Response('Bad request: Flight code parameter not found in request', status=status.HTTP_400_BAD_REQUEST)

class UpdateFlightView(APIView):
    serializer_class = UpdateFlightSerializer

    def patch(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            flightCode = serializer.data.get('flightCode')
            flightSource = serializer.data.get('flightSource')
            flightDestination = serializer.data.get('flightDestination')
            flightArrival = serializer.data.get('flightArrival')
            flightDeparture = serializer.data.get('flightDeparture')
            flightStatus = serializer.data.get('flightStatus')
            flightType = serializer.data.get('flightType')
            flightNoOfStops = serializer.data.get('flightNoOfStops')
            flightGate = serializer.data.get('flightGate')
            flightCarouselNo = serializer.data.get('flightCarouselNo')
                    
            queryset = Flight.objects.filter(flightCode=flightCode)
            if not queryset.exists():
                return Response({'msg':'Flight not found.'}, status=status.HTTP_404_NOT_FOUND)

            flight = queryset[0]
            flight.flightCode = flightCode
            flight.flightSource = flightSource
            flight.flightDestination = flightDestination
            flight.flightArrival = flightArrival
            flight.flightDeparture = flightDeparture
            flight.flightStatus = flightStatus
            flight.flightType = flightType
            flight.flightNoOfStops = flightNoOfStops
            flight.flightGate = flightGate
            flight.flightCarouselNo = flightCarouselNo

            flight.save(update_fields=['flightCode', 'flightSource', 'flightDestination','flightArrival','flightDeparture','flightStatus','flightType','flightNoOfStops', 'flightGate','flightCarouselNo'])

            return Response(FlightSerializer(flight).data, status=status.HTTP_200_OK)

        else:

            return Response({'Bad request':'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)

class AirlineView(generics.CreateAPIView):
    queryset = Airline.objects.all()
    serializer_class = AirlineSerializer

class EmployeeView(generics.CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class CreateEmployeeView(APIView):
    serializer_class = CreateEmployeeSerializer
    def post(self, request, Format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            employeeID = serializer.data.get('employeeID')
            employeeFirstName = serializer.data.get('employeeFirstName')
            employeeLastName = serializer.data.get('employeeLastName')
            employeeEmail = serializer.data.get('employeeEmail')
            employeeType = serializer.data.get('employeeType')
                    
            employee = Employee(employeeID = employeeID, employeeFirstName = employeeFirstName, employeeLastName = employeeLastName, employeeEmail = employeeEmail, employeeType = employeeType)
            employee.save()

            return Response(EmployeeSerializer(employee).data, status=status.HTTP_201_CREATED)

        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)

class GateView(generics.CreateAPIView):
    queryset = Gate.objects.all()
    serializer_class = GateSerializer

class CreateGateView(APIView):
    serializer_class = CreateGateSerializer
    def post(self, request, Format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            gateNo = serializer.data.get('gateNo')
            gateStatus = serializer.data.get('gateStatus')
                    
            gate = Gate(gateNo=gateNo, gateStatus=gateStatus)
            gate.save()

            return Response(GateSerializer(gate).data, status=status.HTTP_201_CREATED)

        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)


class BaggageView(generics.CreateAPIView):
    queryset = Baggage.objects.all()
    serializer_class = BaggageSerializer


class CreateBaggageView(APIView):
    serializer_class = CreateBaggageSerializer
    def post(self, request, Format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            baggageCarouselNo = serializer.data.get('baggageCarouselNo')
            baggageStatus = serializer.data.get('baggageStatus')
                    
            baggage = Baggage(baggageCarouselNo=baggageCarouselNo, baggageStatus=baggageStatus)
            baggage.save()

            return Response(BaggageSerializer(baggage).data, status=status.HTTP_201_CREATED)

        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)