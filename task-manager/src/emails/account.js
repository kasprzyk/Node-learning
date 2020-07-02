const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = '';

sgMail.setApiKey(sendgridAPIKey);

// sgMail.send({
//   to: 'pkasprzycki@ibpm.pro',
//   from: 'pkasprzycki@ibpm.pro',
//   subject: 'test',
//   text: 'test',
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'pkasprzycki@ibpm.pro',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}`,
  });
};

module.exports = {
  sendWelcomeEmail,
};
