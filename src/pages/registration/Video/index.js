import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';
import videosRepository from '../../../repositories/videos';

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

function VideoRegistration() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoryNames = categories.map(({ name }) => name);
  const { handleChange, values } = useForm({
    title: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=jOAU81jdi-c',
    category: 'Front End',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado com sucesso!!!');

        const chosenCategory = categories.find((category) => category.name === values.category);

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: chosenCategory.id,
        })
          .then(() => {
            // eslint-disable-next-line no-console
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="category"
          value={values.categoryNames}
          onChange={handleChange}
          suggestions={categoryNames}
        />

        <SubmitButton type="submit">
          Cadastrar
        </SubmitButton>
      </form>

      <br />
      <br />

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default VideoRegistration;
