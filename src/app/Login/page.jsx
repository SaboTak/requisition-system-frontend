import Image from "next/image";
import UniversidadLogo from "../source/escudoU.svg";

export default function Login(params) {
  return (
    <div className="fontPoppins bg-mi-gama-200">
      <section className="flex flex-row h-screen items-center">
        {/* Login left banner  */}
        <div className="h-screen w-1/2">
          <Image
            src={UniversidadLogo}
            className="p-20 bg-login w-full h-full "
          />
        </div>

        {/* Login right banner */}
        <div className=" flex mx-auto max-w-md w-full w-1/2 px-12">
          <div className="w-full h-100">
            <h1 className="text-xl text-center font-bold">Universidad Libre</h1>
            <h1 className="text-2xl text-center font-bold leading-tight m-8">
              Log in into your account
            </h1>

            <form className="mt-6" action="#" method="POST">
              <div className="my-5">
                <label className="block text-gray-700" htmlFor="">
                  Email address
                </label>
                <input
                  className="border-b-2 border-white w-full px-3 py-2 focus:outline-none focus:border-b-2 focus:border-mi-gama-50 rounded-lg shadow-lg mt-2"
                  type="email"
                  placeholder="Enter Email Address"
                  autoComplete="off"
                  autoFocus
                  required
                />
              </div>

              <div className="my-5">
                <label className="block text-gray-700" htmlFor="">
                  Password
                </label>
                <input
                  className="border-b-2 border-white w-full px-3 py-2 focus:outline-none focus:border-b-2 focus:border-mi-gama-50 rounded-lg shadow-lg my-2"
                  type="password"
                  placeholder="Enter Password"
                  autoComplete="off"
                  autoFocus
                  required
                  id=""
                />
              </div>

              <div className="text-right">
                <a className="hover:text-mi-gama-50" href="#">
                  Forgot password
                </a>
              </div>

              <button
                type="submit"
                className="text-white w-full text-center py-2 bg-mi-gama-50 rounded-xl px-5 my-3 "
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
