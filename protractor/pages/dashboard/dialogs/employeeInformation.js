
// List of elements in Dashboard Page
module.exports = {
    employeeInformationLabel: element(by.css("input[formcontrolName = 'firstName']")),
    closeButton: element(by.css("span.pi-times")),
    firstNameTextbox: element(by.css("input[formcontrolName = 'firstName']")),
    lastNameTextbox: element(by.css("input[formcontrolName = 'lastName']")),
    genderCombobox: element(by.css("p-dropdown[formcontrolName = 'gender']")),
    birthDateTextbox: element(by.css("input[formcontrolName = 'birthDate']")),
    nationalityCombobox: element(by.css("p-dropdown[formcontrolName = 'nationality']")),
    addButton: element(by.css("button[ng-reflect-label = 'Add']")),
    updateButton: element(by.css("button[ng-reflect-label = 'Update']")),
    clearButton: element(by.css("button[ng-reflect-label = 'Clear']")),
}