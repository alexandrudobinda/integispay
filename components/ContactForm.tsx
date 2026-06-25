"use client";

import { useState, type FormEvent } from "react";
import { Check } from "./Icons";

export function ContactForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [useCase, setUseCase] = useState("");
  const [setup, setSetup] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No backend in the prototype — wire this to your endpoint / CRM / email service.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id="contact-form" className="form-card">
        <div className="form-success">
          <div className="success-check">
            <Check />
          </div>
          <h3>Thanks — we&apos;ll be in touch.</h3>
          <p>
            We&apos;ve received your details and will reply within one business day to set up
            your integration call.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="contact-form" className="form-card">
      <h2>Tell us about your project</h2>
      <p className="form-intro">
        All fields help us scope accurately. We reply within one business day.
      </p>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div className="field">
          <label htmlFor="cf-business">Business</label>
          <input
            id="cf-business"
            type="text"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder="Company / project name"
          />
        </div>
        <div className="field">
          <label htmlFor="cf-usecase">Use case</label>
          <select
            id="cf-usecase"
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
          >
            <option value="">Select your use case…</option>
            <option value="exchange">Exchange / broker</option>
            <option value="nft-gamefi">NFT / GameFi</option>
            <option value="dapp">dApp / protocol</option>
            <option value="saas">Crypto SaaS</option>
            <option value="marketplace">Web3 marketplace</option>
            <option value="token">Token commerce</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="cf-setup">Current setup</label>
          <input
            id="cf-setup"
            type="text"
            value={setup}
            onChange={(e) => setSetup(e.target.value)}
            placeholder="e.g. no crypto payments yet, or using X"
          />
        </div>
        <div className="field">
          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder="What are you trying to accept, on which chains, and by when?"
          />
        </div>
        <button type="submit" className="form-submit">
          Send &amp; request a call
        </button>
        <p className="form-fineprint">
          By submitting you agree to be contacted about your integration. We don&apos;t share
          your details.
        </p>
      </form>
    </div>
  );
}
