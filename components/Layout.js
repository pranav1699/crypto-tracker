import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title = "Crypto Tracker" }) => {
    return (
        <div className="layout">
            <Head>
                <title>{title}</title>
                <link rel="icon" href='/favicon.ico' />
            </Head>
            <header className="header">
                <Link href='/' passHref>
                    <a>
                        <svg
                            width='675'
                            height='375'
                            viewBox='0 0 675 375'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='coin_logo'
                        >
                            <path
                                d='M217 125.5L446.5 5L666.5 125.5L446.5 250L217 125.5Z'
                                stroke='#11FFFF'
                                strokeWidth='8'
                            />
                            <path
                                d='M9 125.5L238.5 5L458.5 125.5L238.5 250L9 125.5Z'
                                stroke='#11FFFF'
                                strokeWidth='8'
                            />
                            <line
                                x1='9'
                                y1='125'
                                x2='660'
                                y2='125'
                                stroke='#11FFFF'
                                strokeWidth='6'
                            />
                            <path
                                d='M124 125.5L353.5 5L573.5 125.5L353.5 250L124 125.5Z'
                                fill='url(#paint0_linear)'
                            />
                            <path
                                d='M246.96 323.58C249.4 323.58 251.5 323.18 253.26 322.38C255.02 321.54 256.86 320.22 258.78 318.42L263.34 323.1C258.9 328.02 253.5 330.48 247.14 330.48C240.82 330.48 235.56 328.44 231.36 324.36C227.2 320.28 225.12 315.12 225.12 308.88C225.12 302.64 227.24 297.44 231.48 293.28C235.76 289.12 241.14 287.04 247.62 287.04C254.14 287.04 259.58 289.44 263.94 294.24L259.44 299.16C257.44 297.24 255.54 295.9 253.74 295.14C251.98 294.38 249.9 294 247.5 294C243.26 294 239.7 295.38 236.82 298.14C233.94 300.86 232.5 304.36 232.5 308.64C232.5 312.88 233.92 316.44 236.76 319.32C239.64 322.16 243.04 323.58 246.96 323.58ZM305.48 301.68C305.48 308.6 302.46 312.96 296.42 314.76L307.4 330H298.4L288.38 315.9H279.08V330H272V288.06H287.6C294 288.06 298.58 289.14 301.34 291.3C304.1 293.46 305.48 296.92 305.48 301.68ZM287.9 309.48C291.9 309.48 294.62 308.86 296.06 307.62C297.5 306.38 298.22 304.4 298.22 301.68C298.22 298.92 297.48 297.04 296 296.04C294.52 295 291.88 294.48 288.08 294.48H279.08V309.48H287.9ZM332.152 330H324.952V313.44L309.352 288.06H317.092L328.552 307.14L340.012 288.06H347.752L332.152 313.44V330ZM367.493 288.06C373.853 288.06 378.493 289.28 381.413 291.72C384.333 294.16 385.793 297.92 385.793 303C385.793 308.08 384.293 311.8 381.293 314.16C378.333 316.52 373.773 317.7 367.613 317.7H360.173V330H353.093V288.06H367.493ZM368.393 311.28C372.313 311.28 374.973 310.54 376.373 309.06C377.813 307.54 378.533 305.34 378.533 302.46C378.533 299.54 377.633 297.48 375.833 296.28C374.033 295.08 371.213 294.48 367.373 294.48H360.173V311.28H368.393ZM409.949 294.54V330H402.869V294.54H390.149V288.06H422.669V294.54H409.949ZM460.2 297.96C457.36 295 453.86 293.52 449.7 293.52C445.54 293.52 442.02 295 439.14 297.96C436.3 300.92 434.88 304.52 434.88 308.76C434.88 312.96 436.3 316.54 439.14 319.5C442.02 322.46 445.54 323.94 449.7 323.94C453.86 323.94 457.36 322.46 460.2 319.5C463.08 316.54 464.52 312.96 464.52 308.76C464.52 304.52 463.08 300.92 460.2 297.96ZM465.42 324.24C461.18 328.36 455.94 330.42 449.7 330.42C443.46 330.42 438.22 328.36 433.98 324.24C429.74 320.08 427.62 314.92 427.62 308.76C427.62 302.56 429.74 297.4 433.98 293.28C438.22 289.12 443.46 287.04 449.7 287.04C455.94 287.04 461.18 289.12 465.42 293.28C469.66 297.4 471.78 302.56 471.78 308.76C471.78 314.92 469.66 320.08 465.42 324.24Z'
                                fill='white'
                            />
                            <path
                                d='M285.83 345.27V363H282.29V345.27H275.93V342.03H292.19V345.27H285.83ZM312.755 348.84C312.755 352.3 311.245 354.48 308.225 355.38L313.715 363H309.215L304.205 355.95H299.555V363H296.015V342.03H303.815C307.015 342.03 309.305 342.57 310.685 343.65C312.065 344.73 312.755 346.46 312.755 348.84ZM303.965 352.74C305.965 352.74 307.325 352.43 308.045 351.81C308.765 351.19 309.125 350.2 309.125 348.84C309.125 347.46 308.755 346.52 308.015 346.02C307.275 345.5 305.955 345.24 304.055 345.24H299.555V352.74H303.965ZM320.812 358.23L318.712 363H314.932L324.172 342.03H327.952L337.192 363H333.412L331.312 358.23H320.812ZM329.872 354.96L326.062 346.32L322.252 354.96H329.872ZM349.677 359.79C350.897 359.79 351.947 359.59 352.827 359.19C353.707 358.77 354.627 358.11 355.587 357.21L357.867 359.55C355.647 362.01 352.947 363.24 349.767 363.24C346.607 363.24 343.977 362.22 341.877 360.18C339.797 358.14 338.757 355.56 338.757 352.44C338.757 349.32 339.817 346.72 341.937 344.64C344.077 342.56 346.767 341.52 350.007 341.52C353.267 341.52 355.987 342.72 358.167 345.12L355.917 347.58C354.917 346.62 353.967 345.95 353.067 345.57C352.187 345.19 351.147 345 349.947 345C347.827 345 346.047 345.69 344.607 347.07C343.167 348.43 342.447 350.18 342.447 352.32C342.447 354.44 343.157 356.22 344.577 357.66C346.017 359.08 347.717 359.79 349.677 359.79ZM362.197 342.03H365.737V352.26L375.337 342.03H379.837L371.407 351.21L379.957 363H375.757L368.797 353.82L365.737 357.12V363H362.197V342.03ZM398.05 342.03V345.36H386.86V350.91H396.91V354.06H386.86V359.67H398.41V363H383.32V342.03H398.05ZM419.689 348.84C419.689 352.3 418.179 354.48 415.159 355.38L420.649 363H416.149L411.139 355.95H406.489V363H402.949V342.03H410.749C413.949 342.03 416.239 342.57 417.619 343.65C418.999 344.73 419.689 346.46 419.689 348.84ZM410.899 352.74C412.899 352.74 414.259 352.43 414.979 351.81C415.699 351.19 416.059 350.2 416.059 348.84C416.059 347.46 415.689 346.52 414.949 346.02C414.209 345.5 412.889 345.24 410.989 345.24H406.489V352.74H410.899Z'
                                fill='white'
                            />
                            <defs>
                                <linearGradient
                                    id='paint0_linear'
                                    x1='348.75'
                                    y1='5'
                                    x2='348.75'
                                    y2='250'
                                    gradientUnits='userSpaceOnUse'
                                >
                                    <stop stopColor='#06F0FF' />
                                    <stop offset='1' stopColor='#00FFFF' />
                                </linearGradient>
                            </defs>
                        </svg>
                    </a>

                </Link>

            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout