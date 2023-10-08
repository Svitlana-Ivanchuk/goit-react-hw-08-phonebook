import { Container } from '@chakra-ui/react';
import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Container mb={4}>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  );
};
