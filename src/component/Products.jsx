import React from "react"
import Items from "./Data"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Product =() => {

    const link ="https://api.whatsapp.com/send/?phone=573202720874&text="

    return (
        <div>
             <div className="products-container">
                    {Items?.map((index) => (
                        <a >
                            <div className="product-card">
                            <img 
                                src={index.imgSrc}
                                width={250}
                                height={300}
                                
                                className="product-image"
                            />
                            <p className="product-name">{index.name}</p>
                            <p className="product-price">${index.price}</p>
                            <div className="icon-whatsapp" >
                                <div className="whta" >
                                    <a href={`${link}${index.name}${index.price}`} target="_blank" className="sapp"     >
                                        <WhatsAppIcon  />
                                    </a>
                             </div>
    </div>
                            </div>
                        </a>
                    ))}
            </div>
        </div>
    )
}


export default Product