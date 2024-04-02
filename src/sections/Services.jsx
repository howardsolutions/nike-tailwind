import { services } from '../constants/index';
import ServiceCard from '../components/ServiceCard';

function Services() {
  return (
    <section className='flex justify-center flex-wrap gap-9 max-container padding'>
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
}

export default Services;
