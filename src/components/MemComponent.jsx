import React from 'react';

export default function MemComponent({image, title}) {
    return (
        <div className="Mem-content">
            <h2>{title}</h2>
            <p>Autor</p>
            <img src={image} alt={title} />
            
        </div>
    );
    }