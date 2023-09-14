import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className='login-page'>
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="text-part d-flex flex-column">
              <h1>LOGIN</h1>

              <input type="text" placeholder='Username' />
              <input type="password" placeholder='Password' />

              <button>LOGIN</button>

            </div>

            <div>
              <a href="signup-Page" className="mt-3 w-100 text-center"> Not Yet Registerd ? Click Here To Sign Up</a>
            </div>

          </div>
          </div>
          
              <div className="col-md-5 image-part">
                <img
                  className="my-image"
                  src="https://images.unsplash.com/photo-1583902340370-6a3fc847d373?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1903&q=80"
                  alt="" />
              </div>

        </div>
    </div>
  );
}

export default App;
