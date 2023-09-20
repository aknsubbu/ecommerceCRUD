import Image from 'next/image'
import SideBar from '@/components/sideBar'
import Dashboard from '@/components/dashboard'

export default function Home() {
  return (
    <div className='flex flex-row'>
      <div className=''>
        <SideBar/>
      </div>
      <div className='pl-10'>
        <Dashboard/>
      </div>
    </div>
  )
}
