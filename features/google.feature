Feature: Testcafe-Cucumber Demo para Interviews

  I want to verify suggested dropdowns in google search
@active
  Scenario Outline: Searching on Google Page and verify dropdown
    Given I go to Google home page
    When I am typing my search request "<inputSearch>" on Google
    Then I verify the suggested search in the "<suggestedSearch>" list

    Examples:
    | inputSearch                             |suggestedSearch |
    | que es un chiguire                      | que es un chiguire |
    | porque el capibara es lo mejor del mundo | que tipo de animal es un chiguire |

