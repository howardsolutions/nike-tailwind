import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants';

const Nav = () => {
  return (
    <div className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between max-container items-center'>
        <a href='/'>
          <img alt='Nike Logo' width={130} height={30} src={headerLogo} />
        </a>
        <ul className='flex flex-1 justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                alt={item.label}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <img
            className='hidden max-lg:block'
            src={hamburger}
            alt='hamburger'
            width={25}
            height={25}
          />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
