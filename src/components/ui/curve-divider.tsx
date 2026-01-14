import { cn } from "@/lib/utils";

interface CurveDividerProps {
  color?: string;
  flip?: boolean;
  className?: string;
  height?: number | string;
}

export const CurveDivider = ({
  color = "fill-white",
  flip = false,
  className,
  height = 60,
}: CurveDividerProps) => {
  const isHexOrRgb = color.startsWith("#") || color.startsWith("rgb") || color.startsWith("hsl");

  return (
    <div
      className={cn(
        "w-full overflow-hidden leading-0 pointer-events-none relative z-10",
        flip ? "-scale-y-100" : "",
        className
      )}
      style={{ height }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
        className="block w-full h-full"
      >
        <path
          d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"
          fill={isHexOrRgb ? color : undefined}
          className={cn("transition-colors duration-200", !isHexOrRgb ? color : "")}
        />
      </svg>
    </div>
  );
};
