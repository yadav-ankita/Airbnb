import { CircleUser, Search } from 'lucide-react';
import React from 'react'
import { TbBrandAirbnb } from "react-icons/tb";
import { DropdownMenuContent, DropdownMenuTrigger,DropdownMenu, DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu';
const Navbar = () => {
  return (
    <div className='flex justify-between   items-center px-5 md:px-16  py-3 bg-muted'>
          <div className=' flex items-center gap-1'>
             <TbBrandAirbnb className='text-2xl text-red-500   '/>
             <span className='text-red-400 font-semibold'>
                airbnb
             </span>
          </div>
          <div className='search_feachture flex items-center gap-3 bg-white border-2 border-gray-300 
          px-1.5 py-1.5 rounded-full'>
              <div   className='hover:bg-gray-200 transition-colors duration-200 delay-100 px-3 py-1 rounded-full cursor-pointer '>
                Location
              </div>
              <div className='bg-gray-400 h-6.25 w-[0.6px]'></div>
              <div  className='hover:bg-gray-200 transition-colors duration-200 delay-100 px-3 py-1 rounded-full cursor-pointer '>
                  Date
              </div>
             <div className='bg-gray-400 h-6.25 w-[0.6px]'></div>
              <div className='hover:bg-gray-200 transition-colors duration-200 delay-100 px-3 py-1 rounded-full  cursor-pointer'>
                 Details
              </div>
             
              <div className='bg-red-400 text-white p-2 rounded-full cursor-pointer 
               hover:scale-105
              transition-all duration-300 delay-100 '>
<Search/>
              </div>
              
          </div>
          <div>
             <UserComponent/>
          </div>
    </div>
  )
}
const UserComponent=()=>{
     return (
          <DropdownMenu className="outline-none">
              <DropdownMenuTrigger>
                   <CircleUser className='text-2xl text-red-400'/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                 <DropdownMenuItem>
                     My Bookings
                 </DropdownMenuItem>
                 <DropdownMenuItem>
                     My Favourites
                 </DropdownMenuItem>
                 <DropdownMenuItem>
                     My Properties
                 </DropdownMenuItem>
                 <DropdownMenuSeparator/>
                 <DropdownMenuItem>
                     Airbnb your home
                 </DropdownMenuItem>
              </DropdownMenuContent>
          </DropdownMenu>
     )
}

export default Navbar
