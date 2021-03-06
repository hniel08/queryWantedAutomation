var inputCommands = {
    inputDriversLicense: function () {
        this
            .waitForElementPresent('@tab', 5000)
            .clickText('Open Menu')
            .waitForElementVisible('@enterPage')
            .clickText('Enter Wanted')
            .setValue('@dLicense', input)
            .click('@submit')
        //I get an error that this is not clickable. It is...it just won't submit it since the fields aren't filled out correct. It's HAS to be clicked to get error message...
        this.expect.element('@error').to.be.present
    },
  inputFields: function(fields) {
        if (fields.header) {
            this
                .setValue('@header', fields.header)
        }
        if (fields.mke) {
            this
                .setValue('@mke', fields.mke)
        }
        if (fields.ori) {
            this
                .setValue('@ori', fields.ori)
        }
        if (fields.name) {
            this
                .setValue('@name', fields.name)
        }
        if (fields.sex) {
            this
                .setValue('@sex', fields.sex)
        }
        if (fields.race) {
            this
                .setValue('@race', fields.race)
        }
        if (fields.height) {
            this
                .setValue('@height', fields.height)
        }
        if (fields.weight) {
            this
                .setValue('@weight', fields.weight)
        }
        if (fields.hair) {
            this
                .setValue('@hair', fields.hair)
        }
        if (fields.offense) {
            this
                .setValue('@offense', fields.offense)
        }
        if (fields.dateWarrant) {
            this
                .setValue('@dateWarrant', fields.dateWarrant)
        }
        return this
    } 
}
var enterWantedCommands = {
    //Click by text
    clickText: function (text) {
        this.api.useXpath()
        this.click(`//*[text()="${text}"]`)
        this.api.useCss()

        return this
    },
}

module.exports = {
    url: 'http://localhost:3000/#/',
    commands: [inputCommands, enterWantedCommands],
    elements: {
        menu: 'div[class=bm-menu]',
        tab: 'div[class=bm-burger-button]',
        //different pages in the tab
        homePage: 'p[name=homeOption]',
        enterPage: 'p[name=enterOption]',
        modifyPage: 'p[name=modifyOption]',
        cancelPage: 'p[name=cancelOption]',
        //Enter Wanted fields
        header: 'input[name=hdrInput]',
        mke: 'input[name=mkeInput]',
        ori: 'input[name=oriInput]',
        name: 'input[name=namInput]',
        sex: 'input[name=sexInput]',
        //There are other inputs in sex
        race: 'input[name=racInput]',
        //there are other inputs in race
        height: 'input[name=hgtInput]',
        weight: 'input[name=wgtInput]',
        hair: 'input[name=haiInput]',
        offense: 'input[name=offInput]',
        dateWarrant: 'input[name=dowInput]',
        //Drivers License
        dLicense: 'input[name=olnInput]',
        dlState: 'input[name=olsInput]',
        dlDate: 'input[name=oldInput]',

        //buttons
        submit: 'button[id=saveBtn]',
        clear: 'button[id=clearBtn]',
        //message
        query: 'span[name=queryBody]',
        validMessage: 'h4[id=validHeader]',
        error: 'ul[id=errorList]',
    },
}