import styles from './TransactionHistory.module.css'

const TransactionHistory =({items}) =>{

  const transHistoryStyles =[styles.transactionHistory];
  const itemStyles = [styles.item];
  const threadStyles = [styles.thread];
    return(
        <table className={transHistoryStyles.join(' ')}>
  <thead className = {threadStyles.join(' ')}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
{items?.map(item =>
    (<tr key= {item.id}>
      <td className = {itemStyles.join(' ')}>{item.type}</td>
      <td className = {itemStyles.join(' ')}>{item.amount}</td>
      <td className = {itemStyles.join(' ')}>{item.currency}</td>
    </tr>)
)}
  </tbody>
</table>
    )
}

export {TransactionHistory};