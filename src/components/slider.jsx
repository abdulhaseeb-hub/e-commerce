import React from 'react'
import {Carousel} from '3d-react-carousal';

let slides = [
    <img  src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/s/u/summer_gala_sale1.jpg" alt="1" />,
    <img  src="https://cdn.shopify.com/s/files/1/0202/5884/8822/files/Men_85f7476a-0971-480f-a2ce-6b6f51e6e3c3_1024x.jpg?v=1621936735" alt="2" />  ,
    <img  src="https://cdn.shopify.com/s/files/1/2219/4051/files/KARACHI-WEB-BANNER-_1880-x-720.jpg?v=1604317458" alt="3" />  ,
    <img  src="https://edenrobe.com/pub/media/wysiwyg/21.4.20_Slider_ArtisanCollectionER_DSKTP.jpg" alt="4" />  ,
    <img src="https://edenrobe.com/pub/media/wysiwyg/21.4.30_Slider_EscapeVelocityER_DSKTP.jpg" alt="5" />   ];

const slider = () => {
    return (
        <div style={{marginTop:"10%"}} >
        <Carousel slides={slides} autoplay={true} interval={1000}/>

        </div>
    )
}

export default slider
