import { createFileRoute } from '@tanstack/react-router'
import { PageHeader } from '@/components/header'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/_pages/locations')({
  component: LocationsPage,
})

// Location data - can be externalized if needed
const locationData = {
  name: 'Karigamombe Center',
  tagline: 'Goodbite, Good Vibes!',
  description:
    "We're at Karigamombe Center — corner of Samora Machel Avenue & Julius Nyerere Way, Harare CBD. Sit-in and takeaway available. Come through for Goodbite, Good Vibes!",
  address: {
    line1: 'Karigamombe Center',
    line2: 'Corner of Samora Machel Avenue',
    line3: '& Julius Nyerere Way',
    city: 'Harare CBD, Zimbabwe',
  },
  hours: {
    label: 'Open Daily',
    time: '08:00 – 21:00',
  },
  services: ['Sit-in', 'Takeaway'],
  contact: {
    phone: '+263 78 123 4567',
    email: 'hello@foodies.co.zw',
  },
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4238.408711693214!2d31.042886083412025!3d-17.82704083278533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5d8b01c384f%3A0xf7827f9045b50114!2s13th%20floor%20Karigamombe%20building%2C%20East%20wing!5e1!3m2!1sen!2szw!4v1768677283348!5m2!1sen!2szw',
  mapLink:
    'https://www.google.com/maps/place/13th+floor+Karigamombe+building,+East+wing/@-17.82704083278533,31.042886083412025,17z/data=!3m1!4b1!4m6!3m5!1s0x1931a5d8b01c384f:0xf7827f9045b50114!8m2!3d-17.82704083278533!4d31.042886083412025!16s%2Fg%2F11j8z3n5qh',
}

function LocationsPage() {
  return (
    <div className="flex flex-col bg-background text-foreground font-sans">
      {/* Page title section */}
      <PageHeader
        className="pt-20"
        eyebrow="Find Us"
        title="Our"
        accent="Location"
      />

      {/* Full-width Map Section */}
      <section className="relative w-full">
        {/* Map Container with overlaid info card on larger screens */}
        <div className="relative">
          {/* Google Maps Embed - Full Width */}
          <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
            <iframe
              src={locationData.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Foodies Location Map"
              className="w-full h-full"
            />
          </div>

          {/* Floating Info Card - Visible on larger screens */}
          <div className="hidden lg:block absolute top-8 right-8 w-[380px] bg-background/95 backdrop-blur-sm border border-border rounded-2xl shadow-2xl p-6 z-10">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">
                  Visit Us At
                </p>
                <h3 className="text-2xl font-display font-bold text-foreground">
                  {locationData.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {locationData.description}
              </p>
              <a
                href={locationData.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full mt-2">
                  <DirectionsIcon className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details Section */}
      <section className="bg-muted/30 border-t border-border">
        <div className="container mx-auto max-w-6xl px-4 py-12 lg:py-16">
          {/* Mobile Info Card */}
          <div className="lg:hidden mb-10 bg-background border border-border rounded-xl p-6 shadow-lg">
            <p className="text-xs font-semibold tracking-widest uppercase text-primary mb-1">
              Visit Us At
            </p>
            <h3 className="text-2xl font-display font-bold text-foreground mb-3">
              {locationData.name}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {locationData.description}
            </p>
            <a
              href={locationData.mapLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full">
                <DirectionsIcon className="mr-2 h-4 w-4" />
                Get Directions
              </Button>
            </a>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Address */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <LocationIcon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                  Address
                </h4>
                <p className="text-foreground font-medium leading-relaxed">
                  {locationData.address.line1}
                  <br />
                  {locationData.address.line2}
                  <br />
                  {locationData.address.line3}
                  <br />
                  <span className="text-muted-foreground">
                    {locationData.address.city}
                  </span>
                </p>
              </div>
            </div>

            {/* Hours & Services */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ClockIcon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                  Hours & Services
                </h4>
                <p className="text-foreground font-medium mb-1">
                  {locationData.hours.label}:{' '}
                  <span className="text-primary font-bold">
                    {locationData.hours.time}
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {locationData.services.map((service) => (
                    <span
                      key={service}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">
                  Contact Information
                </h4>
                <p className="text-foreground font-medium">
                  <a
                    href={`tel:${locationData.contact.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    Phone: {locationData.contact.phone}
                  </a>
                </p>
                <p className="text-foreground font-medium mt-1">
                  <a
                    href={`mailto:${locationData.contact.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    Email: {locationData.contact.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Ready to experience{' '}
              <span className="font-display font-bold text-primary">
                {locationData.tagline}
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={locationData.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg">
                  <DirectionsIcon className="mr-2 h-4 w-4" />
                  Get Directions
                </Button>
              </a>
              <a href="/menu">
                <Button size="lg">View Our Menu</Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Icon Components
function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  )
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
      />
    </svg>
  )
}

function DirectionsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
      />
    </svg>
  )
}
