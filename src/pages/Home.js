import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom"
import './Home.css'


const Home = () => {
  const url = 'https://fakestoreapi.com/products'
  const {data: items, loading, error} = useFetch(url)

  return (
    <div>
      <h2>Produtos</h2>
      {error && <p>{error}</p>}
      <ul className="products">
        {items && items.map(item => (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p> <strong>R$: {item.price}</strong></p>
            <img src={item.image} style={{width: 80, height:80, alignItems: "center"}}/>
            <Link to={`/products/${item.id}`} className='link_Details'>Detalhes</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home