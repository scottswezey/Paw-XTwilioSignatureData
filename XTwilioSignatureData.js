var XTwilioSignatureData = function () {

  this.evaluate = function (context) {
    const req = context.getCurrentRequest();
    const data = req.body.split('&').map(param =>
      param.split('=').map(val =>
        decodeURIComponent(val.replace(/\+/g, " "))
      ).join('')
    ).sort().join('');

    return req.url.concat('', data);
  }

  this.title = function (context) {
    return "X-Twilio-Signature-Data";
  }

  this.text = function (context) {
    return ""
  }
}

XTwilioSignatureData.identifier = "com.scottswezey.PawExtensions.XTwilioSignatureData";
XTwilioSignatureData.title = "X-Twilio-Signature-Data"
XTwilioSignatureData.help = "https://github.com/scottswezey/Paw-XTwilioSignatureData"

registerDynamicValueClass(XTwilioSignatureData)