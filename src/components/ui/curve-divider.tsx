import { cn } from "@/lib/utils";

interface CurveDividerProps {
  /**
   * The color of the curve. Supports hex codes (e.g., "#fff") 
   * or Tailwind fill classes (e.g., "fill-white").
   */
  color?: string;
  /**
   * If true, flips the curve vertically.
   * By default, it curves down from the top.
   * If flipped, it curves up from the bottom.
   */
  flip?: boolean;
  /**
   * Additional classes for the container.
   */
  className?: string;
  /**
   * Height of the divider.
   */
  height?: number | string;
}

/**
 * A decorative curved divider component.
 * Use it to create smooth transitions between sections.
 */
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
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="block w-full h-full"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          fill={isHexOrRgb ? color : undefined}
          className={cn("transition-colors duration-200", !isHexOrRgb ? color : "")}
        ></path>
      </svg>
    </div>
  );
};
