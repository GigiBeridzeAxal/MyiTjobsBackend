const nodemailer = require('nodemailer');





const sendmail = async(req,res) => {

  const {phone , email , name , message} = req.body
  console.log(phone,email,name, message)



    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "beridzegigi19@gmail.com",
          pass: "cdcs xqtm mqsu qktj",
        },
        tls: {
            rejectUnauthorized: false, // Ignore self-signed certificate error
          },
      });
      
      
      
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
          to: email, // list of receivers
          subject: name, // Subject line
          text: "Hello world?", // plain text body
          html: ` <div >
      <div style={{width:'100%', display:"flex", flexDirection:'column', alignItems:"center", justifyContent:'center' }} >
        <div style={{color:'white', fontSize:"24px" }} >
            გიგი ბერიძე
        </div>
        <br />
        <div style={{display:'flex', color:'white', alignItems:'center'}} >
          მობილური:
        <div style={{ padding:"10px",  color:'white', fontSize:"24px", border:"1px solid white", width:'fit-content' }} >
          ${phone}
        </div>
        </div>

        <br />
        <div style={{color:'#c3c3c3', width:'550px' }} >
        ${message}
        </div>

      </div>
    </div>`, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }
      
      main().catch(console.error);

}

module.exports = sendmail