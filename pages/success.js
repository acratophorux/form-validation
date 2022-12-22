/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import { motion as m } from "framer-motion";
export default function Success() {
  const router = useRouter();
  return (
    <>
      <div className="h-screen w-full bg-red-100">
        <div className="h-screen w-full min-w-fit-700 flex justify-center items-center bg-slate-100">
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-fit w-5/6 rounded-2xl overflow-hidden bg-white sm:w-1/2 shadow-2xl shadow-gray-300 backdrop-blur-3xl"
          >
            <div className="flex-1 p-6">
              <h1 className="text-3xl font-latoBold text-gray-700 pb-4">
                Thanks for the subscribing, {router.query.name?.split(" ")[0]}{" "}
                ✨.
              </h1>
              <p className="text-gray-500 font-latoRegular">
                We have sent you an email at {router.query.email}. Check out the
                onboarding goodies we just sent you.
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </>
  );
}

// export async function getStaticProps(context) {
//   const router = useRouter();
//   console.log(router.query);
//   return {
//     props: { router },
//   };
// }
