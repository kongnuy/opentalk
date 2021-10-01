import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
  faCamera,
  faArrowLeft,
  faChevronRight,
  faCheck,
  faTimes,
  faChevronLeft,
  faAlignJustify,
  faPowerOff,
  faSmile,
} from '@fortawesome/free-solid-svg-icons';
library.add(faCoffee);
library.add(faCamera);
library.add(faArrowLeft);
library.add(faChevronRight);
library.add(faCheck);
library.add(faTimes);
library.add(faAlignJustify);
library.add(faChevronLeft);
library.add(faPowerOff);
library.add(faSmile);

export const SmileIcon = (props: any) => (
  <FontAwesomeIcon {...props} icon={faSmile} />
);
export const PowerOffIcon = (props: any) => (
  <FontAwesomeIcon {...props} icon={faPowerOff} />
);
export const CoffeeIcon = (props: any) => (
  <FontAwesomeIcon {...props} icon={faCoffee} />
);
export const CameraIcon = (props: any) => (
  <FontAwesomeIcon {...props} icon={faCamera} />
);
export const ArrowLeftIcon = (props: any) => (
  <FontAwesomeIcon {...props} icon={faArrowLeft} />
);
export const ChevronRightIcon = (props: any) => (
  <FontAwesomeIcon {...props} icon={faChevronRight} />
);
export const ChevronLeftIcon = (props: any) => (
  <FontAwesomeIcon {...props} icon={faChevronLeft} />
);
export const CheckIcon = (props: any) => (
  <FontAwesomeIcon {...props} icon={faCheck} />
);
export const TimesIcon = (props: any) => (
  <FontAwesomeIcon {...props} icon={faTimes} />
);
export const HamburgerIcon = (props: any) => (
  <FontAwesomeIcon {...props} icon={faAlignJustify} />
);
