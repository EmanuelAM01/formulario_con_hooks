import React, {useState} from "react";
import style from './Form.module.css';

const Form = (props) =>{
    const {inputs, setInputs} = props;
    const [hasBeenSubmitted, sethasBeenSubmitted] = useState('');
    const [titleErrorfirstName, setTitleErrorfirstName] = useState("");
    const [titleErrorlastName, setTitleErrorlastName] = useState("");
    const [titleErroremail, setTitleErroremail] = useState("");
    const [titleErrorpassword, setTitleErrorpassword] = useState("");
    const [titleErrorconfirmPassword, setTitleErrorconfirmPassword] = useState("");

    const onChange1 = (e) =>{
        setInputs({...inputs,
        [e.target.name] : e.target.value
        });
        if(e.target.value.length<=2){setTitleErrorfirstName("First Name must be at leat 2 characters.");}
        else{setTitleErrorfirstName("")}
    }

    const onChange2 = (e) =>{
        setInputs({...inputs,
        [e.target.name] : e.target.value
        });
        if(e.target.value.length<=2){setTitleErrorlastName("last Name must be at leat 2 characters.");}
        else{setTitleErrorlastName("")}
    }
    
    
    const onChange3 = (e) =>{
        setInputs({...inputs,
        [e.target.name] : e.target.value
        });
        if(e.target.value.length<=5){setTitleErroremail("email must be at leat 5 characters.");}
        else{setTitleErroremail("")}
    }

    
    const onChange4 = (e) =>{
        setInputs({...inputs,
        [e.target.name] : e.target.value
        });
        if(e.target.value.length<=8){setTitleErrorpassword("Password must be at leat 8 characters.");}
        else{setTitleErrorpassword("")}
    }
    
    const onChange5 = (e) =>{
        setInputs({...inputs,
        [e.target.name] : e.target.value
        });
        if(e.target.value !== inputs.password){setTitleErrorconfirmPassword("Passwords must match.");}
        else{setTitleErrorconfirmPassword("")}
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        sethasBeenSubmitted(true);
    }
    return(
        <form  onSubmit={onSubmit}>
            <div id={style.allform}>
            {
            hasBeenSubmitted ? 
            <h3>Thank you for submitting the form!</h3> :
            <h3>Welcome, please submit the form.</h3> 
            }
            <div className="form-group}" id={style.form}>
            <label htmlFor="firstName">First Name: </label>
            <input onChange={onChange1} type="text" name="firstName" id={style.input}/>
            {
                    titleErrorfirstName ?
                    <p style={{color:'red'}}>{ titleErrorfirstName }</p> :
                    ''
                }
            </div>
            <div className="form-group" id={style.form} >
            <label htmlFor="lastName">Last Name: </label>
            <input onChange={onChange2} type="text" name="lastName" id={style.input}/>
            {
                    titleErrorlastName ?
                    <p style={{color:'red'}}>{ titleErrorlastName }</p> :
                    ''
                }
            </div>
            <div className="form-group" id={style.form} >
            <label htmlFor="email">email: </label>
            <input onChange={onChange3} type="text" name="email" id={style.input}/>
            {
                    titleErroremail ?
                    <p style={{color:'red'}}>{ titleErroremail }</p> :
                    ''
                }
            </div>
            <div className="form-group"  id={style.form}>
            <label htmlFor="password">Password: </label>
            <input onChange={onChange4} type="password" name="password" id={style.input}/>
            {
                    titleErrorpassword ?
                    <p style={{color:'red'}}>{ titleErrorpassword }</p> :
                    ''
                }
            </div>
            <div className="form-group"  id={style.form}>
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input onChange={onChange5} type="password" name="confirmPassword" id={style.input}/>
                        {
                    titleErrorconfirmPassword ?
                    <p style={{color:'red'}}>{ titleErrorconfirmPassword }</p> :
                    ''
                }
            </div>
            <input type="submit" value="create user"></input>
            </div>
        </form>
    )
}


export default Form;