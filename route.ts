// app/api/frame/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit';

let isLightOn = false; // Simple in-memory state

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  const { isValid } = await getFrameMessage(body);

  if (!isValid) {
    return new NextResponse('Invalid frame message', { status: 400 });
  }

  isLightOn = !isLightOn; // Toggle the light state

  const imageUrl = isLightOn
    ? 'https://your-deployment-url.vercel.app/light-on.png'
    : 'https://your-deployment-url.vercel.app/light-off.png';

  const html = getFrameHtmlResponse({
    buttons: [{ label: 'Toggle Light' }],
    image: imageUrl,
    post_url: 'https://your-deployment-url.vercel.app/api/frame',
  });

  return new NextResponse(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}
