import App from './components/app';
import CreateComponent from './components/component';
import { FontFaceSet } from 'css-font-loading-module';

import './css/normalize.css';
import './css/index.css';

/**
 * Bootstrap the application into the DOM
 */
document.fonts.ready.then((event: FontFaceSet) => {
  const loader = CreateComponent(document.querySelector('.Loader'));

  if (loader && event.check('12px VT323')) {
    loader.remove();
    App();
  }
});
