export default [
  {
    items: [
      {
        title: "Docs Home",
        path: "/docs",
        icon: "far fa-file-alt",
      },
      {
        doc: "introduction",
        file: (): Promise<string> => import("./getting-started/introduction/index.md"),
      },
      {
        doc: "core-concepts",
        file: (): Promise<string> => import("./getting-started/core-concepts/index.md"),
      },
    ],
  },
  {
    title: "Essentials",
    description: "Learn how to setup your Factor app",
    boxIcon: "quick",
    items: [
      {
        title: "Installation",
        doc: "install",
        file: (): Promise<string> => import("./essentials/install/index.md"),
      },
      {
        doc: "upgrading",
        file: (): Promise<string> => import("./essentials/upgrading/index.md"),
      },
      {
        doc: "before-you-code",
        file: (): Promise<string> => import("./essentials/before-you-code/index.md"),
      },
      {
        doc: "files-and-folders",
        file: (): Promise<string> => import("./essentials/files-and-folders/index.md"),
      },
    ],
  },
  {
    title: "Integrations",
    description: "Using popular tools and services with Factor",
    boxIcon: "quick",
    items: [
      {
        doc: "mongo-atlas",
        file: (): Promise<string> => import("./integrations/mongo-atlas/index.md"),
      },
      {
        doc: "amazon-s3",
        file: (): Promise<string> => import("./integrations/amazon-s3/index.md"),
      },
      {
        doc: "mailgun",
        file: (): Promise<string> => import("./integrations/mailgun/index.md"),
      },
    ],
  },
]