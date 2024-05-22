

export const CartCard = ({productName , quantity, price}) => {
  return (
   <>
     <div className='flex justify-around items-center pl-4 pr-4 pt-2 pb-2 w-[250px] border-8 border-gray-600 m-2'>
        <p className='font-bold'>{productName}</p>
        <p className='font-bold'>{quantity}x{price}</p>
     </div>
   </>
  )
}
