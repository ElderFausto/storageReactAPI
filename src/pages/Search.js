import { Link, useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  let [searchParams] = useSearchParams();
  const url = "https://fakestoreapi.com/products?" + searchParams;
  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h2>Resultados disponiveis</h2>
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <img src={item.image} style={{width: 80, height:80, alignItems: "center"}}/>
              <strong>
                <p>R$: {item.price}</p>
              </strong>
              <Link to={`/products/${item.id}`} className="link_Details">Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
