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
    <div className="m-3 rounded-2xl text-white p-3">
      <p className="font-bold py-4 text-3xl">{data.name}</p>
      <div className="px-6">
        <p className="text-xl">{data.say}</p>
      </div>
    </div>
  );
};

export default Congratulations;
