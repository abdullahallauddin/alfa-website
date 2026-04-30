import ServicePageTemplate from "../Components/ServicePageTemplate";
import { servicePages } from "../data/servicesContent";

const slug = "trading-division";

const TradingDivision = () => (
  <ServicePageTemplate slug={slug} page={servicePages[slug]} />
);

export default TradingDivision;
