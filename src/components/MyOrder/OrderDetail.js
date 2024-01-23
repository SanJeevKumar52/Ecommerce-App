// importing styles
import styles from './orderdetail.module.css';

// render each order detail
export default function OrderDetail(props) {
  // order details from props
  const { date, list, amount } = props.order;

  return (
    // single order container
    <div className={styles.orderContainer}>
      {/* date of the order */}
      <h1 className={styles.orderHeading}>Ordered On: {date}</h1>

      {/* table containing order details */}
      <table>
        {/* first row of the table */}
        <tr>
          <th>S.no</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total Price</th>
        </tr>

        {/* rendering all the product's within order  */}
        {list.map((product, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td>₹{product.quantity * product.price}</td>
          </tr>
        ))}

        {/* last row to show total amount of the order */}
        <tr className={styles.totalRow}>
          <td colSpan={4}>Grand Total</td>
          <td className={styles.grandTotal}>₹{amount}</td>
        </tr>
      </table>
    </div>
  );
}
