import { createContext, useEffect, useState } from "react";

const SizeContext = createContext();


function SizeProvider({children}) {

  const [isMobile , setIsMobile] = useState(window.innerWidth <= 750);

  useEffect(()=> {

    function handleResize() {
      setIsMobile(window.innerWidth <= 750)
    }

    window.addEventListener('resize',handleResize)

    return () => window.removeEventListener('resize',handleResize)
  },[])

  return (
    <SizeContext.Provider value={{isMobile}}>
      {children}
    </SizeContext.Provider>
  )
}


export {SizeContext, SizeProvider}