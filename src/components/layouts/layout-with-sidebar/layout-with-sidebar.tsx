import React, { Children } from 'react';
import { SvgIcon } from '../../buttons-indicators/svg-icon/svg-icon';

import './layout-with-sidebar.scss';

export const LayoutWithSidebar = ({
  children,
  sidebarIsOpen,
  layoutAction,
}: any) => {
  const renderSidebar = (child: any) => {
    return (
      <aside
        className={`sidebar-container ${sidebarIsOpen ? 'expanded' : 'narrow'}`}
      >
        {sidebarIsOpen ? (
          <div className={`sidebar-toggle icon-left`}>
            <SvgIcon
              iconName="icon-arrow-circle-right"
              iconClick={layoutAction}
            />
          </div>
        ) : null}
        {child}
      </aside>
    );
  };

  const renderContent = (child: any) => {
    return (
      <main className={`page-content ${sidebarIsOpen ? 'expanded' : 'narrow'}`}>
        {child}
      </main>
    );
  };

  return (
    <div className="layout">
      {!sidebarIsOpen ? (
        <div className="menu">
          <SvgIcon
            iconName="icon-menu"
            iconColor="#fff"
            iconClick={layoutAction}
          />
        </div>
      ) : null}
      {Children.map(children, child => {
        return child.props.className === 'section-sidebar'
          ? renderSidebar(child)
          : renderContent(child);
      })}
    </div>
  );
};
