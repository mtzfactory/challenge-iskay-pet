import {render} from '@testing-library/react-native';

const AllTheProviders = ({children}) => {
  return children;
};

const customRender = (ui, options) =>
  render(ui, {wrapper: AllTheProviders, ...options});

// Re-export everything
export * from '@testing-library/react-native';
export {renderHook} from '@testing-library/react-hooks/native';

// Override render method
export {customRender as render};
