export default function MeetMe() {
  return (
    <div className="container px-4 md:px-6 py-12 mx-auto">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blueBrand text-center mb-12">
        Meet Dr. Yadira Nogueras Rosado
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-dark text-lg leading-relaxed">
            Dr. Yadira Nogueras-Rosado is an experienced psychiatrist with over
            5 years of practice, specializing in an integrated approach to
            mental health. A graduate of Universidad Central Del Caribe with
            residency at Ponce Health Science University.
          </p>
          <ul className="space-y-2">
            {[
              "Integrated approach combining traditional psychiatry and complementary therapies",
              "Fluent in Spanish, offering culturally sensitive care",
              "Specializing in a wide range of psychological challenges",
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-blueBrand flex-shrink-0 mr-2"
                  fill="none"
                  stroke="#2B4257"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  >
                  </path>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-dark text-lg leading-relaxed">
            Dr. Nogueras-Rosado provides personalized care, developing
            individualized treatment plans that address the whole person, not
            just symptoms. Her unique blend of evidence-based treatments and
            complementary practices makes her an excellent choice for those
            seeking a comprehensive, patient-centered approach to mental
            wellness.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/me.png"
            alt="Dr. Yadira Nogueras Rosado"
            className="rounded-full w-full max-w-md h-auto object-cover shadow-slate-50 shadow-sm"
          />
        </div>
      </div>
    </div>
  );
}
