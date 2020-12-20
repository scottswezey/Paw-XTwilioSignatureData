var XTwilioSignatureData = function () {

  this.evaluate = function (context) {
    var req = context.getCurrentRequest();
    var data = req.body.split('&').map(entry => entry.split('=').join('')).sort().join('');

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