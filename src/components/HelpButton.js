import React from 'react';
import qm from '../assets/icons/qm_gold.svg';
import back from '../assets/icons/back.svg';
import {Link, useLocation} from 'react-router-dom';

const HelpButton  = () => {
    const {pathname} = useLocation();
    
    return (
        <Link style={pathname.includes('help') ? {bottom:'20px'} : null} to={pathname.includes('help') ? '/' : '/help/overview'} className='help-icon-container'><img style={pathname.includes('help') ? {width:'30px'} : null} src={pathname.includes('help') ? back : qm} alt=""/></Link>
    )
}

export default HelpButton;