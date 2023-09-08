describe('Automated test for weather application', () => {
  it('Visits the app root url and test weather app', () => {
    cy.visit('/');
    cy.contains('div', 'You can also click a location on the map to view the weather forecast');
    cy.get('.vue-map').should('exist');
    cy.wait(2000);
    cy.get('.pac-target-input').clear()
      .type('Amsterdam');
      cy.get('li').eq(1).click({force: true})
    cy.wait(1000);
    cy.get('[data-test-id="temperature"]').invoke('text')
    .should('not.be.empty')
  });
})