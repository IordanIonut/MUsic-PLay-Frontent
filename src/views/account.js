import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom';
import './account.css'
import { useHistory } from 'react-router-dom';

const Account = () => {
  const [statusHomeButton, setStatusHomeButton] = React.useState(false);
  const [statusTredingButton, setStatusTredingButton] = React.useState(false);
  const {id} = useParams();
  const history = useHistory();

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
  },[id, statusHomeButton, statusTredingButton]);

  return (
    <div className="account-container">
      <Helmet>
        <title>MusicPLay</title>
        <meta
          property="og:title"
          content="MusicPLay"
        />
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
            <span className="account-text01 text">
              <span>Name ...........</span>
              <br></br>
            </span>
            <div className="account-account2 posibili">
              <button id="name" name="name" type="button" disabled autoFocus className="account-button4 button account">
                <svg viewBox="0 0 1024 1024" className="account-icon08">
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </button>
            </div>
            <span className="account-text01 text">
              <span>Email ...........</span>
              <br></br>
            </span>
            <div className="account-account2 posibili" style={{top: '90px'}}>
              <button id="email" name="email" type="button" disabled autoFocus className="account-button4 button account">
                <svg viewBox="0 0 1024 1024" className="account-icon08">
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </button>
            </div>
            <span className="account-text01 text">
              <span>Password ...........</span>
              <br></br>
            </span>
            <div className="account-account2 posibili" style={{top: '170px'}}>
              <button id="password" name="password" type="button" disabled autoFocus className="account-button4 button account">
                <svg viewBox="0 0 1024 1024" className="account-icon08">
                  <path d="M884 300l-78 78-160-160 78-78q12-12 30-12t30 12l100 100q12 12 12 30t-12 30zM128 736l472-472 160 160-472 472h-160v-160z"></path>
                </svg>
              </button>
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
