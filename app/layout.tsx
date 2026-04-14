import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const siteUrl = 'https://sutexpress.rs';
const sharePreviewImage = '/preview-share.jpg?v=2';
const socialLinks = [
  'https://www.instagram.com/sutexpress.ns?igsh=ZWxib2w0a2V0bDgw',
  'https://www.facebook.com/share/1CWeuPboF9/?mibextid=wwXIfr',
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'SUT EXPRESS - Odvoz Šuta Novi Sad | Isti Dan | Kontejner za Šut',
  description: 'Brz odvoz građevinskog šuta u Novom Sadu. Dolazimo isti dan. Povoljne cene, profesionalna usluga. Kontejner za šut, odvoz otpada, čišćenje. ☎ 066 591 7670',
  keywords: 'odvoz šuta novi sad, odvoz građevinskog otpada, kontejner za šut, odvoz šuta isti dan, odvoz namještaja novi sad, čišćenje garaže',
  icons: {
    icon: '/favicon-round-v3.png?v=3',
    shortcut: '/favicon-round-v3.png?v=3',
    apple: '/favicon-round-v3.png?v=3',
  },
  openGraph: {
    title: 'SUT EXPRESS - Odvoz Šuta Novi Sad | Isti Dan',
    description: 'Brz i profesionalan odvoz građevinskog šuta u Novom Sadu. Pošaljite sliku šuta i dobijte cenu odmah.',
    url: siteUrl,
    siteName: 'SUT EXPRESS',
    type: 'website',
    locale: 'sr_RS',
    images: [
      {
        url: sharePreviewImage,
        width: 1200,
        height: 630,
        alt: 'SUT EXPRESS - odvoz i transport usluge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SUT EXPRESS - Odvoz Šuta Novi Sad | Isti Dan',
    description: 'Brz i profesionalan odvoz građevinskog šuta u Novom Sadu. Pošaljite sliku šuta i dobijte cenu odmah.',
    images: [sharePreviewImage],
  },
  verification: {
    google: "XSeu3qEDwkfq_bA5Q2I1xjOdqh4Pzg9AuSLk0tjV8nQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SUT EXPRESS',
    url: siteUrl,
    logo: `${siteUrl}/favicon-round-v3.png`,
    image: `${siteUrl}/preview-share.jpg?v=2`,
    sameAs: socialLinks,
  };

  return (
    <html lang="sr">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}