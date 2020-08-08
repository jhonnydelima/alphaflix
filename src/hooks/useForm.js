import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    // key: name, description, color, blablabla, asdf, whatever
    setValues({
      ...values,
      [key]: value, // name/description/color: 'value'
    });
  }

  function handleChange(eventInfo) {
    // const { getAttribute, value } = eventInfo.target;
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value,
    );
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
