export default function Header() {
  return (
    <header className="flex h-7 w-full items-center justify-between bg-[#00040D] px-3">
      <nav className="flex items-center gap-5 font-subjectivity text-xs text-white opacity-90">
        <p className="cursor-pointer transition hover:text-gray-300">Project</p>
        <p className="cursor-pointer transition hover:text-gray-300">Account</p>
      </nav>
      <h1 className="cursor-default select-none font-subjectivity text-xs font-medium">
        Centauri
      </h1>
    </header>
  );
}
