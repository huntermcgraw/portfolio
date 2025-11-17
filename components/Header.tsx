"use client";

import Button from "./Button";

export default function Header() {
    return (
        <header className="flex h-16 items-center justify-between p-2 bg-gray">
            <div className="text-2xl font-bold">Welcome To My Portfolio!</div>
            <nav className="flex space-x-4">
                <Button link="/" name="Home" />
                <Button link="/about" name="About" />
                <Button link="/projects" name="Projects" />
                <Button link="/contact" name="Contact" />
            </nav>
        </header>
    );
}
