export default function validateInfo(values){
    let errors ={};

    if(!values.unames.trim()){
        errors.unames = "Name is required";
    }

    if(!values.email){
        errors.email = "Email required";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
         errors.email = "Email address is invalid";
    }

    if(!values.location){
        errors.location = 'location is required';
    } 
    if (!values.message) {
      errors.message = "message is required";
    } 
    return errors
}