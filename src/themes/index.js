import { theme } from 'antd';

const { defaultAlgorithm, getDesignToken } = theme;

const DEFAULT_WEB_COLORS = {
  light: {
    colorPrimary: '#535353',
    colorBgBase: '#FBFBFB',
    // #1a1a1a
  },
  dark: {
    colorPrimary: '#DFM1D4',
    colorBgBase: '#535353',
    // #1a1a1a
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
