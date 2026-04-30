import ServicePageTemplate from "../Components/ServicePageTemplate";
import { servicePages } from "../data/servicesContent";

const slug = "our-capabilities";

const Capability = () => (
  <ServicePageTemplate slug={slug} page={servicePages[slug]} />
);

export default Capability;
