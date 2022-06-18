import React,{useContext} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';
import {AppContext} from "../../../Context/AppContext";

const Related = ({rel}) => {
    const appContext = useContext(AppContext);
    const [articles,setArticles]= appContext.value1;
    const [selectdArticle,setSelectdArticle]=appContext.value5;
    const navigate = useNavigate();
    return (
        <div className="content-container-md-60">
            <h2 className="heading" >You May also Read</h2>
            <Swiper
        spaceBetween={50}
        slidesPerView={3}
        breakpoints={{
            320: {
                width: 320,
                slidesPerView: 1,
              },

            640: {
              width: 640,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            
            1024: {
                width: 1024,
                slidesPerView: 3,
              },
          }}
      >

            {rel.map((relItem,idx)=>{
                return(
                    <SwiperSlide className="swiper-slide-wrap" key={idx}>
                        <div className="swiper-slide"  onClick={()=>{
                            setSelectdArticle([relItem]);
                            
   
                            navigate(`/articles/${articles.indexOf(relItem)}`);
                         }} >
                        <img src={relItem.urlToImage} alt="rel-src" className="rel-image" />
                            <div className="swiper-text-block">
                                <h4>{relItem.title}</h4>
                                <span>{relItem.author}</span><span>{relItem.publishedAt}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                    
                )
            })}
           

      </Swiper>

        </div>
    )
}

export default Related;

