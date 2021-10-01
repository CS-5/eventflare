import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getEdgeProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    return { ...props };
  }

  render() {
    return (
      <Html>
        <Head />
        <body
          style={{
            backgroundImage: `url("background.jpg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
            backgroundAttachment: "fixed",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
