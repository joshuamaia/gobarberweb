import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { signOut } from '~/store/modules/auth/actions';
import AvatarInput from './AvatarInput';
import { Container } from './styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="&#xf2c2; Nome completo" />
        <Input
          name="email"
          type="email"
          placeholder="&#xf0e0; Seu endereço de e-mail"
        />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="&#xf084; Sua senha atual"
        />
        <Input
          name="password"
          type="password"
          placeholder="&#xf084; Nova senha"
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="&#xf084; Confirmação de senha"
        />

        <button type="submit">
          <i className="fa fa-refresh"> Atualizar perfil</i>
        </button>
      </Form>

      <button type="button" onClick={handleSignOut}>
        <i className="fa fa-sign-out"> Sair do GoBarber</i>
      </button>
    </Container>
  );
}
