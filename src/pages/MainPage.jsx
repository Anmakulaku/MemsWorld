
import React from 'react';

export default function MainPage({ memData, onUpvote, onDownvote }) {
    const filteredMems = memData
    .filter((mem) => mem.upvotes <= 5)
    .sort((a, b) => b.upvotes - a.upvotes);

    return (
        <div>
        {filteredMems.map((mem) => (
            <div key={mem.title}>
            <h2>{mem.title}</h2>
            <img src={mem.imageUrl} alt={mem.title} />
            <div className="votes">
                <p>Upvotes: {mem.upvotes}</p>
                <p>Downvotes: {mem.downvotes}</p>
            </div>
            <div className="buttons">
                <button onClick={() => onUpvote(mem)}>Upvote</button>
                <button onClick={() => onDownvote(mem)}>Downvote</button>
            </div>
            </div>
        ))}
        </div>
    );
}
