Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Davi')
  cy.get('#lastName').type('Andrade')
  cy.get('#email').type('davi.and1993@gmail.com')
  cy.get('#open-text-area').type('Test')
  cy.contains('button', 'Enviar').click()
})