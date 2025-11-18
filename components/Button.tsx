"use client";

type ButtonProps = {
    link: string;
    name: string;
    className?: string;
};

export default function Button({ link, name, className }: ButtonProps) {
    return (
        <a
            href={link}
            className={`${className}`}
        >
            {name}
        </a>
    );
}
