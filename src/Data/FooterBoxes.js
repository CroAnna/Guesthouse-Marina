import { faFacebook, faBloggerB } from "@fortawesome/free-brands-svg-icons";

export const footerBoxes = [
    {
        title: "Korisni linkovi",
        data: [
            {
                name: "Vremenska prognoza",
                url: "https://www.accuweather.com/hr/hr/zamrsje/118687/weather-forecast/118687",
            },
            {
                name: "Turistička zajednica grada Karlovca",
                url: "https://visitkarlovac.hr/",
            },
            {
                name: "Turistička zajednica karlovačke županije",
                url: "https://visitkarlovaccounty.hr/",
            },
        ],
    },
    {
        title: "Društvene mreže",
        data: [
            {
                name: "Booking",
                url: "https://www.booking.com/hotel/hr/studio-apartman-marina-karlovac.hr.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaGWIAQGYARC4ARfIAQ_YAQHoAQH4AQuIAgGoAgO4ApHel6AGwAIB0gIkMzExMzJjNzAtODQ3ZC00NmJmLTllNzAtMjlmMGRmOWM5Mzc32AIG4AIB&sid=b5ea7b1881c645d120bc22d69b0083f2&all_sr_blocks=965761001_369076904_2_0_0;checkin=2023-03-07;checkout=2023-03-10;dest_id=-84298;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=965761001_369076904_2_0_0;hpos=1;matching_block_id=965761001_369076904_2_0_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=965761001_369076904_2_0_0__13127;srepoch=1678110490;srpvid=8a30610c83b60446;type=total;ucfs=1&#hotelTmpl",
                icon: faBloggerB,
            },
            { name: "Facebook", url: "https://www.google.com/", icon: faFacebook },
        ],
    },
    {
        title: "Kontaktirajte nas",
        data: [
            { name: "Zamrsje 9", url: "/kontakt" },
            { name: "47000 Karlovac, Croatia", url: "/kontakt" },
            { name: "Telephone: +385 98 284 532", url: "/kontakt" },
            { name: "E-mail: studioappmarina@gmail.com", url: "/kontakt" },
        ],
    },
];