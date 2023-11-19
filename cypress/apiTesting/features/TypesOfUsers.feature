Feature: Different types of users on video streaming platform

Background: 
Given I am on Playlist api user url

Scenario: Playlist api for free user account should not see premium content
When request for "free" user is sent
Then the playlist api response should not include "Premium" with status code as "200"

Scenario: Playlist api for premium user account should see premium content
When request for "premium" user is sent
Then the playlist api response should include "Premium" with status code as "200"

Scenario: Playlist api response for missing endpoint should return 403
When request for api user without endpoint is sent
Then the playlist api response should return status code "403" with message as "Missing Authentication Token"

Scenario Outline: Any user type where the playlist api is invalid should return 400 with a message unknown user
When a invalid request for endpoint is sent "<input>"
Then the playlist api response should return status code "400" and message as "Unknown user type"
Examples:
    | input   |
    | other   |
    | fre     |
    | premiu  |

