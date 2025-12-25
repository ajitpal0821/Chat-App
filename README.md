# Real-Time Chat Application

This project demonstrates the development of a real-time chat application using **Express** and **WebSockets**. While plain WebSockets can be used, this application leverages **Socket.IO**, a powerful wrapper around WebSockets that is easy to use and provides automatic fallback to XHR polling until a WebSocket connection is successfully established.

## 🚀 Features

* Real-time bidirectional messaging using **Socket.IO**
* Displays total number of active clients connected
* Send messages to all other employees (broadcast messaging)
* Typing indicator to see who is currently typing in real time

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Real-Time:** Socket.IO
* **Frontend:** HTML, CSS, JavaScript

## 📦 Installation

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
npm install
npm start
```

## ▶️ Usage

* Open `http://localhost:3000` in multiple browser tabs
* Start chatting in real time

## 📌 Architecture

* Express handles routing and server setup
* Socket.IO manages real-time WebSocket connections and events

## 📄 Resume Description

* Built a real-time chat application using Node.js, Express.js, and Socket.IO
* Implemented event-driven architecture for instant message delivery
* Managed multiple client connections with WebSockets
* Improved real-time communication performance and scalability

## 🔗 GitHub

Add your repository link here
