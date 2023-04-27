import Navigation from './Navigation/Navigation';
import css from './Sidebar.module.scss';
import logoImg from '../../../images/logoImg.png';
import { ReactComponent as Xclose } from '../../../images/icons/x-close.svg';

const Sidebar = ({ isSidebarOpen, handleBurgerMenuClick }) => (
  <div className={`${css.sidebar} ${isSidebarOpen ? css.open : ''}`}>
    <div className={css.logo}>
      <img className={css.logoImg} src={logoImg}></img>
      <p className={css.logoText}>
        G<i>oo</i>seTrack
      </p>
      <Xclose className={css.closeIcon} onClick={handleBurgerMenuClick} />
    </div>
    <Navigation />
  </div>
);

export default Sidebar;
