export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6127f01bc2326859effbbf6f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-gajcabnv",
                  apiId: "ce344d53-8956-4e7f-baa0-ca6a7c71dec7",
                },
                {
                  buildHookId: "6127f01b9fbe6b4c89b31d48",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-evcp49cm",
                  apiId: "868d0495-a215-48ea-9a8e-e6f37a73f18f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/daniel-lrschneider/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-evcp49cm.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
