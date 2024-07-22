import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gray-50 dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl dark:text-white">
            Welcome to
            <strong className="font-extrabold text-green-600 sm:block">
              {" "}
              YourBank.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Our platform offers a comprehensive suite of features to help you stay on top of your banking needs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
              href="/auth/login"
            >
              Login
            </Link>

            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
              href="/auth/signup"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
