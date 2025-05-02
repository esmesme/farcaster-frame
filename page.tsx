// app/page.tsx
import { Metadata } from 'next';
import { getFrameMetadata } from '@coinbase/onchainkit';

const frameMetadata = getFrameMetadata({
  buttons: [{ label: 'Toggle Light' }],
  image: 'https://your-deployment-url.vercel.app/light-off.png',
  post_url: 'https://your-deployment-url.vercel.app/api/frame',
});

export const metadata: Metadata = {
  title: 'Light Switch Frame',
  description: 'A simple Farcaster Frame to toggle a light.',
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <main>
      <h1>Light Switch Frame</h1>
    </main>
  );
}
