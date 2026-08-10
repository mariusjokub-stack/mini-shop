describe("Puslapio atidarymas", () => {

    it("atidaro puslapį ir patikrina antraštę", () => {

        // 1. Atidaro puslapį
        cy.visit("cy.html");

        // 2. Patikrina, ar matoma antraštė
        cy.get("h1").should("be.visible");

        // 3. Patikrina antraštės tekstą
        cy.get("h1").should("have.text", "Mano puslapis");

    });

});