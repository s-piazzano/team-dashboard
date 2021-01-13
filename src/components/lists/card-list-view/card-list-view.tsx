import React from 'react';
import { SvgIcon } from '../../buttons-indicators/svg-icon/svg-icon';
import { Card } from '../../cards/card/card';
import { CardProfile } from '../../cards/cardProfile/cardProfile';
import './card-list-view.scss';

export const CardListView = ({
  cards = [],
  handleSocialLink,
  mode = 'normal',
  sidebarIsOpen,
}: any) => {
  const sliderRef = React.useRef<HTMLDivElement>(document.createElement('div'));

  const addSpace = (space: number) => {
    sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + space;
  };

  return (
    <div className="card-list-container">
      {mode === 'carousel' ? (
        <div
          className={`slider ${sidebarIsOpen ? 'narrow' : ''}`}
          ref={sliderRef}
        >
          {/* <SvgIcon
            iconColor="#fff"
            iconName="icon-arrow-left2"
            iconClick={() => addSpace(-200)}
            style={{
              position: 'absolute',
              left: '0px',
              borderRadius: '50%',
              top: '50%',
            }}
          /> */}
          {cards.map(({ type, ...rest }: any, i: number) => {
            return (
              <div className="card-wrapper" key={i}>
                {type === 'card' ? (
                  <Card {...rest} />
                ) : (
                  <CardProfile {...rest} handleSocialLink={handleSocialLink} />
                )}
              </div>
            );
          })}
          {/* <SvgIcon
            iconColor="#fff"
            iconName="icon-arrow-right2"
            iconClick={() => addSpace(200)}
            style={{
              position: 'absolute',
              right: '0px',
              borderRadius: '50%',
              top: '50%',
            }}
          /> */}
        </div>
      ) : (
        cards.map(({ type, ...rest }: any, i: number) => {
          return (
            <div className="card-wrapper" key={i}>
              {type === 'card' ? (
                <Card {...rest} />
              ) : (
                <CardProfile {...rest} handleSocialLink={handleSocialLink} />
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

// TODO create slider similar to this one
// https://github.com/asmyshlyaev177/react-horizontal-scrolling-menu/blob/master/src/scrollMenu.tsx
