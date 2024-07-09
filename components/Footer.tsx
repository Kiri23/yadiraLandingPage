import CurrentYear from "../islands/CurrentYear.tsx";

export default function Footer() {
    return (
        <footer class="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p class="text-xs text-gray-500 dark:text-gray-400">
                © <CurrentYear /> Be In peace. All rights reserved.
            </p>
            <nav class="sm:ml-auto flex gap-4 sm:gap-6">
                <a class="text-xs hover:underline underline-offset-4" href="#">
                    Privacy Policy
                </a>
                <a class="text-xs hover:underline underline-offset-4" href="#">
                    Terms of Service
                </a>
            </nav>
        </footer>
    );
}
