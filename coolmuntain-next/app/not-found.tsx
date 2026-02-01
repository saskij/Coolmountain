import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { Container } from "@/components/ui/Container"

export default function NotFound() {
    return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center bg-slate-50 py-20 text-center">
            <Container>
                <div className="space-y-6">
                    <h1 className="text-9xl font-black text-slate-200">404</h1>
                    <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                        Page Not Found
                    </h2>
                    <p className="mx-auto max-w-md text-lg text-slate-600">
                        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
                    </p>
                    <div className="pt-6">
                        <Button href="/">
                            Return Home
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
