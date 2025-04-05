import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import GNB from './GNB';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: GNB,
  errorBoundary(err: Error, info: React.ErrorInfo, props: any) {
    return (
      <div className="error">
        <h2>Error in GNB</h2>
        <p>{err.message}</p>
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles; 