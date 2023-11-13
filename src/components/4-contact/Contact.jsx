import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactUsAnimation from "../../animation/contact-us.json";
export default function Contact() {
  const [state, handleSubmit] = useForm("xdorvaek");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when i publish
        something new.
      </p>
      <div style={{ justifyContent: "space-between", alignItems: "start" }} className="flex">
        <form onSubmit={handleSubmit} className="" action="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ marginTop: "1.5rem" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting ..." : "submit"}
          </button>
          {state.succeeded && (
            <p
              style={{
                fontSize: "18px",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Lottie
                loop={false}
                style={{ height: "37px" }}
                animationData={doneAnimation}
              />
              Thanks for joining!
            </p>
          )}
        </form>
        <div className="animation">
          <Lottie className="contact-animation" style={{height: "350px"}} animationData={contactUsAnimation} />
        </div>
      </div>
    </section>
  );
}
