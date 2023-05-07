import JSXFactory from '../core/jsx';
import { ClassNames } from './hidden';

const Video = (): HTMLIFrameElement => {
  return (
    <iframe
      classes={[ClassNames.IFrame]}
      src={
        'https://www.youtube-nocookie.com/embed/QTT5iHCHSn0?autoplay=1&loop=1'
      }
      frameborder={'0'}
      allowfullscreen={'true'}
      title={'Youtube video player'}
      height={'315'}
      width={'560'}
      allow={
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'
      }
    />
  );
};

export default Video;
