export default function MeetMe() {
  return (
    <div class="container px-4 md:px-6">
      <div class="flex flex-col items-center justify-center space-y-4 text-center">
        <div class="space-y-2">
          <div class="inline-block rounded-lg bg-pink px-3 py-1 text-sm text-white">
            Meet Your Therapist
          </div>
          <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
            Meet Dr. Yadira Nogueras Rosado
          </h2>
          <p class="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#2B4257]">
            Welcome! I earned my medical degree from the prestigious Universidad
            Central Del Caribe, accredited by the Liaison Committee on Medical
            Education. Specializing in psychiatry, I completed my residency at
            the esteemed Ponce Health Science University, an ACGME accredited
            program. After my training, I moved to Florida, where I have been
            dedicated to enhancing community mental health.
          </p>
        </div>
      </div>
      <div class="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-1 md:gap-12 lg:max-w-5xl lg:grid-cols-1">
        <div class="grid gap-1">
          <img
            src="/me.png"
            alt="Therapist"
            class="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
