import { client } from "../../sanity/lib/client";

// Fetch function to get featured products with imageUrl
export const fetchFeaturedProducts = async () => {
    const query = `*[_type == "products" && slug.current in ["rose-luxe-armchair", "library-stool-chair","ivory-charm","citrus-edge"]]{
      title,
      price,
      stock,
      slug,
      "imageUrl": image.asset->url  // Alias the image URL to imageUrl
    }`;
  
    try {
      const products = await client.fetch(query); // Fetch the data using GROQ query
      return products; // Return the fetched products
    } catch (error) {
      console.error("Error fetching products:", error);
      return []; // Return an empty array in case of an error
    }
  };
  