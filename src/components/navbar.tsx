import ThemeToggle from "@/theme/theme-toggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-[100] backdrop-blur-lg  border-b border-dotted border-b-black dark:border-b-gray-400 shadow-md dark:shadow-md h-14 w-full">
      <div className="mx-auto flex h-full max-w-7xl justify-between items-center px-4">
        <h1 className="text-md font-bold">Stack/Tutor</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
