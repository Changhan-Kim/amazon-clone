import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useHistory } from 'react-router';
import { useStateValue } from '../datalayer/StateProvider';
import { getBasketTotal } from '../datalayer/reducer';



function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2} //소수점 표시
                value={getBasketTotal(basket)}
                // value={getBasketTotal(basket)}
                displayType={"text"} // 텍스트로 표시
                thousandSeparator={true} // boolean 천단위 separator 추가
                prefix={"$"} // 숫자앞에 무조건 표시되는
            />

        <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
