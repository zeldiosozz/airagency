'use client';

export default function GlobalError({ retry }: { retry: () => void }) {
  return (
    <html lang="en">
      <body>
        <main
          style={{
            minHeight: '100vh',
            display: 'grid',
            placeItems: 'center',
            padding: '2rem',
            fontFamily: 'Arial, Helvetica, sans-serif',
            color: '#171717',
          }}
        >
          <section style={{ maxWidth: '32rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
              We hit an unexpected problem.
            </h1>
            <p style={{ color: '#525252', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              Please try again. If the problem continues, contact our team directly.
            </p>
            <button
              onClick={retry}
              style={{
                border: 0,
                borderRadius: '0.5rem',
                background: '#2563eb',
                color: '#fff',
                cursor: 'pointer',
                font: 'inherit',
                padding: '0.75rem 1.25rem',
              }}
            >
              Try again
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
