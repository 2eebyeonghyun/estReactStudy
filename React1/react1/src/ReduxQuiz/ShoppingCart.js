import { useSelector, useDispatch } from 'react-redux';
import { addToCart, clearCart, deleteToCart } from './cartSlice';

const products = [
    { id: 1, name: '사과', price: 1000 },
    { id: 2, name: '바나나', price: 2000 },
    { id: 3, name: '오렌지', price: 1500 }
];

function ShoppingCart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    return (
        <div>
            <h2>장바구니 수량: {cartItems.length}개</h2>
            <button onClick={() => dispatch(clearCart())}>장바구니 비우기</button>

            <h3>장바구니</h3>
            {cartItems.length > 0 ? (
                <ul>
                    {cartItems.map((items, index) => (
                        <li key={index}>
                            {items.name}
                            <button onClick={() => dispatch(deleteToCart(index))}>삭제</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>장바구니가 비었습니다.</p>
            )}

            <h3>상품 목록</h3>
            {products.map(product => (
                <div key={product.id}>
                    <span>{product.name} - {product.price}원</span>
                    <button onClick={() => dispatch(addToCart(product))}>담기</button>
                </div>
            ))}
        </div>
    );
}

export default ShoppingCart;