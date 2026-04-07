import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

function PostDetail() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        if(!res.ok){
          navigate("/news");
          return;
        }
        return res.json();
      })
      .then((res) => {
        setPost(res);
        setLoading(false);
      });
  },[params, navigate]);
  if(loading){
    return <p>Loading...</p>
  }
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}

export default PostDetail;
