const nodemailer = require('nodemailer'),
  path = require('path')

const controller = {
  index: (req, res) => {
    res.render('index')
  },
  mailSender: (req, res) => {
    let formData = {
      fullname: req.body.fullname,
      email: req.body.email,
      comments: req.body.comments,
    }

    const sender = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    })

    const emailOpts = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Mensaje de ${formData.fullname}`,
      text: `${formData.comments} \n ${formData.email} \n ${formData.fullname}`,
    }

    sender.sendMail(emailOpts, (error, info) => {
      if (error) {
        console.log(error)
      } else {
        console.log('Enviado correctamente')
        return res.redirect('/')
      }
    })
  },
  downloadCv: (req, res) => {
    const file = path.resolve(__dirname, '../../public/cv/Sergio-Gabriel-MaquedaCV-FullStackDevJr.pdf')

    return res.download(file)
  },
}

module.exports = controller
