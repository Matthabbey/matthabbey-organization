/**
 * Stock photography used for atmosphere. All images are from Pexels under the
 * Pexels licence (free to use, attribution appreciated). They show generic
 * software teams and are not photographs of Matthabbey staff, so alt text
 * must stay descriptive and never claim otherwise. Replace with real photos
 * of the team whenever possible; keep the same filenames and sizes.
 */
export interface Photo {
  jpg: string;
  webp: string;
  alt: string;
  width: number;
  height: number;
  credit: { name: string; url: string };
}

const base = "/images/photos";

function photo(name: string, width: number, height: number, alt: string, credit: Photo["credit"]): Photo {
  return { jpg: `${base}/${name}.jpg`, webp: `${base}/${name}.webp`, alt, width, height, credit };
}

export const photos = {
  hero: photo("hero", 1600, 900, "Developers working side by side at desks in an open-plan office", {
    name: "cottonbro studio",
    url: "https://www.pexels.com/photo/6804068/",
  }),
  approachA: photo("approach-a", 900, 1125, "Two programmers talking through code on a laptop", {
    name: "Mizuno K",
    url: "https://www.pexels.com/photo/12899168/",
  }),
  approachB: photo("approach-b", 1000, 700, "A developer writing code at a desk with two screens", {
    name: "Naboth Otieno",
    url: "https://www.pexels.com/photo/19805878/",
  }),
  row: [
    photo("row-1", 900, 1125, "Colleagues gathered around a computer reviewing a project", {
      name: "Gustavo Fring",
      url: "https://www.pexels.com/photo/5621958/",
    }),
    photo("row-2", 900, 1125, "Two women reviewing code together on a laptop", {
      name: "Christina Morillo",
      url: "https://www.pexels.com/photo/1181263/",
    }),
    photo("row-3", 900, 1125, "Hands typing code on a laptop keyboard", {
      name: "olia danilevich",
      url: "https://www.pexels.com/photo/4974912/",
    }),
  ],
} as const;

export const photoCredits: Photo[] = [photos.hero, photos.approachA, photos.approachB, ...photos.row];
