import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="max-w-sm flex flex-col bg-base-200 justify-center m-4 p-6 tracking-tight gap-4 text-xl max-h-[800px]">
      {/* Donation */}
      <span className="font-bold">
        South Allegheny Valley Emergency Services
      </span>
      <span className="font-bold">Department Station 102</span>
      <span className="">
        Emergency:{" "}
        <a className="link-hover" href="tel:+911">
          911
        </a>
      </span>
      <span className="">
        Non-Emergency:{" "}
        <a className="link-hover" href="tel:+412-781-0447">
          412-781-0447
        </a>
      </span>
      <span>
        123 Easy Street City, State 12345
        <a className="link-hover link-secondary ml-2 text-nowrap">Get Directions</a>
      </span>
      <a
        href="https://www.paypal.com/donate?token=wjfQLm43tIjTT1J3lF1c-abaHmU8Gq4Dco1DjRlKBga2Nt2jejhIKLzXks846O5J81IvUFuAtMGCuCdn"
        className="btn btn-secondary uppercase mt-4 text-xl"
      >
        Make a Donation
      </a>
      <a href="" className="btn btn-secondary uppercase text-xl">
        Volunteer
      </a>
      <div className="mt-4">
      <Image
        src="/images/apparatus/engine-102-1.jpg"
        alt="Engine 101"
        width={300}
        height={300}
        className="w-full"
      />
      <span className="flex bg-base-300 text-secondary p-4 text-lg justify-center w-full">View Our Apparatus Gallery</span>
      </div>
    </div>
  );
}
