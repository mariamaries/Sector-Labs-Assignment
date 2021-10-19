Feature: Bayut search test

  Scenario Outline: Testing that the search page displays the correct results

    Given I am on the search page
    When I search with <location>
    Then I should see only places in <location>

    Examples:
      | location     |
      | Dubai Marina |
