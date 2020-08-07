import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

const SubmitButton = styled.button`
  background: var(--grayDark);
  border: 1px solid var(--white);
  border-radius: 5px;
  box-sizing: border-box;
  color: var(--white);
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 24px;
  padding: 16px 24px;
  outline: none;
  text-decoration: none;
  transition: opacity .3s;

  &:hover,
  &:focus {
    opacity: .5;
  }
`;

function CategoryRegistration() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };

  const [categories, setCategories] = useState([]);
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

  // ======================================== //

  useEffect(() => {
    if (window.location.href.includes('localhost')) {
      const URL = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categories'
        : 'https://alphaflix.herokuapp.com/categories';
      fetch(URL)
        .then(async (serverResponse) => {
          if (serverResponse.ok) {
            const response = await serverResponse.json();
            setCategories(response);
            return;
          }
          throw new Error('Não foi possível pegar os dados');
        });
    }
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.name}
      </h1>

      <form onSubmit={function handleSubmit(eventInfo) {
        eventInfo.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);

        setValues(initialValues);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <SubmitButton>
          Cadastrar
        </SubmitButton>
      </form>

      <ul>
        {categories.map((category) => (
          <li key={`${category.name}`}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CategoryRegistration;
