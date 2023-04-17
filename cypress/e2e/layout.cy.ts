describe('Header image', () => {
  it('should show image in header', () => {
    cy.visit('http://localhost:3000');
    cy.get('header > img');
  });
});

describe('Header icons', () => {
  it('should contain mail, blog and GitHub link', () => {
    cy.visit('http://localhost:3000');

    cy.get('header > div > div > a')
      .eq(0)
      .should('have.attr', 'href')
      .should('match', /^mailto:/);
    cy.get('header > div > div > a').eq(1).should('have.attr', 'href').should('include', 'github.com');
    cy.get('header > div > div > a').eq(2).should('have.attr', 'href').should('include', 'blog');
  });
});

describe('Link to Project tab', () => {
  it('should navigate to /projects', () => {
    cy.visit('http://localhost:3000');
    cy.get('a[href*="projects"]').click();
    cy.url().should('include', 'projects');
  });
});

describe('Link to Footprints tab', () => {
  it('should navigate to /footprints', () => {
    cy.visit('http://localhost:3000');
    cy.get('a[href*="footprints"]').click();
    cy.url().should('include', 'footprints');
  });
});
