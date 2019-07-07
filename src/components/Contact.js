import React, { Component } from 'react';
<<<<<<< HEAD
=======
import classes from './Contact.module.css';
import map from '../assets/networkTwo.png';
import location from '../assets/maps-and-flags.png';
import phone from '../assets/phone-receiver.png';
import mail from '../assets/close-envelope.png';

>>>>>>> 29d6ea196bb7a99ab722048686f78389a44be7da

export default class Contact extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div style={{ height: '70vh' }} className='container valign-wrapper'>
        <div className='row white'>
          <div className='col s12 center-align'>
            <div className='section-title' style={{ textAlign: 'center' }}>
              <h1
                style={{
                  fontSize: '5vw',
                  fontFamily: 'Lato, sans-serif',
                  color: 'grey',
                  fontWeight: 300
                }}
                className='head-title blue'
              >
                Contact Us
              </h1>
              <div
                className='contac-info'
                style={{
                  display: 'block',
                  position: 'relative',
                  bottom: '25px'
                }}
              >
                <span
                  style={{
                    position: 'relative',
                    left: '350px',
                    top: '35px',
                    backgroundColor: 'white',
                    display: 'block',
                    blockSize: '125px',
                    width: '190px'
                  }}
                >
                  Map Will go here
                </span>
                <ul
                  style={{
                    listStyle: 'none',
                    position: 'relative',
                    bottom: '100px'
                  }}
                >
                  <li style={{ marginBottom: '10px' }}>Dallas,TX</li>
                  <li style={{ marginBottom: '10px' }}>
                    Phone: <span>555-555-555</span>
                  </li>
                  <li>
                    Email: <span> info@vydr.io</span>
                  </li>
                </ul>
                <span
                  style={{
                    display: 'block',
                    width: '650px',
                    position: 'relative',
                    left: '350px',
                    bottom: '80px'
                  }}
                >
                  Feel free to drop us a message with your contact information
                  and we will get in touch with you as soon as possible
                </span>
              </div>
              <div
                className='forms'
                style={{
                  display: 'block',
                  position: 'relative',
                  bottom: '100px'
                }}
              >
                <form>
                  <input
                    placeholder='Message'
                    style={{
                      width: '195px',
                      blockSize: '60px',
                      borderRadius: '.3rem',
                      fontSize: '30px',
                      textAlign: 'center'
                    }}
                  />
                  <br />
                  <input
                    placeholder='Email Address'
                    style={{ fontSize: '30px', textAlign: 'center' }}
                  />
                  <input
                    placeholder='Full Name'
                    style={{ fontSize: '30px', textAlign: 'center' }}
                  />
                  <span
                    className='btn'
                    style={{
                      background: 'blue',
                      borderRadius: '.4rem',
                      position: 'relative'
                    }}
                  >
                    <a href='#' style={{ textShadow: 'red' }}>
                      Send
                    </a>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
=======
      <div style={{marginTop: '-2%'}}>
        <h1 className={classes.Tittle}>Contact us</h1>
        <div className={classes.Main}>
          <div className={classes.Map}>
            <img src={map} alt='map'/>
          </div>
          <div className={classes.PartTwo}>
            <div className={classes.Sentences}>
              <img src={location} alt='location icon'/>
              <p><strong>Location:</strong> Dallas, Tx.</p>
            </div>
            <div className={classes.Sentences}>
              <img src={phone} alt='location icon'/>
              <p><strong>Phone:</strong> coming soon...</p>
            </div>
            <div className={classes.Sentences}>
              <img src={mail} alt='location icon'/>
              <p><strong>Email:</strong> info@vydr.io</p>
            </div>
          </div>
        </div>

>>>>>>> 29d6ea196bb7a99ab722048686f78389a44be7da
      </div>
    );
  }
}
