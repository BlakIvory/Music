import icons from "./icons"

const { MdOutlineLibraryMusic,
    FaChartPie,
    TbChartArcs3,
    MdOutlineFeed } =icons

export const SideMenu = [
  {
    path: "myself",
    text: "Cá Nhân",
    icons: <MdOutlineLibraryMusic size={24} />,
  },
  {
    path: "home",
    text: "Khám phá",

    icons: <TbChartArcs3 size={24} />,
  },
  // {
  //   path: "",
  //   text: "ZingChart",
  //   end: true,
  //   icons: <FaChartPie size={24} />,
  // },
  // {
  //   path: "follow",
  //   text: "Theo dõi",
  //   icons: <MdOutlineFeed size={24} />,
  // },
];