const {
    EmailNotification,
    SMSNotification,
    PushNotification,
  } = require('../notifications/emailNotification');
  
  class NotificationFactory {
    static createNotification(type) {
      switch (type) {
        case 'email':
          return new EmailNotification();
        case 'sms':
          return new SMSNotification();
        case 'push':
          return new PushNotification();
        default:
          throw new Error('Invalid notification type');
      }
    }
  }
  
  module.exports = NotificationFactory;
  