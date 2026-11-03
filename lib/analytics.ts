// Centralizovaný systém na sledovanie konverzného funnela (GA4 / GTM / Vlastný tracking)

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (
      command: "event" | "config" | "js",
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export type TriageFunnelEvent =
  | "triage_start"
  | "triage_step_view"
  | "triage_option_select"
  | "triage_step_back"
  | "triage_reset"
  | "triage_red_flag_alert"
  | "triage_complete"
  | "triage_pharmacy_modal_open"
  | "triage_pharmacy_modal_close"
  | "pharmacy_outbound_click";

export interface AnalyticsEventParams {
  step_number?: number;
  total_steps?: number;
  step_id?: string;
  step_title?: string;
  category?: string;
  option_id?: string;
  option_label?: string;
  result_id?: string;
  result_title?: string;
  product_key?: "aqvitox" | "mesitran" | string;
  product_name?: string;
  pharmacy_id?: string;
  pharmacy_name?: string;
  destination_url?: string;
  red_flag_reason?: string;
  history_length?: number;
  [key: string]: unknown;
}

/**
 * Bezpečné odoslanie analytického eventu do GA4 (gtag), GTM (dataLayer) alebo lokálnej konzoly
 */
export function trackEvent(
  eventName: TriageFunnelEvent,
  params: AnalyticsEventParams = {}
): void {
  if (typeof window === "undefined") return;

  const eventPayload = {
    ...params,
    timestamp: new Date().toISOString(),
    url: window.location.pathname,
  };

  // 1. Google Analytics 4 (gtag.js)
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventPayload);
  }

  // 2. Google Tag Manager (dataLayer)
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: eventName,
      ...eventPayload,
    });
  }

  // 3. Vývojársky log v konzole pre overenie funnela počas testovania
  if (process.env.NODE_ENV !== "production") {
    console.log(`[Funnel Analytics] %c${eventName}`, "color: #0e8388; font-weight: bold;", eventPayload);
  }
}

// ================= Špecifické helper funkcie pre jednotlivé kroky =================

export function trackStepView(stepNumber: number, totalSteps: number, stepId: string, stepTitle: string, category?: string) {
  trackEvent("triage_step_view", {
    step_number: stepNumber,
    total_steps: totalSteps,
    step_id: stepId,
    step_title: stepTitle,
    category: category || "root",
  });
}

export function trackOptionSelect(
  stepNumber: number,
  stepId: string,
  optionId: string,
  optionLabel: string,
  category?: string
) {
  trackEvent("triage_option_select", {
    step_number: stepNumber,
    step_id: stepId,
    option_id: optionId,
    option_label: optionLabel,
    category: category || "root",
  });
}

export function trackTriageComplete(resultId: string, resultTitle: string, category: string, stepsCompleted: number) {
  trackEvent("triage_complete", {
    result_id: resultId,
    result_title: resultTitle,
    category,
    step_number: stepsCompleted,
  });
}

export function trackRedFlag(stepId: string, reason: string, category?: string) {
  trackEvent("triage_red_flag_alert", {
    step_id: stepId,
    red_flag_reason: reason,
    category: category || "unknown",
  });
}

export function trackPharmacyModalOpen(productKey: "aqvitox" | "mesitran", productName: string) {
  trackEvent("triage_pharmacy_modal_open", {
    product_key: productKey,
    product_name: productName,
  });
}

export function trackPharmacyClick(pharmacyName: string, productKey: string, destinationUrl: string) {
  trackEvent("pharmacy_outbound_click", {
    pharmacy_name: pharmacyName,
    product_key: productKey,
    destination_url: destinationUrl,
  });
}

export function trackTriageReset(lastStepNumber: number, historyLength: number) {
  trackEvent("triage_reset", {
    step_number: lastStepNumber,
    history_length: historyLength,
  });
}

