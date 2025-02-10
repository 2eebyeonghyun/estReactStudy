import { useDispatch } from 'react-redux';

const products = [
    { id: 1, name: '사과', price: 1000 },
    { id: 2, name: '바나나', price: 2000 },
    { id: 3, name: '오렌지', price: 1500 }
];

const ProductList = () => {

    const dispatch = useDispatch();

    return(
        <div>
            <h2>상품목록</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <button onClick={() => dispatch()}>담기</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;