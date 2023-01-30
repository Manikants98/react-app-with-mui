import React from "react";

const Users = () => {
  const name = localStorage.getItem("name");
  // const email = localStorage.getItem("email");
  return (
    <>
      <div className="flex justify-center items-center flex-col border-l-4 border-primary">
        <p className="text-center text-4xl font-semibold my-4">Our Users</p>
        <div className="grid grid-cols-5 justify-center items-center gap-5 m-4">
          {[1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15].map(() => {
            return (
              <div class="card max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                <div class="rounded-t-lg h-32 overflow-hidden">
                  <img
                    class="object-cover object-top w-full"
                    src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
                    alt="Mountain"
                  />
                </div>
                <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                  <img
                    class="object-cover object-center h-32"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                    alt="Woman looking front"
                  />
                </div>
                <div class="text-center mt-2">
                  <h2 class="font-semibold">{name}</h2>
                  <p class="text-gray-500">Freelance Web Designer</p>
                </div>

                <div class="p-4 border-t mx-8 mt-2 flex justify-center items-center">
                  <button class= "btn btn-sm btn-primary mx-auto">
                    Follow
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
