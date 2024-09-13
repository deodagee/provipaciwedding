import Image from "next/image";
import styles from "../app/styles/ThingsToDo.module.css";
import Link from "next/link";
import { useState } from "react";


function ThingsToDo() {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuItemClick = () => {
        setMenuOpen(false); // Close the menu
    };


    return (


        <>



            <div className={styles.index_wrapper}>


                <div>

                    <li className={styles.title}>
                        <p>
                            Providence & Pacifique
                        </p>
                    </li>

                    <li className={styles.navbar_list}>


                        <p>

                            <Link
                                href={'/HowWeMet'}>
                                How We Met
                            </Link>
                        </p>
                        <p>
                            <Link
                                href={'/Photos'}>
                                Photos
                            </Link>
                        </p>
                        <p>
                            <Link
                                href={'/Agenda'}>
                                Agenda
                            </Link>
                        </p>
                        <p>
                            <Link
                                href={'/ThingsToDo'}>
                                Things To Do
                            </Link>
                        </p>
                        <p>
                            <Link
                                href={'/Registry'}>
                                Registry
                            </Link>
                        </p>
                    </li>

                    <div
                        className={styles.providencepacifiquebanner}

                    >
                    </div>

                </div>

                <div className={styles.whileyourehere}>
                    <p>
                        While You’re Here.. Take A Look Around!
                    </p>
                </div>

                <div className={styles.pagebody}>

                    <li>
                        <p className={styles.title}>
                            Nature And Beauty
                        </p>

                        <p className={styles.subtitle}>
                            Albion Falls
                        </p>
                        <p className={styles.address}>
                            885 Mountain Brow Blvd, Hamilton, ON
                        </p>

                        <p className={styles.subtitle}>
                            Tiffany Falls
                        </p>
                        <p className={styles.address}>
                            900 Wilson Street East, Ancaster, On
                        </p>

                        <p className={styles.subtitle}>
                            African Lion Safari
                        </p>
                        <p className={styles.address}>
                            1386 Cooper Rd, Cambridge On
                        </p>

                    </li>

                    <li>
                        <div className={styles.title}>
                            <p>
                                Food And Drinks
                            </p>
                        </div>

                        <div className={styles.subtitle}>
                            <p>
                                The Ancaster Mill
                            </p>
                        </div>
                        <div className={styles.address}>
                            <p>
                                548 Old Dundas Road, Ancaster Hamilton, On
                            </p>
                        </div>

                        <div className={styles.subtitle}>
                            <p>
                                Quatrefoil
                            </p>
                        </div>
                        <div className={styles.address}>

                            <p>
                                16 Sydenham St, Dundas, Hamilton, On
                            </p>
                        </div>

                        <div className={styles.subtitle}>
                            <p>
                                The Mule
                            </p>
                        </div>
                        <div className={styles.address}>
                            <p>
                                41 King William Street, Hamilton, Ontario

                            </p>
                        </div>
                    </li>



                    <li>
                        <div className={styles.title}>
                            <p>
                                Places To Stay
                            </p>
                        </div>

                        <div className={styles.subtitle}>
                            <p>
                                The Ancaster Mill
                            </p>
                        </div>
                        <div className={styles.address}>
                            <p>
                                548 Old Dundas Road, Ancaster Hamilton, On
                            </p>
                        </div>

                        <div className={styles.subtitle}>
                            <p>
                                Quatrefoil
                            </p>
                        </div>
                        <div className={styles.address}>
                            <p>
                                16 Sydenham St, Dundas, Hamilton, On
                            </p>
                        </div>

                        <div className={styles.subtitle}>
                            <p>
                                The Mule
                            </p>
                        </div>
                        <div className={styles.address}>
                            <p>
                                41 King William Street, Hamilton, Ontario
                            </p>
                        </div>
                    </li>
                </div>


                <div>
                    <li className={styles.top_tag_section2}>
                        <p className={styles.rsvp_tag}>
                            June 28th 2024
                        </p>
                        <p className={styles.rsvp_tag}>
                            Hamilton ON Canada
                        </p>
                        <p className={styles.rsvp_button}>
                            RSVP
                        </p>
                    </li>
                </div>



            </div>


        </>
    );
}
export default ThingsToDo; 