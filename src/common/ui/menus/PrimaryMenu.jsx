import React from 'react'
// import PropTypes from 'prop-types'

const PrimaryMenu = props => {
  return (
    <nav>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/link">Link</a>
            </li>
            <li className="nav-item dropdown">
              <button className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Sandbox
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="/sandbox/forms">Forms</a></li>
                <li><a className="dropdown-item" href="/sandbox/modals">Modals</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/sandbox/auth">Authentication</a></li>
              </ul>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

PrimaryMenu.propTypes = {

}

export default PrimaryMenu
