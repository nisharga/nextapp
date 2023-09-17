'use client';
import { useState } from "react";

export default function CreateNote( ){
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const create = async() => {
        await fetch('https://jsonplaceholder.typicode.com/posts' ,{
           method: 'POST',
           headers: { 'Content-Type': 'application/json' }, 
           body: JSON.stringify({title, content}),
        }
        )
        
    }
    return(
        <div className="">
            <h1>Create A New Note</h1>
            <form onSubmit={create}>
                <input type="text" placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
                <textarea placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
