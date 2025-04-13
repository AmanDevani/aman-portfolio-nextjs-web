import { App } from 'antd';
import ThemeProvider from './theme-provider';

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <App>{children}</App>
    </ThemeProvider>
  );
};

export default Providers;
