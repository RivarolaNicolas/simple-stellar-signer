/// <reference types="cypress" />
/// <reference types="@testing-library/cypress"/>

describe('wallets filter', () => {
    it('should show one wallet', () => {
        cy.visit('/connect?wallets=xbull');
        cy.get('.simple-signer-wallets').last().should('have.length', 1);
    });

    it('should show two wallets and their title', () => {
        cy.visit('/connect?wallets=xbull&wallets=rabet');
        cy.get('.simple-signer-wallets').children().should('have.length', 3);
    });

    it('should show three wallets and their title', () => {
        cy.visit('/connect?wallets=xbull&wallets=freighter&wallets=albedo');
        cy.get('.simple-signer-wallets').children().should('have.length', 4);
    });

    it('should show four wallets and their title', () => {
        cy.visit('/connect?wallets=xbull&wallets=freighter&wallets=albedo&wallets=rabet');
        cy.get('.simple-signer-wallets').children().should('have.length', 5);
    });

    it('should show five wallets and their title', () => {
        cy.visit('/connect?wallets=xbull&wallets=freighter&wallets=albedo&wallets=rabet&wallets=privateKey');
        cy.get('.simple-signer-wallets').children().should('have.length', 6);
    });

    it('should render one wallet if two or more are duplicates', () => {
        cy.visit('/connect?wallets=xbull&wallets=xbull');
        cy.get('.simple-signer-wallets').last().should('have.length', 1);
    });
});
