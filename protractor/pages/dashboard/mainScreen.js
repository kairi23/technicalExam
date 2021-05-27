// List of elements in Dashboard Page
module.exports = {
    applicationLabel: element(by.css("app-header a.logo")),
    welcomeLabel: element(by.css("div.ui-g.ui-fluid:nth-child(2) h2")),
    employeeListLabel: element(by.css("div.ui-g.ui-fluid:nth-child(2) h4")),
    newEmployeeButton : element(by.css("button#new-employee")),
    employeeGrid: element(by.css("p-table div.ui-table-wrapper")),
    succesNotification: element(by.css("div.ui-messages-success"))


}