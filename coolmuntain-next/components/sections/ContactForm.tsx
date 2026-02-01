"use client"

import { Button } from "@/components/ui/Button"

export function ContactForm() {
    return (
        <form className="rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-lg border border-slate-100" action="#" method="post">
            <div className="grid gap-5">
                <div>
                    <label className="text-sm font-semibold text-slate-700 block mb-2" htmlFor="name">
                        Full Name
                    </label>
                    <input
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        required
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold text-slate-700 block mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        required
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold text-slate-700 block mb-2" htmlFor="phone">
                        Phone
                    </label>
                    <input
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition"
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(000) 000-0000"
                    />
                </div>
                <div>
                    <label className="text-sm font-semibold text-slate-700 block mb-2" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition min-h-[120px]"
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell us about your freight needs"
                        required
                    ></textarea>
                </div>
                <Button fullWidth size="lg" type="submit">
                    Submit Request
                </Button>
            </div>
        </form>
    )
}
