/**
 * @type ThemeType => Type anotation that is common for all dynamic styling of stylization components.
 */
type ThemeType = {
  theme?: {
    header: {
      bgColor: string;
      color: string;
      borderColor: string;
    };

    body: {
      color: string;
      bgColor: string;
    };

    footer: {
      bgColor: string;
      color: string;
    };

    link: {
      color: string;
    };

    button: {
      bgColor: string;
      color: string;
      danger: {
        bgColor: string;
        color: string;
      };
      success: {
        bgColor: string;
        color: string;
      };
    };

    hr: {
      color: string;
    };

    primaryColor: string;
    secondaryColor: string;
    textColor: string;
  };
};

export default ThemeType;
