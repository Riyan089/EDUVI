import React from "react";

import { Button, Img, Input, List, Text } from "components";
import Header from "components/Header";

const CourseDetailsPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-metropolis items-center justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-7xl mb-[39px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <Header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full" />
            <div className="bg-deep_purple-50_01 flex flex-col items-center justify-start p-[18px] rounded-[20px] w-full">
              <div className="flex md:flex-col flex-row md:gap-[42px] items-start justify-between my-1.5 w-full">
                <div className="flex md:flex-1 flex-col gap-[27px] items-start justify-start w-[66%] md:w-full">
                  <Text
                    className="text-base text-gray-900_66 tracking-[0.48px]"
                    size="txtMetropolisMedium16Gray90066"
                  >
                    <span className="text-gray-900_66 font-metropolis text-left font-medium">
                      Home |{" "}
                    </span>
                    <span className="text-gray-900_66 font-metropolis text-left font-medium">
                      Courses |
                    </span>
                    <span className="text-deep_purple-A200 font-metropolis text-left font-medium">
                      {" "}
                      Course Details
                    </span>
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="h-[500px] relative w-full">
                      <Img
                        className="h-[500px] m-auto object-cover rounded-[10px] w-full"
                        src="images/img_pexelsvanessagarcia6325959_500x808.png"
                        alt="pexelsvanessaga"
                      />
                      <Button
                        className="absolute flex h-[60px] inset-[0] items-center justify-center m-auto w-[60px]"
                        shape="circle"
                      >
                        <Img
                          className="h-4"
                          src="images/img_overflowmenu_white_a700.svg"
                          alt="overflowmenu"
                        />
                      </Button>
                    </div>
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtMetropolisSemiBold25"
                    >
                      Maths - for Standard 3 Students | Episode 2
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[19px] items-start justify-start w-[32%] md:w-full">
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                    size="txtMetropolisSemiBold25"
                  >
                    Course Playlists
                  </Text>
                  <List
                    className="flex flex-col gap-4 items-center pt-[86px] w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] hover:shadow-bs5 shadow-bs5 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[89%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-[5px] w-1/4"
                          src="images/img_image_50x80.png"
                          alt="image"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            Maths - for Standard 3 St..
                          </Text>
                          <Text
                            className="mt-1 text-deep_orange-400 text-sm"
                            size="txtMetropolisMedium14"
                          >
                            5:43
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] hover:shadow-bs5 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-3/4 md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-[5px] w-[30%]"
                          src="images/img_image_50x80.png"
                          alt="image"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            Maths - Introduction
                          </Text>
                          <Text
                            className="mt-1 text-deep_orange-400 text-sm"
                            size="txtMetropolisMedium14"
                          >
                            1:57
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700_87 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] hover:shadow-bs5 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[89%] md:w-full">
                        <div className="h-[50px] relative w-1/4">
                          <Img
                            className="h-[50px] m-auto object-cover rounded-[5px] w-full"
                            src="images/img_image_1.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                            <Img
                              className="h-2.5 w-2.5"
                              src="images/img_lockpadlocks.svg"
                              alt="lockpadlocks"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900_87 text-lg"
                            size="txtMetropolisSemiBold18Gray90087"
                          >
                            Maths - for Standard 3 St..
                          </Text>
                          <Text
                            className="mt-1 text-deep_orange-400_87 text-sm"
                            size="txtMetropolisMedium14Deeporange40087"
                          >
                            8:11
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700_87 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] hover:shadow-bs5 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[89%] md:w-full">
                        <div className="h-[50px] relative w-1/4">
                          <Img
                            className="h-[50px] m-auto object-cover rounded-[5px] w-full"
                            src="images/img_image_50x80.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                            <Img
                              className="h-2.5 w-2.5"
                              src="images/img_lockpadlocks.svg"
                              alt="lockpadlocks"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900_87 text-lg"
                            size="txtMetropolisSemiBold18Gray90087"
                          >
                            Maths - for Standard 3 St..
                          </Text>
                          <Text
                            className="mt-1 text-deep_orange-400_87 text-sm"
                            size="txtMetropolisMedium14Deeporange40087"
                          >
                            6:10
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700_87 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] hover:shadow-bs5 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[89%] md:w-full">
                        <div className="h-[50px] relative w-1/4">
                          <Img
                            className="h-[50px] m-auto object-cover rounded-[5px] w-full"
                            src="images/img_image_50x80.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                            <Img
                              className="h-2.5 w-2.5"
                              src="images/img_lockpadlocks.svg"
                              alt="lockpadlocks"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900_87 text-lg"
                            size="txtMetropolisSemiBold18Gray90087"
                          >
                            Maths - for Standard 3 St..
                          </Text>
                          <Text
                            className="mt-1 text-deep_orange-400_87 text-sm"
                            size="txtMetropolisMedium14Deeporange40087"
                          >
                            10:00
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700_87 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] hover:shadow-bs5 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[89%] md:w-full">
                        <div className="h-[50px] relative w-1/4">
                          <Img
                            className="h-[50px] m-auto object-cover rounded-[5px] w-full"
                            src="images/img_image_50x80.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                            <Img
                              className="h-2.5 w-2.5"
                              src="images/img_lockpadlocks.svg"
                              alt="lockpadlocks"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900_87 text-lg"
                            size="txtMetropolisSemiBold18Gray90087"
                          >
                            Maths - for Standard 3 St..
                          </Text>
                          <Text
                            className="mt-1 text-deep_orange-400_87 text-sm"
                            size="txtMetropolisMedium14Deeporange40087"
                          >
                            7:53
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[69px] w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[66%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMetropolisSemiBold30"
                >
                  Course Details
                </Text>
                <Text
                  className="leading-[30.00px] text-base text-gray-700"
                  size="txtMetropolisRegular16"
                >
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start mt-[23px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMetropolisSemiBold30"
                >
                  Certification
                </Text>
                <Text
                  className="leading-[30.00px] text-base text-gray-700 w-full"
                  size="txtMetropolisRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start mt-[23px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMetropolisSemiBold30"
                >
                  Who this course is for
                </Text>
                <Text
                  className="leading-[30.00px] text-base text-gray-700 w-full"
                  size="txtMetropolisRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start mt-[25px] w-[55%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMetropolisSemiBold30"
                >
                  <>What you&#39;ll learn in this course:</>
                </Text>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-[96%] md:w-full">
                  <div className="bg-deep_orange-400 h-2.5 sm:mt-0 my-0.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-gray-900"
                    size="txtMetropolisRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-[96%] md:w-full">
                  <div className="bg-deep_orange-400 h-2.5 sm:mt-0 my-0.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-gray-900"
                    size="txtMetropolisRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-[96%] md:w-full">
                  <div className="bg-deep_orange-400 h-2.5 sm:mt-0 my-0.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-gray-900"
                    size="txtMetropolisRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-[96%] md:w-full">
                  <div className="bg-deep_orange-400 h-2.5 sm:mt-0 my-0.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-gray-900"
                    size="txtMetropolisRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-[96%] md:w-full">
                  <div className="bg-deep_orange-400 h-2.5 sm:mt-0 my-0.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-gray-900"
                    size="txtMetropolisRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[32%] md:w-full">
              <div className="bg-white-A700 flex flex-col font-metropolis items-center justify-start p-5 rounded-[10px] w-full">
                <div className="flex flex-row items-center justify-between mt-2 w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Price
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-deep_orange-400 text-right sm:text-xl"
                    size="txtMetropolisSemiBold24"
                  >
                    $49.00
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-[25px] w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Instructor
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl underline"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    Wade Warren
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-6 w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Ratings
                  </Text>
                  <Img
                    className="h-4"
                    src="images/img_close_amber_500.svg"
                    alt="close"
                  />
                </div>
                <div className="flex flex-row items-start justify-between mt-[23px] w-full">
                  <Text
                    className="mb-0.5 text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Durations
                  </Text>
                  <Text
                    className="mt-0.5 text-gray-900 text-right text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    10 Days
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[23px] w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Lessons
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    30
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-6 w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Quizzes
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    5
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-6 w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Certificate
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    Yes
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[26px] w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Language
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    English
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mb-2.5 mt-[22px] w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Access
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    Lifetime
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-inter font-medium min-w-[400px] sm:min-w-full text-center text-lg"
                shape="round"
              >
                Purchase Course
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[88px] w-full">
            <div className="flex flex-col gap-12 items-start justify-start w-full">
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                size="txtMetropolisBold45"
              >
                Similar Courses
              </Text>
              <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[15px] rounded-[10px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                    <Img
                      className="sm:flex-1 h-[103px] md:h-auto object-cover rounded-[10px] w-[28%] sm:w-full"
                      src="images/img_image_103x160.png"
                      alt="image"
                    />
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[15px] sm:mt-0 my-1.5 w-[45%] sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtMetropolisSemiBold24Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <Img
                        className="h-5 mt-2"
                        src="images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="mt-[11px] text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl"
                        size="txtMetropolisSemiBold24"
                      >
                        $40.00
                      </Text>
                    </div>
                    <Button
                      className="flex h-11 items-center justify-center mb-[5px] sm:ml-[0] ml-[106px] sm:mt-0 mt-[54px] rounded-md w-11"
                      shape="round"
                      size="sm"
                    >
                      <Img
                        className="h-6"
                        src="images/img_shoppingbag24_white_a700.svg"
                        alt="shoppingbagTwentyFour"
                      />
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[15px] rounded-[10px] hover:shadow-bs3 hover:w-full w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                    <Img
                      className="sm:flex-1 h-[103px] md:h-auto object-cover rounded-[10px] w-[28%] sm:w-full"
                      src="images/img_image_2.png"
                      alt="image"
                    />
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[15px] sm:mt-0 my-1.5 w-[45%] sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtMetropolisSemiBold24Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <Img
                        className="h-5 mt-2"
                        src="images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="mt-[11px] text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl"
                        size="txtMetropolisSemiBold24"
                      >
                        $40.00
                      </Text>
                    </div>
                    <Button
                      className="flex h-11 items-center justify-center mb-[5px] sm:ml-[0] ml-[106px] sm:mt-0 mt-[54px] rounded-md w-11"
                      shape="round"
                      color="gray_50"
                      size="sm"
                    >
                      <Img
                        className="h-6"
                        src="images/img_shoppingbag24_deep_purple_a200.svg"
                        alt="shoppingbagTwentyFour"
                      />
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[15px] rounded-[10px] hover:shadow-bs3 hover:w-full w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                    <Img
                      className="sm:flex-1 h-[103px] md:h-auto object-cover rounded-[10px] w-[28%] sm:w-full"
                      src="images/img_image_3.png"
                      alt="image"
                    />
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[15px] sm:mt-0 my-1.5 w-[45%] sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtMetropolisSemiBold24Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <Img
                        className="h-5 mt-2"
                        src="images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="mt-[11px] text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl"
                        size="txtMetropolisSemiBold24"
                      >
                        $40.00
                      </Text>
                    </div>
                    <Button
                      className="flex h-11 items-center justify-center mb-[5px] sm:ml-[0] ml-[106px] sm:mt-0 mt-[54px] rounded-md w-11"
                      shape="round"
                      color="gray_50"
                      size="sm"
                    >
                      <Img
                        className="h-6"
                        src="images/img_shoppingbag24_deep_purple_a200.svg"
                        alt="shoppingbagTwentyFour"
                      />
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[15px] rounded-[10px] hover:shadow-bs3 hover:w-full w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                    <Img
                      className="sm:flex-1 h-[103px] md:h-auto object-cover rounded-[10px] w-[28%] sm:w-full"
                      src="images/img_image_4.png"
                      alt="image"
                    />
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[15px] sm:mt-0 my-1.5 w-[45%] sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtMetropolisSemiBold24Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <Img
                        className="h-5 mt-2"
                        src="images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="mt-[11px] text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl"
                        size="txtMetropolisSemiBold24"
                      >
                        $40.00
                      </Text>
                    </div>
                    <Button
                      className="flex h-11 items-center justify-center mb-[5px] sm:ml-[0] ml-[106px] sm:mt-0 mt-[54px] rounded-md w-11"
                      shape="round"
                      color="gray_50"
                      size="sm"
                    >
                      <Img
                        className="h-6"
                        src="images/img_shoppingbag24_deep_purple_a200.svg"
                        alt="shoppingbagTwentyFour"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 md:h-[414px] h-[420px] sm:h-[459px] mt-[120px] p-[50px] md:px-10 sm:px-5 relative rounded-[20px] w-full">
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

export default CourseDetailsPage;
