
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
