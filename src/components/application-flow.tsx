"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Save, Upload } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type Field =
  | { label: string; name: string; type?: "text" | "email" | "url"; placeholder: string; multiline?: false }
  | { label: string; name: string; placeholder: string; multiline: true };

type Step = {
  title: string;
  description: string;
  fields: Field[];
};

const steps: Step[] = [
  {
    title: "Personal Information",
    description: "Applicant identity, affiliation, role, and contact details.",
    fields: [
      { label: "Full name", name: "fullName", placeholder: "Ama K. Mensah" },
      { label: "Email", name: "email", type: "email", placeholder: "name@university.edu" },
      { label: "University or organization", name: "affiliation", placeholder: "University, lab, startup, or independent" },
      { label: "Country", name: "country", placeholder: "Ghana" },
    ],
  },
  {
    title: "Research Proposal",
    description: "The scientific problem, why it matters, and what you intend to build or discover.",
    fields: [
      { label: "Project title", name: "projectTitle", placeholder: "Autonomous crop stress detection system" },
      {
        label: "Abstract",
        name: "abstract",
        placeholder: "Summarize the problem, proposed system, and expected contribution.",
        multiline: true,
      },
      {
        label: "Research track",
        name: "track",
        placeholder: "Agriculture, robotics, health, climate, African language AI, scientific computing...",
      },
    ],
  },
  {
    title: "Technical Plan",
    description: "Methods, datasets, models, evaluation, and engineering milestones.",
    fields: [
      {
        label: "Technical approach",
        name: "technicalApproach",
        placeholder: "Describe models, data, architecture, experiments, and evaluation criteria.",
        multiline: true,
      },
      { label: "Current stage", name: "currentStage", placeholder: "Idea, prototype, dataset ready, pilot, paper draft..." },
      { label: "Milestones", name: "milestones", placeholder: "List the major milestones over 8 to 16 weeks.", multiline: true },
    ],
  },
  {
    title: "AI/Compute Requirements",
    description: "The infrastructure needed and why it is necessary.",
    fields: [
      { label: "Grant tier requested", name: "grantTier", placeholder: "Explorer, Builder, Research, or Frontier" },
      {
        label: "Compute plan",
        name: "computePlan",
        placeholder: "GPU hours, AI credits, LLM/API usage, storage, data processing, or cloud requirements.",
        multiline: true,
      },
      { label: "Existing resources", name: "existingResources", placeholder: "What you already have access to.", multiline: true },
    ],
  },
  {
    title: "Expected Impact",
    description: "Scientific, technical, educational, or public-interest value.",
    fields: [
      {
        label: "Expected outcome",
        name: "expectedOutcome",
        placeholder: "Paper, dataset, benchmark, open-source tool, prototype, technical report, field demo...",
        multiline: true,
      },
      { label: "Who benefits?", name: "beneficiaries", placeholder: "Researchers, farmers, clinicians, students, engineers, public agencies...", multiline: true },
    ],
  },
  {
    title: "Ethics & Safety",
    description: "Privacy, biological risk, medical claims, deployment limits, and evaluation controls.",
    fields: [
      { label: "Risks and mitigations", name: "risks", placeholder: "Describe data, safety, deployment, misuse, bias, or evaluation concerns.", multiline: true },
      { label: "Human or sensitive data", name: "sensitiveData", placeholder: "Explain if the project uses personal, clinical, biological, or sensitive data.", multiline: true },
    ],
  },
  {
    title: "Supporting Materials",
    description: "Evidence that the applicant or team can execute.",
    fields: [
      { label: "Repository or portfolio", name: "repository", type: "url", placeholder: "https://github.com/..." },
      { label: "Paper, deck, or technical document", name: "supportDoc", type: "url", placeholder: "https://..." },
      { label: "Team members", name: "team", placeholder: "Names, roles, and affiliations.", multiline: true },
    ],
  },
  {
    title: "Video Submission",
    description: "Optional short video explaining the project and why compute access matters.",
    fields: [
      { label: "Video link", name: "videoLink", type: "url", placeholder: "Unlisted video link or demo walkthrough" },
      { label: "Final note", name: "finalNote", placeholder: "Anything reviewers should understand before reading your proposal.", multiline: true },
    ],
  },
];

type FormState = Record<string, string>;

export function ApplicationFlow() {
  const [activeStep, setActiveStep] = useState(0);
  const [formState, setFormState] = useState<FormState>(() => {
    if (typeof window === "undefined") {
      return {};
    }
    const savedDraft = window.localStorage.getItem("fci-application-draft");
    if (!savedDraft) {
      return {};
    }
    try {
      return JSON.parse(savedDraft) as FormState;
    } catch {
      return {};
    }
  });
  const [saved, setSaved] = useState(false);
  const active = steps[activeStep];
  const progress = useMemo(() => ((activeStep + 1) / steps.length) * 100, [activeStep]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.localStorage.setItem("fci-application-draft", JSON.stringify(formState));
      setSaved(true);
      window.setTimeout(() => setSaved(false), 1200);
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [formState]);

  const updateField = (name: string, value: string) => {
    setFormState((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.38fr_1fr]">
      <aside className="rounded-lg border border-line bg-white/[0.035] p-5">
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-foreground">Application progress</p>
          <span className="inline-flex items-center gap-1 text-xs text-accent" aria-live="polite">
            <Save className="h-3.5 w-3.5" aria-hidden="true" />
            {saved ? "Autosaved" : "Draft ready"}
          </span>
        </div>
        <div className="h-2 rounded-sm bg-white/[0.06]" aria-hidden="true">
          <div className="h-2 rounded-sm bg-accent transition-all" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-6 grid gap-1">
          {steps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveStep(index)}
              className={`focus-ring flex items-center gap-3 rounded-md px-3 py-3 text-left transition ${
                activeStep === index ? "bg-accent/12 text-foreground" : "text-muted hover:bg-white/[0.045] hover:text-foreground"
              }`}
            >
              <span
                className={`grid h-6 w-6 place-items-center rounded-sm border text-xs ${
                  activeStep > index
                    ? "border-accent bg-accent text-[#07100b]"
                    : activeStep === index
                      ? "border-accent text-accent"
                      : "border-line"
                }`}
              >
                {activeStep > index ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : index + 1}
              </span>
              <span className="text-sm">{step.title}</span>
            </button>
          ))}
        </div>
      </aside>

      <section className="rounded-lg border border-line bg-[#0a0d0b] p-5 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm text-accent">
                  Step {activeStep + 1} of {steps.length}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-foreground">{active.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">{active.description}</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-line bg-white/[0.04] text-accent">
                <Upload className="h-5 w-5" aria-hidden="true" strokeWidth={1.7} />
              </div>
            </div>

            <div className="grid gap-5">
              {active.fields.map((field) => (
                <label key={field.name} className="grid gap-2">
                  <span className="text-sm font-medium text-foreground">{field.label}</span>
                  {field.multiline ? (
                    <textarea
                      value={formState[field.name] ?? ""}
                      onChange={(event) => updateField(field.name, event.target.value)}
                      placeholder={field.placeholder}
                      rows={5}
                      className="focus-ring min-h-32 resize-y rounded-md border border-line bg-background/80 px-4 py-3 text-sm leading-7 text-foreground placeholder:text-muted/60"
                    />
                  ) : (
                    <input
                      value={formState[field.name] ?? ""}
                      onChange={(event) => updateField(field.name, event.target.value)}
                      type={field.type ?? "text"}
                      placeholder={field.placeholder}
                      className="focus-ring h-12 rounded-md border border-line bg-background/80 px-4 text-sm text-foreground placeholder:text-muted/60"
                    />
                  )}
                </label>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((step) => Math.max(0, step - 1))}
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-line bg-white/[0.035] px-5 text-sm font-semibold text-foreground transition hover:bg-white/[0.06] disabled:cursor-not-allowed disabled:opacity-40"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Previous
              </button>
              {activeStep < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={() => setActiveStep((step) => Math.min(steps.length - 1, step + 1))}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-[#07100b] transition hover:bg-[#9af8bd]"
                >
                  Continue
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => window.localStorage.setItem("fci-application-draft", JSON.stringify(formState))}
                  className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-semibold text-[#07100b] transition hover:bg-[#9af8bd]"
                >
                  Save Application Draft
                  <Check className="h-4 w-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
