"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      {/* Navbar 1 */}
      <div className="bg-primary text-primary-content max-h-12">
        <div className="navbar max-w-7xl mx-auto min-h-12 max-h-12">
          <div className="flex-1 text-lg uppercase tracking-tighter gap-4">
            <span>Southern Allegheny Valley Emergency Services</span>
            <span>|</span>
            <span>EMERGENCY: <a className="link-hover" href="tel:+911">911</a></span>
            <span>|</span>
            <span>NON-EMERGENCY: <a className="link-hover" href="tel:+412-781-0447">412-781-0447</a></span>
          </div>
          <div className="flex-none">
            <a href="https://www.facebook.com/AspinwallVFD/" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-8 w-8"
              >
                <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Navbar 2 */}
      <div className="bg-secondary text-secondary-content">
        <div className="navbar max-w-7xl mx-auto">
          <div className="navbar-center mx-auto text-xl tracking-tighter">
            <Link className="btn btn-ghost text-xl" href="/">
              Who are we?
            </Link>
            <Link className="btn btn-ghost text-xl" href="/">
              Events
            </Link>
            <Link className="btn btn-ghost text-xl" href="/">
              E-Store
            </Link>
            <Link className="btn btn-ghost text-xl" href="/">
              Apparatus
            </Link>
            <Link className="btn btn-ghost text-xl" href="/">
              Gallery
            </Link>
            <Link className="btn btn-ghost text-xl" href="/">
              History
            </Link>
            <Link className="btn btn-ghost text-xl" href="/">
              Members
            </Link>
            <Link className="btn btn-ghost text-xl" href="/">
              File Downloads
            </Link>
            <Link className="btn btn-ghost text-xl" href="/">
              Links
            </Link>
            <div className="btn btn-ghost w-14">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar 3 */}
      <div className="bg-base-100 text-base-content">
        <div className="navbar max-w-7xl mx-auto">
          <div className="flex-1 ml-4 mb-2">
            <Link href="/">
              <Image
                src="/images/south-logo.png"
                alt="Southern Allegheny Valley Emergency Services Logo"
                width={125}
                height={125}
              />
            </Link>
          </div>
          <div className="flex-none gap-4 mr-4">
            <span className="text-3xl mr-4 tracking-tighter">
              Serving Southern Allegheny Since 1892
            </span>
            <a href="" className="text-secondary text-3xl">
              Volunteer
            </a>
            <span className="text-3xl"> | </span>
            <a
              href="https://www.paypal.com/donate?token=wjfQLm43tIjTT1J3lF1c-abaHmU8Gq4Dco1DjRlKBga2Nt2jejhIKLzXks846O5J81IvUFuAtMGCuCdn"
              className="text-secondary text-3xl"
            >
              Donate
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
