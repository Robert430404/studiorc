import { FontFaceSet } from 'css-font-loading-module';
import 'index.scss';
import 'styles/crt.scss';
import 'styles/normalize.scss';

import CreateComponent from 'core/component';

import App from 'components/app';

// Bootstrap the application into the DOM
document.fonts.ready.then((event: FontFaceSet) => {
  const loader = CreateComponent(document.querySelector('.Loader'));

  if (loader && event.check('12px VT323')) {
    loader.remove();
    document.body.append(App());
  }
});
