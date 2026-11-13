export const siteConfig = {
  name: "Pixel Patterns",
  url: "https://pixel-patterns-mauve.vercel.app/",
  description:
    "Open-source collection of ready-to-use, reusable components built with Tailwind CSS. Simply copy and paste into your next project for seamless integration. Perfect for developers looking to enhance their workflow with high-quality, customizable UI snippets.",
  ogImage: {
    url: "https://i.pinimg.com/originals/c9/ce/49/c9ce490ba57ba69c66688381be6937aa.jpg",
    width: 1200,
    height: 730,
  },
  repository: {
    url: "https://github.com/Luancss/pixel-patterns",
    apiUrl: "https://api.github.com/repos/Luancss/pixel-patterns",
  },
  author: {
    name: "Luancss",
    githubUrl: "https://github.com/Luancss",
    avatarUrl: "https://avatars.githubusercontent.com/u/104950187?v=4",
  },
};

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: siteConfig.name,
  description:
    "Pixel Patterns simplifies the integration of CSS and Tailwind components into your projects. Copy ready-to-use components with one click and contribute your own.",
  applicationCategory: "WebApplication",
  operatingSystem: "All",
  softwareVersion: "0.1.0",
  isAccessibleForFree: true,
  url: siteConfig.url,
  license: "https://opensource.org/licenses/MIT",
  creator: {
    "@type": "Organization",
    name: siteConfig.author.name,
    url: siteConfig.url,
  },
  featureList: [
    "One-click copy for CSS and Tailwind components",
    "Open-source contribution support",
    "Expandable component library",
  ],
};
