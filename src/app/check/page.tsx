import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/logodark.png'

function page() {
  return (
    <div>
         <Image src={Logo} alt='Logo'/>
    </div>
  )
}

export default page