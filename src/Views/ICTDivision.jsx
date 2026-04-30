import ServicePageTemplate from "../Components/ServicePageTemplate";
import { servicePages } from "../data/servicesContent";

const slug = "ict-division";

const ICTDivision = () => (
  <ServicePageTemplate slug={slug} page={servicePages[slug]} />
);

export default ICTDivision;
