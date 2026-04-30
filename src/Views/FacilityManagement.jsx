import ServicePageTemplate from "../Components/ServicePageTemplate";
import { servicePages } from "../data/servicesContent";

const slug = "facility-management-division";

const FacilityManagement = () => (
  <ServicePageTemplate slug={slug} page={servicePages[slug]} />
);

export default FacilityManagement;
