import Categories from '@/components/Categories';
import HeaderWrapper from '@/components/HeaderWrapper';
import { Providers } from '@/sdk/provider';
import type { Metadata } from 'next';
import { font } from './fonts/config';
import './globals.css';

export const metadata: Metadata = {
  title: 'Showpo UK',
  description:
    'Experimental Showpo Uk Storefront using vue-storefront SDK for magento 2',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`${font.sans.variable} ${font.heading.variable} antialiased font-sans min-h-screen flex flex-col w-full`}
      >
        <Providers>
          <HeaderWrapper>
            <Categories />
          </HeaderWrapper>
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
