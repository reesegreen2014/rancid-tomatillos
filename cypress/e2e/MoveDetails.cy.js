describe('Movie Details page', () => {
    beforeEach(() => {
        cy.fixture('movies').then((movies) => {

        cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
          statusCode: 200,
          body: movies
        })
    })
        cy.visit('http://localhost:3000/')
      })
      
      it('should navigate to the movie details when clicked', () => {
        cy.fixture('movie2').then((movie2) => {
          cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
            statusCode: 200,
            body: movie2
          });
    
          cy.get('.movie-card').first().click();
          cy.url().should('include', '/movies/436270');
          cy.get('.movie-backdrop').should('exist')
          cy.get('.movie-info').should('exist')
          cy.get('.movie-title').should('contain.text', movie2.movie.title);
          cy.get('h3').should('exist')
          cy.get('.movie-info > :nth-child(3)').should('exist');
          cy.get('.movie-info > :nth-child(4)').should('exist');
          cy.get('.movie-info > :nth-child(5)').should('exist');
          cy.get('.movie-info > :nth-child(6)').should('exist');
          cy.get('.movie-info > :nth-child(7)').should('exist');
          cy.get('.movie-info > :nth-child(8)').should('exist')
        });
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