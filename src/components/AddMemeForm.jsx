// AddMemeForm.js
import React, { useState } from 'react';

export default function AddMemeForm({ onAddMeme }) {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newMeme = {
        title,
        imageUrl,
        upvotes: 0,
        downvotes: 0,
        };
        onAddMeme(newMeme);
        setTitle('');
        setImageUrl('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
        />
        <button type="submit">Add Meme</button>
        </form>
    );
}
