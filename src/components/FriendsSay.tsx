import { data } from "../assets";
import Congratulations from "./Congratulations";

const FriendsSay = () => {
  return (
    <div className="" >
      <h1 className="text-xl text-center text-white mt-3">
        Greetings from our friends
      </h1>
      {data.map((item) => (
        <Congratulations key={item.name} data={item} />
      ))}
    </div>
  );
};

export default FriendsSay;
