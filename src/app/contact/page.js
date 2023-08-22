import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contact AWIA | AWIA",
  description: "",
};

export default function JoinPage() {
  return (
    <>
      <div className="py-16 text-center bg-gradient-to-r from-bgleft to-bgright contact-half-bg">
        <h1 className="text-6xl text-">Contact AWIA</h1>

        <div className="my-4 container grid grid-cols-3 mx-auto">
          <div></div>
          <div>
            <p>
              For all questions and comments, please complete the contact form
              and we’ll be in touch as soon as we can.
            </p>
          </div>
          <div></div>
        </div>

        <div className="container mx-auto py-10 px-16 bg-white rounded-md w-fit relative border-purple mt-12">
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <p className="my-4">
            We welcome comments and questions about AWIA and the web industry in
            Australia.
          </p>
          <form action="" method="post" data-id="">
            <div className="flex gap-10 text-left justify-center">
              <div className="w-full">
                <p className="my-3">
                  <label className="mb-3 font-semibold">First Name</label>
                  <input
                    type="text"
                    autoComplete="First Name"
                    aria-label="First Name"
                    id="fname"
                    maxLength="200"
                    name=""
                    className="px-4 py-2 mt-3 rounded-md w-full bg-white border-grey"
                    required=""
                  />
                </p>
              </div>
              <div className="w-full">
                <p className="my-3">
                  <label className="mb-3 font-semibold">Last Name</label>
                  <input
                    type="text"
                    autoComplete="Last Name"
                    aria-label="Last Name"
                    id="lname"
                    maxLength="200"
                    name=""
                    className="px-4 py-2 mt-3 rounded-md w-full bg-white border-grey"
                    required=""
                  />
                </p>
              </div>
            </div>
            <div className="flex gap-10 text-left justify-center">
              <div className="">
                <p className="my-3">
                  <label className="mb-3 font-semibold">Email Address</label>
                  <input
                    type="email"
                    autoComplete="Email"
                    aria-label="Email"
                    id="email"
                    maxLength="200"
                    name=""
                    className="px-4 py-2 mt-3 rounded-md w-full bg-white border-grey"
                    required=""
                  />
                </p>
              </div>
              <div className="">
                <p className="my-3">
                  <label className="mb-3 font-semibold">Phone Number</label>
                  <input
                    type="number"
                    autoComplete="Phone"
                    aria-label="Phone"
                    id="phone"
                    maxLength="200"
                    name=""
                    maxr
                    className="px-4 py-2 mt-3 rounded-md w-full bg-white border-grey"
                    required=""
                  />
                </p>
              </div>
            </div>
            <div className="text-left">
              <p className="my-3">
                <label className="mb-3 font-semibold">Message</label>
                <textarea
                  type="text"
                  autoComplete="Message"
                  aria-label="Message"
                  id="message"
                  rows={6}
                  maxLength="200"
                  name=""
                  className="px-4 py-2 mt-3 rounded-md w-full bg-white border-grey"
                  required=""
                />
              </p>
            </div>
            <input
              type="submit"
              value="Submit"
              className="px-12 py-4 text-white font-semibold cursor-pointer bg-awiapurple rounded-full"
            />
          </form>
        </div>
      </div>
    </>
  );
}
