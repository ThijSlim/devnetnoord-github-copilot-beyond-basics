Feature: TakeFlight
    In order to manage flights
    As a flight controller
    I want to be able to take flights

Scenario: Taking a flight with sufficient fuel
    Given I have a flight ready for takeoff with id '1'
    When I take a flight with length '75'
    Then the flight should be successful
