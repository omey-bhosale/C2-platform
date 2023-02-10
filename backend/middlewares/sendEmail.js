const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
    var transporter = nodeMailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "9a081b189b3a81",
          pass: "f92981019feef9"
        }
      });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};