/* Illustrative "terminal" cards. Keyword + cursor colors derive from the
   edition accent via CSS variables (.ed-crypto / .ed-saas wrapper). */

export function HomeCodePanel() {
  return (
    <div className="code-panel">
      <div className="code-titlebar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="code-filename">POST · create-payment.ts</span>
        <span className="code-status">200 OK</span>
      </div>
      <pre className="code-body">
        <span className="line">
          <span className="tok-key">const</span> payment = <span className="tok-key">await</span>{" "}
          client.payments.<span className="tok-key">create</span>
          {"({"}
        </span>
        <span className="line">
          {"  "}amount:{"      "}
          <span className="tok-num">149.00</span>,
        </span>
        <span className="line">
          {"  "}settlement:{"  "}
          <span className="tok-str">&quot;EURXM&quot;</span>,{"   "}
          <span className="tok-com">// 1:1 fiat-backed</span>
        </span>
        <span className="line">
          {"  "}accepts:{"     "}[<span className="tok-str">&quot;BTC&quot;</span>,{" "}
          <span className="tok-str">&quot;ETH&quot;</span>,{" "}
          <span className="tok-str">&quot;SOL&quot;</span>,{" "}
          <span className="tok-str">&quot;SUI&quot;</span>],
        </span>
        <span className="line">
          {"  "}recurring:{"   "}
          <span className="tok-key">true</span>,
        </span>
        <span className="line">
          {"  "}webhook:{"     "}
          <span className="tok-str">&quot;https://app.acme.xyz/hooks&quot;</span>
        </span>
        <span className="line">{"});"}</span>
        <span className="line tok-com">// → hosted checkout + multi-chain settlement</span>
        <span className="line">
          <span className="tok-key">checkout</span>.url <span className="cursor">▍</span>
        </span>
      </pre>
      <div className="code-chips">
        <span className="code-chip accent">webhooks</span>
        <span className="code-chip accent">multi-chain</span>
        <span className="code-chip gray">recurring</span>
        <span className="code-chip gray">payment links</span>
      </div>
      <span className="illustrative corner">illustrative</span>
    </div>
  );
}

export function SubscriptionCodePanel() {
  return (
    <div className="code-panel">
      <div className="code-titlebar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="code-filename">POST · create-subscription.ts</span>
        <span className="code-status">201 Created</span>
      </div>
      <pre className="code-body">
        <span className="line">
          <span className="tok-key">const</span> sub = <span className="tok-key">await</span>{" "}
          client.subscriptions.<span className="tok-key">create</span>
          {"({"}
        </span>
        <span className="line">
          {"  "}customer:{"   "}
          <span className="tok-str">&quot;cus_8Fk2&quot;</span>,
        </span>
        <span className="line">
          {"  "}plan:{"       "}
          <span className="tok-str">&quot;pro_monthly&quot;</span>,
        </span>
        <span className="line">
          {"  "}amount:{"     "}
          <span className="tok-num">49.00</span>,
        </span>
        <span className="line">
          {"  "}settlement:{" "}
          <span className="tok-str">&quot;EURXM&quot;</span>,{"   "}
          <span className="tok-com">// 1:1 fiat-backed</span>
        </span>
        <span className="line">
          {"  "}accepts:{"    "}[<span className="tok-str">&quot;card&quot;</span>,{" "}
          <span className="tok-str">&quot;BTC&quot;</span>,{" "}
          <span className="tok-str">&quot;ETH&quot;</span>,{" "}
          <span className="tok-str">&quot;USDC&quot;</span>],
        </span>
        <span className="line">
          {"  "}dunning:{"    "}
          <span className="tok-key">true</span>
        </span>
        <span className="line">{"});"}</span>
        <span className="line tok-com">// → recurring checkout + auto-retry on fail</span>
        <span className="line">
          <span className="tok-key">sub</span>.status <span className="cursor">▍</span>
        </span>
      </pre>
      <div className="code-chips">
        <span className="code-chip accent">recurring</span>
        <span className="code-chip accent">dunning</span>
        <span className="code-chip gray">webhooks</span>
        <span className="code-chip gray">metered</span>
      </div>
      <span className="illustrative corner">illustrative</span>
    </div>
  );
}

export function WebhookCodePanel() {
  return (
    <div className="code-panel elevated">
      <div className="code-titlebar plain">
        <span className="dot light" />
        <span className="dot light" />
        <span className="dot light" />
        <span className="code-filename">webhook-handler.ts</span>
      </div>
      <pre className="code-body sm">
        <span className="line tok-com">// verify signature, then act on the event</span>
        <span className="line">
          <span className="tok-key">app</span>.post(
          <span className="tok-str">&quot;/hooks/xmoney&quot;</span>, (req, res) =&gt; {"{"}
        </span>
        <span className="line">
          {"  "}
          <span className="tok-key">const</span> ok = verifySignature(req, secret);
        </span>
        <span className="line">
          {"  "}
          <span className="tok-key">if</span> (!ok) <span className="tok-key">return</span>{" "}
          res.status(<span className="tok-num">400</span>).end();
        </span>
        <span className="line">{" "}</span>
        <span className="line">
          {"  "}
          <span className="tok-key">switch</span> (req.body.event) {"{"}
        </span>
        <span className="line">
          {"    "}
          <span className="tok-key">case</span>{" "}
          <span className="tok-str">&quot;payment.confirmed&quot;</span>:
        </span>
        <span className="line">
          {"      "}fulfillOrder(req.body.data);{" "}
          <span className="tok-com">// multi-chain</span>
        </span>
        <span className="line">
          {"      "}
          <span className="tok-key">break</span>;
        </span>
        <span className="line">
          {"    "}
          <span className="tok-key">case</span>{" "}
          <span className="tok-str">&quot;payout.settled&quot;</span>:
        </span>
        <span className="line">
          {"      "}ledger.record(req.body.data);{" "}
          <span className="tok-com">// EURXM</span>
        </span>
        <span className="line">{"  }"}</span>
        <span className="line">
          {"  "}res.status(<span className="tok-num">200</span>).end();
        </span>
        <span className="line">{"});"}</span>
      </pre>
      <div className="code-footer">
        <span className="code-footer-note">Signed · idempotent · retried</span>
        <span className="illustrative">illustrative</span>
      </div>
    </div>
  );
}

export function SubscriptionWebhookPanel() {
  return (
    <div className="code-panel elevated">
      <div className="code-titlebar plain">
        <span className="dot light" />
        <span className="dot light" />
        <span className="dot light" />
        <span className="code-filename">subscription-webhook.ts</span>
      </div>
      <pre className="code-body sm">
        <span className="line tok-com">// verify signature, then act on the event</span>
        <span className="line">
          <span className="tok-key">app</span>.post(
          <span className="tok-str">&quot;/hooks/billing&quot;</span>, (req, res) =&gt; {"{"}
        </span>
        <span className="line">
          {"  "}
          <span className="tok-key">const</span> ok = verifySignature(req, secret);
        </span>
        <span className="line">
          {"  "}
          <span className="tok-key">if</span> (!ok) <span className="tok-key">return</span>{" "}
          res.status(<span className="tok-num">400</span>).end();
        </span>
        <span className="line">{" "}</span>
        <span className="line">
          {"  "}
          <span className="tok-key">switch</span> (req.body.event) {"{"}
        </span>
        <span className="line">
          {"    "}
          <span className="tok-key">case</span>{" "}
          <span className="tok-str">&quot;invoice.paid&quot;</span>:
        </span>
        <span className="line">{"      "}grantAccess(req.body.customer);</span>
        <span className="line">
          {"      "}
          <span className="tok-key">break</span>;
        </span>
        <span className="line">
          {"    "}
          <span className="tok-key">case</span>{" "}
          <span className="tok-str">&quot;payment.failed&quot;</span>:
        </span>
        <span className="line">
          {"      "}startDunning(req.body.subscription);{" "}
          <span className="tok-com">// retry</span>
        </span>
        <span className="line">{"  }"}</span>
        <span className="line">
          {"  "}res.status(<span className="tok-num">200</span>).end();
        </span>
        <span className="line">{"});"}</span>
      </pre>
      <div className="code-footer">
        <span className="code-footer-note">Signed · idempotent · retried</span>
        <span className="illustrative">illustrative</span>
      </div>
    </div>
  );
}
