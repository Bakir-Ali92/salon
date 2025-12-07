export interface Review {
  id: number;
  name: string;
  rating: number; // 1 to 5
  content: string;}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Fatma Al Balushi",
    rating: 5,
    content: "Absolutely the best salon in Muscat. The Angel Glow cream cleared my dark spots in just two weeks. Highly recommended!",
    },
  {
    id: 2,
    name: "Maryam Al Zadjali",
    rating: 5,
    content: "I love the LS Beauty Hair Oil. My hair feels so much thicker and healthier now. True luxury service.",
   },
  {
    id: 3,
    name: "Noor Al Harthy",
    rating: 4,
    content: "Elegant atmosphere and very professional staff. The products are authentic and gave me amazing results.",
    },
  {
    id: 4,
    name: "Aisha Al Hinai",
    rating: 3,
    content: "Finally found a product that suits my skin type. Fast delivery and excellent customer support.",
    }
];

export function getReviews() {
  return reviews;
}