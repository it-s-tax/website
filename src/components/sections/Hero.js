import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // };

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // };

  const outerClasses = classNames(
    "hero section center-content",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  const backgroundImageURL = require("../../assets/images/bg.jpg");
  const containerStyle = {
    backgroundImage: `url(${backgroundImageURL})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };
  const slickStyle = {
    borderRadius: "15px",
  };

  return (
    <section {...props} className={outerClasses}>
      <div style={containerStyle}>
        <div className="container-sm">
          <div className={innerClasses}>
            <div className="hero-content">
              <h2
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="300"
              >
                ??? ????????? ?????????{"\n"}
              </h2>
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="300"
              >
                <span className="text-color-primary">
                  ???????????? ?????????????????????
                </span>
                ?????????.
              </h1>
              {/* <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="300"
              >
                ?????? ???????????? ???????????? ???????????? ???????????? <br /> ????????? ??????
                ???????????? ?????????????????? ?????????????????????.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    wideMobile
                    href="https://cruip.com/"
                  >
                    Get started
                  </Button>
                  <Button
                    tag="a"
                    color="dark"
                    wideMobile
                    href="https://github.com/cruip/open-react-template/"
                  >
                    View on Github
                  </Button>
                </ButtonGroup>
              </div>
            </div> */}
            </div>
            <div
              className="hero-figure reveal-from-bottom illustration-element-01"
              data-reveal-value="20px"
              data-reveal-delay="800"
            >
              <Slider {...settings}>
                <div style={slickStyle}>
                  <img
                    src={require("../../assets/images/office01.jpg")}
                    width="1500"
                    alt="logo"
                    style={slickStyle}
                  />
                </div>
                <div>
                  <img
                    src={require("../../assets/images/office02.jpg")}
                    width="1500"
                    alt="logo"
                    style={slickStyle}
                  />
                </div>
                <div>
                  <img
                    src={require("../../assets/images/office03.jpg")}
                    width="1500"
                    alt="logo"
                    style={slickStyle}
                  />
                </div>
                <div>
                  <img
                    src={require("../../assets/images/office04.jpg")}
                    width="1500"
                    alt="logo"
                    style={slickStyle}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
