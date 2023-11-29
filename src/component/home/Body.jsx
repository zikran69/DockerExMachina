import Drinkcard from "../Body/Drinkcard";
import Foodcard from "../Body/Foodcard";

export default function Body() {
  return (
    <div className="grid grid-flow-cols p-2 lg:p-4 justify-center items-center pt-[5px] lg:pt-[15px] border-4 border-amber-700 m-2 lg:m-6 rounded-lg">
      <h1 className="font-primary text-stone-700 text-[30px] lg:text-[50px] px-[90px] lg:px-[270px] py-2 ">
        Menu Kami
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[150px] justify-between">
        <Drinkcard />
        <Foodcard />
      </div>
    </div>
  );
}
