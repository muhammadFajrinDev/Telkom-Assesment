import { Fragment, useEffect, useState } from 'react';

import './style.css';

function API (url){
  const promise = new Promise((resolve,reject)=>{ 
      fetch(url)
      .then(response => response.json())
      .then(data => {
          resolve(data)
      }).catch(err=>{
          reject(err)
      })
  })
  return promise;
}

function App() {
  
  const [Repositories,setRepositories] = useState([]);
  const [Profile,setProfile] = useState([]);

  
  useEffect(()=>{

    API('https://api.github.com/users/muhammadFajrinDev')
    .then((data)=>{
      setProfile(data)
    }).catch(err=>{
       alert(err)
    })

    API("https://api.github.com/users/muhammadFajrinDev/repos")
    .then((data)=>{
      setRepositories(data)
    }).catch(err=>{
      alert(err)
    })

  },[])
  
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
                            <img src={Profile.avatar_url} class=" w-100 border" alt="..."/> 
                      </h1>
                  </div>
                  <div class="col-md-9 col-sm-9 mt-3">
                      <h3 class="card-title">{Profile.name}</h3>
                      
                      <hr class="my-4"/>
                      
                      <p class="text-primary">
                        <h5>
                           {Profile.bio}
                        </h5>
                      </p>

                      <p class="card-text w-75">
                          {Profile.company}
                      </p>

                       <p class="card-text">
                         <small class="text-muted">{Profile.location}</small>
                       </p>
                       <p class="card-text">
                          <a href={'https://'+Profile.blog}>{Profile.blog}</a>
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
          {
            Repositories.map(data=>{
                return(
                <div class="col-md-6">
                      <div class="card mt-3">   
                        <div class="card-body">
                          <h5 class="card-title">{data.name}</h5>
                          <p class="card-text">{data.description == null ? '-' : data.description}</p>
                          <button class="btn btn-success">Cloning Code</button>
                          
                        </div>
                      </div>
                </div>
                )
            })
          }

        </div>
      </div>
      <footer class=" mt-4 bg-primary">
          <div class="container content-footer">
             <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="" width="40" height="35" class="d-inline-block align-text-top"/>
              <a href="https://www.semutware.com/" class="link-light m-3 link-semut">Semutware.com</a>
          </div>
      </footer>
    </Fragment>
  );
}

export default App;
