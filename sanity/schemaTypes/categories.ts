    // import { defineType } from "sanity";

    // export const categorySchema = defineType({
    //     name: 'categories',
    //     title: 'Categories',
    //     type: 'document',
    //     fields: [
    //         {
    //             name: 'title',
    //             title: 'Category Title',
    //             type: 'string',
    //         },
    //         {
    //             name: 'image',
    //             title: 'Category Image',
    //             type: 'image',
    //         },
    //         {
    //             title: 'Number of Products',
    //             name: 'products',
    //             type: 'number',
    //         }
    //     ],
    // });

    import { defineType } from "sanity";

    export const categorySchema = defineType({
        name: 'categories',
        title: 'Categories',
        type: 'document',
        fields: [
            {
                name: 'title',
                title: 'Category Title',
                type: 'string',
            },
            {
                name: 'image',
                title: 'Category Image',
                type: 'image',
            },
            {
                title: 'Number of Products',
                name: 'products',
                type: 'number',
            },
            {
                name: 'slug',
                title: 'Slug',
                type: 'slug',
                options: {
                    source: 'title', // Generates the slug from the title field
                    maxLength: 96,   // Sets a maximum length for the slug
                },
            }
        ],
    });
