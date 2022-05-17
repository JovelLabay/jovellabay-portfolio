import React from "react";

export default function Communicate(props: { theUser: any; animal: any }) {

  // @ts-ignore
  var theMessage = JSON.parse(localStorage.getItem("messages"));

  if (theMessage == null) {
    return (
      <div className="">
        <h1 className="text-center text-base">
          Selct the sample buttons below to get responses
        </h1>
      </div>
    );
  }
  return (
    <div>
      {theMessage.map(
        (data: {} | null | undefined, index: React.Key | null | undefined) => {
          return (
            <div key={index}>
              {data === "socialmedia" ? (
                <div className="flex flex-col">
                  <a
                    href=""
                    className="underline text-blue-600 bg-gray-400 rounded-full my-1 mx-1 px-3 py-1"
                  >
                    Facebook
                  </a>
                  <a
                    href=""
                    className="underline text-blue-600 bg-gray-400 rounded-full my-1 mx-1 px-3 py-1"
                  >
                    Instagram
                  </a>
                  <a
                    href=""
                    className="underline text-blue-600 bg-gray-400 rounded-full my-1 mx-1 px-3 py-1"
                  >
                    Twitter
                  </a>
                </div>
              ) : (
                <div className="responses">
                  <h1 key={index}>{data}</h1>
                </div>
              )}
            </div>
          );
        }
      )}
    </div>
  );
}
