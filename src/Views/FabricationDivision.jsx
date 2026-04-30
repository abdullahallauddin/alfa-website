import ServicePageTemplate from "../Components/ServicePageTemplate";
import { servicePages } from "../data/servicesContent";

const slug = "fabrication-and-machining-division";

const FabricationDivision = () => (
  <ServicePageTemplate slug={slug} page={servicePages[slug]} />
);

export default FabricationDivision;
