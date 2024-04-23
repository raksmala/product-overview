describe("Main Flow", () => {
  it("open the page", () => {
    cy.viewport("macbook-16");
    cy.visit("/");

    for (let i = 1; i <= 4; i++) {
      cy.percySnapshot(`Click action ${i}`);
      cy.wait(3000);
      cy.get(".product-image.active").click();
    }
  });
});
