import React,{useState,useEffect,useContext} from 'react'
import {Routes,Route} from "react-router-dom";
import {AppContext} from "./Context/AppContext";
// components
import Nav from "./Components/Navigation/Nav";
import Home from "./Components/pages/Home";
import Articles from "./Components/pages/Articles";
import Article from "./Components/pages/Article";

// style
import './App.css';


const countryCode = 'us';
// const URL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=`
const URL = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=d807b31d9ef24402baab036a11459503`
const URL_SPORTS =`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=sports&apiKey=d807b31d9ef24402baab036a11459503`
const URL_POLITICS =`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=politics&apiKey=d807b31d9ef24402baab036a11459503`

function App() {
  const appContext = useContext(AppContext);
  const [articles,setArticles] = appContext.value1;
  const [sports,setSports]= appContext.value2;
  const [politics,setPolitics] = appContext.value3;
  const [articleSelected,setArticleSelected] = appContext.value4;


  useEffect( ()=>{
  fetch(`${URL}`)
  .then(response => response.json())
  .then(data => setArticles(data.articles) );

  fetch(`${URL_SPORTS}`)
  .then(response => response.json())
  .then(data => setSports(data.articles));

  fetch(`${URL_POLITICS}`)
  .then(response => response.json())
  .then(data => setPolitics(data.articles));

  },[])

// console.log(articles,'sdsdsd');
  



  

  return (
    <div className="App"> 
    <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/articles" element={<Articles />} />
        <Route exact path="/article" element={<Article />} />
      </Routes>

    </div>
  );
}

export default App;


// REACT_APP_ARTICLES_API_KEY =HsjLcwvb3bcBQoU8ZH97AKLjatq10WUd
// fetch(`${URL}${process.env.REACT_APP_ARTICLES_API_KEY}`)