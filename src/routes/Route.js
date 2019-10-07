import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '~/pages/_layouts/auth';
import DefaulLayout from '~/pages/_layouts/default';
import { store } from '~/store';
/**
 * Wrapper para Route do react-router-dom
 * Faz as devidas validações antes do usuário acessar a página
 */
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // flag para usuário logado
  const { signed } = store.getState().auth;

  // caso o usuário não esteja logado e a rota for privada
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // caso o usuário já esteja logado, redireciona o usuário
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // definição do layout
  const Layout = signed ? DefaulLayout : AuthLayout;

  // retorna o componente acessado
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
