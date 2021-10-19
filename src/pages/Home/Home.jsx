import React from 'react';

function Home() {
    return (
        <div>
            <div>
                <div className="pl-5 hero flex bg-background h-screen justify-center items-center">
                    <div className="grid grid-rows-2">
                        <div>
                            <div className="social flex">
                                <div className="dribble p-2 ">
                                    <svg
                                        className="w-6"
                                        viewBox="0 0 32 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M16 0.515625C7.45325 0.515625 0.5 7.68616 0.5 16.5C0.5 25.3138 7.45325 32.4844 16 32.4844C24.5467 32.4844 31.5 25.3138 31.5 16.5C31.5 7.68616 24.5467 0.515625 16 0.515625ZM26.2481 7.88687C28.0921 10.2101 29.2087 13.1693 29.2378 16.3918C28.8013 16.2966 24.4242 15.381 20.0189 15.9523C19.6594 15.0474 19.3201 14.2512 18.8554 13.2702C23.7504 11.2092 25.969 8.27623 26.2481 7.88687ZM24.7763 6.30803C24.5382 6.65781 22.5452 9.42021 17.8375 11.2399C15.668 7.12935 13.2634 3.75253 12.8975 3.24721C17.096 2.20352 21.5204 3.32907 24.7763 6.30803ZM10.3713 4.16496C10.7204 4.65861 13.0862 8.03962 15.2799 12.061C9.08694 13.757 3.63238 13.7326 3.04025 13.7245C3.89875 9.48782 6.66737 5.96662 10.3713 4.16496ZM2.76062 16.5208C2.76062 16.3812 2.76331 16.2423 2.76737 16.1036C3.34662 16.1159 9.76237 16.2011 16.374 14.1606C16.753 14.9255 17.1151 15.702 17.4474 16.4776C12.6599 17.8682 8.31025 21.8612 6.16419 25.6497C4.04962 23.2292 2.76062 20.0275 2.76062 16.5208ZM7.87356 27.2918C9.2565 24.3764 13.0097 20.613 18.3472 18.7352C20.206 23.7164 20.9747 27.891 21.1716 29.0889C16.9146 30.9588 11.7956 30.4458 7.87356 27.2918ZM23.3973 27.8389C23.2616 27.0084 22.5569 23.0116 20.8253 18.1044C24.9741 17.4195 28.6191 18.5406 29.072 18.688C28.4819 22.4869 26.3674 25.7678 23.3973 27.8389Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                                <div className="behance p-2">
                                    <svg
                                        className="w-6"
                                        viewBox="0 0 37 33"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.9028 15.2883C16.9455 14.3086 18.0118 12.8262 18.0118 10.5188C18.0118 5.9684 14.633 4.8598 10.7339 4.8598H0V27.702H11.0358C15.1726 27.702 19.0589 25.7104 19.0589 21.0698C19.0589 18.2016 17.7035 16.0811 14.9028 15.2883ZM5.00399 8.75922H9.69965C11.5047 8.75922 13.1299 9.26839 13.1299 11.3696C13.1299 13.3096 11.8644 14.0895 10.0786 14.0895H5.00399V8.75922ZM10.3549 23.8219H5.00399V17.5313H10.4576C12.6609 17.5313 14.0549 18.453 14.0549 20.7926C14.0549 23.1 12.3911 23.8219 10.3549 23.8219ZM33.3835 8.30804H24.1528V6.05863H33.3835V8.30804ZM37 19.6711C37 14.7791 34.1479 10.6993 28.9769 10.6993C23.9536 10.6993 20.5427 14.4891 20.5427 19.452C20.5427 24.6018 23.7738 28.1338 28.9769 28.1338C32.9146 28.1338 35.4648 26.3549 36.6917 22.5715H32.6962C32.2658 23.983 30.4929 24.7307 29.1182 24.7307C26.4653 24.7307 25.0714 23.1709 25.0714 20.5219H36.9615C36.9807 20.2512 37 19.9612 37 19.6711ZM25.0778 17.6602C25.2255 15.4881 26.6644 14.1282 28.8356 14.1282C31.1095 14.1282 32.253 15.4688 32.4457 17.6602H25.0778Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                                <div className="github p-2">
                                    <svg
                                        className="w-6"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.7032 24.8375C10.7032 24.9625 10.5548 25.0625 10.3677 25.0625C10.1548 25.0812 10.0065 24.9812 10.0065 24.8375C10.0065 24.7125 10.1548 24.6125 10.3419 24.6125C10.5355 24.5938 10.7032 24.6938 10.7032 24.8375ZM8.69677 24.5562C8.65161 24.6812 8.78065 24.825 8.97419 24.8625C9.14194 24.925 9.33548 24.8625 9.37419 24.7375C9.4129 24.6125 9.29032 24.4688 9.09677 24.4125C8.92903 24.3687 8.74194 24.4312 8.69677 24.5562ZM11.5484 24.45C11.3613 24.4938 11.2323 24.6125 11.2516 24.7563C11.271 24.8813 11.4387 24.9625 11.6323 24.9188C11.8194 24.875 11.9484 24.7563 11.929 24.6313C11.9097 24.5125 11.7355 24.4313 11.5484 24.45ZM15.7935 0.5C6.84516 0.5 0 7.08125 0 15.75C0 22.6812 4.50323 28.6125 10.9355 30.7C11.7613 30.8438 12.0516 30.35 12.0516 29.9438C12.0516 29.5562 12.0323 27.4188 12.0323 26.1063C12.0323 26.1063 7.51613 27.0437 6.56774 24.2437C6.56774 24.2437 5.83226 22.425 4.77419 21.9562C4.77419 21.9562 3.29677 20.975 4.87742 20.9937C4.87742 20.9937 6.48387 21.1188 7.36774 22.6063C8.78064 25.0188 11.1484 24.325 12.071 23.9125C12.2194 22.9125 12.6387 22.2188 13.1032 21.8062C9.49677 21.4187 5.85806 20.9125 5.85806 14.9C5.85806 13.1812 6.34839 12.3188 7.38065 11.2188C7.2129 10.8125 6.66452 9.1375 7.54839 6.975C8.89677 6.56875 12 8.6625 12 8.6625C13.2903 8.3125 14.6774 8.13125 16.0516 8.13125C17.4258 8.13125 18.8129 8.3125 20.1032 8.6625C20.1032 8.6625 23.2065 6.5625 24.5548 6.975C25.4387 9.14375 24.8903 10.8125 24.7226 11.2188C25.7548 12.325 26.3871 13.1875 26.3871 14.9C26.3871 20.9312 22.5871 21.4125 18.9806 21.8062C19.5742 22.3 20.0774 23.2375 20.0774 24.7062C20.0774 26.8125 20.0581 29.4187 20.0581 29.9312C20.0581 30.3375 20.3548 30.8312 21.1742 30.6875C27.6258 28.6125 32 22.6812 32 15.75C32 7.08125 24.7419 0.5 15.7935 0.5ZM6.27097 22.0562C6.1871 22.1187 6.20645 22.2625 6.31613 22.3813C6.41935 22.4813 6.56774 22.525 6.65161 22.4438C6.73548 22.3813 6.71613 22.2375 6.60645 22.1187C6.50323 22.0187 6.35484 21.975 6.27097 22.0562ZM5.57419 21.55C5.52903 21.6312 5.59355 21.7313 5.72258 21.7938C5.82581 21.8563 5.95484 21.8375 6 21.75C6.04516 21.6688 5.98064 21.5688 5.85161 21.5063C5.72258 21.4688 5.61935 21.4875 5.57419 21.55ZM7.66452 23.775C7.56129 23.8562 7.6 24.0438 7.74839 24.1625C7.89677 24.3062 8.08387 24.325 8.16774 24.225C8.25161 24.1438 8.2129 23.9562 8.08387 23.8375C7.94194 23.6938 7.74839 23.675 7.66452 23.775ZM6.92903 22.8563C6.82581 22.9188 6.82581 23.0813 6.92903 23.225C7.03226 23.3687 7.20645 23.4312 7.29032 23.3687C7.39355 23.2875 7.39355 23.125 7.29032 22.9813C7.2 22.8375 7.03226 22.775 6.92903 22.8563Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                                <div className="twitter p-3">
                                    <svg
                                        className="w-6"
                                        viewBox="0 0 32 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M28.7106 9.48225C28.7309 9.7665 28.7309 10.0508 28.7309 10.3351C28.7309 19.0051 22.132 28.9949 10.0711 28.9949C6.35531 28.9949 2.90356 27.9188 0 26.0508C0.527938 26.1117 1.0355 26.132 1.58375 26.132C4.64969 26.132 7.47206 25.0965 9.72588 23.33C6.84263 23.2691 4.42638 21.3808 3.59388 18.7818C4 18.8426 4.40606 18.8833 4.8325 18.8833C5.42131 18.8833 6.01019 18.802 6.55838 18.6599C3.55331 18.0508 1.29944 15.4112 1.29944 12.2234V12.1422C2.1725 12.6295 3.18781 12.9341 4.26388 12.9746C2.49738 11.7969 1.34006 9.78682 1.34006 7.51269C1.34006 6.29444 1.66488 5.17769 2.23344 4.20306C5.46188 8.18275 10.3147 10.7817 15.7563 11.066C15.6548 10.5787 15.5938 10.0711 15.5938 9.5635C15.5938 5.94925 18.5177 3.00513 22.1522 3.00513C24.0405 3.00513 25.7461 3.797 26.9441 5.07619C28.4263 4.79194 29.8476 4.24369 31.1065 3.49244C30.6191 5.01531 29.5836 6.2945 28.2233 7.10663C29.5431 6.96457 30.8223 6.599 31.9999 6.09144C31.1066 7.39088 29.9898 8.54819 28.7106 9.48225Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="content m-auto row-span-1">
                            <h1 class="flex justify-center p-2">
                                Hi, I’m Ciprian
                            </h1>
                            <div className="meet">
                                <p className="flex justify-center">
                                    And I’m a developer.
                                </p>
                            </div>
                            <div className="dw-button flex justify-center py-10">
                                <svg
                                    viewBox="0 0 270 69"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-40 cursor-pointer"
                                >
                                    <rect
                                        x="4.5"
                                        y="5.5"
                                        width="264"
                                        height="62"
                                        stroke="#7E94FD"
                                        stroke-width="3"
                                    />
                                    <rect
                                        width="263"
                                        height="63"
                                        fill="#7E94FD"
                                    />
                                    <path
                                        d="M32.0422 22.152C33.8182 22.152 35.3702 22.504 36.6982 23.208C38.0262 23.912 39.0502 24.904 39.7702 26.184C40.5062 27.448 40.8742 28.912 40.8742 30.576C40.8742 32.224 40.5062 33.688 39.7702 34.968C39.0502 36.248 38.0182 37.24 36.6742 37.944C35.3462 38.648 33.8022 39 32.0422 39H25.7302V22.152H32.0422ZM31.7782 35.448C33.3302 35.448 34.5382 35.024 35.4022 34.176C36.2662 33.328 36.6982 32.128 36.6982 30.576C36.6982 29.024 36.2662 27.816 35.4022 26.952C34.5382 26.088 33.3302 25.656 31.7782 25.656H29.8342V35.448H31.7782ZM49.2637 39.192C47.9517 39.192 46.7677 38.912 45.7117 38.352C44.6717 37.792 43.8477 36.992 43.2397 35.952C42.6477 34.912 42.3517 33.696 42.3517 32.304C42.3517 30.928 42.6557 29.72 43.2637 28.68C43.8717 27.624 44.7037 26.816 45.7597 26.256C46.8157 25.696 47.9997 25.416 49.3117 25.416C50.6237 25.416 51.8077 25.696 52.8637 26.256C53.9197 26.816 54.7517 27.624 55.3597 28.68C55.9677 29.72 56.2717 30.928 56.2717 32.304C56.2717 33.68 55.9597 34.896 55.3357 35.952C54.7277 36.992 53.8877 37.792 52.8157 38.352C51.7597 38.912 50.5757 39.192 49.2637 39.192ZM49.2637 35.64C50.0477 35.64 50.7117 35.352 51.2557 34.776C51.8157 34.2 52.0957 33.376 52.0957 32.304C52.0957 31.232 51.8237 30.408 51.2797 29.832C50.7517 29.256 50.0957 28.968 49.3117 28.968C48.5117 28.968 47.8477 29.256 47.3197 29.832C46.7917 30.392 46.5277 31.216 46.5277 32.304C46.5277 33.376 46.7837 34.2 47.2957 34.776C47.8237 35.352 48.4797 35.64 49.2637 35.64ZM77.6729 25.608L74.0489 39H69.5129L67.4009 30.312L65.2169 39H60.7049L57.0569 25.608H61.1609L63.0569 35.184L65.3129 25.608H69.6569L71.9369 35.136L73.8089 25.608H77.6729ZM87.398 25.464C88.966 25.464 90.214 25.976 91.142 27C92.086 28.008 92.558 29.4 92.558 31.176V39H88.478V31.728C88.478 30.832 88.246 30.136 87.782 29.64C87.318 29.144 86.694 28.896 85.91 28.896C85.126 28.896 84.502 29.144 84.038 29.64C83.574 30.136 83.342 30.832 83.342 31.728V39H79.238V25.608H83.342V27.384C83.758 26.792 84.318 26.328 85.022 25.992C85.726 25.64 86.518 25.464 87.398 25.464ZM99.5139 21.24V39H95.4099V21.24H99.5139ZM108.584 39.192C107.272 39.192 106.088 38.912 105.032 38.352C103.992 37.792 103.168 36.992 102.56 35.952C101.968 34.912 101.672 33.696 101.672 32.304C101.672 30.928 101.976 29.72 102.584 28.68C103.192 27.624 104.024 26.816 105.08 26.256C106.136 25.696 107.32 25.416 108.632 25.416C109.944 25.416 111.128 25.696 112.184 26.256C113.24 26.816 114.072 27.624 114.68 28.68C115.288 29.72 115.592 30.928 115.592 32.304C115.592 33.68 115.28 34.896 114.656 35.952C114.048 36.992 113.208 37.792 112.136 38.352C111.08 38.912 109.896 39.192 108.584 39.192ZM108.584 35.64C109.368 35.64 110.032 35.352 110.576 34.776C111.136 34.2 111.416 33.376 111.416 32.304C111.416 31.232 111.144 30.408 110.6 29.832C110.072 29.256 109.416 28.968 108.632 28.968C107.832 28.968 107.168 29.256 106.64 29.832C106.112 30.392 105.848 31.216 105.848 32.304C105.848 33.376 106.104 34.2 106.616 34.776C107.144 35.352 107.8 35.64 108.584 35.64ZM116.953 32.28C116.953 30.904 117.209 29.696 117.721 28.656C118.249 27.616 118.961 26.816 119.857 26.256C120.753 25.696 121.753 25.416 122.857 25.416C123.801 25.416 124.625 25.608 125.329 25.992C126.049 26.376 126.601 26.88 126.985 27.504V25.608H131.089V39H126.985V37.104C126.585 37.728 126.025 38.232 125.305 38.616C124.601 39 123.777 39.192 122.833 39.192C121.745 39.192 120.753 38.912 119.857 38.352C118.961 37.776 118.249 36.968 117.721 35.928C117.209 34.872 116.953 33.656 116.953 32.28ZM126.985 32.304C126.985 31.28 126.697 30.472 126.121 29.88C125.561 29.288 124.873 28.992 124.057 28.992C123.241 28.992 122.545 29.288 121.969 29.88C121.409 30.456 121.129 31.256 121.129 32.28C121.129 33.304 121.409 34.12 121.969 34.728C122.545 35.32 123.241 35.616 124.057 35.616C124.873 35.616 125.561 35.32 126.121 34.728C126.697 34.136 126.985 33.328 126.985 32.304ZM133.242 32.28C133.242 30.904 133.498 29.696 134.01 28.656C134.538 27.616 135.25 26.816 136.146 26.256C137.042 25.696 138.042 25.416 139.146 25.416C140.026 25.416 140.826 25.6 141.546 25.968C142.282 26.336 142.858 26.832 143.274 27.456V21.24H147.378V39H143.274V37.08C142.89 37.72 142.338 38.232 141.618 38.616C140.914 39 140.09 39.192 139.146 39.192C138.042 39.192 137.042 38.912 136.146 38.352C135.25 37.776 134.538 36.968 134.01 35.928C133.498 34.872 133.242 33.656 133.242 32.28ZM143.274 32.304C143.274 31.28 142.986 30.472 142.41 29.88C141.85 29.288 141.162 28.992 140.346 28.992C139.53 28.992 138.834 29.288 138.258 29.88C137.698 30.456 137.418 31.256 137.418 32.28C137.418 33.304 137.698 34.12 138.258 34.728C138.834 35.32 139.53 35.616 140.346 35.616C141.162 35.616 141.85 35.32 142.41 34.728C142.986 34.136 143.274 33.328 143.274 32.304ZM154.737 30.552C154.737 28.888 155.097 27.408 155.817 26.112C156.537 24.8 157.537 23.784 158.817 23.064C160.113 22.328 161.577 21.96 163.209 21.96C165.209 21.96 166.921 22.488 168.345 23.544C169.769 24.6 170.721 26.04 171.201 27.864H166.689C166.353 27.16 165.873 26.624 165.249 26.256C164.641 25.888 163.945 25.704 163.161 25.704C161.897 25.704 160.873 26.144 160.089 27.024C159.305 27.904 158.913 29.08 158.913 30.552C158.913 32.024 159.305 33.2 160.089 34.08C160.873 34.96 161.897 35.4 163.161 35.4C163.945 35.4 164.641 35.216 165.249 34.848C165.873 34.48 166.353 33.944 166.689 33.24H171.201C170.721 35.064 169.769 36.504 168.345 37.56C166.921 38.6 165.209 39.12 163.209 39.12C161.577 39.12 160.113 38.76 158.817 38.04C157.537 37.304 156.537 36.288 155.817 34.992C155.097 33.696 154.737 32.216 154.737 30.552ZM189.531 22.152L183.555 39H178.419L172.443 22.152H176.811L180.987 34.872L185.187 22.152H189.531Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M238.531 31C238.531 39.0273 232.027 45.5312 224 45.5312C215.973 45.5312 209.469 39.0273 209.469 31C209.469 22.9727 215.973 16.4688 224 16.4688C232.027 16.4688 238.531 22.9727 238.531 31ZM221.422 24.2031V31H217.268C216.641 31 216.324 31.7617 216.77 32.2012L223.502 38.8984C223.777 39.1738 224.217 39.1738 224.492 38.8984L231.225 32.2012C231.67 31.7559 231.354 31 230.727 31H226.578V24.2031C226.578 23.8164 226.262 23.5 225.875 23.5H222.125C221.738 23.5 221.422 23.8164 221.422 24.2031Z"
                                        fill="white"
                                    />
                                </svg>
                            </div>
                        </div>

                        <div className="row-span-1 block">
                            <span className="flex justify-center">
                                Scroll down
                            </span>
                            <svg
                                height="47"
                                viewBox="0 0 41 47"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 flex m-auto"
                            >
                                <path
                                    d="M18.9468 35.0183L1.16099 17.1781C0.30319 16.3177 0.30319 14.9228 1.16099 14.0624L3.23542 11.9817C4.09176 11.1227 5.47962 11.1211 6.33797 11.978L20.5 26.1167L34.6619 11.978C35.5203 11.1211 36.9081 11.1227 37.7645 11.9817L39.8389 14.0624C40.6967 14.9229 40.6967 16.3178 39.8389 17.1781L22.0531 35.0183C21.1953 35.8786 19.8046 35.8786 18.9468 35.0183Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </div>
                    {/* Homeart */}
                    <div className="homeart hidden md:flex">
                        <svg
                            width="759"
                            height="755"
                            viewBox="0 0 759 755"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="155"
                                width="151"
                                height="151"
                                rx="20"
                                fill="#7E94FD"
                            />
                            <rect
                                x="4"
                                y="151"
                                width="151"
                                height="151"
                                rx="20"
                                fill="#7E94FD"
                            />
                            <rect
                                x="306"
                                y="151"
                                width="151"
                                height="151"
                                rx="20"
                                fill="#8AD8FA"
                            />
                            <rect
                                x="155"
                                y="302"
                                width="151"
                                height="151"
                                rx="20"
                                fill="white"
                            />
                            <rect
                                x="155"
                                y="604"
                                width="151"
                                height="151"
                                rx="20"
                                fill="white"
                            />
                            <rect
                                x="306"
                                y="453"
                                width="151"
                                height="151"
                                rx="20"
                                fill="#7E94FD"
                            />
                            <rect
                                y="452"
                                width="151"
                                height="151"
                                rx="20"
                                fill="#7E94FD"
                            />
                            <rect
                                x="457"
                                y="302"
                                width="151"
                                height="151"
                                rx="20"
                                fill="#7EFDDE"
                            />
                            <rect
                                x="608"
                                y="151"
                                width="151"
                                height="151"
                                rx="20"
                                fill="#8AD8FA"
                            />
                            <rect
                                x="457"
                                width="151"
                                height="151"
                                rx="20"
                                fill="#7EFDDE"
                            />
                            <circle
                                cx="230.5"
                                cy="226.5"
                                r="75.5"
                                fill="#7EFDDE"
                            />
                            <circle
                                cx="532.5"
                                cy="226.5"
                                r="75.5"
                                fill="#7E94FD"
                            />
                            <circle
                                cx="381.5"
                                cy="377.5"
                                r="75.5"
                                fill="#7E94FD"
                            />
                            <circle
                                cx="230.5"
                                cy="527.5"
                                r="75.5"
                                fill="#7EFDDE"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            ;
        </div>
    );
}

export default Home;
