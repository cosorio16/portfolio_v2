import Clock from "./Clock";

function Header() {
  return (
    <header className="flex items-center justify-between w-full px-5">
      <div className=" md:flex hidden items-center gap-2">
        <div className="bg-cream rounded-full flex items-center justify-center">
          <img src="/1.webp" alt="" className="size-20 p-4 " />
        </div>
      </div>
      <div className="flex items-center justify-center w-full md:w-fit">
        <Clock />
      </div>
    </header>
  );
}

export default Header;
