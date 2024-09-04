import Image from "next/image";
import styles from "../app/styles/Agenda.module.css";
import Link from "next/link";


function Agenda() {
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
                        Plan & Schedule
                    </p>

                    <p>
                        Wedding Day
                    </p>
                </div>

                <div className={styles.pagebody}>

                    <div className={styles.pagebodytitle}>
                        <p>
                            Agenda
                        </p>
                    </div>

                    <div>
                        <div className={styles.subtitle}>
                            <p>
                                When:
                            </p>
                        </div>
                        <div className={styles.address}>
                            <p>
                                june 28th
                            </p>
                        </div>

                        <div className={styles.subtitle}>
                            <p>
                                Where:
                            </p>

                        </div>
                        <div className={styles.address}>
                            <p>
                                Church Mass
                            </p>
                            <p>2:00 p.m. - 3:00 p.m</p>
                            <p> St Josephs Church</p>
                            <p> 260 Herkimer Street, Hamilton, On</p>
                        </div>
                        <div className={styles.subtitle}>
                            <p>
                                &
                            </p>
                        </div>
                        <div className={styles.subtitle}>
                            <p>
                                Reception
                            </p>
                        </div>
                        <div className={styles.address}>
                            <p>
                                5:00 p.m. - 12:00 a.m.
                            </p>
                            <p>
                                Croatia Sports Cente Inc
                            </p>
                            <p>
                                166 Greenn Mountain Rd E, Stoney Creek , On
                            </p>
                        </div>
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
            </div>

        </>
    );
}
export default Agenda; 