import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Box, Input, Flex, VStack } from '@chakra-ui/react';
import {
  StyledButton,
  StyledLabel,
} from 'components/ContactForm/ContactForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Flex bg="brand.300" align="center" justify="center" p={8}>
        <Box bg="brand.300" p={6} rounded="md" w={500} boxShadow="md">
          <form
            onSubmit={handleSubmit}
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 15,
            }}
          >
            <VStack spacing={4} align="flex-start">
              <StyledLabel>
                Email
                <Input
                  type="email"
                  name="email"
                  outline="none"
                  width="170% "
                  required
                />
              </StyledLabel>
              <StyledLabel>
                Password
                <Input
                  type="password"
                  name="password"
                  outline="none"
                  width="170% "
                  required
                />
              </StyledLabel>
              <StyledButton type="submit">Login</StyledButton>
            </VStack>
          </form>
        </Box>
      </Flex>
    </>
  );
};
