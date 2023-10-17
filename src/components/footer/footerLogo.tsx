import { Component } from 'react';
import logo from '../../assets/logo.png'
import './footer.css';

class LogoFooter extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="Logo" className='logo'/>
      </div>
    )
  }
}

export default LogoFooter;