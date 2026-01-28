import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import * as React from 'react'

export const Route = createFileRoute('/_pages/contact')({
  component: ContactPage,
})

const FOODIES_EMAIL = 'karigamombe@foodieszim.co.zw'
const FOODIES_PHONE = '+263770010502'

function ContactPage() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Build the mailto link with form data
    const subject = `Contact from ${formData.firstName} ${formData.lastName}`
    const body = `Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`

    const mailtoLink = `mailto:${FOODIES_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    // Open the user's email client
    window.location.href = mailtoLink
  }

  return (
    <div className="flex flex-col bg-background text-foreground">
      {/* pt-20 accounts for fixed navbar height */}
      <main className="flex-1 pt-24">
        <div className="relative isolate">
          <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
            <div className="relative px-6 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:static lg:px-8 lg:pt-32 lg:pb-32">
              <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-muted/40 ring-1 ring-border lg:w-1/2">
                  {/* Doodle background pattern - consistent with site design */}
                  <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                      backgroundImage: 'url(/assets/doodle.svg)',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  />
                </div>
                <h2 className="text-4xl font-bold tracking-tight text-pretty sm:text-5xl text-foreground">
                  Get in touch
                </h2>
                <p className="mt-6 text-lg/8 text-foreground/80">
                  Have a question, feedback, or just want to say hello? We'd
                  love to hear from you! Drop us a message and we'll get back to
                  you as soon as possible.
                </p>
                <dl className="mt-10 space-y-4 text-base/7 text-foreground/90">
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <svg
                        className="h-7 w-6 text-muted-foreground/70"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                        />
                      </svg>
                    </dt>
                    <dd>
                      15 Karigamombe Shop
                      <br />
                      Corner of Samora Machel Ave & Julius Nyerere Way
                      <br />
                      Harare CBD, Zimbabwe
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <svg
                        className="h-7 w-6 text-muted-foreground/70"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                        />
                      </svg>
                    </dt>
                    <dd>
                      <a
                        className="hover:text-foreground transition-colors"
                        href={`tel:${FOODIES_PHONE}`}
                      >
                        +263 77 001 0502
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-x-4">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <svg
                        className="h-7 w-6 text-muted-foreground/70"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                        />
                      </svg>
                    </dt>
                    <dd>
                      <a
                        className="hover:text-foreground transition-colors"
                        href={`mailto:${FOODIES_EMAIL}`}
                      >
                        {FOODIES_EMAIL}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="px-6 pt-16 pb-16 sm:pt-20 sm:pb-20 lg:px-8 lg:pt-32 lg:pb-32"
            >
              <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm/6 font-semibold"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border border-border bg-background px-3.5 py-2 text-base text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm/6 font-semibold"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border border-border bg-background px-3.5 py-2 text-base text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-semibold"
                    >
                      Your email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="block w-full rounded-md border border-border bg-background px-3.5 py-2 text-base text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm/6 font-semibold"
                    >
                      Phone number (optional)
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="block w-full rounded-md border border-border bg-background px-3.5 py-2 text-base text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm/6 font-semibold"
                    >
                      Message
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="How can we help you?"
                        className="block w-full rounded-md border border-border bg-background px-3.5 py-2 text-base text-foreground shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8 flex justify-end">
                  <Button type="submit">Send message</Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground text-right">
                  Clicking send will open your email client
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
