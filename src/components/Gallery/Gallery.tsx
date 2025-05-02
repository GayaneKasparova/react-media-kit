import React from 'react';

export interface GalleryProps {
    items: { src: string; alt?: string }[];
}

export const Gallery: React.FC<GalleryProps> = ({items}) => {
    return (
        <>
            {
                items.length === 0 ? <p>No items</p> :
                    <div data-testid="gallery">
                        {items.map((item, index) => (
                            <img key={index} src={item.src} alt={item.alt || `image-${index}`}/>
                        ))}
                    </div>
            }
        </>
    );
};