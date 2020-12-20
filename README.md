# XTwilioSignatureData

Test how your code handles Twilio Webhooks. This plugin for Paw assists you in generating the  `X-Twilio-Signature` header by sorting the body/form data from your request and appending it to the request URL.

This does not yet apply the HMAC-SHA1 function to the data, so you will need to configure your headers in Paw to add the header.

This project is a work in progress and further documentation will be created soon.

## Links
https://www.twilio.com/docs/usage/security
https://github.com/scottswezey/Paw-XTwilioSignatureData