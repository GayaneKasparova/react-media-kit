import type { Meta, StoryObj } from '@storybook/react';
import { Gallery, GalleryProps } from './Gallery';

const meta: Meta<typeof Gallery> = {
    title: 'Components/Gallery',
    component: Gallery,
};

export default meta;
type Story = StoryObj<typeof Gallery>;

const sampleItems: GalleryProps['items'] = [
    { src: 'https://i.pinimg.com/736x/d9/79/3f/d9793fc24dbe91aae9a48f332c9a5ece.jpg', alt: 'Placeholder 1' },
    { src: 'https://i.pinimg.com/736x/e3/18/26/e31826f0fb6c655bae0ed93f87d27508.jpg', alt: 'Placeholder 2' },
];

const Fallback = () => <div style={{ color: 'gray' }}>No images found.</div>;

export const Default: Story = {
    args: {
        items: sampleItems,
    },
};

export const WithFallback: Story = {
    args: {
        items: [],
        fallbackComponent: Fallback,
    },
};

export const EmptyWithoutFallback: Story = {
    args: {
        items: [],
    },
};
