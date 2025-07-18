
interface DownloadButtonProps {
    text?: string;
    href?: string;
}

export default function DownloadButton({ text = "Download", href = "#" }: DownloadButtonProps) {
    return (
        <a
            className="bd inline-block rounded-3xl bg-gradient-to-r from-sky-600 to-sky-800 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:rotate-2 focus:ring-3 focus:outline-hidden"
            href={href}
        >
            {text}
        </a>
    );
}
