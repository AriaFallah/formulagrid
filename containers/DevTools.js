import React from 'react';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
import LogMonitor from 'redux-devtools-log-monitor';
import FilterMonitor from 'redux-devtools-filter-actions';
import DockMonitor from 'redux-devtools-dock-monitor';

const blacklist = [
  'redux-form/CHANGE',
  'redux-form/FOCUS',
  'redux-form/BLUR',
  'redux-form/DESTROY',
  'redux-form/TOUCH',
]

// createDevTools takes a monitor and produces a DevTools component
const DevTools = createDevTools(
  // Monitors are individually adjustable with props.
  // Consult their repositories to learn about those props.
  // Here, we put LogMonitor inside a DockMonitor.
  <DockMonitor toggleVisibilityKey='ctrl-h'
    changePositionKey='ctrl-q'>
    <FilterMonitor blacklist={blacklist}>
      <LogMonitor theme='tomorrow' />
    </FilterMonitor>
  </DockMonitor>
);

export default DevTools;
