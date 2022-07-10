import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

function NaverMapComponent() {
  const navermaps = window.naver.maps;
  //const id = this.props.itemData.id;
  return (
    <NaverMap
      mapDivId={"react-naver-map"}
      style={{ width: "100%", height: "50vh" }}
      defaultCenter={{ lat: 37.56012458379309, lng: 126.8549640002815 }}
      defaultZoom={14}
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(37.56012458379309, 126.8549640002815)}
        animation={2}
      ></Marker>
    </NaverMap>
  );
}

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const Cta = ({
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
    title: "CONTACT",
    paragraph: "",
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
                <RenderAfterNavermapsLoaded
                  ncpClientId={"agzqa6txmk"}
                  error={<p>Maps load error</p>}
                  loading={<p>Maps Loading...</p>}
                >
                  <NaverMapComponent />
                </RenderAfterNavermapsLoaded>
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
                <h3 className="mt-0 mb-12">Contact Information</h3>
                <p className="m-0">
                  지역에 상관없이 궁금하신 사항 있으시면 <br />
                  언제든지 편하게 연락주세요.
                </p>
                <br />
                <div className="text-s text-color-primary fw-600 mb-4">
                  Address
                </div>
                <p className="text-xs mb-8">
                  서울특별시 강서구 화곡로 416 (등촌동) 가양역더스카이밸리5차
                </p>
                <div className="text-s text-color-primary fw-600 mb-4">
                  Mobile
                </div>
                <p className="text-s mb-8">010 4363 0213</p>
                <div className="text-s text-color-primary fw-600 mb-4">
                  Phone
                </div>
                <p className="text-s mb-8">02 6956 1772</p>
                <div className="text-s text-color-primary fw-600 mb-4">
                  Email
                </div>
                <p className="text-s mb-8">itstax213@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;
