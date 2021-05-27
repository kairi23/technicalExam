const DashboardPage = function () {
    // Assign page objects to DashboardPage
    this.mainScreen = require("./dashboard/mainScreen");
    this.dialogs = require("./dashboard/dialogs/employeeInformation");

    // Common methods
    this.selectGender = function (gender) {
        let genderComboboxLocator = "p-dropdown[formcontrolName = 'gender']";
        let genderComboboxButton = `${genderComboboxLocator} span.ui-dropdown-trigger-icon`;
        let genderComboboxContainer = `${genderComboboxLocator} div.ui-dropdown-panel`;

        element(by.css(genderComboboxButton)).click();
        expect(element(by.css(genderComboboxContainer)).isPresent()).toBe(true)
        element(by.css(`${genderComboboxContainer} p-dropdownitem li[aria-label = '${gender}']`)).click();
    }

    this.selectNationality = function (nationality) {
        let nationalityComboboxLocator = "p-dropdown[formcontrolName = 'nationality']";
        let nationalityComboboxButton = `${nationalityComboboxLocator} span.ui-dropdown-trigger-icon`;
        let nationalityComboboxContainer = `${nationalityComboboxLocator} div.ui-dropdown-panel`;

        element(by.css(nationalityComboboxButton)).click();
        expect(element(by.css(nationalityComboboxContainer)).isPresent()).toBe(true)
        element(by.css(`${nationalityComboboxContainer} p-dropdownitem li[aria-label = '${nationality}']`)).click();
    }

    this.setEmployeeInformation = async function (obj) {
        // First Name Field
        if (obj.firstName) {
            // Make sure that the field is empty before setting a value
            this.dialogs.firstNameTextbox.clear();
            this.dialogs.firstNameTextbox.sendKeys(obj.firstName);

            // Assert inserted value in the field
            expect(this.dialogs.firstNameTextbox.getAttribute("value")).toEqual(obj.firstName)
        }

        // Last Name Field
        if (obj.lastName) {
            // Make sure that the field is empty before setting a value
            this.dialogs.lastNameTextbox.clear();
            this.dialogs.lastNameTextbox.sendKeys(obj.lastName);

            // Assert inserted value in the field
            expect(this.dialogs.lastNameTextbox.getAttribute("value")).toEqual(obj.lastName)
        }

        // Gender Field
        if (obj.gender) {
            this.selectGender(obj.gender)
            // Assert inserted value in the field
            expect(element(by.css("p-dropdown[formcontrolName = 'gender'] input")).getAttribute("aria-label")).toEqual(obj.gender)
        }

        // Birth Date Field
        if (obj.birthDate) {
            // Make sure that the field is empty before setting a value
            this.dialogs.birthDateTextbox.clear();
            this.dialogs.birthDateTextbox.sendKeys(obj.birthDate);

            // Assert inserted value in the field
            expect(this.dialogs.birthDateTextbox.getAttribute("value")).toEqual(obj.birthDate)
        }

        // Nationality Field
        if (obj.nationality) {
            this.selectNationality(obj.nationality)
            // Assert inserted value in the field
            expect(element(by.css("p-dropdown[formcontrolName = 'nationality'] input")).getAttribute("aria-label")).toEqual(obj.nationality)
        }
    }

    this.createNewEmployee = function (obj) {
        // Open Employe Information Pane
        this.mainScreen.newEmployeeButton.click();
        browser.wait(this.dialogs.employeeInformationLabel.isPresent(), 5000, "Employee Information Pane is now visible.");

        // Set Employee Information
        this.setEmployeeInformation(obj)

        // Save Changes
        this.dialogs.addButton.click()

        expect(this.mainScreen.succesNotification.isPresent()).toBe(true)
        expect(this.mainScreen.succesNotification.getText()).toEqual('Success: Data has been added!')

    }

    this.verifyEmployeeRecord = function (obj, row) {
        let employeeListLocator = "p-table div.ui-table-wrapper"

        // First Name Column
        expect(element(by.css(`${employeeListLocator} tbody tr:nth-child(${row}) td:nth-child(1)`)).getText()).toEqual(obj.firstName)

        // Last Name Column
        expect(element(by.css(`${employeeListLocator} tbody tr:nth-child(${row}) td:nth-child(2)`)).getText()).toEqual(obj.lastName)

        // Gender Column
        expect(element(by.css(`${employeeListLocator} tbody tr:nth-child(${row}) td:nth-child(3)`)).getText()).toEqual(obj.gender)
    }

    this.updateEmployeeRecord = function (obj, row) {
        let employeeListLocator = "p-table div.ui-table-wrapper"

        element(by.css(`${employeeListLocator} tbody tr:nth-child(${row}) td:nth-child(4) button[ng-reflect-label= 'Edit']`)).click();
        browser.wait(this.dialogs.employeeInformationLabel.isPresent(), 5000, "Employee Information Pane is now visible.");

        // Set Employee Information
        this.setEmployeeInformation(obj)

        // Save Changes
        this.dialogs.updateButton.click()

        expect(this.mainScreen.succesNotification.isPresent()).toBe(true)
        expect(this.mainScreen.succesNotification.getText()).toEqual('Success: Data has been updated!')

    }

    this.deleteEmployeeRecord = function (row) {
        let employeeListLocator = "p-table div.ui-table-wrapper";
        let alert = browser.switchTo().alert();

        element(by.css(`${employeeListLocator} tbody tr:nth-child(${row}) td:nth-child(4) button[ng-reflect-label= 'Delete']`)).click();
        alert.accept();
    }



};

module.exports = new DashboardPage();