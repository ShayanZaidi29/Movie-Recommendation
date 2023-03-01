/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./UserProfile.css";
function UserProfile() {  
    return (
       <div className="container rounded bg-white mt-5 mb-5">
    <div className="row">
        <div className="col-md-3 ">
            
        </div>
        <div className="col-md-5 ">
            <div className="p-3 py-5" id="cardView">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                
                <div id='i1' >
                  <img className="image"  src="../Images/userprofile.jpg" alt='userprofile'id="imgcontainer" /><br/>
                    <span className="font-weight-bold">User</span><span className="text-black-50"></span></div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" /></div>
                    <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" placeholder="surname"/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" /></div>
                    <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="enter address line 1" /></div>
                    <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="enter address line 2" /></div>
                    <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="eg 401202" /></div>
                    <div className="col-md-12"><label className="labels">City</label><input type="text" className="form-control" placeholder="enter City" /></div>
                    <div className="col-md-12"><label className="labels">Landmark</label><input type="text" className="form-control" placeholder="enter Landmark" /></div>
                    <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" /></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" /></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control"  placeholder="state"/></div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
       
    </div>
</div>


    );
}

export default UserProfile