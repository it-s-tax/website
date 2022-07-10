import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {
  const outerClasses = classNames(
    "features-split section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-split-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  const sectionHeader = {
    title: "",
    paragraph: "",
  };

  const profileStyle = {
    borderRadius: "15px",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>
            <div className="split-item">
              <div
                className="split-item-content center-content-mobile reveal-from-left"
                data-reveal-container=".split-item"
              >
                <Image
                  src={require("./../../assets/images/CEO_profile.jpg")}
                  alt="Features split 03"
                  width={528}
                  height={396}
                  style={profileStyle}
                />
              </div>
              <div
                className={classNames(
                  "split-item-image center-content-mobile reveal-from-bottom",
                  imageFill && "split-item-image-fill"
                )}
                data-reveal-container=".split-item"
              >
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  이츠택스 세무회계컨설팅
                </div>
                <h3 className="mt-0 mb-12">윤혜인 세무사</h3>
                <p className="m-0">
                  안녕하세요. <br /> 이츠택스 세무회계컨설팅 윤혜인
                  세무사입니다. <br /> 항상 납세자의 입장에서 고민하고, <br />
                  대표님의 든든한 사업 파트너가 되어드리도록 노력하겠습니다.{" "}
                  <br /> 믿고 맡겨주시면 늘 진심을 다하겠습니다. <br />{" "}
                  감사합니다.
                </p>
                <br />
                <div className="text-s text-color-primary fw-600 tt-u mb-8">
                  경력사항
                </div>
                <p className="m-0">
                  ✔ 현) 이츠택스 세무회계컨설팅 대표 <br />
                  ✔ 전) 민우세무법인 삼성지사 세무사 <br />
                  ✔ 전) 세무법인 한백택스 세무사 <br />
                  ✔ 국내 중견기업 연말정산 책임세무사 <br />✔ 숙명여자대학교
                  법학과 학사
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
