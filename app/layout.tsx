import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adhika Gunadarma | Backend Software Engineer',
  description:
    'Portfolio of Adhika Gunadarma, a backend software engineer focused on scalable services, ETL pipelines, and cloud systems.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

