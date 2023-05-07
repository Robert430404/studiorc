import JSXFactory from '../core/jsx';
import './blinker.scss';

enum ClassNames {
  Block = 'Blink',
  Dash = 'Blink--dash',
}

export enum Type {
  Dash = 'dash',
}

const Blinker = () => <span classes={[ClassNames.Block, ClassNames.Dash]} />;

export default Blinker;
