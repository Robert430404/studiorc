import { FontFaceSet } from 'css-font-loading-module';

import App from './components/app';
import './index.scss';
import './styles/crt.scss';
import './styles/normalize.scss';

// Bootstrap the application into the DOM
document.addEventListener('DOMContentLoaded', () => {
  const loader = document.querySelector('.Loader');

  if (loader) {
    loader.remove();
    document.body.append(App());
  }
});
