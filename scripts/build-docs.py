from pathlib import Path

ROOT = Path("/Users/tiagopaixaomoreiradomingues/Desktop/nuno_rlt")
CSS = Path("/tmp/evora-style.css").read_text()
# strip wrapping <style> tags for reuse inside our <style>
inner = CSS
if inner.startswith("<style>"):
    inner = inner[len("<style>"):]
if inner.endswith("</style>"):
    inner = inner[: -len("</style>")]

HEAD = """<!doctype html>
<html lang="__LANG__">
<head>
  <meta charset="utf-8">
  <title>__TITLE__</title>
  <style>
""" + inner + """
  </style>
</head>
<body>
<footer class="document-footer">
  <span class="page-marker" data-file="__PDF__"></span>
</footer>
"""

proposal_body = r'''
<section class="cover-page">
  <div class="cover-brand">
    <div class="cover-logo-tile"><img src="dtabypassion_logo.png" alt="DatabyPassion"></div>
    <div>
      <div class="brand-name">DatabyPassion</div>
      <div class="brand-tagline">Enterprise expertise. Built at startup speed.</div>
    </div>
  </div>
  <div class="cover-content">
    <p class="cover-eyebrow">Commercial offer &middot; Digital products</p>
    <h1>Real Life Technologies website</h1>
    <p class="cover-subtitle">A bilingual institutional site that matches the firm: four pillars, Nuno&rsquo;s art direction, shipped as working software &mdash; not a brochure that pretends.</p>

    <div class="cover-meta">
      <div class="cover-meta-row"><span>Prepared for</span><strong>Nuno Melo S&atilde;o Pedro &middot; Real Life Technologies</strong></div>
      <div class="cover-meta-row"><span>Prepared by</span><strong>DatabyPassion &middot; Lisboa, Portugal</strong></div>
      <div class="cover-meta-row"><span>Date</span><strong>16 September 2026</strong></div>
      <div class="cover-meta-row"><span>Validity</span><strong>14 days from the date above</strong></div>
    </div>

    <div class="cover-headline-figures">
      <div class="cover-figure"><b>&euro;9,500</b><span>Build, excluding IVA</span></div>
      <div class="cover-figure"><b>&euro;149 / month</b><span>Care Standard from go-live (hosting included)</span></div>
      <div class="cover-figure"><b>Understand &rarr; Shape &rarr; Build &rarr; Evolve</b><span>Same method as the DatabyPassion studio</span></div>
    </div>

    <section class="cover-summary">
      <h2>Executive Summary</h2>
      <p>The live site at reallife.pt is not at the level of an ICT integrator of this size. The mock you shared already has the right language: dark, gold, four pillars. This offer is to ship that first product &mdash; Portuguese and English, on your domain, without touching mail &mdash; as DatabyPassion&rsquo;s Digital products practice. Numbers below are the default after the discovery call; they can move if Understand changes scope. They are not a close on the call.</p>
    </section>
  </div>
  <div class="cover-footer">
    <span>DatabyPassion &middot; databy-passion-website.vercel.app</span>
    <span>Commercial in confidence</span>
  </div>
</section>

<section class="toc-page">
  <div class="toc-card">
    <h2>Contents</h2>
    <ol>
      <li>Why DatabyPassion</li>
      <li>Why this site now</li>
      <li>First product</li>
      <li>Prototype</li>
      <li>Domains</li>
      <li>How we deliver</li>
      <li>Build price</li>
      <li>Evolve &mdash; hosting and care</li>
      <li>Next steps</li>
      <li>Contact</li>
    </ol>
  </div>
</section>

<main class="document-body">

<p><strong>Project:</strong> Real Life Technologies institutional website</p>
<p><strong>Client:</strong> Real Life Technologies</p>
<p><strong>Prepared by:</strong> DatabyPassion, Lisboa, Portugal</p>
<p><strong>Date:</strong> 16 September 2026</p>
<p><strong>Currency:</strong> EUR. All prices exclude IVA unless stated otherwise. IVA is shown at the current legal rate of 23 percent.</p>
<p><strong>Validity:</strong> 14 days from the date above.</p>

<h2 id="why">Why DatabyPassion</h2>
<p>DatabyPassion is a founder-led technology studio. Line: <strong>Enterprise expertise. Built at startup speed.</strong> This engagement is the Digital products practice: websites, web apps, internal tools and digital experiences &mdash; shipped as working products, not a brochure that pretends.</p>
<ul>
<li><strong>One engagement lead stays in the work.</strong> No account layer between the call and the commit.</li>
<li><strong>Build and show.</strong> A working prototype exists before you sign. The first release is small enough to ship.</li>
<li><strong>Leave something you can run.</strong> Hosting, care and DNS are explicit. Mail (MX) is not touched.</li>
</ul>
<p>Studio: <a href="https://databy-passion-website.vercel.app/">databy-passion-website.vercel.app</a></p>

<h2 id="why-now">Why this site now</h2>
<p>Google and clients currently see an old WordPress property: broken chrome, 2020&ndash;21 Cisco news as homepage, mixed navigation. The firm is an ICT integrator founded in 2008, around 150 people, with certified vendor relationships (Cisco Gold, HPE Partner Ready, CrowdStrike, Huawei). The public surface should match that. Your mock already points the way. We modernise <strong>reallife.pt</strong> in that language. We do not put a parent-group line on the site unless you confirm it on the call.</p>

<h2 id="product">First product</h2>
<p>Portuguese default, English switcher. Routes:</p>
<table>
  <thead><tr><th>Page</th><th>Intent</th></tr></thead>
  <tbody>
    <tr><td>Home</td><td>Sculpture hero, gold ribbon, How We Help, Ready to Talk, four pillars, trust names</td></tr>
    <tr><td>Software</td><td>Applications, portals, integrations</td></tr>
    <tr><td>Infrastructure</td><td>Networks, data centre, cloud, workplace</td></tr>
    <tr><td>Consulting</td><td>Architecture and transformation with the team that then builds</td></tr>
    <tr><td>Support</td><td>Operate what was delivered</td></tr>
    <tr><td>About</td><td>2008, geographies, people &mdash; parent group only if you confirm</td></tr>
    <tr><td>Contact</td><td>Form plus geral@reallife.pt</td></tr>
  </tbody>
</table>
<p>Out of this first product: CMS, real form-to-inbox until go-live, partner trademark logos without permission (text names are fine), data platforms / AI (Evolve later, only if earned).</p>

<h2 id="prototype">Prototype</h2>
<p>A working Next.js prototype is already visible:</p>
<p><a href="https://reallifetechnologies.vercel.app">https://reallifetechnologies.vercel.app</a></p>
<p>Source: <a href="https://github.com/Tiago-Domingues/reallifetechnologies">github.com/Tiago-Domingues/reallifetechnologies</a>. Preview stays on Vercel until you point DNS. WordPress remains on reallife.pt until written go-live.</p>

<h2 id="domains">Domains</h2>
<p>Facts to confirm, then decisions to write down. Mail in use today: <strong>geral@reallife.pt</strong>. Pointing A/CNAME at Vercel must not touch MX, SPF or DKIM.</p>
<table>
  <thead><tr><th>Confirm</th><th>Agree before go-live</th></tr></thead>
  <tbody>
    <tr><td>Who holds reallife.pt (company, group IT, agency, Nuno)? DNS / DNSSEC access?</td><td>Canonical host: reallife.pt or www (one primary, the other 301)</td></tr>
    <tr><td>Existing reallife.com, reallifetechnologies.com, country TLDs?</td><td>Extra hosts: redirects only vs separate country sites</td></tr>
    <tr><td>Must email keep working through cutover?</td><td>Keep WordPress live until go-live; preview on *.vercel.app</td></tr>
    <tr><td>Stay on reallife.pt or a new independent brand domain?</td><td>Who buys/renews; who holds the registrar login. DNS change only after written yes + MX check</td></tr>
  </tbody>
</table>

<h2 id="method">How we deliver</h2>
<figure class="diagram-block">
  <figcaption>DatabyPassion method</figcaption>
  <div class="arch-row">
    <div class="arch-node"><b>Understand</b><span>This call &middot; problem frame</span></div>
    <div class="arch-node"><b>Shape</b><span>Prototype + written first product</span></div>
    <div class="arch-node accent"><b>Build</b><span>Three visible loops</span></div>
    <div class="arch-node"><b>Evolve</b><span>Care Standard &middot; next product only if earned</span></div>
  </div>
</figure>
<p>If the word &ldquo;sprints&rdquo; comes up: short loops inside Build. The method is Understand, Shape, Build, Evolve &mdash; the same as the studio site.</p>
<table>
  <thead><tr><th>Loop</th><th>What you see</th></tr></thead>
  <tbody>
    <tr><td>1 &mdash; Homepage lock</td><td>Hero, ribbon, How We Help, Ready to Talk</td></tr>
    <tr><td>2 &mdash; Pillars / About / Contact</td><td>Four routes plus about and contact, working on desktop and mobile</td></tr>
    <tr><td>3 &mdash; Bilingual, legal, DNS</td><td>PT/EN, cookies/privacy, cutover plan with MX untouched. First month of Care can sit here so it is not a surprise.</td></tr>
  </tbody>
</table>

<h2 id="price">Build price</h2>
<div class="module-meta"><span>Default first product</span><b>&euro;9,500 excluding IVA</b><span>&euro;11,685 including IVA at 23%</span></div>
<table>
  <thead><tr><th>Item</th><th class="num">EUR ex-IVA</th></tr></thead>
  <tbody>
    <tr><td>Institutional site, PT/EN, seven routes, prototype already visible, go-live on your domain</td><td class="num">9,500</td></tr>
    <tr class="total-row"><td>Build total</td><td class="num">9,500</td></tr>
  </tbody>
</table>
<p>Payment: <strong>40% on start of loop 1 / 40% on start of loop 2 / 20% at go-live</strong>. 50/50 if you prefer not to split the middle. Floor if Understand shrinks scope: &euro;8,000. If a CMS and training are added: &euro;14,500. Those alternatives are not this default.</p>
<p>Portuguese market context for a custom bilingual institutional site is roughly &euro;8,000&ndash;20,000 excluding IVA. This default sits in the low-mid of that band as a first official DatabyPassion product &mdash; not the WordPress PME band of a few thousand euros.</p>

<h2 id="evolve">Evolve &mdash; hosting and care</h2>
<p>Hosting and maintenance are monthly, not folded into the build. Recommended from go-live: <strong>Care Standard</strong>.</p>
<table>
  <thead><tr><th>SKU</th><th>Includes</th><th class="num">EUR / month ex-IVA</th></tr></thead>
  <tbody>
    <tr><td>Hosting only</td><td>Vercel, SSL, backups</td><td class="num">49</td></tr>
    <tr class="total-row"><td>Care Standard (recommended)</td><td>Hosting + uptime + patches + 2 hours of edits / month</td><td class="num">149</td></tr>
    <tr><td>Care Plus</td><td>4 hours of edits, SLA next business day</td><td class="num">249</td></tr>
  </tbody>
</table>
<p>Data platforms or AI are not in this first product. They become a conversation only if the site is used and you ask.</p>

<h2 id="next">Next steps</h2>
<ol>
  <li>Discovery call (Understand) &mdash; already scheduled.</li>
  <li>Written recap the same day: who signs, domains, parent-group line yes/no, languages, Care from day one, recap date.</li>
  <li>This offer, filled with anything Understand changed, sent the same day. Do not treat the call as a price close.</li>
  <li>Signature, then Build loop 1.</li>
</ol>
<blockquote><p>Controls if you ask: contractual confidentiality, least-privilege access, no unrelated model training. Legal entity details including NIF and registered address are provided at contracting.</p></blockquote>

<h2 id="contact">Contact</h2>
<div class="contact-block">
  <h3>DatabyPassion</h3>
  <p><strong>Tiago Paix&atilde;o Moreira Domingues</strong> &mdash; Founder and Delivery Lead</p>
  <p>Lisboa, Portugal</p>
  <p><a href="mailto:tiagopaixaodomingues@gmail.com">tiagopaixaodomingues@gmail.com</a></p>
  <p><a href="https://databy-passion-website.vercel.app/">databy-passion-website.vercel.app</a></p>
  <p>Legal entity details, including tax identification and registered address, are provided at contracting stage.</p>
</div>
<p>This offer is submitted to Real Life Technologies and is valid for 14 days from 16 September 2026. All prices are in euros and exclude IVA unless stated otherwise. DatabyPassion treats this document and all information exchanged as confidential.</p>
</main>
</body>
</html>
'''

script_body = r'''
<section class="cover-page">
  <div class="cover-brand">
    <div class="cover-logo-tile"><img src="dtabypassion_logo.png" alt="DatabyPassion"></div>
    <div>
      <div class="brand-name">DatabyPassion</div>
      <div class="brand-tagline">Interno &middot; n&atilde;o enviar</div>
    </div>
  </div>
  <div class="cover-content">
    <p class="cover-eyebrow">Script de call &middot; confidencial</p>
    <h1>Zoom com Nuno &mdash; Real Life Technologies</h1>
    <p class="cover-subtitle">A call &eacute; Understand. N&atilde;o fechar pre&ccedil;o. Cotação em ingl&ecirc;s no mesmo dia. Mostrar o prot&oacute;tipo. N&atilde;o falar de Jhonny. N&atilde;o dizer 9.500 em voz alta.</p>
    <div class="cover-meta">
      <div class="cover-meta-row"><span>Idioma da call</span><strong>Portugu&ecirc;s</strong></div>
      <div class="cover-meta-row"><span>Idioma da cotação</span><strong>Ingl&ecirc;s</strong></div>
      <div class="cover-meta-row"><span>Facturação</span><strong>DatabyPassion (empresa)</strong></div>
      <div class="cover-meta-row"><span>Default na PDF</span><strong>&euro;9.500 + IVA &middot; Care &euro;149/m&ecirc;s</strong></div>
    </div>
    <div class="cover-headline-figures">
      <div class="cover-figure"><b>~40 min</b><span>Agenda abaixo</span></div>
      <div class="cover-figure"><b>8&ndash;15 mil</b><span>Faixa s&oacute; se ele apertar por um n&uacute;mero</span></div>
      <div class="cover-figure"><b>Mesmo dia</b><span>Cotação escrita depois da call</span></div>
    </div>
  </div>
  <div class="cover-footer">
    <span>DatabyPassion &middot; uso interno</span>
    <span>N&atilde;o enviar ao cliente</span>
  </div>
</section>

<section class="toc-page">
  <div class="toc-card">
    <h2>Conte&uacute;do</h2>
    <ol>
      <li>Agenda</li>
      <li>O que dizer</li>
      <li>Diagn&oacute;stico do site actual</li>
      <li>Perguntas</li>
      <li>Dom&iacute;nios</li>
      <li>Pre&ccedil;o na call</li>
      <li>Acordar antes de desligar</li>
    </ol>
  </div>
</section>

<main class="document-body">

<p><strong>Confidencial.</strong> N&atilde;o partilhar com Nuno. A cotação do cliente &eacute; o PDF em ingl&ecirc;s.</p>

<h2>Agenda (~40 min)</h2>
<ol>
  <li>Intro DatabyPassion (2 min)</li>
  <li>Ouvir (12 min)</li>
  <li>Diagn&oacute;stico (5 min)</li>
  <li>Mostrar o prot&oacute;tipo Vercel (8 min)</li>
  <li>Como entregamos: Understand &rarr; Shape &rarr; Build &rarr; Evolve + Care (5 min)</li>
  <li>Acordar pr&oacute;ximo passo: cotação hoje (3 min) &mdash; sem fechar pre&ccedil;o</li>
</ol>

<h2>O que dizer</h2>
<ul>
  <li>&ldquo;A DatabyPassion &eacute; uma boutique founder-led. Este seria o primeiro produto: o vosso site, na pr&aacute;tica Digital products.&rdquo;</li>
  <li>&ldquo;O site actual n&atilde;o est&aacute; ao n&iacute;vel da empresa. O teu mock j&aacute; &eacute; o caminho certo.&rdquo;</li>
  <li>&ldquo;O m&eacute;todo &eacute; o mesmo do nosso site: Understand, Shape, Build, Evolve. Depois desta call mando a cotação, com o Build e o Evolve (hosting e manuten&ccedil;&atilde;o).&rdquo;</li>
  <li>Prova: <a href="https://databy-passion-website.vercel.app/">databy-passion-website.vercel.app</a> + prot&oacute;tipo RLT. N&atilde;o liderar com Jhonny. Mercer / EY ficam fora.</li>
</ul>
<p>Se ele disser &ldquo;sprints&rdquo;: &ldquo;Sim &mdash; loops curtos dentro do Build. O m&eacute;todo &eacute; Understand, Shape, Build, Evolve, o mesmo da DatabyPassion.&rdquo;</p>

<h2>Diagn&oacute;stico (n&atilde;o misturar as duas coisas)</h2>
<ul>
  <li><strong>Produ&ccedil;&atilde;o:</strong> reallife.pt &mdash; WordPress antigo, header partido, not&iacute;cia Cisco 2020&ndash;21 como homepage, navega&ccedil;&atilde;o misturada.</li>
  <li><strong>O que ele chamou &ldquo;o que existe actualmente&rdquo;:</strong> partilha Google Sites (refer&ecirc;ncia, n&atilde;o o design system).</li>
  <li><strong>O que ele quer:</strong> o mock escuro + ribbon dourado + Software / Infrastructure / Consulting / Support / About / Contact.</li>
</ul>
<p>About no prot&oacute;tipo: 2008, Cisco, geografias. <strong>Sem</strong> &ldquo;parte da Visabeira Global&rdquo; at&eacute; ele confirmar. N&atilde;o inventar sal&aacute;rio nem 30% de ownership. Perguntar quem assina.</p>
<p>Poss&iacute;vel deal 2026 (verificar): Omnium lista um investimento Core Capital Q2 2026 de &euro;12,4M em &ldquo;Real Life Technologies&rdquo;. Confirmar se &eacute; a mesma empresa e quem &eacute; dono agora.</p>

<h2>Perguntas</h2>
<ul>
  <li>Quem assina o contrato e quem paga?</li>
  <li>Visabeira sai do site, sim ou n&atilde;o?</li>
  <li>PT/EN chega, ou h&aacute; FR / mercado africano?</li>
  <li>CMS para a equipa editar, ou p&aacute;ginas est&aacute;ticas connosco?</li>
  <li>Care / hosting desde o go-live?</li>
  <li>Data para um recap de 20 min depois da cotação?</li>
</ul>

<h2>Dom&iacute;nios &mdash; confirmar e acordar</h2>
<p><strong>Confirmar:</strong> titular de reallife.pt; acesso DNS; outros TLDs; MX tem de continuar; marca independente depois do deal?</p>
<p><strong>Acordar:</strong> can&oacute;nico reallife.pt vs www; extras s&oacute; redirect; WordPress fica at&eacute; go-live; preview em *.vercel.app; quem renova; DNS s&oacute; com sim escrito + check MX.</p>

<h2>Pre&ccedil;o na call</h2>
<p><strong>N&atilde;o fechar n&uacute;mero.</strong> N&atilde;o dizer &euro;9.500 em voz alta.</p>
<p>Se apertar: &ldquo;Em Portugal um site institucional &agrave; medida bilingue anda <strong>entre 8 e 15 mil euros</strong> mais IVA. Fecho o valor na cotação depois desta conversa, com hosting e manuten&ccedil;&atilde;o &agrave; parte.&rdquo;</p>
<p>Na cabe&ccedil;a: ch&atilde;o &euro;8.000 &middot; default PDF &euro;9.500 &middot; CMS+formação &euro;14.500. Care Standard &euro;149/m&ecirc;s (recomendado). Hosting s&oacute; &euro;49. Care Plus &euro;249.</p>

<h2>Acordar antes de desligar</h2>
<ul>
  <li>Quem assina</li>
  <li>Dom&iacute;nios</li>
  <li>Visabeira off sim/n&atilde;o</li>
  <li>PT/EN</li>
  <li>Cotação hoje (ingl&ecirc;s)</li>
  <li>Data do recap de 20 min</li>
</ul>
<div class="contact-block">
  <h3>Depois da call</h3>
  <p>Recap curto em PT por WhatsApp ou mail. PDF em ingl&ecirc;s: docs/proposal-databypassion-reallife.pdf. Ajustar n&uacute;meros s&oacute; se o Understand mudou o &acirc;mbito.</p>
</div>
</main>
</body>
</html>
'''

def wrap(lang, title, pdf, body):
    head = (
        HEAD.replace("__LANG__", lang)
        .replace("__TITLE__", title)
        .replace("__PDF__", pdf)
    )
    return head + body

(ROOT / "docs/nuno-call-script.html").write_text(
    wrap("pt", "DatabyPassion — script interno Nuno / RLT (não enviar)", "nuno-call-script.pdf", script_body),
    encoding="utf-8",
)
print("wrote html", (ROOT / "docs/nuno-call-script.html").stat().st_size)
print("skipped proposal html — canonical file is docs/proposal-databypassion-reallife.html")
