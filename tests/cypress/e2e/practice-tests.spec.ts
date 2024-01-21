//
// TODO: Create 4 tests. All tests should be passing.
//
/**
 *
 * Create new task addAuthor and use it to add new author with the help of API.
 * Later use authorId to verify that new author indeed was added in the UI.
 *
 */
describe('[TEST-1] Assert new author have been added', () => {
  it('', () => {});
});

/**
 * Create a task to reset all the existing autors in the application.
 * Verify that autors also have been removed in the UI.
 *
 */
describe('[TEST-2] Remove authors from the UI', () => {
  it('', () => {});
});

/**
 * Use API to create new application event.
 * Assert that is also visible in the UI.
 *
 */
describe('[TEST-3] Create new application event', () => {
  it('', () => {});
});

/**
 * Create custom commands for adding new books.
 * Create a test to verify that command is actually working.
 */
describe('[TEST-4] Verify new book was added', () => {
  it('', () => {});
});

/**
 * Use custom command created in the 4th test to create new book.
 * Then use cy.interceptGql() custom command to verify that AddNewBookAndAuhor event was actually triggered.
 * In addition verify that response contains values that were inserted into the form.
 * Assert that created book is also present in the UI.
 *
 */
describe('[TEST-5]', () => {
  it('', () => {});
});
