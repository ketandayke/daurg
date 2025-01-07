import React, {useContext,createContext,useState,useCallback} from "react";

const ToastContext= createContext();

export const ToastProvider=({children})=>{
     const [toast,setToast] = useState(null);

     const showToast=useCallback((message,type="success")=>{
        setToast({message,type});
        setTimeout(() => {
            setToast(null);
            
        }, 3000);

     },[]);
     return(
        <ToastContext.Provider value={{showToast}}>
            {children}
            {toast&&<Toast message={toast.message} type={toast.type}  />}

        </ToastContext.Provider>

     );

};

export const useToast= ()=>useContext(ToastContext);
//component Toast

const Toast=({message,type})=>{
    const typeStyles={
        success:"bg-blue-500 text-white",
        error:"bg-red-500 text-white"
    };

    return (
        <div className={`fixed top-5 right-5 px-4 py-2 rounded shadow ${typeStyles[type]||""}`}>
            {message}
        </div>
    );   
};