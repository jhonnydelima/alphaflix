import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CategoryRegistration() {
  const initialValues = {
    name: '',
    description: '',
    color: ''
  }

  const [categories, setCategories] = useState([]);
  const [values, setValues] = useState(initialValues);


  function setValue(key, value) {
    // key: name, description, color, blablabla, asdf, whatever
    setValues({
      ...values,
      [key]: value // name/description/color: 'value'
    })
  }

  function handleChange(eventInfo) {
    // const { getAttribute, value } = eventInfo.target;
    setValue(
      eventInfo.target.getAttribute('name'),
      eventInfo.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault();
        setCategories([
          ...categories,
          values
        ]);

        setValues(initialValues)
      }}>

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="text"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              value={values.description}
              name="description"
              onChange={handleChange}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, index) => {
          return (
            <li key={`${category}${index}`}>
              {category.name}
            </li>
          )
        })}
      </ul>


      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CategoryRegistration;