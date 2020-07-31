import React from 'react'
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CategoryRegistration() {
    return (
      <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
}

export default CategoryRegistration;