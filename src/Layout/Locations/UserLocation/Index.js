import React, { useState } from "react";
import Style from "./Style";
import SideBarContainer from "../../../Components/Sidebar/Sidebar";
import CustomButton from "../../../Components/CustomButton/Index";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form } from "antd";
import { SAVE_CONTACT } from "../../../Services/config";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  API_URL,
  GET_SPACE_BY_ID,
  GET_STATE_BY_ID,
  GET_CITY_BY_ID,
  GET_COUNTRY,
  UPDATE_SPACE,
  CREATE_SPACE,
} from "../../../Services/config";
import FormControl from "../../../Components/FormControl";
const initialValues = {
  id: 4,
  name: "",
  coordinate: "72.718292,33.912812929",
  channel: "IOS",
  countryId: 161,
  cityId: 1,
  stateId: 303,
  address: "",
};
const validationSchema = Yup.object({
  locationName: Yup.string()
    .required("Name is required!")
    .min(5, "Minimun six character is required"),
  country: Yup.string()
    .required("country is required!")
    .matches(/^(\S+$)/g, "email cannot contain blankspaces"),
});

const Index = () => {
  const { locationsId } = useParams();
  const regex = /^\d*(\.\d+)?$/;
  const navigate = useNavigate();
  // const [queryStatus, setQueryStatus] = useState({ state: false, city: false });

  // console.log(locationsId, "this is from params");
  // user query for user detail fetching
  const {
    data: spaceData,
    isSuccess,
    isLoading,
    isFetching,
    error,
    isError,
  } = useQuery(
    "get-space-By-Id",
    () => {
      return axios.get(
        API_URL + GET_SPACE_BY_ID,
        { params: { spaceId: locationsId } },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    },
    {
      enabled: regex.test(locationsId),
      refetchInterval: false,
      refetchOnWindowFocus: "false",
      keepPreviousData: "false",
      onSuccess: (data) => {
        // console.log(data, "from usequery of space by id");
        // setQueryStatus({ ...queryStatus, state: true });
      },
    }
  );

  const {
    data: countryData,
    isSuccess: countryIsSuccess,
    isLoading: countryIsLoading,
    isFetching: countryIsFetching,
    error: countryError,
    isError: countryIsError,
  } = useQuery(
    "get-coutnry-data",
    () => {
      return axios.get(API_URL + GET_COUNTRY, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    },
    {
      // enabled: regex.test(contactId),
      refetchInterval: false,
      refetchOnWindowFocus: "false",
      keepPreviousData: "false",
      // select: (data) => {
      //   return data.map((country) => ({
      //     key: country.id,
      //     value: country.name,
      //   }));
      // },
      onSuccess: (data) => {
        // console.log(data, "from usequery of country data geting");
        // setQueryStatus({ ...queryStatus, state: true });
      },
    }
  );

  const {
    data: stateData,
    isSuccess: stateIsSuccess,
    isLoading: stateIsLoading,
    isFetching: stateIsFetching,
    error: stateError,
    isError: stateIsError,
  } = useQuery(
    "get-state-By-Id",
    () => {
      return axios.get(
        API_URL + GET_STATE_BY_ID,
        { params: { countryId: 233 } },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    },
    {
      refetchInterval: false,
      refetchOnWindowFocus: "false",
      keepPreviousData: "false",
      onSuccess: (data) => {
        // console.log(
        //   data,
        //   "from usequery of state data and should be run just after the first query "
        // );
        // setQueryStatus({ ...queryStatus, city: true });
      },
      enabled: true,
    }
  );

  const {
    data: cityData,
    isSuccess: cityIsSuccess,
    isLoading: cityIsLoading,
    isFetching: cityIsFetching,
    error: cityError,
    isError: cityIsError,
  } = useQuery(
    "get-User-By-Id",
    () => {
      return axios.get(
        API_URL + GET_CITY_BY_ID,
        { params: { stateId: 1399 } },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    },
    {
      refetchInterval: false,
      refetchOnWindowFocus: "false",
      keepPreviousData: "false",
      onSuccess: (data) => {
        // console.log(
        //   data,
        //   "from usequery of city and should be run after the state query"
        // );
      },
      // enabled: true,
    }
  );

  const mutation = useMutation(
    (countryDetail) => {
      return locationsId !== "createNew"
        ? axios.put(API_URL + UPDATE_SPACE, countryDetail, {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          })
        : axios.post(
            API_URL + CREATE_SPACE,
            {
              name: countryDetail.name,
              address: countryDetail.address,
              coordinate: countryDetail.coordinate,
              channel: countryDetail.channel,
              countryId: countryDetail.countryId,
              stateId: countryDetail.stateId,
              cityId: countryDetail.cityId,
            },
            {
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
    },
    {
      onSuccess: (data) => {
        // console.log(data, "this is data onSucces of either put or post method");
        navigate("/locations");
      },

      onError: (err, variables, snapshotValue) => {
        console.log(err, "error in submitting values");
      },
    }
  );
  const onSubmit = (data) => {
    // console.log(data, "this  is data from submit");
    mutation.mutate(data);
  };
  return (
    <SideBarContainer>
      <Style>
        <div className="main-container">
          <div className="leftSide">
            <Formik
              initialValues={
                // spaceData?.data?.result
                //   ? spaceData?.data?.result
                //   :
                { ...initialValues, id: spaceData?.data?.result?.id }
              }
              // validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form
                    style={{
                      height: "100%",
                    }}
                    name="basic"
                    onFinish={formik.handleSubmit}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    validateMessages={validationSchema}
                  >
                    <div
                      className="login-input-fields "
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <label htmlFor="name"> Name</label>
                      <FormControl
                        control="input"
                        type="text"
                        name="name"
                        placeholder=" Name"
                        className={
                          formik.errors.name && formik.touched.name
                            ? "is-invalid"
                            : "customInput"
                        }
                      />
                      <label htmlFor="phoneNumber">Country</label>
                      <FormControl
                        control="select"
                        type="text"
                        name="countryId"
                        options={countryData?.data?.result}
                        placeholder="Please Enter country Name"
                        className={
                          formik.errors.name && formik.touched.name
                            ? "is-invalid"
                            : "customPasswordInput"
                        }
                      />
                      <label htmlFor="email">State</label>
                      <FormControl
                        control="select"
                        type="text"
                        name="stateId"
                        options={stateData?.data?.result}
                        placeholder="state"
                        className={
                          formik.errors.name && formik.touched.name
                            ? "is-invalid"
                            : "customInput"
                        }
                      />
                      {/* {contactId !== "createContact" && ( */}
                      <div>
                        <label htmlFor="city">City</label>
                        <FormControl
                          control="select"
                          type="text"
                          name="cityId"
                          options={cityData?.data?.result}
                          placeholder="City"
                          className={
                            formik.errors.name && formik.touched.name
                              ? "is-invalid"
                              : "customInput"
                          }
                        />
                      </div>

                      <div>
                        <label htmlFor="address">Address</label>
                        <FormControl
                          control="input"
                          type="text"
                          name="address"
                          placeholder="Address"
                          className={
                            formik.errors.name && formik.touched.name
                              ? "is-invalid"
                              : "customInput"
                          }
                        />
                      </div>
                      <CustomButton
                        bgcolor="#156985"
                        color="white"
                        padding="11px 8px"
                        width="100%"
                        type="submit"
                        title="SUBMIT"
                        margin="auto"
                      />
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
          <div className="rightSide">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909073!2d-74.25987368715491!3d40.69767006458873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1652178301855!5m2!1sen!2s"
              className="locationMap"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Style>
    </SideBarContainer>
  );
};

export default Index;
