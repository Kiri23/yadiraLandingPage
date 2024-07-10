export default function Navbar() {
  return (
    <header class="flex flex-wrap md:justify-start md:flex-nowrap bg-pink z-50 w-full py-7">
      <nav className="relative w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto">
        <div class="md:col-span-6">
          <a class="btn btn-ghost text-xl">Be In peace</a>
        </div>
        <div class=" flex items-center md:col-span-6 ms-auto">
          <button
            type={"button"}
            class="py-4 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-xl bg-white hover:shadow-lg"
          >
            Schedule a session
          </button>
        </div>
      </nav>
    </header>
  );
}
