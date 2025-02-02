// fetch.ts
import { client } from "../../sanity/lib/client";

// Fetch a single product by slug
export const fetchProductBySlug = async (slug: string) => {
  const query = `*[_type == "products" && slug.current == $slug]{
  title,
  price,
  stock,
  slug,
  "imageUrl": image.asset->url,
  description,
  category->{
    title,
    description,
    "imageUr": image.asset->url,
    "categorySlug": slug.current
  }
}
`;

  try {
    console.log("Fetching product with slug:", slug);
    const product = await client.fetch(query, { slug });
    return product; // Return the fetched product with category and its products
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null; // Return null in case of an error
  }
};

