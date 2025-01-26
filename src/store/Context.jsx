import { createContext, useState } from "react";
import firebase from "../firebase/config";
import { use } from "react";

export const FirebaseContext = createContext(null);

export const AuthContext = createContext(null);

export const FirebaseProvider  =({children})=>{
    return(
       <FirebaseContext.Provider value={{firebase}}>
          {children}
       </FirebaseContext.Provider>
    )
}

export default function Context ({children}){
   const [user,setUser] = useState(null);

   return(
      <AuthContext.Provider value={{user,setUser}}>
         {children}
      </AuthContext.Provider>
   )
}