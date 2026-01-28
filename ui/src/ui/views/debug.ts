import { html, nothing } from "lit";
import { t } from "../i18n";

import { formatEventPayload } from "../presenter";
import type { EventLogEntry } from "../app-events";

export type DebugProps = {
  loading: boolean;
  status: Record<string, unknown> | null;
  health: Record<string, unknown> | null;
  models: unknown[];
  heartbeat: unknown;
  eventLog: EventLogEntry[];
  callMethod: string;
  callParams: string;
  callResult: string | null;
  callError: string | null;
  onCallMethodChange: (next: string) => void;
  onCallParamsChange: (next: string) => void;
  onRefresh: () => void;
  onCall: () => void;
};

export function renderDebug(props: DebugProps) {
  const securityAudit =
    props.status && typeof props.status === "object"
      ? (props.status as { securityAudit?: { summary?: Record<string, number> } }).securityAudit
      : null;
  const securitySummary = securityAudit?.summary ?? null;
  const critical = securitySummary?.critical ?? 0;
  const warn = securitySummary?.warn ?? 0;
  const info = securitySummary?.info ?? 0;
  const securityTone = critical > 0 ? "danger" : warn > 0 ? "warn" : "success";
  const securityLabel =
    critical > 0
      ? `${critical} critical`
      : warn > 0
        ? `${warn} warnings`
        : t("debug.noIssues");

  return html`
    <section class="grid grid-cols-2" style="gap: 18px;">
      <div class="card" style="min-width: 0;">
        <div class="row" style="justify-content: space-between;">
          <div>
            <div class="card-title">${t("debug.snapshots.title")}</div>
            <div class="card-sub">${t("debug.snapshots.subtitle")}</div>
          </div>
          <button class="btn" ?disabled=${props.loading} @click=${props.onRefresh}>
            ${props.loading ? t("common.loading") : t("common.refresh")}
          </button>
        </div>
        <div class="stack" style="margin-top: 12px;">
          <div>
            <div class="muted">${t("debug.snapshots.status")}</div>
            ${securitySummary
              ? html`<div class="callout ${securityTone}" style="margin-top: 8px;">
                  ${t("debug.snapshots.securityAudit", { label: securityLabel })}
                  ${info > 0 ? t("debug.snapshots.securityAuditInfo", { count: info }) : ""}.
                  ${(() => {
                    const cmdText = "moltbot security audit --deep";
                    const msg = t("debug.snapshots.securityAuditCommand", { command: cmdText });
                    const parts = msg.split(cmdText);
                    return html`${parts[0]}<span class="mono">${cmdText}</span>${parts[1]}`;
                  })()}
                </div>`
              : nothing}
            <pre class="code-block" style="max-width: 100%; overflow-x: auto;">${JSON.stringify(props.status ?? {}, null, 2)}</pre>
          </div>
          <div>
            <div class="muted">${t("debug.snapshots.health")}</div>
            <pre class="code-block" style="max-width: 100%; overflow-x: auto;">${JSON.stringify(props.health ?? {}, null, 2)}</pre>
          </div>
          <div>
            <div class="muted">${t("debug.snapshots.heartbeat")}</div>
            <pre class="code-block" style="max-width: 100%; overflow-x: auto;">${JSON.stringify(props.heartbeat ?? {}, null, 2)}</pre>
          </div>
        </div>
      </div>

      <div class="card" style="min-width: 0;">
        <div class="card-title">${t("debug.manualRpc.title")}</div>
        <div class="card-sub">${t("debug.manualRpc.subtitle")}</div>
        <div class="form-grid" style="margin-top: 16px;">
          <label class="field">
            <span>${t("debug.manualRpc.method")}</span>
            <input
              .value=${props.callMethod}
              @input=${(e: Event) =>
                props.onCallMethodChange((e.target as HTMLInputElement).value)}
              placeholder="system-presence"
            />
          </label>
          <label class="field">
            <span>${t("debug.manualRpc.params")}</span>
            <textarea
              .value=${props.callParams}
              @input=${(e: Event) =>
                props.onCallParamsChange((e.target as HTMLTextAreaElement).value)}
              rows="6"
            ></textarea>
          </label>
        </div>
        <div class="row" style="margin-top: 12px;">
          <button class="btn primary" @click=${props.onCall}>${t("debug.manualRpc.call")}</button>
        </div>
        ${props.callError
          ? html`<div class="callout danger" style="margin-top: 12px;">
              ${props.callError}
            </div>`
          : nothing}
        ${props.callResult
          ? html`<pre class="code-block" style="margin-top: 12px; max-width: 100%; overflow-x: auto;">${props.callResult}</pre>`
          : nothing}
      </div>
    </section>

    <section class="grid grid-cols-2" style="margin-top: 18px; gap: 18px;">
      <div class="card" style="min-width: 0;">
        <div class="card-title">${t("debug.models.title")}</div>
        <div class="card-sub">${t("debug.models.subtitle")}</div>
        <pre class="code-block" style="margin-top: 12px; max-width: 100%; overflow-x: auto;">${JSON.stringify(
          props.models ?? [],
          null,
          2,
        )}</pre>
      </div>

      <div class="card" style="min-width: 0;">
        <div class="card-title">${t("debug.eventLog.title")}</div>
        <div class="card-sub">${t("debug.eventLog.subtitle")}</div>
        ${props.eventLog.length === 0
          ? html`<div class="muted" style="margin-top: 12px;">${t("debug.eventLog.empty")}</div>`
          : html`
              <div class="list" style="margin-top: 12px;">
                ${props.eventLog.map(
                  (evt) => html`
                    <div class="list-item">
                      <div class="list-main">
                        <div class="list-title">${evt.event}</div>
                        <div class="list-sub">${new Date(evt.ts).toLocaleTimeString()}</div>
                      </div>
                      <div class="list-meta" style="text-align: left;">
                        <pre class="code-block" style="max-width: 100%; overflow-x: auto;">${formatEventPayload(evt.payload)}</pre>
                      </div>
                    </div>
                  `,
                )}
              </div>
            `}
      </div>
    </section>
  `;
}
