import React,{useState,createContext} from 'react'
export const AppContext = createContext();
export const Provider = (props) => {
    const [ articles,setArticles]= useState([]);
    const [sports,setSports]= useState([]);
    const [politics,setPolitics]= useState([]);
    const [articleSelected,setArticleSelected]= useState(false);
    const [selectdArticle,setSelectdArticle]= useState();
    
    const globalStateObject ={
        value1:[articles,setArticles],
        value2:[sports,setSports],
        value3:[politics,setPolitics],
        value4:[articleSelected,setArticleSelected]

    }


    return (
    <AppContext.Provider value={globalStateObject}>
        {props.children}
      </AppContext.Provider>
    )
}

export default Provider;
