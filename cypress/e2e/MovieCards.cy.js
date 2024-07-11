describe('MovieCard Component', () => {
    beforeEach(() => {
      cy.fixture('movies').then((movies) => {
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
          statusCode: 200,
          body: movies
        });
      });
      cy.visit('http://localhost:3000/');
    });
  
    it('should navigate to the movie details when clicked', () => {
      cy.fixture('movie2').then((movie2) => {
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
          statusCode: 200,
          body: movie2
        });
  
        cy.get('.movie-card').first().click();
        cy.url().should('include', '/movies/436270');
        cy.get('.movie-title').should('contain.text', movie2.movie.title); 
      });
    });
  });
  
  describe('Movie Details Error Handling', () => {
    beforeEach(() => {
      cy.fixture('movies').then((movies) => {
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
          statusCode: 200,
          body: movies
        });
      });
      cy.visit('http://localhost:3000/');
    });
  
    it('should display error message if API fails', () => {
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
          statusCode: 500,
          body: { error: 'Internal Server Error' }
        });

        cy.get('.movie-card').first().click();
    
        cy.url().should('include', '/movies/436270');
    
        cy.contains('Whoops! We can\'t fetch the details for that movie. Please try again later!');
      });
    });
  
  describe('Should Return To Home Page', () => {
    beforeEach(() => {
      cy.fixture('movies').then((movies) => {
        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
          statusCode: 200,
          body: movies
        });
      });
      cy.visit('http://localhost:3000/');
    });
  
    it('should return to the home page when the back to list button is clicked', () => {
        cy.fixture('movie2').then((movie2) => {
            cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
                statusCode: 200,
                body: movie2
            });

            cy.get('.movie-card').first().click();
            cy.url().should('include', '/movies/436270');

            cy.fixture('movies').then((movies) => {
                cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/", {
                    statusCode: 200,
                    body: movies
                });
            });     
            cy.get('button').contains('Back to list').click();
            cy.url().should('include', 'http://localhost:3000/');
            cy.get('.movie-card').should('have.length', 10);
        });
    });
  });
  