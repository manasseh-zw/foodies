import { StarRating } from './star-rating';

interface TestimonialCardProps {
  name: string;
  role: string;
  avatar: string;
  review: string;
  rating: number;
  date: string;
}

export function TestimonialCard({
  name,
  role,
  avatar,
  review,
  rating,
  date,
}: TestimonialCardProps) {
  return (
    <div className="bg-card shadow-sm border border-foreground/10 rounded-lg w-full shrink-0 h-fit flex flex-col gap-6 justify-between p-4 md:p-6">
      <div className="flex flex-col items-start gap-1">
        <StarRating rating={rating} />

        <div className="flex items-center gap-4 mt-4">
          <div className="size-10 aspect-square rounded-full relative overflow-hidden">
            <img
              alt={`${name} profile`}
              loading="lazy"
              decoding="async"
              className="object-cover grayscale object-top rounded-full absolute inset-0 w-full h-full"
              src={avatar}
            />
          </div>
          <div>
            <span className="block font-medium text-sm md:text-base text-foreground">
              {name}
            </span>
            <span className="block text-foreground/50 text-xs md:text-sm font-medium">
              {role}
            </span>
          </div>
        </div>
      </div>

      <span className="block text-sm md:text-base text-foreground/70">
        {review}
      </span>

      <p className="text-sm text-foreground">
        Reviewed <span className="opacity-50"> <span className="text-foreground px-1">•</span> {date}</span>
      </p>
    </div>
  );
}
