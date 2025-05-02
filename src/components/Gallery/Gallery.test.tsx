import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Gallery } from './Gallery';

describe('Gallery component', () => {
    const items = [
        { src: 'img1.jpg', alt: 'First image' },
        { src: 'img2.jpg', alt: 'Second image' },
    ];

    it('renders image items correctly', () => {
        render(<Gallery items={items} />);
        const gallery = screen.getByTestId('gallery');
        expect(gallery).toBeInTheDocument();
        expect(screen.getAllByRole('img')).toHaveLength(items.length);
        expect(screen.getByAltText('First image')).toHaveAttribute('src', 'img1.jpg');
        expect(screen.getByAltText('First image')).toHaveAttribute('alt', 'First image');
        expect(screen.getByAltText('Second image')).toHaveAttribute('src', 'img2.jpg');
        expect(screen.getByAltText('Second image')).toHaveAttribute('alt', 'Second image');
    });

    it('renders fallback component when no items and fallback is provided', () => {
        const Fallback = () => <div data-testid="fallback">Fallback Component</div>;
        render(<Gallery items={[]} fallbackComponent={Fallback} />);
        expect(screen.getByTestId('fallback')).toBeInTheDocument();
    });

    it('renders default fallback message when no items and no fallback is provided', () => {
        render(<Gallery items={[]} />);
        expect(screen.getByText('No items')).toBeInTheDocument();
    });
});

