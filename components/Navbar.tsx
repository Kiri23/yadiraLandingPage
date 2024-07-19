// Im using preline examples to build out the components
export default function Navbar() {
  return (
    <header class="sticky top-0 z-50 bg-[#FEE9EC] w-full">
      <nav className="w-full flex px-4 h-24 md:px-8 items-center justify-between">
        <img
          src="beInPeaceLogo.svg"
          alt="Logo"
          className="w-40 h-44 sm:w-44 sm:h-44 sm:object-cover"
        />
        <button
          type={"button"}
          class="p-3 sm:py-3 text-sm uppercase text-white font-medium rounded-xl bg-blueBrand hover:shadow-lg"
        >
          Schedule a session
        </button>
      </nav>
    </header>
  );
}
//255, 222, 227
// 254, 233, 236
// FEE9EC
