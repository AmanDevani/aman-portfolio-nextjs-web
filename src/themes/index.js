import { theme } from 'antd';

const { defaultAlgorithm, getDesignToken } = theme;

const DEFAULT_WEB_COLORS = {
  light: {
    colorPrimary: '#18181B',
    colorPrimaryText: '#ffffff',
    colorBgBase: '#ffffff',
    colorBgContainer: '#f4f4f5',
    colorBorder: '#e0e0e0',
    colorTextBase: '#09090B',
  },
  dark: {
    colorPrimary: '#ffffff',
    colorPrimaryText: '#FAFAFA',
    colorBgBase: '#09090B',
    colorBgContainer: '#27272A',
    colorBorder: '#2e2e2e',
    colorTextBase: '#A1A1AA',
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
