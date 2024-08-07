// Im using preline examples to build out the components
export default function Navbar2() {
    return (
        // 100 - fc e7 f3
        // 200 - fb cf e8
        // 300 - f9 a8 d4
        // bg-pink-110
        <header class="flex flex-wrap md:justify-start md:flex-nowrap bg-cremita z-50 w-full py-7">
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
