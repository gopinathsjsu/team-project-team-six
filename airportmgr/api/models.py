from django.db import models

# Create your models here.
class Airport(models.Model):
    airportID = models.IntegerField(null= False, unique= True)
    airportName = models.CharField(max_length = 30, unique = True)
    airportState = models.CharField(max_length = 30, unique = True)
    airportCountry = models.CharField(max_length = 30, unique = True)

class Airline(models.Model):
    airlineID = models.IntegerField(null= False, unique= True)
    airlineName = models.CharField(max_length = 30, unique = True)

class Flight(models.Model):
    flightCode = models.CharField(max_length = 30, null= False, unique = True)
    flightSource = models.CharField(max_length = 30, unique = True)
    flightDestination = models.CharField(max_length = 30, unique = True)
    flightArrival = models.DateTimeField()
    flightDeparture = models.DateField()
    flightStatus = models.CharField(max_length = 30)
    flightType = models.CharField(max_length = 30)
    flightNoOfStops = models.IntegerField()
    flightGate = models.IntegerField(null= False, unique = True)
    flightCarouselNo = models.IntegerField(null= False, unique = True)

class Employee(models.Model):
    employeeID = models.IntegerField(null= False, unique= True)
    employeeFirstName = models.CharField(max_length = 30, null = False)
    employeeLastName = models.CharField(max_length = 30, null = False)
    employeeEmail = models.CharField(max_length = 50, null = False)
    employeeType = models.CharField(max_length = 30)

class Gate(models.Model):
    gateNo = models.IntegerField(null= False, unique= True)
    gateStatus = models.CharField(max_length = 30)
    

class Baggage(models.Model):
    baggageCarouselNo = models.IntegerField(null= False, unique= True)
    baggageStatus = models.CharField(max_length = 30)
