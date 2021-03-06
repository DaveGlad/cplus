import Document, { Html, Head, Main, NextScript } from 'next/document'

class Cplus extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Cplus