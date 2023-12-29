import React from "react";
import ContactForm from "./ContactForm";
import img1 from "../assets/images/img1.jpg";

function Home() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden p-5 lg:p-10 font-sans">
        <img src={img1} className="absolute top-0 left-0 w-full -z-10" alt="" />
        <div className="box-border w-full px-10 py-12 bg-opacity-90 bg-green-700">
          <p className="text-2xl py-2 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            quaerat?
          </p>
          <p className="text-4xl font-semibold py-2 text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            quaerat?
          </p>
          <p className="text-xl py-2 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            iusto ducimus aut animi unde. Repellendus fugiat dolore ad
            blanditiis suscipit. ipsum, dolor sit amet consectetur adipisicing
            elit. Debitis, corporis? ipsum dolor sit amet., ipsum dolor sit amet
            consectetur adipisicing elit. Dolorum, quaerat?
          </p>
          <div className="flex justify-center py-4">
            <a
              className="inline-flex text-green-700 cursor-pointer items-center gap-1 rounded-full border border-white bg-white px-4 py-2 font-bold hover:text-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              Schedule An Appointment
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 ">
        <div className="py-4">
          <p className="text-6xl font-semibold text-center">
            Featured Doctor On:
          </p>
        </div>
        <div className="flex flex-row gap-y-4 flex-wrap my-8">
          <div className="w-full md:w-1/2 lg:w-1/4 flex justify-center items-center">
            <img
              className="w-[18rem] h-fit"
              src="https://karenthrelkelnd.com/wp-content/uploads/2020/10/OWN-logo.jpg"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 flex justify-center items-center">
            <img
              className="w-[18rem] h-fit"
              src="https://karenthrelkelnd.com/wp-content/uploads/2020/10/cnn-headline-news-logo-1536x308.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 flex justify-center items-center">
            <img
              className="w-[16rem] h-fit"
              src="https://karenthrelkelnd.com/wp-content/uploads/2020/10/MSNBC_logo.png"
              alt=""
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 flex justify-center items-center">
            <img
              className="w-[16rem] h-fit"
              src="https://karenthrelkelnd.com/wp-content/uploads/2020/10/bravo-logo-2.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center p-2 py-8 bg-pink-100">
          <div className="py-5 w-full md:w-2/3 lg:w-1/2">
            <p className="text-4xl text-center font-medium py-2">Virtual Appointments Available!</p>
            <p className="text-lg text-center">
              Can’t make it to our office? You can have a virtual appointment
              from the comfort and safety of your own home. We can also mail
              your supplements directly to you. Many of our functional labs can
              be done at home as well.
            </p>
          </div>
          <div className="bg-white my-4 shadow-xl w-full md:w-2/3 lg:w-1/2 flex justify-center p-8">
            <ContactForm/>
          </div>
        </div>
      </div>
      <div className="p-4 py-8">
        <div className="grid grid-cols-5 py-4">
          <div className="col-span-3 px-4">
            <div className="text-gray-800">
              <p className="py-4 text-2xl font-medium">Looking For A Holistic And Naturopathic Approach In Washington DC?</p>
              <p className="py-4 text-4xl font-semibold">Meet Dr. Karen R. Threlkel</p>
              <p className="py-4 text-lg ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea similique asperiores necessitatibus. Incidunt nobis voluptas, libero repudiandae sequi quaerat. At placeat quod iure delectus error facere qui eligendi magnam quidem aperiam voluptatibus ratione repellat, consequuntur molestiae iste odio quo nihil assumenda adipisci totam. Soluta id reiciendis dolor odio. Architecto ut voluptas dolore minus quae dolores quia, sint ab possimus hic ea, </p>
              <div className="pt-8">
              <a
              className="inline-flex text-white cursor-pointer items-center gap-1 rounded border border-green bg-green-700 px-4 py-2 font-bold hover:text-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              Know More About Dr. Someone
            </a>
              </div>
            </div>
          </div>
          <div className="col-start-4 col-span-2 flex justify-center items-center">
            <div className="w-full lg:w-1/2">
            <img src="https://karenthrelkelnd.com/wp-content/uploads/2021/08/Karen-1-768x1089.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="px-2 py-4 bg-red-100">
        <div className="py-8">
          <p className="text-4xl text-center font-bold text-green-700">
          Medical Awards & Associations
          </p>
        </div>
        <div className="flex gap-4  flex-wrap flex-row py-8 justify-center">
          <div className="w-full md:w-1/4 lg:w-1/6 flex justify-center items-center">
            <img className="w-4/6" src="https://karenthrelkelnd.com/wp-content/uploads/2023/12/americas-best-dr-2020.png" alt="" />
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 flex justify-center items-center">
            <img className="w-4/6" src="https://karenthrelkelnd.com/wp-content/uploads/2023/04/2023.png" alt="" />
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 flex justify-center items-center">
            <img className="w-4/6" src="https://karenthrelkelnd.com/wp-content/uploads/2023/12/dr-threlkel-top-doctor-2023-e1703257858107.png" alt="" />
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 flex justify-center items-center">
            <img className="w-4/6" src="https://karenthrelkelnd.com/wp-content/uploads/2019/11/top-doctor-badge-150x150.png" alt="" />
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 flex justify-center items-center">
            <img className="w-4/6" src="https://karenthrelkelnd.com/wp-content/uploads/2023/12/americas-best-dr-2020.png" alt="" />
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 flex justify-center items-center">
            <img className="w-5/6" src="https://karenthrelkelnd.com/wp-content/uploads/2019/06/logo.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
