import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "testimonial section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "testimonial-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "세무정보",
    paragraph: "",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div
              className="tiles-item reveal-from-left"
              data-reveal-delay="200"
            >
              <a href="https://blog.naver.com/yoontax7/222599328972">
                <img
                  src={require("../../assets/images/info01.png")}
                  alt="ITSTAX"
                />
              </a>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <a href="https://blog.naver.com/yoontax7/222590216485">
                <img
                  src={require("../../assets/images/info02.png")}
                  alt="ITSTAX"
                />
              </a>
            </div>

            <div
              className="tiles-item reveal-from-right"
              data-reveal-delay="200"
            >
              <a href="https://blog.naver.com/yoontax7/222584878354">
                <img
                  src={require("../../assets/images/info03.png")}
                  alt="ITSTAX"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;
