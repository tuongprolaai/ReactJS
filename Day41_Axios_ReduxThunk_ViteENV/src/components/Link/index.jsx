import { useNavigate } from "react-router";

function Link({to, children}){
  const navigate = useNavigate();
  const handle = (e) => {
    e.preventDefault();
    navigate(to);
  }
  return (
    <a href={to} onClick={handle}>{children}</a>
  )
}

export default Link