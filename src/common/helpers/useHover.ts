import { useState, useMemo, useRef } from 'react';

interface HoverHandlers {
  onMouseEnter(event:React.MouseEvent<HTMLUListElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  onMouseLeave(event:React.MouseEvent<HTMLUListElement, MouseEvent> | React.MouseEvent<HTMLDivElement, MouseEvent>): void;
}

type useHoverProps = {
  delayInMilliseconds?: number;
  hoverDelay?: number; // New optional prop for hover duration
};

export const useHover = ({ delayInMilliseconds, hoverDelay=200 }: useHoverProps): [boolean, HoverHandlers, any] => {
  const [hovered, setHovered] = useState(false);
  const isHoveredRef = useRef(false);

  const eventHandlers: HoverHandlers = useMemo(
    () => ({
      onMouseEnter(event) {
        event.stopPropagation();
        
        isHoveredRef.current = true;
        if (hoverDelay !== undefined) {
          setTimeout(() => {
            if (isHoveredRef.current) {
              setHovered(true);
            }
          }, hoverDelay);
        } else {
          setHovered(true);
        }
      },
      onMouseLeave(event) {
        event.stopPropagation();
        
        isHoveredRef.current = false;
        if (delayInMilliseconds !== undefined) {
          setTimeout(() => {
            if (!isHoveredRef.current) {
              setHovered(false);
            }
          }, delayInMilliseconds);
        } else {
          setHovered(false);
        }
      },
    }),
    [delayInMilliseconds, hoverDelay]
  );

  return [hovered, eventHandlers, setHovered];
};
