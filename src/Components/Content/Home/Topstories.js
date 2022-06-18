import React,{useState,useEffect,useContext} from 'react'
import {AppContext} from '../../../Context/AppContext';
import { useNavigate } from 'react-router-dom';
const Topstories = () => {
    const appContext = useContext(AppContext);
    const [articles,setArticles] = appContext.value1;
    // const [articleSelected,setArticleSelected] = appContext.value4;
    const [selectdArticle,setSelectdArticle] = appContext.value5;

    const navigate = useNavigate();

    return (
        <div className="content-container">
            <h2 className="heading" >Top stories</h2>
            <div className="grid-container pointer">
                {articles.slice(0,4).map((item,idx)=>{
                 
                    return(
                        <div className="grid-item" key={idx} style={{backgroundImage:`url(${item.urlToImage===null? `https://www.livanova.com/dist/public/images/content-images/default-news.jpg`:item.urlToImage})`}} onClick={()=>{
                            setSelectdArticle([item]);
                            navigate(`/articles/${idx}`);
                            
                            // let pickedArticle =JSON.parse(localStorage.getItem("SELECTED_ARTICLE"));
                            // console.log(pickedArticle,":",item,"before")
                            // pickedArticle = item;
                            // console.log(pickedArticle,":",item,"after")
                            // if(true){
                                // alert(`i am setting localStorage item : ${pickedArticle.title} to ${selectdArticle} `)

                                // console.log(selectdArticle)
                                // localStorage.setItem("SELECTED_ARTICLE",JSON.stringify(selectdArticle))
                                // alert(`i set localStorage item : ${pickedArticle.title} to ${selectdArticle} `)
                                
                            // }
                

                        }}>
                           
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
