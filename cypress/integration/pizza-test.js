describe('Pizza Test', () => {
    before(() => {
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

        it('filling out order form', () => {
            cy.contains('Order').click();

            name()
                .should('have.value', '')
                .type('sagun')
                .should('have.value', 'sagun');
            
            size().select('Medium');
            size().select('Small');
            size().select('Large');

            bacon().check();
            pepperoni().check().uncheck();
            ham().check().uncheck();
            sausage().check().uncheck();
            onion().check();
            olives().check().uncheck();
            tomato().check().uncheck();
            jalapeno().check().uncheck();

            special()
                .should('have.value', '')
                .type('leave at door')
                .should('have.value', 'leave at door');
            })    
        
        it('clicking order and making sure info is showing', () => {
            order().click();

            cy.contains('Name:').should('exist');
            cy.contains('Size:').should('exist');
            cy.contains('Toppings:').should('exist');
            cy.contains('Special Instructions:').should('exist');
        }) 
    })
})