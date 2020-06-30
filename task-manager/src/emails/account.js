const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = '';

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: 'pkasprzycki@ibpm.pro',
  from: 'pkasprzycki@ibpm.pro',
  subject: 'test',
  text: 'test',
});
