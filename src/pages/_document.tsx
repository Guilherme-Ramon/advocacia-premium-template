import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="pt-BR">
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
                />
            </Head>
            <body className="font-roboto bg-light-bg text-primary-dark antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
