import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Posts() {

    const [post, setPost] = useState({});
    const [currentPostId, setPostId] = useState(0);
    const [tasks, setTask] = useState([])

    useEffect(() => {

        const fetch = async () => {
            let response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + currentPostId)
            setPost(response.data)
        }
        // call the function
        fetch();
    }, [currentPostId])

    // if the second argument of useEffect is an empty array.
    // then the effect will only trigger once after the component is rendered for the first time
    useEffect(() => {

        const fetch = async() => {
            let response = await axios.get("https://jsonplaceholder.typicode.com/todos/")
            setTask(response.data)
        }
        fetch();
    }, [])

    return (
        <React.Fragment>
            <h2>Posts</h2>
            <input type="text"
                value={currentPostId}
                onChange={(e) => {
                    setPostId(e.target.value)
                }} />
            {/* Displays the posts */}
            <div>
                <ul>
                    <li>Post ID: {post.id}</li>
                    <li>Title: {post.title}</li>
                    <li>Content: {post.body} </li>
                </ul>
            </div>

            <div>
                <h2>Todo List</h2>
                <ul className="list-group">
                    {
                        tasks.map(t => <li className="list-group-item">{t.title}</li>)
                    }
                </ul>
            </div>


        </React.Fragment>
    )
}