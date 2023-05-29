import React, {useState} from 'react';
import MemsData from "../MemsData";

export default function MainPage() {
    const [memData, setMemsData] = useState(MemsData);

    const filteredMems = memData.filter((mem) => mem.upvotes <= 5);
    

    const handleUpvote = (mem) => {
        setMemsData((prevMemsData) => {
            const updatedMemsData = prevMemsData.map((m) => {
            if (m.title === mem.title) {
                return { ...m, upvotes: m.upvotes + 1 };
            }
            return m;
            });
            return updatedMemsData;
        });
    };
    
    const handleDownvote = (mem) => {
        setMemsData((prevMemsData) => {
            const updatedMemsData = prevMemsData.map((m) => {
            if (m.title === mem.title) {
                return { ...m, downvotes: m.downvotes + 1 };
            }
            return m;
            });
            return updatedMemsData;
        });
    };
    

    return (
        <div>
            {filteredMems.map((meme) => (
                <div key={meme.title}>
                    <h2>{meme.title}</h2>
                    <img src={meme.imageUrl} alt={meme.title} />
                    <div className="votes">
                        <p>Upvotes: {meme.upvotes}</p>
                        <p>Downvotes: {meme.downvotes}</p>
                    </div>
                    <div className="buttons">
                        <button onClick={() => handleUpvote(meme)}>Upvote</button>
                        <button onClick={() => handleDownvote(meme)}>Downvote</button>
                    </div>
                    </div>
            ))}
        </div>
    );
}
