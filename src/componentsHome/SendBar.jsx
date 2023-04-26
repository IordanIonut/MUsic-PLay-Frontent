import React, {useState, useEffect} from 'react';
import '../views/home.css'
import { useFormik } from 'formik';
import * as Yup from "yup";
import Swal from 'sweetalert2';
import { ApiDataBaseGet, ApiDataBasePost } from '../utils/fetchAPI';

const SendBar = ({idSp, userDate})=>{
    
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('The name is mandatory!'),
      email: idSp ? Yup.string() : Yup.string()
        .email('The email address is invalid!')
        .matches(/(yahoo|gmail)\.com$/, 'The email address must be of the type "yahoo.com" or "gmail.com"!')
        .required('Email address is mandatory!'),
      subject: Yup.string().required('The subject is mandatory!'),
      message: Yup.string().required('The messageame is mandatory!'),

    }),
    onSubmit: (values) => {
      console.log(values);
      if(idSp != '') {
        formik.values.email = userDate?.email;
      }
      ApiDataBasePost(`sendEmail`, values)
      .then((response) => {
          formik.values.name = '';
          formik.values.email = '';
          formik.values.subject = '';
          formik.values.message = '';
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
    } else if (formik.errors.subject) {
      Swal.fire({
        icon: 'error',
          text: formik.errors.subject,
          showConfirmButton: false,
          customClass: {
            container: 'blur-background popup'
          },
          timer: 2000,
          buttons: false
      });
    }else if (formik.errors.message) {
      Swal.fire({
        icon: 'error',
          text: formik.errors.message,
          showConfirmButton: false,
          customClass: {
            container: 'blur-background popup'
          },
          timer: 2000,
          buttons: false
      });
    }
  };
  
  return(
      <section className="home-mesaj"style={{display: 'flex'}}>
          <div className="home-container5">
            <div className="home-message">
              <form className="home-form" onSubmit={handleSubmit}>
                <span className="home-text54">
                  <span>Send Message</span>
                  <br></br>
                </span>
                <input type="text" id="name" name="name" placeholder="Your Name" className="home-textinput input"
                 value={formik.values.name}
                 onChange={formik.handleChange}/>
                {idSp === '' ? <input  type="text" id="email" name="email" placeholder="Your Email" className="home-textinput1 input"
                 value={formik.values.email}
                 onChange={formik.handleChange}/>: null}
                <input type="text" id="subject" name="subject" placeholder="Subject" className="home-textinput2 input"
                 value={formik.values.subject}
                 onChange={formik.handleChange}/>
                <textarea cols="30" rows="7" id="message" name="message" placeholder="Your Message" className="home-textarea input textarea"
                    value={formik.values.message}
                    onChange={formik.handleChange}></textarea>
                <button type="submit" className="login-button6 button" style={{backgroundColor: '#2c3e50', width: '210px'}}>
                  <span className="login-text10">
                    <span>SigN in</span>
                    <br></br>
                  </span>
                </button>
              </form>
            </div>
            <div className="home-contact">
              <span className="home-text58">Contact Details!</span>
              <svg viewBox="0 0 1024 1024" className="home-icon090">
                <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
              </svg>
              <svg viewBox="0 0 1024 1024" className="home-icon092">
                <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
              </svg>
              <span className="home-text59">Pitesti,Romania</span>
              <span className="home-text60">musicPlay@yahoo.com</span>
              <span className="home-text61">+40760069111</span>
              <svg viewBox="0 0 1024 1024" className="home-icon094">
                <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <div className="home-container6">
                <svg viewBox="0 0 1024 1024" className="home-icon096 posibili">
                  <path d="M1024 226.4c-37.6 16.8-78.2 28-120.6 33 43.4-26 76.6-67.2 92.4-116.2-40.6 24-85.6 41.6-133.4 51-38.4-40.8-93-66.2-153.4-66.2-116 0-210 94-210 210 0 16.4 1.8 32.4 5.4 47.8-174.6-8.8-329.4-92.4-433-219.6-18 31-28.4 67.2-28.4 105.6 0 72.8 37 137.2 93.4 174.8-34.4-1-66.8-10.6-95.2-26.2 0 0.8 0 1.8 0 2.6 0 101.8 72.4 186.8 168.6 206-17.6 4.8-36.2 7.4-55.4 7.4-13.6 0-26.6-1.4-39.6-3.8 26.8 83.4 104.4 144.2 196.2 146-72 56.4-162.4 90-261 90-17 0-33.6-1-50.2-3 93.2 59.8 203.6 94.4 322.2 94.4 386.4 0 597.8-320.2 597.8-597.8 0-9.2-0.2-18.2-0.6-27.2 41-29.4 76.6-66.4 104.8-108.6z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon098 posibili"
                >
                  <path d="M199.429 357.143v566.286h-188.571v-566.286h188.571zM211.429 182.286c0.571 54.286-40.571 97.714-106.286 97.714v0h-1.143c-63.429 0-104-43.429-104-97.714 0-55.429 42.286-97.714 106.286-97.714 64.571 0 104.571 42.286 105.143 97.714zM877.714 598.857v324.571h-188v-302.857c0-76-27.429-128-95.429-128-52 0-82.857 34.857-96.571 68.571-4.571 12.571-6.286 29.143-6.286 46.286v316h-188c2.286-513.143 0-566.286 0-566.286h188v82.286h-1.143c24.571-38.857 69.143-95.429 170.857-95.429 124 0 216.571 81.143 216.571 254.857z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon100 posibili"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section>    
  )
}
export default SendBar
