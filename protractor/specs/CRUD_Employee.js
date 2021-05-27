const { updateEmployeeRecord } = require("../pages/dashboardPage");
const dashboardPage = require("../pages/dashboardPage");
const newEmployee = {
    firstName: "Clerk",
    lastName: "Kant",
    gender: "Secret",
    birthDate: "12/25/1900",
    nationality: "Spanish"
}
const updateEmployee = {
    firstName: "Clark",
    lastName: "Kent",
    gender: "Male",
    nationality: "English"
}
describe('Employee CRUD', function () {
    it('should be able to create a new employee record', async () => {
        browser.get('http://localhost:4200/dashboard');
        expect(browser.getTitle()).toEqual("AngularCrud")

        // Create new employee record
        dashboardPage.createNewEmployee(newEmployee);
    });

    it('should be able to verify(read) the newly created employee record', async () => {
        // Verify newly created employee record
        dashboardPage.verifyEmployeeRecord(newEmployee, 2)
    });

    it('should be able to update the newly created employee record', async () => {
        // Update employee record
        dashboardPage.updateEmployeeRecord(updateEmployee, 2);

    });

    it('should be able to verify(read) the updated employee record', async () => {
        // Verify updated employee record
        dashboardPage.verifyEmployeeRecord(updateEmployee, 2)
    });

    it('should be able to delete the newly created employee record', () => {
        // Delete added record
        dashboardPage.deleteEmployeeRecord(2)

    });
});