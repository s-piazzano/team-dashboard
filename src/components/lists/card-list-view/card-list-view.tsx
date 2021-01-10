import React from 'react';
import { SvgIcon } from '../../buttons-indicators/svg-icon/svg-icon';
import { Card } from '../../cards/card/card';
import { CardProfile } from '../../cards/cardProfile/cardProfile';
import './card-list-view.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';

export const CardListView = ({
  cards = [],
  handleSocialLink,
  mode = 'normal',
}: any) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1, itemsToScroll: 3 },
    { width: 550, itemsToShow: 2, itemsToScroll: 3 },
    { width: 768, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 3 },
  ];

  return (
    <div className="card-list-container">
      {mode === 'carousel' ? (
        <Carousel breakPoints={breakPoints}>
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
        </Carousel>
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
