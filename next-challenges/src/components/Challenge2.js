//Componente que permite al usuario ingresar inputs y encontrar la solución
//Para el challenge "Find Non Constructible Change". Consta de un form y de un div para visualizar el resultado.

"use client";
import React, { useState } from "react";
import { Formik } from "formik";
import findNonConstructibleChange from "@/challenges/findChange";

const Challenge2 = () => {
  const [result, setResult] = useState("");

  //Función que se ejecuta al submitear los valores del form.
  //Convertir los valores a un array para que puedan ser interpetados correctamente por la función findNonConstructibleChange.
  //Actualizar valor del resultado.
  const handleFormSubmit = (values) => {
    const coinsArray = values.coins.split(",").map(Number);
    const solution = findNonConstructibleChange(coinsArray);
    setResult(solution);
  };
  return (
    <>
      <div className="p-5 pb-8 bg-red-400 rounded-t-sm lg:h-[400px]">
        <div>
          <h1 className="font-semibold md:text-xl">
            Find Non Constructible Change
          </h1>
          <p className="text-sm md:text-base">
            Enter a comma-separated list of coin values. (To input an empty
            array, simply enter 0).
          </p>
          {/* Formulario realizado con librería Formik. */}
          <Formik
            initialValues={{ coins: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.coins) {
                errors.coins = "This field is required";
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
                <div className="flex flex-col px-10 mt-5 md:px-20">
                  <label className="font-semibold" htmlFor="coins">
                    Coins:
                  </label>
                  <input
                    id="coins"
                    type="text"
                    name="coins"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.coins}
                    className="h-8 p-1 mt-2 mb-1 border-2 border-black rounded-sm"
                  />
                  <div className="text-sm font-semibold text-red-800">
                    {errors.coins && touched.coins && errors.coins}
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
      <div className="px-5 py-3 font-semibold bg-red-500 rounded-b-sm">
        SOLUTION: {result}
      </div>
    </>
  );
};

export default Challenge2;
