# Notification System

A simple Node.js application demonstrating the **Factory Design Pattern** to send notifications via **Email**, **SMS**, or **Push Notifications**.

## Features
- Supports multiple notification types: Email, SMS, and Push Notifications.
- Centralized object creation using the **Factory Design Pattern**.
- Modular and extensible design.

---

## Requirements
- Node.js (v16 or higher)
- npm or yarn package manager

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vitkarYallappa/factory_design_pattern
   cd factory_design_pattern

## API Endpoints

### **Send Notification**
**POST** `/notifications/send`

#### **Request Body**
- `type` (string): The type of notification to send. Possible values:
  - `email`
  - `sms`
  - `push`
- `message` (string): The notification message to be sent.

#### **Example Request Body for Email Notification**
```json
{
  "type": "email",
  "message": "Hello via Email!"
}
    