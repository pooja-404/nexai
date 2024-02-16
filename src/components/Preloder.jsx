import React, { useEffect, useState } from "react";
import preloder2 from '../assets/images/preloder.gif'

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
                    className="bg-[#000] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center">
                    <div className="bg-[#000] ">
                        
                                <img src={preloder2} alt="cpanel" className=" " />

                    </div>;
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Preloder