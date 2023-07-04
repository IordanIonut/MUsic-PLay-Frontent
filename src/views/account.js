import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom';
import './account.css'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ApiDataBaseGet, ApiDataBasePut } from '../utils/fetchAPI';
import colors from '../utils/colors';
import image from '../utils/image';

const Account = () => {
  const [statusHomeButton, setStatusHomeButton] = useState(false);
  const [statusTredingButton, setStatusTredingButton] = useState(false);
  const [procent, setProcent] = useState([]);
  const {id} = useParams();
  const history = useHistory();
  const token = localStorage.getItem('token') || undefined;
  const [idSp, setIdSp]=useState('');
  const [userDate, setUserDate] = useState([]);
  const colorsNow = colors?.[userDate?.fill]?.hex;
  
  useEffect(() =>{
    if (token) {
      ApiDataBaseGet(`users/token?token=${token}`)
        .then((response) => {
          setIdSp(response)
        })
        .catch((error) => {
          console.log(error?.message);
          localStorage.removeItem('token')
        });
      ApiDataBaseGet(`users/get/${idSp}`)
      .then((response) => {
        setUserDate(response);
      })
      .catch((error) => {
        //console.log(error);
      });
    }
  },[token, idSp]);

  const styleChangeOn=((idClass)=>{
    document.getElementById(idClass).classList.add("hover");
    document.getElementById(idClass).firstElementChild.style.display='block';
    document.getElementById(idClass).lastElementChild.style.display='none';
  });

  const styleChangeOf=((idClass)=>{
    document.getElementById(idClass).classList.remove("hover");
    document.getElementById(idClass).lastElementChild.style.display='flex';
    document.getElementById(idClass).firstElementChild.style.display='none';
  });
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/home');
  }

  useEffect(() =>{
    if(id === 'date'){
      setStatusHomeButton(true);
      styleChangeOn('date');
    }
    else if(id === 'personal'){
      setStatusTredingButton(true);
      styleChangeOn('personal');
    }
    ApiDataBaseGet(`history/procent?user_id=${idSp}`).then((data) =>{
      setProcent(data);
      const svgElementVideoYoutube = document.querySelector('.circleVideoYoutube');
      svgElementVideoYoutube.setAttribute('stroke-dasharray', `${(data?.[0]?.[0]?.[0]/data?.[0]?.[0]?.[9])*100}, 100`);
      const svgElementVideoSpotify = document.querySelector('.circleVideoSpotify');
      svgElementVideoSpotify.setAttribute('stroke-dasharray', `${(data?.[0]?.[0]?.[3]/data?.[0]?.[0]?.[9])*100}, 100`);
      const svgElementVideoAppleMusic = document.querySelector('.circleVideoAppleMusic');
      svgElementVideoAppleMusic.setAttribute('stroke-dasharray', `${(data?.[0]?.[0]?.[6]/data?.[0]?.[0]?.[9])*100}, 100`);

      const svgElementPlaylistYoutube = document.querySelector('.circlePlaylistYoutube');
      svgElementPlaylistYoutube.setAttribute('stroke-dasharray', `${(data?.[0]?.[0]?.[1]/data?.[0]?.[0]?.[10])*100}, 100`);
      const svgElementPlaylistSpotify = document.querySelector('.circlePlaylistSpotify');
      svgElementPlaylistSpotify.setAttribute('stroke-dasharray', `${(data?.[0]?.[0]?.[4]/data?.[0]?.[0]?.[10])*100}, 100`);
      const svgElementPlaylistAppleMusic = document.querySelector('.circlePlaylistAppleMusic');
      svgElementPlaylistAppleMusic.setAttribute('stroke-dasharray', `${(data?.[0]?.[0]?.[7]/data?.[0]?.[0]?.[10])*100}, 100`);

      const svgElementChannelYoutube = document.querySelector('.circleChannelYoutube');
      svgElementChannelYoutube.setAttribute('stroke-dasharray', `${(data?.[0]?.[0]?.[2]/data?.[0]?.[0]?.[11])*100}, 100`);
      const svgElementChannelSpotify = document.querySelector('.circleChannelSpotify');
      svgElementChannelSpotify.setAttribute('stroke-dasharray', `${(data?.[0]?.[0]?.[5]/data?.[0]?.[0]?.[11])*100}, 100`);
      const svgElementChannelAppleMusic = document.querySelector('.circleChannelAppleMusic');
      svgElementChannelAppleMusic.setAttribute('stroke-dasharray', `${(data?.[0]?.[0]?.[8]/data?.[0]?.[0]?.[11])*100}, 100`);
    });
  },[id, statusHomeButton, statusTredingButton]);
  
  const changeNameClick = () => {
    Swal.fire({
      title: 'Introduce the new name',
      html: `
          <input type="text" id="input1" name="name" style="width: 95%" placeholder="Now name" class="login-textinput3 input"/>
          <input type="text" id="input2" name="name" style="width: 95%" placeholder="Repeat the new name" class="login-textinput3 input"/>
      `,
      showCancelButton: true,
      confirmButtonText: 'Change Name',
      cancelButtonText:'Cancel',
      inputAttributes: {
          required: true
      },
      customClass: {
        container: 'blur-background popup my-sweetalert-container',
        validationMessage: 'blur-background-i popup',
      },
      focusConfirm:false,
      didOpen: () => {
        const validationMessage = Swal.getValidationMessage();
        validationMessage.style.backgroundImage = 'linear-gradient(-45deg, rgb(19, 19, 19) 85.00%,rgb(44, 62, 80) 100.00%)';
        const confirmeButton = Swal.getConfirmButton();
        confirmeButton.style.border = 'none';
      },
      preConfirm: () => {
        const input1 = Swal.getPopup().querySelector('#input1').value;
        const input2 = Swal.getPopup().querySelector('#input2').value;
        if (input1.trim() === ''){
          Swal.showValidationMessage('Please enter new name!');
          return false;
        }
        if (input2.trim() === ''){
          Swal.showValidationMessage('Please enter repeat the new name!');
          return false;
        }
        if(input1 === userDate?.name && input2 === userDate?.name)
          Swal.showValidationMessage(`The new name must be different from the current name!`);
        if (!input1 || !input2) 
          Swal.showValidationMessage(`Enter new name in the 2 places!`);
        if(input1?.length < 6 || input2?.length < 6)
          Swal.showValidationMessage(`The name need to have minimum 6 characters!`);
        if(input1 != input2)
          Swal.showValidationMessage(`Name must be the same in both places!`);
        return { input1: input1, input2: input2 }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        let a = result?.value?.input1.slice(0,1);
        let im = image.find((obj, index) => obj?.letter === a.toLocaleUpperCase());
        let val = {name : result?.value?.input1, image: im?.svg}
        ApiDataBasePut(`users/name/${idSp}`, val).then((data) => {window.location.reload();}).catch((err) => console.log(err?.message));
      }
    })
  };

  const changeEmailClick = () => {
    Swal.fire({
      title: 'Introduce the new email',
      html: `
          <input type="email" id="input1" name="name" style="width: 95%" placeholder="Now email" class="login-textinput3 input"/>
          <input type="email" id="input2" name="name" style="width: 95%" placeholder="Repeat the new email" class="login-textinput3 input"/>
      `,
      showCancelButton: true,
      confirmButtonText: 'Change Email',
      cancelButtonText:'Cancel',
      inputAttributes: {
          required: true
      },
      customClass: {
        container: 'blur-background popup my-sweetalert-container',
        validationMessage: 'blur-background-i popup',
      },
      focusConfirm:false,
      focusCancel: true,
      didOpen: () => {
        const validationMessage = Swal.getValidationMessage();
        validationMessage.style.backgroundImage = 'linear-gradient(-45deg, rgb(19, 19, 19) 85.00%,rgb(44, 62, 80) 100.00%)';
        const confirmeButton = Swal.getConfirmButton();
        confirmeButton.style.border = 'none';
      },
      preConfirm: () => {
        const input1 = Swal.getPopup().querySelector('#input1').value;
        const input2 = Swal.getPopup().querySelector('#input2').value;
        if (input1.trim() === ''){
          Swal.showValidationMessage('Please enter new email!');
          return false;
        }
        if (input2.trim() === ''){
          Swal.showValidationMessage('Please enter repeat the new email!');
          return false;
        }
        if (!input1 || !input2) 
          Swal.showValidationMessage(`Enter new email in the 2 places!`);
        if(input1 === userDate?.email && input2 === userDate?.email)
          Swal.showValidationMessage(`The new email must be different from the current email!`);
        if(input1 != input2)
          Swal.showValidationMessage(`Email must be the same in both places!`);
        if(!input1?.match(/(yahoo|gmail)\.com$/))
          Swal.showValidationMessage(`The email address must be of the type "yahoo.com" or "gmail.com"!`);
        if(!input2?.match(/(yahoo|gmail)\.com$/))
          Swal.showValidationMessage(`The email address must be of the type "yahoo.com" or "gmail.com"!`);
        return { input1: input1, input2: input2 }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        let val = {email : result?.value?.input1}
        ApiDataBasePut(`users/email/${idSp}`, val).then((data) => {window.location.reload();}).catch((err) => console.log(err?.message));
      }
    });
  };

  const changePasswordClick = () => {
    Swal.fire({
      title: 'Introduce the new password',
      html: `
          <input type="password" id="input0" name="name" style="width: 95%" placeholder="Old password" class="login-textinput3 input"/>
          <input type="password" id="input1" name="name" style="width: 95%" placeholder="Now password" class="login-textinput3 input"/>
          <input type="password" id="input2" name="name" style="width: 95%" placeholder="Repeat the new password" class="login-textinput3 input"/>
      `,
      showCancelButton: true,
      confirmButtonText: 'NEW Password',
      cancelButtonText:'Cancel',
      inputAttributes: {
          required: true
      },
      customClass: {
        container: 'blur-background popup my-sweetalert-container',
        validationMessage: 'blur-background-i popup',
      },
      focusConfirm:false,
      focusCancel: true,
      didOpen: () => {
        const validationMessage = Swal.getValidationMessage();
        validationMessage.style.backgroundImage = 'linear-gradient(-45deg, rgb(19, 19, 19) 85.00%,rgb(44, 62, 80) 100.00%)';
        const confirmeButton = Swal.getConfirmButton();
        confirmeButton.style.border = 'none';
      },
      preConfirm: () => {
        const input0 = Swal.getPopup().querySelector('#input0').value;
        const input1 = Swal.getPopup().querySelector('#input1').value;
        const input2 = Swal.getPopup().querySelector('#input2').value;
        if (input0.trim() === ''){
            Swal.showValidationMessage('Please enter old password!');
            return false;
        }
        if (input1.trim() === ''){
            Swal.showValidationMessage('Please enter new password!');
            return false;
        }
        if (input2.trim() === ''){
            Swal.showValidationMessage('Please enter repeat the new password!');
            return false;
        }
        if (!input1 || !input2 || !input0) 
          Swal.showValidationMessage(`Enter new password in the 3 places!`);
        if(input1 != input2)
          Swal.showValidationMessage(`Password must be the same in both places!`);
        if(!input0.match(/^(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/))
          Swal.showValidationMessage(`The password must contain at least one digit and a special character (!,@,#,$,%,&,*,(,),-_,+={},[],|,;,:,",\',,,.,/ or ?) and have at least 8 characters!`);
        if(!input1.match(/^(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/))
          Swal.showValidationMessage(`The password must contain at least one digit and a special character (!,@,#,$,%,&,*,(,),-_,+={},[],|,;,:,",\',,,.,/ or ?) and have at least 8 characters!`);
        if(!input2.match(/^(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[a-zA-Z]).{8,}$/))
          Swal.showValidationMessage(`The password must contain at least one digit and a special character (!,@,#,$,%,&,*,(,),-_,+={},[],|,;,:,",\',,,.,/ or ?) and have at least 8 characters!`);
        if(input0 === input1 && input0 === input2)
          Swal.showValidationMessage(`The new password must be different from the current password!`);
        if(input1?.length < 8 || input2?.length < 8 || input0?.length < 8)
          Swal.showValidationMessage(`The password need to have minimum 8 characters!`);
        let val = {oldPassword: input0, newPassword: input1, confirmNewPassword: input2};
          ApiDataBasePut(`users/${idSp}/update-password`, val)
            .then((data) => {
             // window.location.reload();
            })
            .catch((err) => {
              Swal.showValidationMessage(err?.response?.data);
              throw err;
            });
      }
    });
  };

  const changeColorClick = () => {
    Swal.fire({
      title: 'Introduce the new color',
      html: `
      <div style="display: flex; flex-wrap: wrap; padding-left: 15px;">
      ${colors.map((option, idx) => `
        <div key=${option?.name} style="margin: 5px">
          <input id='${option?.name}' value=${idx} type='radio' ${option?.hex === colorsNow ? 'checked' : ''}  name="options[]" name='radio-group'/>
          <label for='${option?.name}' style="box-shadow: inset 0 0 0 4px ${option?.hex};"></label>
          <style>
          input[type='radio']#${option?.name}:checked + label:before {
            background-color: ${option?.hex};
          }
        </style>
        </div>
      `).join('')}
      `,
      showCancelButton: true,
      confirmButtonText: 'Change Color',
      cancelButtonText:'Cancel',
      inputAttributes: {
          required: true
      },
      customClass: {
        container: 'blur-background popup my-sweetalert-container',
        validationMessage: 'blur-background-i popup',
      },
      focusConfirm:false,
      focusCancel: true,
      didOpen: () => {
        const validationMessage = Swal.getValidationMessage();
        validationMessage.style.backgroundImage = 'linear-gradient(-45deg, rgb(19, 19, 19) 85.00%,rgb(44, 62, 80) 100.00%)';
        const confirmeButton = Swal.getConfirmButton();
        confirmeButton.style.border = 'none';
      },
      preConfirm: () => {
        const selectedValues = Array.from(
          document.querySelectorAll('input[type=radio]:checked')
        ).map((checkbox) => checkbox.value);
        if (selectedValues.length === 0) {
          Swal.showValidationMessage('Must be at least one selected value!');
          return false;
        }
        return selectedValues;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        let val = {fill : result?.value?.[0]}
        ApiDataBasePut(`users/fill/${idSp}`, val).then((data) => {window.location.reload();}).catch((err) => console.log(err?.message));
      }
    });
  };

  return (
    <div className="account-container">
          <Helmet>
        <title>MUsicPLay</title>
        <meta property="og:title" content="MusicPLay" />
      </Helmet>
      <div className="home-up up">
        <img alt="image" src={process.env.PUBLIC_URL+`/playground_assets/1-removebg-preview-1500h.png`} className="home-image" />
        <img alt="image" src={process.env.PUBLIC_URL+"/playground_assets/2-removebg-preview-1500h.png"} className="home-image1" />
        <div className="home-account posibili" style={{position : 'absolute', left: '93%'}}> 
          <Link to={`/home`} id="account" name="account" type="button" disabled autoFocus className="home-button03 button account">
            <svg viewBox="0 0 1024 1024" className="account-icon">
              <path d="M810 666l-152-154 152-154-60-60-152 154-154-154-60 60 154 154-154 154 60 60 154-154 152 154zM938 128q34 0 60 26t26 60v596q0 34-26 60t-60 26h-640q-40 0-68-38l-230-346 230-346q28-38 68-38h640z"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="home-view content" style={{marginTop: '20px', height: '77vh'}}>
        <section className="home-left-bar">     
            <Link to={`/account/date`} id="date" className="home-button05 navbar button account" onClick={()=>{
                            setStatusHomeButton(true);
                            setStatusTredingButton(false);
                            styleChangeOn('date');
                            styleChangeOf('personal');
                            }}>
                <svg xmlns="http://www.w3.org/2000/svg"  name='img2'  className="home-icon012" viewBox="0 0 16 16">
                  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg"  name='img1'  className="home-icon014" viewBox="0 0 16 16">
                  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z"/>
                </svg>
            </Link>
            <Link to={`/account/personal`} id="personal" className="home-button05 navbar button account" onClick={()=>{
                            setStatusHomeButton(false);
                            setStatusTredingButton(true);
                            styleChangeOn('personal');
                            styleChangeOf('date');
                          }}>
                  <svg xmlns="http://www.w3.org/2000/svg"name='img1' className="home-icon012" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM10 7a1 1 0 0 0 0 2h5V7h-5zm-4 4a1 1 0 0 0-1-1H1v2h4a1 1 0 0 0 1-1z"/>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" name='img2' className="home-icon014" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"/>
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM9 8a1 1 0 0 1 1-1h5v2h-5a1 1 0 0 1-1-1zm-8 2h4a1 1 0 1 1 0 2H1v-2z"/>
                  </svg>
            </Link>
        </section>
        {statusHomeButton ? <section className="account-cont" style={{padding: '0', height: '90%'}}>
          <span className="account-text text">General Information</span>
          <div className="account-account1">
          <div className="home-account posibili" style={{height: '100px', width: '100px'}}>
            <div id="account" name="account" style={{height: '80%', width: '80%'}} type="button" disabled autoFocus className="home-button03 button account">
            {token !== undefined ? (<span classname="home-icon006" style={{display: 'flex', width: '100%',height: '100%', fill: colors?.[userDate?.fill]?.hex}} dangerouslySetInnerHTML={{ __html: userDate?.image }} />) : 
            (<svg viewBox="0 0 1024 1024" className="home-icon006">
              <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
            </svg>)}
          </div>
        </div>
            <br></br>
            <span className="account-text01 text" style={{display: 'flex'}}>
            <svg  className="home-icon006" viewBox="0 0 16 16" style={{height: '30px', width: '30px',  marginRight: '20px', marginTop: '5px'}}> 
              <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z"/>
              <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z"/>
            </svg>
              <span>{userDate?.name}</span>
              <br></br>
            </span>
            <div className="account-account2 posibili" style={{top: '110px'}}>
              <div id="name" name="name" type="button" disabled autoFocus className="account-button4 button account"  onClick={changeNameClick}>
                <svg viewBox="0 0 1024 1024" className="account-icon08">
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </div>
            </div>
            <span className="account-text01 text" style={{display: 'flex'}}>
            <svg  className="home-icon006" viewBox="0 0 16 16" style={{height: '30px', width: '30px',  marginRight: '20px', marginTop: '5px'}}> 
              <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
              <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
            </svg>
              <span>{userDate?.email}</span>
              <br></br>
            </span>
            <div className="account-account2 posibili" style={{top: '190px'}}>
              <div id="email" name="email" type="button" disabled autoFocus className="account-button4 button account" onClick={changeEmailClick}>
                <svg viewBox="0 0 1024 1024" className="account-icon08">
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </div>
            </div>
            <span className="account-text01 text" style={{display: 'flex'}}>
            <svg  className="home-icon006" viewBox="0 0 16 16" style={{height: '30px', width: '30px',  marginRight: '20px', marginTop: '5px'}}> 
                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg>
              <span>****************</span>
              <br></br>
            </span>
            <div className="account-account2 posibili" style={{top: '270px'}}>
              <div id="password" name="password" type="button" disabled autoFocus className="account-button4 button account" onClick={changePasswordClick}>
                <svg viewBox="0 0 1024 1024" className="account-icon08">
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </div>
            </div>
            <span className="account-text01 text" style={{display: 'flex'}}>
            <svg  className="home-icon006" viewBox="0 0 16 16" style={{height: '30px', width: '30px',  marginRight: '20px', marginTop: '5px'}}> 
              <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
              <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
            </svg>
              <span>{colors?.[userDate?.fill]?.name}</span>
              <br></br>
            </span>
            <div className="account-account2 posibili" style={{top: '350px'}}>
              <div id="color" name="color" type="button" disabled autoFocus className="account-button4 button account" onClick={changeColorClick}>
                <svg viewBox="0 0 1024 1024" className="account-icon08">
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </div>
            </div>
          </div>
        </section> : null}
        {statusTredingButton ? <section className="account-cont" style={{padding: '0', height: '90%'}}>
          <span className="account-text text">Personal Information</span>
          <div className="account-account1">
          </div>
          <span className="account-text01 text" style={{display: 'flex', marginBottom: '5px'}}>Song</span>
          <div class="flex-wrapper">
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart youtube">
                <path class="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circleVideoYoutube circle"
                  stroke-dasharray="30, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{((procent?.[0]?.[0]?.[0]/procent?.[0]?.[0]?.[9])*100 || 0).toFixed(0)}%</text>
              </svg>
            </div>
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart spotify">
                <path class="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circleVideoSpotify circle"
                  stroke-dasharray="30, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{((procent?.[0]?.[0]?.[3]/procent?.[0]?.[0]?.[9])*100 || 0).toFixed(0)}%</text>
              </svg>
            </div>
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart appleMusic">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circleVideoAppleMusic circle"
                    stroke-dasharray="30, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" class="percentage">{((procent?.[0]?.[0]?.[6]/procent?.[0]?.[0]?.[9])*100 || 0).toFixed(0)}%</text>
                </svg>
              </div>
          </div>
          <span className="account-text01 text" style={{display: 'flex', marginBottom: '5px'}}>Playlist</span>
          <div class="flex-wrapper">
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart youtube">
                <path class="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circlePlaylistYoutube circle"
                  stroke-dasharray="30, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{((procent?.[0]?.[0]?.[1]/procent?.[0]?.[0]?.[10])*100 || 0).toFixed(0)}%</text>
              </svg>
            </div>
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart spotify">
                <path class="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circlePlaylistSpotify circle"
                  stroke-dasharray="30, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{((procent?.[0]?.[0]?.[4]/procent?.[0]?.[0]?.[10])*100 || 0).toFixed(0)}%</text>
              </svg>
            </div>
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart appleMusic">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circlePlaylistAppleMusic circle"
                    stroke-dasharray="30, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" class="percentage">{((procent?.[0]?.[0]?.[7]/procent?.[0]?.[0]?.[10])*100 || 0).toFixed(0)}%</text>
                </svg>
              </div>
          </div>
          <span className="account-text01 text" style={{display: 'flex', marginBottom: '5px'}}>Channel</span>
          <div class="flex-wrapper">
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart youtube">
                <path class="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circleChannelYoutube circle"
                  stroke-dasharray="30, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{((procent?.[0]?.[0]?.[2]/procent?.[0]?.[0]?.[11])*100 || 0).toFixed(0)}%</text>
              </svg>
            </div>
            <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circular-chart spotify">
                <path class="circle-bg"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path class="circleChannelSpotify circle"
                  stroke-dasharray="30, 100"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">{((procent?.[0]?.[0]?.[5]/procent?.[0]?.[0]?.[11])*100 || 0).toFixed(0)}%</text>
              </svg>
            </div>
              <div class="single-chart">
                <svg viewBox="0 0 36 36" class="circular-chart appleMusic">
                  <path class="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path class="circleChannelAppleMusic circle"
                    stroke-dasharray="30, 100"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text x="18" y="20.35" class="percentage">{((procent?.[0]?.[0]?.[8]/procent?.[0]?.[0]?.[11])*100 || 0).toFixed(0)}%</text>
                </svg>
              </div>
          </div>
        </section> : null}
      </div>
      <button type="button" className="login-button6 button" style={{backgroundColor: '#2c3e50', width: '210px', position: 'absolute', left: '75%'}} onClick={handleLogout}>
          <span className="login-text10">
              <span>disconnected</span>
              <br></br>
          </span>
      </button>
    </div>
  )
}

export default Account
