import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';

export default function ContactsPage() {
  return (
    <>
      <ContactForm></ContactForm>

      <Section title="Contacts">
        <Filter></Filter>
        <ContactsList></ContactsList>
      </Section>
    </>
  );
}
