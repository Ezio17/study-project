/// <reference types="cypress" />

describe('Counter Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('відображає початкове значення count', () => {
    cy.get('[data-test=counter-value]').should('have.text', '0');
  });

  it('збільшує count при кліку на кнопку', () => {
    cy.get('[data-test=counter-add]').should('be.visible');

    cy.wait(500); // HACK: тимчасове рішення, є проблема з гідрацією.

    cy.get('[data-test=counter-add]').click();
    cy.get('[data-test=counter-value]').should('contain', '1');

    cy.get('[data-test=counter-add]').click();
    cy.get('[data-test=counter-value]').should('have.text', '2');
  });
});
