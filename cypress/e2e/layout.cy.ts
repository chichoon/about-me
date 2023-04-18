describe('Header', () => {
  it('should show image', () => {
    cy.visit('http://localhost:3000');
    cy.get('header > img');
  });

  it('should contain mail, blog and GitHub link', () => {
    cy.visit('http://localhost:3000');

    cy.get('header > div > div > a')
      .eq(0)
      .should('have.attr', 'href')
      .and('match', /^mailto:/);
    cy.get('header > div > div > a').eq(1).should('have.attr', 'href').and('include', 'github.com');
    cy.get('header > div > div > a').eq(2).should('have.attr', 'href').and('include', 'blog');
  });

  it('should contain H1 tag that indicates name, Only 1 h1 tag should be shown', () => {
    cy.visit('http://localhost:3000');
    cy.get('header > div > div > h1').should('have.length', 1);
    cy.get('h1').should('have.length', 1);
  });

  it('should contain H1 tag that explains this person, Only 1 h2 tag should be shown', () => {
    cy.visit('http://localhost:3000');
    cy.get('header > div > h2').should('have.length', 1);
    cy.get('h2').should('have.length', 1);
  });
});

describe('Navigation Bar', () => {
  it('projects tab should navigate to /projects', () => {
    cy.visit('http://localhost:3000');
    cy.get('a[href*="projects"]').click();
    cy.url().should('include', 'projects');
  });

  it('footprints tab should navigate to /footprints', () => {
    cy.visit('http://localhost:3000');
    cy.get('a[href*="footprints"]').click();
    cy.url().should('include', 'footprints');
  });
});
