from django.db import models

# Create your models here.
class Airport(models.Model):
    airport_ID = models.IntegerField(null= False, unique= True)
    airport_name = models.CharField(max_length = 30, unique = True)
    airport_state = models.CharField(max_length = 30, unique = True)
    airport_country = models.CharField(max_length = 30, unique = True)

class Airline(models.Model):
    airline_ID = models.IntegerField(null= False, unique= True)
    airline_name = models.CharField(max_length = 30, unique = True)

class Flight(models.Model):
    flight_code = models.CharField(null= False, unique = True)
    flight_source = models.CharField(max_length = 30, unique = True)
    flight_destination = models.CharField(max_length = 30, unique = True)
    flight_arrival = models.DateTimeField()
    flight_departure = models.DateField()
    flight_status = models.CharField()
    flight_type = models.CharField()
    flight_layovertime = models.CharField()
    flight_no_of_stops = models.IntegerField()
    flight_gate = models.IntegerField(null= False, unique = True)
    flight_carousal_no = models.IntegerField(null= False, unique = True)

class Passenger(models.Model):
    passenger_ID = models.IntegerField(null= False, unique= True)
    passenger_passport_no = models.IntegerField(null= False, unique= True)
    passenger_first_name = models.CharField(null= False)
    passenger_last_name = models.CharField(null= False)
    passenger_gender = models.CharField(null= False)
    passenger_age = models.IntegerField()
    passenger_phone = models.IntegerField()


class Employee(models.Model):
    employee_ID = models.IntegerField(null= False, unique= True)
    employee_SSN_no = models.IntegerField(null= False, unique= True)
    employee_first_name = models.CharField(null= False)
    employee_last_name = models.CharField(null= False)
    employee_gender = models.CharField(null= False)
    employee_age = models.IntegerField()
    employee_phone = models.IntegerField()
    employee_designation = models.CharField()
    employee_type = models.CharField()

class Gate(models.Model):
    gate_no = models.IntegerField(null= False, unique= True)
    gate_status = models.CharField()
    

class Baggage(models.Model):
    baggage_carousal_no = models.IntegerField(null= False, unique= True)
    baggage_status = models.CharField()
