Feature: LightningStrike
    In order to manage flights
    As a flight controller
    I want to be able to recover from a lightning strike

Scenario: Recovering from a lightning strike
    Given I have a flight with id '1'
    When the flight is struck by lightning
    Then the response should be 'Recovers from lightning strike.'