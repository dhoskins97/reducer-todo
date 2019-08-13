import React, { useState } from 'react';
import { Field, Form, withFormik } from 'formik';
import * as yup from 'yup';

const Input = ({ errors, touched }) => {
    
    return (
        <div className="inputContainer">
           
            <Form>

                <div>
                    {touched.taskname && errors.taskname && <p>{errors.taskname}</p>}
                    <Field type="text" name="taskname" placeholder="Task name here" />
                </div>
                
                <button type="submit" >Create Task</button> 

            </Form>

        </div>
    )
}


const FormikInput = withFormik({
    mapPropsToValues({taskname}){
        return {
            taskname: taskname || "",
        }
    },

    validationSchema: yup.object().shape({
        taskname: yup.string().required("Enter a task name!"),
    }),

    handleSubmit(values){
        console.log(values)
    }
})(Input)

export default FormikInput;