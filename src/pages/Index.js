import Image from "next/image";
import styles from "../app/styles/indexmain.module.css";
import Link from "next/link";


function HomePage() {
    return (


        <>

            <link rel="preconnect" href="https://fonts.googleapis.com"></link>

            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>

            <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
            </link>

            <link rel="preconnect" href="https://fonts.googleapis.com">
            </link>

            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            </link>

            <link href="https://fonts.googleapis.com/css2?family=Bilbo&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
            </link>

            <link rel="preconnect" href="https://fonts.googleapis.com">
            </link>

            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            </link>

            <link href="https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Bilbo&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet"></link>


            <link rel="preconnect" href="https://fonts.googleapis.com">
            </link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            </link>
            <link href="https://fonts.googleapis.com/css2?family=Beth+Ellen&family=Bilbo&family=Caladea:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
            </link>



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



                <div className={styles.top_tag_wrapper}>


                    <div className={styles.top_tag_section1_and2}>

                        <li className={styles.top_tag_section1}>
                            <p className={styles.top_story}>
                                In 2012, fate first brought them together at the former National University of Rwanda. As students eager to excel, they occasionally crossed paths at the "Open Heart Team," a vibrant volunteer group devoted to serving those in need. Among their many shared experiences, their weekly visits to the university hospitals stand out—providing food and companionship to those less fortunate. Providence, a young woman active with...
                            </p>

                            <p className={styles.top_click_link}>
                                Click To Read The Story</p>
                        </li>

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


                    <p className={styles.love_conquers}>
                        Love Conquers All Things
                    </p>


                    <div className={styles.image_grid}>
                        <div className={styles.left_side}>
                            <Image
                                className={styles.left_side_image}
                                alt="signature"
                                width={3000}
                                height={3000}
                                src={"/bw0001.png"}
                            >
                            </Image>
                        </div>


                        <div className={styles.right_side}>
                            <Image
                                className={styles.right_side_image}
                                alt="signature"
                                width={3000}
                                height={3000}
                                src={"/col0001.png"}
                            >
                            </Image>

                            <Image
                                className={styles.right_side_image}
                                alt="signature"
                                width={3000}
                                height={3000}
                                src={"/col0004.jpeg"}
                            >
                            </Image>

                            <Image
                                className={styles.right_side_image}
                                alt="signature"
                                width={3000}
                                height={3000}
                                src={"/col0005.jpg"}
                            >
                            </Image>

                            <Image
                                className={styles.right_side_image}
                                alt="signature"
                                width={3000}
                                height={3000}
                                src={"/col0006.jpeg"}
                            >
                            </Image>
                        </div>
                    </div>

                    <p className={styles.see_all_photos}>
                        See All Photos
                    </p>
                </div>

                <div className={styles.bottom_tag_wrapper}>

                    <p className={styles.bottom_tag}>
                        Wedding Day Details
                    </p>
                    <li className={styles.bottom_tag_attachments} >
                        <div className={styles.bottom_tag_attachments_section1}>
                            <p>Agenda</p>
                        </div>
                        <div className={styles.bottom_tag_attachments_section2}>
                            <p>RSVP</p>
                            <p>Contact</p>
                        </div>
                    </li>

                    <p className={styles.take_a_look}>Take A Look Around</p>
                    <Image
                        className={styles.maps_image}
                        alt="signature"
                        width={3000}
                        height={3000}
                        src={"/maps.png"}
                    >
                    </Image>

                    <p className={styles.in_hamilton}>IN HAMILTON</p>

                    <p className={styles.if_you_are_looking}>
                        If you are looking for places to visit while you are in Hamilton,  there's plenty to do. Click here to check out some favorite local attractions and make the most of your visit!
                    </p>



                    <p className={styles.dear_registry}>
                        Dear Registry
                    </p>
                    <p className={styles.send_this_beautiful}>
                        Send this beautiful couple a gift here. Browse and shop diverse selections of gifts you might think are perfect for this occasion!
                    </p>

                </div>
            </div>


        </>
    );
}
export default HomePage;
