import { Fragment } from 'react';
import './style.css';


function App() {
  return (
    <Fragment>
        <nav class="navbar navbar-dark bg-primary">
          <div class="container">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="" width="40" height="35" class="d-inline-block align-text-top"/>
                <span class="m-3">
                  <a href="https://github.com/muhammadFajrinDev" class="btn btn-primary stretched-link">github.com/muhammadFajrinDev</a>
                </span>
              </a>
            </div>
          </div>
        </nav>
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
              <div class="jumbotron mt-4 p-3">
                <div class="row">
                  <div class="col-md-3 col-sm-3 ">
                      <h1 class="display-4">
                            <img src="https://avatars.githubusercontent.com/u/68458175?v=4" class=" w-100 border" alt="..."/> 
                      </h1>
                  </div>
                  <div class="col-md-9 col-sm-9 mt-3">
                      <h3 class="card-title">Muhammad Fazrin Fahlevi  </h3>
                      
                      <hr class="my-4"/>
                      
                      <p class="text-primary">
                        <h5>
                            Software Developer
                        </h5>
                      </p>

                      <p class="card-text w-75">Integrity Database Programmer in Technical Services Contract for Integrity and Management Corrosion Services - PT. Pertamina Hulu Energy ONWJ & Founder Semutware.com</p>
                       <p class="card-text">
                         <small class="text-muted">Jakarta - Indonesia</small>
                       </p>
                       <p class="card-text">
                          <a href="https://www.linkedin.com/in/mohammad-fajrin-fahlevi-4822911b9">https://www.linkedin.com/in/mohammad-fajrin-fahlevi-4822911b9</a>
                       </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div class="row mt-3">
            <div class="col">
            <button type="button" class="btn btn-primary position-relative">
              Repositories
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                10
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>   
        </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-6">
                  <div class="card">
                    
                    <div class="card-body">
                      <h5 class="card-title">Live-Chat-Helpdesk-ONLY-CLIENT</h5>
                      <p class="card-text">Live-Chat-Helpdesk-ONLY-CLIENT</p>
                      <a href="#" class="btn btn-success">Cloning Code</a>
                      
                    </div>
                  </div>
            </div>
            <div class="col-md-6">
                  <div class="card">
                    
                    <div class="card-body">
                      <h5 class="card-title">React-Native-Learn</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" class="btn btn-success">Cloning Code</a>
                    </div>
                  </div>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-md-6">
                  <div class="card">
                    
                    <div class="card-body">
                      <h5 class="card-title">RedBuzz-Learn</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" class="btn btn-success">Cloning Code</a>
                    </div>
                  </div>
            </div>
            <div class="col-md-6">
                  <div class="card">
                    
                    <div class="card-body">
                      <h5 class="card-title">Send-Order-Management-System</h5>
                      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                      <a href="#" class="btn btn-success">Cloning Code</a>
                    </div>
                  </div>
            </div>
        </div>
      </div>
      {/* <footer class="footer mt-4 bg-primary">
          <div class="container">
             <a class="navbar-brand" href="https://www.semutware.com/">
                <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="" width="40" height="35" class="d-inline-block align-text-top"/>
                <span class="m-3">
                  <a href="#" class="btn btn-primary stretched-link">Visit Semutware.com</a>
                </span>
              </a>
          </div>
      </footer> */}
    </Fragment>
  );
}

export default App;
