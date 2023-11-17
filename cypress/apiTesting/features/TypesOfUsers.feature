Feature: Different types of users on video streaming platform

Scenario: Playlist api for free user account should not see premium content
Given I am free user
When request for free user is sent
Then the playlist api response should not include Premium with satus code as "200"


Scenario: Playlist api for premium user account should see premium content
Given I am premium user
When request for premium user is sent
Then the playlist api response should include "Premium" with status code as "200"

Scenario: Any other user type, the playlist api response should return 400 with a message unknown user
Given I am other user type
When request for other user type is sent
Then the playlist api response should return status code "400" and message of unknown user


