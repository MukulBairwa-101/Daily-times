import React,{useState,useEffect,useContext} from 'react'
import {Routes,Route,withRouter} from "react-router-dom";
// components
import {AppContext} from "./Context/AppContext";
import Nav from "./Components/Navigation/Nav";
import Home from "./Components/pages/Home";
import Articles from "./Components/pages/Articles";
import Article from "./Components/pages/Article";
import Signup from "./Components/pages/Authentication/Signup";
import SignIn from "./Components/pages/Authentication/SignIn";
import Scrolltotop from "./Components/Reusable/Scrolltotop";
import Footer from "./Components/Content/Footer/Footer";
// style
import './App.css';


const countryCode = 'in';
// const URL = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=`
const URL = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=${process.env.REACT_APP_ARTICLES_API_KEY}`
const URL_SPORTS =`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=sports&apiKey=${process.env.REACT_APP_ARTICLES_API_KEY}`
const URL_POLITICS =`https://newsapi.org/v2/top-headlines?country=${countryCode}&category=politics&apiKey=${process.env.REACT_APP_ARTICLES_API_KEY}`

const App = () => {
  const appContext = useContext(AppContext);
  const [articles,setArticles] = appContext.value1;
  const [sports,setSports]= appContext.value2;
  const [politics,setPolitics] = appContext.value3;
  const [selectdArticle,setSelectdArticle]=appContext.value5;
  const authRoute = appContext.value7;
  const setAuthRoute = appContext.value8;


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

  // if(window.location.pathname === '/login' ){
  //   alert('heresdsds',window.location.pathname)
  //   setAuthRoute(true);
  // }
  // else{
  //   alert('here',window.location.pathname)
  //   setAuthRoute(false);

  // } 
  },[])
  // console.log(articles);


  return (
    <div className="App" id="tophead"> 
    {/* {
      !authRoute ? <Nav />:''
    } */}
    {/* {window.location.pathname !== '/login' && window.location.pathname !== '/signup' && <Nav /> } */}
  
    <Nav />
      <Routes>
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/articles" element={<Articles />} />
        <Route exact path="/articles/:id" element={<Article />} />
  
      </Routes>
      {/* {window.location.pathname !== '/login' || window.location.pathname !=='/signup' ?  <Footer /> :'' } */}
      <Footer />

      {window.location.pathname !== '/login' || window.location.pathname !=='/signup'?<Scrolltotop />:'' }
      

    </div>
  );
}

export default App;


// REACT_APP_ARTICLES_API_KEY =HsjLcwvb3bcBQoU8ZH97AKLjatq10WUd
// fetch(`${URL}${process.env.REACT_APP_ARTICLES_API_KEY}`)