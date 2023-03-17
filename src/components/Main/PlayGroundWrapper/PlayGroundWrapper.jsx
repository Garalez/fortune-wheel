import style from './PlayGroundWrapper.module.css';

export const PlayGroundWrapper = () => {
  const test = () => {
    const wheel = document.querySelector(`.${style.wheel}`);

    if (wheel.classList.contains(style.rotate)) {
      return wheel.classList.remove(style.rotate);
    }

    wheel.style.setProperty(
      '--animation-time',
      `${Math.random() * 360 + 7000}deg`
    );
    wheel.classList.add(style.rotate);

    // setTimeout(() => {
    //   wheel.classList.remove(style.rotate);
    // }, 7000);
  };

  return (
    <div className={style.playGroundWrapper}>
      <div className={style.wheelWrapper}>
        <div className={`${style.wheel}`}>qweqwe </div>
      </div>
      <div className={style.playGround}>
        <button onClick={() => test()}>click!</button>
      </div>
    </div>
  );
};
