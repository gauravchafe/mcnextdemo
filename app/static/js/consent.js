const consentBanner = document.querySelector('#sfmc-consent-banner');
const acceptButton = document.querySelector('#sfmc-consent-banner-accept-button');
const declineButton = document.querySelector('#sfmc-consent-banner-decline-button');
const CONSENT_KEY = 'site_consent_status';

// Check localStorage
const savedConsent = localStorage.getItem(CONSENT_KEY);
if (savedConsent !== null) {
  consentBanner.style.display = 'none';
}

if (acceptButton) acceptButton.addEventListener('click', () => handleConsent('accepted'));
if (declineButton) declineButton.addEventListener('click', () => handleConsent('declined'));

function handleConsent(choice) {
  console.log('consent captured')
  localStorage.setItem('site_consent_status', choice);
  consentBanner.style.display = 'none';
}