import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido!')
      .required('O e-mail é obrigatório!'),
    password: Yup.string()
      .min(6, 'Mínimo de 6 caracteres')
      .required('A senha é obrigatória!'),
    name: Yup.string().required('O nome é orbigatório!'),
  });

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
