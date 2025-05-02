import type { Meta, StoryObj } from '@storybook/react';
import { Gallery } from './Gallery';

const meta: Meta<typeof Gallery> = {
    title: 'Components/Gallery',
    component: Gallery,
};

export default meta;

type Story = StoryObj<typeof Gallery>;

export const Default: Story = {
    args: {
        items: [
            { src: 'https://placekitten.com/300/200', alt: 'Kitten 1' },
            { src: 'https://placekitten.com/300/201', alt: 'Kitten 2' },
        ],
    },
};
