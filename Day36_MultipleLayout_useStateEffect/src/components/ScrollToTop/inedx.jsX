import { useEffect } from "react";
import {useLocation} from "react-router"

function ScrollToTop(){
  const location = useLocation();
  useEffect(()=>{
    scrollTo(0,0);
  },[location.pathname])
}

export default ScrollToTop;