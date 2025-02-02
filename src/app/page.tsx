// import Feauture from '@/components/feauture'
// import Mainsection from '@/components/mainsection'
// import React from 'react'
// import Topcategory from '../components/topcategory'
// import Newstyle from '@/components/newstyle'
// import OurProduct from '@/components/ourproduct'
// import Footer from '@/components/footer'

// export default function Home() {
//   return (
//     <div className='m-3'>
//       <Mainsection/>
//       <Feauture/>
//       <Topcategory/>
//       <Newstyle/>
//       <OurProduct/>
//       <Footer/>
//     </div>
//   )
// }

"use client"
import Feauturelogo from "@/components/(Landing All Pages)/feauturelogo";
import Feature from "@/components/(Landing All Pages)/feautureproducts";
import Mainsection from "@/components/(Landing All Pages)/mainsection";
import Newstyle from "@/components/(Landing All Pages)/newstyle";
import OurProduct from "@/components/(Landing All Pages)/popularproduct";
import Topcategory2 from "@/components/(Landing All Pages)/topcategory";



export default function Home() {

 
  return (
    <div>
      
     <Mainsection/>
     <Feauturelogo/>
     <Feature/>
     <Topcategory2/>
     <Newstyle/>
     <OurProduct/>
    </div>
  );
}
