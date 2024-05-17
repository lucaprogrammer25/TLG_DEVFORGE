import React, { useState } from "react";
import "../../style/NewsLetter/SubscribeInput.scss";

interface FormState {
  email: string;
  status: "idle" | "submitting" | "submitted" | "error";
}

const NewsletterForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    status: "idle",
  });

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
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormState({ email: "", status: "submitted" });

      // Dopo 5 secondi, resetta lo stato a "idle"
      setTimeout(() => {
        setFormState({ email: "", status: "idle" });
      }, 5000);
    } catch (error) {
      setFormState({ ...formState, status: "error" });
    }
  };

  return (
    <>
      <div className="divForm">
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
            className="ButtonTmgCss2"
            disabled={formState.status === "submitting"}
          >
            <span>
            Subscribe
            </span>
          </button>
          <div
            className={`subscribeThank ${
              formState.status === "submitted" ? "show" : ""
            }`}
          >
            {formState.status === "submitted" && (
              <p>Thank you for subscribing!</p>
            )}
            {formState.status === "error" && <p>Sorry, there was a problem.</p>}
          </div>
        </form>
      </div>
    </>
  );
};

export default NewsletterForm;
