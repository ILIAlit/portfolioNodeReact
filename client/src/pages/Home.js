import React, { useContext } from 'react';
import styles from '../styles/style-index.module.css';
import ProjectPreview from '../components/projectPreview/ProjectPreview';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';



const Home = observer( () => {
  const {project: progectStore} = useContext(Context);
  const {posts} = progectStore;

  return (  
    <main className={`${styles.main} _container`}>
      <div className={styles.main__info}>
          <div className={styles.main__title}>
              <h3>Привет!</h3>
          </div>
          <div className={styles.main__text}><span>
                  Здесь вы найдете обзор моих работ и достижений
                  в качестве веб-дизайнера и front-end разработчика.</span>
          </div>
      </div>
      <div className={styles.main__projects}>
        {posts.map(({cover, title, id}) =>  <ProjectPreview key={id} cover = {cover} title={title} id={id}  />)}
      </div>
    </main>
  );
});

export default Home;