import React from "react";
import { FooterData } from "./Pages/Page-Data/FooterData";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="row align-items-center justify-content-center">
                <div className="py-3 white-background">
                    <div className="row align-items-center justify-content-center">
                        {FooterData.map((footer, index) => {
                            return (
                                <div key={index} className={`col col-lg-1 ${footer.textClass}`}>
                                    <a href={footer.url} target="_blank"><i className={`${footer.icon} foot-icons`}></i></a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="text-center py-4 color-white gray-background">
                <div className="row align-items-center justify-content-center">
                    <div className="col col-lg-2">Copyright &copy; 2023 Brian Klein</div>
                </div>
            </div>
        </footer>
    );
}
