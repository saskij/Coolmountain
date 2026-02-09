import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    as?: React.ElementType
}

export function Container({ className, as: Component = "div", children, ...props }: ContainerProps) {
    return (
        <Component
            className={cn("mx-auto max-w-[1400px] px-6 lg:px-10", className)}
            {...props}
        >
            {children}
        </Component>
    )
}
