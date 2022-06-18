import React,{useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../../Context/AppContext';
import Related from "../Content/Article/Related";

const Article = () => {
    const {id} = useParams()
    
    const appContext = useContext(AppContext);
    const [articles,setArticles]= appContext.value1;
    const [selectdArticle,setSelectdArticle]=appContext.value5;
    
    const load = appContext.value17;
    const setLoad = appContext.value18;
    const [related,setRelated] = useState([]);
    const [articleContent,setArticleContent]= useState([]);
    // console.log(id);


    useEffect( () => {

        let d = JSON.parse(localStorage.getItem('SELECTED_ARTICLE'));
        console.log(d);
        setArticleContent(d)
        let filteredItems =  articles.filter(el => Number(id) !==  articles.indexOf(el) );

        getRandomNews(filteredItems);

        localStorage.setItem('PAGE_ID',id);
    },[]);




     
    const getRandomNews =(filtered)=>{
        let tempArray = [];
        let min =1; let max= 7;
        let randomInt = Math.floor(Math.random()*(max-min+1)+min);

        for(let i=0; i<randomInt;i++){

                let item = filtered[Math.floor(Math.random() * filtered.length)];
                tempArray.push(item);

               setRelated(tempArray);
        }


    }


    // console.log(selectdArticle,'GET');


    return (
        <>
        <div className="content-container-md-60"  >
            
            {
                !load ?
                selectdArticle.map((news,idx)=>{
                return(
                    <div className="article-wrapper">
                        <h2 className="heading article-head"  >{news.title}</h2>
                        <div>
                            <span>{news.author}</span>
                            <span>{news.publishedAt}</span>
                        
                        </div>
                        <div>
                            <span> - {news.source.name}</span>
                        </div>
                        <div className="article-cover-wrap">
                        <img src={news.urlToImage===null? `https://www.livanova.com/dist/public/images/content-images/default-news.jpg`: news.urlToImage } alt="alt-iamge" className="article-Cover" />

                        </div>
                        <p className="article-sub-text">
                            {news.description}
                        </p>
                        <p className="article-sub-text">
                            {news.content ? news.content :''}
                        </p>


                    
                    </div>
                )

            }):'loading ...'}
        </div>
        <Related rel = {related} />
        </>
    )
}

export default Article;
