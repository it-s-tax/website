import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Logo from "./partials/Logo";
import FooterNav from "./partials/FooterNav";
import FooterSocial from "./partials/FooterSocial";

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  topOuterDivider: false,
  topDivider: false,
};

const Footer = ({ className, topOuterDivider, topDivider, ...props }) => {
  const classes = classNames(
    "site-footer center-content-mobile",
    topOuterDivider && "has-top-divider",
    className
  );

  return (
    <footer {...props} className={classes}>
      <div className="container">
        <div
          className={classNames(
            "site-footer-inner",
            topDivider && "has-top-divider"
          )}
        >
          {/* <div className="footer-top space-between text-xxs">
            <Logo />
          </div> */}
          <div className="footer-bottom space-between text-xxs invert-order-desktop">
            <div className="footer-copyright" align="right">
              이츠택스 세무회계컨설팅 &nbsp; | &nbsp; (07548) 서울특별시 강서구
              화곡로 416 (등촌동) 가양역더스카이밸리5차
              <br />
              대표: 윤혜인 &nbsp; | &nbsp; 사업자등록번호: 616-33-00671 &nbsp; |
              &nbsp; Tel: 02-6956-1772 &nbsp; | &nbsp; Fax: 02-6442-1773 <br />
              &nbsp; Email: itstax213@gmail.com &nbsp;|&nbsp; © 2022 ITSTAX Co.
              All rights reserved.
            </div>
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
