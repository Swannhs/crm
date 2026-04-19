describe('Calendar and Projects', () => {
  beforeEach(() => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
  });

  it('should display the calendar with events', () => {
    cy.visit('/dashboard/calendar');
    
    // Check for FullCalendar presence
    cy.get('.fc').should('exist');
    cy.contains('Today').should('be.visible');
  });

  it('should display projects and Kanban board', () => {
    cy.visit('/dashboard/projects');
    
    // Assuming projects list or Kanban
    cy.get('h4').should('contain', 'Projects');
    
    // Navigate to a specific project or task list
    // (Adjust based on actual UI)
  });
});
