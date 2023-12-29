import React from "react";

function Contact() {
  return (
    <div>
      <div className="grid grid-col-1 lg:grid-cols-2 p-5 lg:p-10">
        <div className="lg:p-10 relative">
          <p className="text-6xl font-semibold text-gray-800 relative py-4">
            Get In Touch
            <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-b-gray-800"></span>
          </p>
          <div className="pt-4">
          <p className="text-xl py-2">To Reach Dr. Karen Threlkel Or To Schedule An Appointment </p>

          <p className="text-2xl"><i class="bi bi-phone-fill text-green-700"></i>(202) 235-2167</p>
          <p className="text-xl py-2">*Supplement Pick-Up Hours & Location:</p>

          <p className="text-xl py-2">Monday – Friday: 10am – 5:30pm </p>

          <p className="text-xl py-2">Restorative Health: </p>

          <p className="text-xl py-2">
            4801 Wisconsin Ave. NW, Washington, DC 20016{" "}
          </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-4/5">
          <img src="https://karenthrelkelnd.com/wp-content/uploads/2019/06/restorative-health-4801-wisconsin-ave.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
