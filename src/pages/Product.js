import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  const {id} = useParams();
  const url = 'https://fakestoreapi.com/products/' + id
  const {data: product, loading, error} = useFetch(url);

  console.log(product);

  return (
    <>
      <strong><p>ID do produto: {id}</p></strong>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando...</p>}
      {product && (
        <div>
          <h4>{product.title}</h4>
          <strong><p>R$: {product.price}</p></strong>
          <img src={product.image} style={{padding: 30, height: 200}}/>
          <strong><p>{product.description}</p></strong>
          <Link to={`/products/${product.id}/info`} className='info'>Mais informações...</Link>
        </div>
      )}
    </>
  )
}

export default Product