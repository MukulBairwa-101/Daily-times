import React,{useState,createContext} from 'react'
export const AppContext = createContext();
export const Provider = (props) => {

     
 

    const [ articles,setArticles]= useState([]);
    const [sports,setSports]= useState([]);
    const [politics,setPolitics]= useState([]);
    const [articleSelected,setArticleSelected]= useState(false);
    const [selectdArticle,setSelectdArticle]= useState([]);
    const [load,setLoad]= useState(false);
    const [authRoute,setAuthRoute]= useState('');
    const [signedUpUsers,setSignedUpUsers] = useState([]);
    const [ isLoggedin,setIsloggedin] = useState({name:'',active:false,profileImage:''});
    const [imageUpload,setImageUpload] = useState('');
    const [popupActive,setPopupActive] = useState({
        name:'',
        status:false
    });


    const [signingInUser,setSigningInUser]= useState(
        {
            email: "",
            password: ""
        }
    );
    const [signingUpUser,setSigningUpUser]= useState(
        {
            name: "",
            email: "",
            password: "",
            cpassword: "",
            id: 0,
            profileImage:'',
        }
    );



        if(localStorage.getItem("SELECTED_ARTICLE")){
            // setSelectdArticle(localStorage.getItem("SELECTED_ARTICLE"));
        }
        else {
            localStorage.setItem("SELECTED_ARTICLE",JSON.stringify(selectdArticle))
            
        }
    
    const globalStateObject ={
        value1:[articles,setArticles],
        value2:[sports,setSports],
        value3:[politics,setPolitics],
        value4:[articleSelected,setArticleSelected],
        value5:[selectdArticle,setSelectdArticle],
        value7:authRoute,
        value8:setAuthRoute,
        value9:signingInUser,
        value10:setSigningInUser,
        value11:signingUpUser,
        value12:setSigningUpUser,
        value13:signedUpUsers,
        value14:setSignedUpUsers,
        value15:isLoggedin,
        value16:setIsloggedin,
        value17:load,
        value18:setLoad,
        value19:imageUpload,
        value20:setImageUpload,
        value21:popupActive,
        value22:setPopupActive,


    }
    


    return (
    <AppContext.Provider value={globalStateObject}>
        {props.children}
      </AppContext.Provider>
    )
}

export default Provider;
