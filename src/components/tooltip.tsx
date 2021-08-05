import 'components/tooltip.scss';

import JSXFactory from 'core/jsx';

enum ClassNames {
  Container = 'Tooltip__container',
  Content = 'Tooltip__content',
  Center = 'Tooltip__content--center',
  Right = 'Tooltip__content--right',
}

export enum TooltipPosition {
  Top,
  Bottom,
  Left,
  Right,
  Center,
}

interface Props {
  content: string;
  position?: [TooltipPosition, TooltipPosition];
}

const positionTooltip = (
  target: HTMLElement,
  orbiter: HTMLElement,
  position?: [TooltipPosition, TooltipPosition],
) => {
  const { marginBottom } = getComputedStyle(orbiter);
  const parsedMargin = Number(marginBottom.replace('px', ''));
  const { left, width, bottom, height } = target.getBoundingClientRect();
  const { height: orbiterHeight, width: orbiterWidth } =
    orbiter.getBoundingClientRect();

  if (position) {
    if (position[0] === TooltipPosition.Top) {
      orbiter.style.top = `${
        bottom - (orbiterHeight + height + parsedMargin)
      }px`;
    }

    if (position[1] === TooltipPosition.Center) {
      orbiter.classList.add(ClassNames.Center);

      orbiter.style.left = `${left - orbiterWidth / 2 + width / 2}px`;
    }

    if (position[1] === TooltipPosition.Right) {
      orbiter.classList.add(ClassNames.Right);

      orbiter.style.left = `${left - orbiterWidth + width}px`;
    }

    return;
  }

  // Default to top left
  orbiter.style.top = `${bottom - (orbiterHeight + height + parsedMargin)}px`;
  orbiter.style.left = `${left}px`;
};

export const Tooltip = ({ content, position }: Props) => {
  return (
    <div
      classes={[ClassNames.Container]}
      events={[
        {
          name: 'mouseenter',
          handler: (event: Event) => {
            const element: HTMLElement = event.target as HTMLElement;
            const content: HTMLElement = element.querySelector(
              `.${ClassNames.Content}`,
            );

            positionTooltip(element, content, position);
          },
        },
      ]}
    >
      <div classes={[ClassNames.Content]}>{content}</div>
    </div>
  );
};
