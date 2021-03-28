import React from 'react';
import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Container, Content, Background } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />
      <form>
        <h1>Faça o seu logon</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />
        <Input name="password" icon ={FiLock} type="password" placeholder="Senha" />

        <Button>Entrar</Button>
        <a href="forgot">Esqueci a minha senha</a>
      </form>

      <a href="">
        <FiLogIn />
        Criar conta
        </a>
    </Content>
    <Background />
  </Container>
)

export default SignIn;
