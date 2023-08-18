import icons from "./icons"

const { MdOutlineLibraryMusic,
    FaChartPie,
    TbChartArcs3,
    MdOutlineFeed } =icons

export const SideMenu = [
    {
        path : 'home',
        text : 'Cá Nhân',
        icons: <MdOutlineLibraryMusic  size={24}/>
    },
    {
        path : '',
        text : 'Khám phá',
        end :true,
        icons: <TbChartArcs3  size={24}/>
    },
    {
        path : 'zing-chart',
        text : 'ZingChart',
        icons: <FaChartPie size={24} />
    },
    {
        path : 'follow',
        text : 'Theo dõi',
        icons: <MdOutlineFeed  size={24}/>
    },
    
]