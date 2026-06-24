---
title: 'The Nvidia Monopoly: Why One Company Controls the AI Revolution'
description: 'Nvidia supplies over 80% of the AI chips powering the current boom. How did a gaming GPU company end up controlling the infrastructure of artificial intelligence — and how long can it last?'
pubDate: 'Jun 24 2026'
category: 'Supply Chain'
---

In 2023, when the AI boom accelerated past anyone's expectations, the first thing every major technology company discovered was the same: they could not get enough Nvidia GPUs. Microsoft, Google, Meta, Amazon — companies with hundreds of billions in cash and the best supplier relationships in the industry — were all in the same queue, waiting for chips from a single company based in Santa Clara.

That situation has not meaningfully changed in 2026. Nvidia's data center revenue has grown from roughly $15 billion in 2023 to an annualized run rate approaching $140 billion today. Its gross margins in the data center segment have held above 70%. In the history of the semiconductor industry, there is no comparable example of a single company capturing this much value this quickly from a single product cycle.

Understanding why requires understanding what Nvidia actually sells — and why it is harder to replace than it looks.

## It is not just the chip

The common mistake is to frame Nvidia's dominance as a hardware story. It is not, or at least not only. The real moat is software.

CUDA — Nvidia's programming platform, first released in 2006 — is the layer that sits between AI researchers and the raw silicon. Every major AI framework, every training library, every optimization tool has been built on top of CUDA over the past two decades. The result is an ecosystem so deeply embedded in how AI development works that switching away from it is not a hardware decision. It is a retraining-the-entire-industry decision.

When Google built its TPUs, or Amazon built Trainium, or AMD tried to compete with its MI300 series, the hardware was competitive on paper. The problem was the software layer. Researchers who had spent years writing CUDA code had no incentive to rewrite everything for a new platform. Companies that had built their entire ML infrastructure on CUDA tooling faced switching costs that dwarfed the potential hardware savings.

This is what makes Nvidia's position unusual even by the standards of technology monopolies. It is not held in place by patents, or exclusive supply agreements, or regulatory protection. It is held in place by two decades of developer habits and tooling investment — which is, in some ways, much harder to dislodge.

## The H100 and what comes after

Nvidia's current flagship for AI training is the H100, and its successor the H200 and the newer Blackwell architecture. The H100 alone sells for $25,000 to $40,000 per unit depending on configuration, and hyperscalers are buying them in clusters of tens of thousands.

The economics of this are striking. A single H100 cluster capable of training a frontier AI model might cost $500 million or more in hardware alone, before factoring in power, cooling, and networking. The depreciation schedules on these purchases run 3 to 6 years. That means the AI infrastructure being built today is locking in Nvidia's revenue — and Nvidia's architectural assumptions — for most of the rest of the decade.

This is the flywheel that makes Nvidia's position self-reinforcing. The more hyperscalers buy H100s and Blackwell chips, the more their internal tooling, model architectures, and engineering teams are optimized for Nvidia hardware. The switching cost compounds with each purchase cycle.

## The challengers

The competitive response has been substantial, but so far limited in impact.

AMD's MI300X has genuine hardware merit — in some benchmarks it outperforms the H100, and its memory bandwidth is legitimately competitive for inference workloads. But AMD faces the CUDA problem. Getting AI teams to migrate workloads to ROCm, AMD's software platform, requires engineering investment that most companies have not prioritized while Nvidia supply is available.

Google's TPUs are a different story. Google uses them internally at massive scale, and they have become genuinely competitive for Google's own workloads. But TPUs are not available to the broader market in the same way — Google offers TPU access through its cloud, but does not sell the chips directly. This limits their impact on Nvidia's overall market position.

The most interesting challenger may be custom silicon. Every major hyperscaler is now designing its own AI chips — Amazon's Trainium, Microsoft's Maia, Meta's MTIA. The logic is straightforward: at the volumes these companies are purchasing, even a modest cost-per-token improvement at scale justifies significant design investment. If you are spending $20 billion a year on Nvidia chips, a 20% efficiency improvement from custom silicon saves $4 billion annually.

The problem is time. Chip design to production typically takes 3 to 5 years. The custom silicon being taped out today will not be production-ready until 2027 or 2028 at the earliest. In the meantime, Nvidia continues to ship, and the CUDA ecosystem continues to deepen.

## The export control wildcard

One underappreciated risk to Nvidia's position — and to the broader AI supply chain — is geopolitical.

US export controls on advanced semiconductors have already forced Nvidia to create restricted versions of its chips for the Chinese market. The H20, designed to comply with export limits, is significantly less capable than the H100. China represents a large potential market that Nvidia is now partially locked out of — and the restrictions have been tightening, not loosening.

This matters for two reasons. First, it represents a genuine revenue ceiling for Nvidia in one of the world's largest technology markets. Second, it is accelerating Chinese domestic chip development. Huawei's Ascend series has made more progress in the past two years than most Western analysts expected, partly because Chinese AI companies have had no choice but to make it work.

The long-term implication is a possible bifurcation of the global AI supply chain — Nvidia-dependent infrastructure in the West, and a parallel ecosystem in China built on domestic chips and software. This would not immediately threaten Nvidia's position in its core markets, but it would cap its total addressable market in ways that are not yet fully priced in.

## What the margins tell you

Nvidia's gross margins are the clearest signal of its pricing power. Semiconductor companies typically operate at gross margins of 40 to 55 percent. Nvidia's data center segment is running at over 70 percent, and has been expanding, not contracting, even as revenue has scaled dramatically.

This is not normal. It means Nvidia is not competing on price. It is setting prices based on the value it captures for customers — and customers are paying because the alternative is not building AI infrastructure at all, or building it with tools that are materially less capable.

The margin question to watch is not whether Nvidia's margins will fall — they will, eventually. The question is what causes them to fall. If it is AMD or custom silicon taking share, that is a competitive story. If it is Nvidia itself choosing to lower prices to expand the market, that is a different dynamic entirely. So far, there is no evidence of the latter.

## The supply chain beneath the supply chain

Nvidia does not manufacture its own chips. It designs them and outsources fabrication to TSMC, the Taiwan-based foundry that produces the most advanced semiconductors in the world. This creates a concentration risk that extends beyond Nvidia itself.

TSMC produces the vast majority of the world's most advanced chips — not just for Nvidia, but for Apple, AMD, and dozens of other companies. Its fabs are located almost entirely in Taiwan. The geopolitical implications of this concentration have been discussed extensively, but the practical reality is that the global AI buildout is, at its base, dependent on a relatively small number of facilities in a single location.

The US CHIPS Act and similar legislation in Europe and Japan are attempts to diversify this concentration. TSMC is building fabs in Arizona. Intel is attempting to rebuild its foundry capabilities. Samsung is expanding in Texas. But advanced semiconductor manufacturing takes years to stand up, and the equipment supply chain — dominated by ASML's extreme ultraviolet lithography machines — is itself highly concentrated.

The honest summary of the AI supply chain in 2026 is this: it runs through Nvidia's chip designs, TSMC's fabs, ASML's equipment, and a handful of specialized memory manufacturers. Each of these is a single point of concentration. The buildout is happening fast enough that most buyers have not had time to worry about this. At some point, they will.

## The duration of the monopoly

The most important question about Nvidia is not whether it has a monopoly — it does — but how long that monopoly lasts and how it ends.

The historical precedent from technology is that platform monopolies tend to last longer than critics expect and end faster than incumbents expect. Intel dominated PC processors for decades before AMD and ARM eroded its position. Cisco dominated networking infrastructure before the market commoditized. In each case, the moat was real, held for a long time, and then gave way to a combination of architectural shifts and ecosystem maturity.

For Nvidia, the most likely path to erosion is not a competitor building a better GPU. It is a shift in the underlying workload. Training large language models at scale is currently the dominant AI compute task, and it plays to Nvidia's strengths. If inference — running models rather than training them — becomes the dominant cost, the hardware requirements shift. Inference can be done on less expensive, more specialized chips. Several startups, including Groq and Cerebras, are building inference-optimized hardware that does not depend on CUDA.

If the AI industry's center of gravity shifts from training to inference over the next three to five years, Nvidia's position is more vulnerable than its current margins suggest. That shift may already be beginning.

For now, though, the monopoly holds. And the companies building AI infrastructure are, for better or worse, building it on Nvidia's terms.