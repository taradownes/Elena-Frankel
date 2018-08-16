const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");
const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



app.use(express.static(__dirname));
// app.use("/public", express.static(__dirname, "public"));


//Routes
app.get("/", function(req, res){
	res.render("index");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/properties", function(req, res){
    res.render("properties");
});

app.get("/contact", function(req, res){
	res.render('contact');
});

app.post("/contact", function(req, res){
	
	const output = `
	<h2>You have a New Contact Request</h2>
	<h3> Contact Details:</h3>
	<ul>
		<li>Name: ${req.body.name}</li>
		<li>Email: ${req.body.email}</li>
	</ul>
	<h3>Message:</h3>
	<p>${req.body.message}</p>

	`
	 // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'downeswebdesigns@gmail.com', // generated ethereal user
            pass: 'Superman_1' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Website Contact" <tmdownes4@gmail.com>', // sender address
        to: 'elena@elenafrankel.com', // list of receivers
        subject: 'Contact from website', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...  
   	res.render('contact', {msg: "Thank you for your message! I will get back to you as soon as possible!"});

    });
});


// app.listen(process.env.PORT, process.env.IP, function(){
//     console.log("server started");
// });
app.listen(3000, function(){
    console.log("server started");
});