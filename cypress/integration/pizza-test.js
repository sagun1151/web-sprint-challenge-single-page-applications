describe('Pizza Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const order = () => cy.get('button[id="order-button]');
    const name = () => cy.get('input[name=name]');
    const size = () => cy.get('input[name=size]');
    const bacon = () => cy.get('input[name=bacon]');
    const pepperoni = () => cy.get('input[name=pepperoni]');
    const ham = () => cy.get('input[name=ham]');
    const sausage = () => cy.get('input[name=sausage]');
    const onion = () => cy.get('input[name=onion]');
    const olives = () => cy.get('input[name=olives]');
    const tomato = () => cy.get('input[name=tomato]');
    const jalapeno = () => cy.get('input[name=jalapeno]');
    const special = () => cy.get('input[name=special]');

    it('make sure its working', () => {
        expect(2+2).to.equal(4);
    })

    it('its showing?', () => {
        order().should('exist');
        name().should('exist');
        size().should('exist');
        bacon().should('exist');
        pepperoni().should('exist');
        ham().should('exist');
        sausage().should('exist');
        onion().should('exist');
        olives().should('exist');
        tomato().should('exist');
        jalapeno().should('exist');
        special().should('exist');
    })
    


})