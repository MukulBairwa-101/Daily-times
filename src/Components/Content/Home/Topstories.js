import React,{useState,useEffect,useContext} from 'react'
import {AppContext} from '../../../Context/AppContext';
import { useNavigate } from 'react-router';
const Topstories = () => {
    const appContext = useContext(AppContext);
    const [articles,setArticles] = appContext.value1;
    const navigate = useNavigate();
    


    return (
        <div className="content-container">
            <h2 className="heading" >Top stories</h2>
            <div className="grid-container pointer">
                {articles.slice(0,4).map((item,idx)=>{
                    return(
                        <div className="grid-item" key={idx} style={{backgroundImage:`url(${item.urlToImage})`}} onClick={()=>navigate(`/topstories/${idx}`)}>
                            {/* <img src={item.urlToImage} alt="item-src" className="item-image" /> */}
                            <div className="item-text">

                            <h4>{item.title}</h4>
                            <p>{item.source.name}</p>
                            <span>{item.author}</span>
                      
                            </div>
                        </div>
                    )
                })}
            </div>
                <button className="btn btn-outlined pointer" onClick={()=>navigate('/articles')}>Read All Stories</button>

        </div>
    )
}

export default Topstories;
