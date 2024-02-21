interface CarouselStylesType {
  defaultProps: {
    prevArrow: (args: {
      loop: boolean;
      handlePrev: () => void;
      activeIndex: number;
      firstIndex: boolean;
    }) => React.ReactNode | void;
    nextArrow: (args: {
      loop: boolean;
      handleNext: () => void;
      activeIndex: number;
      lastIndex: boolean;
    }) => React.ReactNode | void;
    navigation: (args: {
      setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
      activeIndex: number;
      length: number;
    }) => React.ReactNode | void;
    transition: object;
    autoplay: boolean;
    autoplayDelay: number;
    loop: boolean;
    className: string;
  };
  styles: {
    base: {
      carousel: object;
      slide: object;
    };
  };
}
