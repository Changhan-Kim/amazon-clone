export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => 
    // 물건의 가격을 basket에 추가하는 기능
    basket?.reduce((amount, item) => item.price + amount, 0);
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],// 현재 장바구니에다가  추가
        };
      
      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: [] 
        }
  
      case "REMOVE_FROM_BASKET":
        
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );
        let newBasket = [...state.basket];
        // splice는 배열의 특정한 위치에 요소를 추가 또는 삭제하는데 사용
        // slice는 순서데로 추가 또는 삭제
        if (index >= 0) {
          newBasket.splice(index, 1);
  
        } else {
          console.warn(
            `Cant remove product (id: ${action.id}) as its not in basket!`
          )
        }
  
        return {
          ...state,
          basket: newBasket
        }
      
      case "SET_USER":
        return {
          ...state,
          user: action.user
        }
  
      default:
        return state;
    }
  };
  
  export default reducer;