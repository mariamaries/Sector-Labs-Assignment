Feature: Bayut popular searches test

  Scenario: Testing that all of the links under Dubai Apartments in the popular section work properly

    Given I am on under the popular section
    When I look for Dubai apartments
    Then All the links should lead to a correct search page
