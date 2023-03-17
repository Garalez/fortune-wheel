import PlayGroundWrapper from './PlayGroundWrapper';
import style from './Main.module.css';

export const Main = () => (
  <main>
    <section>
      <h1 className={style.gameTitle}>Колесо фортуны</h1>
      <PlayGroundWrapper />
    </section>
  </main>
);
