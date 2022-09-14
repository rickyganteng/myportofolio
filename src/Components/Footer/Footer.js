import React, { Component } from 'react';
import style from './Footer.module.css';
import { ImHeart } from 'react-icons/im';
class Footer extends Component {
  render() {
    return (
      <div className='pb-3'>
        <hr />
        <h5 className={style.Justify}>
          © 2022 - Ricky syahputra. All rights reserved.
        </h5>
        <h6 className={style.Justify}>
          I <ImHeart /> Indonesia.
        </h6>
      </div>
    );
  }
}

export default Footer;
