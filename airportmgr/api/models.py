from django.db import models

# Create your models here.
class Airport(models.Model):
    airportID = models.IntegerField(null= False, unique= True)
    airportName = models.CharField(max_length = 30, unique = True)
    airportState = models.CharField(max_length = 30, unique = True)
    airportCountry = models.CharField(max_length = 30, unique = True)

class Airline(models.Model):
    airlineID = models.CharField(max_length = 30, null = False, unique = True)
    airlineName = models.CharField(max_length = 30, null = False, unique = True)

class Flight(models.Model):
    flightCode = models.CharField(max_length = 30, null= False, unique = True)
    flightSource = models.CharField(max_length = 30)
    flightDestination = models.CharField(max_length = 30)
    flightSchedule = models.DateTimeField()
    # flightDeparture = models.DateTimeField()
    flightStatus = models.CharField(max_length = 30)
    flightType = models.CharField(max_length = 30)
    flightGate = models.CharField(max_length = 30, null= False)
    flightCarouselNo = models.IntegerField(null= False)

class Employee(models.Model):
    # employeeID = models.IntegerField(null= False, unique= True)
    employeeFirstName = models.CharField(max_length = 30, null = False)
    employeeLastName = models.CharField(max_length = 30, null = False)
    employeeEmail = models.CharField(max_length = 50, null = False, unique= True)
    employeeType = models.CharField(max_length = 30)
    password = models.CharField(max_length = 30, null = False, default=123456)

class Gate(models.Model):
    gateNo = models.CharField(max_length = 30, null= False, unique= True)
    gateStatus = models.CharField(max_length = 30)
    gateMaintainenceStatus = models.CharField(max_length = 30, null= False, default='Enable')
    terminalNo = models.IntegerField(null= False, default=1)

class Baggage(models.Model):
    baggageCarouselNo = models.IntegerField(null= False, unique= True, default=0)
    baggageStatus = models.CharField(max_length = 30)
