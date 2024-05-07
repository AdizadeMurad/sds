import React from 'react'

function useLocalStorage(key,initial) {
    const [mydata, setmydata] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)):initial)

    useEffect(() => {
   localStorage.setItem(key,JSON.stringify(mydata))
    }, [])
    
  return [mydata,setmydata]
  
  
}

export default useLocalStorage