const express = require('express')
const router = express.Router()
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

// server used to send send emails
const app = express()

const corsOptions = {
  // AWS Path
  origin: ['https://adrianccollier.com', 'https://www.adrianccollier.com'],
  // Local development path
  // origin: ['http://localhost:3000'],
  optionsSuccessStatus: 200,
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Content-Type,Authorization',
}

app.use(cors(corsOptions))
app.use(express.json())

app.use(express.static('/home/bitnami/htdocs'))
app.use('/', router)

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

contactEmail.verify((error) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Ready to Send')
  }
})

router.post('/contact', (req, res) => {
  console.log('Received data: ', req.body)

  const name = req.body.firstName + ' ' + req.body.lastName
  const email = req.body.email
  const message = req.body.message
  const phone = req.body.phone
  const mail = {
    from: name,
    to: process.env.EMAIL_USER,
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  }

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log('Email send error:', error)
      res.json({ code: 400, status: 'Error sending message', error: error })
    } else {
      console.log('Email sent successfully')
      res.json({ code: 200, status: 'Message Sent' })
    }
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
})

// Local development
// app.listen(5000, () => console.log('Server Listening'))

// Deployment
app.listen(5000, '0.0.0.0', () => console.log('Server listening on port 5000'))
