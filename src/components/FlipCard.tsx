'use client';
import { useViewport } from "@/contexts/ViewportContext";
import Image from "next/image";

interface FlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
    image: string;
    title: string;
    description: string;
    subtitle?: string;
    rotate?: "x" | "y";
}

function cn(...classes: (string | undefined)[]): string {
    return classes.filter(Boolean).join(" ");
}

export default function FlipCard({
    image,
    title,
    description,
    subtitle,
    rotate = "y",
    className,
    ...props
}: FlipCardProps) {
    const { isMobile } = useViewport();

    const rotationClass = {
        x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
        y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
    };
    const self = rotationClass[rotate];

    return (
        <div
            className={cn(
                "group [perspective:1000px]",
                isMobile ? "h-50 w-[90%]" : "h-132 w-86",
                className
            )}
            {...props}
        >
            <div
                className={cn(
                    "relative h-full rounded-xl transition-all duration-500 [transform-style:preserve-3d]",
                    self[0],
                )}
            >
                {/* Front */}
                <div className="absolute h-full w-full [backface-visibility:hidden]">
                    <Image
                        src={image}
                        alt="image"
                        className="h-full w-full rounded-xl object-cover shadow-2xl shadow-black/40"
                        width={340}
                        height={340}
                    />
                    <div className="absolute bottom-4 left-4 text-xl font-bold text-white">{title}</div>
                </div>

                {/* Back */}
                <div
                    className={cn(
                        "absolute h-full w-full rounded-xl bg-black/80 p-4 text-slate-200 [backface-visibility:hidden]",
                        self[1],
                    )}
                >
                    <div className="flex min-h-full flex-col gap-2 text-center items-center justify-center">
                        <h1 className="text-xl font-bold text-white">{subtitle}</h1>
                        <p className="mt-1 border-t border-t-gray-200 py-4 text-base font-medium leading-normal text-gray-100">
                            {description}{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
