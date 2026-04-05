export default function Contact() {
  return (
    <div id="contact" className="flex flex-col  justify-center p-20 gap-10 min-h-lvh raleway-font md:gap-20 md:flex-row">
      <div className="self-center w-sm lg:w-md">
        <h1 className="pb-3 uppercase font-bold text-4xl ">Contact Me</h1>
        <p className="mr-4">
          Let's Conneect! I'm open to new opportunities, collaborations, and
          interesting projects.
        </p>
      </div>
      {/* from tailwind */}
      <div
        className="p-5 bg-white/40 
      md:p-10"
      >
        <div
          className="pb-12 
        border-gray-900/10"
        >
          <div className="grid grid-cols-1  mt-10 gap-y-8 md:grid-cols-6 md:gap-x-6 ">
            <div className="col-span-3 md:col-span-4 ">
              <label
                htmlFor="name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  placeholder="Your Name"
                  id="name"
                  type="text"
                  name="name"
                  autocomplete="given-name"
                  className="block w-full px-3 py-1.5  bg-white rounded-md text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="col-span-4">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  placeholder="Email Address"
                  id="email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="col-span-6">
              <label
                for="message"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  placeholder="Type Message here"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  name="message"
                  id="message"
                  rows={5}
                ></textarea>
              </div>
            </div>
            <div className="col-span-2">
              <button
                className="block px-1.5 py-2 text-center whitespace-nowrap  rounded-md bg-blue-500
                hover:bg-blue-700
                hover:text-white
                hover:outline focus:outline-2 focus:-outline-offset-2 focus:outline-amber-50 sm:text-sm/6"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
