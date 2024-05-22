
import { ProductsData } from './ProductData/ProductData'
import { ProductCard } from './ProductsCard'
import { CartCard } from './CartCard'
import { useReducer } from 'react'
export const ProductsContainer = () => {

    //useReducer

    function reducer(state , action){

        if(action.type == "add"){
            let total= state.total;
            const updatedDataAdd = state.productData.map((items,idx)=>{
                if(action.payload.index == idx){
                    
                    items.quantity = action.payload.quantity+1;
                    total+=items.price
                    // return items
                }
                return (
                    items
                )
            })
        //    const addededdProduct = updatedDataAdd[action.payload.index];
        //     if(addededdProduct.quantity >=1 ){
        //         return{
        //             ...state,
        //             productData : updatedDataAdd,
        //             cart : [...state.cart , addededdProduct],
        //             total : total
        //         }
        //     }




        const addedProduct = updatedDataAdd[action.payload.index];
        const isProductInCart = state.cart.some(
            item => item.id === addedProduct.id
        );
        if (!isProductInCart) {
            // If the product is not in the cart, add it
            return {
                ...state,
                productData: updatedDataAdd,
                cart: [...state.cart, addedProduct],
                total: state.total + addedProduct.price
            };
        }













        
            return{
                ...state,
                productData : updatedDataAdd,
                total : total
            }
        
        }

        else if(action.type == "sub"){
            let total = state.total;
            const updatedDataAdd = state.productData.map((items , idx)=>{
                if(action.payload.index === idx){
                    if(items.quantity == 0){
                        alert("you haven't add any product yet!")
                         return
                    }
                    items.quantity = action.payload.quantity-1;
                    total-=items.price;
                }
                return(items)
            })

            return{
                productData : updatedDataAdd,
                total : total
            }
        }

        //ddefault return
            return state;
        
        }

    


    const initial = {
        productData : ProductsData,
        cart : [],
        total : 0 
    }
    const [state , dispatch] = useReducer(reducer , initial)
   console.log("cart" , state.cart)
    return (
        <>
            <div className='mainContainer w-full h-screen border-8 border-red-800 flex justify-around items-center'>
                <div>
                    <h1 className='text-center font-bold text-3xl'>Products</h1>
                    <div className='proContainer w-[400px] h-[550px] border-4 border-red-800 flex  items-center flex-col overflow-y-scroll overflow-x-hidden'>
                       {
                        state.productData.map((items , idx)=>{
                           return <ProductCard id ={items.id} name = {items.name} price = {items.price} key={idx} index = {idx} quantity = {items.quantity} dispatch = {dispatch}/>
                        })
                       }
                    </div>
                </div>
                <div className='relative'>
                    <h1 className='text-center font-bold text-3xl'>Carts</h1>
                    <div className='cartContainer  w-[300px] h-[550px] border-4 border-red-800 flex justify-center items-center flex-col '>


                          <div className='cartContainer w-[290px] h-[600px]  flex  items-start flex-col overflow-y-auto overflow-x-hidden relative'>
                          {
                                state.cart?.map((items , index)=>{
                                    
                                    return(
                                        
                                        <CartCard key = {index} productName = {items.name} quantity = {items.quantity} price = {items.price}/>
                                    )
                                })
                          }
                        
                    
                    </div>
                    <div className='flex justify-around items-center pl-4 pr-4 pt-2 pb-2 w-[250px] border-8 border-green-600 m-2 relative bootom-90'>
                        <p className='font-bold text-3xl text-green-900'>Total : </p>
                        <p className='font-bold text-3xl text-green-900 '>{state.total}</p>
                    </div>

                </div>
                  
                </div>
            </div>


        </>
    )
}
