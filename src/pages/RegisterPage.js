import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/Section/Section';

export default function RegisterPage() {
  return (
    <>
      <Section title="Registration">
        <RegisterForm />
      </Section>
    </>
  );
}
