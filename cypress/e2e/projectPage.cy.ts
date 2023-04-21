describe('Project Page', () => {
  it('should have only one list', () => {
    cy.visit('/projects');
    cy.get('main menu').should('have.length', 1);
  });
});

// describe('Project List', () => {
//   it('should only have one <a> in list', () => {
//     cy.visit('/projects');
//     cy.get('main menu')
//       .children('li')
//       .each(($listElement) => {
//         cy.wrap($listElement).children().should('have.length', 1).and('have.prop', 'tagName').and('eq', 'A');
//       });
//   });

//   it('should only have one <h3> in a tag', () => {
//     cy.visit('/projects');
//     cy.get('main menu')
//       .children('li')
//       .each(($a) => {
//         cy.wrap($a).children('a').children('h3').should('have.length', 1).and('have.prop', 'tagName').and('eq', 'H3');
//       });
//   });
// });
