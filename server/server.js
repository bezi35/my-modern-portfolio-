import dns from 'dns';
dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Message from './models/Message.js';

dotenv.config();

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const MONGO_URI = "mongodb+srv://bezizola8_db_user:Bezawite35@cluster0.qdmjeuj.mongodb.net/portfolio_db?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI)
  .then(() => console.log("🍃 MongoDB Atlas Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.get('/', (req, res) => {
  res.send("🚀 Server is Live!");
});

// 1. የተመዘገቡትን መልዕክቶች በሙሉ ለማየት
app.get('/api/messages', async (req, res) => {
  try {
    const allMessages = await Message.find().sort({ createdAt: -1 });
    res.json({
      count: allMessages.length,
      data: allMessages
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. አዲስ መልዕክት መቀበያ
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const newMessage = new Message({ name, email, subject, message });
    const saved = await newMessage.save();

    console.log("✅ ዳታቤዝ ውስጥ ገባ! ID:", saved._id);

    return res.status(200).json({
      success: true,
      message: "መልዕክትዎ በሰላም ደርሶኛል!"
    });
  } catch (error) {
    console.error("Save Error:", error);
    return res.status(500).json({ success: false, message: "Error" });
  }
});

app.listen(PORT, () => {
  console.log(`✨ Server running on http://localhost:${PORT}`);
});