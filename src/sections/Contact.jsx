import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import ReactGA from "react-ga4"; // Step 1: Import ReactGA

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Track that the user at least clicked the button
    ReactGA.event({
      category: "Contact",
      action: "Attempted Form Submission",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Bolaji",
          from_email: formData.email,
          to_email: "hammedbolajihammed@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setIsLoading(false);
      
      // Step 2: Track Successful Conversion
      ReactGA.event({
        category: "Contact",
        action: "Form Submission Success",
        label: "Contact Form",
      });

      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "Your message has been sent successfully!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);

      // Step 3: Track Failure (useful for debugging)
      ReactGA.event({
        category: "Contact",
        action: "Form Submission Failure",
        label: error?.text || "Unknown Error",
      });

      showAlertMessage("danger", "Something went wrong! Please try again.");
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Build Together</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to scale your infrastructure, automate your deployment pipelines, 
            build robust backend systems, or bring innovative DevOps solutions to life, I'm here to help. 
            Let's discuss how we can optimize your technology stack and accelerate your business growth.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Bolaji Hammed"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="bolaji.hammed@company.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Project Details
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Tell me about your infrastructure needs, automation goals, or development project..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </form>
        
        <div className="w-full mt-8 pt-6 border-t border-white/10">
          <div className="text-center text-neutral-400 text-sm">
            <p className="mb-2">Prefer direct contact?</p>
            <div className="flex flex-col gap-1">
              <p>📧 Available for DevOps consulting</p>
              <p>⚡ Quick response within 24 hours</p>
              <p>🚀 Let's accelerate your deployment!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;