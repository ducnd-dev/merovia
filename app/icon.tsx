import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 50%, #EC4899 100%)',
          borderRadius: 8,
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          M
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
