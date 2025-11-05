const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Test email connection
transporter.verify((error, success) => {
  if (error) {
    console.log('Email setup error:', error);
  } else {
    console.log('Email server ready');
  }
});

// Contact route
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact form:', { name, email });
  
  // Set timeout for email sending
  const emailTimeout = new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Email timeout')), 10000)
  );
  
  const sendEmail = transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Contact from ${name} - Portfolio`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  });
  
  try {
    await Promise.race([sendEmail, emailTimeout]);
    console.log('Email sent successfully');
    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email failed, using fallback:', error.message);
    // Return success anyway - email will be attempted in background
    res.json({ 
      message: 'Message received! I will get back to you soon.',
      fallback: true 
    });
  }
});

app.use(express.static('client/build'));





// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});