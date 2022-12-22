import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import FormImage from "/public/form.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      country: "United Kingdom",
      tos: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Name must 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      tos: Yup.boolean()
        .required("Please accept terms of service to continue.")
        .oneOf([true], "Please accept terms of service to continue."),
    }),
    onSubmit: (values) => {
      console.log(values);
      router.push({ pathname: "/success", query: values });
    },
  });
  return (
    <div className="absolute w-full">
      <Head>
        <title>Form Validation App</title>
        <meta name="description" content="Exercise for form Validation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* */}

      {/* TODO:: fix responsive height part of the design  */}
      <div className="h-screen w-full bg-red-100">
        <div className="h-screen w-full min-w-fit-700 flex justify-center items-center bg-slate-100">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className=" h-fit w-5/6 rounded-2xl overflow-hidden bg-white sm:w-1/2 shadow-2xl shadow-gray-300 backdrop-blur-3xl"
          >
            <form onSubmit={formik.handleSubmit} className="flex h-full">
              <div className="flex-1 pt-6 pl-6 pb-6">
                <h1 className="text-3xl font-latoBold text-gray-700 pb-4">
                  Let&apos;s get started 👋
                </h1>
                <p className="text-gray-500 font-latoRegular">
                  Join our E-learning platform today and unlock over 500+
                  courses and digital assets ready to download.
                </p>

                {/* Form input fields */}
                <div className="px-4 pt-4">
                  {/* Name input field */}
                  <label
                    htmlFor="name"
                    className={`block mb-2 text-gray-700 font-latoBold ${
                      formik.touched.name && formik.errors.name
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {formik.touched.name && formik.errors.name
                      ? formik.errors.name
                      : "Name"}
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="border-2 border-gray-400 p-2 mb-2 rounded-lg w-full bg-white text-gray-700 font-latoRegular focus:border-gray-700 focus:ring-gray-700 outline-none"
                  />

                  {/* Email input field */}
                  <label
                    htmlFor="email"
                    className={`block mb-2 text-gray-700 font-latoBold ${
                      formik.touched.email && formik.errors.email
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {formik.touched.email && formik.errors.email
                      ? formik.errors.email
                      : "Email"}
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Enter your email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="border-2 border-gray-400 p-2 mb-2 rounded-lg w-full bg-white text-gray-700 font-latoRegular focus:border-gray-700 focus:ring-gray-700 outline-none"
                  />

                  {/* Country dropdown */}
                  <label
                    htmlFor="country"
                    className="block mb-2 text-gray-700 font-latoBold"
                  >
                    Country
                  </label>
                  <select
                    name="country"
                    id="country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    className="mb-4 font-latoRegular border-2 border-gray-400 rounded-lg focus:border-gray-700 focus:ring-gray-700 bg-gray-400 outline-none"
                  >
                    <option>United States of America</option>
                    <option>Saudi Arabia</option>
                    <option>India</option>
                    <option>United Kingdom</option>
                  </select>

                  {/* Terms of service checkbox */}
                  <label
                    htmlFor="tos"
                    className={`block mb-2 text-gray-700 font-latoBold ${
                      formik.touched.tos && formik.errors.tos
                        ? "text-red-500"
                        : ""
                    }`}
                  >
                    {formik.touched.tos && formik.errors.tos
                      ? formik.errors.tos
                      : "Terms of service"}
                  </label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="checkbox"
                      name="tos"
                      id="tos"
                      value={formik.values.tos}
                      onChange={formik.handleChange}
                      className="h-5 w-5 rounded-lg text-gray-700 border-2 focus:border-red-500"
                    />
                    <p className="bg-white text-gray-500">
                      I agree to the Terms and Service that my data will be
                      taken and sold.
                    </p>
                  </div>
                  <button
                    type="submit"
                    className="bg-gray-700 font-latoBold rounded-lg mt-4 p-2 mb-2 w-full"
                  >
                    {" Submit"}
                  </button>
                </div>
              </div>
              <div className="flex-1 relative ml-3">
                <Image
                  src={FormImage}
                  fill
                  alt="form-image"
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              40vw"
                  className="object-cover rounded-r-lg"
                />
              </div>
            </form>
          </m.div>
        </div>
      </div>
    </div>
  );
}
