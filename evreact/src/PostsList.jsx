import { useEffect, useState } from 'react'
import React from 'react'

export default function PostsList() {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))

    }, [])
    if (loading) { return <div>Loading ...</div> }
    if (posts.length === 0) { return <div>No posts found</div> }
    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">Listado de Posts</h2>
            <div className="row">
                {posts.slice(0, 10).map((post) => (
                    <div key={post.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}