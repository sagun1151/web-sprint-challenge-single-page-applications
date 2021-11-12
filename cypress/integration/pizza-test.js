describe('Pizza Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const order = () => cy.get('button[id="order-button"]');
    const name = () => cy.get('input[name=name]');
    const size = () => cy.get('select[name=size]');
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
        cy.contains('Order').click();
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
        order().should('exist');
    })

    describe('testing order form', () => {
        it('filling out and submitting form', () => {
            cy.contains('Order').click();

            name()
                .should('have.value', '')
                .type('sagun')
                .should('have.value', 'sagun');
            
            size().select('Medium');
            size().select('Small');
            size().select('Large');

            bacon().check();
            pepperoni().check().check();
            ham().check().check();
            sausage().check().check();
            onion().check();
            olives().check().check();
            tomato().check().check();
            jalapeno().check();

            special()
                .should('have.value', '')
                .type('leave at door')
                .should('have.value', 'leave at door');
            
            order().click();
        })
    })
    


})