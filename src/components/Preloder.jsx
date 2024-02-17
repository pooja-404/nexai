import React, { useEffect, useState } from "react";
import preloder from '../assets/images/ai.webp'


const Preloder = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <div className="overflow-x-clip">
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-[#040404] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center">
                    <div className="relative flex justify-center items-center">
                        <div className="absolute animate-spin rounded-full h-40 w-40 border-t-8 border-b-8 border-[#02CDCF]"></div>
                        <img src={preloder} alt="cpanel" className="rounded-full h-32 w-32" />
                    </div>
                    <p className="font-bold text-[40px] leading-[31px] font-recharge text-[#02CDCF] mt-9">Nexai</p>

                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Preloder