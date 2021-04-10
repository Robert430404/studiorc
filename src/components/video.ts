import { ClassNames } from './hidden';

const Video = (): HTMLIFrameElement => {
  const video: HTMLIFrameElement = document.createElement('iframe');

  video.classList.add(ClassNames.IFrame);

  video.setAttribute('width', '560');
  video.setAttribute('height', '315');
  video.setAttribute('title', 'Youtube video player');
  video.setAttribute('frameborder', '0');
  video.setAttribute('allowfullscreen', 'true');
  video.setAttribute(
    'src',
    'https://www.youtube-nocookie.com/embed/QTT5iHCHSn0?autoplay=1&loop=1',
  );
  video.setAttribute(
    'allow',
    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope',
  );

  return video;
};

export default Video;
