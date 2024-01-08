import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import p1 from './cu.png'
function Contact(){
    return(
        <>
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
              <div className="col-md-6">
        <h2 className="mt-2 mb-2"> Contact Us here </h2>
        <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Name</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
</div>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Your Query Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  
</div>
<input type="submit" className="btn btn-success"/>
</div>
</div>
<div className="col-md-3"></div>
</div>
        </>
    )
}
export default Contact