import React, {Fragment, useRef} from 'react';
import {Link} from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import './login.css'

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: "", 
            password: ""
        }
    })

    const initialValues= {
        email: "", 
        password: ""
    }

    
    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            setSubmitting(false);
        }, 400);
        console.log(values)
    };

    const loginSchema = Yup.object().shape({
        password: Yup.string()
          .min(4, "Too Short!")
          .max(20, "Too Long!")
          .required("Required"),
        email: Yup.string().email("Invalid email").required("Required")
    });

    let passRef,emailRef=useRef();
    const SubmitLogin=()=>{
    }
    const FaceLogin = ()=> {
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4 className='Heading'>SIGN IN</h4>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={loginSchema}
                                    onSubmit={handleSubmit}
                                    >
                                    {({ isSubmitting }) => {
                                        return (
                                        <Form>
                                            <Field placeholder="User Email" className="form-control animated fadeInUp" type="email" name="email" />
                                            {/* <ErrorMessage name="email" component="div" /> */}
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                                className="text-danger text-blue-50"
                                            />
                                            <br/>
                                            <Field placeholder="User Password" className="form-control animated fadeInUp" type="password" name="password" />
                                            <ErrorMessage className="text-danger text-blue-50" name="password" component="div" />
                                            <br/>
                                            <button type="submit" disabled={isSubmitting} className="btn w-100 animated fadeInUp float-end btn-primary">Submit</button>
                                        </Form>
                                        );
                                    }}
                                </Formik>


                                {/* <br/>
                                <input ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <input ref={(input)=>passRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={SubmitLogin} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                                <button onClick={FaceLogin} className="btn w-100 animated fadeInUp float-end btn-primary">Face-Login</button>
                                <hr/>
                                <div className="float-end mt-3">
                                    <span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/FaceRegistration">Face ID Registry</Link>
                                        <span className="ms-1">|</span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/Registration">Sign Up </Link>
                                        <span className="ms-1">|</span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/SendOTP">Forget Password</Link>
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Login;