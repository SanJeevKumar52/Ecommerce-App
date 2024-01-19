import { useCustomhook } from '../../../productitemContext';
import ItemCard from '../ItemCard/ItemCard';

const ItemsContainer = () => {
  const { data ,search,price} = useCustomhook();
  return (
    <>
    {
       data.filter((item) => {
        return search.toLocaleLowerCase() === ""
          ? item
          : item.name.toLocaleLowerCase().includes(search);
      })
      // filter on the basis of price range
      .filter((item) => {
        return item.price <= price;
      }).map((item)=>(
        <ItemCard key={item.id} item={item} />
       ))
    }
    </>

  )
}

export default ItemsContainer