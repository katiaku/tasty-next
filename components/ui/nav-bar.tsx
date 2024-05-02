import Link from "next/link";
import React from "react";

export default function NavBar() {
    return (
        <nav className="w-full border-0 py-4 lg:px-24 px-10 bg-slate-100 drop-shadow">
            <h1 className="text-3xl text-slate-700 text-center">
                <Link href="/">Tasty Next Recipe</Link>
            </h1>
        </nav>
    );
}
