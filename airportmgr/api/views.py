from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db import connection
import subprocess


from .serializers import FlightSerializer, AirlineSerializer, EmployeeSerializer, GateSerializer, BaggageSerializer, CreateFlightSerializer, CreateGateSerializer, CreateEmployeeSerializer, CreateBaggageSerializer, CreateAirlineSerializer, UpdateAirlineSerializer, UpdateFlightSerializer, UpdateGateSerializer, UpdateEmployeeSerializer,UpdateBaggageSerializer
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
            flightSchedule = serializer.data.get('flightSchedule')
            # flightDeparture = serializer.data.get('flightDeparture')
            flightStatus = serializer.data.get('flightStatus')
            flightType = serializer.data.get('flightType')
            flightGate = serializer.data.get('flightGate')
            flightCarouselNo = serializer.data.get('flightCarouselNo')
                    
            flight = Flight(flightCode=flightCode, flightSource=flightSource, flightDestination=flightDestination, flightSchedule=flightSchedule, flightStatus=flightStatus, flightType=flightType, flightGate=flightGate, flightCarouselNo=flightCarouselNo)
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
            flightSchedule = serializer.data.get('flightSchedule')
            # flightDeparture = serializer.data.get('flightDeparture')
            flightStatus = serializer.data.get('flightStatus')
            flightType = serializer.data.get('flightType')
            flightGate = serializer.data.get('flightGate')
            flightCarouselNo = serializer.data.get('flightCarouselNo')
                    
            queryset = Flight.objects.filter(flightCode=flightCode)
            if not queryset.exists():
                return Response({'msg':'Flight not found.'}, status=status.HTTP_404_NOT_FOUND)

            flight = queryset[0]
            # flight.flightCode = flightCode
            flight.flightSource = flightSource
            flight.flightDestination = flightDestination
            flight.flightSchedule = flightSchedule
            # flight.flightDeparture = flightDeparture
            flight.flightStatus = flightStatus
            flight.flightType = flightType
            flight.flightGate = flightGate
            flight.flightCarouselNo = flightCarouselNo

            flight.save(update_fields=['flightSource', 'flightDestination','flightSchedule','flightStatus','flightType', 'flightGate','flightCarouselNo'])

            return Response(FlightSerializer(flight).data, status=status.HTTP_200_OK)

        else:
            return Response({'Bad request':'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)

class AirlineView(generics.CreateAPIView):
    queryset = Airline.objects.all()
    serializer_class = AirlineSerializer

class CreateAirlineView(APIView):
    serializer_class = CreateAirlineSerializer
    def post(self, request, format = None):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            airlineID = serializer.data.get('airlineID')
            airlineName = serializer.data.get('airlineName')

            airline = Airline(airlineID = airlineID, airlineName = airlineName)
            airline.save()

            return Response(AirlineSerializer(airline).data, status=status.HTTP_201_CREATED)        
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)

class GetAirlineView(APIView):
    serializer_class = AirlineSerializer
    lookup_url_kwarg = 'airlineID'
    
    def get(self, request, format=None):
        airlineID = request.GET.get(self.lookup_url_kwarg)
        if airlineID != None:
            airline = Airline.objects.filter(airlineID = airlineID)
            if (len(airline) > 0):
                data = AirlineSerializer(airline[0]).data
                return Response(data, status=status.HTTP_200_OK)
            
            return Response('Airline not found: Invalid Airline ID', status=status.HTTP_404_NOT_FOUND)

        return Response('Bad request: Airline ID parameter not found in request', status=status.HTTP_400_BAD_REQUEST)

class UpdateAirlineView(APIView):
    serializer_class = UpdateAirlineSerializer

    def patch(self, request, format=None):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            airlineID = serializer.data.get('airlineID')
            airlineName = serializer.data.get('airlineName')

            queryset = Airline.objects.filter(airlineID=airlineID)
            if not queryset.exists():
                return Response('Airline ID does not exist', status=status.HTTP_404_NOT_FOUND)
            
            airline = queryset[0]
            airline.airlineName = airlineName
            airline.save(update_fields=['airlineName'])
            return Response(AirlineSerializer(airline).data, status=status.HTTP_200_OK)        
        else:
            return Response('Bad request: Invalid data', status=status.HTTP_400_BAD_REQUEST)

class EmployeeView(generics.CreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class CreateEmployeeView(APIView):
    serializer_class = CreateEmployeeSerializer
    def post(self, request, Format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            # employeeID = serializer.data.get('employeeID')
            employeeFirstName = serializer.data.get('employeeFirstName')
            employeeLastName = serializer.data.get('employeeLastName')
            employeeEmail = serializer.data.get('employeeEmail')
            employeeType = serializer.data.get('employeeType')
            password = serializer.data.get('password')
                    
            employee = Employee(employeeFirstName = employeeFirstName, employeeLastName = employeeLastName, employeeEmail = employeeEmail, employeeType = employeeType, password = password)
            employee.save()

            return Response(EmployeeSerializer(employee).data, status=status.HTTP_201_CREATED)

        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)

class GetEmployeeView(APIView):
    serializer_class = EmployeeSerializer
    lookup_url_kwarg = 'employeeEmail'
    def get(self, request, format=None):

        employeeEmail = request.GET.get(self.lookup_url_kwarg)
        if employeeEmail != None:
            employee = Employee.objects.filter(employeeEmail = employeeEmail)
            if (len(employee) > 0):
                data = EmployeeSerializer(employee[0]).data
                return Response(data, status=status.HTTP_200_OK)

            return Response('Employee not found: Invalid employee ID', status=status.HTTP_404_NOT_FOUND)

        return Response('Bad request: Employee Email parameter not found in request', status=status.HTTP_400_BAD_REQUEST)

class UpdateEmployeeView(APIView):
    serializer_class = UpdateEmployeeSerializer

    def patch(self, request, format=None):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            # employeeID = serializer.data.get('employeeID')
            employeeFirstName = serializer.data.get('employeeFirstName')
            employeeLastName = serializer.data.get('employeeLastName')
            employeeEmail = serializer.data.get('employeeEmail')
            employeeType = serializer.data.get('employeeType')
            password = serializer.data.get('password')

            queryset = Employee.objects.filter(employeeEmail=employeeEmail)
            if not queryset.exists():
                return Response('Employee does not exist', status=status.HTTP_404_NOT_FOUND)
            
            employee = queryset[0]
            employee.employeeFirstName = employeeFirstName
            employee.employeeLastName = employeeLastName
            # employee.employeeEmail = employeeEmail
            employee.employeeType = employeeType
            employee.password = password

            employee.save(update_fields=['employeeFirstName', 'employeeLastName', 'employeeType', 'password'])
            return Response(EmployeeSerializer(employee).data, status=status.HTTP_200_OK)        
        else:
            # print(serializer.errors);
            return Response('Bad request: Invalid data', status=status.HTTP_400_BAD_REQUEST)

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
            gateMaintainenceStatus = serializer.data.get('gateMaintainenceStatus') 
            terminalNo = serializer.data.get('terminalNo')

            gate = Gate(gateNo=gateNo, gateStatus=gateStatus, gateMaintainenceStatus=gateMaintainenceStatus, terminalNo=terminalNo)
            gate.save()

            return Response(GateSerializer(gate).data, status=status.HTTP_201_CREATED)

        else:

            return Response(status=status.HTTP_400_BAD_REQUEST)


class GetGateView(APIView):
    serializer_class = GateSerializer
    lookup_url_kwarg = 'gateNo'
    def get(self, request, format=None):

        gateNo = request.GET.get(self.lookup_url_kwarg)
        if gateNo != None:
            gate = Gate.objects.filter(gateNo=gateNo)
            if (len(gate) > 0):
                data = GateSerializer(gate[0]).data
                return Response(data, status=status.HTTP_200_OK)

            return Response('Gate not found: Invalid gate number', status=status.HTTP_404_NOT_FOUND)

        return Response('Bad request: Gate number parameter not found in request', status=status.HTTP_400_BAD_REQUEST)


class UpdateGateView(APIView):
    serializer_class = UpdateGateSerializer

    def patch(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            gateNo = serializer.data.get('gateNo')
            gateStatus = serializer.data.get('gateStatus')
            gateMaintainenceStatus = serializer.data.get('gateMaintainenceStatus')
            terminalNo = serializer.data.get('terminalNo')
                    
            queryset = Gate.objects.filter(gateNo=gateNo)
            if not queryset.exists():
                return Response({'msg':'Gate not found.'}, status=status.HTTP_404_NOT_FOUND)

            gate = queryset[0]
            gate.gateStatus = gateStatus
            gate.gateMaintainenceStatus = gateMaintainenceStatus
            gate.terminalNo = terminalNo

            gate.save(update_fields=['gateStatus', 'gateMaintainenceStatus', 'terminalNo'])

            return Response(GateSerializer(gate).data, status=status.HTTP_200_OK)

        else:
            return Response({'Bad request':'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)


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

class GetBaggageView(APIView):
    serializer_class = GateSerializer
    lookup_url_kwarg = 'baggageCarouselNo'
    def get(self, request, format=None):

        baggageCarouselNo = request.GET.get(self.lookup_url_kwarg)
        if baggageCarouselNo != None:
            baggage = Baggage.objects.filter(baggageCarouselNo=baggageCarouselNo)
            if (len(baggage) > 0):
                data = BaggageSerializer(baggage[0]).data
                return Response(data, status=status.HTTP_200_OK)

            return Response('Baggage Carousel not found: Invalid baggage carousel number', status=status.HTTP_404_NOT_FOUND)

        return Response('Bad request: Baggage Carousel number parameter not found in request', status=status.HTTP_400_BAD_REQUEST)

class UpdateBaggageView(APIView):
    serializer_class = UpdateBaggageSerializer

    def patch(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            baggageCarouselNo = serializer.data.get('baggageCarouselNo')
            baggageStatus = serializer.data.get('baggageStatus')
                    
            queryset = Baggage.objects.filter(baggageCarouselNo=baggageCarouselNo)
            if not queryset.exists():
                return Response({'msg':'Baggage Carousel not found.'}, status=status.HTTP_404_NOT_FOUND)

            baggage = queryset[0]
            baggage.baggageStatus = baggageStatus

            baggage.save(update_fields=['baggageStatus'])

            return Response(BaggageSerializer(baggage).data, status=status.HTTP_200_OK)

        else:
            return Response({'Bad request':'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)

class GateAssignmentView(APIView):
    def get(self, request, format=None):
        cursor = connection.cursor()

        # get all flights
        cursor.execute(''' SELECT * FROM api_flight ''')
        all_flights = cursor.fetchall()
        
        # iterate throught flights
        for i in all_flights:
            # if gate not assigned
            if i[7] == '0':
                # get first available gate
                cursor.execute('''SELECT * FROM api_gate WHERE gateStatus = "Available" AND gateMaintainenceStatus = "Enabled"''')
                first_available_gate = cursor.fetchone()

                # assign first available gate to flight
                cursor.execute ("""
                UPDATE api_flight
                SET flightGate = %s
                WHERE flightCode =%s
                """, (first_available_gate[1], str(i[1])))

                # change gate status
                cursor.execute ("""
                UPDATE api_gate
                SET gateStatus = %s
                WHERE gateNo =%s
                """, ("Occupied", first_available_gate[1]))

class BaggageCarousalAssignmentView(APIView):
    def get(self, request, format=None):
        cursor = connection.cursor()

        # get all flights
        cursor.execute(''' SELECT * FROM api_flight ''')
        all_flights = cursor.fetchall()
        # iterate throught flights
        for i in all_flights:
            # if baggage carousal is  not assigned
            if i[8] == 0:
                # get first available baggage carousal
                cursor.execute('''SELECT * FROM api_baggage WHERE baggageStatus = "Available" ''')

                first_available_baggage_carousal = cursor.fetchone()
                # assign first available baggage carousal to flight
                cursor.execute ("""
                UPDATE api_flight
                SET flightCarouselNo = %s
                WHERE flightCode =%s
                """, (first_available_baggage_carousal[1], str(i[1])))
                print('baggage carousal sql update done')

                # change gate status
                cursor.execute ("""
                UPDATE api_baggage
                SET baggageStatus = %s
                WHERE baggageCarouselNo =%s
                """, ("Unavailable", first_available_baggage_carousal[1]))
                
class GetAllFlights(generics.ListAPIView):

    serializer_class = FlightSerializer
    queryset = Flight.objects.all()

class GetArrivingFlights(generics.ListAPIView):

    serializer_class = FlightSerializer
    queryset = Flight.objects.filter(flightDestination="SFO")

class GetDepartingFlights(generics.ListAPIView):

    serializer_class = FlightSerializer
    queryset = Flight.objects.filter(flightSource="SFO")
        
class GetAllGates(generics.ListAPIView):

    serializer_class = GateSerializer
    queryset = Gate.objects.all()

