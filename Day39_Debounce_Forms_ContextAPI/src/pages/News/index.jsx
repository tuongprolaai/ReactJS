import { useEffect, useState } from "react";
// import { Link } from "react-router";
import Link from "@/components/Link";

function News() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((res) => {
                setPosts(res);
                setLoading(false);
            });
    });
    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <h1>News page component</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/news/${post.id}`} replace={true}>
                            {post.id} {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default News;
