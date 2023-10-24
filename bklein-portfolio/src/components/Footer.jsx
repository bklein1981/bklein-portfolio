import React from "react";
import { FooterData } from "./FooterData";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="row align-items-center justify-content-center">
                <div className="py-3 white-background">
                    <div className="row align-items-center justify-content-center">
                        {FooterData.map((items, index) => {
                            return (
                                <div key={index} className={`col col-lg-1 ${items.textClass}`}>
                                    <a href={items.url}><i className={`${items.icon} foot-icons`}></i></a>
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
