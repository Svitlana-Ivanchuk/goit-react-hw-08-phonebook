import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Box, Input, Flex, VStack } from '@chakra-ui/react';
import { StyledButton, StyledLabel } from 'components/Forms/Form.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
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
              Name
              <Input
                type="text"
                name="name"
                pattern="\w{3,12}"
                outline="none"
                width="170% "
                required
              />
            </StyledLabel>

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
  );
};
