const express = require('express');
const NotificationFactory = require('../factories/notificationFactory');

const router = express.Router();

router.post('/send', (req, res) => {
  const { type, message } = req.body;

  try {
    // Create the appropriate notification type using the factory
    const notification = NotificationFactory.createNotification(type);
    notification.send(message);
    res.status(200).json({ success: true, message: 'Notification sent' });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
