import fsExtra from 'fs-extra';
import allure from 'allure-commandline'
import allureReport from '@wdio/allure-reporter'

export const config = {
    runner: 'local',
    port: 4723,
    specs: [
    ],
    suites: {
        // npx wdio ./config/wdio.conf.mjs --suite xxxx
        login: [
            "../scenario/login.feature"
        ],
    },
    maxInstances: 1,
    capabilities: [{
        browserName: "chrome",
        browserVersion: "latest",
        acceptInsecureCerts: true,
        "goog:loggingPrefs": {
        performance: "ALL",
        },
        "goog:chromeOptions": {
        args: [
            // "--headless=new",
            "--disable-gpu",
            "--disable-extensions",
            "--no-sandbox",
            "--disable-dev-shm-usage",
            "--remote-debugging-port=9222",
            "--window-size=1920,1080",
            "--force-device-scale-factor=1",
        ],
        },
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: process.env.URL,
    waitforTimeout: 20000,
    connectionRetryTimeout: 200000,
    connectionRetryCount: 3,
    services: ["chromedriver"],
    framework: 'cucumber',
    reporters: ['spec',
        [
            'allure', {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
                useCucumberStepReporter: true
            }
        ]
    ],

    cucumberOpts: {
        require: [
            './step-definitions/**/*.mjs',
        ],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        timeout: 30000,
        ignoreUndefinedDefinitions: false
    },

    onPrepare: function (config, capabilities) {
        fsExtra.removeSync('./reports');
        if (!fsExtra.existsSync('./reports')) {
            fsExtra.mkdirSync('./reports');
        };
        fsExtra.removeSync('./allure-results');
        fsExtra.removeSync('./allure-report');
    },
    
    onWorkerStart: function (cid, caps, specs, args, execArgv) {
    },
    
    onWorkerEnd: function (cid, exitCode, specs, retries) {
    },
    
    beforeSession: function (config, capabilities, specs) {
    },
    
    before: function (capabilities, specs, browser) {
    },
    
    beforeSuite: function (suite) {
    },
    
    beforeHook: function (test, context, hookName) {
    },
    
    afterHook: function (test, context, { error, result, duration, passed, retries }, hookName) {
    },
   
    beforeTest: function (test, context) {
    },
    
    beforeCommand: function (commandName, args) {
    },
    
    afterCommand: function (commandName, args, result, error) {
    },
    
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
    },
    
    afterSuite: function (suite) {
    },
    
    after: function (result, capabilities, specs) {
    },
    
    afterSession: function (config, capabilities, specs) {
    },
    
    onComplete: async function (exitCode, config, capabilities, results) {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean', '-o', 'allure-report'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                10000)
 
            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)
 
                if (exitCode !== 0) {
                    return reject(reportError)
                }
 
                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    
    onReload: function(oldSessionId, newSessionId) {
    },
    
    beforeFeature: function (uri, feature) {
    },
    
    beforeScenario: function (world, context) {
    },
    
    beforeStep: function (step, scenario, context) {
    },
    
    afterStep: async function (step, scenario, result, context) {
        const screenshot = await browser.saveScreenshot(`${"./reports"}/${step.text}.png`);
        allureReport.addAttachment('Screenshot', screenshot);
    },
    
    afterScenario: function (world, result, context) {
    },
    
    afterFeature: function (uri, feature) {
    },
    
}