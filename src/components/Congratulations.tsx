import React from "react";

interface ICongratulations {
  data: {
    name: string;
    say: string;
    profile: string;
  };
}

const Congratulations = ({ data }: ICongratulations) => {
  return (
    <div className="bg-pink-600 m-3 rounded-2xl text-white p-3">
      <div className="flex gap-2">
        <p>{data.name}</p>
      </div>
      <div className="px-6">
        <p className="">{data.say}</p>
      </div>
    </div>
  );
};

export default Congratulations;
