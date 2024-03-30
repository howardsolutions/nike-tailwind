import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';

const Nav = () => {
  return (
    <div className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between max-container items-center'>
        <a href='/'>
          <img alt='Nike Logo' width={130} height={30} src={headerLogo} />
        </a>
        <ul className='flex justify-center items-center gap-16 max-lg:hidden'></ul>
      </nav>
    </div>
  );
};

export default Nav;
