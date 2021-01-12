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
    { width: 550, itemsToShow: 1, itemsToScroll: 3 },
    { width: 768, itemsToShow: 2, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 3 },
    // { width: 1200, itemsToShow: 3, itemsToScroll: 3 },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="card-list-container">
      {mode === 'carousel' ? (
        <div className="slider">
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
        </div>
      ) : (
        // <div>
        //   <h2> Responsive </h2>
        //   <Slider {...settings}>
        //     <div>
        //       <h3>1</h3>
        //     </div>
        //     <div>
        //       <h3>2</h3>
        //     </div>
        //     <div>
        //       <h3>3</h3>
        //     </div>
        //     <div>
        //       <h3>4</h3>
        //     </div>
        //     <div>
        //       <h3>5</h3>
        //     </div>
        //     <div>
        //       <h3>6</h3>
        //     </div>
        //     <div>
        //       <h3>7</h3>
        //     </div>
        //     <div>
        //       <h3>8</h3>
        //     </div>
        //   </Slider>
        // </div>
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
