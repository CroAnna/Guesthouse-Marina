import { faFacebook, faBloggerB } from "@fortawesome/free-brands-svg-icons";

export const footerBoxes = [
    {
        title: "useful_links",
        data: [
            {
                name: "weather_forecast",
                url: "https://www.accuweather.com/hr/hr/zamrsje/118687/weather-forecast/118687",
            },
            {
                name: "karlovac_city_tourist_board",
                url: "https://visitkarlovac.hr/",
            },
            {
                name: "tourist_board_of_karlovac_county",
                url: "https://visitkarlovaccounty.hr/",
            },
        ],
    },
    {
        title: "social_networks",
        data: [
            {
                name: "Booking",
                url: "https://www.booking.com/hotel/hr/studio-apartman-marina-karlovac.hr.html",
                icon: faBloggerB,
            },
            { name: "facebook", url: "https://www.facebook.com/marina.frklic", icon: faFacebook },
        ],
    },
    {
        title: "contact_us",
        data: [
            { name: "Zamršje 9", url: "/kontakt" },
            { name: "address_city_country", url: "/kontakt" },
            { name: "phone", url: "/kontakt" },
            { name: "E-mail: studioappmarina@gmail.com", url: "/kontakt" },
        ],
    },
];