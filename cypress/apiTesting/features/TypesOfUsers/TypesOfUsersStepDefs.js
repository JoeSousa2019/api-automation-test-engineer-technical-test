import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I am on Playlist api user url', () => {
    cy.setBaseUrl().as('url');
});

When('request for {string} user is sent', (typeOfUser) => {
    cy.get('@url').then(baseUrl => {
        cy.request({
            url:`${baseUrl}${typeOfUser}`,
            method: 'GET',
            failOnStatusCode: false
        }).as('apiResponse')
    })
});

Then('the playlist api response should not include {string} with status code as {string}', (expectedResponse, statusCode) => {
    cy.get('@apiResponse').then(response => {
        const isPlaylistPresent = response.body.playlists.some(playlist => {
            return playlist.name.includes(expectedResponse);
        });
        cy.wrap(isPlaylistPresent).should('be.false');
        expect(response.status.toString()).to.equal(statusCode);
    });
});
 
Then('the playlist api response should include {string} with status code as {string}', (expectedResponse, statusCode) => {
    cy.get('@apiResponse').then(response => {
        const isPlaylistPresent = response.body.playlists.some(playlist => {
            return playlist.name.includes(expectedResponse);
        });
        cy.wrap(isPlaylistPresent).should('be.true');
        expect(response.status.toString()).to.equal(statusCode);
    });
});

When('request for api user without endpoint is sent', () => {
    cy.get('@url').then(baseUrl => {
        cy.request({
            url:`${baseUrl}`,
            method: 'GET',
            failOnStatusCode: false
        }).as('apiResponse')
    })
});

Then('the playlist api response should return status code {string} with message as {string}', (statusCode, errorMessage) =>{
    cy.get('@apiResponse').then(response =>{
        expect(response.status.toString()).to.equal(statusCode)
        expect(response.body.message).to.equal(errorMessage)
    }) 
});

When('a invalid request for endpoint is sent {string}', (invalidInput) => {
    cy.get('@url').then(baseUrl => {
        cy.request({
            url:`${baseUrl}${invalidInput}`,
            method: 'GET',
            failOnStatusCode: false
        }).as('apiResponse')
    })
});

Then('the playlist api response should return status code {string} and message as {string}', (statusCode, invalidErrorMessage) =>{
    cy.get('@apiResponse').then(response =>{
        expect(response.status.toString()).to.equal(statusCode)
        expect(response.body.messsage).to.equal(invalidErrorMessage)
    }) 
});






