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
  try {
    const { name, email, message } = req.body;
    console.log('Received contact form:', { name, email });
    
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact from ${name} - Portfolio`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Sent from your portfolio website</em></p>
      `
    };
    
    console.log('Sending email...');
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email error:', error.message);
    res.status(500).json({ error: 'Failed to send message: ' + error.message });
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