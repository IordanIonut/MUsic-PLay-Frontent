import { display } from '@mui/system';
import React, {useState, useEffect} from 'react';
import { Helmet } from 'react-helmet';
import {useParams, Link, useHistory} from 'react-router-dom';
import './login.css';
import { useFormik } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2';
import '../views/home.css'
import colors from '../utils/colors';
import image from '../utils/image';
import { ApiDataBasePost} from '../utils/fetchAPI'

const Login = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [change, setChange] = useState(false)
  const {id} = useParams();
  const history = useHistory();

  useEffect(() =>{
    setLogin(false);
    setRegister(false);
    setChange(false);
    if(id === 'login')
      setLogin(true);
    if(id === 'register')
      setRegister(true);
    if(id === 'change')
      setChange(true);
  },[login, register, change, id]);

  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
      email: '',
      fill: '',
      image: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, 'The name need to have minimum 6 characters!')
        .required('The name is mandatory!'),
      password: Yup.string()
        .matches(
          /^(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/,
          'The password must contain at least one digit and a special character (!,@,#,$,%,&,*,(,),-_,+={},[],|,;,:,",\',,,.,/ or ?) and have at least 8 characters!')
        .required('The password is mandatory!')
        .min(8, 'The password need to have minimum 8 characters!'),
      email: Yup.string()
        .email('The email address is invalid!')
        .matches(/(yahoo|gmail)\.com$/, 'The email address must be of the type "yahoo.com" or "gmail.com"!')
        .required('Email address is mandatory!'),
    }),
    onSubmit: (values) => {
      ApiDataBasePost(`users/add`, values)
      .then((response) => {
        history.push('/auth/login');
          formik.values.name = '';
          formik.values.password = '';
          formik.values.email = '';
          formik.values.fill = '';
          formik.values.image = '';})
      .catch((error) => {
         Swal.fire({
            icon: 'error',
            text: error?.response?.data,
            showConfirmButton: false,
            customClass: {
              container: 'blur-background popup'
            },
            timer: 2000,
            buttons: false
          });
        });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    formik.submitForm();
    if (formik.errors.name) {
      Swal.fire({
        icon: 'error',
        text: formik.errors.name,
        showConfirmButton: false,
        customClass: {
          container: 'blur-background popup'
        },
        timer: 2000,
        buttons: false
      });
    } else if (formik.errors.password) {
      Swal.fire({
          icon: 'error',
          text: formik.errors.password,
          showConfirmButton: false,
          customClass: {
            container: 'blur-background popup'
          },
          timer: 2000,
          buttons: false
      });
    } else if (formik.errors.email) {
      Swal.fire({
        icon: 'error',
          text: formik.errors.email,
          showConfirmButton: false,
          customClass: {
            container: 'blur-background popup'
          },
          timer: 2000,
          buttons: false
      });
    }
    let a = formik.values.name.slice(0,1);
    let im = image.find((obj, index) => obj?.letter === a.toLocaleUpperCase());
    formik.values.image =  im?.svg;
    let ran = Math.floor(Math.random() * 142);
    formik.values.fill = ran;
  };

  const formik1 = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('The email address is invalid!')
        .matches(/(yahoo|gmail)\.com$/, 'The email address must be of the type "yahoo.com" or "gmail.com"!')
        .required('Email address is mandatory!'),
      password: Yup.string()
        .matches(
          /^(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/,
          'The password must contain at least one digit and a special character (!,@,#,$,%,&,*,(,),-_,+={},[],|,;,:,",\',,,.,/ or ?) and have at least 8 characters!')
        .required('The password is mandatory!')
        .min(8, 'The password need to have minimum 8 characters!'),
    }),
    onSubmit: (values) => {
      ApiDataBasePost(`users/login`, values)
      .then((response) => {
        localStorage.setItem('token', response?.token);
        history.push('/home');
        formik1.values.password = '';
        formik1.values.email = '';
      }).catch((error) => {
          Swal.fire({
            icon: 'error',
            text: error?.response?.data,
            showConfirmButton: false,
            customClass: {
              container: 'blur-background popup'
            },
            timer: 2000,
            buttons: false
          });
        });
    },
  });

  const handleSubmit1 = async (event) => {
    event.preventDefault();
    formik1.submitForm();
    if (formik1.errors.email) {
      Swal.fire({
        icon: 'error',
        text: formik1.errors.email,
        showConfirmButton: false,
        customClass: {
          container: 'blur-background popup'
        },
        timer: 2000,
        buttons: false
      });
    } else if (formik1.errors.password) {
      Swal.fire({
          icon: 'error',
          text: formik1.errors.password,
          showConfirmButton: false,
          customClass: {
            container: 'blur-background popup'
          },
          timer: 2000,
          buttons: false
      });
    }
  };

  const formik2 = useFormik({
    initialValues: {
      email:'',
    },
    validationSchema: Yup.object({
      email: Yup.string()
      .email('The email address is invalid!')
      .matches(/(yahoo|gmail)\.com$/, 'The email address must be of the type "yahoo.com" or "gmail.com"!')
      .required('Email address is mandatory!'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    formik2.submitForm();
    console.log("1")
    if (formik2.errors.email) {
      Swal.fire({
        icon: 'error',
        text: formik2.errors.email,
        showConfirmButton: false,
        customClass: {
          container: 'blur-background popup'
        },
        timer: 2000,
        buttons: false
      });
    }
  };

  return (
    <div className="login-container">
      <Helmet>
        <title>MusicPLay</title>
        <meta property="og:title" content="MusicPLay" />
      </Helmet>
      <div className="login-up up">
        <Link to={'/home'} style={{display: 'block ruby'}}>
          <img 
            alt="image"
            src={process.env.PUBLIC_URL+`/playground_assets/1-removebg-preview-1500h.png`}
            className="home-image"
          />
          <img
            alt="image"
            src={process.env.PUBLIC_URL+"/playground_assets/2-removebg-preview-1500h.png"}
            className="home-image1"
          />
        </Link>
      </div>
      <div className="login-view content">
        <section style={change ? {display: 'flex'} : {display: 'none'}} className="login-password">
          <div className="login-container2">
            <div className="login-message">
              <form className="login-form" onSubmit={handleSubmit2}>
                <span className="login-text">Reset Password!</span>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="login-textinput input"
                  value={formik2.values.email}
                  onChange={formik2.handleChange}
                />
                <button type="submit"  className="login-button6 button" style={{backgroundColor: '#2c3e50', width: '210px'}}>
                  <span className="login-text01">Send</span>
                </button>
              </form>
            </div>
            <div className="login-contact">
              <span className="login-text02">Back!</span>
              <span className="login-text03">
                If you are not sure of the email address or if you do not
                receive the email message in 5 minutes, you can connect with
                your Google account.
              </span>
              <Link to={`/auth/login`} className="login-button6 button" style={{backgroundColor: '#2c3e50', width: '210px'}}>
                <span className="login-text04" >
                  <span>Login</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section style={login ? {display: 'flex'} : {display: 'none'}} className="login-login">
          <div className="login-container2">
            <div className="login-message1">
              <form className="login-form1" onSubmit={handleSubmit1}>
                <span className="login-text07">Sign in to Website</span>
                <div className="login-container3">
                  <button className="login-button2 button posibili" style={{width: '210px'}}>
                    <svg viewBox="0 0 1024 1024" className="login-icon">
                      <path d="M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z"></path>
                    </svg>
                  </button>
                  <span className="login-text08">
                    or use your email account
                  </span>
                </div>
                <input
                 type="text"
                 id="email"
                 name="email"
                 placeholder="Your Name"
                 value={formik1.values.email}
                 onChange={formik1.handleChange}
                 className="login-textinput3 input"/>
                <input
                  type="password"
                  placeholder="Your Password"
                  className="login-textinput2 input"
                  id="password"
                  name="password"
                  value={formik1.values.password}
                  onChange={formik1.handleChange}/>
                <Link to={`/auth/change`} className="login-button3 button">
                  <span className="login-text09">Forgot your password?</span>
                </Link>
                <button type="submit" className="login-button6 button" style={{backgroundColor: '#2c3e50', width: '210px'}}>
                  <span className="login-text10">
                    <span>SigN in</span>
                    <br></br>
                  </span>
                </button>
              </form>
            </div>
            <div className="login-contact1">
              <span className="login-text13">
                <span>Hello Friend!</span>
                <br></br>
              </span>
              <span className="login-text16">
                Enter your personal data and start listening to whatever you
                want without restrictions or subscription
              </span>
              <Link to={`/auth/register`} className="login-button5 button">
                <span className="login-text17">
                  <span>SigN Up</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section style={register ? {display: 'flex'} : {display: 'none'}} className="login-register">
          <div className="login-container4">
            <div className="login-contact2">
              <span className="login-text20">
                <span>Welcome Back!</span>
                <br></br>
              </span>
              <span className="login-text23">
                To keep connected with us please login with your personal info
              </span>
              <Link to={`/auth/login`} className="login-button6 button" style={{backgroundColor: '#2c3e50'}}>
                <span className="login-text24">SigN In</span>
              </Link>
            </div>
            <div className="login-message2">
              <form className="login-form2" onSubmit={handleSubmit}>
                <span className="login-text25">
                  <span>Create Accont</span>
                  <br></br>
                </span>
                <div className="login-container5">
                  <button className="login-button7 button posibili" style={{width:"210px"}}>
                    <svg viewBox="0 0 1024 1024" className="login-icon2">
                      <path d="M522.2 438.8v175.6h290.4c-11.8 75.4-87.8 220.8-290.4 220.8-174.8 0-317.4-144.8-317.4-323.2s142.6-323.2 317.4-323.2c99.4 0 166 42.4 204 79l139-133.8c-89.2-83.6-204.8-134-343-134-283 0-512 229-512 512s229 512 512 512c295.4 0 491.6-207.8 491.6-500.2 0-33.6-3.6-59.2-8-84.8l-483.6-0.2z"></path>
                    </svg>
                  </button>
                  <span className="login-text28">
                    or use email for registration
                  </span>
                </div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="login-textinput3 input"/>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="login-textinput4 input"/>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="login-textinput5 input"/> 
                <button type="submit" className="login-button8 button" style={{backgroundColor: '#2c3e50'}}>
                  <span className="login-text29">SigN Up</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Login
