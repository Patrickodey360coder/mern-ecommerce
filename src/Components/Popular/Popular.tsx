import './Popular.css';
import data_product from './../../assets/data';
import Item from '../Items/Items';

type Product = {
  id: number;
  name: string;
  image: string;
  new_price: string;
  old_price: string
}

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        { data_product.map((item: Product, id: number) => {
          return <Item key={id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
        })}
      </div>
    </div>
  )
}

export default Popular