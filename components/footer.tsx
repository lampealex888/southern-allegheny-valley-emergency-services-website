import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-base-300">
      <div className="footer p-10 text-base-content max-w-7xl mx-auto">
        <nav>
          <h6 className="footer-title text-xl">Contact Information</h6>
          <span className="text-lg">South Allegheny Fire Department</span>
          <span className="text-lg">123 Easy Street</span>
          <span className="text-lg">City, State 12345 US</span>
          <a className="link-hover text-lg" href="tel:+412-781-0447">
            412-781-0447
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Get Involved</h6>
          <a href="" className="text-lg link-hover">
            Volunteer
          </a>
          <a
            className="text-lg link-hover"
            href="https://www.paypal.com/donate?token=wjfQLm43tIjTT1J3lF1c-abaHmU8Gq4Dco1DjRlKBga2Nt2jejhIKLzXks846O5J81IvUFuAtMGCuCdn"
          >
            Donate
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Social</h6>
          <div>
            <a
              href="https://www.facebook.com/AspinwallVFD/"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-8 w-8 fill-base-content"
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
                className="h-8 w-8 fill-base-content"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </a>
          </div>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Member Links</h6>
          <a className="link link-hover text-lg">Member Only News</a>
          <a className="link link-hover text-lg">Member Login</a>
          <a className="link link-hover text-lg">Billing</a>
          <a className="link link-hover text-lg">Store</a>
        </nav>
      </div>
    </footer>
  );
}
