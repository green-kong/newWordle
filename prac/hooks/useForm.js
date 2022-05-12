import { useState, useEffect } from 'react';

const useForm = (state, validate, submitHandler) => {
  const [values, setValues] = useState(state);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    const init = async () => {
      if (submit) {
        if (Object.keys(errors).length === 0) {
          submitHandler(values);
        }
        setSubmit(false);
      }
    };
    init();
  }, [errors]);

  const onChange = (e) => {
    const {
      target: { name, value },
    } = e;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    setErrors(validate(values));
  };

  return { onChange, onSubmit, errors, values };
};

export default useForm;
