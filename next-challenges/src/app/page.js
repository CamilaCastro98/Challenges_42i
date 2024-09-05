import ChallengesContainer from "@/components/ChallengesContainer";

export default function Home() {
  return (
    <div className="flex flex-col gap-5 p-5 py-10 md:gap-10 md:p-20">
      <div className="text-2xl text-center text-white md:text-4xl">Challenge Solver</div>
      <ChallengesContainer />
    </div>
  );
}
