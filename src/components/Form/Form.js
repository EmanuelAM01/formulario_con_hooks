import React, {useState} from "react";
import style from './Form.module.css';

const Form = (props) =>{
    const {inputs, setInputs} = props;

    const onChange = (e) =>{
        setInputs({...inputs,
        [e.target.name] : e.target.value
        })
    }
    return(
        <form>
            <div id={style.allform}>
            <div className="form-group}" id={style.form}>
            <label htmlFor="firstName">First Name: </label>
            <input onChange={onChange} type="text" name="firstName" id={style.input}/>
            </div>
            <div className="form-group" id={style.form} >
            <label htmlFor="lastName">Last Name: </label>
            <input onChange={onChange} type="text" name="lastName" id={style.input}/>
            </div>
            <div className="form-group" id={style.form} >
            <label htmlFor="email">email: </label>
            <input onChange={onChange} type="text" name="email" id={style.input}/>
            </div>
            <div className="form-group"  id={style.form}>
            <label htmlFor="password">Password: </label>
            <input onChange={onChange} type="password" name="password" id={style.input}/>
            </div>
            <div className="form-group"  id={style.form}>
            <label htmlFor="confirmPassword">Confirm Password: </label>
            <input onChange={onChange} type="password" name="confirmPassword" id={style.input}/>
            </div>
            </div>
        </form>
    )
}


export default Form;