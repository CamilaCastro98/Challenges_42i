"use client";
import React, { useState } from "react";
import { Formik } from "formik";
import findNonConstructibleChange from "@/challenges/findChange";

const Challenge2 = () => {
  const [result, setResult] = useState("");
  const handleFormSubmit = (values) => {
    const coinsArray = values.coins.split(",").map(Number);
    const solution = findNonConstructibleChange(coinsArray);
    setResult(solution);
  };
  return (
    <div>
      <div>
        <h1>Find Non Constructible Change</h1>
        <p>Instructions</p>
        <Formik
          initialValues={{ coins: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.coins) {
              errors.coins = "Required";
            } else if (!/^\d+(,\d+)*$/.test(values.coins)) {
              errors.coins =
                "Input should only contain numbers separated by commas";
            }
            return errors;
          }}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="coins"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.coins}
              />
              {errors.coins && touched.coins && errors.coins}
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
      <div>{result}</div>
    </div>
  );
};

export default Challenge2;
