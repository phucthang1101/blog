import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' />

          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css'
          />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
          />
          <link
            rel='stylesheet'
            href='https://unpkg.com/react-quill@1.3.3/dist/quill.snow.css'
          />
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
          />
          <link
            rel='stylesheet'
            href='https://unpkg.com/simplebar@latest/dist/simplebar.css'
          />
          <script
            src='https://kit.fontawesome.com/d174fcfea6.js'
            crossorigin='anonymous'
          ></script>
          <link rel='stylesheet' href='/static/css/styles.css' />
        </Head>
        <body>
          <div id='backdrop-hook'></div>
          <div id='modal-hook'></div>
          <Main />

          <NextScript />

          <script
            src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
            integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
            crossorigin='anonymous'
          ></script>
          <script
            src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
            integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
            crossorigin='anonymous'
          ></script>
          <script
            src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
            integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
            crossorigin='anonymous'
          ></script>
          <script src='https://code.iconify.design/1/1.0.6/iconify.min.js'></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
