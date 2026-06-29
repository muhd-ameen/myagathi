import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Some photos have their subject anchored to an edge; center-cropping hides it.
 * Returns the object-position class to use for a given image path.
 */
export function imgPosition(src: string) {
  if (src.includes("sight-seeing") || src.includes("culture")) {
    return "object-bottom";
  }
  return "object-center";
}
