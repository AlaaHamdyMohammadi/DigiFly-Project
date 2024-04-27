import PartOne from "@/components/PartOne/PartOne";
import PartTwo from "@/components/PartTwo/PartTwo";
import PartThree from "@/components/PartThree/PartThree";

export default function Home() {
  return (
    <main className="bg-[#FCFCFE] w-full flex flex-col">
      <PartOne />
      <PartTwo />
      <PartThree />
    </main>
  );
}
