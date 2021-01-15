import {useState, useEffect} from 'react';

const FormDetails=(Formsubmit ,validate)=>{
    const [values, setValues]= useState({
        unames:'',
        email:'',
        phoneNumber: '',
        location:'',
        message:''
    })

    const [errors, setErrors]=useState({});
    const [isSubmitting, setIsSubmit] = useState(false);

    const handleChange =e=> {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit=e=>{
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmit(true)
    };

    useEffect(
        ()=>{
            if(Object.keys(errors).length === 0 && isSubmitting){
                Formsubmit();
            }
        }, [errors]
    )

    return {handleChange, values,handleSubmit,errors}
}

export default FormDetails;