import JSXFactory from 'core/jsx';

export enum ClassNames {
  Block = 'Label',
  ExternalLink = 'Label--externalLink',
}

interface Properties {
  modifiers: ClassNames[];
}

const Label = (props: Properties) => {
  return <span classes={[...props.modifiers, ClassNames.Block]} />;
};

export default Label;
