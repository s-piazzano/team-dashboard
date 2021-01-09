import React from 'react';
import { SvgIcon } from '../../buttons-indicators/svg-icon/svg-icon';
import { Card } from '../../cards/card/card';
import { CardProfile } from '../../cards/cardProfile/cardProfile';
import './card-list-view.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const CardListView = ({
  cards = [],
  handleSocialLink,
  mode = 'normal',
}: any) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="card-list-container">
      {mode === 'carousel' ? (
        <div className="carousel-container">
          <Slider {...settings}>
            {cards.map(({ type, ...rest }: any, i: number) => {
              return (
                <div className="card-wrapper" key={i}>
                  {type === 'card' ? (
                    <Card {...rest} />
                  ) : (
                    <CardProfile
                      {...rest}
                      handleSocialLink={handleSocialLink}
                    />
                  )}
                </div>
              );
            })}
          </Slider>
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
