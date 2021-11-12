describe('Pizza Test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('make sure its working', () => {
        expect(2+2).to.equal(4);
    })


})