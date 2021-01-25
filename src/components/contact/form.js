import { useState, useEffect } from "react";
import axios from "axios";
import {Base} from '../../utils/baseUrl'
const FormDetails = (Formsubmit, validate) => {
  const [values, setValues] = useState({
    unames: "",
    email: "",
    phoneNumber: "",
    location: "",
    message: "",
  });
  const [submitError, setSubmitError] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      axios
        .post('https://paintdepo.herokuapp.com/send', values)
        .then((success) => {
          Formsubmit();
        })
        .catch((error) => {
          setSubmitError({
            submiterror: "message not sent",
          });
        });
    }
  }, [errors, isSubmitting, Formsubmit, setSubmitError, values]);

  return { handleChange, values, handleSubmit, errors, submitError };
};

export default FormDetails;
