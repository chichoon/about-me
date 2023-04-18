describe('Link to Project tab', () => {
  it('should navigate to /projects', () => {
    cy.visit('/');
    cy.get('a[href*="projects"]').click();
    cy.url().should('include', 'projects');
  });
});

describe('Link to Footprints tab', () => {
  it('should navigate to /footprints', () => {
    cy.visit('/');
    cy.get('a[href*="footprints"]').click();
    cy.url().should('include', 'footprints');
  });
});
