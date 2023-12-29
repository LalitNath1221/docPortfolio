import React from "react";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
function Story() {
  return (
    <div>
      <div className="w-full">
        <div className="relative overflow-hidden">
          <img
            className="absolute top-0 bg-center w-full -z-10"
            src={img4}
            alt=""
          />
          <div className="flex bg-white opacity-60 min-h-[15rem] justify-center items-center">
            <p className="p-2 text-6xl text-black font-semibold font-serif">
              About Karen R. Threlkel, ND
            </p>
          </div>
        </div>
        <div>
          <div className="lg:h-[18rem] flex justify-center items-center">
            <div className="shadow-2xl h-[22rem] w-[22rem] p-2 border rounded-full lg:rounded-[5rem] overflow-hidden bg-white">
              <div className="border rounded-full lg:rounded-[5rem] overflow-hidden w-full h-full">
                <img
                  className="relative z-10 aspect-square"
                  src="https://karenthrelkelnd.com/wp-content/uploads/2019/06/kt-by-cabinet.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t-2 border-t-green-700  py-10">
          <p className="text-6xl py-4 text-center text-gray-800 font-serif">
            About
          </p>
          <p className="text-lg py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus asperiores similique quisquam vitae fugit, officia
            vero, quaerat totam ut libero odio, laborum nobis non nisi! Itaque
            recusandae, provident explicabo natus temporibus, fugiat asperiores
            nam omnis, quos aut consectetur consequatur assumenda fugit atque
            architecto voluptatem exercitationem culpa ratione molestias
            adipisci debitis veritatis accusamus tenetur. Eius dolorem fuga
            laboriosam repellat ex molestiae. Saepe doloremque ad distinctio
            non. Quisquam minus voluptate recusandae, corrupti id aut deserunt
            ab voluptas ea eum fugit explicabo accusantium tempora veniam
            consequatur perspiciatis impedit eligendi dolores, iusto ipsa
            exercitationem, fugiat facere! Repudiandae, quas illum! Tempore
            delectus sequi cumque repudiandae?
          </p>
        </div>
        <div className="p-4 py-10">
          <div>
            <p className="text-4xl font-serif py-4">My Story</p>
            <div className="w-full h-[4px] bg-green-800 relative flex justify-center items-center">
              <span className="text-4xl font-serif bg-white text-gray-800">
                <i class="bi bi-quote"></i>
              </span>
            </div>
          </div>
          <div className="p-6">
            <p className="text-lg py-4 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto illum perspiciatis, ipsam unde ex assumenda cupiditate
              dolorem labore beatae aspernatur ratione? Consequuntur doloremque
              dignissimos dolorem praesentium, repudiandae provident! Sunt
              inventore voluptatibus expedita alias quam. Dolores iure cumque
              fuga ab enim maiores voluptate ipsum reiciendis, corporis, sunt
              magni quae ea sed nostrum dolore dicta tenetur provident deserunt
              repellat. Eum omnis tempore quos voluptate eius eos culpa repellat
              atque quibusdam neque? Cupiditate aliquam, molestias, deserunt
              neque numquam iste expedita quidem, quaerat impedit quis unde
              accusamus voluptatum corrupti! Sit quae repellat doloribus cumque
              consequatur, nam atque dignissimos totam, commodi ex, architecto
              impedit labore.
            </p>
            <p className="text-lg py-4 text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto illum perspiciatis, ipsam unde ex assumenda cupiditate
              dolorem labore beatae aspernatur ratione? Consequuntur doloremque
              dignissimos dolorem praesentium, repudiandae provident! Sunt
              inventore voluptatibus expedita alias quam. Dolores iure cumque
              fuga ab enim maiores voluptate ipsum reiciendis, corporis, sunt
              magni quae ea sed nostrum dolore dicta tenetur provident deserunt
              repellat. Eum omnis tempore quos voluptate eius eos culpa repellat
              atque quibusdam neque? Cupiditate aliquam, molestias, deserunt
              neque numquam iste expedita quidem, quaerat impedit quis unde
              accusamus voluptatum corrupti! Sit quae repellat doloribus cumque
              consequatur, nam atque dignissimos totam, commodi ex, architecto
              impedit labore.
            </p>
          </div>
          <div>
            <div className="w-full h-[4px] bg-green-800 relative flex justify-center items-center">
              <span className="text-4xl font-serif bg-white text-gray-800 rotate-180">
                <i class="bi bi-quote"></i>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div
            className=" relative overflow-hidden bg-fixed bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${img5})` }}
          >
            <div className="bg-black bg-opacity-50">
              <div className="flex min-h-[15rem] justify-center items-center">
                <p className="p-2 text-6xl text-white font-semibold font-serif">
                  About Karen R. Threlkel, ND
                </p>
              </div>
              <div>
                <div className="flex flex-wrap justify-evenly gap-y-5 p-10">
                  <div className="w-full md:w-1/3 bg-white bg-opacity-50 border rounded-3xl p-10">
                    <p className="text-center font-semibold font-serif text-4xl">
                      <i class="bi bi-box-arrow-up-right font-bold"></i>
                    </p>
                    <p className="text-center font-semibold font-serif text-3xl">Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="w-full md:w-1/3 bg-white bg-opacity-50 border rounded-3xl p-10">
                    <p className="text-center font-semibold font-serif text-4xl">
                      <i class="bi bi-box-arrow-up-right font-bold"></i>
                    </p>
                    <p className="text-center font-semibold font-serif text-3xl">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
