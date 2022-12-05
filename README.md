# Airport Management System by Team-6

## Team Members:

- Sayali Nilangekar 
- Pratik Mali 
- Ashutosh Patil 
- Yashvi Desai 

### <a href="https://github.com/orgs/gopinathsjsu/projects/44/views/1">Project Board</a>

## Scrum Meeting:
The team followed a weekly status update and used to meet every Friday for a SCRUM meeting.

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
- We chose Django for backend as it is a python-based open-source web framework, which helped us to create database-driven websites and it provides great support for API development
- For frontend, we used react for faster page load and reload due to virtual DOM.
- We hosted our API on Amazon EC2 instance for scalability and availability.
- We also used auto-scaling and load balancing on AWS to handle incoming requests for the API.

