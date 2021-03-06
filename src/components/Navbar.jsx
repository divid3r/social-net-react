import cls from './navbar.module.css';

const Navbar = () => {
   return (
   <nav className={cls.nav}>
      <div className={cls.item}>
         <a>Profile</a>
      </div>
      <div className={cls.item}>
         <a>Messages</a>
      </div>
      <div className={cls.item}>
         <a>News</a>
      </div>
      <div className={cls.item}>
         <a>Music</a>
      </div>
      <div className={cls.item}>
         <a>Settings</a>
      </div>
   </nav>
   )
}

export default Navbar;