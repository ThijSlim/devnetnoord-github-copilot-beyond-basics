Feature: GetFlightById
    In order to retrieve flight information
    As a client of the flight API
    I want to get details of a flight by its ID

Scenario: Flight exists
    Given I have the ID 1 of an existing flight
    When I request flight details by this ID
    Then I should receive the flight details

Scenario: Flight does not exist
    Given I have the ID 9999 for a non-existent flight
    When I request flight details by this ID
    Then I should receive a not found response
