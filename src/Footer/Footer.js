import React from 'react'
import FooterCol from './FooterCol';
import FooterMain from './FooterMain';
import FooterLine from './FooterLine';
import ScrollToTop from './ScrollToTop';

function Footer() {
    return (
        <div>
            <ScrollToTop/>
            <FooterCol/>
            <FooterMain/>
            <FooterLine/>
            
        </div>
    )
}

export default Footer
