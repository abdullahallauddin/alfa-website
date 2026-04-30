import ServicePageTemplate from "../Components/ServicePageTemplate";
import { servicePages } from "../data/servicesContent";

const slug = "construction-division";

const ConstructionDivision = () => (
  <ServicePageTemplate slug={slug} page={servicePages[slug]} />
);

export default ConstructionDivision;
