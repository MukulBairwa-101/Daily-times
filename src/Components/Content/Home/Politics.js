import React,{useContext,useState} from 'react'
import {AppContext} from "../../../Context/AppContext";
import { useNavigate } from 'react-router';
const Sports = () => {
    const appContext = useContext(AppContext);
    const [politics,setPolitics]= appContext.value3;
    const navigate = useNavigate();

    const [count,setCount]= useState(0);
    const handleCount =()=>{
        setCount(count+1);
    }

    return (
        <div className="content-container-md-60">
             <h2 className="heading" >World and Political Thoughts</h2>
             {politics.slice(0,`${count===0 ? 3 :count===1? 9 :count===2? 12:count===3? 15 :count===4 ?  politics.length:22 }`).map((article,idx)=>{
                 return(
                    <div className="article-box" key={idx}>
                             <img src={article.urlToImage} alt="article-src" className="article-image" />
                            <div className="article-text">

                            <h4>{article.title}</h4>
                            <p> - {article.source.name}</p>
                            <span>{article.author}</span>
                            <p>{article.publishedAt}</p>
                            <div>

                            <button className=" pointer read-more" onClick={()=>navigate(`${article.url}`)}>Read more</button>
                            </div>
                            </div>
                        </div>
                 )
             })

             }
           <button className="btn pointer" onClick={handleCount}>Load more</button>

        </div>
    )
}

export default Sports  
