const selector = (id: string) => {
  return `[data-test='${id}']`
}

describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/")

    cy.get("h1").contains("Movies")
    cy.get("h2").contains("OMDB Movie Search")

    const input = cy.get("input")
    input.should("have.value", "")
    input.type("XXXXX")

    cy.get(selector("heading-no-results")).contains("No results found")
    input.clear().type("lord of the rings")
    cy.get(selector("heading-result-count")).contains("Results")
    cy.get(selector("movie-card-10")).should("be.visible")

    const loadMoreButton = cy.get(selector("button-load-more"))
    loadMoreButton.click()
    cy.get(selector("movie-card-20")).should("be.visible")

    input.clear().type("avengers")
    cy.get(selector("movie-card-20")).should("not.be.exist")
  })
})
