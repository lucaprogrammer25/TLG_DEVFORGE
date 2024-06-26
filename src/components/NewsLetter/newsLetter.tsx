import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";

interface FormState {
  email: string;
  status: "idle" | "submitting" | "submitted" | "error";
  visible: boolean;
}

const NewsletterForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    status: "idle",
    visible: true,
  });

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const formVisibility = localStorage.getItem("formVisibility");
    if (formVisibility === "hidden") {
      setFormState((prevState) => ({
        ...prevState,
        visible: false,
      }));
    }
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        formState.status === "submitted" &&
        formRef.current &&
        !formRef.current.contains(event.target as Node)
      ) {
        setFormState((prevState) => ({
          ...prevState,
          visible: false,
        }));
        localStorage.setItem("formVisibility", "hidden");
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [formState.status]);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      email: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formState.email || !formState.email.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }

    setFormState({ ...formState, status: "submitting" });

    try {
      const serviceID = 'service_1euakbp';
      const templateID = 'template_twxz8ih';
      const userID = 'pH9R5tTf0GApKPinj';

      await emailjs.send(serviceID, templateID, { email: formState.email }, userID);

      setFormState({ email: "", status: "submitted", visible: true });

      setTimeout(() => {
        setFormState((prevState) => ({
          ...prevState,
          visible: true,
        }));
      }, 1000);

      setTimeout(() => {
        setFormState((prevState) => ({
          ...prevState,
          visible: false,
        }));
        localStorage.setItem("formVisibility", "hidden");
      }, 20000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setFormState({ ...formState, status: "error" });
    }
  };

  return (
    <>
      {formState.visible && (
        <div className="divForm" ref={formRef}>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="email">
              <h2>Join our community and stay updated on all our products</h2>
              <p>Ricevi nuovi coupon</p>
              <p>Resta aggiornato su tutte le nostre offerte</p>
            </label>
            <input
              className="subscribeInput"
              type="email"
              id="email"
              value={formState.email}
              onChange={handleEmailChange}
              required
            />
            <button
              type="submit"
              className="ButtonTmgCss3"
              disabled={formState.status === "submitting"}
            >
              <span>Subscribe</span>
            </button>
            <div
              className={`subscribeThank ${
                formState.status === "submitted" ? "show" : ""
              }`}
            >
              <div>
                <h3>Thank you for subscribing!</h3>
                <p>
                  You'll start receiving updates on our latest products and
                  exclusive offers directly in your inbox.
                </p>
                <p>
                  If you have any questions, feel free to reach out to our
                  support team at "piccicadavide@gmail.com".
                </p>
              </div>
              {formState.status === "error" && (
                <p>Sorry, there was a problem. Please try again later.</p>
              )}
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default NewsletterForm;
