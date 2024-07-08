import Head from "next/head";
import Header from "../components/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export default function DefaultLayout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Contries app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
