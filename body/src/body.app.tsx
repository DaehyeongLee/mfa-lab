import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Body from './Body';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Body,
  errorBoundary(err: Error, info: React.ErrorInfo, props: any) {
    return (
      <div className="error">
        <h2>Error in Body</h2>
        <p>{err.message}</p>
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifecycles; 