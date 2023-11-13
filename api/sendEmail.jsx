const nodeMailer = require("nodemailer");

module.exports = async (req, res) => {
  const { name, number } = req.body;

  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "paolo_yasay@yahoo.com",
      pass: "100908Nanie",
    },
  });

  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
};
