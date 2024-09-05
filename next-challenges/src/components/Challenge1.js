"use client";
import React, { useState } from "react";
import { Formik } from "formik";
import findPairWithSum from "@/challenges/findPairWithSum";

const Challenge1 = () => {
  const [result, setResult] = useState("");
  const handleFormSubmit = (values) => {
    const numbersArray = values.numbers.split(",").map(Number);
    const targetSum = parseInt(values.targetSum, 10);
    const solution = findPairWithSum(numbersArray, targetSum).join(",");
    setResult(`[${solution}]`);
  };
  return (
    <div>
      <div>
        <h1>Find Pair With Sum</h1>
        <p>Instructions</p>
        <Formik
          initialValues={{ numbers: "", targetSum: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.numbers) {
              errors.numbers = "Required";
            } else if (!/^\d+(,\d+)*$/.test(values.numbers)) {
              errors.numbers =
                "Input should only contain numbers separated by commas";
            }
            if (!values.targetSum) {
              errors.targetSum = "Required";
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
                name="numbers"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.numbers}
              />
              {errors.numbers && touched.numbers && errors.numbers}
              <input
                type="number"
                name="targetSum"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.targetSum}
              />
              {errors.targetSum && touched.targetSum && errors.targetSum}
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </div>
      <div>{result}</div>
    </div>
  );
};

export default Challenge1;
