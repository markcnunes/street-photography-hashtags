import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import theme from '../assests/theme';
import rootReducer, { RootState } from 'app/rootReducer';
import { configureStore } from '@reduxjs/toolkit';

interface OptionsProps {
  initialState?: RootState;
  store?: any;
}

function render(ui: any, options: OptionsProps = {}) {
  const {
    initialState = {},
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    ...renderOptions
  } = options;

  function Wrapper({ children }: { children?: React.ReactNode }) {
    return (
      <ThemeProvider theme={theme}>
        <Provider store={store}>{children}</Provider>
      </ThemeProvider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
