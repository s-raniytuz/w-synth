export default function Header() {
  return (
    <header className="flex h-7 w-full items-center justify-between bg-[#00040D] px-3">
      <nav className="font-subjectivity flex items-center gap-5 text-xs font-normal">
        <p className="cursor-pointer transition hover:text-gray-300">Project</p>
        <p className="cursor-pointer transition hover:text-gray-300">Account</p>
      </nav>
      <h1 className="font-subjectivity cursor-default select-none text-xs font-medium">
        Centauri
      </h1>
    </header>
  );
}
