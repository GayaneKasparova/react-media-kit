# React Media Kit

A lightweight and customizable media gallery plugin built with React, TypeScript, and Vite. Includes full test coverage and Storybook documentation.

## 🚀 Features

- 📷 `<Gallery />` component for images
- 📦 Vite + React + TypeScript setup
- ✅ ESLint with type-aware rules
- 🧲 Unit tests with Vitest + React Testing Library
- 📕 Storybook for UI preview and documentation

## 📦 Installation

```bash
npm install react-media-kit
```

## 🔧 Usage

```tsx
import { Gallery } from 'react-media-kit';

const images = [
  { src: 'https://example.com/image1.jpg', alt: 'Image 1' },
  { src: 'https://example.com/image2.jpg', alt: 'Image 2' },
];

<Gallery items={images} />
```

## 🧲 Testing

Tests are written with [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/):

```bash
npm run test
```

## 📕 Storybook

View component stories locally:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) in your browser.

## 🛠 ESLint

This project uses a type-aware ESLint setup with recommended plugins for React:

```js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

## 🗂 File Structure

```
src/
├── components/
│   └── Gallery.tsx
├── stories/
│   └── Gallery.stories.tsx
├── tests/
│   └── Gallery.test.tsx
└── main.tsx
```

## 🧠 Development

```bash
npm install
npm run dev
```

## 📄 License

MIT
