import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Gallery } from './Gallery';

describe('Gallery component', () => {
    it('renders "No items" when items array is empty', () => {
        render(<Gallery items={[]} />);
        expect(screen.getByText('No items')).toBeInTheDocument();
    });

    it('renders all images when items are provided', () => {
        const images = [
            { src: '/1.jpg', alt: 'First' },
            { src: '/2.jpg', alt: 'Second' },
        ];

        render(<Gallery items={images} />);

        const gallery = screen.getByTestId('gallery');
        expect(gallery).toBeInTheDocument();

        const renderedImages = screen.getAllByRole('img');
        expect(renderedImages).toHaveLength(images.length);
        expect(renderedImages[0]).toHaveAttribute('src', '/1.jpg');
        expect(renderedImages[0]).toHaveAttribute('alt', 'First');
        expect(renderedImages[1]).toHaveAttribute('alt', 'Second');
    });

    it('uses fallback alt text if not provided', () => {
        const images = [{ src: '/img.jpg' }];
        render(<Gallery items={images} />);
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'image-0');
    });
});
