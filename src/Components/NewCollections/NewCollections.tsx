import './NewCollections.css'
import new_collection from '../../assets/new_collections.js'
import Item from '../Items/Items'

type Product = {
  id: number;
  name: string;
  image: string;
  new_price: string;
  old_price: string
}

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {
          new_collection.map((item: Product, id: number) => {
            return <Item  key={id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          })
        }
      </div>
    </div>
  )
}

export default NewCollections