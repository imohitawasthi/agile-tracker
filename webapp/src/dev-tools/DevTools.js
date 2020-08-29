import React from 'react';
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import DockMonitor from 'redux-devtools-dock-monitor';

// createDevTools takes a monitor and produces a DevTools component
export default createDevTools(
  <DockMonitor 
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-q"
    changeMonitorKey="ctrl-m">
  </DockMonitor>
);
