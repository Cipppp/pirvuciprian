import React from 'react';

function Terms() {
    return (
        <div className="h-screen w-screen bg-[#12181b]">
            <div className="content p-20 ml-20">
                <h1 className="text-white font-black text-[3rem] mb-4">
                    Terms
                </h1>
                <div className="flex items-center justify-center">
                    <hr className="border-dashed border-t-2 w-full border-[#929CA9] rounded-xl opacity-40" />
                </div>{' '}
                <div className="top_info mt-10 mb-4 text-[#b1becd]">
                    <p>
                        By accessing this website, you are agreeing to be bound
                        by these website Terms and Conditions of Use, all
                        applicable laws, and regulations, and agree that you are
                        responsible for compliance with any applicable local
                        laws. If you do not agree with any of these terms, you
                        are prohibited from using or accessing this site.
                    </p>
                </div>
                <div className="law mb-4 text-[#b1becd]">
                    <h1 className="text-white font-black text-[1.5rem] mb-2">
                        Governing Law
                    </h1>
                    <p>
                        Any claim relating to the Cipp website shall be governed
                        by the laws of the State of Romania without regard to
                        its conflict of law provisions. General Terms and
                        Conditions apply to the Use of a Web Site.
                    </p>{' '}
                </div>
            </div>
        </div>
    );
}

export default Terms;
