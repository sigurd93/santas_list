
# Intent, Guidelines & Expectations 
## Intent
The intent of this software is to have a way for the norwegian IT student-associations to have a registry of all companies they work with, and a databse of experiences with these companies. The reason a software solution like this is desirable is that it enables the organisations to better co-operate with companies from the industry.

## Use Guidelines
It is regarded as good practice for a student-association to check the registry every time they engage with a new company or person of contact. This is so the association can know what to expect when working with the new entity and can prepare to co-operate in an efficient manner.
Updating the registry after each event where an external company is involved benefits all member associations by having more data and the data being up to date. Updating the registry after each of the aforementioned events should therefore be regarded as standard practice and is encouraged of all associations.

## Expectations
These are expectations the student-associations have when dealing with companies:

-The company should pay within 2 weeks of the hosted event, unless otherwis is agreed upon in advance.

-The company should communicate effectively and in a timely manner with the student-association prior to, and during, the event.

-Representatives from the company should conduct themselves in a professional manner.

-Representatives from the company should be arrive on time and be prepared when the event is set to start.

## Rating Guidelines
The rating system is a star system ranging from 1-5 stars. A company's total score will be an average of all their event scores.
The star ratings should be given as follows:

5* - Great company to work with. Exceeded expectations. Here the event will recieve a positive mark, this will be visible on the company and person of contact's profile. You will be prompted to write an explanation.

4* - Met expectations. Created an engaging event.

3* - Met expectations. Less engaging event, or event with less relevant content.

2* - Did not meet expectations. Here the event will recieve a negative mark, this will be visible on the company and person of contact's profile. You will be prompted to write an explanation.

1* - Did not meet expectations. Here the event will recieve a severely negative mark, this will be visible on the company and person of contact's profile. You will be prompted to write an explanation.

## Example Situations/Explanations
5* situation: Company hosted a very engaging event, hosting a professionaly made CTF tournament. We were not surprised by this as they were clear in their communications.

2* situation: Company's payment was a month late.

Other examples that can result in a 2* review are: long response time while communicating(write typical response time in explanation), and arriving late(write how late in explanation), among other reasons.

1* situation: Company did not show up for event.

Other examples that can result in a 1* review are: not paying, representatives conducting themselves in a way that can be seen as harrassing others, and other breaches of contract, among other reasons of similar severity.


# Requirements
## Env variables for local testing
```
MONGO_DB=santa
MONGO_COLLECTION=List
MONGO_ADDRESS=localhost
MONGOPORT=27017
MONGO_USER=root
MONGO_PASS=example
```

## Start DB
```
docker compose up
```
