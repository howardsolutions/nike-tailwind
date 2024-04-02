import { Nav } from './components/';
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  SpecialOffer,
  Services,
  Subscribe,
  SuperQuality,
} from './sections';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />

      <main>
        <PopularProducts />

        <SuperQuality />

        <Services />

        <SpecialOffer />

        <CustomerReviews />

        <Subscribe />
      </main>

      <Footer />
    </>
  );
}
