import styles from './Notification.module.css';

export default function Notification() {
  return (
    <div>
      <p className={styles.message}>No feedback yet</p>
    </div>
  );
}
