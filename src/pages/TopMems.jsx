// TopMems.js
import React from 'react';

export default function TopMems({ memData, onUpvote, onDownvote }) {
    const topMemes = memData
    .filter((mem) => mem.upvotes > 5)
    .sort((a, b) => b.upvotes - a.upvotes);;

    const handleUpvote = (mem) => {
        onUpvote(mem);
    };

    const handleDownvote = (mem) => {
        onDownvote(mem);
    };

    return (
        <div className="top-mems">
        {topMemes.map((mem) => (
            <div key={mem.title}>
            <h2>{mem.title}</h2>
            <img src={mem.imageUrl} alt={mem.title} />
            <p>Upvotes: {mem.upvotes}</p>
            <p>Downvotes: {mem.downvotes}</p>
            <div className="buttons">
                <button onClick={() => handleUpvote(mem)}>Upvote</button>
                <button onClick={() => handleDownvote(mem)}>Downvote</button>
            </div>
            </div>
        ))}
        </div>
    );
}

