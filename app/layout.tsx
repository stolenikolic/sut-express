import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SUT EXPRESS - Odvoz Šuta Novi Sad | Isti Dan | Kontejner za Šut',
  description: 'Brz odvoz građevinskog šuta u Novom Sadu. Dolazimo isti dan. Povoljne cene, profesionalna usluga. Kontejner za šut, odvoz otpada, čišćenje. ☎ 066 591 7670',
  keywords: 'odvoz šuta novi sad, odvoz građevinskog otpada, kontejner za šut, odvoz šuta isti dan, odvoz namještaja novi sad, čišćenje garaže',
  icons: {
    icon: '/sut-express-icon.png',
    shortcut: '/sut-express-icon.png',
    apple: '/sut-express-icon.png',
  },
  openGraph: {
    title: 'SUT EXPRESS - Odvoz Šuta Novi Sad | Isti Dan',
    description: 'Brz i profesionalan odvoz građevinskog šuta u Novom Sadu. Pošaljite sliku šuta i dobijte cenu odmah.',
    type: 'website',
    locale: 'sr_RS',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
