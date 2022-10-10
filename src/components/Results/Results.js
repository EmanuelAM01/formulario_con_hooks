import React from 'react';


const Results = (props) =>{
    const {firstName, lastName, email, password, confirmPassword}=props.data;
    return(
        <div>
        <p>Your Form data</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        </div>
    )
}
export default Results;