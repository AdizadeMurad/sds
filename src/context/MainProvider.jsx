import React, {  createContext,useState } from 'react'

export const MainContext = createContext()

function MainProvider( {children}) {
    const [basket, setbasket] = useState([])

 function AddBasket(item) {
    setbasket([...basket,item])
 }

  return (
    <>
    <MainContext.Provider value={{setbasket,basket,AddBasket}}>
        {children}
    </MainContext.Provider>
    </>
  )
}

export default MainProvider