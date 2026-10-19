
"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";

export default function CustomDesignPage() {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [paymentFile, setPaymentFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });

  useEffect(() => {
    if (!image) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(image);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [image]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handlePaymentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPaymentFile(file);
  };

  const updateField = (
    field: keyof typeof form,
    value: string
  ) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload a picture of your shoe design.");
      return;
    }

    const reference = `MQ-${Date.now().toString().slice(-8)}`;
    const subject = `MSSQUEEN Custom Design Request - ${reference}`;

    const body = `
MSSQUEEN CUSTOM DESIGN REQUEST

Reference: ${reference}

CUSTOMER INFORMATION
Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email || "Not provided"}

DESIGN REQUEST
${form.description || "No additional description provided."}

The customer selected a shoe design image: ${image.name}

Please review the design and respond with:
1. Whether MSSQUEEN can make the design.
2. Which materials are available.
3. The price for each available material.
4. Any changes or limitations required.

The customer will choose the material after MSSQUEEN confirms what can be made.

IMPORTANT: The selected image is not automatically attached to this email.
Please attach the shoe image manually before sending.
`;

    window.location.href =
      `mailto:mssqueenshoes@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
  };

  const gold = "#B99A60";
  const ivory = "#E8D8B7";

  const resetForm = () => {
    setSubmitted(false);
    setImage(null);
    setPaymentFile(null);
    setForm({ name: "", phone: "", email: "", description: "" });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#080807] px-5 py-24 text-[#E8D8B7]">
        <div className="mx-auto max-w-2xl border border-[#B99A60]/50 bg-[#0D0D0B] p-8 text-center sm:p-14">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#B99A60] text-3xl text-[#B99A60]">
            ✓
          </div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#B99A60]">
            MSSQUEEN CUSTOM DESIGN
          </p>
          <h1 className="mb-5 font-serif text-3xl sm:text-4xl">
            Your Design Request Is Ready
          </h1>
          <p className="mb-8 leading-7 text-white/65">
            Your email application should open with your request.
            Please attach your shoe design picture manually, then send
            the email to MSSQUEEN so we can review your idea.
          </p>
          <button
            onClick={resetForm}
            className="border border-[#B99A60] px-7 py-3 text-sm text-[#E8D8B7] transition hover:bg-[#B99A60] hover:text-black"
          >
            Start Another Request
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#080807] text-[#E8D8B7]">
      {/* HERO */}
      <section className="grid min-h-[420px] border-b border-[#B99A60]/20 md:grid-cols-2">
        <div className="flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-16">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[#B99A60]">
            <span className="mr-3">—</span>
            MSSQUEEN CUSTOM DESIGN
            <span className="ml-3">—</span>
          </p>

          <h1 className="max-w-xl font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Bring Your Shoe
            <br />
            Idea to Life
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
            Have a shoe design you love? Upload a picture and send it to
            MSSQUEEN. We will review the design and let you know whether
            we can make it.
          </p>

          <div className="mt-6 h-px w-16 bg-[#B99A60]" />

          <p className="mt-4 font-serif text-xl italic text-[#B99A60] sm:text-2xl">
            Your Design. Our Craft.
          </p>
        </div>

        <div className="relative min-h-[300px] overflow-hidden bg-[#15130F] sm:min-h-[400px]">
          <img
            src="/images/mssqueen-custom-hero.jpg"
            alt="Elegant MSSQUEEN shoes and shoe box"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080807]/30 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <p className="font-serif text-sm italic tracking-widest text-[#E8D8B7]/80">
              Elegance in every step.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-5 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-center justify-center gap-4 sm:mb-12">
            <span className="h-px w-12 bg-[#B99A60]" />
            <h2 className="font-serif text-3xl sm:text-4xl">
              How It Works
            </h2>
            <span className="h-px w-12 bg-[#B99A60]" />
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-8">
            {[
              {
                icon: "↑",
                number: "1.",
                title: "Upload",
                text: "Send us a clear picture of the shoe design you want.",
              },
              {
                icon: "⌕",
                number: "2.",
                title: "We Review",
                text: "MSSQUEEN reviews the design and determines whether we can make it.",
              },
              {
                icon: "▱",
                number: "3.",
                title: "Choose Material",
                text: "We tell you which materials are available and the price for each option.",
              },
              {
                icon: "✓",
                number: "4.",
                title: "Confirm",
                text: "You choose the material you prefer and continue with your order.",
              },
            ].map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-[#B99A60] font-serif text-3xl text-[#B99A60] sm:h-16 sm:w-16">
                  {step.icon}
                </div>
                <p className="font-serif text-xl">{step.number}</p>
                <h3 className="mt-1 font-serif text-lg sm:text-xl">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[230px] text-sm leading-6 text-white/65">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN FORM */}
      <section className="px-4 pb-14 sm:px-8">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-sm border border-[#B99A60]/60 md:grid-cols-[32%_68%]">
          {/* Sketch image */}
          <div className="relative min-h-[300px] overflow-hidden border-b border-[#B99A60]/50 bg-[#15130F] md:min-h-full md:border-b-0 md:border-r">
            <img
              src="/images/mssqueen-design-sketch.jpg"
              alt="Sketching a custom women's shoe design"
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="font-serif text-2xl italic text-[#E8D8B7]">
                Made for your vision.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="p-5 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm">
                  Shoe Design Picture <span style={{ color: gold }}>*</span>
                </label>

                <label className="flex min-h-[115px] cursor-pointer flex-col items-center justify-center border border-[#B99A60]/70 bg-[#0B0B09] px-4 py-5 text-center transition hover:bg-[#17140E] sm:min-h-[125px]">
                  {preview ? (
                    <img
                      src={preview}
                      alt="Selected shoe design preview"
                      className="max-h-48 max-w-full object-contain"
                    />
                  ) : (
                    <>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="mb-3 h-8 w-8 text-[#B99A60]"
                        aria-hidden="true"
                      >
                        <rect x="3" y="4" width="18" height="16" rx="1" />
                        <circle cx="8.5" cy="9" r="1.5" />
                        <path d="m21 15-5-5L5 20" />
                      </svg>
                      <span className="text-sm">Upload your shoe design</span>
                      <span className="mt-2 text-xs text-white/45">
                        JPG, JPEG, PNG or WEBP
                      </span>
                    </>
                  )}

                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    onChange={handleImageChange}
                    className="sr-only"
                    required
                  />
                </label>

                {image && (
                  <p className="mt-2 break-all text-xs text-[#B99A60]">
                    Selected: {image.name}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Your Name <span style={{ color: gold }}>*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  required
                  placeholder="Enter your full name"
                  className="w-full border border-[#B99A60]/50 bg-[#0B0B09] px-3 py-3 text-sm text-[#E8D8B7] outline-none placeholder:text-white/30 focus:border-[#B99A60]"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm">
                    Phone Number <span style={{ color: gold }}>*</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    required
                    placeholder="+251..."
                    className="w-full border border-[#B99A60]/50 bg-[#0B0B09] px-3 py-3 text-sm text-[#E8D8B7] outline-none placeholder:text-white/30 focus:border-[#B99A60]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm">
                    Email <span className="text-white/50">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full border border-[#B99A60]/50 bg-[#0B0B09] px-3 py-3 text-sm text-[#E8D8B7] outline-none placeholder:text-white/30 focus:border-[#B99A60]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm">
                  Additional Details
                </label>
                <textarea
                  value={form.description}
                  onChange={(e) => updateField("description", e.target.value)}
                  rows={4}
                  placeholder="Tell us anything important about the design, color, style, heel, sole, or other details..."
                  className="w-full resize-y border border-[#B99A60]/50 bg-[#0B0B09] px-3 py-3 text-sm leading-6 text-[#E8D8B7] outline-none placeholder:text-white/30 focus:border-[#B99A60]"
                />
              </div>

              <div className="flex gap-3 border border-[#B99A60]/50 bg-[#11100D] p-4">
                <span className="text-xl text-[#B99A60]">ⓘ</span>
                <p className="text-xs leading-5 text-white/65 sm:text-sm">
                  <strong className="text-[#E8D8B7]">Please note:</strong>{" "}
                  Do not choose a material yet. MSSQUEEN will first review
                  your design and tell you whether it can be made. If it can
                  be made, we will provide the available material options and
                  their prices so you can choose.
                </p>
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 border border-[#B99A60] bg-transparent px-5 py-3 text-sm text-[#E8D8B7] transition hover:bg-[#B99A60] hover:text-[#080807] focus:outline-none focus:ring-2 focus:ring-[#B99A60] focus:ring-offset-2 focus:ring-offset-[#080807]"
              >
                Submit My Design Request
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* PAYMENT AND ORDER CONFIRMATION */}
      <section className="px-4 pb-8 sm:px-8">
        <div className="mx-auto max-w-6xl border-t border-[#B99A60]/70 pt-7">
          <div className="grid gap-8 md:grid-cols-[1.8fr_1fr] md:gap-12">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl">
                Payment &amp; Order Confirmation
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                A deposit is required before production begins. The deposit
                is normally 50% of the agreed price, but the required
                percentage may vary depending on the project. Payment terms,
                total price, and delivery timeframe will be agreed upon
                before production begins. After the agreement is confirmed,
                you can submit your payment confirmation.
              </p>

              <label className="mt-5 flex min-h-[85px] cursor-pointer items-center justify-center gap-4 border border-[#B99A60]/70 px-4 py-4 text-center transition hover:bg-[#17140E]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-8 w-8 shrink-0 text-[#B99A60]"
                  aria-hidden="true"
                >
                  <path d="M12 3v12m-5-5 5 5 5-5" />
                  <path d="M4 17v3h16v-3" />
                </svg>
                <span>
                  <span className="block text-sm">
                    Upload Payment Confirmation
                  </span>
                  <span className="mt-2 block text-xs text-white/45">
                    Transaction screenshot (JPG, PNG, or PDF)
                  </span>
                  {paymentFile && (
                    <span className="mt-2 block break-all text-xs text-[#B99A60]">
                      Selected: {paymentFile.name}
                    </span>
                  )}
                </span>
                <input
                  type="file"
                  accept="image/jpeg,image/png,application/pdf"
                  onChange={handlePaymentChange}
                  className="sr-only"
                />
              </label>
              <p className="mt-2 text-xs leading-5 text-white/40">
                File selection only: your payment confirmation is not
                uploaded or sent anywhere yet.
              </p>
            </div>

            <div className="border-t border-[#B99A60]/40 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <h3 className="mb-5 font-serif text-xl">The Process</h3>
              <ol className="space-y-5">
                {[
                  "Customer signs/agrees to the contract with the timeframe.",
                  "Customer pays the required deposit (normally 50%, but it can vary).",
                  "Customer uploads/sends transaction screenshot.",
                  "Production begins.",
                ].map((text, index) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B99A60] font-serif text-sm text-[#B99A60]">
                      {index + 5}
                    </span>
                    <p className="pt-1 text-sm leading-5 text-white/70">
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* DELIVERY NOTE */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 border-t border-[#B99A60]/30 pt-5 text-center sm:flex-row">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-7 w-7 shrink-0 text-[#B99A60]"
              aria-hidden="true"
            >
              <path d="M2 5h12v12H2zM14 9h4l4 4v4h-8z" />
              <circle cx="6" cy="19" r="2" />
              <circle cx="18" cy="19" r="2" />
            </svg>
            <p className="max-w-3xl text-xs leading-5 text-white/65 sm:text-sm">
              Customers outside Addis Ababa can have their order
              mailed/delivered outside Addis Ababa. Free delivery applies
              when you order above a specified amount.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
