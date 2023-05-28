const Home = () => {
  return (
    <section className="mx-auto max-w-screen-2xl px-4 md:px-8 py-4">
      <div className="mb-8 flex flex-wrap justify-between">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pt-48 lg:pb-24">
          <h1 className="text-black-800 mb-4 text-4xl font-bold sm:text-5xl md:mb-8 md:text-6xl">
            WELCOME
          </h1>
          <h2 className="text-black-800 mb-8 text-2xl font-bold sm:text-2xl md:mb-12 md:text-2xl">
            DETAIL
          </h2>
          <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <br />
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <br />
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <br />
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <br />
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <br />
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <br />
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <br />
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            <br />
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative top-12 left-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:top-16 md:left-16 lg:ml-0">
            <img
              src="/images/5AAAEDC6-9A14-4A14-97EE-11BF81BE2FA4_1_105_c.jpeg"
              alt="bike"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <img
              src="/images/528C3401-49E1-4E22-99DF-4A9E70E726A8_1_105_c.jpeg"
              alt="myImage"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
