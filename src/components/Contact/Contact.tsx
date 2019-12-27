import React from 'react';
import './contact.css';
export default function Contact() {
    return (
        <div className="contact-con">
            <p className="contact-title">Contact Me</p>
            <section className="input-con">
                <input className="input-details" type="text" /><br></br>
                <input className="input-details" type="text" /><br></br>
                <input className="input-message" type="text" />
                <button className="send-button">Sent</button>
            </section>
            <section>
                <p className="info-title">TELEPHONE</p>
                <p className="info">+234 7085282955</p>
                <p className="info-title">EMAIL</p>
                <p className="info">peteryar19@gmail.com</p>
                <p className="info-title">ADDRESS</p>
                <p>Niger Delta University <br>
                </br> Wilberforce Island Amassoma, <br></br>
                    Department of Petroleum Engineering</p>
            </section>
        </div>
    );
}
