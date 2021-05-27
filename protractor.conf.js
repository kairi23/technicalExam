exports.config = {
    framework: "jasmine",
    directConnect: true,
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: [
                "incognito",
                "start-maximized",
                
            ]
        }
    },
    onPrepare: function () {
        const Reporter = require("jasmine-reporters");
        const HtmlReporter = require('protractor-jasmine2-screenshot-reporter')

        jasmine.getEnv().addReporter(new Reporter.JUnitXmlReporter({
            consolidateAll: true,
            savePath: './protractor/reports'
        }));

        jasmine.getEnv().addReporter(new HtmlReporter({
                dest: './protractor/reports',
                filename: 'my-report.html'
            })
        )
    }
}

