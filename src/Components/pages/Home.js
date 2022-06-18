import React,{useEffect,useContext} from 'react'
import Topstories from '../Content/Home/Topstories';
import Sports from "../Content/Home/Sports";
import Politics from "../Content/Home/Politics";
import {AppContext} from "../../Context/AppContext";

const Home = () => {
    // const appContext = useContext(AppContext);
    // const [selectdArticle,setSelectdArticle]= appContext.value5;

    // useEffect(()=>{
    //     localStorage.setItem('SELECTED_ARTICLE',JSON.stringify(selectdArticle));
    // })

    return (
        <div >
            <Topstories />
            <Sports />
            <Politics />
        </div>
    )
}

export default Home;

