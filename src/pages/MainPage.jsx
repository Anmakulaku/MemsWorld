
import React from 'react';
import UpvoteIcon from '../components/UpvoteIcon';
import DownvoteIcon from '../components/DownvoteIcon';

export default function MainPage({ memData, onUpvote, onDownvote }) {
    const filteredMems = memData
    .filter((mem) => mem.upvotes - mem.downvotes <= 5)
    .sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));

    return (
        <div className="background-container">
            {filteredMems.map((mem) => (
                <div className='mem-container'>
                    <div key={mem.title}>
                    <h1>{mem.title}</h1>
                    <img src={mem.imageUrl} alt={mem.title} className='mem-img'/>
                    <div className="votes-box">
                        <div className="votes">
                            <p className='plus'>{mem.upvotes}</p>
                            <p>/</p>
                            <p className='minus'>{mem.downvotes}</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <div>
                            <button onClick={() => onUpvote(mem)} className="icon">
                            <UpvoteIcon />
                            </button>
                        </div>
                        <div>
                            <button onClick={() => onDownvote(mem)} className="icon">
                            <DownvoteIcon />
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
