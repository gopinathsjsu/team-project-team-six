# Airport Management System by Team-6

## Team Members:

- Sayali Nilangekar 
- Pratik Mali 
- Ashutosh Patil 
- Yashvi Desai 

## Project Board
https://github.com/orgs/gopinathsjsu/projects/44/views/1

## Scrum Meeting:
The team followed a weekly status update and used to meet every Wednesday for a SCRUM meeting.

## Sprint journal:
https://docs.google.com/document/d/128gPWTqZ3xhiH20bWj2-MMGFBszZ3Ll1Eubz9FEg3hQ/edit?usp=sharing

## Sprint Sheet:
https://docs.google.com/spreadsheets/d/1fWvcFX3TMqRTKFlGgInmzyujm_t8z8VO93hP89LGAzo/edit?usp=sharing

## TECH STACK USED:

- Frontend: ReactJS
- Backend: Python 
- Database: MySQL
- REST API: Django REST Framework
- Cloud: AWS EC2

## XP Core Values

- **_Communication_** : We conducted meetings every week in-person to discuss crucial aspects of the project by collaborating and communicating with each other.
- **_Feedback_** : Team members delivered software frequently, got feedback about it, and refractored the code to make improvements for working code and fix bugs.

## Architecture Diagram

![image](https://user-images.githubusercontent.com/52251846/197302864-875ff925-d888-47b9-b1a1-cc4b1f4d2ff9.png)

## Component Diagram
https://drive.google.com/file/d/1eIZwghM9fHB9WN_4RD6azjmsIc6OJ-jr/view?usp=sharing

## Class Diagram
![Class diagram](https://user-images.githubusercontent.com/52251846/205582523-cfd1bc46-0124-44af-a7eb-31c9accd8abe.png)

## FIGMA designs
https://www.figma.com/file/cX7TVZKSNTl7LzWanBf8Xi/Airport-Manager-CMPE-202?node-id=512%3A2&t=xopzEysoaYUbcegs-0

## Feature Set
###### Airline Employee
* Register to the application
* Login to the application
* Add new flight imformation
* Update existing flight information
###### Airport Employee
* Register to the application
* Login to the application
* View all the gates' status
* Enable/Disable a gate for maintenance
* Assign gates to flights
* Assign baggage carousel to flights
###### Passenger
* View flight information

## Design decisions
- We wanted to opt for a simple and minimalistic design for UI to focus on the functionality.
- We hosted our MYSQL on AWS RDS. We chose mySQl cause we wanted to enforce the relationships between entities and as most of the data was structured.
- We chose Django for backend as it is a python-based open-source web framework, which helped us to create database-driven websites and it provides great support for API development.
- Django REST framework (DRF) is a powerful and flexible toolkit for building Web APIs. It's main benefit is that it makes serialization much easier
- ReactJs has a modular structure which helps in develop, manage, update and scale application easily.
- React JS makes testing and debugging easier due to clear defined structure.
- The UI components can be broken down and be reused again and again.
- AWS EC2 is inexpensive where there is free-tier available for select types of instances.
- Amazon EC2 offers a highly reliable environment.
- Using a load balancer automoatically scales instances up or down to distribute incoming requests for the API according to the traffic.

