import Challenge1 from "./Challenge1";
import Challenge2 from "./Challenge2";

const ChallengesContainer = () => {
  return (
    <div className="flex flex-col justify-center gap-8 lg:flex-row">
    <div className="w-full lg:max-w-lg">
      <Challenge1 />
    </div>
    <div className="w-full lg:max-w-lg">
      <Challenge2 />
    </div>
  </div>
  );
};

export default ChallengesContainer;
