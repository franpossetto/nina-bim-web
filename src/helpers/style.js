import classnames from "classnames";

export const ninaBackground = (isDay) =>
  classnames("nina-background", {
    "container animate__animated animate__fadeIn nina-background-black": !isDay,
    "container animate__animated animate__fadeIn nina-background-white": isDay,
  });

export const ninaDescriptionTitle = (isDay) =>
  classnames("description-title", {
    "text-center text-lg-start nina-description-title nina-text-color-white":
      !isDay,
    "text-center text-lg-start nina-description-title nina-text-color-black":
      isDay,
  });

export const ninaTitleSmallBold = (isDay) =>
  classnames("title-small-bold", {
    "nina-title-small-bold nina-text-color-white": !isDay,
    "nina-title-small-bold nina-text-color-black": isDay,
  });

export const ninaSubtitleSmall = (isDay) =>
  classnames("subtitle-small", {
    "nina-subtitle-small nina-text-color-white": !isDay,
    "nina-subtitle-small nina-text-color-black": isDay,
  });

export const ninaTitleSmall = (isDay) =>
  classnames("title-small", {
    "text-center text-lg-start nina-title-small nina-text-color-white": !isDay,
    "text-center text-lg-start nina-title-small nina-text-color-black": isDay,
  });

export const ninaBtnColor = (isDay) =>
  classnames("title-small-btn", {
    "btn btn-light nina-title-small-btn": !isDay,
    "btn btn-dark nina-title-small-btn": isDay,
  });
