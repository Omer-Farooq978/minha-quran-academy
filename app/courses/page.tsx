import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "Noorani Qaida",
    icon: "☾",
    description:
      "Build a strong foundation in Quran reading with correct pronunciation and basic rules.",
    suitable: "Perfect for beginners and children",
  },
  {
    title: "Quran Reading",
    icon: "📖",
    description:
      "Learn to read the Holy Quran confidently and fluently with personalized guidance.",
    suitable: "For beginners and improving readers",
  },
  {
    title: "Tajweed",
    icon: "✦",
    description:
      "Improve your Quran recitation by learning essential Tajweed rules step by step.",
    suitable: "For students who want better pronunciation",
  },
  {
    title: "Hifz-ul-Quran",
    icon: "🕌",
    description:
      "Follow a structured and personalized program for memorizing the Holy Quran.",
    suitable: "For students committed to memorization",
  },
  {
    title: "Islamic Studies",
    icon: "☪",
    description:
      "Learn essential Islamic knowledge, duas, manners, stories and everyday teachings.",
    suitable: "For children and adults",
  },
];

export default function Courses() {
  return (
    <main className="min-h-screen bg-[#f8f7f2] text-[#12372a]">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-[#12372a]/10 bg-[#f8f7f2]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Minha Online Quran Academy"
              width={250}
              height={80}
              className="h-16 w-auto"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">

            <Link
  href="/"
  className="font-medium transition hover:text-[#b58a2b]"
>
  Home
</Link>

            <a
              href="/courses"
              className="font-medium text-[#b58a2b]"
            >
              Courses
            </a>

            <a
              href="/about"
              className="font-medium transition hover:text-[#b58a2b]"
            >
              About
            </a>

            <a
              href="/contact"
              className="font-medium transition hover:text-[#b58a2b]"
            >
              Contact
            </a>

          </div>

          <a
            href="https://wa.me/923142558784"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#12372a] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-[#1c503c]"
          >
            WhatsApp Us
          </a>

        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#12372a] px-6 py-20 text-center text-white">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d8b95c]">
          Our Programs
        </p>

        <h1 className="mx-auto mt-5 max-w-4xl font-serif text-5xl font-semibold leading-tight sm:text-6xl">
          Learn Quran with
          <span className="block text-[#d8b95c]">
            Guidance &amp; Purpose.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Personalized online Quran education for children and adults,
          designed to help every student learn at their own pace.
        </p>

      </section>

      {/* COURSES */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-14 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b58a2b]">
            What We Teach
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
            Courses for Every Stage
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
            Whether you are taking your first steps or improving your
            recitation, choose a program that fits your learning goals.
          </p>

        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {courses.map((course) => (
            <div
              key={course.title}
              className="group rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#12372a] text-3xl">
                {course.icon}
              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold">
                {course.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                {course.description}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <p className="text-sm font-medium text-[#12372a]">
                  {course.suitable}
                </p>
              </div>

              <a
                href="https://wa.me/923142558784"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block font-semibold text-[#b58a2b] transition hover:text-[#12372a]"
              >
                Ask About This Course →
              </a>

            </div>
          ))}

        </div>

      </section>

      {/* FREE TRIAL CTA */}
      <section className="mx-6 mb-10 overflow-hidden rounded-[2rem] bg-[#d8b95c]">

        <div className="px-6 py-16 text-center sm:px-10">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#12372a]/70">
            Begin Today
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold text-[#12372a] sm:text-5xl">
            Start your Quran journey today.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#12372a]/70">
            Book a free trial class and discover a personalized learning
            experience from the comfort of your home.
          </p>

          <a
            href="https://wa.me/923142558784"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-[#12372a] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#1c503c]"
          >
            Book Your Free Trial →
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#12372a]/10 bg-[#f8f7f2] px-6 py-10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <div>

            <h3 className="font-serif text-2xl font-semibold">
              Minha
            </h3>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b58a2b]">
              Online Quran Academy
            </p>

          </div>

          <p className="text-sm text-slate-500">
            Worldwide Quran education • Kids &amp; Adults
          </p>

          <a
            href="https://wa.me/923142558784"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#12372a]"
          >
            +92 314 2558784
          </a>

        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-[#12372a]/10 pt-6 text-center text-sm text-slate-400">
          © 2026 Minha Online Quran Academy. All rights reserved.
        </div>

      </footer>

    </main>
  );
}