import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
} from 'next/document';
import { extractCritical } from 'emotion-server';

type MyDocumentProps = DocumentProps & {
  ids: string[];
  css: string;
};

export default class MyDocument extends Document<MyDocumentProps> {
  static getInitialProps({ renderPage }): Promise<MyDocumentProps> {
    const page = renderPage();
    const styles = extractCritical(page.html);
    return { ...page, ...styles };
  }

  render(): JSX.Element {
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
