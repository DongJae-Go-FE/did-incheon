import { Section, SectionTitle } from "../ui/common-layout";

import Faq from "../faq";

export default function FaqSection() {
  return (
    <Section id="faq" className="bg-gray-100">
      <SectionTitle>FAQ</SectionTitle>
      <Faq />
    </Section>
  );
}
