describe('Home Page', () => {
    beforeEach(() => {
        cy.fixture('movies').then((movies) => {

        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
          statusCode: 200,
          body: movies
        })
    })
        cy.visit('http://localhost:3000/')
      })
      
    it('should see the title of the application', () => {
        cy.get('h1').contains('Rancid Tomatillos')
    })
    it('should display a collection of movies', () => {
        cy.get('.movie-card').should('have.length', 10)
    })
    it('should display name of movie', () => {
        cy.get(':nth-child(1) > .movie-card-link > .movie-card > .movie-details').contains('Black Adam')
    })
})

describe('Home Page Error Handling', () => {
    it('should display error message if API fails', () => {
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
            statusCode: 500,
        })
        cy.visit('http://localhost:3000/')
        cy.contains('Whoops! Looks like the movies are taking a siesta. Try again later, when they\'re feeling more cooperative.')
    })

    it('should display a message to the user when no movies are available', () => {
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
            statusCode: 500,
            body: { movies: [] }
    })
        cy.visit('http://localhost:3000/')
        cy.contains('No movies available... ain\'t that weird?')
    })
})