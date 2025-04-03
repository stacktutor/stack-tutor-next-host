import ThemeToggle from "@/theme/theme-toggle";

export default function Navbar() {
  return (
    <header className="bg-white dark:bg-[#191919] text-[#37352f] dark:text-[#ffffffcf] shadow-box-shadow-first sticky top-0 z-10 h-11 w-full">
      <div className="mx-auto flex h-full max-w-7xl justify-between items-center px-4">
        <h1 className="text-md font-bold">My Website</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
