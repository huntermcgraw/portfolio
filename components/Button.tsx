"use client";

type ButtonProps = {
    link: string;
    name: string;
};

export default function Button({ link, name }: ButtonProps) {
    return (
        <a
            href={link}
            className="border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition-colors"
        >
            {name}
        </a>
    );
}
