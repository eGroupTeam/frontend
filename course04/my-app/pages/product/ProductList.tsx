import styles from '/styles/Home.module.css';
import Product from '../../components/product/Product';
import {ProductType} from '../../interfaces/entities';

const products: ProductType[]= [
  {desc:"iPad", price:20000, stock: 500},
  {desc:"iPhone X", price:30000, stock: 1200},
  {desc: "AirPod Max", price: 18000, stock: 50}
];

const createProduct = (product:ProductType)=>{
  return <Product key={product.desc} {...product}/>
  //return <li key={product.desc}>{product.desc}/{product.price}</li>
}

const ProductList = () => {
  return (
    <div className={styles.container}>
      <table border = {1}>
        <tbody>
          {products.map(createProduct)}
        </tbody>
      
      </table>
    </div>
  )
}

export default ProductList