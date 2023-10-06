import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const form = e.target;
    console.log(form);
    dispatch(register(e));
  };

  return (
    <>
      <Flex
        bg="gray.100"
        align="center"
        justify="flex-start"
        flexDirection="column"
        h="100vh"
      >
        <Box bg="white" p={6} rounded="md" w={64}>
          <Formik
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align="flex-start">
                  <FormControl isInvalid={!!errors.name && touched.name}>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Field
                      as={Input}
                      id="name"
                      name="name"
                      type="name"
                      variant="filled"
                      validate={value => {
                        let error;

                        if (value.length < 3) {
                          error = 'Name must contain at least 3 characters';
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <Field
                      as={Input}
                      id="email"
                      name="email"
                      type="email"
                      variant="filled"
                      validate={value => {
                        let error;

                        if (value.length === 0) {
                          error = 'Email is required.';
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      variant="filled"
                      validate={value => {
                        let error;

                        if (value.length < 6) {
                          error = 'Password must contain at least 6 characters';
                        }

                        return error;
                      }}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>

                  <Button type="submit" colorScheme="purple" width="full">
                    Login
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
};
