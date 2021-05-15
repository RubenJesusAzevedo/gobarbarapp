import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';

import { ToastMesssage } from '../../hooks/toast';
import { Container } from './styles';

interface ToastContainerProps {
  messages: ToastMesssage[];
}

const ToasteContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    {
      keys: message => message.id,
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 1 },
    },
  );
  return (
    <Container>
      {messagesWithTransitions((style, item, t, i) => (
        <Toast key={i} message={item} style={style}  />
      ))}
    </Container>
  );
};

export default ToasteContainer;
