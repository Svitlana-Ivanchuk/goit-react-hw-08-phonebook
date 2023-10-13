import { Flex } from '@chakra-ui/react';
import { ContactForm } from 'components/Forms/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';

export default function ContactsPage() {
  return (
    <Flex gap={5} justifyContent="space-between">
      <ContactForm></ContactForm>

      <Section title="Contacts">
        <Filter></Filter>
        <ContactsList></ContactsList>
      </Section>
    </Flex>
  );
}
