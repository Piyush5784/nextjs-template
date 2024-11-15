import { BsSpeedometer2 } from "react-icons/bs";
import { Card4 } from "./Card";
const Features2 = () => {
  return (
    <div className="bg-img2 pt-10 md:p-20 md:pl-40 pl-10">
      <p className="md:text-6xl text-4xl ">
        Elevate your <br /> SEO efforts.
      </p>

      <div className="flex md:gap-56 gap-10 md:pt-6 pt-5 flex-col md:flex-row">
        <div className="flex md:gap-20 gap-16 flex-col md:pt-10">
          <Card4
            description={
              <div>
                {" "}
                Perform complex SEO audits and <br />
                optimizations with a single click.
              </div>
            }
            logo={<BsSpeedometer2 />}
            title="User-friendly dashboard"
          ></Card4>
          <Card4
            description={
              <div>
                {" "}
                Simple corrections for immediate <br /> improvements.
              </div>
            }
            logo={<BsSpeedometer2 />}
            title="Context evaluation"
          ></Card4>
          <Card4
            description={
              <div>
                {" "}
                Guides you through the process <br /> of creating and managing
                links.
              </div>
            }
            logo={<BsSpeedometer2 />}
            title="Link Optimization Wizard"
          ></Card4>
        </div>
        <div className="flex md:gap-20 gap-16 flex-col md:pt-10">
          <Card4
            description={
              <div>
                Visual Inshights into your site's <br /> performance.
              </div>
            }
            logo={<BsSpeedometer2 />}
            title="Visual reports"
          ></Card4>
          <Card4
            description={
              <div>
                Helps you set and achiever SEO goals with <br /> guided
                assistance.
              </div>
            }
            logo={<BsSpeedometer2 />}
            title="SEO goal setting"
          ></Card4>
          <Card4
            description={
              <div>
                Perform complex SEO audits and <br /> optimizations with a
                single click.
              </div>
            }
            logo={<BsSpeedometer2 />}
            title="User-friendly dashboard"
          ></Card4>
        </div>
        <div className="flex md:gap-20 gap-16 flex-col md:pt-10">
          <Card4
            description={
              <div>
                {" "}
                Perform complex SEO audits and <br />
                optimizations with a single click.
              </div>
            }
            logo={<BsSpeedometer2 />}
            title="User-friendly dashboard"
          ></Card4>
          <Card4
            description={
              <div>
                {" "}
                Perform complex SEO audits and <br />
                optimizations with a single click.
              </div>
            }
            logo={<BsSpeedometer2 />}
            title="User-friendly dashboard"
          ></Card4>
          <Card4
            description={
              <div>
                {" "}
                Perform complex SEO audits and <br />
                optimizations with a single click.
              </div>
            }
            logo={<BsSpeedometer2 />}
            title="User-friendly dashboard"
          ></Card4>
        </div>
      </div>
    </div>
  );
};

export default Features2;
