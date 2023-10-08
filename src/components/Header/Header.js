import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Box, Flex, Container } from '@chakra-ui/react';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Box as="header" p={2}>
      <Container maxW="container.lg" p={4} borderBottom={0.25} boxShadow="md">
        <Flex justifyContent="space-between" alignItems="center">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
        </Flex>
      </Container>
    </Box>
  );
};
