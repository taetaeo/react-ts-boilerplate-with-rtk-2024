import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

// Store
import store from '@redux/store';
import App from './app';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('@mocks/browser/worker');
  return worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
});
