import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import Header from "components/Header";

const kristinWatsonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const brooklynSimmonsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const robertFoxOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const wadeWarrenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const bessieCooperOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const ronaldRichardsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const guyHawkinsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const floydMilesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const theresaWebbOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const codyFisherOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const courtneyHenryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const jeromeBellOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AllmentorsPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-metropolis gap-10 items-start justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col items-center max-w-7xl mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <Header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full" />
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[270px] items-start justify-start p-[19px] w-full"
              style={{ backgroundImage: "url('images/img_group24.svg')" }}
            >
              <div className="flex flex-col gap-[49px] justify-start mb-[65px] ml-2.5 md:ml-[0]">
                <Text
                  className="text-base text-gray-900_66 tracking-[0.48px]"
                  size="txtMetropolisMedium16Gray90066"
                >
                  <span className="text-gray-900_66 font-metropolis text-left font-medium">
                    Home |{" "}
                  </span>
                  <span className="text-deep_purple-A200 font-metropolis text-left font-medium">
                    Our Mentors
                  </span>
                </Text>
                <Text
                  className="leading-[50.00px] md:ml-[0] ml-[165px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                  size="txtMetropolisSemiBold45"
                >
                  <>
                    Eduvi has the
                    <br />
                    qualified mentor
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-inter gap-5 items-center justify-start md:ml-[0] ml-[51px] md:px-5 w-[67%] md:w-full">
          <Button
            className="cursor-pointer font-medium min-w-[147px] rounded-[10px] text-base text-center"
            color="white_A700"
          >
            All Mentors
          </Button>
          <Button
            className="cursor-pointer font-medium min-w-[190px] rounded-[10px] text-base text-center"
            color="white_A700"
          >
            For Kindergarten
          </Button>
          <Button
            className="!text-white-A700 cursor-pointer font-medium min-w-[177px] rounded-[10px] shadow-bs2 text-base text-center"
            color="deep_orange_400"
          >
            For high school
          </Button>
          <Button
            className="cursor-pointer font-medium min-w-[145px] rounded-[10px] text-base text-center"
            color="white_A700"
          >
            For college
          </Button>
          <Button
            className="cursor-pointer font-medium min-w-[178px] rounded-[10px] text-base text-center"
            color="white_A700"
          >
            For Technology
          </Button>
        </div>
        <div className="flex flex-col font-inter items-center max-w-7xl mb-[39px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start w-full">
              <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="images/img_bg.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFortyFour"
                      options={kristinWatsonOptionsList}
                      isSearchable={false}
                      placeholder="Kristin Watson"
                    />
                    <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="images/img_bg_290x290.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFiftyEight"
                      options={brooklynSimmonsOptionsList}
                      isSearchable={false}
                      placeholder="Brooklyn Simmons"
                    />
                    <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="images/img_bg_1.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupEightyThree"
                      options={robertFoxOptionsList}
                      isSearchable={false}
                      placeholder="Robert Fox"
                    />
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="images/img_bg_2.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFiftyOne"
                      options={wadeWarrenOptionsList}
                      isSearchable={false}
                      placeholder="Wade Warren"
                    />
                    <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="images/img_bg_3.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFortySeven"
                      options={bessieCooperOptionsList}
                      isSearchable={false}
                      placeholder="Bessie Cooper"
                    />
                    <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="images/img_bg_4.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupSixtyOne"
                      options={ronaldRichardsOptionsList}
                      isSearchable={false}
                      placeholder="Ronald Richards"
                    />
                    <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover w-[290px]"
                      src="images/img_bg_5.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex md:h-[93px] h-[94px] justify-end relative w-full">
                    <div className="flex flex-row gap-2.5 h-full items-start justify-center mb-[9px] mt-auto mx-auto w-[33%]">
                      <Line className="bg-gray-700 h-[17px] mb-0.5 w-px" />
                      <Text
                        className="mt-0.5 text-gray-700 text-sm"
                        size="txtInterMedium14"
                      >
                        <span className="text-gray-700 font-inter text-left font-medium">
                          Courses(
                        </span>
                        <a
                          href="javascript:"
                          className="text-deep_orange-400 font-inter text-left font-medium underline"
                        >
                          30
                        </a>
                        <span className="text-gray-700 font-inter text-left font-medium">
                          )
                        </span>
                      </Text>
                    </div>
                    <div className="absolute bg-white-A700 flex flex-col gap-[9px] h-full inset-[0] items-end justify-center m-auto pb-2.5 rounded-bl-[10px] rounded-br-[10px] shadow-bs6 w-full">
                      <Line className="bg-deep_purple-A200 h-px w-full" />
                      <div className="flex flex-col gap-2 items-start justify-start w-[95%] md:w-full">
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <SelectBox
                            className="font-medium text-base text-deep_orange-400 text-left w-full"
                            placeholderClassName="text-deep_orange-400"
                            indicator={
                              <Img
                                className="h-6 mr-[0] w-6"
                                src="images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="groupSeventyFive"
                            options={guyHawkinsOptionsList}
                            isSearchable={false}
                            placeholder="Guy Hawkins"
                          />
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtInterMedium14"
                          >
                            Founder & Mentor
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[30%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="images/img_signal.svg"
                            alt="signal"
                          />
                          <Text
                            className="ml-[5px] text-gray-700 text-sm"
                            size="txtInterMedium14"
                          >
                            <span className="text-gray-700 font-inter text-left font-medium">
                              4.9 (
                            </span>
                            <a
                              href="javascript:"
                              className="text-deep_orange-400 font-inter text-left font-medium underline"
                            >
                              135
                            </a>
                            <span className="text-gray-700 font-inter text-left font-medium">
                              )
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="images/img_bg_6.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFiftyFour"
                      options={floydMilesOptionsList}
                      isSearchable={false}
                      placeholder="Floyd Miles"
                    />
                    <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="images/img_bg_7.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFifty"
                      options={theresaWebbOptionsList}
                      isSearchable={false}
                      placeholder="Theresa Webb"
                    />
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="images/img_bg_8.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupSixtyFour"
                      options={codyFisherOptionsList}
                      isSearchable={false}
                      placeholder="Cody Fisher"
                    />
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="images/img_bg_9.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupSixtySeven"
                      options={courtneyHenryOptionsList}
                      isSearchable={false}
                      placeholder="Courtney Henry"
                    />
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="images/img_bg_10.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFiftySeven"
                      options={jeromeBellOptionsList}
                      isSearchable={false}
                      placeholder="Jerome Bell"
                    />
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row font-metropolis items-start justify-center w-[22%] md:w-full">
                <Button
                  className="flex h-11 items-center justify-center rounded-md w-11"
                  shape="round"
                  color="deep_purple_50_04"
                  size="sm"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </Button>
                <Text
                  className="ml-5 mt-3.5 text-base text-gray-900"
                  size="txtMetropolisMedium16Gray900"
                >
                  Page
                </Text>
                <Button
                  className="!text-blue_gray-800_01 cursor-pointer font-medium h-11 leading-[normal] ml-[15px] rounded-lg text-center text-lg w-11"
                  color="white_A700"
                  size="lg"
                >
                  1
                </Button>
                <Text
                  className="ml-[15px] mt-[13px] text-base text-gray-900"
                  size="txtMetropolisMedium16Gray900"
                >
                  of 3
                </Text>
                <Button
                  className="flex h-11 items-center justify-center ml-5 rotate-[180deg] rounded-md w-11"
                  shape="round"
                  size="sm"
                >
                  <Img
                    className="h-6"
                    src="images/img_arrowright_white_a700.svg"
                    alt="arrowright_One"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 font-metropolis md:h-[394px] h-[420px] sm:h-[439px] mt-[100px] p-[50px] md:px-10 sm:px-5 relative rounded-[20px] w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-[45%]">
              <Text
                className="leading-[55.00px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
                size="txtMetropolisBold45WhiteA700"
              >
                <>
                  Subscribe For Get Update
                  <br />
                  Every New Courses
                </>
              </Text>
              <Text
                className="mt-[27px] text-base text-center text-white-A700_b2"
                size="txtMetropolisRegular16WhiteA700b2"
              >
                20k+ students daily learn with Eduvi. Subscribe for new courses.
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[46px] w-[89%] md:w-full">
                <Input
                  name="button"
                  placeholder="enter your email"
                  className="font-medium font-metropolis p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="rounded-bl-[10px] rounded-tl-[10px] w-[73%] sm:w-full"
                  type="email"
                  color="white_A700_33"
                  size="md"
                ></Input>
                <Button className="cursor-pointer font-inter font-medium leading-[normal] min-w-[142px] rounded-br-[10px] rounded-tr-[10px] text-base text-center">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[93%]">
              <div className="flex flex-col gap-[45px] items-center justify-start w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
                  <Img
                    className="h-[60px] md:h-auto rotate-[180deg] rounded-[50%] w-[60px]"
                    src="images/img_ellipse168.png"
                    alt="ellipse168"
                  />
                  <Img
                    className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                    src="images/img_ellipse166.png"
                    alt="ellipse166"
                  />
                </div>
                <div className="flex flex-row sm:gap-10 items-start justify-between w-[79%] md:w-full">
                  <Img
                    className="h-[60px] md:h-auto mb-6 rotate-[180deg] rounded-[50%] w-[60px]"
                    src="images/img_ellipse167.png"
                    alt="ellipse167"
                  />
                  <Img
                    className="h-[60px] md:h-auto mt-6 rounded-[50%] w-[60px]"
                    src="images/img_ellipse167_60x60.png"
                    alt="ellipse167_One"
                  />
                </div>
                <div className="flex flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
                  <Img
                    className="h-[60px] md:h-auto rotate-[180deg] rounded-[50%] w-[60px]"
                    src="images/img_ellipse166_60x60.png"
                    alt="ellipse166_One"
                  />
                  <Img
                    className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                    src="images/img_ellipse168_60x60.png"
                    alt="ellipse168_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between mt-[78px] w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[14%] md:w-full">
              <div className="flex flex-row font-metropolis gap-1.5 items-start justify-start w-[69%] md:w-full">
                <div className="bg-deep_orange-400 flex flex-col items-start justify-start p-[3px] rounded-[5px] w-[22%]">
                  <Img
                    className="h-[18px] my-[3px] w-[18px]"
                    src="images/img_openbook1.svg"
                    alt="openbookOne_One"
                  />
                </div>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMetropolisSemiBold30"
                >
                  Eduvi
                </Text>
              </div>
              <div className="flex flex-row gap-[15px] items-center justify-start mt-[25px] w-[89%] md:w-full">
                <Img
                  className="h-[22px] w-[22px]"
                  src="images/img_facebooklogo1.svg"
                  alt="facebooklogoOne"
                />
                <Button
                  className="flex h-9 items-center justify-center rounded-[50%] w-9"
                  shape="circle"
                  color="deep_orange_400"
                  size="sm"
                >
                  <Img
                    className="h-[18px]"
                    src="images/img_instagramicon.svg"
                    alt="instagramicon"
                  />
                </Button>
                <Img
                  className="h-[17px]"
                  src="images/img_twitterlogo.svg"
                  alt="twitterlogo"
                />
                <Img
                  className="h-[18px]"
                  src="images/img_linkedinicon.svg"
                  alt="linkedinicon"
                />
              </div>
              <Text
                className="mt-[39px] text-base text-gray-700"
                size="txtInterRegular16"
              >
                © 2021 Eduvi.co
              </Text>
              <Text
                className="leading-[26.00px] mt-[19px] text-base text-gray-700"
                size="txtInterRegular16"
              >
                <>
                  Eduvi is a registered
                  <br />
                  trademark of Eduvi.co
                </>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5">
              <Text
                className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                size="txtInterSemiBold22"
              >
                Courses
              </Text>
              <Text
                className="mt-[18px] text-base text-gray-700"
                size="txtInterRegular16"
              >
                Classroom courses
              </Text>
              <Text
                className="mt-[13px] text-base text-gray-700"
                size="txtInterRegular16"
              >
                Virtual classroom courses
              </Text>
              <Text
                className="mt-[15px] text-base text-gray-700"
                size="txtInterRegular16"
              >
                E-learning courses
              </Text>
              <Text
                className="mt-3 text-base text-gray-700"
                size="txtInterRegular16"
              >
                Video Courses
              </Text>
              <Text
                className="mt-[13px] text-base text-gray-700"
                size="txtInterRegular16"
              >
                Offline Courses
              </Text>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[137px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:mt-0 mt-0.5 w-[51%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Community
                </Text>
                <Text
                  className="mt-4 text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Learners
                </Text>
                <Text
                  className="mt-3.5 text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Parteners
                </Text>
                <Text
                  className="mt-[15px] text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Developers
                </Text>
                <Text
                  className="mt-3 text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Transactions
                </Text>
                <Text
                  className="mt-[15px] text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Blog
                </Text>
                <Text
                  className="mt-[13px] text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Teaching Center
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  Quick links
                </Text>
                <Text
                  className="mt-[18px] text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Home
                </Text>
                <Text
                  className="mt-[13px] text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Professional Education
                </Text>
                <Text
                  className="mt-3.5 text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Courses
                </Text>
                <Text
                  className="mt-[13px] text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Admissions
                </Text>
                <Text
                  className="mt-3.5 text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Testimonial
                </Text>
                <Text
                  className="mt-[15px] text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Programs
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
                  size="txtInterSemiBold22"
                >
                  More
                </Text>
                <Text
                  className="mt-[18px] text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Press
                </Text>
                <Text
                  className="mt-3.5 text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Investors
                </Text>
                <Text
                  className="mt-3.5 text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Terms
                </Text>
                <Text
                  className="mt-[15px] text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Privacy
                </Text>
                <Text
                  className="mt-3.5 text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Help
                </Text>
                <Text
                  className="mt-3 text-base text-gray-700"
                  size="txtInterRegular16"
                >
                  Contact
                </Text>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllmentorsPage;
