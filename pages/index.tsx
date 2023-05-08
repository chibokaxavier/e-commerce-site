import Image from 'next/image'
import { useDispatch,useSelector } from 'react-redux'
import { increment,decrement, selectvalue } from '@/slices/cartSlice'
import { RootState } from '@/app/store'
import Navbar from '@/components/Navbar'


export default function Home() {
  const {amount} = useSelector(selectvalue)
  const dispatch = useDispatch()
  return (
   <div className=''>
   <Navbar/>
   </div>
  )
} 
