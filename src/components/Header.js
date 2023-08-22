'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { BsArrowRight } from 'react-icons/bs';

import LogoImage from '../../public/img/logo.svg';

export default function Header() {
    const pathname = usePathname();

    return (
        <div className="py-10 bg-gradient-to-r from-bgleft to-bgright">
            <div className="container grid mx-auto lg:grid-cols-9 items-center">
                <div>
                    <Link href="/">
                        <Image
                            src={LogoImage}
                            alt="AWIA logo"
                            height="20"
                            width="100"
                        />
                    </Link>
                </div>
                <div className="col-span-6">
                    <ul>
                        <li className="float-left mr-8 text-base font-light">
                            <Link
                                href="/members"
                                className={
                                    pathname == '/members'
                                        ? 'text-awiapurple font-semibold'
                                        : ''
                                }
                            >
                                Browse Members
                            </Link>
                        </li>
                        <li className="float-left mr-8 text-base font-light">
                            <Link
                                href="/membership"
                                className={
                                    pathname == '/membership'
                                        ? 'text-awiapurple font-semibold'
                                        : ''
                                }
                            >
                                Membership
                            </Link>
                        </li>
                        <li className="float-left mr-8 text-base font-light">
                            <Link
                                href="/about"
                                className={
                                    pathname == '/about'
                                        ? 'text-awiapurple font-semibold'
                                        : ''
                                }
                            >
                                About
                            </Link>
                        </li>
                        <li className="float-left text-base font-light">
                            <Link
                                href="/news"
                                className={
                                    pathname == '/news'
                                        ? 'text-awiapurple font-semibold'
                                        : ''
                                }
                            >
                                News & Events
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="text-center">
                    <Link href="" className="font-light">
                        Sign In
                    </Link>
                </div>
                <div className="text-right">
                    <Link
                        href="/join"
                        className="px-6 py-3 text-xs font-semibold uppercase bg-white rounded-3xl flex justify-around w-36"
                    >
                        Join AWIA{' '}
                        <BsArrowRight className="inline-block mx-2 text-sm font-bold text-awiapurple" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
