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
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: false,

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
                늘 진심을 다하는{"\n"}
              </h2>
              <h1
                className="mt-0 mb-16 reveal-from-bottom"
                data-reveal-delay="300"
              >
                <span className="text-color-primary">
                  이츠택스 세무회계컨설팅
                </span>
                입니다.
              </h1>
              {/* <div className="container-xs">
              <p
                className="m-0 mb-32 reveal-from-bottom"
                data-reveal-delay="300"
              >
                항상 납세자의 입장에서 고민하고 대표님의 <br /> 든든한 사업
                파트너가 되어드리도록 노력하겠습니다.
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
