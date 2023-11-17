import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am free user', () => {
    //adding free user account id
});

When('request for free user is sent', () => {
    cy.request({
        url: 'https://a8e38tulbj.execute-api.eu-west-2.amazonaws.com/api/playlists/free',
        method: 'GET'
    }).as('apiResponse')
});

Then('the playlist api response should not include Premium with satus code as {string}', (statusCode) => {
    cy.get('@apiResponse').then(response =>{
        cy.wrap(response.body.playlists[1].name).should('not.include', 'Premium')
        expect(response.status.toString()).to.equal(statusCode);
    })
});

Given('I am premium user', () => {
    //adding Premium user account id
});
    
When('request for premium user is sent', () => {
    cy.request({
        url: 'https://a8e38tulbj.execute-api.eu-west-2.amazonaws.com/api/playlists/premium',
        method: 'GET'
    }).as('apiResponse')
});
    
Then('the playlist api response should include {string} with status code as {string}', (expectedResponse, statusCode) => {
    cy.get('@apiResponse').then(response =>{
        cy.wrap(response.body.playlists[1].name).should('include', expectedResponse)
        expect(response.status.toString()).to.equal(statusCode);    
    })
});

Given('I am other user type', () =>{
    //adding Premium user account id
});

When('request for other user type is sent', () =>{
    cy.request({
        url: 'https://a8e38tulbj.execute-api.eu-west-2.amazonaws.com/api/playlists/plus',
        method: 'GET',
        failOnStatusCode: false
    }).as('apiResponse')
});

Then('the playlist api response should return status code {string} and message of unknown user', (statusCode) =>{
    cy.get('@apiResponse').then(response =>{
        console.log(response)
        console.log(response.status)
        expect(response.status.toString()).to.equal(statusCode)
        expect(response.body.messsage).to.equal('Unknown user type')
    }) 
});






