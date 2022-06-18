import React,{useContext,useState} from 'react'
import {AppContext} from "../../Context/AppContext";
import { useNavigate } from 'react-router';

// components
// import Loader from "../Reusable/Loader";

const Articles = () => {
    const appContext = useContext(AppContext);
    const [articles,setArticles]= appContext.value1;
    const [selectdArticle,setSelectdArticle] = appContext.value5;
    const navigate = useNavigate();
    
    const [count,setCount]= useState(0);
    const handleCount =()=>{
        setCount(count+1);
    }





    return (
        <div className="content-container-lg">
            <h2 className="heading" >Top stories</h2>
            <div className="articles-container">
                {
                    articles.slice(0,`${count===0 ? 6 :count===1? 15 :count===2? articles.length:22 }`).map((article,idx) =>{
                        return(
                            <div className="article-box" key={idx}>
                                 <img src={article.urlToImage===null? `https://www.livanova.com/dist/public/images/content-images/default-news.jpg`: article.urlToImage } alt="article-src" className="article-image" />
                                <div className="article-text">
    
                                <h4>{article.title}</h4>
                                <p>{article.source.name}</p>
                                <span>{article.author}</span>
                                <p>{article.publishedAt}</p>
                                <div>
    
                                <button className=" pointer read-more"  
                                onClick={()=>{
                                   setSelectdArticle([article]);
                                   navigate(`/articles/${idx}`)

                                 }} >Read more</button>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <button className="btn pointer" onClick={handleCount}>Load more</button>
        </div>
    )
}

export default Articles;
