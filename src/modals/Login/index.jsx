import React from "react";
import { default as ModalProvider } from "react-modal";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  PagerIndicator,
  Slider,
  Text,
} from "components";

const LoginModal = (props) => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[74%]"
      overlayClassName="bg-gray-900_7f fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="h-[800px] max-w-[1060px] mx-auto md:px-5 relative w-full">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            activeIndex={sliderState}
            responsive={{
              0: { items: 1 },
              550: { items: 1 },
              1050: { items: 1 },
            }}
            onSlideChanged={(e) => {
              setsliderState(e?.item);
            }}
            ref={sliderRef}
            className="m-auto w-full"
            items={[...Array(3)].map(() => (
              <React.Fragment key={Math.random()}>
                <div className="bg-white-A700 flex flex-col items-center justify-end mx-2.5 p-[79px] md:px-10 sm:px-5 rounded-[15px]">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-start pb-10">
                      <div className="flex flex-row items-start justify-start w-[23%] md:w-full">
                        <Button
                          className="flex h-5 items-center justify-center w-5"
                          shape="round"
                          color="deep_orange_400"
                          size="xs"
                        >
                          <Img
                            className="h-3"
                            src="images/img_openbook1.svg"
                            alt="openbookOne"
                          />
                        </Button>
                        <Text
                          className="ml-[5px] text-center text-gray-900 text-xl"
                          size="txtMetropolisSemiBold20Gray900"
                        >
                          Eduvi
                        </Text>
                      </div>
                      <Text
                        className="leading-[50.00px] mt-[15px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900"
                        size="txtMetropolisBold40"
                      >
                        <>
                          Welcome to
                          <br />
                          Eduvi Online
                          <br />
                          Learning Platform
                        </>
                      </Text>
                      <Img
                        className="h-[336px] mt-[30px]"
                        src="images/img_46300601.svg"
                        alt="57907191"
                      />
                    </div>
                    <Line className="bg-gradient1  h-[641px] md:h-px md:w-full w-px" />
                    <div className="flex flex-col items-center justify-start">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Input
                          name="google"
                          placeholder="Sign in with google"
                          className="p-0 placeholder:text-gray-700 text-base text-left w-full"
                          wrapClassName="border border-gray-300 border-solid flex w-[92%]"
                          prefix={
                            <Img
                              className="h-6 mr-7 my-auto"
                              src="images/img_googleplus_1_1.svg"
                              alt="google-plus (1) 1"
                            />
                          }
                          shape="round"
                          size="xs"
                        ></Input>
                        <div className="flex flex-row gap-2.5 items-center justify-center mt-[27px] w-[68%] md:w-full">
                          <div className="bg-gray-700 h-px my-[7px] w-[8%]"></div>
                          <Text
                            className="text-base text-center text-gray-700"
                            size="txtMetropolisRegular16"
                          >
                            Or signin with your email
                          </Text>
                          <div className="bg-gray-700 h-px my-[7px] w-[8%]"></div>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-8 w-full">
                          <div className="flex flex-col gap-3 items-start justify-start w-full">
                            <Text
                              className="text-base text-gray-900"
                              size="txtMetropolisMedium16Gray900"
                            >
                              Email
                            </Text>
                            <Input
                              name="group7608"
                              placeholder="bill.sanders@example.com"
                              className="p-0 placeholder:text-gray-700 text-base text-left w-full"
                              wrapClassName="border border-gray-300 border-solid flex w-full"
                              prefix={
                                <Img
                                  className="h-[18px] mr-[15px] my-auto"
                                  src="images/img_message_24_outline.svg"
                                  alt="message / 24 / Outline"
                                />
                              }
                              shape="round"
                            ></Input>
                          </div>
                          <div className="flex flex-col gap-3 items-start justify-start mt-[21px] w-full">
                            <Text
                              className="text-base text-gray-900"
                              size="txtMetropolisMedium16Gray900"
                            >
                              Passord
                            </Text>
                            <Input
                              name="name"
                              placeholder="*************"
                              className="p-0 placeholder:text-gray-700 text-base text-left w-full"
                              wrapClassName="border border-gray-300 border-solid flex w-full"
                              prefix={
                                <Img
                                  className="h-[18px] mr-[15px] my-auto"
                                  src="images/img_lockpad_locksafesecurityprotectedlock_alt_24_outline.svg"
                                  alt="lock,pad lock,safe,security,protected,lock alt, / 24 / Outline"
                                />
                              }
                              suffix={
                                <Img
                                  className="h-[18px] ml-[35px] my-auto"
                                  src="images/img_eye_1_1.svg"
                                  alt="eye (1) 1"
                                />
                              }
                              shape="round"
                            ></Input>
                          </div>
                          <Button
                            className="cursor-pointer font-medium min-w-[370px] mt-[25px] rounded-[10px] text-base text-center"
                            size="lg"
                          >
                            Sign In
                          </Button>
                          <div className="flex flex-row items-start justify-between mt-[23px] w-full">
                            <CheckBox
                              className="font-medium text-base text-gray-700 text-left"
                              inputClassName="mr-[5px]"
                              name="keepmesignedin"
                              id="keepmesignedin2"
                              label="keep me signed in"
                            ></CheckBox>
                            <Text
                              className="mt-1 text-base text-gray-700 text-right"
                              size="txtMetropolisMedium16Gray700"
                            >
                              Forgot password?
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block cursor-pointer rounded-[50%] h-2.5 border-deep_orange-400 border border-solid bg-white-A700 w-2.5 relative" />
                );
              }
              return (
                <div
                  className="inline-block cursor-pointer rounded-[50%] h-2 bg-deep_orange-400_7f w-2 relative"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
          />
          <PagerIndicator
            className="absolute bottom-[13%] flex h-2.5 left-[23%] w-9"
            count={3}
            activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 border-deep_orange-400 border border-solid bg-white-A700 w-2.5 relative"
            activeIndex={sliderState}
            inactiveCss="inline-block cursor-pointer rounded-[50%] h-2 bg-deep_orange-400_7f w-2 relative"
            sliderRef={sliderRef}
            selectedWrapperCss="inline-block mx-[2.50px]"
            unselectedWrapperCss="inline-block mx-[2.50px]"
          />
        </div>
      </div>
    </ModalProvider>
  );
};

export default LoginModal;
