"use client";

import { useState, type FormEvent } from "react";
import { Check } from "./Icons";
import type { Edition } from "@/lib/editions";

type Copy = {
  businessLabel: string;
  businessPlaceholder: string;
  selectLabel: string;
  selectPlaceholder: string;
  options: { value: string; label: string }[];
  setupPlaceholder: string;
  messagePlaceholder: string;
};

const COPY: Record<Edition, Copy> = {
  crypto: {
    businessLabel: "Business",
    businessPlaceholder: "Company / project name",
    selectLabel: "Use case",
    selectPlaceholder: "Select your use case…",
    options: [
      { value: "exchange", label: "Exchange / broker" },
      { value: "nft-gamefi", label: "NFT / GameFi" },
      { value: "dapp", label: "dApp / protocol" },
      { value: "saas", label: "Crypto SaaS" },
      { value: "marketplace", label: "Web3 marketplace" },
      { value: "token", label: "Token commerce" },
      { value: "other", label: "Other" },
    ],
    setupPlaceholder: "e.g. no crypto payments yet, or using X",
    messagePlaceholder: "What are you trying to accept, on which chains, and by when?",
  },
  saas: {
    businessLabel: "Company",
    businessPlaceholder: "Company / product name",
    selectLabel: "Billing model",
    selectPlaceholder: "Select your billing model…",
    options: [
      { value: "subscriptions", label: "Recurring subscriptions" },
      { value: "usage", label: "Usage-based / metered" },
      { value: "high-ticket", label: "High-ticket / annual contracts" },
      { value: "marketplace", label: "Marketplace / split payouts" },
      { value: "devtool", label: "Dev tool / API platform" },
      { value: "other", label: "Other" },
    ],
    setupPlaceholder: "e.g. card-only today, or using X",
    messagePlaceholder: "What do you want to bill, in which currencies, and by when?",
  },
};

export function ContactForm({ edition }: { edition: Edition }) {
  const copy = COPY[edition];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [useCase, setUseCase] = useState("");
  const [setup, setSetup] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ edition, name, email, business, useCase, setup, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
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

  const sending = status === "sending";

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
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
          />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
          />
        </div>
        <div className="field">
          <label htmlFor="cf-business">{copy.businessLabel}</label>
          <input
            id="cf-business"
            type="text"
            value={business}
            onChange={(e) => setBusiness(e.target.value)}
            placeholder={copy.businessPlaceholder}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-usecase">{copy.selectLabel}</label>
          <select
            id="cf-usecase"
            value={useCase}
            onChange={(e) => setUseCase(e.target.value)}
          >
            <option value="">{copy.selectPlaceholder}</option>
            {copy.options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="cf-setup">Current setup</label>
          <input
            id="cf-setup"
            type="text"
            value={setup}
            onChange={(e) => setSetup(e.target.value)}
            placeholder={copy.setupPlaceholder}
          />
        </div>
        <div className="field">
          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            placeholder={copy.messagePlaceholder}
          />
        </div>
        {status === "error" && <p className="form-error">{error}</p>}
        <button type="submit" className="form-submit" disabled={sending}>
          {sending ? "Sending…" : "Send & request a call"}
        </button>
        <p className="form-fineprint">
          By submitting you agree to be contacted about your integration. We don&apos;t share
          your details.
        </p>
      </form>
    </div>
  );
}
