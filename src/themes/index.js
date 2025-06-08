import { theme } from 'antd';

const { defaultAlgorithm, getDesignToken } = theme;

const DEFAULT_WEB_COLORS = {
  light: {
    colorPrimary: '#535353',
    colorPrimaryText: '#ffffff',
    colorBgBase: '#f3f3f3',
    colorBgContainer: '#FBFBFB',
    colorBorder: '#e0e0e0',
    colorTextBase: '#1a1a1a',
  },
  dark: {
    colorPrimary: '#cccccc',
    colorPrimaryText: '#000000',
    colorBgBase: '#121212',
    colorBgContainer: '#1e1e1e',
    colorBorder: '#2e2e2e',
    colorTextBase: '#eeeeee',
  },
};

const createThemeConfig = ({ theme }) => {
  const defaultColors = DEFAULT_WEB_COLORS[theme] ?? DEFAULT_WEB_COLORS.dark;
  const token = getDesignToken({
    token: { ...defaultColors },
  });

  return {
    cssVar: true,
    algorithm: defaultAlgorithm,
    token,
  };
};

export default createThemeConfig;
