import ServicePageTemplate from "../Components/ServicePageTemplate";
import { servicePages } from "../data/servicesContent";

const slug = "marine-and-offshore-division";

const MarineOffshoreDivision = () => (
  <ServicePageTemplate slug={slug} page={servicePages[slug]} />
);

export default MarineOffshoreDivision;
