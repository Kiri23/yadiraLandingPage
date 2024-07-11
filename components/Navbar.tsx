// Im using preline examples to build out the components
export default function Navbar() {
  return (
    <header class="sticky top-0 z-50 bg-pink-110 w-full">
      <nav className="w-full flex px-4 h-24 md:px-8 items-center justify-between">
        <img
          src="beInPeaceLogo.svg"
          alt="Logo"
          className="w-40 h-44 sm:w-52 sm:h-52 sm:object-cover"
        />
        <button
          type={"button"}
          class="items-end py-2 sm:py-3 px-4 text-sm text-white font-medium rounded-xl bg-blueBrand hover:shadow-lg"
        >
          Schedule a session
        </button>
      </nav>
    </header>
  );
}
