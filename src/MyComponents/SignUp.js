<<<<<<< HEAD
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SignUp.css"
import Select from 'react-select';


function SignUp() {
  

const aquaticCreatures = [
  { label: 'Action ', value: 'Action ' },
  { label: 'Animation', value: 'Animation' },
  { label: 'Comedy ', value: 'Comedy ' },
  { label: 'Crime', value: 'Crime' },
  { label: 'Drama', value: 'Drama' },
  { label: 'Fantasy', value: 'Fantasy' },
  { label: 'Historical ', value: 'Historical' },
  { label: 'Horror ', value: 'Horror' },
  { label: 'Romance ', value: 'Romance' },
  { label: 'Sci-Fi ', value: 'Sci-Fi' },
  { label: 'Thriller ', value: 'Thriller' },
  { label: 'Western ', value: 'Western' },
  { label: 'Other', value: 'Other' },

];

  return (
    <>
    <section className="signup">
      <div className="container mt-5">
        <div className="sign-up content">
          <div className="signup form">
            <form className='register-form' id='register-form'>
              <div className='form-group'>
              <h2 className='form-title'>SignUp</h2><br/>
              <label htmlFor="name">
                <i className="zmdi zmdi-account material-icon-name"></i>
              </label> &nbsp;
              <input type="text" name='name' id='name' autoComplete='on' placeholder='Enter your name' /> <br/><br/>
              </div>

              <div className='form-group'>
              <label htmlFor="email">
                <i className="zmdi zmdi-email material-icon-name"></i>
              </label> &nbsp;
              <input type="email" name='email' id='email' autoComplete='on' placeholder='Enter the email' /><br/><br/>
              </div>

              <div className='fom-group'>
              <label htmlFor="phone">
                <i className="zmdi zmdi-phone-in-talk material-icon-name"></i>
              </label> &nbsp;
              <input type="number" name='phone' id='phone' autoComplete='off' placeholder='Enter your phone number' /> <br/><br/>
              </div>

             <div className='form-group'>
             <label htmlFor="pass">
              <i className="zmdi zmdi-lock material-icon-name"></i>
              </label> &nbsp;
              <input type="password" name='pass' id='pass' autoComplete='off' placeholder='Enter your password' /> <br/><br/>
             </div>

             <div className='form-group'>
             <label htmlFor="rpass">
              <i className="zmdi zmdi-lock material-icon-name"></i>
              </label> &nbsp;
              <input type="password" name='pass' id='rpass' autoComplete='off' placeholder='Re Enter your password' /> <br/><br/>
             </div>

             <div className='form-group'>
             <Select options={aquaticCreatures} isMulti onChange={opt => console.log(opt)}/>

             </div>
             
             <div className='button'>
              <input type="submit" name="signedup" id='signup' className='form-submit' value="register" />
             </div>

            </form>
          </div>

        </div>
      </div>

    </section>
    </>
  )
}

export default SignUp
||||||| empty tree
=======
import React from 'react'

function SignUp() {
  return (
    <div>
      <section className="vh-100 bg-image" id='i1'>
  <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" id='i2'>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>

              <form>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                  <label className="form-label">Your Name</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="email" id="form3Example3cg" className="form-control form-control-lg" />
                  <label className="form-label">Your Email</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                  <label className="form-label">Password</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                  <label className="form-label">Repeat your password</label>
                </div>

                <div className="form-check d-flex justify-content-center mb-5">
                  <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label className="form-check-label">
                    I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div className="d-flex justify-content-center">
                  <button type="button"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    className="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default SignUp
>>>>>>> b10e2cb654d3d089dd1dac0f12ad5ecdb58f1a0b
