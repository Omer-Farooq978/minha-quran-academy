"use client";

import Image from "next/image";
import { useState } from "react";

const courses = [
  {
    title: "Noorani Qaida",
    description:
      "Build a strong foundation in Quran reading with correct pronunciation and basic rules.",
    icon: "☾",
  },
  {
    title: "Quran Reading",
    description:
      "Learn to read the Holy Quran confidently and fluently with guidance from qualified teachers.",
    icon: "📖",
  },
  {
    title: "Tajweed",
    description:
      "Improve your recitation by learning the essential rules of Tajweed step by step.",
    icon: "✦",
  },
  {
    title: "Hifz-ul-Quran",
    description:
      "A structured and personalized memorization program for students of different ages.",
    icon: "🕌",
  },
  {
    title: "Islamic Studies",
    description:
      "Learn essential Islamic knowledge, duas, manners, stories and everyday Islamic teachings.",
    icon: "☪",
  },
];

const features = [
  {
    number: "01",
    title: "Qualified Teachers",
    description:
      "Learn from dedicated male and female teachers who guide every student with care.",
  },
  {
    number: "02",
    title: "One-to-One Learning",
    description:
      "Personalized online classes designed around the student's learning level and goals.",
  },
  {
    number: "03",
    title: "Flexible Timings",
    description:
      "Choose a convenient schedule that fits your family's daily routine.",
  },
  {
    number: "04",
    title: "Students Worldwide",
    description:
      "Connect with experienced teachers from anywhere in the world.",
  },
];

const pricingPlans = [
  {
    schedule: "Monday – Friday",
    subtitle: "Weekday Classes",
    duration: "30 Minutes",
    price: "$60",
    description:
      "Regular one-to-one Quran classes from Monday to Friday.",
    featured: false,
  },
  {
    schedule: "Monday – Friday",
    subtitle: "Weekday Classes",
    duration: "1 Hour",
    price: "$100",
    description:
      "Extended one-to-one Quran classes for students who want more learning time.",
    featured: true,
  },
  {
    schedule: "Weekend",
    subtitle: "Special Classes",
    duration: "30 Minutes",
    price: "$40",
    description:
      "Special weekend Quran classes for students with busy weekday schedules.",
    featured: false,
  },
  {
    schedule: "Weekend",
    subtitle: "Special Classes",
    duration: "1 Hour",
    price: "$80",
    description:
      "Extended weekend classes with more dedicated learning time.",
    featured: false,
  },
];

export default function Home() {
  const [schedule, setSchedule] = useState("");
  const [duration, setDuration] = useState("");

  const getPrice = () => {
    if (schedule === "Monday – Friday" && duration === "30 Minutes") {
      return "$60 / month";
    }

    if (schedule === "Monday – Friday" && duration === "1 Hour") {
      return "$100 / month";
    }

    if (schedule === "Weekend" && duration === "30 Minutes") {
      return "$40 / month";
    }

    if (schedule === "Weekend" && duration === "1 Hour") {
      return "$80 / month";
    }

    return "Select schedule & duration";
  };

  const selectedPrice = getPrice();

  return (
    <main className="min-h-screen bg-[#faf9f5] text-[#12372a]">

      {/* ========================= NAVBAR ========================= */}
      <nav className="sticky top-0 z-50 border-b border-[#d9c99a]/30 bg-[#faf9f5]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          <a href="#home" className="flex items-center gap-3">
            <div className="relative h-14 w-14 overflow-hidden rounded-full">
              <Image
                src="/logo.png"
                alt="Minha Online Quran Academy"
                fill
                className="object-cover"
              />
            </div>

            <div className="hidden sm:block">
              <p className="font-serif text-xl font-bold text-[#12372a]">
                Minha
              </p>

              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b58a2b]">
                Online Quran Academy
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-8 lg:flex">
            <a
              href="#home"
              className="text-sm font-medium hover:text-[#b58a2b]"
            >
              Home
            </a>

            <a
              href="#courses"
              className="text-sm font-medium hover:text-[#b58a2b]"
            >
              Courses
            </a>

            <a
              href="#pricing"
              className="text-sm font-medium hover:text-[#b58a2b]"
            >
              Pricing
            </a>

            <a
              href="#about"
              className="text-sm font-medium hover:text-[#b58a2b]"
            >
              About
            </a>

            <a
              href="#contact"
              className="text-sm font-medium hover:text-[#b58a2b]"
            >
              Contact
            </a>
          </div>

          <a
            href="https://wa.me/923142558784"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-full bg-[#12372a] px-4 py-2.5 text-base font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#1c503c] sm:px-5 sm:py-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.004 2a9.94 9.94 0 0 0-8.608 14.99L2 22l5.18-1.36A10 10 0 1 0 12.004 2zm0 18.25a8.25 8.25 0 0 1-4.21-1.15l-.3-.18-3.075.807.82-2.997-.195-.308A8.25 8.25 0 1 1 12.004 20.25z" />
              </svg>
            </span>

            <span>
              <span className="block text-[10px] uppercase tracking-[0.18em] text-[#d8b95c]">
                WhatsApp
              </span>

              <span className="block text-sm sm:text-base">
                +92 314 2558784
              </span>
            </span>
          </a>
        </div>
      </nav>


      {/* ========================= HERO ========================= */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#12372a] text-white"
      >
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#b58a2b]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#d8c27a]/10 blur-3xl" />

        <div className="relative mx-auto grid min-h-[560px] max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2 lg:px-10">

          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8c27a]/30 bg-white/5 px-4 py-2 text-sm text-[#e7d79d]">
              <span>✦</span>
              <span>Learn Quran From Anywhere in the World</span>
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.5rem]">
              Learn the Quran.
              <br />
              <span className="text-[#d8b95c]">
                Live the Guidance.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              Personalized online Quran classes for children and adults,
              taught by dedicated male and female teachers from the comfort
              of your home.
            </p>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/923142558784"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#d8b95c] px-7 py-4 text-center font-semibold text-[#12372a] shadow-xl transition hover:-translate-y-1 hover:bg-[#e5cc7b]"
              >
                Start Your Free Trial →
              </a>

              <a
                href="#courses"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/10"
              >
                Explore Courses
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/65">
              <span>✓ Kids & Adults</span>
              <span>✓ Male & Female Teachers</span>
              <span>✓ Flexible Timings</span>
            </div>
          </div>


          {/* HERO CARD */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] border border-[#d8b95c]/20" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#174634] p-8 shadow-2xl">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#d8b95c]/10 blur-2xl" />

              <div className="relative text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-[#d8b95c]">
                  Your Quran Journey
                </p>

                <div className="my-8 text-8xl text-[#d8b95c]">
                  ۞
                </div>

                <h2 className="font-serif text-3xl">
                  Learn • Understand • Grow
                </h2>

                <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-white/60">
                  Begin your journey with structured lessons, caring teachers,
                  and a learning experience built around you.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-serif text-2xl text-[#d8b95c]">
                      1:1
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                      Personal Classes
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="font-serif text-2xl text-[#d8b95c]">
                      24/7
                    </p>

                    <p className="mt-1 text-xs text-white/50">
                      Flexible Schedule
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ========================= TRUST BAR ========================= */}
      <section className="border-b border-[#12372a]/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4 lg:px-10">

          <div className="text-center">
            <p className="text-2xl text-[#b58a2b]">✦</p>
            <p className="mt-2 text-sm font-semibold">
              Qualified Teachers
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl text-[#b58a2b]">◈</p>
            <p className="mt-2 text-sm font-semibold">
              One-to-One Classes
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl text-[#b58a2b]">◷</p>
            <p className="mt-2 text-sm font-semibold">
              Flexible Timings
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl text-[#b58a2b]">◎</p>
            <p className="mt-2 text-sm font-semibold">
              Worldwide Learning
            </p>
          </div>

        </div>
      </section>


      {/* ========================= COURSES ========================= */}
      <section
        id="courses"
        className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b58a2b]">
            Our Programs
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#12372a] sm:text-5xl">
            Courses for Every Stage
          </h2>

          <p className="mt-5 leading-7 text-[#12372a]/60">
            Whether you are taking your first steps or improving your
            recitation, our structured programs help you progress with
            confidence.
          </p>

        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {courses.map((course) => (
            <div
              key={course.title}
              className="group rounded-3xl border border-[#12372a]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#b58a2b]/40 hover:shadow-xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12372a] text-2xl text-[#d8b95c] transition group-hover:bg-[#b58a2b] group-hover:text-white">
                {course.icon}
              </div>

              <h3 className="mt-6 font-serif text-2xl font-semibold">
                {course.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#12372a]/60">
                {course.description}
              </p>

              <a
                href="https://wa.me/923142558784"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-sm font-bold text-[#b58a2b] hover:text-[#12372a]"
              >
                Learn More →
              </a>

            </div>
          ))}

        </div>
      </section>


      {/* ========================= PRICING ========================= */}
      <section
        id="pricing"
        className="bg-[#f8f7f2] px-6 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b58a2b]">
              Simple Pricing
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#12372a] sm:text-5xl">
              Choose Your Class Plan
            </h2>

            <p className="mt-5 leading-7 text-[#12372a]/60">
              Choose a schedule and class duration that works best for your
              family. All plans are personalized one-to-one Quran classes.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {pricingPlans.map((plan) => (
              <div
                key={`${plan.schedule}-${plan.duration}`}
                className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  plan.featured
                    ? "border-[#b58a2b] ring-2 ring-[#b58a2b]/20"
                    : "border-[#12372a]/10"
                }`}
              >

                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#b58a2b] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Extended Plan
                  </div>
                )}

                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#b58a2b]">
                  {plan.subtitle}
                </p>

                <h3 className="mt-4 font-serif text-2xl font-semibold text-[#12372a]">
                  {plan.schedule}
                </h3>

                <div className="mt-6">
                  <p className="text-sm text-[#12372a]/50">
                    Class Duration
                  </p>

                  <p className="mt-1 text-xl font-semibold text-[#12372a]">
                    {plan.duration}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#12372a]/10 pt-6">
                  <p className="text-4xl font-bold text-[#12372a]">
                    {plan.price}
                  </p>

                  <p className="mt-1 text-sm text-[#12372a]/50">
                    per month
                  </p>
                </div>

                <p className="mt-5 flex-1 text-sm leading-7 text-[#12372a]/60">
                  {plan.description}
                </p>

                <a
                  href="#free-trial"
                  className="mt-7 block rounded-full bg-[#12372a] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1c503c]"
                >
                  Choose This Plan →
                </a>

              </div>
            ))}

          </div>


          {/* PRICING NOTE */}
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#b58a2b]/20 bg-white p-5 text-center">
            <p className="text-sm leading-7 text-[#12372a]/65">
              <span className="font-semibold text-[#12372a]">
                Weekday Classes:
              </span>{" "}
              Monday to Friday.
              {" "}
              <span className="ml-1 font-semibold text-[#12372a]">
                Weekend Special Classes:
              </span>{" "}
              Saturday and Sunday.
            </p>
          </div>

        </div>
      </section>


      {/* ========================= ABOUT ========================= */}
      <section
        id="about"
        className="bg-[#12372a] text-white"
      >
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-10">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#d8b95c]">
              Why Minha?
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              A learning experience built around every student.
            </h2>

            <p className="mt-6 leading-8 text-white/65">
              At Minha Online Quran Academy, we believe every student has a
              unique learning journey. Our goal is to make Quran education
              accessible, personal and convenient for families around the
              world.
            </p>

            <a
              href="https://wa.me/923142558784"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block rounded-full bg-[#d8b95c] px-7 py-4 font-semibold text-[#12372a] transition hover:bg-[#e5cc7b]"
            >
              Talk to Us
            </a>

          </div>


          <div className="grid gap-4 sm:grid-cols-2">

            {features.map((feature) => (
              <div
                key={feature.number}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >

                <p className="text-sm font-bold text-[#d8b95c]">
                  {feature.number}
                </p>

                <h3 className="mt-4 font-serif text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ========================= HOW IT WORKS ========================= */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#b58a2b]">
            Simple Process
          </p>

          <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
            Start Learning in 3 Steps
          </h2>

        </div>


        <div className="mt-14 grid gap-8 md:grid-cols-3">

          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#12372a] font-serif text-xl text-[#d8b95c]">
              01
            </div>

            <h3 className="mt-5 font-serif text-2xl">
              Book a Free Trial
            </h3>

            <p className="mt-3 leading-7 text-[#12372a]/60">
              Contact us and choose a convenient time for your first class.
            </p>

          </div>


          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#12372a] font-serif text-xl text-[#d8b95c]">
              02
            </div>

            <h3 className="mt-5 font-serif text-2xl">
              Meet Your Teacher
            </h3>

            <p className="mt-3 leading-7 text-[#12372a]/60">
              Get introduced to a teacher suited to your learning needs.
            </p>

          </div>


          <div className="text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#12372a] font-serif text-xl text-[#d8b95c]">
              03
            </div>

            <h3 className="mt-5 font-serif text-2xl">
              Begin Your Journey
            </h3>

            <p className="mt-3 leading-7 text-[#12372a]/60">
              Continue with regular personalized Quran lessons from home.
            </p>

          </div>

        </div>
      </section>


      {/* ========================= FREE TRIAL / CONTACT ========================= */}
      <section
        id="free-trial"
        className="bg-[#f8f7f2] px-6 py-20 sm:px-10 lg:px-16"
      >
        <div
          id="contact"
          className="mx-auto max-w-6xl"
        >

          {/* SECTION HEADING */}
          <div className="mb-12 text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#b58a2b]">
              Book a Free Trial
            </p>

            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#12372a] sm:text-5xl">
              Start Your Quran Journey
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#64808a]">
              Tell us a little about your learning needs and our academy will
              contact you to arrange a suitable free trial class.
            </p>

          </div>


          {/* FORM AREA */}
          <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-xl sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEFT INFORMATION PANEL */}
            <div className="rounded-2xl bg-[#12372a] p-8 text-white">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d8b95c]">
                Minha Online Quran Academy
              </p>

              <h3 className="mt-5 font-serif text-3xl font-semibold">
                Learn Quran from anywhere in the world.
              </h3>

              <p className="mt-5 leading-7 text-white/70">
                Personalized online Quran education for children and adults,
                with flexible timings and one-to-one learning.
              </p>

              <div className="mt-8 space-y-4 text-sm text-white/80">
                <p>✓ Kids & Adults</p>
                <p>✓ Male & Female Instructors</p>
                <p>✓ One-to-One Classes</p>
                <p>✓ Flexible Timings</p>
                <p>✓ Worldwide Learning</p>
              </div>


              {/* PRICE SUMMARY */}
              <div className="mt-8 border-t border-white/10 pt-6">

                <p className="text-xs uppercase tracking-widest text-[#d8b95c]">
                  Monthly Plans
                </p>

                <div className="mt-4 space-y-3 text-sm text-white/75">
                  <p>
                    Monday–Friday · 30 min{" "}
                    <span className="float-right font-semibold text-white">
                      $60
                    </span>
                  </p>

                  <p>
                    Monday–Friday · 1 hour{" "}
                    <span className="float-right font-semibold text-white">
                      $100
                    </span>
                  </p>

                  <p>
                    Weekend · 30 min{" "}
                    <span className="float-right font-semibold text-white">
                      $40
                    </span>
                  </p>

                  <p>
                    Weekend · 1 hour{" "}
                    <span className="float-right font-semibold text-white">
                      $80
                    </span>
                  </p>
                </div>

              </div>


              <div className="mt-8 border-t border-white/10 pt-6">

                <p className="text-xs uppercase tracking-widest text-[#d8b95c]">
                  WhatsApp
                </p>

                <p className="mt-1 text-lg font-semibold">
                  +92 314 2558784
                </p>

              </div>

            </div>


            {/* ========================= FORM ========================= */}
            <form
              onSubmit={(e) => {
                e.preventDefault();

                const form = e.currentTarget;
                const data = new FormData(form);

                const name = data.get("name");
                const whatsapp = data.get("whatsapp");
                const country = data.get("country");
                const age = data.get("age");
                const course = data.get("course");
                const selectedSchedule = data.get("schedule");
                const selectedDuration = data.get("duration");
                const time = data.get("time");
                const message = data.get("message");

                let price = "Not selected";

                if (
                  selectedSchedule === "Monday – Friday" &&
                  selectedDuration === "30 Minutes"
                ) {
                  price = "$60 / month";
                }

                if (
                  selectedSchedule === "Monday – Friday" &&
                  selectedDuration === "1 Hour"
                ) {
                  price = "$100 / month";
                }

                if (
                  selectedSchedule === "Weekend" &&
                  selectedDuration === "30 Minutes"
                ) {
                  price = "$40 / month";
                }

                if (
                  selectedSchedule === "Weekend" &&
                  selectedDuration === "1 Hour"
                ) {
                  price = "$80 / month";
                }

                const text = `Assalam o Alaikum, I would like to book a free trial class.

Name: ${name}
WhatsApp: ${whatsapp}
Country: ${country}
Age Group: ${age}
Course: ${course}

Schedule: ${selectedSchedule}
Class Duration: ${selectedDuration}
Monthly Fee: ${price}

Preferred Time: ${time}
Message: ${message || "N/A"}`;

                window.open(
                  `https://wa.me/923142558784?text=${encodeURIComponent(text)}`,
                  "_blank"
                );
              }}
              className="space-y-5"
            >

              {/* NAME + WHATSAPP */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#12372a]">
                    Name
                  </label>

                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[#d9ded9] px-4 py-3 outline-none transition focus:border-[#b58a2b]"
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#12372a]">
                    WhatsApp Number
                  </label>

                  <input
                    name="whatsapp"
                    required
                    placeholder="+92..."
                    className="w-full rounded-xl border border-[#d9ded9] px-4 py-3 outline-none transition focus:border-[#b58a2b]"
                  />
                </div>

              </div>


              {/* COUNTRY + AGE */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#12372a]">
                    Country
                  </label>

                  <input
                    name="country"
                    required
                    placeholder="Your country"
                    className="w-full rounded-xl border border-[#d9ded9] px-4 py-3 outline-none transition focus:border-[#b58a2b]"
                  />
                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#12372a]">
                    Age Group
                  </label>

                  <select
                    name="age"
                    required
                    className="w-full rounded-xl border border-[#d9ded9] bg-white px-4 py-3 outline-none focus:border-[#b58a2b]"
                  >
                    <option value="">
                      Select age group
                    </option>

                    <option>Child</option>
                    <option>Teenager</option>
                    <option>Adult</option>
                  </select>
                </div>

              </div>


              {/* COURSE + SCHEDULE */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#12372a]">
                    Course
                  </label>

                  <select
                    name="course"
                    required
                    className="w-full rounded-xl border border-[#d9ded9] bg-white px-4 py-3 outline-none focus:border-[#b58a2b]"
                  >
                    <option value="">
                      Select a course
                    </option>

                    <option>Noorani Qaida</option>
                    <option>Quran Reading</option>
                    <option>Tajweed</option>
                    <option>Hifz-ul-Quran</option>
                    <option>Islamic Studies</option>
                  </select>
                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#12372a]">
                    Class Schedule
                  </label>

                  <select
                    name="schedule"
                    required
                    value={schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                    className="w-full rounded-xl border border-[#d9ded9] bg-white px-4 py-3 outline-none focus:border-[#b58a2b]"
                  >
                    <option value="">
                      Select schedule
                    </option>

                    <option value="Monday – Friday">
                      Monday – Friday
                    </option>

                    <option value="Weekend">
                      Weekend Special Classes
                    </option>
                  </select>
                </div>

              </div>


              {/* DURATION + TIME */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#12372a]">
                    Class Duration
                  </label>

                  <select
                    name="duration"
                    required
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full rounded-xl border border-[#d9ded9] bg-white px-4 py-3 outline-none focus:border-[#b58a2b]"
                  >
                    <option value="">
                      Select duration
                    </option>

                    <option value="30 Minutes">
                      30 Minutes
                    </option>

                    <option value="1 Hour">
                      1 Hour
                    </option>
                  </select>
                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#12372a]">
                    Preferred Time
                  </label>

                  <input
                    name="time"
                    required
                    placeholder="e.g. 7:00 PM"
                    className="w-full rounded-xl border border-[#d9ded9] px-4 py-3 outline-none transition focus:border-[#b58a2b]"
                  />
                </div>

              </div>


              {/* SELECTED PRICE */}
              <div className="rounded-2xl border border-[#b58a2b]/20 bg-[#faf9f5] p-5">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b58a2b]">
                      Monthly Fee
                    </p>

                    <p className="mt-1 text-sm text-[#12372a]/60">
                      Based on your selected schedule and class duration.
                    </p>
                  </div>

                  <p className="text-xl font-bold text-[#12372a]">
                    {selectedPrice}
                  </p>

                </div>

              </div>


              {/* MESSAGE */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-[#12372a]">
                  Message{" "}
                  <span className="font-normal text-gray-400">
                    (Optional)
                  </span>
                </label>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us anything you'd like us to know..."
                  className="w-full resize-none rounded-xl border border-[#d9ded9] px-4 py-3 outline-none transition focus:border-[#b58a2b]"
                />

              </div>


              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-full bg-[#12372a] px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#1c503c]"
              >
                Book Your Free Trial →
              </button>

              <p className="text-center text-xs text-gray-400">
                Your request will open WhatsApp to contact Minha Online Quran
                Academy.
              </p>

            </form>

          </div>
        </div>
      </section>


      {/* ========================= FOOTER ========================= */}
      <footer
        id="teachers"
        className="border-t border-[#12372a]/10 bg-[#faf9f5]"
      >

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">

          <div>
            <p className="font-serif text-2xl font-bold">
              Minha
            </p>

            <p className="text-xs uppercase tracking-[0.2em] text-[#b58a2b]">
              Online Quran Academy
            </p>
          </div>


          <div className="text-sm text-[#12372a]/60">
            Worldwide Quran education • Kids & Adults
          </div>


          <a
            href="https://wa.me/923142558784"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#12372a] hover:text-[#b58a2b]"
          >
            +92 314 2558784
          </a>

        </div>


        <div className="border-t border-[#12372a]/10 py-5 text-center text-xs text-[#12372a]/40">
          © {new Date().getFullYear()} Minha Online Quran Academy. All rights
          reserved.
        </div>

      </footer>

    </main>
  );
}