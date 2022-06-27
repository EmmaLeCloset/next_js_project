import { Html, Head, Main, NextScript } from 'next/document'
// This file is only rendered on the server, so event handlers like onClick cannot be used in _document.

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}