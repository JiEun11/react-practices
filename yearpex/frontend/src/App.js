// import './App.css';
import styles from './static/css/style.css';

function App() {
  return (
    <div className={styles['ly-gnb-header']}>
      <div className={styles['user-images']}>
        <img src="./static/css/images/user-img.png" alt="프로필" title="프로필" />
      </div>
      <div className={styles['user-name']}>
        <div className={styles["name"]}>
            <a href="#none" className={styles["user-setting-btn"]}>홍길동님</a>
        </div>
      </div>
      <div className={styles["user-group"]}>
        <span className={styles["group"]}>포스코</span>
        <span className={styles["group-detail"]}>ITGC실 ITAC그룹 AC섹션</span>
      </div>
    </div>

  );
}

export default App;
