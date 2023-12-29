import React from "react";
import "../assets/style/Common.css";
function activateMenu(){
    
}
function Navbar() {
    function menuAction(btn) {
        //const burger  = document.getElementById('burger');
        const menu = document.getElementById('dropdownNavbar');
          menu.classList.toggle('active');
    }
    function itemDrop(params) {
      const itemmenu = document.getElementsByClassName('dropdown-content');
      itemmenu[0].classList.toggle('activeItem');
      const dropItem = document.getElementsByClassName('dropdown-content-item');
      for(let i=0; i<dropItem.length; i++) {
        dropItem[i].addEventListener('click', ()=>{
          itemmenu[0].classList.toggle('activeItem');
        })
      }
      
    }
  return (
    <>
      <navbar className="">
        <div className="flex flex-col md:flex-row md:justify-evenly items-center gap-2 p-3 py-2 bg-green-500">
          <div className="hidden lg:block">
            <a
              className="inline-flex text-green-500 cursor-pointer items-center gap-1 rounded border border-white bg-white px-4 py-2 font-bold hover:text-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              <span class="material-symbols-outlined">phone_in_talk</span>
              (202) 235-2167
            </a>
          </div>
          <div className="hidden lg:block">
            <a
              className="inline-flex text-green-500 cursor-pointer items-center gap-1 rounded border border-white bg-white px-4 py-2 font-bold hover:text-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href="/appointment"
            >
              Schedule An Appointment
            </a>
          </div>
          <div>
            <a
              className="inline-flex text-green-500 cursor-pointer items-center gap-1 rounded border border-white bg-white px-4 py-2 font-bold hover:text-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              Order Supplements
            </a>
          </div>
          <div>
            <a
              className="inline-flex text-green-500 cursor-pointer items-center gap-1 rounded border border-white bg-white px-4 py-2 font-bold hover:text-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              Patient Portel
            </a>
          </div>
          <div className="grid grid-flow-col gap-4">
            <a
              className="inline-flex text-white cursor-pointer items-center gap-1 rounded border border-gray-900 bg-gray-900 px-3 py-2 font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              <i className="bi bi-twitter"></i>
            </a>
            <a
              className="inline-flex text-white cursor-pointer items-center gap-1 rounded border border-gray-900 bg-gray-900 px-3 py-2 font-semibold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              <i class="bi bi-facebook"></i>
            </a>
            <a
              className="inline-flex text-white cursor-pointer items-center gap-1 rounded border border-gray-900 bg-gray-900 px-3 py-2 font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              <i class="bi bi-pinterest"></i>
            </a>
            <a
              className="inline-flex text-white cursor-pointer items-center gap-1 rounded border border-gray-900 bg-gray-900 px-3 py-2 font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              className="inline-flex text-white cursor-pointer items-center gap-1 rounded border border-gray-900 bg-gray-900 px-3 py-2 font-bold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
              href=""
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="border-b-2 border-b-green-500 p-2 md:p-4 lg:p-8 sticky top-0 z-50 w-full bg-white">
          <div className="flex flex-row justify-between items-center">
            <div>
              <p className="p-2 text-2xl">Iconhere</p>
            </div>
            <div className="block lg:hidden">
              <label className="burger" for="burger">
                <input onClick={menuAction} type="checkbox" id="burger" />
                <span></span>
                <span></span>
                <span></span>
              </label>
            </div>
            <div id="dropdownNavbar"  className="absolute bg-gray-300 h-0 left-0 top-full w-full overflow-hidden lg:overflow-visible lg:w-auto lg:bg-transparent lg:relative lg:h-auto">
              <ul className="menuSmall w-full flex flex-col lg:bg-transparent  lg:flex-row">
                <li onClick={itemDrop} className="paste-button p-3 mx-2 py-1 ease-in-out text-2xl border-b-2 border-b-white hover:border-b-green-700 hover:text-green-700">
                  <button className="button" href="">Services &nbsp; ▼</button>
                  <div class="dropdown-content text-lg bg-gray-400 text-gray-950">
                    <div className="p-2">
                    <a className="dropdown-content-item py-1" href="#">
                      Item1 
                    </a>
                    <a className="dropdown-content-item py-1" href="#">
                      item2 
                    </a>
                    <a className="dropdown-content-item py-1" href="#">
                     item3
                    </a>
                    </div>
                  </div>
                </li>
                <li className="p-3 mx-2 py-1 ease-in-out text-2xl border-b-2 border-b-white hover:border-b-green-700 hover:text-green-700">
                  <a href="/otherPage">Holistic Approches</a>
                </li>
                <li className="p-3 mx-2 py-1 ease-in-out text-2xl border-b-2 border-b-white hover:border-b-green-700 hover:text-green-700">
                  <a href="/story">My Story</a>
                </li>
                <li className="p-3 mx-2 py-1 ease-in-out text-2xl border-b-2 border-b-white hover:border-b-green-700 hover:text-green-700">
                  <a href="/blogs">Blogs</a>
                </li>
                <li className="p-3 mx-2 py-1 ease-in-out text-2xl border-b-2 border-b-white hover:border-b-green-700 hover:text-green-700">
                  <a href="/faq">FAQ</a>
                </li>
                <li className="p-3 mx-2 py-1 ease-in-out text-2xl border-b-2 border-b-white hover:border-b-green-700 hover:text-green-700">
                  <a href="/contact">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-1 justify-evenly md:hidden py-4">
              <a
                className="inline-flex text-green-500 cursor-pointer items-center gap-1 rounded border border-green-500 bg-white px-4 py-2 font-bold hover:text-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
                href=""
              >
                <span class="material-symbols-outlined">phone_in_talk</span>
                (202) 235-2167
              </a>
              <a
                className="inline-flex text-green-500 cursor-pointer items-center gap-1 rounded border border-green-500 bg-white px-4 py-2 font-bold hover:text-green-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 focus-visible:ring-offset-2 active:opacity-100"
                href=""
              >
                Schedule An Appointment
              </a>
          </div>
        </div>
      </navbar>
    </>
  );
}

export default Navbar;
