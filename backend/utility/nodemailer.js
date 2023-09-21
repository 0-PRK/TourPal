try {
  "use strict";
  const nodemailer = require("nodemailer");

  module.exports.sendMail = async function sendMail(str, data) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: 'guidedtravels.spam@gmail.com',
        pass: 'gviryirbfkoracde',
      },
    });

    let Osubject, Ohtml;
    if (str === 'signup') {
      Osubject = `Thank you for signing ${data.name}`;
      Ohtml = `
        <h1>Welcome to GuidedTravels.com</h1>
        Hope you have a good time.
        Here are your details:
        Name - ${data.name}
        Email - ${data.email}
      `;
    } else if (str === "resetpassword") {
      Osubject = 'Reset Password';
      const resetPasswordLink = `${data.resetPasswordLink}`; // Get the reset password link
      Ohtml = `
        <h1>GuidedTravels.com</h1>
        Here is your Link to reset your password!
        <a href="${resetPasswordLink}">${resetPasswordLink}</a>
      `;
    }

    let info = await transporter.sendMail({
      from: '"Guided Travels" <guidedtravels.spam@gmail.com>',
      to: data.email,
      subject: Osubject,
      html: Ohtml,
    });

    console.log("Message sent: %s", info.messageId);
  };
} catch (error) {
  console.log(error);
}