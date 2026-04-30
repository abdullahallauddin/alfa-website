import ServicePageTemplate from "../Components/ServicePageTemplate";
import { servicePages } from "../data/servicesContent";

const slug = "joinery-division";

const Joinery = () => (
  <ServicePageTemplate slug={slug} page={servicePages[slug]} />
);

export default Joinery;
