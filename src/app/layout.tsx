import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import StyledComponentsRegistry from "./lib/registry";

const styrene = localFont({
  src: [
    {
      path: '../../public/fonts/StyreneAWeb-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/StyreneAWeb-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/StyreneAWeb-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/StyreneAWeb-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})


export const metadata: Metadata = {
  title: "Онлайн образование от MITM.institute | Тестовое задание",
  description: "Онлайн образование от MITM.institute | Тестовое задание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={styrene.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
