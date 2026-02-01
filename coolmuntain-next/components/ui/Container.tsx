import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
}

export function Container({ className, as: Component = "div", children, ...props }: ContainerProps) {
    return (
        <Component
            className={cn("mx-auto max-w-6xl px-4 lg:px-[7vw]", className)}
            {...props}
        >
            {children}
        </Component>
    )
}
