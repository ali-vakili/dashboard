
import styles from "./Content.module.scss"

const Content : React.FC = () => {
  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: '2-digit' };
  const formattedDate: string = currentDate.toLocaleString('en-US', options);

  return (
    <>
      <h5 className="mb-3">Dashboard</h5>
      <div className="row">
        <div className="col-md-3 px-2">
          <div className={`${styles.card} mb-3`}>
            <h6 className={styles.title}>today</h6>
            <h6>{formattedDate}</h6>
          </div>
        </div>
        <div className="col-md-3 px-2">
          <div className={`${styles.card} mb-3`}>
            <h6 className={styles.title}>projects</h6>
            <h6>5 Published</h6>
          </div>
        </div>
        <div className="col-md-3 px-2">
          <div className={`${styles.card} mb-3`}>
            <h6 className={styles.title}>contact</h6>
            <h6>5 New Requests</h6>
          </div>
        </div>
        <div className="col-md-3 px-2">
          <div className={`${styles.card} mb-3`}>
            <h6 className={styles.title}>clients</h6>
            <h6>15 Successful Clients</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content;