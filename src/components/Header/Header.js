import css from './Header.module.css';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className={css['header-container']}>
        <img className={css['vet-bee-logo']} src='assets/vet-bee-logo.png' alt='' />
        <nav className={css['main-nav']}>
          <Link className={css['nav-item']} to='/'>
            Pets
          </Link>
          <Link className={css['nav-item']} to='/medications'>
            Medications
          </Link>
        </nav>
      </div>
      <div className={css['hr']}></div>
    </header>
  );
}

export default Header;
