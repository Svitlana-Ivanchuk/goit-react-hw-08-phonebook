import { Heading } from '@chakra-ui/react';
import { Section } from 'components/Section/Section';
import { useAuth } from 'hooks/useAuth';

export default function HomePage() {
  const { user } = useAuth();
  return (
    <Section title="My Phonebook">
      <Heading color="brand.200" as="h2" size="2xl" textAlign="center">
        Hello, {user.name}
      </Heading>
    </Section>
  );
}
