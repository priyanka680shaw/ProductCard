

export const ProductCard = ({ name , price , quantity , dispatch, index }) => {
  return (
   <>
     <div className='flex justify-around items-center pl-4 pr-4 pt-2 pb-2 w-[350px] border-8 border-gray-600 m-2'>
        <p className='font-bold'>{name}</p>
        <p className='font-bold'>{price}</p>
        <div className='flex justify-between items-center pl-2 pr-2 bg-slate-300 rounded'>
            <p className='hover:cursor-pointer' onClick={()=>{
                dispatch({type : "add" , payload : {index : index , 
                quantity : quantity}})
            }}>➕</p>
            <p className='ml-2 mr-2 font-bold'>{quantity}</p>
            <p className='hover:cursor-pointer text-lg ' onClick={()=>{
                  dispatch({type : "sub" , payload : {index : index , quantity :quantity}})
            }}>➖</p>
        </div>
     </div>
   </>
  )
}

