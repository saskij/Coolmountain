import { Container } from "@/components/ui/Container"
import { HeroSection } from "@/components/sections/HeroSection"
import { Reveal } from "@/components/ui/Reveal"
import { Button } from "@/components/ui/Button"
import { COMPANY, BASE_PATH } from "@/lib/constants"
import { HeroButtons } from "@/components/sections/HeroButtons"
import Link from "next/link"
import NextImage from "next/image"

const NEWS_items = [
    {
        title: "Cool Mountain Transport Announces Richard Coyle as New CEO",
        date: "Dec 2021",
        category: "Press Release",
        categoryColor: "text-red-600 bg-red-100",
        description: "Richard Coyle appointed as the new Chief Executive Officer, bringing extensive leadership experience to guide the company's growth.",
        link: "https://www.coolmountaintransport.com/wp-content/uploads/2021/12/Cool-Mountain-Transport-Announces-Richard-Coyle-as-New-CEO.pdf",
        image: `${BASE_PATH}/assets/images/logo-transparent.png`,
        imageClass: "opacity-80",
        bgClass: "bg-slate-100"
    },
    {
        title: "Newest Member of EPA’s SmartWay Program",
        date: "Sep 2021",
        category: "Sustainability",
        categoryColor: "text-green-600 bg-green-100",
        description: "Cool Mountain Transport joins EPA’s SmartWay Program, demonstrating a strong commitment to environmental sustainability and freight efficiency.",
        link: "https://www.coolmountaintransport.com/wp-content/uploads/2021/09/Cool-Mountain-Transport-Newest-Member-of-SmartWay.pdf",
        image: `${BASE_PATH}/assets/images/smartway-logo.png`,
        imageClass: "filter brightness-0 invert",
        bgClass: "bg-slate-800"
    },
    {
        title: "Driver Photo Contest Results",
        date: "2021",
        category: "Community",
        categoryColor: "text-blue-600 bg-blue-100",
        description: "Celebrating our dedicated drivers through a company-wide photo contest. See the winners and their views from the road.",
        link: "https://www.coolmountaintransport.com/driver-photo-contest/",
        image: `${BASE_PATH}/assets/images/logo-transparent.png`,
        imageClass: "opacity-80",
        bgClass: "bg-slate-100"
    },
    {
        title: "Off-Spec Solutions Re-brands to Cool Mountain Transport",
        date: "Jul 2020",
        category: "Company News",
        categoryColor: "text-red-600 bg-red-100",
        description: "A fresh start with a new name that reflects our focus on employees and expanded market presence across the US.",
        link: "https://www.coolmountaintransport.com/wp-content/uploads/2020/07/Press-Release-Cool-Mountain-Transport-Delivers-for-America.pdf",
        image: `${BASE_PATH}/assets/images/logo-transparent.png`,
        imageClass: "opacity-80",
        bgClass: "bg-slate-100"
    },
    {
        title: "CVF Invests in Cool Mountain Transport",
        date: "Sep 2018",
        category: "Investment",
        categoryColor: "text-amber-600 bg-amber-100",
        description: "Common Value for the Future (CVF) Capital Partners announces a significant investment to support company growth.",
        link: "http://cvfcapitalpartners.com/blog/cvf-invests-in-off-spec-solutions/",
        image: `${BASE_PATH}/assets/images/logo-transparent.png`,
        imageClass: "opacity-80",
        bgClass: "bg-slate-100"
    },
    {
        title: "CVF Capital Invests $6 Million in Idaho Trucking Firm",
        date: "Sep 2018",
        category: "Financial",
        categoryColor: "text-amber-600 bg-amber-100",
        description: "Sacramento Business Journal reports on the major investment deal that helps fuel our fleet expansion.",
        link: "https://www.bizjournals.com/sacramento/news/2018/09/21/davis-based-cvf-capital-invests-6-million-in-idaho.html",
        image: `${BASE_PATH}/assets/images/logo-transparent.png`,
        imageClass: "opacity-80",
        bgClass: "bg-slate-100"
    },
    {
        title: "MB Business Capital Announces $11.88 Million Credit Facility",
        date: "Mar 2018",
        category: "Financial",
        categoryColor: "text-amber-600 bg-amber-100",
        description: "New senior credit facility secured to support ongoing operations and future expansion plans.",
        link: "http://links.mail1.spopessentials1.com/servlet/MailView?ms=MjQ5NzgyNDkS1&r=ODY0NDMwOTk5ODkS1&j=MTQwMzY2ODQ0MAS2&mt=1&rt=0",
        image: `${BASE_PATH}/assets/images/logo-transparent.png`,
        imageClass: "opacity-80",
        bgClass: "bg-slate-100"
    }
]

export default function NewsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="News"
                subtitle="Updates from the Cool Mountain Transport team."
                height="medium"
                backgroundImage="/assets/images/News-hero.jpg"
                backgroundVideo=""
            >
                <HeroButtons className="mt-8" />
                <div className="mt-8 text-xs font-semibold text-white/80 flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2">
                        <span>USDOT #28965</span>
                        <span className="opacity-60">•</span>
                        <span>MC #654322</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="h-12 w-auto relative">
                            <NextImage
                                src={`${BASE_PATH}/assets/images/smartway-logo.png`}
                                alt="SmartWay Partner"
                                width={150}
                                height={80}
                                className="h-full w-auto object-contain"
                            />
                        </div>
                        <span>SmartWay Partner</span>
                    </div>
                </div>
            </HeroSection>

            <section className="relative overflow-hidden bg-slate-50 py-20">
                {/* Background Elements */}
                <div className="pointer-events-none absolute inset-0 opacity-5">
                    <div className="absolute -right-24 top-10 h-64 w-64 rotate-12 rounded-full bg-slate-100/70"></div>
                    <div className="absolute left-12 top-24 h-32 w-32 rotate-12 border border-slate-200/70"></div>
                    <div className="absolute bottom-10 left-1/3 h-40 w-1 rotate-12 bg-red-500/10"></div>
                </div>

                <Container>
                    <div className="space-y-12">
                        <Reveal direction="up">
                            <div>
                                <h2 className="text-3xl font-black uppercase text-slate-900">
                                    LATEST <span className="font-light text-slate-700">NEWS</span>
                                </h2>
                                <div className="mt-2 h-1 w-28 bg-gradient-to-r from-slate-900 to-transparent"></div>
                            </div>
                        </Reveal>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {NEWS_items.map((item, index) => (
                                <Reveal key={index} direction="up" delay={index * 0.1}>
                                    <div className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
                                        <div className={`aspect-video w-full flex items-center justify-center p-8 ${item.bgClass}`}>
                                            <img
                                                src={item.image}
                                                className={`max-h-full mx-auto object-contain ${item.imageClass}`}
                                                alt={item.title}
                                            />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className={`px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded ${item.categoryColor}`}>
                                                    {item.category}
                                                </span>
                                                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                                                    {item.date}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                                                {item.description}
                                            </p>
                                            <div className="mt-auto">
                                                <Link
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-red-600 text-xs font-bold uppercase tracking-widest hover:text-red-700 transition-colors inline-flex items-center gap-1"
                                                >
                                                    Read More <span aria-hidden="true">&rarr;</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}
