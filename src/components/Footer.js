import React from 'react'
import Link from 'gatsby-link'

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>visit our sponsors:</h2>

        </section>
        <section>
            <h2>contact us:</h2>
            <dl className="alt">
                <ul>
                <li><Link to="/generic" className="button special">REGISTRATION</Link></li></ul>
                <dt>Phone</dt>
                <dd><a href="tel:+8183973578">818.397.3578</a></dd>
                <dt>Email</dt>
                <dd><a href="mailto:hollywoodbiz15@gmail.com">hollywoodbiz15@gmail.com</a></dd>
            </dl>
            <ul className="icons">
                <li><a href="#" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="#" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
            </ul>
        </section>
        <p className="copyright">coded by  <a href="https://ay-digitaldesign.netlify.com">&lt;ayDigitalDesign&gt;</a>.</p>
    </footer>
)

export default Footer
