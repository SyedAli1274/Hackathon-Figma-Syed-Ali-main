import Card from "../../app/Card/page"
import OurProductPage from "../../components/(Our Product Page)/alldata"
import Footer from '@/components/(Landing All Pages)/(Footer)/footer'

import React from 'react'

export default function page() {
  return (
    <div >
        <Card/>
        <OurProductPage/>
        <Footer/>
    </div>
  )
}
