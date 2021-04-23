import 'components/blinker.scss';

import JSXFactory from 'core/jsx';

enum ClassNames {
  Block = 'Blink',
  Dash = 'Blink--dash',
}

export enum Type {
  Dash = 'dash',
}

const Blinker = () => <span classes={[ClassNames.Block, ClassNames.Dash]} />;

export default Blinker;
