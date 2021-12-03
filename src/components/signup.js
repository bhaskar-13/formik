import React from "react";
import {Formik,Form} from "formik";
import { TextField } from "./textfield";
import * as Yup from 'yup'; 
//sign up component
export const SignUp=()=>{
    const validate=Yup.object({
        firstName:Yup.string().max(15,"Maximum 15 character allowed").required(" first name is required"),
        lastName:Yup.string().max(10,"Maximum 10 character allowed").required("last name required"),
        email:Yup.string().email("email is invalid").required(" email is required"),
        password:Yup.string().min(6,"minimum 6 character").required("password is required"),
        confirmPassword:Yup.string().oneOf([Yup.ref("password"),null],"password Must Match").required("confirm password required")

    })
   return(
       
    
       <Formik
         initialValues={
        {
             firstName:"",
             lastName:"",
             email:"",
             password:"",
             confirmPassword:""

       }

       }


       validationSchema={validate}
    
       onSubmit={values=>{
           console.log(values);
       }}

       >
        {formik=>(
          <div>
              <h1 className="my-4 font-weight:bold-display-4">Sign Up</h1>
             
              <Form>
            
                <TextField label="First Name" name="firstName" type="text" />
                <TextField label="Last Name" name="lastName" type="text" />
                <TextField label="Email" name="email" type="text" />
                <TextField label="Password" name="password" type="text" />
                <TextField label="ConfirmPassword" name="confirmPassword" type="text" />
                <button className="btn btn-dark mt-3" type="submit">Submit</button>
              </Form>
          </div>
        )}
        
      </Formik>
    

   )
 
}