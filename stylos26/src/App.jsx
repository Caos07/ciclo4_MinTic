import React from 'react'
import './style/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App =()=>{
    return(
        <>
        {/*<!--Main Navigation-->*/}
        <header>
          {/*<!-- Navbar -->*/}
          <nav className="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style={{'z-index': '2000'}}>
            <div className="container-fluid">
              {/*<!-- Navbar brand -->*/}
              <a className="navbar-brand nav-link" target="_blank" href="https://mdbootstrap.com/docs/standard/">
                <strong>MDB</strong>
              </a>
              <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
                aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarExample01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" aria-current="page" href="#intro">Home</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                      target="_blank">Learn Bootstrap 5</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://mdbootstrap.com/docs/standard/" target="_blank">Download MDB UI KIT</a>
                  </li>
                </ul>
      
                <ul className="navbar-nav d-flex flex-row">
                  {/*<!-- Icons -->*/}
                  <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow"
                      target="_blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="https://www.facebook.com/mdbootstrap" rel="nofollow" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="https://twitter.com/MDBootstrap" rel="nofollow" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="nav-item me-3 me-lg-0">
                    <a className="nav-link" href="https://github.com/mdbootstrap/mdb-ui-kit" rel="nofollow" target="_blank">
                      <i className="fab fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/*<!-- Navbar -->*/}
      
          {/*<!-- Background image -->*/}
          <div id="intro" className="bg-image shadow-2-strong">
            <div className="mask d-flex align-items-center h-100" style={{'background-color': 'rgba(0, 0, 0, 0.8)'}}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-xl-5 col-md-8">
                    <form className="bg-white rounded shadow-5-strong p-5">
                      {/*<!-- Email input -->*/}
                      <div className="form-outline mb-4">
                        <input type="email" id="form1Example1" className="form-control" />
                        <label className="form-label" for="form1Example1">Email address</label>
                      </div>
      
                      {/*<!-- Password input -->*/}
                      <div className="form-outline mb-4">
                        <input type="password" id="form1Example2" className="form-control" />
                        <label className="form-label" for="form1Example2">Password</label>
                      </div>
      
                      {/*<!-- 2 column grid layout for inline styling -->*/}
                      <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                          {/*<!-- Checkbox -->*/}
                          <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                            <label className="form-check-label" for="form1Example3">
                              Remember me
                            </label>
                          </div>
                        </div>
      
                        <div className="col text-center">
                          {/*<!-- Simple link -->*/}
                          <a href="#!">Forgot password?</a>
                        </div>
                      </div>
      
                      {/*<!-- Submit button -->*/}
                      <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- Background image -->*/}
        </header>
        {/*<!--Main Navigation-->*/}
      
        {/*<!--Footer-->*/}
        <footer className="bg-light text-lg-start">
          <div className="py-4 text-center">
            <a role="button" className="btn btn-primary btn-lg m-2"
              href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow" target="_blank">
              Learn Bootstrap 5
            </a>
            <a role="button" className="btn btn-primary btn-lg m-2" href="https://mdbootstrap.com/docs/standard/" target="_blank">
              Download MDB UI KIT
            </a>
          </div>
      
          <hr className="m-0" />
      
          <div className="text-center py-4 align-items-center">
            <p>Follow MDB on social media</p>
            <a href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" className="btn btn-primary m-1" role="button"
              rel="nofollow" target="_blank">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://www.facebook.com/mdbootstrap" className="btn btn-primary m-1" role="button" rel="nofollow"
              target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/MDBootstrap" className="btn btn-primary m-1" role="button" rel="nofollow"
              target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://github.com/mdbootstrap/mdb-ui-kit" className="btn btn-primary m-1" role="button" rel="nofollow"
              target="_blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
      
          {/*<!-- Copyright -->*/}
          <div className="text-center p-3" style={{'background-color': 'rgba(0, 0, 0, 0.2)'}}>
            © 2020 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
          </div>
          {/*<!-- Copyright -->*/}
        </footer>
        {/*<!--Footer-->*/}
          {/*<!-- MDB -->*/}
          <script type="text/javascript" src="js/mdb.min.js"></script>
          {/*<!-- Custom scripts -->*/}
          <script type="text/javascript" src="js/script.js"></script>
        </>
    )
}
export default App;