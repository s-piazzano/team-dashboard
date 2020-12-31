import React from "react";
import { SvgIcon } from "../../buttons-indicators/svg-icon/svg-icon";
import { Card } from "../../cards/card/card";
import { CardProfile } from "../../cards/cardProfile/cardProfile";
import "./card-list-view.scss";

export const CardListView = ({ cards = [], handleSocialLink }: any) => {
  return (
    <div className="card-list-container">
      {cards.map(({ type, ...rest }: any, i: number) => {
        return (
          <div className="card-wrapper" key={i}>
            {type === "card" ? (
              <Card {...rest} />
            ) : (
              <CardProfile {...rest} handleSocialLink={handleSocialLink} />
            )}
          </div>
        );
      })}
    </div>
  );
};
