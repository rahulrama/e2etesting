
Feature('googleGoogle');

Scenario('navigate to Google from Google', (I) => {
    I.amOnPage('www.google.co.uk');
    I.fillField('#lst-ib', 'google');
    I.click('Google Search');
    I.see('Welcome'); 
    // broken test on purpose - fix it!
});
