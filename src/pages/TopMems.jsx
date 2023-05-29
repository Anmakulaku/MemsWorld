import React from "react";

import MemData from "../MemsData";

export default function TopMems() {
    const topMemes = MemData.filter((meme) => meme.upvotes > 5);
    return (
        <div className="top-mems">
            {topMemes.map((meme) => (
                <div key={meme.title}>
                <h2>{meme.title}</h2>
                <img src={meme.imageUrl} alt={meme.title} />
                <p>Upvotes: {meme.upvotes}</p>
                <p>Downvotes: {meme.downvotes}</p>
                </div>
            ))}
        </div>
    );
}