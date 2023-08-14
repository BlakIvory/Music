import icons from "./icons"

const { MdOutlineLibraryMusic } =icons

export const SideMenu = [
    {
        path : 'mymusic',
        text : 'Cá Nhân',
        icons: <MdOutlineLibraryMusic  size={24}/>
    },
    {
        path : '',
        text : 'Khám phá',
        end :true,
        icons: <MdOutlineLibraryMusic  size={24}/>
    },
    {
        path : 'zing-chart',
        text : 'ZingChart',
        icons: <MdOutlineLibraryMusic size={24} />
    },
    {
        path : 'follow',
        text : 'Theo dõi',
        icons: <MdOutlineLibraryMusic  size={24}/>
    },
    
]