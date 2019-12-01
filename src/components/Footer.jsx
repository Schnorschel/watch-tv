import React from 'react'

const Footer = () => {
  return (
    <section className="footer">
      <section className="footerElement">
        <a href="https://www.themoviedb.org">
          <img
            className="attributionLogo"
            src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
            alt="The Movie DB Logo"
          />
        </a>
      </section>
      <p className="footerElement footerText attributionText">
        This product uses the{' '}
        <a href="https://www.themoviedb.org/documentation/api">TMDb API</a> but
        is not endorsed or certified by TMDb.
      </p>
      <p className="footerElement footerText madeAtText">
        Made with &hearts; at <a href="http://suncoast.io">SDG</a>
      </p>
    </section>
  )
}
export default Footer
