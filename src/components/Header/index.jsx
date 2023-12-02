import React from "react";
import { useNavigate } from "react-router-dom";


import { Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="flex flex-row gap-1.5 items-start justify-start w-[9%] md:w-full">
          <div 
          className="bg-deep_orange-400 flex flex-col items-start justify-start p-[3px] rounded-[5px] w-[22%]"
          onClick={() => navigate("/")}
          >
            <Img
              className="h-[18px] my-[3px] w-[18px]"
              src="images/img_openbook1.svg"
              alt="openbookOne"
              
            />

          </div>
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
            size="txtMetropolisSemiBold30"
            onClick={() => navigate("/")}

          >
            Eduvi
          </Text>
        </div>
        <ul className="flex md:flex-col flex-row md:hidden items-center justify-center sm:ml-[0] ml-[100px] sm:mt-0 my-[3px] w-[56%] md:w-full common-row-list">
          <li>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base hover:text-deep_purple-A200 text-gray-900"
                size="txtMetropolisMedium16Gray900"
                onClick={() => navigate("/Shop")}

              >
                Shop
              </Text>
            </div>
          </li>
          <li>
            <div className="flex flex-row items-center justify-center ml-[41px]">
              <Text
                className="text-base hover:text-deep_purple-A200 text-gray-900 text-right"
                size="txtMetropolisMedium16Gray900"
              >
                For Kindergarten
              </Text>
              <Img
                className="h-6 ml-0.5 w-6"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
          </li>
          <li>
            <div className="flex flex-row items-center justify-center ml-[41px]">
              <Text
                className="text-base hover:text-deep_purple-A200 text-gray-900 text-right"
                size="txtMetropolisMedium16Gray900"
              >
                For High School
              </Text>
              <Img
                className="h-6 ml-0.5 w-6"
                src="images/img_arrowdown.svg"
                alt="arrowdown_One"
              />
            </div>
          </li>
          <li>
            <div className="flex flex-row items-center justify-center ml-10">
              <Text
                className="text-base hover:text-deep_purple-A200 text-gray-900 text-right"
                size="txtMetropolisMedium16Gray900"
              >
                For College
              </Text>
              <Img
                className="h-6 ml-0.5 w-6"
                src="images/img_arrowdown.svg"
                alt="arrowdown_Two"
              />
            </div>
          </li>
          <li>
            <div className="flex flex-row items-center justify-center ml-10">
              <Text
                className="text-base hover:text-deep_purple-A200 text-gray-900 text-right"
                size="txtMetropolisMedium16Gray900"
                onClick={() => navigate("/AllCourses")}
              >
                Courses
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_deep_purple_a200.svg"
                alt="arrowdown_Three"
              />
            </div>
          </li>
          <li>
          <div className="flex flex-row items-center justify-center ml-10">
              <Text
                className="text-base hover:text-deep_purple-A200 text-gray-900 text-right"
                size="txtMetropolisMedium16Gray900"
                onClick={() => navigate("/JoinTeacher")}

              >
                Join Teacher

              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowdown_deep_purple_a200.svg"
                alt="arrowdown_Three"
              />
            </div>
          </li>
        </ul>
        <div className="flex flex-row gap-2.5 items-center justify-center sm:ml-[0] ml-[90px] w-[8%] md:w-full">
          <Text
            className="text-base text-gray-900 text-right"
            size="txtMetropolisMedium16Gray900"
          >
            Cart (0)
          </Text>
          <Img
            className="h-[30px] w-[30px]"
            src="images/img_shoppingbag24.svg"
            alt="shoppingbagTwentyFour"
          />
        </div>
        <div className="flex flex-row gap-2.5 items-center justify-between sm:ml-[0] ml-[30px] w-[11%] md:w-full">
          <Text
            className="text-base text-gray-900 text-right"
            size="txtMetropolisMedium16Gray900"


          >
            My Account
          </Text>
          <Img
            className="h-[30px] w-[30px]"
            src="images/img_profile24outline.svg"
            alt="profile24outlin"
          />
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
