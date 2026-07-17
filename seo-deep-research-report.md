# SEO Deep Research Report - moldovawebsite.md

## Live research update - 2026-07-17

This update combines live Google Search Console, Mangools SERP/KD research, direct competitor-page audits, backlink review, sitemap/indexing review, and the repository implementation completed on 2026-07-17. The June report remains below as the historical baseline.

### Current position

Live GSC period: 2026-04-16 to 2026-07-15.

| Metric | June baseline | Live July view | Direction |
|---|---:|---:|---|
| Clicks | 31 | 23 | Down |
| Impressions | 4,180 | 5,010 | Up |
| CTR | 0.74% | 0.50% | Down |
| Average position | mixed, main pages 23-48 | 40.5 site-wide | Weak |

Google is showing the site more often, but the additional visibility is not turning into clicks. This is primarily a relevance, snippet, proof, and authority problem—not a lack of keyword demand.

The strongest commercial signals are:

| Query | Impressions | Clicks | Position | Action |
|---|---:|---:|---:|---|
| `creare site` | 163 | 0 | 47.5 | Build authority around exact commercial pages |
| `seo moldova` | 145 | 0 | 47.2 | Consolidate duplicate SEO pages |
| `creare site web` | 143 | 0 | 44.7 | Strengthen homepage/local page proof |
| `creare site web pret` | 132 | 0 | 28.2 | Keep `/preturi/` as the pricing authority |
| `pret creare site` | 130 | 0 | 21.8 | Improve snippet and internal links to pricing |
| `создание сайтов кишинев` | 103 | 0 | 43.9 | Strengthen RU local page |
| `creare site chisinau` | 83 | 0 | 38.4 | Strengthen RO local page |
| `pret creare website` | 78 | 0 | 16.5 | Push pricing page into top 10 |
| `seo chisinau` | 58 | 0 | 43.5 | Use consolidated SEO service page |
| `creare magazin online Chișinău` | 55 | 0 | 25.1 | Strengthen ecommerce/local relevance |
| `creare magazin online Moldova` | 46 | 0 | 27.5 | Strengthen ecommerce proof and links |

Several long-tail pricing phrases are already on page one, including `site prezentare pret` around position 2.8, `creare site preturi` around 3.1, `pret site magazin online` around 4.0, `pret creare site magazin online` around 4.3, and `creare website pret` around 6.3. The fastest short-term gain is therefore moving the broader price phrases from positions 16-28 into the top 10 while preserving the existing exact-price relevance.

### Mangools opportunity and competitor map

The local SERPs are realistically winnable. Mangools reports low keyword difficulty for the main commercial clusters:

| Keyword | Moldova volume | KD | Current leaders |
|---|---:|---:|---|
| `creare site` | 420 | 13 | codex.md, crearesiteuri.md, websty.md |
| `creare site chisinau` | 90 | 13 | crearesiteuri.md, webit.md, digitaltech.md |
| `seo moldova` | 50 | 14 | rocketseo.md, semseo.md, webmaster.md |
| `pret creare site` | 10 | 15 | websty.md, guides/articles, codex.md |
| `web design chisinau` | 10 | 15 | directories/jobs plus a few agencies |
| `creare magazin online` | 20 | 20 | prowebdesign.md, webecom.md, webus.md |
| `создание сайтов кишинев` | about 80 | local commercial cluster | mixed local agencies |

What the ranking competitors do better:

| Competitor | Winning elements | Gap to exploit |
|---|---|---|
| codex.md | Exact title, visible price from 350 EUR, calculator, portfolio, testimonials, FAQ, deep 2,000+ word page | Higher starting price; opportunity to win value/speed segment |
| crearesiteuri.md | Exact local title, prices, recent work, tools/calculator, many internal articles | Thin main-page copy and modest authority |
| websty.md | Price-led title, 189/439/749/1249 packages, 14-day delivery, warranty, reviews | Compete with simpler entry packages and clearer local process |
| rocketseo.md | Client proof, testimonials, local service positioning | No transparent price; win with productized SEO packages |
| prowebdesign.md | Ecommerce-specific page, package comparisons, project examples | High starting prices; win smaller local merchants at 300 EUR entry |

The consistent winning pattern is exact intent + visible price + proof + specific deliverables + FAQ + internal depth. Domain strength is not prohibitive, so disciplined page quality and a small number of relevant links can move these clusters.

### Technical/indexing findings

GSC reports 35 indexed and 29 not indexed URLs:

- 7 not found (404), mainly obsolete legacy URLs.
- 5 redirecting URLs, mostly slashless or old paths.
- 11 crawled but not indexed, mostly stale slashless variants and feeds.
- 2 discovered but not indexed: the RU local ecommerce page and one blog article.
- 4 blocked by 403, all old Russian legacy paths; validation was already started in GSC.

Sitemaps are healthy: `sitemap-index.xml` and `sitemap-0.xml` are successful, with 38 discovered URLs before this release. The sitemap itself is not the limiting factor.

The external-link profile is the biggest off-site weakness: 35 links total, all effectively pointing to the homepage. Top linking domains are rezolvro.ro, mieremoldova.md, tencuitor.md, roweb-dev.ro, and arcadie-systems.com. Deep commercial pages receive no meaningful external authority.

### Implemented in this release

1. Rebuilt the shared commercial landing template around customer needs, deliverables, process, packages, portfolio, FAQs, and next actions. Removed visible copy that talked to visitors about search clusters, ranking, and why an SEO page exists.
2. Added transparent 50/150/300 EUR package cards to the Romanian and Russian Chișinău site-creation pages.
3. Added real portfolio proof to both local pages using Tencuitor.md, Arcadie Systems, and Beauty Studio Centru.
4. Strengthened the RU ecommerce landing with a 300 EUR entry package and two clear growth/custom paths without inventing fixed prices.
5. Added structured `Offer` data for packages and expanded the service provider schema with URL, email, and phone.
6. Consolidated `/seo-moldova/` into `/serviciiBlog/seo-on-page/` and the Russian equivalent via permanent redirects. The established service pages had substantially more impressions and better positions, so splitting relevance was counterproductive.
7. Rewrote the SEO service titles/H1s around the exact Moldova commercial intent and added the starting-price signal to descriptions.
8. Redirected the obsolete `/blog/using-mdx/` 404 to the blog hub.
9. Stabilized the browser title so the chat widget cannot replace the page title with an unread-message label.
10. Added selective Worker-first routing for the retired URLs so permanent redirects take precedence over any previously cached static asset, while all normal assets keep the faster asset-first path.

### 90-day route to the top

#### Days 0-14: recrawl and CTR recovery

- Request indexing for the two Chișinău pages, both ecommerce service/local pages, both consolidated SEO service pages, and `/preturi/`.
- Confirm the SEO legacy URLs return 301 and disappear from the sitemap.
- Watch query/page CTR weekly, not daily. First target: recover site CTR above 0.8% while impressions continue growing.
- Track `/preturi/` separately because GSC flagged its impressions as recently down 54%.

#### Days 15-45: topical and internal authority

- Add 3 evidence-led commercial guides, each linked prominently to a service page:
  - `Cat costa un magazin online in Moldova in 2026?`
  - `Creare site in Chisinau: pret, proces si exemple`
  - `SEO Moldova: ce include un audit si cat costa`
- Link every new guide to one primary commercial URL and add reciprocal contextual links from the service page.
- Add a compact price calculator only after real lead data shows which inputs materially change price. Competitors use calculators successfully, but a fake-complex calculator would reduce trust.
- Improve `/preturi/` title/description only if its broad-query CTR remains below 1% after recrawl; protect the long-tail terms already ranking in the top 3-7.

#### Days 30-75: deep-link authority

- Secure 8-12 relevant Moldovan/Romanian referring domains, prioritizing links directly to `/preturi/`, `/creare-site-chisinau/`, ecommerce, and SEO—not only the homepage.
- First sources: client case-study pages, local business directories with editorial descriptions, Moldova startup/agency listings, partner pages, and guest examples on business/marketing sites.
- Replace generic footer-only anchors such as `made by moldovawebsite` with contextual case-study links where client permission exists.
- Do not buy bulk links. The SERPs are low-KD enough that a small relevant profile is more valuable than volume.

#### Days 60-90: iterate from GSC evidence

- Promote pages that reach positions 8-20 with title/description tests and stronger internal anchors.
- Expand pages that gain impressions but remain below position 20 with proof, comparison tables, and specific local FAQs.
- Merge or redirect any new duplicate pages that compete for the same query family.
- Target outcomes by day 90:
  - broad price queries in positions 5-10;
  - `creare site chisinau` and Russian equivalent in positions 10-20, with a path toward top 10;
  - ecommerce local terms in positions 10-20;
  - `seo moldova` served by one canonical page and moving above position 30;
  - site CTR above 1.0%.

### Measurement dashboard

Review every Monday in GSC:

| KPI | Baseline | 30-day target | 90-day target |
|---|---:|---:|---:|
| Site CTR | 0.50% | 0.80% | 1.00%+ |
| Clicks / 3 months | 23 | 35+ run-rate | 70+ |
| `pret creare site` position | 21.8 | under 15 | top 10 |
| `creare site chisinau` position | 38.4 | under 25 | 10-20 |
| `создание сайтов кишинев` position | 43.9 | under 30 | 10-20 |
| `creare magazin online Chișinău` position | 25.1 | under 20 | 10-15 |
| Relevant deep-linking domains | near 0 | 3 | 8-12 |

Ranking first is not guaranteed and should not be promised. The evidence does show a credible path: low local keyword difficulty, existing impressions, page-one pricing long tails, and competitors that can be matched on page quality. The decisive constraint after this release is relevant off-site authority and consistent GSC-led iteration.

---

Date of analysis: 2026-06-10  
GSC export used: `moldovawebsite.md-Performance-on-Search-2026-06-10`  
GSC period: 2026-03-08 to 2026-06-07, Search type: Web

## 1. Executive Summary

The best SEO opportunity for `moldovawebsite.md` is not more general content. The site already has the right commercial architecture: homepage, pricing, RO/RU service pages, local Chisinau pages, ecommerce, SEO, maintenance, and custom landing pages. The problem is that Google is testing the site for high-value commercial searches, but most pages sit between positions 8-50 with weak CTR.

The fastest money path is:

1. Optimize `/preturi/` and `/ru/preturi/` first. Price-intent queries are already ranking in positions 4-18 and have the highest buyer intent.
2. Strengthen `/creare-site-chisinau/`, `/serviciiBlog/magazin-online/`, `/ru/sozdanie-saitov-kishinev/`, and `/ru/serviciiBlog/magazin-online/`. These are the biggest local and ecommerce gaps.
3. Improve internal linking and anchor text from homepage, service hub, pricing, and service pages. Seobility flags 9 pages with weak internal anchor text.
4. Fix language markup review. Seobility flags 37 pages with conflicting language markup; this likely comes from mixed `html lang`, `content-language`, and hreflang formats.
5. Build only a few new pages: ecommerce price page, RO/RU Chisinau ecommerce pages, and optionally `web-design-chisinau` / `seo-chisinau` after the P1 pages move.

Priority keyword clusters:

| Priority | Cluster | Main Keywords | Current State | Best Action |
|---|---|---|---|---|
| P1 | Price intent | `pret creare site`, `creare site web pret`, `cost creare site` | Positions 4-18, high impressions, low CTR | Rewrite/expand `/preturi/` |
| P1 | Local Chisinau RO | `creare site chisinau`, `creare site web chisinau` | Positions 30-38 | Improve `/creare-site-chisinau/` |
| P1 | Ecommerce RO | `creare magazin online moldova`, `creare magazin online chișinău` | Positions 25-30 | Improve ecommerce page and create Chisinau ecommerce page |
| P1 | Local Chisinau RU | `создание сайта кишинев`, `создание сайтов кишинев` | Around position 50 | Improve RU local page |
| P1 | Ecommerce RU | `создание интернет магазина молдова/кишинев` | Positions 26-32 | Improve RU ecommerce page and create local page |
| P2 | SEO services | `seo moldova`, `seo chisinau`, `servicii seo moldova` | Positions 23-49 | Improve `/seo-moldova/` after P1 |
| P2 | Custom site | `site la comanda`, `сайт на заказ` | Some clicks, low volume | Strengthen existing pages |

## 2. Domain / Project Summary

Domain: `https://moldovawebsite.md`  
Niche: affordable website creation, web design, ecommerce websites, SEO on-page, and maintenance for small businesses in Moldova.  
Target countries: Moldova first; Romania/Russian-language diaspora as secondary.  
Target languages: Romanian and Russian.  
Primary conversion goal: contact form / phone / WhatsApp request for a web project.

Existing offer and pricing:

| Offer | Starting Price | Existing Page |
|---|---:|---|
| Landing page | 50 EUR | `/preturi/` |
| Site de prezentare / business website | 150 EUR | `/preturi/`, `/site-de-prezentare/` |
| Mini-magazin online | 300 EUR | `/preturi/`, `/serviciiBlog/magazin-online/` |
| SEO on-page | 50/150/300 EUR style package | `/serviciiBlog/seo-on-page/`, `/seo-moldova/` |
| Mentenanta | 25-30 EUR/month+ | `/serviciiBlog/mentenanta/` |

Important existing routes:

| Type | Romanian URL | Russian URL |
|---|---|---|
| Homepage | `/` | `/ru/` |
| Pricing | `/preturi/` | `/ru/preturi/` |
| Contact | `/contact/` | `/ru/contact/` |
| Local site creation | `/creare-site-chisinau/` | `/ru/sozdanie-saitov-kishinev/` |
| Site de prezentare | `/site-de-prezentare/` | `/ru/sait-vizitka/` |
| Web design | `/web-design-moldova/` | `/ru/web-design-kishinev/` |
| SEO Moldova | `/seo-moldova/` | `/ru/seo-moldova/` |
| Site la comanda | `/site-la-comanda/` | mapped to RU site creation |
| Ecommerce | `/serviciiBlog/magazin-online/` | `/ru/serviciiBlog/magazin-online/` |
| Service hub | `/serviciiBlog/` | `/ru/serviciiBlog/` |

Sitemap status:

- `dist/sitemap-index.xml` exists and points to `https://moldovawebsite.md/sitemap-0.xml`.
- `dist/sitemap.xml` also exists and points to the same `sitemap-0.xml`.
- `sitemap-0.xml` includes 37 URLs.
- `public/robots.txt` points to `https://moldovawebsite.md/sitemap-index.xml`, which exists in `dist`.

## 3. GSC Findings

Source files:

- `Queries.csv`: 230 query rows
- `Pages.csv`: 30 page rows
- `Countries.csv`: 56 country rows
- `Devices.csv`: 3 device rows
- `Chart.csv`: 2026-03-08 to 2026-06-07

Site totals from `Chart.csv`:

| Metric | Value |
|---|---:|
| Clicks | 31 |
| Impressions | 4,180 |
| Average CTR | about 0.74% |
| Main country | Moldova |

Country performance:

| Country | Clicks | Impressions | CTR | Avg Position | Interpretation |
|---|---:|---:|---:|---:|---|
| Moldova | 27 | 3,833 | 0.7% | 29.6 | Core market; all priority work should target MD |
| Romania | 2 | 54 | 3.7% | 27.17 | Secondary RO traffic |
| United States | 0 | 137 | 0% | 12.56 | Likely noise or diaspora/search testing |

Device performance:

| Device | Clicks | Impressions | CTR | Avg Position | Action |
|---|---:|---:|---:|---:|---|
| Desktop | 19 | 2,219 | 0.86% | 26.05 | Strongest current clicks |
| Mobile | 11 | 1,958 | 0.56% | 31.69 | Improve mobile snippets and above-fold clarity |
| Tablet | 1 | 3 | 33.33% | 7 | Too small to prioritize |

Top pages:

| Page | Clicks | Impressions | CTR | Avg Position | Interpretation |
|---|---:|---:|---:|---:|---|
| `/preturi/` | 14 | 1,409 | 0.99% | 23.2 | Best conversion page, but position is still weak |
| `/` | 6 | 1,601 | 0.37% | 29.73 | Broad visibility; weak CTR |
| `/ru/preturi/` | 4 | 202 | 1.98% | 23.98 | RU pricing has traction |
| `/serviciiBlog/magazin-online/` | 2 | 280 | 0.71% | 27.05 | Ecommerce is a real opportunity |
| `/ru/` | 2 | 425 | 0.47% | 43.32 | Russian homepage needs stronger targeting |
| `/serviciiBlog/seo-on-page/` | 1 | 358 | 0.28% | 47.39 | SEO content visible but weak |
| `/seo-moldova/` | 0 | 53 | 0% | 71.64 | Dedicated SEO landing page is too weak |
| `/ru/seo-moldova/` | 0 | 70 | 0% | 79.66 | RU SEO page is currently low priority |
| `/ru/serviciiBlog/magazin-online/` | 0 | 181 | 0% | 37.92 | RU ecommerce is worth improving |

### Query Opportunity Table

The GSC export does not include combined query+page data, so "Current Page" below is inferred from existing route intent and the pages report.

| Query | Clicks | Impressions | CTR | Avg Position | Current Page | Intent | Opportunity | Recommended Action |
|---|---:|---:|---:|---:|---|---|---|---|
| `pret creare site` | 0 | 152 | 0% | 14.5 | `/preturi/` | Price/commercial | P1 | Rewrite title/meta and add exact phrase H2 |
| `creare site web pret` | 0 | 139 | 0% | 11.76 | `/preturi/` | Price/commercial | P1 | Add exact phrase in intro + FAQ |
| `realizare site web preturi` | 0 | 83 | 0% | 8.14 | `/preturi/` | Price/commercial | P1 | CTR fix: title should include "preturi" |
| `creare site pret` | 0 | 65 | 0% | 13.15 | `/preturi/` | Price/commercial | P1 | Strengthen price comparison and internal links |
| `pret creare website` | 0 | 59 | 0% | 7.61 | `/preturi/` | Price/commercial | P1 | Add "website" synonym to snippet |
| `pret creare site moldova` | 0 | 49 | 0% | 18.49 | `/preturi/` | Local price | P1 | Add Moldova-specific price section |
| `creare site` | 1 | 155 | 0.65% | 35.64 | `/` | Broad commercial | P2 | Strengthen homepage, but target long tails first |
| `creare site web` | 0 | 142 | 0% | 33.65 | `/` | Broad commercial | P2 | Add stronger service proof and links |
| `creare site chisinau` | 0 | 105 | 0% | 37.71 | `/creare-site-chisinau/` | Local commercial | P1 | Improve page depth/local proof |
| `creare site moldova` | 1 | 87 | 1.15% | 32.06 | `/` | Local commercial | P1 | Tighten homepage + link to Chisinau page |
| `seo moldova` | 0 | 64 | 0% | 46.03 | `/seo-moldova/` | SEO service | P2 | Improve after price/ecommerce |
| `creare magazin online moldova` | 0 | 56 | 0% | 28.48 | `/serviciiBlog/magazin-online/` | Ecommerce | P1 | Add Moldova-specific ecommerce landing copy |
| `creare magazin online chișinău` | 0 | 41 | 0% | 25.63 | `/serviciiBlog/magazin-online/` | Local ecommerce | P1 | Create `/creare-magazin-online-chisinau/` |
| `создание интернет магазина молдова` | 0 | 41 | 0% | 26.71 | `/ru/serviciiBlog/magazin-online/` | RU ecommerce | P1 | Improve RU ecommerce page |
| `создание сайта кишинев` | 0 | 55 | 0% | 50.53 | `/ru/sozdanie-saitov-kishinev/` | RU local site creation | P1 | Expand RU local page |
| `создание сайтов кишинев` | 0 | 40 | 0% | 50.2 | `/ru/sozdanie-saitov-kishinev/` | RU local site creation | P1 | Add price/proof/portfolio sections |
| `сайт на заказ молдова` | 0 | 33 | 0% | 23.97 | `/ru/sozdanie-saitov-kishinev/` | RU custom site | P2 | Section now, separate page later |
| `servicii mentenanta website` | 0 | 1 | 0% | 4 | `/serviciiBlog/mentenanta/` | Maintenance service | P2 | Low-volume recurring revenue quick win |
| `cost creare site` | 0 | 1 | 0% | 4 | `/preturi/` | Price/commercial | P1 | CTR/snippet quick win |
| `site pret` | 0 | 1 | 0% | 4 | `/preturi/` | Price/commercial | P1 | Add phrase in FAQ |
| `сайт цены` | 0 | 1 | 0% | 4 | `/ru/preturi/` | RU price | P1 | Add RU price FAQ/title variant |

### Branded vs Non-Branded

The GSC dataset is overwhelmingly non-branded. That is good: the site is being tested for service demand, not only brand searches. It also means CTR is weak because users are comparing providers in SERP.

### Quick Wins

| Quick Win | Why |
|---|---|
| `/preturi/` title/meta rewrite | Many price queries rank 4-18 with 0% CTR |
| Add exact phrase blocks for `creare site web pret`, `realizare site web preturi`, `pret creare website` | These are already visible |
| Add stronger internal links to `/preturi/` from homepage and service pages | Seobility flags weak anchors |
| Improve `/serviciiBlog/magazin-online/` | 280 page impressions and multiple ecommerce queries in positions 25-35 |
| Expand `/ru/sozdanie-saitov-kishinev/` | Seobility says 90 monthly searches for `создание сайта кишинев`; GSC shows impressions but weak rank |

## 4. Seobility Keyword Research

Seobility source: logged-in Keyword Research Tool, country `Google.md`, method `Similar keywords`.

Important RO findings:

| Keyword | Volume | CPC | Intent | Cluster | Action |
|---|---:|---:|---|---|---|
| `creare site` | 480 | 0.70 EUR | N/T | Broad creation | Homepage + local pages |
| `creare site web` | 480 | 0.70 EUR | T | Broad creation | Homepage |
| `creare site web pret` | 20 | 1.19 EUR | C/T/I | Price | `/preturi/` P1 |
| `costuri creare site` | 20 | 1.19 EUR | C | Price | `/preturi/` P1 |
| `pret creare website` | 20 | 1.19 EUR | T | Price | `/preturi/` P1 |
| `pret realizare site web` | 20 | 1.19 EUR | T | Price | `/preturi/` P1 |
| `cost creare site` | 20 | 1.19 EUR | C | Price | `/preturi/` P1 |
| `creare magazin online` | 40 | 0.78 EUR | T | Ecommerce | Ecommerce page P1 |
| `pret creare site magazin online` | 10 | 0.00 EUR | C/I | Ecommerce price | New/expanded pricing P1 |
| `web design moldova` | 20 | 0.55 EUR | C | Web design | Improve `/web-design-moldova/` |
| `creare site chisinau` | 70 | 1.05 EUR | N | Local creation | Improve `/creare-site-chisinau/` |
| `seo moldova` | 50 | 0.28 EUR | I/N | SEO | Improve after P1 |
| `seo chisinau` | 30 | 0.00 EUR | I | SEO local | Later page |
| `servicii seo moldova` | 10 | 0.00 EUR | C/I | SEO commercial | Improve `/seo-moldova/` |

Important RU findings:

| Keyword | Volume | CPC | Intent | Cluster | Action |
|---|---:|---:|---|---|---|
| `создание сайта кишинев` | 90 | 1.00 EUR | N | RU local creation | `/ru/sozdanie-saitov-kishinev/` P1 |
| `создание сайтов` | 70 | 0.76 EUR | C | RU creation | RU homepage/local pages |
| `создание интернет магазина` | 10 | 0.60 EUR | T | RU ecommerce | RU ecommerce page P1 |
| `сайт визитка` | 10 | 0.41 EUR | N | RU presentation site | `/ru/sait-vizitka/` |
| `сайт на заказ` | 10 | 0.76 EUR | N | RU custom site | RU custom section/page |

Seobility did not expose competition scores in the visible table for these checks. Difficulty in the CSV is therefore inferred from live SERPs, backlink gap, and current GSC position.

## 5. Competitor Analysis

### Seobility Project Competitors

Seobility project: `Charlie https://moldovawebsite.md/`

| Competitor | Visibility | Referring Domains | Competing Keywords | What It Means |
|---|---:|---:|---:|---|
| `webmaster.md` | 0 | 1,241 | 0/0 | Very strong backlink advantage |
| `ilab.md` | 0 | 179 | 0/0 | Strong agency/domain trust |
| `webposeidon.md` | 0 | 71 | 0/0 | SERP competitor for price/site queries |
| `crearesiteuri.md` | 0 | 21 | 0/0 | Exact-match/service competitor |
| `moldovawebsite.md` | 0 | 4 | 0/0 | Much weaker backlink base |

Because rank tracking keywords are not configured, Seobility shows 0/0 competing keywords. The backlink gap is still useful: `moldovawebsite.md` has 4 referring domains while the strongest competitor has 1,241.

### Seobility Backlinks

| Source | Target Anchor | Status | Notes |
|---|---|---|---|
| `rezolvro.ro` | `made by moldovawebsite!` | Lost | Could be reclaimed |
| `arcadie-systems.com/en` | `moldovawebsite` | Active | Portfolio backlink |
| `mieremoldova.md` | `moldovawebsite.md` | Active | Local MD backlink |
| `roweb-dev.ro` | `vezi proiectul live` | Active | Weak anchor, could be improved |

Backlink strategy should start with portfolio/client links because the current link base is tiny and relevant local links can move commercial pages faster than generic guest posts.

### Live SERP Competitors

Checked via Google browser searches with `gl=md`:

| Cluster | Visible Competitors | Content Angle | Weakness | Opportunity for Us |
|---|---|---|---|---|
| `creare site moldova` | `webposeidon.md`, `digitalexpert.md`, `kurtev.pro`, `prowebdesign.md`, `crearesiteuri.md`, `crearesite.md`, `digitaltech.md`, `webit.md` | Agency/service landing pages, often price or portfolio first | Many are broad agencies or higher-priced | Win with clear low-cost packages, fast delivery, RO/RU local copy |
| `pret creare site moldova` | `webposeidon.md`, `digitalexpert.md`, `qpage.agency` | Price-first offers | Some pricing is vague or starts higher | Own transparent 50/150/300 EUR positioning |
| `creare magazin online moldova` | `crearesite.md`, `cartum.md`, `digitalexpert.md`, `bpro.md`, `webcraft.md`, `ilab.md`, `prowebdesign.md` | Ecommerce platforms/agencies | Platform pages may not fit small custom stores | Position mini-magazin from 300 EUR with local payment/delivery basics |
| `seo moldova` | `digitalexpert.md`, `netpeak.ua`, `kuku.md`, `rocketseo.md`, `semseo.md`, `rabota.md` | Agencies, jobs, broad SEO pages | Mixed intent and some non-Moldova results | Create practical on-page SEO service for small Moldova businesses |
| `создание сайтов кишинев` | `itmedia.md`, `kurtev.pro`, `digitalexpert.md`, `ilab.md`, `webmaster.md`, `citrus.md`, `rocketseo.md`, `fivestars.agency`, `webit.md` | RU agency pages, portfolios, price/service | Established agencies but often heavier/less budget-clear | RU page should lead with price, timeline, small-business fit |

## 6. SERP Analysis

### Cluster: Price / Cost

Google rewards pages with:

- Exact price wording in title and snippet.
- Clear starting prices.
- Package comparison.
- FAQ around "cat costa", "pret", "cost".
- Internal links to contact/offers.

Current gap:

- `/preturi/` is the correct page, but CTR is low despite positions 4-18.
- Competitors often lead with "de la 290 EUR" or "de la 990 EUR"; `moldovawebsite.md` can win on transparent low-cost positioning.

Recommended angle:

`Preț creare site Moldova 2026: landing 50 EUR, site de prezentare 150 EUR, mini-magazin 300 EUR`

### Cluster: Local Site Creation

Google rewards:

- Local provider framing: Chisinau/Moldova in title and H1.
- Portfolio or examples.
- Trust proof and contact path.
- Service and price clarity.

Current gap:

- `/creare-site-chisinau/` exists but GSC positions are around 30-38.
- It needs stronger internal authority and more visible local proof.

Recommended angle:

`Creare site Chișinău pentru afaceri mici: preț clar, lansare rapidă, RO/RU`

### Cluster: Ecommerce / Magazin Online

Google rewards:

- Specific ecommerce service pages.
- Price/plan and platform details.
- Payment, delivery, catalog, admin, SEO.
- Examples and comparison with ready-made platforms.

Current gap:

- `/serviciiBlog/magazin-online/` gets 280 impressions but average position 27.05.
- GSC has both RO and RU ecommerce demand.

Recommended angle:

`Mini-magazin online în Moldova de la 300 EUR: catalog, comenzi, livrare, SEO`

New pages:

- `/creare-magazin-online-chisinau/`
- `/preturi-magazin-online/`
- `/ru/sozdanie-internet-magazina-kishinev/`

### Cluster: RU Site Creation

Google rewards:

- Russian-language pages with clear local wording.
- Agency/service proof.
- Price/timeline.
- Portfolio and direct contact.

Current gap:

- RU search volume is real: Seobility shows `создание сайта кишинев` at 90/month.
- GSC positions for RU local queries are weak, around 50.

Recommended angle:

`Создание сайтов в Кишиневе: сайт-визитка от 150 EUR, мини-магазин от 300 EUR`

### Cluster: SEO Moldova

Google rewards:

- Agency/service pages, but SERP is mixed with jobs and bigger SEO agencies.
- Proof, audit deliverables, packages, local experience.

Current gap:

- SEO pages are visible but weak: `/serviciiBlog/seo-on-page/` has 358 impressions, CTR 0.28%, position 47.39.
- `/seo-moldova/` has almost no traction yet.

Recommended angle:

`SEO on-page pentru site-uri din Moldova care au impresii, dar nu primesc clickuri`

This should be P2, not P1, because website creation and ecommerce lead intent is closer to the current business offer.

## 7. Keyword Clusters

| Cluster | Main Keyword | Secondary Keywords | Intent | Page Type | Priority | Suggested URL | Title Tag | H1 | Notes |
|---|---|---|---|---|---|---|---|---|---|
| Price RO | `pret creare site` | `creare site web pret`, `cost creare site`, `pret creare website` | Transactional | Pricing page | P1 | `/preturi/` | `Preț creare site Moldova 2026 | Landing 50 EUR, site 150 EUR` | `Preț creare site Moldova 2026: cât costă un site web?` | Rewrite meta and add exact query sections |
| Homepage RO | `creare site moldova` | `creare site`, `creare site web`, `creare website moldova` | Commercial | Homepage | P1/P2 | `/` | `Creare site Moldova | Website rapid de la 50 EUR` | `Creare site web în Moldova pentru afaceri locale` | Broad cluster; support with internal links |
| Chisinau RO | `creare site chisinau` | `creare web site chisinau`, `creare site web chisinau` | Local commercial | Local service page | P1 | `/creare-site-chisinau/` | `Creare site Chișinău | Website pentru afaceri locale` | `Creare site în Chișinău pentru afaceri care vor cereri` | Add local proof and price blocks |
| Ecommerce RO | `creare magazin online moldova` | `creare magazin online chișinău`, `pret creare site magazin online` | Transactional | Ecommerce service | P1 | `/serviciiBlog/magazin-online/` | `Creare magazin online Moldova | Mini-magazin de la 300 EUR` | `Creare magazin online în Moldova pentru vânzări locale` | Expand with payments/delivery/admin |
| Ecommerce Price RO | `pret creare site magazin online` | `cat costa un site magazin online`, `pret realizare magazin online` | Price/commercial | New pricing page | P1 | `/preturi-magazin-online/` | `Preț magazin online Moldova | Mini-magazin de la 300 EUR` | `Cât costă un magazin online în Moldova?` | New page if ecommerce leads are priority |
| Site de prezentare RO | `site de prezentare` | `pret site de prezentare`, `site prezentare pret` | Commercial | Service page | P2 | `/site-de-prezentare/` | `Site de prezentare Moldova | Preț și structură clară` | `Site de prezentare pentru afaceri din Moldova` | Add price comparison and examples |
| Site la comanda RO | `site la comanda` | `site la comandă`, `site-uri la comandă` | Commercial | Service page | P2 | `/site-la-comanda/` | `Site la comandă Moldova | Site la cheie pentru afaceri` | `Site la comandă în Moldova, construit pentru cereri reale` | Good high-intent long-tail |
| Web Design RO | `web design moldova` | `web design chisinau` | Commercial | Service page | P2 | `/web-design-moldova/` | `Web Design Moldova | Design web pentru conversii` | `Web design în Moldova pentru pagini care conving` | Needs visual examples/portfolio |
| SEO RO | `seo moldova` | `seo chisinau`, `servicii seo moldova` | Commercial/informational | SEO service page | P2 | `/seo-moldova/` | `SEO Moldova | Optimizare on-page pentru afaceri locale` | `SEO în Moldova pentru pagini care au impresii, dar puține clickuri` | P2 after commercial web pages |
| Maintenance RO | `servicii mentenanta website` | `mentenanta website`, `suport site web` | Commercial recurring | Maintenance page | P3 | `/serviciiBlog/mentenanta/` | `Mentenanță website Moldova | Suport lunar pentru site` | `Mentenanță website pentru afaceri din Moldova` | Recurring revenue, low volume |
| Price RU | `сайт цены` | `разработка сайтов цена`, `цена создания сайта` | Transactional | RU pricing page | P1 | `/ru/preturi/` | `Сколько стоит сайт в Молдове? Цены от 50 EUR` | `Сколько стоит сайт в Молдове? Цены и пакеты` | Quick win positions 4-6 |
| Local Creation RU | `создание сайта кишинев` | `создание сайтов кишинев`, `создание сайтов молдова` | Local commercial | RU local page | P1 | `/ru/sozdanie-saitov-kishinev/` | `Создание сайтов в Кишиневе | Сайт от 150 EUR` | `Создание сайтов в Кишиневе для бизнеса` | High Seobility volume and GSC impressions |
| Ecommerce RU | `создание интернет магазина молдова` | `создание интернет магазина кишинев` | Transactional | RU ecommerce page | P1 | `/ru/serviciiBlog/magazin-online/` | `Создание интернет-магазина в Молдове | от 300 EUR` | `Создание интернет-магазина в Молдове для локальных продаж` | Create Chisinau variant later |
| Custom Site RU | `сайт на заказ молдова` | `сайт на заказ кишинев`, `сайт визитка` | Commercial | RU support landing | P2 | `/ru/sait-na-zakaz-moldova/` | `Сайт на заказ в Молдове | Сайт под ключ` | `Сайт на заказ в Молдове для малого бизнеса` | Can start as section on RU local page |

## 8. Content Gap Analysis

### Pages to Create

| Page | Target Keyword | Intent | Priority | Why It Matters | Suggested URL |
|---|---|---|---|---|---|
| Ecommerce Chisinau RO | `creare magazin online chișinău` | Local ecommerce | P1 | 41 GSC impressions, position 25.63 | `/creare-magazin-online-chisinau/` |
| Ecommerce Price RO | `pret creare site magazin online` | Price | P1 | High buying intent, Seobility 10/month | `/preturi-magazin-online/` |
| Ecommerce Chisinau RU | `создание интернет магазина кишинев` | RU local ecommerce | P1 | 35 GSC impressions, position 32.34 | `/ru/sozdanie-internet-magazina-kishinev/` |
| Web Design Chisinau | `web design chisinau` | Local design | P2 | Seobility shows demand; design page has weak traction | `/web-design-chisinau/` |
| SEO Chisinau | `seo chisinau` | Local SEO | P3 | 30 volume, but SEO is lower conversion priority | `/seo-chisinau/` |
| Landing Page Moldova | `landing page moldova` | Service | P3 | Supports 50 EUR offer | `/landing-page-moldova/` |
| RU Custom Site | `сайт на заказ молдова` | RU custom site | P3 | High-intent long-tail | `/ru/sait-na-zakaz-moldova/` |

### Pages to Improve

| Existing Page | Current Queries | Problem | Fix | Priority |
|---|---|---|---|---|
| `/preturi/` | `pret creare site`, `creare site web pret`, `realizare site web preturi` | High impressions, low CTR | Rewrite title/meta, add exact phrase sections, comparison, FAQ | P1 |
| `/` | `creare site`, `creare site moldova`, `creare website moldova` | Broad visibility but weak CTR/rank | Add clearer above-fold price/local/service proof and links | P1 |
| `/creare-site-chisinau/` | `creare site chisinau`, `creare site web chisinau` | Dedicated page exists but ranks weakly | Add local proof, exact variants, portfolio, internal links | P1 |
| `/serviciiBlog/magazin-online/` | `creare magazin online moldova`, `creare magazin online chișinău` | Ecommerce demand exists but page is too general | Add packages, price, local payment/delivery/admin copy | P1 |
| `/ru/preturi/` | `сайт цены`, `разработка сайтов цена` | Quick-win RU price terms | Improve RU snippet and FAQ | P1 |
| `/ru/sozdanie-saitov-kishinev/` | `создание сайта кишинев`, `создание сайтов кишинев` | High volume, weak rank | Expand Russian content and proof | P1 |
| `/ru/serviciiBlog/magazin-online/` | `создание интернет магазина молдова/кишинев` | RU ecommerce impressions but weak rank | Add exact phrase, price, local ecommerce features | P1 |
| `/seo-moldova/` | `seo moldova`, `servicii seo moldova` | Dedicated page underperforming | Add packages, deliverables, before/after GSC examples | P2 |
| `/serviciiBlog/mentenanta/` | `servicii mentenanta website` | Position 4 but only 1 impression | Improve title/meta and recurring-value copy | P3 |

### Internal Links to Add

| From Page | To Page | Anchor Text | Reason |
|---|---|---|---|
| `/` | `/preturi/` | `preț creare site în Moldova` | Push P1 price page |
| `/` | `/creare-site-chisinau/` | `creare site Chișinău` | Push local page |
| `/` | `/serviciiBlog/magazin-online/` | `creare magazin online în Moldova` | Push ecommerce page |
| `/preturi/` | `/site-de-prezentare/` | `site de prezentare de la 150 EUR` | Link price to service format |
| `/preturi/` | `/serviciiBlog/magazin-online/` | `mini-magazin online de la 300 EUR` | Ecommerce conversion path |
| `/site-de-prezentare/` | `/preturi/` | `preț site de prezentare` | Supports price keywords |
| `/creare-site-chisinau/` | `/preturi/` | `preț creare site Chișinău` | Connect local and price intent |
| `/serviciiBlog/magazin-online/` | `/preturi/` | `preț magazin online` | Capture ecommerce price intent |
| `/ru/` | `/ru/preturi/` | `цены на создание сайта` | Push RU price page |
| `/ru/` | `/ru/sozdanie-saitov-kishinev/` | `создание сайтов в Кишиневе` | Push RU local page |
| `/ru/preturi/` | `/ru/serviciiBlog/magazin-online/` | `интернет-магазин от 300 EUR` | RU ecommerce path |

## 9. Recommended New Pages

1. `/preturi-magazin-online/`
   - Target: `pret creare site magazin online`, `cat costa un site magazin online`, `pret realizare magazin online`
   - Purpose: split ecommerce price intent away from generic website pricing.
   - Offer: mini-magazin from 300 EUR; explain catalog, cart, delivery, payment, admin, SEO.

2. `/creare-magazin-online-chisinau/`
   - Target: `creare magazin online chișinău`, `creare magazin online chisinau`
   - Purpose: local page for ecommerce buyers.
   - Must include: Chisinau/Moldova delivery/payment context, examples, price CTA.

3. `/ru/sozdanie-internet-magazina-kishinev/`
   - Target: `создание интернет магазина кишинев`
   - Purpose: RU local ecommerce page.
   - Must include: price, timeline, catalog, delivery, payment, admin, contact.

4. `/web-design-chisinau/`
   - Target: `web design chisinau`
   - Purpose: only after P1 pages; useful if design leads matter.

5. `/seo-chisinau/`
   - Target: `seo chisinau`, `servicii seo chisinau`
   - Purpose: lower priority; SEO services are competitive and less immediate than website/ecommerce leads.

## 10. Recommended Page Improvements

### `/preturi/`

Current GSC issue: strong impressions but 0% CTR for many price queries.

Recommended title:

`Preț creare site Moldova 2026 | Landing 50 EUR, site 150 EUR`

Recommended meta:

`Vezi cât costă un site în Moldova: landing page de la 50 EUR, site de prezentare de la 150 EUR și mini-magazin de la 300 EUR. Estimare rapidă și ofertă gratuită.`

Add sections:

- `Cât costă un site web în Moldova?`
- `Preț creare site web: ce primești în fiecare pachet`
- `Preț site de prezentare`
- `Preț magazin online`
- `De ce unele agenții pornesc de la 290-990 EUR și noi avem pachete mai mici`

### `/creare-site-chisinau/`

Add:

- Above-fold price mention.
- Local proof: examples for Chisinau/Moldova businesses.
- FAQ: "Lucrăm doar în Chișinău?", "Cât costă?", "Cât durează?"
- Internal links to `/preturi/`, `/site-de-prezentare/`, `/serviciiBlog/magazin-online/`.

### `/serviciiBlog/magazin-online/`

Add:

- "Mini-magazin online de la 300 EUR".
- Payment/delivery/local admin section.
- Comparison: custom mini-store vs Cartum/platform.
- Separate CTA for ecommerce quote.

### `/ru/sozdanie-saitov-kishinev/`

Recommended title:

`Создание сайтов в Кишиневе | Сайт от 150 EUR, запуск 7-14 дней`

Add:

- Russian price block.
- Portfolio/client examples.
- "сайт-визитка", "сайт на заказ", "создание сайтов Молдова" sections.
- RU internal links to `/ru/preturi/`, `/ru/sait-vizitka/`, `/ru/serviciiBlog/magazin-online/`.

## 11. Internal Linking Plan

The internal linking plan should make `/preturi/`, `/creare-site-chisinau/`, `/serviciiBlog/magazin-online/`, `/ru/preturi/`, and `/ru/sozdanie-saitov-kishinev/` the highest-authority commercial pages.

Action list:

1. Add a "Popular searches" or service-grid block on the homepage using exact anchor text.
2. Add contextual price links from every service page.
3. Link from pricing cards to the specific service pages, not only contact.
4. Add cross-links between RO/RU equivalent pages where appropriate.
5. Update footer/service hub anchors to include keyword-rich labels, not generic "Mergi la pagina".

## 12. Technical SEO Observations

Seobility audit:

| Item | Finding | Recommendation |
|---|---|---|
| On-page score | 87% | Good baseline; content/structure issues remain |
| Crawled subpages | 40 | Matches expected small site |
| Indexable subpages | 37 | Good |
| Problems found | 190 | Mostly content/structure/meta issues |
| Internal anchor text | 9 pages need improvement | Fix with keyword-rich internal links |
| H1 keywords missing in body | 9 pages | Align body copy with title/H1 keywords |
| Title tags need improvement | 7 pages | Prioritize `/preturi/`, RU price, service pages |
| Duplicate text blocks | 9 pages / 63 repeated blocks | Reduce repeated generic service copy |
| Pages under 500 words | 3 pages | Expand if they are commercial pages |
| Keyword cannibalization | 2 pages | Review SEO/on-page and service landing overlaps |
| Language markup | 37 pages conflicting language markup | Review `BaseHead.astro`: `html lang`, `meta http-equiv="content-language"`, and hreflang values |
| Response time | 0.1 seconds | Strong technical advantage |
| Blocked AI/search bots | 0 | No issue |

Implementation-specific language note:

`BaseHead.astro` outputs `<meta http-equiv="content-language" content={`${lang}-MD`}>`, while pages use `<html lang="ro">` or `<html lang="ru">` and hreflang values `ro-MD` / `ru-MD`. Seobility may treat `ro` vs `ro-MD` and `ru` vs `ru-MD` as conflicting. Review by testing one RO and one RU rendered page. If the warning persists, remove the `content-language` meta or make language declarations consistent.

## 13. Backlink Strategy

Current Seobility backlink state:

- 4 referring domains
- 51 backlinks
- 100% follow links
- Referring TLDs include `.ro`, `.com`, `.md`

Backlink priorities:

1. Reclaim the lost `rezolvro.ro` backlink.
2. Update active client links to more useful anchors:
   - `creare site Moldova`
   - `website realizat de moldovawebsite.md`
   - `creare site Chișinău`
3. Add portfolio/footer credits on real client projects:
   - `tencuitor.md`
   - `arcadie-systems.com`
   - `r-ro.com`
   - `mieremoldova.md`
4. Add the business to Moldova/Romania directories where competitors appear:
   - TechBehemoths
   - Clutch
   - local business/service directories
5. Write one useful local guide and pitch it:
   - "Cât costă un site în Moldova în 2026?"
   - "Ce trebuie să conțină un site pentru o afacere locală din Chișinău?"

Do not buy generic backlinks first. The site needs relevant local/client/portfolio trust, not random domain metrics.

## 14. 30-Day SEO Plan

### Week 1: Price Pages

- Rewrite `/preturi/` title/meta.
- Add exact sections for `pret creare site`, `creare site web pret`, `realizare site web preturi`, `cost creare site`.
- Update `/ru/preturi/` for `сайт цены`, `разработка сайтов цена`, `цена создания сайта`.
- Add internal links from homepage and service pages to price pages.

### Week 2: Local + Ecommerce RO

- Improve `/creare-site-chisinau/`.
- Improve `/serviciiBlog/magazin-online/`.
- Create `/creare-magazin-online-chisinau/` if implementation time allows.
- Add ecommerce price block to `/preturi/`.

### Week 3: Russian Commercial Pages

- Improve `/ru/sozdanie-saitov-kishinev/`.
- Improve `/ru/serviciiBlog/magazin-online/`.
- Add RU internal links from `/ru/`, `/ru/preturi/`, `/ru/sait-vizitka/`.

### Week 4: Technical + Authority

- Review and fix language markup warning.
- Review titles flagged by Seobility.
- Improve weak internal anchors.
- Reclaim lost backlink and update active portfolio anchors.
- Submit updated sitemap in GSC if needed.

## 15. Final Prioritized Keyword List

P1:

- `pret creare site`
- `creare site web pret`
- `realizare site web preturi`
- `pret creare website`
- `cost creare site`
- `creare site moldova`
- `creare site chisinau`
- `creare magazin online moldova`
- `creare magazin online chișinău`
- `создание сайта кишинев`
- `создание сайтов кишинев`
- `создание интернет магазина молдова`
- `создание интернет магазина кишинев`
- `сайт цены`
- `разработка сайтов цена`

P2:

- `creare site`
- `creare site web`
- `site de prezentare`
- `pret site de prezentare`
- `site la comanda`
- `site la comandă`
- `web design moldova`
- `seo moldova`
- `servicii seo moldova`
- `seo chisinau`
- `сайт на заказ молдова`
- `сайт визитка`

P3:

- `landing page moldova`
- `mentenanta website`
- `servicii mentenanta website`
- `web design chisinau`
- `seo chisinau`
- `сайт на заказ кишинев`

## Sources / Evidence Used

- GSC export in project folder: `moldovawebsite.md-Performance-on-Search-2026-06-10`
- Seobility project: `Charlie https://moldovawebsite.md/`
- Seobility Keyword Research Tool, country `Google.md`
- Seobility Site Audit: 87% on-page score, 40 crawled subpages, 37 indexable subpages
- Seobility Backlinks: 4 referring domains, 51 backlinks
- Live Google browser checks for:
  - `creare site moldova`
  - `pret creare site moldova`
  - `creare magazin online moldova`
  - `seo moldova`
  - `создание сайтов кишинев`
- Competitor URLs observed in SERP/Seobility:
  - https://webmaster.md/
  - https://ilab.md/
  - https://webposeidon.md/
  - https://crearesiteuri.md/
  - https://crearesite.md/
  - https://digitalexpert.md/
  - https://webit.md/
  - https://cartum.md/
  - https://bpro.md/online-magazin/
  - https://webcraft.md/
  - https://rocketseo.md/
  - https://semseo.md/
