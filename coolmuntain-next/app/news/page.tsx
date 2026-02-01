import { Container } from "@/components/ui/Container"
import { HeroSection } from "@/components/sections/HeroSection"
import { SectionTitle } from "@/components/ui/SectionTitle"
import { Reveal } from "@/components/ui/Reveal"
import { NEWS_ITEMS } from "@/lib/constants"
import { cn } from "@/lib/utils"
import Link from "next/link"
import NextImage from "next/image"

export default function NewsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <HeroSection
                title="News"
                subtitle="Updates from the Cool Mountain Transport team."
                height="medium"
                backgroundImage="/assets/images/header-bg-final-v2.jpg"
            />

            <section className="py-20 bg-slate-50">
                <Container>
                    <div className="mb-12">
                        <Reveal direction="up" priority>
                            <SectionTitle title="Latest News" />
                        </Reveal>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {NEWS_ITEMS.map((item, index) => (
                            <Reveal key={item.id} direction="up" delay={index * 0.1}>
                                <Link href={item.link} target={item.external ? "_blank" : undefined} rel={item.external ? "noopener noreferrer" : undefined}
                                    className="group block bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
                                >
                                    <div className={cn("aspect-video flex items-center justify-center p-8 relative", item.invertImage ? "bg-slate-800" : "bg-slate-100")}>
                                        <NextImage
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className={cn("object-contain opacity-80", item.invertImage && "filter brightness-0 invert opacity-100")}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={cn(
                                                "px-2 py-1 text-[10px] font-bold uppercase tracking-wider rounded",
                                                item.category === "Press Release" && "bg-red-100 text-red-600",
                                                item.category === "Sustainability" && "bg-green-100 text-green-600",
                                                item.category === "Community" && "bg-blue-100 text-blue-600",
                                                item.category === "Company News" && "bg-red-100 text-red-600",
                                                (item.category === "Investment" || item.category === "Financial") && "bg-amber-100 text-amber-600",
                                            )}>
                                                {item.category}
                                            </span>
                                            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                                                {item.date}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-red-700 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
                                            {item.summary}
                                        </p>
                                        <div className="text-red-600 text-xs font-bold uppercase tracking-widest mt-auto">
                                            Read More &rarr;
                                        </div>
                                    </div>
                                </Link>
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    )
}
