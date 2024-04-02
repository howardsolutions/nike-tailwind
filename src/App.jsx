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

        <section className='padding bg-pale-blue'>
          <CustomerReviews />
        </section>
        <section className='padding-x sm:px-32 py-16 w-full'>
          <Subscribe />
        </section>
      </main>

      <Footer />
    </>
  );
}
