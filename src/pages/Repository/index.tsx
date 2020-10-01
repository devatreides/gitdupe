import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import logoImg from '../../assets/logo-gitdupe.svg';
import { Header } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <Header>

    </Header>
  );
};

export default Repository;