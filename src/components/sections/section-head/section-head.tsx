import React from 'react';
import { AnimatedButton } from '../../buttons-indicators/button/AnimatedButton';
import './section-head.scss';

export const SectionHead = ({
  id,
  sectionRefs,
  positionInMenu,
  title,
  bodyContent,
  headAction,
  buttonValue,
}: any) => {
  return (
    <section
      key={id}
      id={id}
      className="section-head"
      ref={ref => (sectionRefs.current[positionInMenu] = ref)}
    >
      <div className="head-title">
        <h2>{title}</h2>
      </div>
      <div className="head-content">
        <p>{bodyContent}</p>
      </div>
      <div className="head-button">
        <AnimatedButton action={headAction} label={buttonValue} />
      </div>
    </section>
  );
};
