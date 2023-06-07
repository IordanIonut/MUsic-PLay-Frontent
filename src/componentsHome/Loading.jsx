import React, {useState, useEffect} from 'react'
import '../style.css'
import '../views/home.css'
import '../views/login.css';

const Loading = () => {
    return(
        <section className="loading home-container">
            <div class="lds-dual-ring"></div>
        </section>
    )
}
export default Loading