Feature: Wholesale Customer Pricing

  Scenario: Successfully log in with wholesale credentials
    Given I am on the login page
    When I login with username "Wholesale" and password "wholesale1234#"
    Then I should be logged in successfully

  Scenario: Verify wholesale price on product listing page
    Given I am logged in as a wholesale customer
    When I navigate to the shop page
    Then I should see products listed with wholesale prices

  Scenario: Add product to the cart and verify wholesale price
    Given I am logged in as a wholesale customer
    When I add a product to the cart
    Then the cart should display the product with the wholesale price

  Scenario: Verify wholesale price on checkout page
    Given I am logged in as a wholesale customer
    When I proceed to the checkout page
    Then I should see the correct wholesale price displayed on the checkout page