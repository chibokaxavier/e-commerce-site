import Image from 'next/image'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement, selectvalue } from '@/slices/cartSlice'
import { RootState } from '@/app/store'


export default function Home() {
  const count = useSelector(selectvalue)
  const dispatch = useDispatch()
  return (
   <div className='bg-red-100'>
    The value is {count}

    <button onClick={()=>dispatch(increment())} className="block bg-yellow-200" >
      ADD 
    </button>
    <button onClick={()=>dispatch(decrement())} className="block bg-yellow-200">
      SUBTRACT 
    </button>
   </div>
  )
} 
