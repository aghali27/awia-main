import Image from "next/image";
import Link from "next/link";

import IndividualIcon from "../../../public/img/join/individual.svg";
import PartnerIcon from "../../../public/img/join/partner.svg";
import StudentIcon from "../../../public/img/join/student.svg";
import TeamIcon from "../../../public/img/join/team.svg";
import AwardsIcon from "../../../public/img/join/awards.png";
import DiscountsIcon from "../../../public/img/join/discounts.png";
import NetworkIcon from "../../../public/img/join/networking.png";
import ResourcesIcon from "../../../public/img/join/resources.png";

export const metadata = {
  title: "Join AWIA | AWIA",
  description: "",
};

export default function JoinPage() {
  return (
    <>
      <div className="container grid mx-auto my-12">
        <h1>Join AWIA</h1>

        <p className="mt-8 mb-16 text-center">Select your membership tier:</p>

        <div className="grid gap-8 lg:grid-cols-4 w-4/5 mx-auto">
          <div className="p-4 text-center border-2 border-pink-500 rounded-xl">
            <Image
              src={StudentIcon}
              alt="Student icon"
              className="inline-block -mt-16 text-center"
            />

            <h2>Student</h2>

            <p>$49/year + GST</p>

            <p className="inline-block px-6 py-2 my-8 text-sm text-center text-white bg-pink-500 w-36 rounded-3xl">
              Select
            </p>

            <p className="text-sm">
              The full benefits of an individual membership at a discounted rate
              for those studying at an accredited Austrlaian institute.
            </p>
          </div>

          <div className="p-4 text-center border-2 border-blue-500 rounded-xl">
            <Image
              src={IndividualIcon}
              alt="Individual icon"
              className="inline-block -mt-16 text-center"
            />

            <h2>Individual</h2>

            <p>$99/year + GST</p>

            <p className="inline-block px-6 py-2 my-8 text-sm text-center text-white bg-blue-500 w-36 rounded-3xl">
              Select
            </p>

            <p className="text-sm">For individual members and consultants.</p>
            <p className="uppercase text-awiapurple font-semibold">including</p>
            <p className="text-sm">AWIA accreditation</p>
            <p className="text-sm">Member benefits</p>
            <p className="text-sm">Member resources</p>
            <p className="text-sm">Networking opportunities</p>
          </div>

          <div className="p-4 text-center border-2 border-purple-500 rounded-xl">
            <Image
              src={TeamIcon}
              alt="Team icon"
              className="inline-block -mt-16 text-center"
            />

            <h2>Team</h2>

            <p>$499/year + GST</p>

            <p className="inline-block px-6 py-2 my-8 text-sm text-center text-white bg-purple-500 w-36 rounded-3xl">
              Select
            </p>

            <p className="text-sm">For teams, agencies and corporates.</p>
            <p className="uppercase text-awiapurple font-semibold">including</p>
            <p className="text-sm">AWIA accreditation</p>
            <p className="text-sm">2 x Individual Memberships</p>
            <p className="text-sm">Business Listing</p>
            <p className="text-sm">Discounted AWA entry & more</p>
          </div>

          <div className="p-4 text-center border-2 border-gray-600 rounded-xl">
            <Image
              src={PartnerIcon}
              alt="Partner icon"
              className="inline-block -mt-16 text-center"
            />

            <h2>Partner</h2>

            <p>Talk to us</p>

            <p className="inline-block px-6 py-2 my-8 text-sm text-center text-white bg-black w-36 rounded-3xl">
              Talk to us
            </p>

            <p className="text-sm">
              Support AWIA and get your brand in front of the largest web
              industry group in Australia.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-14 w-4/5 my-12 mx-auto items-center">
          <div>
            <h2>All memberships include</h2>
          </div>
          <div className="text-right">
            <p>
              Questions? Contact our{" "}
              <span className="underline text-awiapurple">
                Membership Coordinator
              </span>
            </p>
          </div>
          <div>
            <div className="flex gap-5 items-center w-">
              <div>
                <Image
                  src={DiscountsIcon}
                  alt="Discounts icon"
                  className="w-48"
                />
              </div>
              <div>
                <p className="text-xl font-medium">Partner Discounts</p>
                <p>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Vestibulum id ligula porta felis euismod semper.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <div>
                <Image
                  src={ResourcesIcon}
                  alt="Resources icon"
                  className="w-48"
                />
              </div>
              <div>
                <p className="text-xl font-medium">Partner Discounts</p>
                <p>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Vestibulum id ligula porta felis euismod semper.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <div>
                <Image src={NetworkIcon} alt="Network icon" className="w-48" />
              </div>
              <div>
                <p className="text-xl font-medium">Partner Discounts</p>
                <p>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Vestibulum id ligula porta felis euismod semper.{" "}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-5 items-center">
              <div>
                <Image src={AwardsIcon} alt="Awards icon" className="w-48" />
              </div>
              <div>
                <p className="text-xl font-medium">Partner Discounts</p>
                <p>
                  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                  auctor. Vestibulum id ligula porta felis euismod semper.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
