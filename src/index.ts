import App from './components/app';
import CreateComponent from './core/component';
import { FontFaceSet } from 'css-font-loading-module';

import './styles/normalize.scss';
import './styles/crt.scss';
import './index.scss';

// Bootstrap the application into the DOM
document.fonts.ready.then((event: FontFaceSet) => {
  const loader = CreateComponent(document.querySelector('.Loader'));

  if (loader && event.check('12px VT323')) {
    loader.remove();
    App();
  }
});
