import { Container, StyledLink } from './AuthNavigation.styled';

export const AuthNavigation = () => {
  return (
    <Container>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </Container>
  );
};
