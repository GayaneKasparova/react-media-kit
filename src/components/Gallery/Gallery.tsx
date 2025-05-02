import React from 'react';

export interface GalleryProps {
    items: { src: string; alt?: string }[];
    fallbackComponent?: React.FC;
}

export const Gallery: React.FC<GalleryProps> = ({ items, fallbackComponent: FallbackComponent }) => {
    if (items.length === 0) {
        return FallbackComponent ? <FallbackComponent /> : <p>No items</p>;
    }

    return (
        <div data-testid="gallery">
            {items.map((item, index) => (
                <img key={index} src={item.src} alt={item.alt || `image-${index}`} />
            ))}
        </div>
    );
};
