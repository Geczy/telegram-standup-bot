import styles from '../styles/Home.module.css';

interface Props {
  BOT_NAME: string;
}

const HomePage = ({ BOT_NAME }) => (
  <>
    <main className={styles.main}>
      <p className={styles.description}>
        Get started by messaging{' '}
        <a className={styles.code} href={`https://t.me/${BOT_NAME}`}>
          @{BOT_NAME}
        </a>
      </p>
      <div className={styles.grid}>
        <a
          href="https://github.com/RusseII/telegram-standup-bot"
          className={styles.card}
        >
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about {BOT_NAME} features and API.</p>
        </a>
      </div>
    </main>
  </>
);

export default HomePage;