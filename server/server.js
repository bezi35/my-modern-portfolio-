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


const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log("🍃 MongoDB Atlas (Porto) Connected Successfully!"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

app.get('/', (req, res) => {
  res.send("🚀 Server is Live!");
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    console.log("=========================================");
    console.log(`📬 አዲስ መልዕክት ደረሰ ከ: ${name} (${email})`);
    console.log(`💬 መልዕክት: ${message}`);

    const newMessage = new Message({ name, email, subject, message });
    const saved = await newMessage.save();

    console.log("✅ ዳታቤዝ ውስጥ ገባ! ID:", saved._id);
    console.log("=========================================\n");

    return res.status(200).json({
      success: true,
      message: "መልዕክትዎ በሰላም ደርሶኛል! እናመሰግናለን!"
    });

  } catch (error) {
    console.error("Save Error:", error);
    return res.status(500).json({ success: false, message: "Error" });
  }
});

app.listen(PORT, () => {
  console.log(`✨ Server running on http://localhost:${PORT}`);
});