import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { BASE_PATH } from "@/lib/constants"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function getAssetPath(src: string): string {
    if (!src) return "";
    // If it's an external URL, return as is
    if (src.startsWith("http") || src.startsWith("https")) return src;

    // If it already starts with BASE_PATH, return as is (to avoid double prefixing)
    if (BASE_PATH && src.startsWith(BASE_PATH)) return src;

    // If it starts with / and BASE_PATH is defined, prepend it
    if (src.startsWith("/") && BASE_PATH) {
        return `${BASE_PATH}${src}`;
    }

    return src;
}
