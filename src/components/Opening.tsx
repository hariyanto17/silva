import { kiss } from "../assets";

interface IOpening {
  onClick: () => void
}

const Opening = ({onClick} : IOpening) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="bg-pink-600 w-full flex flex-col items-center text-slate-900">
        <h1 className="text-xl text-center">Happy birth day beyb</h1>
        <img src={kiss} className="max-w-xs" />
        <p>Hello this is your first birthday since we were in relationship</p>
        <p>I hope you are happy with me</p>
        <p>I don't have a special prayer for you, I will only pray for you to be happy whatever you do</p>
        <p>someone who loves you</p>
        <p>Harianto</p>
        <button className="my-10 border border-gray-800 p-2 rounded-lg hover:bg-pink-800" onClick={onClick}>
          click here
        </button>
      </div>
    </div>
  );
};

export default Opening;
