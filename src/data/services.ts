export interface ServiceType {
  name: string;
  route: string;
  price: number;
  photoSource: string;
  description: string;
}

export const services: ServiceType[] = [
  {
    name: 'SlayedXShay Glam',
    route: 'slayedXShayGlam',
    price: 60,
    photoSource: `${process.env.PUBLIC_URL}/images/genericLipstickPhoto.jpg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris',
  },
  {
    name: 'Woke Up Like This',
    route: 'wokeUpLikeThis',
    price: 45,
    photoSource: `${process.env.PUBLIC_URL}/images/genericLipstickPhoto.jpg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris',
  },
  {
    name: 'Ultimate Glam',
    route: 'ultimateGlam',
    price: 80,
    photoSource: `${process.env.PUBLIC_URL}/images/genericLipstickPhoto.jpg`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris',
  },
];

export const extras = [
  {
    name: 'Lashes',
    price: 10,
  },
  {
    name: 'Brows',
    price: 15,
  },
  {
    name: 'Eye Shadow',
    price: 20,
  },
  {
    name: 'Cut Crease Eye Shadow',
    price: 25,
  },
  {
    name: 'Glitter',
    price: 5,
  },
];
