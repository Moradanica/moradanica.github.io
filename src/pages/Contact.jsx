export default function Contact() {
  return (
    <div className="flex flex-col h-screen gap-3 pt-16">
      <div className="flex justify-center gap-30">
        <div className="self-center w-sm">
          <h1 className="uppercase font-bold text-4xl pb-3">Contact Me</h1>
          <p className="mr-4">
            Let's Conneect! I'm open to new opportunities, collaborations, and
            interesting projects.
          </p>
        </div>
        {/* from tailwind */}
        <div className=" bg-white/40 p-10 ">
          <div class=" border-gray-900/10 pb-12 ">
            <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 w-full">
              <div class="sm:col-span-4 ">
                <label
                  for="name"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Name
                </label>
                <div class="mt-2">
                  <input
                    placeholder="Your Name"
                    id="name"
                    type="text"
                    name="name"
                    autocomplete="given-name"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>

              <div class="sm:col-span-4">
                <label
                  for="email"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Email address
                </label>
                <div class="mt-2">
                  <input
                    placeholder="Email Address"
                    id="email"
                    type="email"
                    name="email"
                    autocomplete="email"
                    class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div class="sm:col-span-6">
                <label
                  for="message"
                  class="block text-sm/6 font-medium text-gray-900"
                >
                  Message
                </label>
                <div class="mt-2">
                  <textarea
                    placeholder="Type Message here"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    name="message"
                    id="message"
                    rows={5}
                  ></textarea>
                </div>
              </div>
              <div className="sm:col-span-2 bg-amber-200">
                <button
                  className="px-1.5 py-2 text-center block w-full rounded-md bg-blue-500
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
    </div>
  );
}
