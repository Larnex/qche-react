import { useTranslation } from "react-i18next";

export default function Navigation() {
  const { t } = useTranslation();

  let navigation = [
    {
      id: "section1",
      name: t("navbar_1"),
      slug: t("navbar_1"),
    },
    {
      id: "section2",
      name: t("navbar_2"),
      slug: t("navbar_2"),
    },
    {
      id: "section3",
      name: t("navbar_3"),
      slug: t("navbar_3"),
    },
    {
      id: "section4",
      name: t("navbar_4"),
      slug: t("navbar_4"),
    },
    // {
    //   id: "section5",
    //   name: t("navbar_5"),
    //   slug: t("navbar_5"),
    // },
    {
      id: "section6",
      name: t("navbar_6"),
      slug: t("navbar_6"),
    },
    {
      id: "section7",
      name: t("navbar_7"),
      slug: t("navbar_7"),
    },
    {
      id: "section8",
      name: t("navbar_8"),
      slug: t("navbar_8"),
    },
  ];

  console.log(navigation);

  return navigation;
}

// export default navigation;
