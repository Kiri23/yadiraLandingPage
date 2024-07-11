export default function Faq() {
    const faqs = [
        {
            question: "What insurance plans do you accept?",
            answer:
                "We currently accept Aetna, Cigna, and Florida Blue Cross. If you have a different insurance provider, please contact our office to discuss potential options.",
        },
        {
            question: "What can I expect during my first session?",
            answer:
                "Your first session will be a comprehensive diagnostic assessment. We'll discuss your symptoms, medical history, and any previous diagnoses to create a personalized treatment plan. This plan may include medication, therapeutic techniques, or a combination of both, tailored to your specific needs.",
        },
        {
            question: "How are medications prescribed and managed?",
            answer:
                "For your convenience, all prescriptions are sent electronically to the pharmacy of your choice. We'll discuss any potential medications during your session, including their benefits and possible side effects, to ensure you're fully informed about your treatment.",
        },
    ];

    return (
        <section className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-blueBrand">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="max-w-5xl mx-auto">
                <div className="grid sm:grid-cols-2 gap-6 md:gap-12">
                    {faqs.map((faq, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold text-blueBrand">
                                {faq.question}
                            </h3>
                            <p className="mt-2 text-dark">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
