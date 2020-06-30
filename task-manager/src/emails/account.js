const sgMail = require('@sendgrid/mail');
const sendgridAPIKey =
  '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';

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
  to: 'pkasprzycki@ibpm.pro',
  from: 'pkasprzycki@ibpm.pro',
  subject: 'test',
  text: 'test',
});
