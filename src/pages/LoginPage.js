import { LoginForm } from 'components/LoginForm/LoginForm';
import { Section } from 'components/Section/Section';

export default function LoginPage() {
  return (
    <>
      <Section title="Autorization">
        <LoginForm />
      </Section>
    </>
  );
}
