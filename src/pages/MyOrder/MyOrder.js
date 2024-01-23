import styles from './myorder.module.css'
import { Link } from 'react-router-dom';
import { useCustomhook } from '../../productitemContext'
import OrderDetail from '../../components/MyOrder/OrderDetail';
const MyOrder = () => {
  const {myorders} = useCustomhook();
  return (
    <>

      <div className={styles.mainContainer}>
        {/* page heading */}
        <h1 className={styles.orderHeading}>My Orders</h1>

        {/* to show message if no order in list */}
        {myorders.length === 0 ? (
          <>
            {/* message of no order */}
            <h1>You haven't placed any order yet !!</h1>
            {/* link to redirect to home page */}
            <Link to="/">!!! Start Shopping !!!</Link>
          </>
        ) : (
          // if contains order then render them one by one
          // order list container
          <div className={styles.orderListContainer}>
            {myorders.map((order, i) => (
              <OrderDetail key={i} order={order} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default MyOrder