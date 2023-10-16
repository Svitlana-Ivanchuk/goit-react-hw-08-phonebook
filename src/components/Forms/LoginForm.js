import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Box,
  Input,
  Flex,
  VStack,
  InputGroup,
  InputRightElement,
  Button,
  FormLabel,
  FormControl,
} from '@chakra-ui/react';
import { StyledButton, StyledLabel } from 'components/Forms/Form.styled';
import { useState } from 'react';

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

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

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

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
                    required
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
                      name="password"
                      variant="outline"
                      required
                      type={show ? 'text' : 'password'}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="xl"
                        color="brand.100"
                        onClick={handleClick}
                      >
                        {show ? <AiFillEyeInvisible /> : <AiFillEye />}
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
    </>
  );
};
