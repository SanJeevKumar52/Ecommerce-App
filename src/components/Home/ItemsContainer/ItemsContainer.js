import { useCustomhook } from '../../../productitemContext';
import ItemCard from '../ItemCard/ItemCard';

const ItemsContainer = () => {
  const { data ,search} = useCustomhook();
  return (
    <>
    {
       data .filter((item) => {
        return search.toLocaleLowerCase() === ""
          ? item
          : item.name.toLocaleLowerCase().includes(search);
      }).map((item)=>(
        <ItemCard key={item.id} item={item} />
       ))
    }
    </>

  )
}

export default ItemsContainer