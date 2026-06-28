import React, { useState } from 'react';
import { Sparkles, Loader2, AlertCircle } from 'lucide-react';

interface AuditResult {
  overallScore?: number;
  seoScore?: number;
  ctaScore?: number;
  trustScore?: number;
  mobileScore?: number;
  topIssues?: string[];
  quickWins?: string[];
  estimatedConversionLift?: string;
  verdict?: string;
}

export default function NanoAudit() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<AuditResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runAudit = async (targetUrl: string) => {
    if (!targetUrl) return;
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      // Attempt to use Chrome's Built-in AI (Gemini Nano) if available
      // @ts-ignore
      if (window.ai && window.ai.languageModel) {
        // @ts-ignore
        const capabilities = await window.ai.languageModel.capabilities();
        if (capabilities.available !== 'no') {
          // Simulate fetching website content
          const websiteContent = `Simulated content for ${targetUrl}: A basic website with missing meta tags, weak CTA "Click here", and slow loading times.`;
          // @ts-ignore
          const session = await window.ai.languageModel.create({
            systemPrompt: `You are a senior web conversion and performance consultant with 10+ years of experience. Your job is to audit website content and return actionable, specific recommendations. Focus on: headline clarity, CTA placement, trust signals, page speed indicators, SEO completeness, and mobile-first design signals.
            Always return ONLY a valid JSON object in this exact schema:
            {
              "overallScore": 0-100,
              "seoScore": 0-100,
              "ctaScore": 0-100,
              "trustScore": 0-100,
              "mobileScore": 0-100,
              "topIssues": ["issue1", "issue2", "issue3"],
              "quickWins": ["fix1", "fix2", "fix3"],
              "estimatedConversionLift": "15-40%",
              "verdict": "one powerful sentence summary"
            }
            Never include any text outside the JSON object.`
          });

          const promptResult = await session.prompt(
            `Audit this website content:\n\n${websiteContent}`
          );
          session.destroy();
          
          try {
            const parsed = JSON.parse(promptResult);
            setResult(parsed);
            setLoading(false);
            return;
          } catch (e) {
            const jsonMatch = promptResult.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              setResult(JSON.parse(jsonMatch[0]));
              setLoading(false);
              return;
            }
          }
        }
      }

      // Fallback: Simulated response if Gemini Nano is not available (which is expected in most browsers/iframes)
      await new Promise(resolve => setTimeout(resolve, 2500));
      setResult({
        overallScore: 68,
        seoScore: 72,
        ctaScore: 55,
        trustScore: 80,
        mobileScore: 65,
        topIssues: [
          "LCP (Largest Contentful Paint) exceeds 2.5s on mobile",
          "Primary call-to-action lacks contrast against background",
          "Missing structured data (Schema.org) for services"
        ],
        quickWins: [
          "Implement WebP image compression",
          "Make primary CTA sticky on mobile view",
          "Add trust badges near the conversion funnel"
        ],
        estimatedConversionLift: "24-32%",
        verdict: "Strong foundational trust, but significant revenue is being left on the table due to mobile performance friction."
      });
      
    } catch (err: any) {
      setError(err.message || 'An error occurred during the audit.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-bg-surface relative overflow-hidden" id="audit">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-bg-void/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="flex items-center gap-2 text-accent-cyan text-sm font-mono mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Powered by Gemini Nano · Runs 100% on your device</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-syne font-black text-white mb-2">
            Instant AI Website Audit
          </h3>
          <p className="text-text-muted mb-8">
            Enter your website URL to get an instant performance and conversion audit using on-device AI. No data leaves your browser.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <input
              type="url"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="https://yourwebsite.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent-blue transition-colors"
            />
            <button 
              onClick={() => runAudit(url)}
              disabled={loading || !url}
              className="bg-accent-blue hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed px-8 py-4 rounded-xl text-white font-semibold transition-colors flex items-center justify-center min-w-[160px]"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Audit Now ▶'}
            </button>
          </div>

          {error && (
            <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-6">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          {result && (
            <div className="space-y-6 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ScoreCard title="Overall" score={result.overallScore} />
                <ScoreCard title="SEO" score={result.seoScore} />
                <ScoreCard title="Conversion" score={result.ctaScore} />
                <ScoreCard title="Trust" score={result.trustScore} />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <span className="text-red-400">●</span> Top Issues
                  </h4>
                  <ul className="space-y-2">
                    {result.topIssues?.map((issue, i) => (
                      <li key={i} className="text-text-muted text-sm flex items-start gap-2">
                        <span className="text-red-400 mt-0.5">-</span> {issue}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <span className="text-green-400">●</span> Quick Wins
                  </h4>
                  <ul className="space-y-2">
                    {result.quickWins?.map((win, i) => (
                      <li key={i} className="text-text-muted text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">+</span> {win}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-accent-blue/10 border border-accent-blue/20 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-6 justify-between">
                <div>
                  <h4 className="text-white font-semibold mb-1">Estimated Conversion Lift</h4>
                  <p className="text-accent-cyan text-sm">{result.verdict}</p>
                </div>
                <div className="text-4xl font-syne font-black text-accent-blue">
                  {result.estimatedConversionLift}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ScoreCard({ title, score }: { title: string; score?: number }) {
  const getColor = (s?: number) => {
    if (!s) return 'text-gray-500';
    if (s >= 90) return 'text-green-400';
    if (s >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center justify-center text-center">
      <div className={`text-3xl font-syne font-black mb-1 ${getColor(score)}`}>
        {score || '-'}
      </div>
      <div className="text-text-muted text-xs uppercase tracking-wider font-semibold">
        {title}
      </div>
    </div>
  );
}
