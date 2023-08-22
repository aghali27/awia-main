'use client';

import Link from 'next/link';
import Image from 'next/image';

import EmpoweringImage from '../../public/img/home/empowering.jpg';

import { BsArrowRight } from 'react-icons/bs';

export default function JoinAWIA() {
    return (
        <div className="container grid gap-16 mx-auto my-8 lg:grid-cols-2 items-center">
            <div>
                <Image src={EmpoweringImage} alt="Empowering image" />
            </div>
            <div className="w-7/12">
                <h2 className="font-bold text-5xl leading-tight">
                    Empowering all Australians in the web industry
                </h2>

                <p className="font-light">
                    Supporting content around AWIAs mission and values. Nullam
                    id dolor id nibh ultricies vehicula ut id elit. Cras justo
                    odio, dapibus ac facilisis in, egestas eget quam. Aenean
                    lacinia bibendum nulla sed consectetur.
                </p>

                <div className="mt-10">
                    <Link
                        href="/join"
                        className="z-10 px-6 py-3 font-semibold text-xs text-center w-40 text-white uppercase bg-awiapurple rounded-3xl"
                    >
                        Join AWIA{' '}
                        <BsArrowRight className="inline-block text-white" />
                    </Link>

                    <Link
                        href="/join"
                        className="z-10 px-6 ml-5 py-3 text-xs font-semibold text-center w-40 text-black border-black uppercase rounded-3xl"
                    >
                        member benefits
                    </Link>
                </div>
            </div>
        </div>
    );
}
