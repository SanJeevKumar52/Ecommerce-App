import { useCustomhook } from '../../../productitemContext';
import ItemCard from '../ItemCard/ItemCard';

const ItemsContainer = () => {
  const { data } = useCustomhook();
  console.log(data)
  return (
    <>
    {
       data.map((item)=>(
        <ItemCard key={item.id} item={item} />
       ))
    }
    </>

  )
}

export default ItemsContainer