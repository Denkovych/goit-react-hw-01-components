import PropTypes from "prop-types";
import styles from './Statistics.module.css'

const Statistics = ({title, stats}) => {
  const statisticsStyles = [styles.statistics];
  const statListStyles = [styles.statList];
  const itemStyles = [styles.item]
    return(
        <section className={statisticsStyles.join(' ')}>
          {title && (
          <h2 className="title">Upload stats</h2>)}
  
  <ul className={statListStyles.join(' ')}>
      {stats?.map(stat =>(
    <li className= {itemStyles.join('')} key = {stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>))}
  </ul>
</section>
    )
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
}


export {Statistics}