import { client } from "../../sanity/lib/client";

// Define the Product interface
export interface Products {
  title: string;
  price: number;
  stock: number;
  slug: {
    current: string;
  };
  imageUrl: string;
}

// Fetch function to get featured products with imageUrl
export const Aboutproduct = async (): Promise<Products[]> => {
  const query = `*[_type == "products" && slug.current in ["12", "13", "14"]]{
    title,
    price,
    stock,
    slug,
    "imageUrl": image.asset->url
  }`;

  try {
    const products: Products[] = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
