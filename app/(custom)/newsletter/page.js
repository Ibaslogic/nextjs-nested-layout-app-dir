export const NewsletterPage = () => {
  return (
    <div className="text-center max-w-[80%] mx-auto">
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-20 !leading-[1.4]">
        Get our Weekly Developer&apos;s Tips via Email
      </h3>
      <div className="">
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="block h-14 mt-10 mx-auto w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-gray-500"
        />
        <button
          type="button"
          className="block mt-6 h-14 mx-auto w-full px-6 py-3 leading-none font-semibold rounded-lg text-white bg-gray-900 focus:outline-none"
        >
          Try It
        </button>
      </div>
    </div>
  );
};

export default NewsletterPage;
