import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <a href="#" className="nav-link">
                            <span className="link-text logo-text">Cipp</span>
                            <svg
                                width="59"
                                height="67"
                                viewBox="0 0 59 67"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M29.4605 31.2754L47.3712 13.4785C48.6092 12.2484 50.611 12.2484 51.8357 13.4785L54.8121 16.4359C56.05 17.666 56.05 19.6551 54.8121 20.8721L42.1165 33.4869L54.8121 46.1017C56.05 47.3318 56.05 49.3209 54.8121 50.5379L51.8489 53.5215C50.611 54.7515 48.6092 54.7515 47.3844 53.5215L29.4737 35.7246C28.2226 34.4945 28.2226 32.5055 29.4605 31.2754ZM4.17481 35.7246L22.0855 53.5215C23.3235 54.7515 25.3253 54.7515 26.55 53.5215L29.5264 50.564C30.7643 49.334 30.7643 47.3449 29.5264 46.1279L16.8308 33.5131L29.5264 20.8982C30.7643 19.6682 30.7643 17.6791 29.5264 16.4621L26.55 13.5047C25.3121 12.2746 23.3103 12.2746 22.0855 13.5047L4.17481 31.3015C2.93686 32.5055 2.93686 34.4945 4.17481 35.7246Z"
                                    fill="#6C7983"
                                    class="fa-primary"
                                />
                            </svg>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <svg
                                width="54"
                                height="48"
                                viewBox="0 0 54 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_63:5)">
                                    <path
                                        d="M26.2846 13.8994L8.99994 28.1353V43.5C8.99994 43.8978 9.15798 44.2794 9.43928 44.5607C9.72058 44.842 10.1021 45 10.4999 45L21.0056 44.9728C21.4021 44.9708 21.7817 44.8119 22.0614 44.5308C22.3411 44.2497 22.4981 43.8694 22.4981 43.4728V34.5C22.4981 34.1022 22.6561 33.7207 22.9374 33.4394C23.2187 33.158 23.6002 33 23.9981 33H29.9981C30.3959 33 30.7774 33.158 31.0587 33.4394C31.34 33.7207 31.4981 34.1022 31.4981 34.5V43.4663C31.4974 43.6636 31.5358 43.8592 31.6109 44.0417C31.686 44.2243 31.7964 44.3902 31.9357 44.53C32.0751 44.6697 32.2407 44.7806 32.423 44.8563C32.6052 44.932 32.8007 44.9709 32.9981 44.9709L43.4999 45C43.8978 45 44.2793 44.842 44.5606 44.5607C44.8419 44.2794 44.9999 43.8978 44.9999 43.5V28.125L27.719 13.8994C27.5158 13.7356 27.2628 13.6463 27.0018 13.6463C26.7409 13.6463 26.4878 13.7356 26.2846 13.8994ZM53.5874 23.5753L45.7499 17.115V4.1297C45.7499 3.83133 45.6314 3.54518 45.4204 3.3342C45.2095 3.12323 44.9233 3.0047 44.6249 3.0047H39.3749C39.0766 3.0047 38.7904 3.12323 38.5794 3.3342C38.3685 3.54518 38.2499 3.83133 38.2499 4.1297V10.9369L29.8565 4.03126C29.051 3.36843 28.0403 3.00602 26.9971 3.00602C25.954 3.00602 24.9432 3.36843 24.1378 4.03126L0.406815 23.5753C0.292897 23.6695 0.198648 23.7852 0.129453 23.9158C0.0602582 24.0463 0.0174734 24.1893 0.00354343 24.3364C-0.0103865 24.4836 0.0048114 24.632 0.0482688 24.7733C0.0917262 24.9145 0.162591 25.0458 0.256815 25.1597L2.64744 28.0659C2.74141 28.1802 2.85699 28.2748 2.98756 28.3443C3.11814 28.4139 3.26115 28.457 3.4084 28.4712C3.55565 28.4854 3.70426 28.4704 3.84571 28.4271C3.98717 28.3838 4.11869 28.313 4.23275 28.2188L26.2846 10.0556C26.4878 9.89188 26.7409 9.80258 27.0018 9.80258C27.2628 9.80258 27.5158 9.89188 27.719 10.0556L49.7718 28.2188C49.8857 28.313 50.017 28.3839 50.1582 28.4273C50.2995 28.4708 50.4479 28.486 50.5951 28.472C50.7422 28.4581 50.8852 28.4153 51.0158 28.3461C51.1464 28.2769 51.262 28.1827 51.3562 28.0688L53.7468 25.1625C53.8409 25.048 53.9115 24.916 53.9544 24.7741C53.9974 24.6322 54.0119 24.4833 53.9971 24.3358C53.9823 24.1883 53.9384 24.0452 53.8681 23.9147C53.7978 23.7842 53.7024 23.6688 53.5874 23.5753Z"
                                        fill="#6C7983"
                                        className="fa-primary"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_63:5">
                                        <rect
                                            width="54"
                                            height="48"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>

                            <span className="link-text">Home</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <svg
                                width="56"
                                height="45"
                                viewBox="0 0 56 45"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_63:7)">
                                    <path
                                        d="M54.6 39.3743H52.4405L31.4598 10.3484L36.1331 3.88407C36.5872 3.25566 36.449 2.37587 35.8234 1.91972L33.5571 0.268254C32.9315 -0.187898 32.0565 -0.0490309 31.6015 0.580266L28 5.56279L24.3976 0.579387C23.9435 -0.0490309 23.0676 -0.188777 22.442 0.267375L20.1775 1.91972C19.5519 2.37587 19.4128 3.25566 19.8678 3.88407L24.5411 10.3484L3.5595 39.3743H1.4C0.6265 39.3743 0 40.0036 0 40.7806V43.5931C0 44.37 0.6265 44.9993 1.4 44.9993H54.6C55.3735 44.9993 56 44.37 56 43.5931V40.7806C56 40.0036 55.3735 39.3743 54.6 39.3743ZM28 25.3118L38.1815 39.3743H17.8185L28 25.3118Z"
                                        fill="#6C7983"
                                        className="fa-primary"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_63:7">
                                        <rect
                                            width="56"
                                            height="45"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                            <span className="link-text">Projects</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <svg
                                width="49"
                                height="65"
                                viewBox="0 0 49 65"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M49 18.2812C49 12.6699 44.4318 8.125 38.7917 8.125C33.1516 8.125 28.5833 12.6699 28.5833 18.2812C28.5833 22.9023 31.6841 26.7998 35.9206 28.0312C35.844 30.0752 35.3846 31.6494 34.5169 32.7158C32.5518 35.1533 28.226 35.5596 23.6451 35.9785C20.0466 36.3086 16.3206 36.6641 13.2708 38.124V19.8428C17.418 18.5479 20.4167 14.7012 20.4167 10.1562C20.4167 4.54492 15.8484 0 10.2083 0C4.56823 0 0 4.54492 0 10.1562C0 14.7012 2.9987 18.5479 7.14583 19.8428V45.1445C2.9987 46.4521 0 50.2988 0 54.8438C0 60.4551 4.56823 65 10.2083 65C15.8484 65 20.4167 60.4551 20.4167 54.8438C20.4167 50.5273 17.7115 46.833 13.8833 45.373C14.2789 44.7129 14.8786 44.1289 15.7846 43.6719C17.8518 42.6309 20.9398 42.3516 24.2193 42.0469C29.6042 41.5518 35.7036 40.9805 39.3021 36.5371C41.0885 34.3281 41.9945 31.4844 42.0583 27.917C46.0906 26.5459 49 22.75 49 18.2812ZM10.2083 8.125C11.3313 8.125 12.25 9.03906 12.25 10.1562C12.25 11.2734 11.3313 12.1875 10.2083 12.1875C9.08542 12.1875 8.16667 11.2734 8.16667 10.1562C8.16667 9.03906 9.08542 8.125 10.2083 8.125ZM10.2083 56.875C9.08542 56.875 8.16667 55.9609 8.16667 54.8438C8.16667 53.7266 9.08542 52.8125 10.2083 52.8125C11.3313 52.8125 12.25 53.7266 12.25 54.8438C12.25 55.9609 11.3313 56.875 10.2083 56.875ZM38.7917 16.25C39.9146 16.25 40.8333 17.1641 40.8333 18.2812C40.8333 19.3984 39.9146 20.3125 38.7917 20.3125C37.6688 20.3125 36.75 19.3984 36.75 18.2812C36.75 17.1641 37.6688 16.25 38.7917 16.25Z"
                                    fill="#6C7983"
                                    className="fa-primary"
                                />
                            </svg>
                            <span className="link-text">Skills</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <svg
                                width="49"
                                height="49"
                                viewBox="0 0 49 49"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M48.0717 19.1352C48.4449 18.8385 49 19.116 49 19.585V39.1562C49 41.6924 46.9424 43.75 44.4062 43.75H4.59375C2.05762 43.75 0 41.6924 0 39.1562V19.5945C0 19.116 0.545508 18.848 0.92832 19.1447C3.07207 20.81 5.91445 22.925 15.6762 30.0166C17.6955 31.4904 21.1025 34.5912 24.5 34.5721C27.9166 34.6008 31.3906 31.433 33.3334 30.0166C43.0951 22.925 45.9279 20.8004 48.0717 19.1352ZM24.5 31.5C26.7203 31.5383 29.9168 28.7055 31.5246 27.5379C44.2244 18.3217 45.191 17.5178 48.1195 15.2209C48.6746 14.7902 49 14.1203 49 13.4121V11.5938C49 9.05762 46.9424 7 44.4062 7H4.59375C2.05762 7 0 9.05762 0 11.5938V13.4121C0 14.1203 0.325391 14.7807 0.880469 15.2209C3.80898 17.5082 4.77559 18.3217 17.4754 27.5379C19.0832 28.7055 22.2797 31.5383 24.5 31.5Z"
                                    fill="#6C7983"
                                    className="fa-primary"
                                />
                            </svg>
                            <span className="link-text">Contact</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <svg
                                width="55"
                                height="55"
                                viewBox="0 0 55 55"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M30.5 55C38.9822 55 46.7292 51.1409 51.8616 44.8173C52.6208 43.8818 51.7929 42.5152 50.6196 42.7387C37.2775 45.2796 25.025 35.0498 25.025 21.5815C25.025 13.8233 29.1782 6.68905 35.9281 2.84775C36.9686 2.25564 36.7069 0.678154 35.5247 0.459766C33.8672 0.154143 32.1854 0.000250974 30.5 0C15.3203 0 3 12.301 3 27.5C3 42.6797 15.301 55 30.5 55Z"
                                    fill="#6C7983"
                                    className="fa-primary"
                                />
                            </svg>
                            <span className="link-text">Theme</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <main>
                <h1>Lorem ipsum dolor sit.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Soluta, autem?
                </p>
            </main>
        </div>
    );
}

export default Navbar;
