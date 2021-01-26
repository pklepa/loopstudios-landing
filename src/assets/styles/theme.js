const sizes = {
  mobile: "375px",
  lg_mobile: "500px",
  tablet: "850px",
  desktop: "1440px",
};

const theme = {
  colors: {
    white: "hsl(0, 0%, 100%)",
    black: "hsl(0, 0%, 0%)",
    dark_grey: "hsl(0, 0%, 55%)",
    darker_grey: "hsl(0, 0%, 41%)",
  },

  fonts: {
    title: "'Alata', sans-serif",
    text: "'Josefin Sans', sans-serif",
  },

  sizes: {
    mobile: sizes.mobile,
    lg_mobile: sizes.lg_mobile,
    tablet: sizes.tablet,
    desktop: sizes.desktop,
  },

  devices: {
    sm_mobile: `(min-width: ${sizes.mobile})`,
    mobile: `(min-width: ${sizes.lg_mobile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    desktop: `(min-width: ${sizes.desktop})`,
  },
};

export default theme;
