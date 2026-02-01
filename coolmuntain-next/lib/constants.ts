export const BASE_PATH = "/Coolmountain"

export const COMPANY = {
    name: "Cool Mountain Transport",
    tagline: "Reliable Freight. Professional Drivers. Nationwide Coverage.",
    contact: {
        dispatchPhone: "208-475-2500",
        dispatchPhoneDisplay: "(208) 475-2500",
        fax: "208-906-8585",
        careersPhone: "208-475-5773",
        careersContactName: "Joan",
        email: "joan@coolmtntransport.com",
        address: {
            street: "1428 Madison Avenue",
            city: "Nampa",
            state: "Idaho",
            zip: "83687"
        },
        mailingAddress: {
            poBox: "P.O. Box 48",
            city: "Nampa",
            state: "ID",
            zip: "83651"
        }
    },
    socials: {
        facebook: "https://www.facebook.com/coolmtntransport",
        linkedin: "https://www.linkedin.com/company/cool-mountain-transport/",
    },
    externalLinks: {
        driverApp: "https://intelliapp.driverapponline.com/c/coolmountaintransport?uri_b=ia_coolmountaintransport_1398127899"
    },
    meta: {
        usdot: "28965",
        mc: "654322"
    }
}

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    {
        label: "Services",
        href: "/services",
        children: [
            { label: "Dry Van", href: "/services/dry-van" },
            { label: "Refrigerated", href: "/services/refrigerated" },
            { label: "Expedited", href: "/services/expedited" },
        ]
    },
    { label: "Join Our Team", href: "/join-our-team" },
    { label: "Equipment", href: "/equipment" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
]

export const SERVICES = [
    {
        id: "dry-van",
        title: "Dry Van & General Freight",
        shortTitle: "Dry Van",
        href: "/services/dry-van",
        description: "Reliable nationwide capacity for your standard shipping needs.",
        details: "Our fleet of modern 53-foot dry vans provides secure and weather-proof transportation for a wide range of goods—from consumer electronics and retail merchandise to non-perishable food and building materials. We offer both drop-trailer programs and live loading to fit your schedule.",
        features: [
            "Real-time GPS tracking on all trailers",
            "Air-ride suspension to reduce cargo damage",
            "Nationwide coverage (48 states)"
        ],
        icon: "Truck"
    },
    {
        id: "refrigerated",
        title: "Temperature-Controlled Logistics",
        shortTitle: "Refrigerated",
        href: "/services/refrigerated",
        description: "Maintaining the perfect environment for your sensitive cargo.",
        details: "Cool Mountain Transport specializes in the transport of temperature-sensitive freight. Whether you are shipping fresh produce, frozen goods, or pharmaceuticals, our state-of-the-art reefer units maintain precise temperatures from -20°F to +70°F throughout the entire journey.",
        features: [
            "Food Safety Modernization Act (FSMA) compliant",
            "Remote temperature monitoring and downloadable logs",
            "24/7 dispatch support for time-sensitive deliveries"
        ],
        icon: "Thermometer"
    },
    {
        id: "expedited",
        title: "Expedited & Team Service",
        shortTitle: "Expedited",
        href: "/services/expedited",
        description: "When \"on time\" isn't enough, and you need it there yesterday.",
        details: "For time-critical shipments, our expedited team service offers non-stop transport to ensure your freight arrives as quickly as safely possible. Our team drivers alternate shifts to keep the wheels moving 24/7, significantly reducing transit times for high-priority loads.",
        features: [
            "Team drivers for continuous movement",
            "Guaranteed delivery windows available",
            "Real-time satellite tracking and updates"
        ],
        icon: "Zap"
    }
]

export const NEWS_ITEMS = [
    {
        id: 1,
        title: "Cool Mountain Transport Announces Richard Coyle as New CEO",
        date: "Dec 2021",
        category: "Press Release",
        summary: "Richard Coyle appointed as the new Chief Executive Officer, bringing extensive leadership experience to guide the company's growth.",
        link: "https://www.coolmountaintransport.com/wp-content/uploads/2021/12/Cool-Mountain-Transport-Announces-Richard-Coyle-as-New-CEO.pdf",
        image: `${BASE_PATH}/assets/images/logo-transparent.png`,
        external: true
    },
    {
        id: 2,
        title: "Newest Member of EPA’s SmartWay Program",
        date: "Sep 2021",
        category: "Sustainability",
        summary: "Cool Mountain Transport joins EPA’s SmartWay Program, demonstrating a strong commitment to environmental sustainability and freight efficiency.",
        link: "https://www.coolmountaintransport.com/wp-content/uploads/2021/09/Cool-Mountain-Transport-Newest-Member-of-SmartWay.pdf",
        image: `${BASE_PATH}/assets/images/smartway-logo.png`,
        external: true,
        invertImage: true
    },
    {
        id: 3,
        title: "Driver Photo Contest Results",
        date: "2021",
        category: "Community",
        summary: "Celebrating our dedicated drivers through a company-wide photo contest. See the winners and their views from the road.",
        link: "https://www.coolmountaintransport.com/driver-photo-contest/",
        image: `${BASE_PATH}/assets/images/logo-transparent.png`,
        external: true
    },
    {
        id: 4,
        title: "Off-Spec Solutions Re-brands to Cool Mountain Transport",
        date: "Jul 2020",
        category: "Company News",
        summary: "A fresh start with a new name that reflects our focus on employees and expanded market presence across the US.",
        link: "https://www.coolmountaintransport.com/wp-content/uploads/2020/07/Press-Release-Cool-Mountain-Transport-Delivers-for-America.pdf",
        image: `${BASE_PATH}/assets/images/logo-transparent.png`,
        external: true
    },
    {
        id: 5,
        title: "CVF Invests in Cool Mountain Transport",
        date: "Sep 2018",
        category: "Investment",
        summary: "Common Value for the Future (CVF) Capital Partners announces a significant investment to support company growth.",
        link: "http://cvfcapitalpartners.com/blog/cvf-invests-in-off-spec-solutions/",
        image: `${BASE_PATH}/assets/images/logo-transparent.png`,
        external: true
    },
    {
        id: 6,
        title: "CVF Capital Invests $6 Million in Idaho Trucking Firm",
        date: "Sep 2018",
        category: "Financial",
        summary: "Sacramento Business Journal reports on the major investment deal that helps fuel our fleet expansion.",
        link: "https://www.bizjournals.com/sacramento/news/2018/09/21/davis-based-cvf-capital-invests-6-million-in-idaho.html",
        image: `${BASE_PATH}/assets/images/logo-transparent.png`,
        external: true
    }
]
