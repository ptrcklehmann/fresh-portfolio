import Document,{Html,Head,Main,NextScript} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className='scroll-smooth'>
        <Head>
          <link
            href="/public/fonts/typography.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
