import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Merovia - E-commerce, Software & SaaS Solutions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui',
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              background: 'white',
              borderRadius: 30,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 72,
              fontWeight: 'bold',
              color: '#667eea',
            }}
          >
            M
          </div>
        </div>

        {/* Company Name */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
          }}
        >
          Merovia
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: 40,
          }}
        >
          E-commerce • Software • SaaS Solutions
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 28,
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Leading US-based technology solutions provider
        </div>

        {/* Location badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '15px 30px',
            borderRadius: 50,
            fontSize: 24,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          📍 Sheridan, Wyoming, USA
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
