// Im using preline examples to build out the components
export default function Navbar() {
  return (
    // 100 - fc e7 f3
    // 200 - fb cf e8
    // 300 - f9 a8 d4
    // bg-pink-110

    // position relative - position the log
    <header class="flex flex-wrap sticky top-0 md:relative md:justify-start md:flex-nowrap z-50 bg-pink-110 w-full">
      <nav className="w-full flex flex-wrap h-1 sm:h-20 pb-20 md:grid md:grid-cols-12 basis-full items-center px-4 md:px-8 mx-auto">
        <div class="md:col-span-6">
          <img
            src="beInPeaceLogo.svg"
            alt="Logo"
            className="w-28 h-28 sm:w-48 sm:h-20 object-cover"
          />
        </div>
        <div class=" flex items-center md:col-span-6 ms-auto">
          <button
            type={"button"}
            class="py-1 sm:py-2 px-4 inline-flex items-center gap-x-2 text-sm text-white font-medium rounded-xl bg-blueBrand hover:shadow-lg"
          >
            Schedule a session
          </button>
        </div>
      </nav>
    </header>
  );
}
