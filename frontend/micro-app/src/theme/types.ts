import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: {
      z1: string;
      z4: string;
      z8: string;
      z12: string;
      z16: string;
      z20: string;
      z24: string;
      dialog: string;
      card: string;
      dropdown: string;
      primary: string;
      secondary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
    };
  }
  interface ThemeOptions {
    customShadows?: {
      z1?: string;
      z4?: string;
      z8?: string;
      z12?: string;
      z16?: string;
      z20?: string;
      z24?: string;
      dialog?: string;
      card?: string;
      dropdown?: string;
      primary?: string;
      secondary?: string;
      info?: string;
      success?: string;
      warning?: string;
      error?: string;
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
  }
}
