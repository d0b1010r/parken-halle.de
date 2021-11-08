import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
} from 'next/document';
import { extractCritical } from 'emotion-server';

type MyDocumentProps = DocumentProps & {
  ids: any;
  css: any;
};

export default class MyDocument extends Document<MyDocumentProps> {
  static getInitialProps({ renderPage }) {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render() {
    return (
      <Html>
        <Head>
          <style
            data-emotion-css={this.props.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
