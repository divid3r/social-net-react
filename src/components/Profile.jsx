import cls from './profile.module.css';

const Profile = () => {
   return (
   <main className={cls.content}>
      <div  className={cls.bg}>
         <img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
      </div>
      <div  className={cls.avatar}>
         <img src="https://yt3.ggpht.com/a/AATXAJyUUnKEf8GstRZBftVZJzpdL42nU4mYmaPI4g=s900-c-k-c0xffffffff-no-rj-mo" alt="" />
      </div>
      <div>
         My posts
         <div>
            New post
         </div>
         <div className={cls.posts}>
            <div className={cls.item}>
               post 1
            </div>
            <div className={cls.item}>
               post 2
            </div>
         </div>
      </div>
   </main>
   )
}

export default Profile;