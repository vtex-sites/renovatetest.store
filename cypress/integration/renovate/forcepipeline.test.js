describe('Test', () => {
  it('Breaks pipeline', () => {
    cy.visit('/')
    expect(true).to.eq(false)
  })
})
