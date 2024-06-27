import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className=" w-full bg-gray-100 shadow-md flex justify-between px-4 py-4">
        <div className=" flex text-black font-bold text-xl">
          Ai Content Generater
        </div>
        <div className="">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Create Your own AI Content
            <strong className="font-extrabold text-red-700 sm:block">
              {" "}
              Using Gemini AI Power{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            You can generate any type of content using Gemini AI Power.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/dashboard"
            >
              Start Generate
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
