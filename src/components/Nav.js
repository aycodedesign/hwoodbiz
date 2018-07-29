import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

import Logo from '../assets/images/hwoodbiz.jpg' 

const Nav = (props) => (
    <nav id="nav" className={props.sticky ? 'alt' : ''}>
        <Scrollspy items={ ['top', 'staff', 'story', 'videos', 'auditions', 'registration'] } currentClassName="is-active" offset={-300}>
            <li className="logo">
                <Scroll type="id" element="top">
                    <a href="#"><img src={Logo} alt="Hollywood Biz logo"/></a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="staff">
                    <a href="#">STAFF</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="story">
                    <a href="#">STORY</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="videos">
                    <a href="#">VIDEOS</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="auditions">
                    <a href="#">AUDITIONS</a>
                </Scroll>
            </li>
            <li className="registration">
                <Scroll type="id" element="registration">
                    <a href="#">REGISTRATION</a>
                </Scroll>
            </li>
        </Scrollspy>
    </nav>
)

export default Nav
