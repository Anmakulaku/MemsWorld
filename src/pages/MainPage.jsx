
import React from 'react';
import UpvoteIcon from '../components/UpvoteIcon';
import DownvoteIcon from '../components/DownvoteIcon';
import {v4 as uuidv4} from 'uuid';

export default function MainPage({ memData, onUpvote, onDownvote }) {
    const filteredMems = memData
    .filter((mem) => mem.upvotes - mem.downvotes <= 5)
    .sort((a, b) => (b.upvotes - b.downvotes) - (a.upvotes - a.downvotes));

    return (
        <div className="background-container">
            {filteredMems.map((mem) => (
                <div className='mem-container' key={uuidv4()}>
                    <div className='mem-title'>{mem.title}</div>
                    <img src={mem.imageUrl} alt={mem.title} className='mem-img'/>
                    <div className="votes-box">
                        <div className="votes">
                            <p className='plus'>{mem.upvotes}</p>
                            <p>/</p>
                            <p className='minus'>{mem.downvotes}</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <button onClick={() => onUpvote(mem)} className="icon">
                        <UpvoteIcon />
                        </button>
                        <button onClick={() => onDownvote(mem)} className="icon">
                        <DownvoteIcon />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
