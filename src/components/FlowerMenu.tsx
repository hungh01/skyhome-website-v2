"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

type MenuItem = {
    icon: React.ComponentType<any>;
    href: string;
    name: string;
};

type FlowerMenuProps = {
    menuItems: MenuItem[];
    iconColor?: string;
    backgroundColor?: string;
    animationDuration?: number;
    togglerSize?: number;
};

const MenuToggler = () => {

    return (
        <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 hover:scale-125 text-center">
            <h1 className="text-4xl font-bold">
                Dịch vụ của
            </h1>
            <h2 className="text-6xl font-bold">
                SkyHome
            </h2>
        </div>
    );
};

const MenuItem = ({
    item,
    index,
    isOpen,
    iconColor,
    backgroundColor,
    animationDuration,
    itemCount,
    itemSize,
    iconSize,
}: {
    item: MenuItem;
    index: number;
    isOpen: boolean;
    iconColor: string;
    backgroundColor: string;
    animationDuration: number;
    itemCount: number;
    itemSize: number;
    iconSize: number;
}) => {
    const Icon = item.icon;
    const angle = (360 / itemCount) * index;
    const rad = (angle * Math.PI) / 180;

    // Đặt chiều rộng/chiều cao hình elip
    const a = 500; // bán trục ngang
    const b = 300; // bán trục dọc

    const x = a * Math.cos(rad);
    const y = b * Math.sin(rad);
    return (
        <li
            className={`absolute transition-all ${isOpen ? "opacity-100" : "opacity-0"}`}
            style={{
                width: itemSize,
                height: itemSize,
                left: `calc(50% - ${itemSize / 2}px)`,
                top: `calc(50% - ${itemSize / 2}px)`,
                transform: isOpen
                    ? `translate(${x}px, ${y}px) rotate(${angle}deg)`
                    : "none",
                transitionDuration: `${animationDuration}ms`,
            }}
        >
            <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex h-full w-full items-center justify-center rounded-full transition-all duration-100 ${isOpen ? "pointer-events-auto" : "pointer-events-none"
                    } group hover:scale-125 hover:opacity-100`}
                style={{
                    backgroundColor,
                    color: iconColor,
                    transform: `rotate(-${angle}deg)`, // giữ icon đứng thẳng
                    transitionDuration: `${500}ms`,
                }}
            >
                <Icon
                    className="transition-transform duration-200 group-hover:scale-125"
                    style={{ width: iconSize, height: iconSize }}
                />
                <div className="absolute left-1/2 top-full -translate-x-1/2 mt-2 w-max text-center">
                    <span className="text-sm font-medium">{item.name}</span>
                </div>
            </Link>
        </li>

    );
};

export default function FlowerMenu({
    menuItems,
    iconColor = "white",
    backgroundColor = "rgba(255, 255, 255, 0.2)",
    animationDuration = 500,
    togglerSize = 40,
}: FlowerMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const itemCount = menuItems.length;
    const itemSize = togglerSize * 2;
    const iconSize = Math.max(24, Math.floor(togglerSize * 0.6));

    const menuRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const ref = menuRef.current;
        if (!ref) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsOpen(true);
                } else {
                    setIsOpen(false);
                }
            },
            {
                threshold: 0.3,
            }
        );
        observer.observe(ref);
        return () => observer.disconnect();
    }, []);

    return (
        <nav ref={menuRef} className="relative min-h-64" style={{ width: togglerSize * 3, height: togglerSize * 3 }}>
            <MenuToggler />
            <ul className="absolute inset-0 m-0 h-full w-full list-none p-0">
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        item={item}
                        index={index}
                        isOpen={isOpen}
                        iconColor={iconColor}
                        backgroundColor={backgroundColor}
                        animationDuration={animationDuration}
                        itemCount={itemCount}
                        itemSize={itemSize}
                        iconSize={iconSize}
                    />
                ))}
            </ul>
        </nav>
    );
}
