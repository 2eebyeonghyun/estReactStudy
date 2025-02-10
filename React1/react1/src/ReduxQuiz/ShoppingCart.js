import { useSelector, useDispatch } from 'react-redux';
import { addToCart, clearCart } from './cartSlice';

function ShoppingCart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    return (
        <div>
            <h2>장바구니 수량: {cartItems.length}개</h2>
            <button onClick={() => dispatch(clearCart())}>장바구니 비우기</button>
            
            <h3>상품 목록</h3>
            {products.map(product => (
                <div key={product.id}>
                    <span>{product.name} - {product.price}원</span>
                    <button onClick={() => dispatch(addToCart(product))}>
                        담기
                    </button>
                </div>
            ))}
        </div>
    );
}