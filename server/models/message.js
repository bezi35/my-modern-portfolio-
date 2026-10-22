import mongoose from 'mongoose';

// ወደ MongoDB የሚገባው መረጃ ቅርጽ
const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now // መልዕክቱ የተላከበት ቀንና ሰዓት
  }
});

const Message = mongoose.model('Message', messageSchema);
export default Message;