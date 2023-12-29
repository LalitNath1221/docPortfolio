import React from "react";

function ContactForm() {
  return (
    <div className="ContactUsForm w-full p-2 lg:p-8">
      <form class="w-full">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
              for="grid-last-name"
            >
              Name <span className="text-red-800">*</span>
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe" required
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
              for="grid-first-name"
            >
              Phone No. <span className="text-red-800">*</span>
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="phone"
              placeholder="123456789"
              required
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
              for="grid-last-name"
            >
              Email. <span className="text-red-800">*</span>
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="abc123@abc.com" required
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-md font-bold mb-2"
              for="grid-last-name"
            >
              Message Here <span className="text-red-800">*</span>
            </label>
            <textarea rows="4" cols="50"
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="grid-last-name"
              placeholder="write your message here" required
            ></textarea>
          </div>
        </div>
        <div class="w-ful max-w-lg pt-8">
          <button class="bg-green-700 w-full hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
