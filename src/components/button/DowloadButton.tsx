"use client";
import { useViewport } from "@/contexts/ViewportContext";

interface DownloadButtonProps {
    text?: string;
    href?: string;
}

export default function DownloadButton({ text = "Download", href = "#" }: DownloadButtonProps) {

    return (
        <a
            className={`rounded-3xl bg-gradient-to-r from-sky-600 to-sky-800 px-8 py-3 text-white transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-hidden max-h-12 min-w-32`}
            href={href}
        >
            {text}
        </a>
    );
}
