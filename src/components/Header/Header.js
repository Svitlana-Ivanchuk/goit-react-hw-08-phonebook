import { AuthNavigation } from 'components/AuthNavigation/AuthNavigation';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const Header = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </nav>
  );
};
