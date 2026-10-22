import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("🚀 Beza's Portfolio Backend Server is Running!");
});

// መልዕክት መቀበያ API
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log("\n=========================================");
  console.log("📬 አዲስ መልዕክት ደርሶሻል!");
  console.log(`👤 ስም: ${name}`);
  console.log(`📧 ኢሜይል: ${email}`);
  console.log(`📌 ርዕስ: ${subject}`);
  console.log(`💬 መልዕክት: ${message}`);
  console.log("=========================================\n");

  // ለ React ሁልጊዜ 200 (Success) መልስ ይሰጣል
  return res.status(200).json({
    success: true,
    message: "መልዕክትዎ በተሳካ ሁኔታ ተልኳል! እናመሰግናለን!"
  });
});

app.listen(PORT, () => {
  console.log(`✨ Server running on http://localhost:${PORT}`);
});