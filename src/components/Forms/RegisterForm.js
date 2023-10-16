import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  Box,
  Input,
  Flex,
  VStack,
  InputRightElement,
  Button,
  InputGroup,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { StyledButton, StyledLabel } from 'components/Forms/Form.styled';
import { useState } from 'react';

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

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
            <FormControl isRequired>
              <StyledLabel>
                <FormLabel color="brand.100" fontSize="18px" m={0}>
                  Name
                </FormLabel>
                <Input
                  type="text"
                  name="name"
                  variant="outline"
                  placeholder="Enter your name"
                />
              </StyledLabel>
            </FormControl>

            <FormControl isRequired>
              <StyledLabel>
                <FormLabel color="brand.100" fontSize="18px" m={0}>
                  Email
                </FormLabel>
                <Input
                  type="email"
                  name="email"
                  variant="outline"
                  placeholder="Enter your email"
                />
              </StyledLabel>
            </FormControl>

            <FormControl isRequired>
              <StyledLabel>
                <FormLabel color="brand.100" fontSize="18px" m={0}>
                  Password
                </FormLabel>
                <InputGroup>
                  <Input
                    type="password"
                    name="password"
                    variant="outline"
                    required
                    type={show ? 'text' : 'password'}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      color="brand.100"
                      onClick={handleClick}
                    >
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </StyledLabel>
            </FormControl>
            <StyledButton type="submit">Login</StyledButton>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};
