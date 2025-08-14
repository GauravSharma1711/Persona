import React from 'react';
import { useNavigate } from 'react-router-dom';

const Section = () => {
  const navigate = useNavigate();
 

  const handleChatClick = (e, name) => {
    e.preventDefault();
    navigate(`/chat/${name}`);
  };

  return (
    <div className="border border-white h-[524px] mx-8 flex flex-col">
      {/* Top-centered heading */}
      <div className="flex justify-center my-4">
        <div className="text-center">
          <h4 className="text-lg font-bold">Your AI Chatbot</h4>
          <p className="text-gray-400">Conversations, Your Way</p>
        </div>
      </div>

      {/* Cards container */}
      <div className="flex items-center justify-evenly gap-6 mt-6">
        {/* Hitesh Sir's Card */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="/hitesh.png"
              alt="Hitesh Choudhary"
              className="h-56 w-60"
            />
          </figure>
          <div className="card-body flex flex-col items-center justify-center gap-4">
            <h2 className="card-title rounded-4xl">Hitesh Choudhary</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={(e) => handleChatClick(e, "HiteshChoudhary")}
                className="btn btn-primary px-18 rounded-2xl"
              >
                Chat
              </button>
            </div>
          </div>
        </div>

        {/* Piyush Sir's Card */}
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="/piyush.png"
              alt="Piyush Garg"
              className="h-56 w-60"
            />
          </figure>
          <div className="card-body flex flex-col items-center justify-center gap-4">
            <h2 className="card-title">Piyush Garg</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button
                onClick={(e) => handleChatClick(e, "PiyushGarg")}
                className="btn btn-primary px-18 rounded-2xl"
              >
                Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
