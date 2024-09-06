//Componente que permite al usuario ingresar inputs y encontrar la solución
//Para el challenge "Find Pair With Sum". Consta de un form y de un div para visualizar el resultado.

"use client";
import React, { useState } from "react";
import { Formik } from "formik";
import findPairWithSum from "@/challenges/findPairWithSum";

const Challenge1 = () => {
  const [result, setResult] = useState("");

  //Función que se ejecuta al submitear los valores del form.
  //Convertir los valores a un array y un número para que puedan ser interpetados correctamente por la función findPairWithSum.
  //Actualizar valor del resultado.
  const handleFormSubmit = (values) => {
    const numbersArray = values.numbers.split(",").map(Number);
    const targetSum = parseInt(values.targetSum, 10);
    const solution = findPairWithSum(numbersArray, targetSum).join(",");
    setResult(`[${solution}]`);
  };

  return (
    <>
      <div className="flex flex-col p-5 pb-8 bg-blue-500 rounded-t-sm lg:h-[400px]">
        <div>
          <h1 className="font-semibold md:text-xl">Find Pair With Sum</h1>
          <p className="text-sm md:text-base">
            Enter a comma-separated list of numbers and a target sum. (To input
            an empty array, simply enter 0).
          </p>
          {/* Formulario realizado con librería Formik. */}
          <Formik
            initialValues={{ numbers: "", targetSum: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.numbers) {
                errors.numbers = "This field is required";
              } else if (!/^[+-]?\d+(?:,[+-]?\d+)*$/.test(values.numbers)) { //Se utilizó IA para crear la expresión regex
                errors.numbers =
                  "Input should only contain integers separated by commas";
              }
              if (!values.targetSum) {
                errors.targetSum = "This field is required";
              } else if (Math.floor(values.targetSum) !== values.targetSum) {
                errors.targetSum = "Target must be an integer";
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
                <div className="flex flex-col px-10 mt-5 md:px-20">
                  <label className="font-semibold" htmlFor="numbers">
                    Numbers:
                  </label>
                  <input
                    id="numbers"
                    type="text"
                    name="numbers"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.numbers}
                    className="h-8 p-1 mt-2 mb-1 border-2 border-black rounded-sm"
                  />
                  <div className="text-sm font-semibold text-red-800">
                    {errors.numbers && touched.numbers && errors.numbers}
                  </div>
                </div>
                <div className="flex flex-col px-10 mt-2 md:px-20">
                  <label className="font-semibold" htmlFor="targetSum">
                    Target:
                  </label>
                  <input
                    id="targetSum"
                    type="number"
                    name="targetSum"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.targetSum}
                    className="h-8 p-1 mt-2 mb-1 border-2 border-black rounded-sm"
                  />
                  <div className="text-sm font-semibold text-red-800">
                    {errors.targetSum && touched.targetSum && errors.targetSum}
                  </div>
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    className="px-5 py-1 bg-yellow-400 border-2 border-b-4 border-r-4 border-black rounded-sm hover:bg-yellow-500"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      {/* Div que contiene la solución al problema e imprime el valor de result. */}
      <div className="px-5 py-3 font-semibold bg-blue-600 rounded-b-sm">
        SOLUTION: {result}
      </div>
    </>
  );
};

export default Challenge1;
