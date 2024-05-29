import { h } from "preact";

export default function Navbar() {
  return (
    <header class="flex items-center justify-between p-4 bg-white">
    <h1 class="text-xl font-bold">Be in Peace</h1>
    <nav class="hidden md:flex space-x-4">
      <a class="text-gray-600 hover:text-gray-800" href="#"> Home </a>
      <a class="text-gray-600 hover:text-gray-800" href="#"> About </a>
      <a class="text-gray-600 hover:text-gray-800" href="#"> Services </a>
      <a class="text-gray-600 hover:text-gray-800" href="#"> Contact </a>
    </nav>
    <button
      class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-blue-600 text-white"
    >
      Book an Appointment
    </button>
  </header>
  );
}
