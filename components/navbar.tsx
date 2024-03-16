"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header>
      {/* Header 1 */}
      <div className="bg-primary text-primary-content">
        <div className="navbar max-w-7xl mx-auto">
          <div className="flex-1 text-md uppercase tracking-tighter gap-1 md:gap-4 flex-col md:flex-row text-center">
            <span>Southern Allegheny Valley Emergency Services</span>
            <span className="hidden md:block">|</span>
            <span>
              EMERGENCY:{" "}
              <a className="link-hover" href="tel:+911">
                911
              </a>
            </span>
            <span className="hidden md:block">|</span>
            <span>
              NON-EMERGENCY:{" "}
              <a className="link-hover" href="tel:+412-781-0447">
                412-781-0447
              </a>
            </span>
          </div>
          <div className="flex-none">
            <a
              href="https://www.facebook.com/AspinwallVFD/"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-8 w-8"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
            <a
              href="https://twitter.com/aspinwallfire?lang=en"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-8 w-8"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Header 2 */}
      <div className="bg-base-100 text-base-content">
        <div className="navbar max-w-7xl mx-auto justify-between">
          <div className="flex-1 ml-4 max-w-16 min-w-16 md:max-w-32">
            <Link href="/">
              <Image
                src="/images/logos/south-logo.png"
                alt="Southern Allegheny Valley Emergency Services Logo"
                width={128}
                height={128}
              />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mr-4">
            <span className="md:text-xl lg:text-3xl mr-4 tracking-tighter hidden md:block">
              Serving Southern Allegheny Since 1892
            </span>
            <a href="/" className="text-secondary text-xl md:text-3xl">
              Volunteer
            </a>
            <span className="text-3xl hidden md:block"> | </span>
            <a
              href="https://www.paypal.com/donate?token=wjfQLm43tIjTT1J3lF1c-abaHmU8Gq4Dco1DjRlKBga2Nt2jejhIKLzXks846O5J81IvUFuAtMGCuCdn"
              className="text-secondary text-xl md:text-3xl"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
      {/* Primary navbar */}
      <div className="bg-secondary text-secondary-content">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-start">
            {/* Mobile navbar, hidden on desktop */}
            <div className="dropdown z-10 bg-secondary text-secondary-content">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-secondary"
              >
                <li className="text-lg">
                  <Link href="/about-us">About Us</Link>
                  <ul className="p-2">
                    <li>
                      <Link href="/about-us/history">History</Link>
                    </li>
                    <li>
                      <Link href="/about-us/our-members">Our Members</Link>
                    </li>
                    <li>
                      <Link href="/about-us/fire-stations">Fire Stations</Link>
                    </li>
                    <li>
                      <Link href="/about-us/apparatus">Apparatus</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/fire-prevention">Fire Prevention</Link>
                </li>
                <li>
                  <Link href="/community-outreach">Community Outreach</Link>
                  <ul className="p-2">
                    <li>
                      <Link href="/community-outreach/events">Events</Link>
                    </li>
                    <li>
                      <Link href="/community-outreach/calendar">Calendar</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://squareup.com/store/aspinwall-volunteer-fire-department">
                    E-Store
                  </a>
                </li>
                <li>
                  <Link href="/gallery">Gallery</Link>
                  <ul className="p-2">
                    <li>
                      <Link href="/gallery/apparatus">Apparatus</Link>
                    </li>
                    <li>
                      <Link href="/gallery/apparatus">Station</Link>
                    </li>
                    <li>
                      <Link href="/gallery/videos">Videos</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/resources">Resources</Link>
                  <ul className="p-2">
                    <li>
                      <Link href="/resources/downloads">Downloads</Link>
                    </li>
                    <li>
                      <Link href="/resources/links">Links</Link>
                    </li>
                    <li>
                      <Link href="/resources/site-map">Site Map</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                  <ul className="p-2">
                    <li>
                      <Link href="/contact/general-inquiries">
                        General Inquiries
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact/recruitment">Recruitment</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* Desktop navbar, hidden on mobile */}
          <div className="navbar-center hidden lg:flex z-10">
            <ul className="menu menu-horizontal px-1 text-lg">
              <li>
                <details>
                  <summary>
                    <Link href="/about-us">About Us</Link>
                  </summary>
                  <ul className="p-2 bg-secondary">
                    <li>
                      <Link href="/about-us/history">History</Link>
                    </li>
                    <li>
                      <Link href="/about-us/our-members">Our Members</Link>
                    </li>
                    <li>
                      <Link href="/about-us/fire-stations">Fire Stations</Link>
                    </li>
                    <li>
                      <Link href="/about-us/apparatus">Apparatus</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/fire-prevention">Fire Prevention</Link>
              </li>
              <li>
                <details>
                  <summary>
                    <Link href="/community-outreach">Community Outreach</Link>
                  </summary>
                  <ul className="p-2 bg-secondary">
                    <li>
                      <Link href="/community-outreach/events">Events</Link>
                    </li>
                    <li>
                      <Link href="/community-outreach/calendar">Calendar</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a href="https://squareup.com/store/aspinwall-volunteer-fire-department">
                  E-Store
                </a>
              </li>
              <li>
                <details>
                  <summary>
                    <Link href="/gallery">Gallery</Link>
                  </summary>
                  <ul className="p-2 bg-secondary">
                    <li>
                      <Link href="/gallery/apparatus">Apparatus</Link>
                    </li>
                    <li>
                      <Link href="/gallery/apparatus">Station</Link>
                    </li>
                    <li>
                      <Link href="/gallery/videos">Videos</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    <Link href="/resources">Resources</Link>
                  </summary>
                  <ul className="p-2 bg-secondary">
                    <li>
                      <Link href="/resources/downloads">Downloads</Link>
                    </li>
                    <li>
                      <Link href="/resources/links">Links</Link>
                    </li>
                    <li>
                      <Link href="/resources/site-map">Site Map</Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>
                    <Link href="/contact">Contact</Link>
                  </summary>
                  <ul className="p-2 bg-secondary">
                    <li>
                      <Link href="/contact/general-inquiries">
                        General Inquiries
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact/recruitment">Recruitment</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          {/* Shown on both desktop and mobile */}
          <div className="navbar-end">
            <Link href="/search" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-7"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
