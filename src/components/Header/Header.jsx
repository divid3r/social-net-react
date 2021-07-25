import logo from "../../logo.svg";
import cls from './header.module.css';

const Header = () => {
   return (
      <header className={cls.header}>
         <img src={logo} alt="logo" />
      </header>
   )
}

export default Header;