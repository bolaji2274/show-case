import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
import ReactGA from "react-ga4";

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
    
    // Increased timeout to 7 seconds so they can actually read the "Thank You"
    setTimeout(() => {
      setShowAlert(false);
    }, 7000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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
      
      // Conversion Tracking
      ReactGA.event({
        category: "Contact",
        action: "Form Submission Success",
        label: "Contact Form",
      });

      // Clear the form
      setFormData({ name: "", email: "", message: "" });

      // Personalized Thank You Message
      showAlertMessage(
        "success", 
        `Thank you, ${formData.name.split(' ')[0]}! Your message is on its way to my inbox. I'll get back to you shortly.`
      );

    } catch (error) {
      setIsLoading(false);
      console.error("EmailJS Error:", error);

      ReactGA.event({
        category: "Contact",
        action: "Form Submission Failure",
        label: error?.text || "Unknown Error",
      });

      showAlertMessage("danger", "I couldn't receive your message. Please try reaching out via WhatsApp or LinkedIn!");
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
      
      {/* Alert Component triggers here */}
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Build Together</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to scale your infrastructure, automate your deployment pipelines, 
            build robust backend systems, or bring innovative DevOps solutions to life, I'm here to help. 
          </p>
        </div>
        
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="field-label">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Bolaji Hammed"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="email" className="field-label">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="bolaji.hammed@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="message" className="field-label">Project Details</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Tell me about your infrastructure needs..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold"
          >
            {!isLoading ? "Send Message" : "Sending Message..."}
          </button>
        </form>
        
        <div className="w-full mt-8 pt-6 border-t border-white/10">
          <div className="text-center text-neutral-400 text-sm">
            <p className="mb-2">Prefer direct contact?</p>
            <div className="flex flex-col gap-1">
              <p>📧 Available for DevOps consulting</p>
              <p>⚡ Quick response within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;