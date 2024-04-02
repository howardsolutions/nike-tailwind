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

        <section className='padding'>
          <SpecialOffer />
        </section>
        <section className='padding bg-pale-blue'>
          <CustomerReviews />
        </section>
        <section className='padding-x sm:px-32 py-16 w-full'>
          <Subscribe />
        </section>
      </main>
      <footer className='bg-black padding-x padding-t pb-8'>
        <Footer />
      </footer>
    </>
  );
}
