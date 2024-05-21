import { useDispatch, useSelector } from "react-redux";
import { afterRemoveTotalCount, cartCount, decrement, deleteProduct, increment } from "../redux/CartSlice";

function Cart() {
    const dispatch = useDispatch();
  
    const { cart } = useSelector(state => state.cart);

    return (
        <div >

            {cart.map((item, index) =>
                <div key={index} className='grid grid-rows-1 grid-cols-7 grid-flow-row-dense m-1 h-20 rounded-md border-2 border-slate-800 p-2 items-center ' >
                    <div className="col-span-1  w-12 p-1 " > <img src={item.image} alt="" /> </div>
                    <div className="col-span-3 font-semibold">{item.title}</div>
                    <div className="text-orange-600">{item.price} TL </div>
                    <div className="flex  font-bold text-2xl bg-gray-300 justify-center  rounded-full ">
                        <div className="cursor-pointer" onClick={() => dispatch(decrement(item.id))}>-</div>
                        <div className="mx-6">

                            {item.count === 0 ? dispatch(deleteProduct(item.id)) : item.count}

                        </div>
                        <div className="cursor-pointer" onClick={() => { dispatch(increment(item.id)); dispatch(cartCount()) }}>+</div>
                    </div>
                    <button className="flex justify-center rounded-full bg-red-600 p-2  m-auto" onClick={() => {
                        dispatch(deleteProduct(item.id));
                        dispatch(afterRemoveTotalCount(item.count));
                    }}>Remove</button>

                    <div className="absolute bottom-10 right-14 text-3xl bg-white text-orange-600 font-semibold">Total Price : {totalPrice += (item.count * item.price)} TL</div>
                </div>
            )}
        </div>
    )
}

export default Cart;