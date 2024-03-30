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
      <header className='xl:padding-1 wide:padding-r padding-b'>
        <Hero />
      </header>
      <main>
        <section className='padding'>
          <PopularProducts />
        </section>
        <section className='padding'>
          <SuperQuality />
        </section>
        <section className='padding'>
          <Services />
        </section>
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
