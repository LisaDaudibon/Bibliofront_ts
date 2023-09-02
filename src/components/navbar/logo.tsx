import { Component } from 'react';
import logo from '../../assets/logo.png'
import nameLogo from '../../assets/nameLogo.png'

class Logo extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="Logo" className='logo'/>
        <img src={nameLogo} alt="Logo Name" className='nameLogo'/>
      </div>
    )
  }
}

export default Logo;