import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const sendMail = async (to, subject, html, text = '') => {

  try {

    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { name: 'CollegeBazaar', email: process.env.BREVO_SENDER_EMAIL },
        to: [{ email: to }],
        subject,
        htmlContent: html,
        textContent: text || undefined
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    );

    console.log('Email sent:', response.data.messageId);
    return response.data;

  } 
  catch (err) {
    console.error('Error sending email:', err.response?.data || err.message);
    throw err;
  }

};

export default sendMail;