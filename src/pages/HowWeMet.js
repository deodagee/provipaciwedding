import Image from "next/image";
import styles from "../app/styles/HowWeMet.module.css";
import Link from "next/link";
import { useState } from "react";

function HowWeMet() {
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


                        <p >

                            <Link className={styles.navbar_list_element}
                                href={'/HowWeMet'}>
                                How We Met
                            </Link>
                        </p>
                        <p >
                            <Link  className={styles.navbar_list_element}
                                href={'/Photos'}>
                                Photos
                            </Link>
                        </p>
                        <p  >
                            <Link className={styles.navbar_list_element}
                                href={'/Agenda'}>
                                Agenda
                            </Link>
                        </p>
                        <p  >
                            <Link className={styles.navbar_list_element}
                                href={'/ThingsToDo'}>
                                Things To Do
                            </Link>
                        </p>
                        <p  >
                            <Link className={styles.navbar_list_element}
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


                <div className={styles.imageswrapper}>
                    <Image
                        className={styles.images}
                        alt="signature"
                        width={3000}
                        height={3000}
                        src={"/col0004.jpeg"}
                    >
                    </Image>
                    <Image
                        className={styles.images}
                        alt="signature"
                        width={3000}
                        height={3000}
                        src={"/col0006.jpeg"}
                    >
                    </Image>

                    <Image
                        className={styles.images}
                        alt="signature"
                        width={3000}
                        height={3000}
                        src={"/col0001.png"}
                    >
                    </Image>
                </div>



                <div className={styles.contentbody}>
                    <li className={styles.paragraphandtitle}>
                        <p className={styles.paragraphtitle}>
                            How We Met
                        </p>

                        <p>
                            In 2012, fate first brought them together at the former National University of Rwanda. As students eager to excel, they occasionally crossed paths at the &quot;Open Heart Team&quot;, a vibrant volunteer group devoted to serving those in need. Among their many shared experiences, their weekly visits to the university hospitals stand out—providing food and companionship to those less fortunate. Providence, a young woman active with boundless energy, shone brightly. Pacifique, equally captivating but refreshingly down-to-earth, was a joy to converse with. What began as a budding friendship blossomed into something deeper during Providence&quot;s visits to Pacifique on campus and at the dorm, sparking heartfelt conversations and a meaningful connection.
                        </p>

                        <p>

                            In 2018, despite the miles separating them, they ventured into a long-distance relationship. The journey was fraught with challenges—communication glitches and moments of uncertainty—but their love prevailed, strengthened by patience and steadfast commitment. Though they took a break at the close of 2020 to address personal priorities, they never stopped supporting and uplifting each other.
                        </p>

                        <p>
                            When Providence visited Rwanda in 2021, she reached out to Pacifique, and their lengthy conversations rekindled their bond. By 2023, with Pacifique in Canada, they chose to reignite their relationship with marriage in mind. The prospect of building a life together in Canada seemed like a dream come true, and their proximity solidified their decision.
                        </p>

                        <p>
                            Since then, they&quot;ve created countless cherished memories, from birthday celebrations to holiday festivities. Their story reached a beautiful climax on June 27, 2024, in Vancouver, where Providence said &quot;yes&quot; amid friends gathered by the Pacific Ocean. Their forever ever after began that night, setting the stage for their upcoming wedding.
                        </p>

                        <p>
                            As they embark on this new chapter, their love story is a testament to enduring passion and resilience. May their union be blessed with joy, love, and unwavering support as they step into the future hand in hand, ready to embrace whatever comes their way.
                        </p>

                        <p>
                            Love,

                            Paci & Provi
                        </p>

                    </li>

                    <div className={styles.bottomsection}>

                        <div>
                            <Image
                                className={styles.flower}
                                alt="flower"
                                width={3000}
                                height={3000}
                                src={"/flower.png"}
                            >
                            </Image>
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
                        <div>
                            <Image
                                className={styles.flower}
                                alt="flower"
                                width={3000}
                                height={3000}
                                src={"/flower.png"}
                            >
                            </Image>
                        </div>
                    </div>
                </div>


            </div>

        </>
    );
}


export default HowWeMet;