from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import FlightSerializer, AirlineSerializer, EmployeeSerializer, GateSerializer, BaggageSerializer, CreateFlightSerializer, GetFlightSerializer
from .models import Flight, Airline, Employee, Gate, Baggage

# Create your views here.

class FlightView(generics.CreateAPIView):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer
    """ def get(self, request, format=None):
        serializer = FlightSerializer
        return JsonResponse(serializer.data, safe=False, status=status.HTTP_200_OK) """

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


class AirlineView(generics.CreateAPIView):
    queryset = Airline.objects.all()
    serializer_class = AirlineSerializer

class EmployeeView(generics.CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class GateView(generics.CreateAPIView):
    queryset = Gate.objects.all()
    serializer_class = GateSerializer

class BaggageView(generics.CreateAPIView):
    queryset = Baggage.objects.all()
    serializer_class = BaggageSerializer