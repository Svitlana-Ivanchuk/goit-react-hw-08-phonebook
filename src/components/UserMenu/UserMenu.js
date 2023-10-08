import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { StyledButton } from './UserMenu.styled';
import { Flex } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Flex gap={4} padding={4} alignItems="center">
      <p>Welcome, {user.name}</p>
      <StyledButton
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Logout
      </StyledButton>
    </Flex>
  );
};
