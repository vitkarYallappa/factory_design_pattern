class EmailNotification {
    send(message) {
      console.log(`Sending Email: ${message}`);
    }
  }
  
  // notifications/smsNotification.js
  class SMSNotification {
    send(message) {
      console.log(`Sending SMS: ${message}`);
    }
  }
  
  // notifications/pushNotification.js
  class PushNotification {
    send(message) {
      console.log(`Sending Push Notification: ${message}`);
    }
  }
  
  module.exports = { EmailNotification, SMSNotification, PushNotification };
  