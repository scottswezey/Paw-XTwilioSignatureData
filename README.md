# XTwilioSignatureData (Version 0.0.1)

This extension for [Paw](https://paw.cloud) assists you in generating the  `X-Twilio-Signature` header by sorting the body/form data from your request and appending it to the request URL.

## To install
1. Download this project to your computer. You can retain git data for easy updates. https://github.com/scottswezey/Paw-XTwilioSignatureData
1. Open Paw, then Preferences, then the Extensions tab.
1. Click the button to "Open Extensions Directory" found near the bottom of the page.
1. Drag the entire `com.scottswezey.PawExtensions.XTwilioSignatureData` folder into the Paw `extensions` folder.
1. You may need to press the "Reload Installed Extensions" button in the Paw Extension Preferences.
1. In the future, this may be released and published in the Paw Extension website. For now you will need to redownload for updates, or make use of git.

## To use this project
1. In Paw, select the Headers tab in a request.
1. Add a new header with the name `X-Twilio-Signature`.
1. In the header value, choose `HMAC-SHA1`. The input will be `X-Twilio-Signature-Data`, the key should be your Twilio `AuthToken` or a subsitute used for testing webhooks. Be wary of using your actual Twilio production credentials.
1. Leave Algorithm set to `HMAC-SHA1` and Encoding set to `Base64`
1. Preview the request to ensure the signature is added.

## Relevant Twilio Docs
* https://www.twilio.com/docs/usage/security#validating-requests
* https://www.twilio.com/docs/usage/webhooks/webhooks-faq
* https://www.twilio.com/docs/sms/twiml#twilios-request-to-your-application

## Contributing
* Issues, discussions, and pull requests are welcome on [GitHub](https://github.com/scottswezey/Paw-XTwilioSignatureData).
* Please open a discussion or issue to discuss major changes. While contributions are generally welcome, it's best to ensure the change will be accepted into the project before investing much time.
* This project is versioned using the [SEMVER 2.0.0 rules](https://semver.org/).

## Author
Scott Swezey ([GitHub](https://github.com/scottswezey))

## License
This project and all contributions are MIT licensed. See `LICENSE` for further details.