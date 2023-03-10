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
                url: "https://www.booking.com/hotel/hr/studio-apartman-marina-karlovac.hr.html",
                icon: faBloggerB,
            },
            { name: "Facebook domaćina", url: "https://www.facebook.com/marina.frklic", icon: faFacebook },
        ],
    },
    {
        title: "Kontaktirajte nas",
        data: [
            { name: "Zamršje 9", url: "/kontakt" },
            { name: "47000 Karlovac, Croatia", url: "/kontakt" },
            { name: "Telephone: +385 98 284 532", url: "/kontakt" },
            { name: "E-mail: studioappmarina@gmail.com", url: "/kontakt" },
        ],
    },
];