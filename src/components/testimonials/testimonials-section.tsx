'use client';

import { StarRating } from './star-rating';
import { TestimonialCard } from './testimonial-card';
import { ZimbabweFlagIcon } from '../icons';

const testimonials = [
  {
    id: 1,
    name: 'Marcus Chen',
    role: 'Food Blogger @ TasteBuds',
    avatar: '/assets/review-1.webp',
    review:
      "Best burgers in town, hands down! The patties are perfectly seasoned and the buns are always fresh. My family orders from here every weekend.",
    rating: 5,
    date: 'Dec 1, 2025',
  },
  {
    id: 2,
    name: 'Sofia Rodriguez',
    role: 'Regular Customer',
    avatar: '/assets/review-2.webp',
    review:
      "The delivery is always on time and the food arrives hot. Their chicken wings are absolutely addictive - crispy on the outside, juicy inside!",
    rating: 5,
    date: 'Nov 28, 2025',
  },
  {
    id: 3,
    name: 'James Wilson',
    role: 'Local Food Critic',
    avatar: '/assets/review-3.jpg',
    review:
      "I've tried countless fast food joints, but Foodies stands out. Fresh ingredients, generous portions, and consistent quality every single time.",
    rating: 5,
    date: 'Nov 15, 2025',
  },
  {
    id: 4,
    name: 'Emma Thompson',
    role: 'Office Manager @ TechCorp',
    avatar: '/assets/review-4.jpg',
    review:
      "We order catering for our team meetings and everyone loves it! The variety is great and they accommodate all dietary restrictions perfectly.",
    rating: 4,
    date: 'Nov 10, 2025',
  },
  {
    id: 5,
    name: 'Olivia Park',
    role: 'Busy Mom of 3',
    avatar: '/assets/review-4.jpg',
    review:
      "When I don't have time to cook, Foodies saves the day. Kids love the chicken nuggets and I love that they use quality ingredients.",
    rating: 5,
    date: 'Nov 5, 2025',
  },
  {
    id: 6,
    name: 'Lisa Chang',
    role: 'Fitness Enthusiast',
    avatar: '/assets/review-3.jpg',
    review:
      "Their grilled options are fantastic for when I want something tasty but relatively healthy. The portion sizes are perfect and prices are fair.",
    rating: 5,
    date: 'Oct 28, 2025',
  },
];

export function TestimonialsSection() {
  const displayedTestimonials = testimonials.slice(0, 6);

  return (
    <section className="relative bg-background py-16 sm:py-24 lg:py-32 px-4 overflow-hidden">
      {/* Subtle grid pattern background */}
      <div
        className="z-1 absolute opacity-5 inset-0 hidden xl:block"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px)',
          backgroundSize: '374px 24px',
        }}
      />

      {/* Food doodle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/doodle.svg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center z-20 relative">
        {/* Rating Badge */}
        <div className="flex flex-col items-center gap-1 mb-6">
          <StarRating rating={5} />
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-primary">Best in Town</p>
            <ZimbabweFlagIcon className="size-4" />
          </div>
          <p className="text-xs font-medium text-foreground/50">
            2,500+ happy customers
          </p>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
          <span className="relative inline-block">
            <span
              className="absolute inset-0 bg-primary origin-left rotate-1"
              style={{ transform: 'skewX(-4deg)' }}
            />
            <span className="relative z-10 px-2">Loved</span>
          </span>{' '}
          <span>by Foodies.</span>
          <br />
          <span>Made for You.</span>
        </h2>

        <p className="mt-6 text-lg text-foreground/50 text-balance max-w-md mx-auto">
          Join thousands of satisfied customers who have made us their go-to spot
          for delicious, fresh fast food.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-4 mt-12 max-w-7xl px-1 md:px-8 xl:px-0 mx-auto relative z-10"
      >
        {displayedTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{ animationDelay: `${testimonial.id * 100}ms` }}
          >
            <TestimonialCard {...testimonial} />
          </div>
        ))}
      </div>


    </section>
  );
}
