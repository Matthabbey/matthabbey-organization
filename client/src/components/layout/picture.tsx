import type { Photo } from "@/data/photos";
import { cn } from "@/lib/utils";

interface PictureProps {
  photo: Photo;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}

/** Responsive `<picture>` for a stock photo: WebP with JPG fallback, fixed dimensions, lazy by default. */
export function Picture({ photo, className, imgClassName, priority = false, sizes }: PictureProps) {
  return (
    <picture className={cn("block", className)}>
      <source srcSet={photo.webp} type="image/webp" sizes={sizes} />
      <img
        src={photo.jpg}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
        sizes={sizes}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </picture>
  );
}
