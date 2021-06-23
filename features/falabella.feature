Feature: Using Testcafe for Falabella Retail Test

  I want to buy safety boots from Falabella Chile Website

@active
  Scenario: : Searching for safety boots in Falabella Chile
    Given 1 I navigate to Falabella Chile webpage
    When 2  I go to Categorias then Zapatos then Zapatos de Seguridad
    Then 3 I filter search for Botas
    Then 4 I select a Product and Shoes Size
    Then 5 I click on Agregar al Carro
    Then 6 Increase the amount to four products using the plus button
    Then 7 Click on Ver Bolsa de Compras to see the detail

