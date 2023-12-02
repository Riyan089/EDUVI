import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import Header from "components/Header";

const sortbyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const VidhalayaPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-metropolis items-center justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-7xl mb-[69px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <Header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full" />
            <div className="bg-deep_purple-50 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-5 rounded-[20px] w-full">
              <Text
                className="ml-2.5 sm:ml-[0] text-base text-gray-900_66 tracking-[0.48px]"
                size="txtMetropolisMedium16"
              >
                <span className="text-gray-900_66 font-metropolis text-left font-medium">
                  Home |{" "}
                </span>
                <span className="text-deep_purple-A200 font-metropolis text-left font-medium">
                  Shop
                </span>
              </Text>
              <Text
                className="leading-[50.00px] sm:mt-0 mt-[65px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                size="txtMetropolisSemiBold45"
              >
                <>
                  Eduvi Online
                  <br />
                  Book Shop
                </>
              </Text>
              <Img
                className="md:flex-1 h-[210px] sm:h-auto sm:ml-[0] ml-[243px] sm:mt-0 mt-5 object-cover w-[31%] md:w-full"
                src="images/img_kisspngbookcas.png"
                alt="kisspngbookcas"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between mt-10 w-full">
            <List
              className="flex flex-col gap-[35px] w-[32%]"
              orientation="vertical"
            >
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMetropolisSemiBold30"
                >
                  Popular Books
                </Text>
                <div className="bg-white-A700 flex flex-col font-metropolis items-start justify-start mt-[18px] p-[22px] sm:px-5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start mb-0.5 md:ml-[0] ml-[3px] w-[90%] md:w-full">
                    <Img
                      className="h-[90px] md:h-auto object-cover rounded-[5px] w-[24%]"
                      src="images/img_image14.png"
                      alt="imageFourteen"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[72%]">
                      <Img
                        className="h-4"
                        src="images/img_mobile.svg"
                        alt="close"
                      />
                      <Text
                        className="leading-[20.00px] text-gray-900 text-lg"
                        size="txtMetropolisSemiBold18"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="text-deep_orange-400 text-lg"
                        size="txtMetropolisSemiBold18Deeporange400"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col font-metropolis items-start justify-start mt-[15px] p-[22px] sm:px-5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start mb-0.5 md:ml-[0] ml-[3px] w-[90%] md:w-full">
                    <Img
                      className="h-[90px] md:h-auto object-cover rounded-[5px] w-[24%]"
                      src="images/img_image.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[72%]">
                      <Img
                        className="h-4"
                        src="images/img_mobile.svg"
                        alt="close_One"
                      />
                      <Text
                        className="leading-[20.00px] text-gray-900 text-lg"
                        size="txtMetropolisSemiBold18"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="text-deep_orange-400 text-lg"
                        size="txtMetropolisSemiBold18Deeporange400"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col font-metropolis items-start justify-start mt-[15px] p-[22px] sm:px-5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start mb-0.5 md:ml-[0] ml-[3px] w-[90%] md:w-full">
                    <Img
                      className="h-[90px] md:h-auto object-cover rounded-[5px] w-[24%]"
                      src="images/img_image_90x75.png"
                      alt="image_One"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[72%]">
                      <Img
                        className="h-4"
                        src="images/img_mobile.svg"
                        alt="close_Two"
                      />
                      <Text
                        className="leading-[20.00px] text-gray-900 text-lg"
                        size="txtMetropolisSemiBold18"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="text-deep_orange-400 text-lg"
                        size="txtMetropolisSemiBold18Deeporange400"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="mt-[17px] text-deep_purple-A200 text-xl"
                  size="txtInterMedium20"
                >
                  See More
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMetropolisSemiBold30"
                >
                  New Arrivals
                </Text>
                <div className="bg-white-A700 flex flex-col font-metropolis items-start justify-start mt-[21px] p-[22px] sm:px-5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start mb-0.5 md:ml-[0] ml-[3px] w-[90%] md:w-full">
                    <Img
                      className="h-[90px] md:h-auto object-cover rounded-[5px] w-[24%]"
                      src="images/img_image14.png"
                      alt="imageFourteen"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[72%]">
                      <Img
                        className="h-4"
                        src="images/img_mobile.svg"
                        alt="close"
                      />
                      <Text
                        className="leading-[20.00px] text-gray-900 text-lg"
                        size="txtMetropolisSemiBold18"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="text-deep_orange-400 text-lg"
                        size="txtMetropolisSemiBold18Deeporange400"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col font-metropolis items-start justify-start mt-[15px] p-[22px] sm:px-5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start mb-0.5 md:ml-[0] ml-[3px] w-[90%] md:w-full">
                    <Img
                      className="h-[90px] md:h-auto object-cover rounded-[5px] w-[24%]"
                      src="images/img_image.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[72%]">
                      <Img
                        className="h-4"
                        src="images/img_mobile.svg"
                        alt="close_One"
                      />
                      <Text
                        className="leading-[20.00px] text-gray-900 text-lg"
                        size="txtMetropolisSemiBold18"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="text-deep_orange-400 text-lg"
                        size="txtMetropolisSemiBold18Deeporange400"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col font-metropolis items-start justify-start mt-[15px] p-[22px] sm:px-5 rounded-[10px] w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start mb-0.5 md:ml-[0] ml-[3px] w-[90%] md:w-full">
                    <Img
                      className="h-[90px] md:h-auto object-cover rounded-[5px] w-[24%]"
                      src="images/img_image_90x75.png"
                      alt="image_One"
                    />
                    <div className="flex flex-col gap-2.5 items-start justify-start w-[72%]">
                      <Img
                        className="h-4"
                        src="images/img_mobile.svg"
                        alt="close_Two"
                      />
                      <Text
                        className="leading-[20.00px] text-gray-900 text-lg"
                        size="txtMetropolisSemiBold18"
                      >
                        <>
                          The Three Musketeers, by
                          <br />
                          Alexandre Dumas
                        </>
                      </Text>
                      <Text
                        className="text-deep_orange-400 text-lg"
                        size="txtMetropolisSemiBold18Deeporange400"
                      >
                        $39.00
                      </Text>
                    </div>
                  </div>
                </div>
                <Text
                  className="mt-[17px] text-deep_purple-A200 text-xl"
                  size="txtInterMedium20"
                >
                  See More
                </Text>
              </div>
            </List>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[66%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex md:flex-col flex-row gap-5 items-center justify-start w-[74%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium min-w-[131px] rounded-[10px] text-base text-center"
                    color="deep_orange_400"
                    size="md"
                  >
                    All Books
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[152px] rounded-[10px] text-base text-center"
                    color="white_A700"
                    size="md"
                  >
                    Kindergarten
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[152px] rounded-[10px] text-base text-center"
                    color="white_A700"
                    size="md"
                  >
                    High School
                  </Button>
                  <Button
                    className="cursor-pointer font-medium min-w-[119px] rounded-[10px] text-base text-center"
                    color="white_A700"
                    size="md"
                  >
                    College
                  </Button>
                </div>
                <div className="flex sm:flex-col flex-row font-metropolis gap-[15px] items-center justify-between mt-[30px] w-full">
                  <Input
                    name="search"
                    placeholder="Serach Class, Course, Book Name"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-700_99 text-base text-left w-full"
                    wrapClassName="flex sm:flex-1 rounded-[10px] sm:w-full"
                    type="text"
                    suffix={
                      <div className="h-[46px] ml-[35px] w-[46px] bg-deep_purple-A200 p-[11px] rounded-lg flex justify-center items-center">
                        <Img
                          className="h-6 my-auto"
                          src="images/img_search.svg"
                          alt="search"
                        />
                      </div>
                    }
                    color="white_A700"
                    size="xs"
                  ></Input>
                  <SelectBox
                    className="sm:flex-1 font-medium leading-[normal] text-base text-left w-[33%] sm:w-full"
                    placeholderClassName="text-gray-700_99"
                    indicator={
                      <Img
                        className="h-6 mr-[0] w-6"
                        src="images/img_arrowdown_deep_purple_a200.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="sortby"
                    options={sortbyOptionsList}
                    isSearchable={false}
                    placeholder="Sort by: Latest"
                    shape="round"
                    color="white_A700"
                    size="xs"
                  />
                </div>
                <div className="flex flex-col font-metropolis items-center justify-start mt-[30px] w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:gap-5 gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                            <Img
                              className="h-60 md:h-auto object-cover rounded-[10px] w-full"
                              src="images/img_image_240x230.png"
                              alt="image"
                            />
                          </div>
                          <Text
                            className="mt-3.5 text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            The Three Musketeers
                          </Text>
                          <div className="flex flex-row items-start justify-between mt-3 w-full">
                            <Text
                              className="text-deep_orange-400 text-lg"
                              size="txtMetropolisSemiBold18Deeporange400"
                            >
                              $40.00
                            </Text>
                            <Img
                              className="h-4 mt-0.5"
                              src="images/img_mobile.svg"
                              alt="close"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                            <Img
                              className="h-60 md:h-auto object-cover rounded-[10px] w-full"
                              src="images/img_image_1.png"
                              alt="image"
                            />
                          </div>
                          <Text
                            className="mt-3.5 text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            The Three Musketeers
                          </Text>
                          <div className="flex flex-row items-start justify-between mt-3 w-full">
                            <Text
                              className="text-deep_orange-400 text-lg"
                              size="txtMetropolisSemiBold18Deeporange400"
                            >
                              $40.00
                            </Text>
                            <Img
                              className="h-4 mt-0.5"
                              src="images/img_mobile.svg"
                              alt="close"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                            <Img
                              className="h-60 md:h-auto object-cover rounded-[10px] w-full"
                              src="images/img_image_2.png"
                              alt="image"
                            />
                          </div>
                          <Text
                            className="mt-3.5 text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            The Three Musketeers
                          </Text>
                          <div className="flex flex-row items-start justify-between mt-3 w-full">
                            <Text
                              className="text-deep_orange-400 text-lg"
                              size="txtMetropolisSemiBold18Deeporange400"
                            >
                              $40.00
                            </Text>
                            <Img
                              className="h-4 mt-0.5"
                              src="images/img_mobile.svg"
                              alt="close"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                            <Img
                              className="h-60 md:h-auto object-cover rounded-[10px] w-full"
                              src="images/img_image_3.png"
                              alt="image"
                            />
                          </div>
                          <Text
                            className="mt-3.5 text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            The Three Musketeers
                          </Text>
                          <div className="flex flex-row items-start justify-between mt-3 w-full">
                            <Text
                              className="text-deep_orange-400 text-lg"
                              size="txtMetropolisSemiBold18Deeporange400"
                            >
                              $40.00
                            </Text>
                            <Img
                              className="h-4 mt-0.5"
                              src="images/img_mobile.svg"
                              alt="close"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                            <Img
                              className="h-60 md:h-auto object-cover rounded-[10px] w-full"
                              src="images/img_image_4.png"
                              alt="image"
                            />
                          </div>
                          <Text
                            className="mt-3.5 text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            The Three Musketeers
                          </Text>
                          <div className="flex flex-row items-start justify-between mt-3 w-full">
                            <Text
                              className="text-deep_orange-400 text-lg"
                              size="txtMetropolisSemiBold18Deeporange400"
                            >
                              $40.00
                            </Text>
                            <Img
                              className="h-4 mt-0.5"
                              src="images/img_mobile.svg"
                              alt="close"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                            <Img
                              className="h-60 md:h-auto object-cover rounded-[10px] w-full"
                              src="images/img_image_5.png"
                              alt="image"
                            />
                          </div>
                          <Text
                            className="mt-3.5 text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            The Three Musketeers
                          </Text>
                          <div className="flex flex-row items-start justify-between mt-3 w-full">
                            <Text
                              className="text-deep_orange-400 text-lg"
                              size="txtMetropolisSemiBold18Deeporange400"
                            >
                              $40.00
                            </Text>
                            <Img
                              className="h-4 mt-0.5"
                              src="images/img_mobile.svg"
                              alt="close"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                            <Img
                              className="h-60 md:h-auto object-cover rounded-[10px] w-full"
                              src="images/img_image_1.png"
                              alt="image"
                            />
                          </div>
                          <Text
                            className="mt-3.5 text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            The Three Musketeers
                          </Text>
                          <div className="flex flex-row items-start justify-between mt-3 w-full">
                            <Text
                              className="text-deep_orange-400 text-lg"
                              size="txtMetropolisSemiBold18Deeporange400"
                            >
                              $40.00
                            </Text>
                            <Img
                              className="h-4 mt-0.5"
                              src="images/img_mobile.svg"
                              alt="close"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                            <Img
                              className="h-60 md:h-auto object-cover rounded-[10px] w-full"
                              src="images/img_image_240x230.png"
                              alt="image"
                            />
                          </div>
                          <Text
                            className="mt-3.5 text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            The Three Musketeers
                          </Text>
                          <div className="flex flex-row items-start justify-between mt-3 w-full">
                            <Text
                              className="text-deep_orange-400 text-lg"
                              size="txtMetropolisSemiBold18Deeporange400"
                            >
                              $40.00
                            </Text>
                            <Img
                              className="h-4 mt-0.5"
                              src="images/img_mobile.svg"
                              alt="close"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="bg-white-A700 flex flex-col items-center justify-start p-5 rounded-[10px] w-full">
                            <Img
                              className="h-60 md:h-auto object-cover rounded-[10px] w-full"
                              src="images/img_image_4.png"
                              alt="image"
                            />
                          </div>
                          <Text
                            className="mt-3.5 text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            The Three Musketeers
                          </Text>
                          <div className="flex flex-row items-start justify-between mt-3 w-full">
                            <Text
                              className="text-deep_orange-400 text-lg"
                              size="txtMetropolisSemiBold18Deeporange400"
                            >
                              $40.00
                            </Text>
                            <Img
                              className="h-4 mt-0.5"
                              src="images/img_mobile.svg"
                              alt="close"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-metropolis items-start justify-center md:ml-[0] ml-[278px] mt-[52px] w-[34%] md:w-full">
                  <Button
                    className="flex h-11 items-center justify-center w-11"
                    shape="round"
                    color="deep_purple_50_01"
                  >
                    <Img
                      className="h-6"
                      src="images/img_arrowleft.svg"
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
                    className="!text-blue_gray-800 cursor-pointer font-medium h-11 leading-[normal] ml-[15px] rounded-lg text-center text-lg w-11"
                    color="white_A700"
                  >
                    5
                  </Button>
                  <Text
                    className="ml-[15px] mt-[13px] text-base text-gray-900"
                    size="txtMetropolisMedium16Gray900"
                  >
                    of 80
                  </Text>
                  <Button
                    className="flex h-11 items-center justify-center ml-5 rotate-[180deg] w-11"
                    shape="round"
                  >
                    <Img
                      className="h-6"
                      src="images/img_arrowright.svg"
                      alt="arrowright_One"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 font-metropolis md:h-[394px] h-[420px] sm:h-[439px] mt-[100px] p-[50px] md:px-10 sm:px-5 relative rounded-[20px] w-full">
            <div className="flex flex-col h-full items-center justify-start m-auto w-[45%]">
              <Text
                className="leading-[55.00px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
                size="txtMetropolisBold45"
              >
                <>
                  Subscribe For Get Update
                  <br />
                  Every New Courses
                </>
              </Text>
              <Text
                className="mt-[27px] text-base text-center text-white-A700_b2"
                size="txtMetropolisRegular16"
              >
                20k+ students daily learn with Eduvi. Subscribe for new courses.
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[46px] w-[89%] md:w-full">
                <Input
                  name="button"
                  placeholder="enter your email"
                  className="font-medium font-metropolis p-0 placeholder:text-white-A700 text-base text-left w-full"
                  wrapClassName="w-[73%] sm:w-full"
                  type="email"
                  shape="round"
                ></Input>
                <Button
                  className="cursor-pointer font-inter font-medium leading-[normal] min-w-[142px] rounded-br-[10px] rounded-tr-[10px] text-base text-center"
                  size="md"
                >
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
                  className="flex h-9 items-center justify-center w-9"
                  shape="circle"
                  color="deep_orange_400"
                  size="xs"
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

export default VidhalayaPage;
