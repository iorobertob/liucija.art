import Image from "next/image";
import { Locale } from "./thesis-data";

export interface SubContent {
  body: Record<Locale, React.ReactNode>;
}

// ── Inline figure helper ───────────────────────────────────────────────────────
// align: "left" floats figure to the left of following text,
//        "right" floats to the right, "center" is full-width block
function Fig({
  src,
  alt,
  caption,
  align = "right",
  width = 280,
}: {
  src: string;
  alt: string;
  caption: string;
  align?: "left" | "right" | "center";
  width?: number;
}) {
  const isCenter = align === "center";
  return (
    <figure
      style={{
        float: isCenter ? "none" : align,
        clear: isCenter ? "both" : "none",
        margin: isCenter
          ? "2.5rem auto"
          : align === "right"
          ? "0.5rem 0 1.5rem 2rem"
          : "0.5rem 2rem 1.5rem 0",
        width: isCenter ? "min(100%, 480px)" : `${width}px`,
        display: "block",
      }}
    >
      <div
        style={{
          background: "var(--color-parchment-dark)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={isCenter ? 480 : width}
          height={isCenter ? 360 : Math.round(width * 1.35)}
          style={{ objectFit: "contain", width: "100%", height: "auto", display: "block" }}
          sizes={isCenter ? "(max-width: 760px) 100vw, 480px" : `${width}px`}
        />
      </div>
      <figcaption
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "12px",
          fontStyle: "italic",
          color: "var(--color-ink-light)",
          marginTop: "0.6rem",
          lineHeight: 1.5,
          opacity: 0.75,
          textAlign: isCenter ? "center" : "left",
        }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

// Clears float after a section with floated figures
const ClearFloat = () => <div style={{ clear: "both" }} />;

// ── Section 1.1 ───────────────────────────────────────────────────────────────
export const s1_1: SubContent = {
  body: {
    lt: (
      <>
        <blockquote>
          Planetos ištekliai senka. Taigi, jei mums iš tiesų rūpi mūsų planetos ateitis, turime
          nustoti palikti visas problemas spręsti jiems. Išsaugoti pasaulį rytojui turime mes: tai
          priklauso nuo jūsų ir nuo manęs.
          <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.9em" }}>— Jane Goodall</cite>
        </blockquote>

        <Fig
          src="/images/img-001.jpg"
          alt="Ateitis ties išnykimo riba"
          caption="1 iliustracija. Ateitis ties išnykimo riba, koliažas, Liucija Dervinytė, 2021."
          align="right"
        />

        <p>
          Noriu pradėti šį darbą nuo asmeninių patirčių – šios kelionės pagrindo, o taip pat ir
          platesnio konteksto suteikiančio prasmę asmeninei kelionei, bei nuo mėginimo suprasti, kas
          yra toji Antropoceno krizė. Todėl visų pirma, šį darbą pradėsiu apžvelgdama statistiką,
          apibūdinančią šią krizę. Nuo tokios nerimą keliančios statistikos kilo ir mano asmeninis
          poreikis leistis giliau į tvarumo temą. Tačiau suprantu, kad per ilgai užsibuvus tokioje
          informacijoje, gali kilti neviltis. Todėl svarbu apžvelgus informaciją ją reflektuoti ir
          ieškoti naujų požiūrio taškų.
        </p>

        <ClearFloat />

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Pasaulyje nėra vietos atliekoms<br />
          Vartotojiškumas ateina<br />
          iš psichologinių problemų.<br />
          Tada iškerti miškus,<br />
          išnaikini kitas kultūras.
        </blockquote>

        <Fig
          src="/images/img-002.jpg"
          alt="Nėra vietos atliekoms"
          caption="2 iliustracija. Nėra vietos atliekoms, koliažas, Liucija Dervinytė, 2021."
          align="left"
        />

        <p>
          Stebėdama savo aplinką vis labiau pradėjau atkreipti dėmesį į netvarius visuotinius
          vartojimo modelius ir jų poveikį. Mano kelionė prasidėjo nuo tekstilės ir mados
          industrijos. Kaip teigiama World Economic Forum straipsnyje, ji yra antras pagal dydį
          vandens vartotojas pasaulyje (vieniems marškinėliams pagaminti sunaudojama apie 3000 litrų
          vandens), ir yra atsakinga už 20% visos pramoninės vandens taršos pasaulyje.
        </p>

        <ClearFloat />

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Kai Pasaulis pamiršta<br />
          Pagalvok.<br />
          Šokoladas.<br />
          Degantys palmių aliejaus miškai,<br />
          3000 problemų,<br />
          Nykstančios rūšys.<br />
          Tavo atsakomybė.<br />
          Daryk mažiau,<br />
          Priimk sprendimus.
        </blockquote>

        <Fig
          src="/images/img-003.jpg"
          alt="Kai pasaulis pamiršta"
          caption="3 iliustracija. Kai pasaulis pamiršta, koliažas, Liucija Dervinytė, 2021."
          align="right"
        />

        <p>
          Gamta leidžia žmogui vystytis, tačiau mūsų nuolatinis žemės išteklių poreikis spartina
          ekosistemų nykimo tempus. WWF tyrime The Living Planet Report nurodoma, jog 73%
          neapledėjusio žemės paviršiaus jau yra paveikta žmogaus veiklos, o tarp 1970–2016 metų
          žinduolių, paukščių, varliagyvių, roplių ir žuvų populiacijos dydis sumažėjo vidutiniškai
          68%. Žemės ūkio daroma žala planetai yra tikrai didelė, o nepaisant to, net 820 milijonų
          pasaulio gyventojų vis dar susiduria su bado problema.
        </p>

        <ClearFloat />

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Gyvenimas po apokalipsės<br /><br />
          Ateina toks metas,<br />
          kai pati gamta parodo,<br />
          kad kažkas negerai,<br />
          kažką reikia keisti.<br />
          Einame į naują žmonijos etapą.<br />
          Neaišku kaip kas bus,<br />
          nebus gerai.<br /><br />
          Bus daug sunkumo,<br />
          didelis virsmas į kažką neaiškaus.<br />
          Bet žmonija linkusi prisitaikyti.
        </blockquote>

        <Fig
          src="/images/img-004.jpg"
          alt="Žvėris kelionėje"
          caption="4 iliustracija. Žvėris kelionėje, tekstilinis koliažas, Liucija Dervinytė, 2020."
          align="left"
        />

        <p>
          Galbūt aiškiau matomi pokyčiai visuomenėje vyksta svarbių įvykių ar stiprių sukrėtimų
          laikotarpiais. Kaip teigia Donna J. Haraway, šiais neramiais laikais itin svarbu
          nenugrimzti į neviltį, o mokytis išlikti dabartyje – „gyventi su bėda mūsų pažeistoje
          planetoje". Tad tenka pačiai sau priminti, jog nepaisant visų sunkumų ir destrukcijos,
          kiekviena krizė – tai kažko naujo pradžia, tai galimybė mokytis ir kurti naujas prasmes.
        </p>

        <ClearFloat />
      </>
    ),
    en: (
      <>
        <blockquote>
          The planet's resources are dwindling. So if we truly care about the future of our planet,
          we must stop leaving all problems for them to solve. It is up to us to save the world for
          tomorrow — it depends on you and me.
          <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.9em" }}>— Jane Goodall<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>23</sup></cite>
        </blockquote>

        <Fig
          src="/images/img-001.jpg"
          alt="Future at the Edge of Extinction"
          caption="Fig. 1. Future at the Edge of Extinction, collage, Liucija Dervinytė, 2021."
          align="right"
        />

        <p>
          I want to begin this work from personal experiences — the foundation of this journey —
          and from an attempt to understand what the Anthropocene crisis is. The sheer volume of
          unsettling statistics drove my personal need to delve deeper into the theme of
          sustainability. Yet I understand that dwelling too long in such information can lead to
          despair. It is important to reflect on the information and seek new perspectives.
        </p>

        <ClearFloat />

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          There is no room for waste in this world.<br />
          Consumerism comes<br />
          from psychological problems.<br />
          Then you fell forests,<br />
          you wipe out other cultures.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>24</sup>
        </blockquote>

        <Fig
          src="/images/img-002.jpg"
          alt="No room for waste"
          caption="Fig. 2. No room for waste, collage, Liucija Dervinytė, 2021."
          align="left"
        />

        <p>
          Observing my surroundings I began to pay more and more attention to unsustainable
          global consumption patterns and their impact. My journey began with the textile and
          fashion industry. As stated in a World Economic Forum article, it is the world's second-
          largest water consumer (approximately 3,000 liters of water are needed to produce a
          single t-shirt), and is responsible for 20% of all industrial water pollution worldwide.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>25</sup>{" "}
          Based on the 2020 Fashion Revolution White Paper,<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>26</sup> the majority of textile
          production takes place in impoverished countries where factory workers receive low wages,
          work in poor conditions, and are often exploited.
        </p>

        <ClearFloat />

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          When the World Forgets<br />
          Think.<br />
          Chocolate.<br />
          Burning palm oil forests,<br />
          3000 problems,<br />
          Endangered species.<br />
          Your responsibility.<br />
          Do less,<br />
          Make decisions.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>27</sup>
        </blockquote>

        <Fig
          src="/images/img-003.jpg"
          alt="When the world forgets"
          caption="Fig. 3. When the world forgets, collage, Liucija Dervinytė, 2021."
          align="right"
        />

        <p>
          Nature allows humanity to develop, but our constant demand for Earth's resources
          accelerates ecosystem collapse. The WWF Living Planet Report<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>28</sup> indicates that 73%
          of non-glaciated land surface has already been affected by human activity, and between
          1970–2016 the populations of mammals, birds, amphibians, reptiles, and fish declined by
          an average of 68%. As Hannah Ritchie notes,<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>29</sup> about 50% of land is used for food
          production. Despite the enormous resource demands of food production, 820 million
          people still face hunger.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>30</sup>
        </p>

        <ClearFloat />

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Life After the Apocalypse<br /><br />
          A moment comes<br />
          when nature itself shows<br />
          something is wrong,<br />
          something must change.<br />
          We are entering a new era of humanity.<br />
          It is unclear how things will be,<br />
          it will not be good.<br /><br />
          There will be great hardship,<br />
          a great transformation into something unknown.<br />
          But humanity tends to adapt.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>33</sup>
        </blockquote>

        <Fig
          src="/images/img-004.jpg"
          alt="The beast on a journey"
          caption="Fig. 4. The beast on a journey, textile collage, Liucija Dervinytė, 2020."
          align="left"
        />

        <p>
          Perhaps the most visible changes in society occur during significant events or upheavals.
          As Donna J. Haraway argues, in these troubled times it is especially important not to
          sink into despair, but to stay present — "to live with the trouble on our damaged planet."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>35</sup>{" "}
          Every crisis is the beginning of something new, an opportunity to learn and create new
          meanings.
        </p>

        <ClearFloat />
      </>
    ),
  },
};

// ── Section 1.2 ───────────────────────────────────────────────────────────────
export const s1_2: SubContent = {
  body: {
    lt: (
      <>
        <blockquote>
          Viskas yra dualu; viskas turi savo polius; viskas turi savo priešybę; panašus ir
          nepanašus yra vienas ir tas pats; priešybės identiškos savo prigimtimi, bet skiriasi
          laipsniu.
          <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.9em" }}>— The Kybalion</cite>
        </blockquote>

        <p>
          Mūsų realybės samprata daro didžiulį poveikį mūsų elgesiui gamtos ir kitų žmonių
          atžvilgiu. Todėl svarbu suprasti, kaip mes suprantame savo vietą pasaulyje, ką vadiname
          gamta, o ką – kultūra.
        </p>

        <p>
          Žodis „gamta" lietuvių kalboje yra semantiškai artimas žodžiams „gimimas, prigimtis,
          būtis", panašiai kaip ir senovės lotynų kalboje „natura" – tai „gimimas, prigimtis".
          Egzistuoja skirtingos šio žodžio sampratos: viena jų pabrėžia atskirtį tarp žmogaus ir
          jį supančios aplinkos, o kita apibūdina gamtą plačiąja prasme, kaip „visatą su visais jos
          fenomenais". Gamtos apibūdinimas savyje talpina ir žmogų bei jo kuriamą kultūrą, kaip
          neatskiriamą jos dalį. Nepaisant to, kultūra dažnai laikoma priešybe gamtai.
        </p>

        <Fig
          src="/images/img-005.jpg"
          alt="Prigimtis"
          caption="5 iliustracija. Prigimtis, tekstilinis koliažas, Liucija Dervinytė, 2021."
          align="right"
        />

        <h3>Kultivavimas, rūpinimasis, saugojimas</h3>

        <p>
          „Kultūros" šaknis galime rasti lotynų kalboje, kur šis žodis kilo iš „colere",
          reiškiančio „rūpintis, saugoti, įdirbti, kultivuoti". Kultūra – tai visuomenės žinių,
          vertybių, tradicijų ir veiklų visuma, perduodama socialinių ryšių pagrindu.
        </p>

        <p>
          Aplinkosaugininkas Rodas Benninsonas siūlo kultūrą apibrėžti kaip „natūralių evoliucinių
          procesų išraišką, apibūdinančią tam tikras gyvūnų visuomenes". Tačiau čia būtų galima
          pridėti, jog ir kitos gyvybės formos veikia socializacijos principais, todėl ir formuoja
          kultūras — mikroorganizmai, grybai ar augalai. Taip kultūra tampa gamtos išraiškos forma,
          kuri savyje talpina ir žmogų.
        </p>

        <p>
          Apžvelgus gamtos ir kultūros sąvokas galima mėginti atsakyti į klausimą: „kultūra
          gamtoje ar gamta kultūroje?". Abu teiginiai gali egzistuoti vienas šalia kito, nepaneigdami
          vienas kito. Jei kultūra yra gamtos veikimo išraiška, vadinasi ji egzistuoja gamtoje —
          negali egzistuoti be jos. Gamta yra sudaryta iš daugybės kultūrų sąveikaujančių
          tarpusavyje. Jos šaknys.
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-006.jpg"
          alt="Kultivacija"
          caption="6 iliustracija. Kultivacija, išsiuvinėta kūrybinio projekto dalyvės, Emilijos, tėčio liemenė, Liucija Dervinytė, 2021."
          align="center"
          width={480}
        />
      </>
    ),
    en: (
      <>
        <blockquote>
          Everything is dual; everything has poles; everything has its pair of opposites; like and
          unlike are the same; opposites are identical in nature, but different in degree.
          <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.9em" }}>— The Kybalion<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>36</sup></cite>
        </blockquote>

        <p>
          Our understanding of reality has an enormous impact on our behavior toward nature and
          other people.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>37</sup> It is therefore important to understand how we perceive our place in
          the world — what we call nature, and what we call culture. As Frédéric Ducarme and Denis
          Couvet observe, "although conservation of nature has become a major social concern, the
          idea of nature remains obscure."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>38</sup>
        </p>

        <p>
          The word "nature" in Lithuanian is semantically close to "birth, innate quality, being,"<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>39</sup>{" "}
          much like the Latin "natura" — "birth, innate quality,"<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>40</sup> and the Ancient Greek
          "physis."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>41</sup> The word "nature" is thought to derive from the Indo-European root
          "bheu," the ancestor of the English verb "to be."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>42</sup> Different interpretations of
          this word exist: one emphasizes the separation between the human and the surrounding
          environment, while another describes nature broadly as "the universe with all its
          phenomena."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>43</sup> The concept of nature also encompasses humans and the culture they
          create, as an inseparable part of it. Despite this, culture is often seen as the opposite
          of nature.
        </p>

        <Fig
          src="/images/img-005.jpg"
          alt="Nature / Innate quality"
          caption="Fig. 5. Nature / Innate quality, textile collage, Liucija Dervinytė, 2021."
          align="right"
        />

        <h3>Cultivating, Caring, Preserving</h3>

        <p>
          The root of "culture" can be found in Latin, derived from "colere" — "to care for, to
          guard, to till, to cultivate"<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>44</sup> — from which arose "cultura" — "cultivation,
          care, culture, agriculture, veneration."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>45</sup> Culture is the totality of a society's
          knowledge, values, traditions, and activities, transmitted through social bonds — "everything
          created by humans through physical or mental labor."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>46</sup> A narrower meaning
          encompasses arts and philosophy as important to the development of civilizational
          thinking.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>47</sup> Culture policy analyst Jon Hawkes describes culture as "the medium
          encompassing all human relations, a means of expression, and information defining the
          result of social processes."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>48</sup> Researcher Sacha Kagan defines it as "a collective
          memory of knowledge and agreements that, interacting with individual minds, forms an
          ecosystem of ideas and mental images."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>49</sup> There also exists the broader meaning of
          culture as the provision of suitable conditions for life, when speaking of growing
          bacteria, animals, or plants.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>50</sup>
        </p>

        <p>
          Environmentalist Rod Bennison proposes defining culture as "an expression of natural
          evolutionary processes."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>51</sup> But one could add that other life forms also operate on
          socialization principles — microorganisms, fungi, and plants also form their own cultures.
          Culture thus becomes a form of nature's expression that encompasses humans too.
        </p>

        <p>
          Having reviewed the concepts of nature and culture, one can attempt to answer the
          question: "culture in nature, or nature in culture?" Both propositions can coexist without
          negating each other. If culture is an expression of nature's functioning, then it exists
          within nature — it cannot exist without it. Nature is composed of many cultures interacting
          with each other. Its roots.
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-006.jpg"
          alt="Cultivation"
          caption="Fig. 6. Cultivation, embroidered on a waistcoat by project participant Emilija's father, Liucija Dervinytė, 2021."
          align="center"
          width={480}
        />
      </>
    ),
  },
};

// ── Section 1.3 ───────────────────────────────────────────────────────────────
export const s1_3: SubContent = {
  body: {
    lt: (
      <>
        <blockquote>
          Turime pradėti iš tikrųjų klausytis likusios gyvybės. Kaip tik viena melodija gyvoje
          operoje, mes esame atsikartojantys ir pastovūs… ši gyvybė, mūsų gyvybė, dabar, taip
          kaip ir buvo visada, yra įtvirtinta likusioje juslioje Žemės simfonijoje.
          <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.9em" }}>— Lynn Margulis</cite>
        </blockquote>

        <p>
          Apžvelgus gamtos ir kultūros sampratas galima aiškiau matyti tarp jų egzistuojančias
          priešybes ir jungtis. Todėl leidžiuosi tyrinėti, kas įtakojo dualistinį gamtos–kultūros
          vaizdinį visuomenėje bei kaip jis gali būti transformuojamas.
        </p>

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Gamtos–kultūros poliai<br /><br />
          Destrukcija<br />
          duoda pradžią<br />
          kažkam naujam.<br />
          Viskas ateina iš gamtos.<br /><br />
          Mokausi priimti,<br />
          kad žmogus<br />
          irgi gamta.
        </blockquote>

        <Fig
          src="/images/img-007.jpg"
          alt="Gamtos–kultūros poliai"
          caption="7 iliustracija. Gamtos–kultūros poliai, koliažas, Liucija Dervinytė, 2021."
          align="right"
        />

        <p>
          Nors iš biologinės perspektyvos žmogų suprantame kaip dalį gamtos, tačiau dažnai
          pabrėžiame, jog mūsų socialiniai ryšiai ir kultūra nėra natūralūs dariniai. Ši priešprieša
          buvo aptariama ir kolektyvinio siuvinėjimo metu vykusiuose pokalbiuose.
        </p>

        <p>
          Svarbią įtaką dualistiniam gamtos-kultūros vaizdiniui padarė filosofas René Descartesʼas.
          Jis siūlė pasaulį vertinti iš dualistinės perspektyvos — atskiriant materiją ir formą, protą
          ir kūną, žmogų ir gamtą. Lynn Margulis dekartiškąjį dualizmą pavadino „Dekarto licencija",
          suteikusia žmogui teisę manipuliuoti ar net naikinti gamtą, kuri buvo matoma kaip negyvas
          mechanizmas.
        </p>

        <ClearFloat />

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Priimti šešėlinę pusę<br /><br />
          Kol nepriimi<br />
          savo inertiškumo,<br />
          neapgalvotumo,<br />
          nenuoseklumo,<br />
          sunku eiti į balansą<br />
          su savimi.
        </blockquote>

        <Fig
          src="/images/img-008.jpg"
          alt="Kodėl mes tiesiog negalime sutarti?"
          caption="8 iliustracija. Kodėl mes tiesiog negalime sutarti?, tekstilinis koliažas ant projekto dalyvės, Martynos Plioplytės-Zujienės, palaidinės, Liucija Dervinytė."
          align="left"
        />

        <p>
          Nors tvarumo tema labai plačiai aptariama įvairiose visuomenės sferose, mums vis dar
          sunkiai sekasi pasukti žmonijos kursą konstruktyvesne linkme. Todėl manau, jog vis dar
          turime kuo daugiau ir kuo įvairesniais būdais kalbėti apie tai kaip galime gyventi
          „tvariau".
        </p>

        <p>
          Tvaraus vystymosi pagrindas – tarpusavio sąsajų, jų pasekmių ir grįžtamojo ryšio
          įvertinimas viską apjungiančioje gamtos struktūroje, kur kultūra suprantama kaip
          neatskiriama jos dalis. Rizomos metafora čia ypač aktuali: gamta veikia kaip horizontalus,
          nehierarchinis tinklas, kuriame nė vienas elementas nėra svarbesnis už kitą.
        </p>

        <ClearFloat />
      </>
    ),
    en: (
      <>
        <blockquote>
          We must truly begin to listen to the rest of life. Just one melody in a living opera, we
          are repetitive and steady… this life, our life, now as always, is embedded in the rest of
          the sentient Symphony of the Earth.
          <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.9em" }}>— Lynn Margulis<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>52</sup></cite>
        </blockquote>

        <p>
          Having reviewed the concepts of nature and culture, the oppositions and connections
          between them become clearer. I therefore explore what influenced the dualistic
          nature–culture image in society and how it might be transformed.
        </p>

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Nature–Culture Poles<br /><br />
          Destruction<br />
          gives birth<br />
          to something new.<br />
          Everything comes from nature.<br /><br />
          I am learning to accept<br />
          that humans<br />
          are also nature.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>53</sup>
        </blockquote>

        <Fig
          src="/images/img-007.jpg"
          alt="Nature–culture poles"
          caption="Fig. 7. Nature–culture poles, collage, Liucija Dervinytė, 2021."
          align="right"
        />

        <p>
          Although we biologically understand humans as part of nature, we often emphasize that
          our social bonds and culture are not natural formations. This opposition arose in the
          collective embroidery conversations as well. According to historian William Cronon,
          "the contemporary vision of wilderness as the last place on Earth untouched by human
          destructive behavior, and of cities as the absence of nature, places culture and nature
          at two opposing poles."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>54</sup> The first changes providing ground for this separation
          likely occurred at the end of the Bronze Age with the beginning of livestock farming.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>55</sup>{" "}
          In Europe, Christianity also exerted strong influence, placing God — creator of all — above
          nature as its ruler, and thus granting humans, made in his image, divine qualities entitling
          them to use nature as a tool for their needs.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>56</sup>
        </p>

        <p>
          René Descartes had a major influence on the dualistic nature–culture image, proposing a
          dualistic perspective — separating matter and form, mind and body, object and subject,
          rationality and intuition, human and nature.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>57</sup> Lynn Margulis called Cartesian
          dualism the "Cartesian license," granting humans, as the only divine beings with a soul,
          the right to manipulate or even destroy nature, which was seen as a dead
          mechanism.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>58</sup> This view helped expand the boundaries of scientific research but
          also made science the only "correct" knowledge and lost its dialogue with other forms of
          knowing,<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>59</sup> dismissing mythical and mythological thinking.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>60</sup> As
          anthropologist Arturo Escobar notes, Cartesian dualist ideas "are still reflected in our
          patriarchal capitalist societies, where the priority is production and consumption, individual
          success, future-orientation, and the subordination of spirituality and communality to
          materialism."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>61</sup>
        </p>

        <ClearFloat />

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Accepting the Shadow Side<br /><br />
          Until you accept<br />
          your inertia,<br />
          your thoughtlessness,<br />
          your inconsistency,<br />
          it is hard to find balance<br />
          within yourself.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>62</sup>
        </blockquote>

        <Fig
          src="/images/img-008.jpg"
          alt="Why can't we just agree?"
          caption="Fig. 8. Why can't we just agree?, textile collage on participant Martyna Plioplytė-Zujienė's blouse, Liucija Dervinytė."
          align="left"
        />

        <p>
          Although sustainability is widely discussed across society, we still struggle to steer
          humanity in a more constructive direction. It is therefore important to keep talking, in
          as many ways as possible, about how we can live more sustainably. In Lithuanian the word
          "sustainable" is defined as something "firm, durable, steady, and unchanging."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>63</sup>{" "}
          In English it came from the Latin "sustinere" — "to maintain, to carry, to withstand,"<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>64</sup>{" "}
          and is described as the ability to maintain the continuity of a certain activity without
          causing harm or problems.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>65</sup> The term was defined in the 1987 World Commission on
          Environment and Development report Our Common Future as "development that meets the needs
          of the present without compromising the ability of future generations to meet their own
          needs."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>66</sup>
        </p>

        <p>
          The foundation of sustainable development is the assessment of interconnections, their
          consequences, and feedback within the all-encompassing structure of nature. According to
          ecologist Teresa Ryan Sm'hayetsk, drawing on Indigenous worldviews, "sustainability means
          thinking in systems with all their interconnections, consequences and feedback cycles."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>67</sup>{" "}
          Perhaps everything begins from understanding that the human is "just one part of an
          orchestrated life form"<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>68</sup> that cannot exist without others. As Arturo Escobar
          argues, "we must accept destruction and construction as equal sides, and begin to value
          the often undervalued — emotions, intuition, spirituality, non-scientific knowledge,
          non-humans, inorganic life forms, death."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>69</sup> William Cronon believes that "by
          accepting the full spectrum of the natural landscape, including the cultural, we can find
          a middle ground uniting wilderness and city into a place called home."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>70</sup> Perhaps
          sustainability is this constant attempt to integrate the "shadow sides" in our daily
          lives<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>71</sup> and collectively build the shared meanings that help us pursue common goals.
        </p>

        <ClearFloat />
      </>
    ),
  },
};

// ── Section 2.1 ───────────────────────────────────────────────────────────────
export const s2_1: SubContent = {
  body: {
    lt: (
      <>
        <p>
          Sacha Kagano įžvalgomis apie tai, kaip menas gali būti tvarių ar netvarių procesų
          visuomenėje atspindys ir variklis, remiuosi svarstydama apie galimą meno poveikį
          vidiniam žmogaus balansui palaikyti, santykio su aplinka formavimui bei tarpusavio
          ryšių stiprinimui.
        </p>

        <p>
          Ellen Dissanayake teigia, jog menas yra evoliuciškai neatskiriamas kultūrinis elementas —
          ne priedas, o būtinybė. Kaip teigia evoliucinės biologijos profesorė Donna J. Haraway,
          „svarbu, kokios istorijos kuria pasaulius, kokie pasauliai – istorijas".
        </p>

        <Fig
          src="/images/img-009.jpg"
          alt="Meno skambesiai"
          caption="9 iliustracija. Meno skambesiai, koliažas, Liucija Dervinytė, 2021."
          align="right"
        />

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Vidiniai ryšiai<br /><br />
          Sąmoningas<br />
          Šviesos karys<br />
          susirūpinęs dėl pasaulio,<br />
          keičiantis visuomenę<br />
          kultūros formuotojas.<br /><br />
          Pasako žmonėms,<br />
          užsiima saviterapija<br />
          ne vien pačiam sau –<br />
          visuomenei.
        </blockquote>

        <ClearFloat />

        <p>
          Apsvarstydama būdus, kaip kūryba gali tapti pokyčių nešėja, suprantu, jog tokių būdų ir
          jų variacijų gali būti be galo daug. Šiose paieškose žodis „ryšiai" tampa raktažodžiu,
          susiejančiu tiek asmeniškai nagrinėjamas temas bei naudojamus skirtingus kūrybos būdus,
          technikas ir medžiagas, tiek mane įkvepiančius skirtingų sričių kūrėjus.
        </p>

        <p>
          Meno terapeutas Shaunas McNiffas teigia, jog „tiek menininkas, tiek šamanas geba atrasti
          prasmes ir struktūras patirčių sraute bei veikti padidinto jautrumo būsenoje". Menininko
          kaip šamano vaidmuo visuomenėje leidžia geriau suprasti meno, kaip priemonės spręsti
          aktualius klausimus intuicijos pagalba, svarbą.
        </p>
      </>
    ),
    en: (
      <>
        <p>
          Art is the creation of meaning through stories, images, sounds, performances, and other
          methods, allowing people to share their experiences and feelings about what it means to
          live.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>72</sup> For a long time in Western countries sustainability strategies were based on
          three principles of sustainable development: social equity, ecological integrity, and
          economic well-being.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>73</sup> Yet culture policy analyst Jon Hawkes was among the first to
          propose adding "cultural vitality" as a fourth foundational pillar of sustainable
          society.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>74</sup> As Ellen Dissanayake argues, art is "an essential behavioral property
          that deserves to be encouraged and nurtured in every one of our lives, not only in the
          art world."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>75</sup> Drawing on Sacha Kagan's insights, "art's contribution to a
          culture of sustainability lies in its potential to create experience, forge connections,
          and extend rational thinking beyond pragmatic goals."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>76</sup>
        </p>

        <p>
          As Donna J. Haraway notes, "it matters what stories make worlds, what worlds make
          stories."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>77</sup>
        </p>

        <Fig
          src="/images/img-009.jpg"
          alt="Resonances of Art"
          caption="Fig. 9. Resonances of Art, collage, Liucija Dervinytė, 2021."
          align="right"
        />

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Inner Connections<br /><br />
          A conscious<br />
          warrior of light<br />
          concerned about the world,<br />
          changing society —<br />
          shaper of culture.<br /><br />
          Speaks to people,<br />
          practices self-therapy<br />
          not only for oneself —<br />
          but for society.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>78</sup>
        </blockquote>

        <ClearFloat />

        <p>
          Considering ways in which creativity can become an agent of change, I realize that such
          ways and their variations can be endless. In this search, the word "connections" becomes
          the key word, linking both the themes I personally explore and the different modes,
          techniques, and materials of creation. As one collective embroidery participant observed,
          "it is important to accept one's natural shadow side."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>79</sup>
        </p>

        <p>
          Art therapist Shaun McNiff argues that "both the artist and the shaman are able to
          discover meanings and structures in the stream of experience and to act in a state of
          heightened sensitivity."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>80</sup> The role of the artist as shaman helps us understand
          the importance of art as a means of addressing social questions through intuition.
        </p>
      </>
    ),
  },
};

// ── Section 2.2 ───────────────────────────────────────────────────────────────
export const s2_2: SubContent = {
  body: {
    lt: (
      <>
        <p>
          Menas gali tapti įrankiu reflektuoti šių laikų pasaulį, atverti naujus požiūrio taškus.
          Tvarumas mene gali skleistis įvairiomis perspektyvomis — tiek medžiagų pasirinkimu,
          tiek konceptualiuose kūriniuose keliant klausimus apie gamtos ir kultūros santykį.
        </p>

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Įkvėpimas keistis<br /><br />
          Medžių ir žmonių santykiai<br /><br />
          Aplinkos palikimas<br />
          susijęs su žmogaus<br />
          istorijomis.<br /><br />
          Gamta<br />
          tarpininkauja<br />
          tarp medžių<br />
          ir žmonių veiksmų.
        </blockquote>

        <Fig
          src="/images/img-012.jpg"
          alt="Įkvėpimas keistis"
          caption="12 iliustracija. Įkvėpimas keistis, iš knygos Tarp eilučių: planetos–žmonių istorija, koliažas, Liucija Dervinytė, 2019."
          align="right"
        />

        <p>
          Žvelgdama į kitų menininkų darbus svarstau apie intuicijos ir racionalumo balansą jų
          kūrybiniuose procesuose. Mane domina ne tik galutinis rezultatas, bet ir pačių kūrėjų
          patirtys ir pasaulėžiūra. Atradau savo kūrybiniams procesams artimą menininkę Cameron
          Davis, tapančią intuityvias detalių organiškų formų abstrakcijas.
        </p>

        <Fig
          src="/images/img-010.jpg"
          alt="Cameron Davis darbas"
          caption="10 iliustracija. A Question of Inscendence: Magnolia Memorial I, 243 x 152 cm, akrilas ant drobės, Cameron Davis."
          align="left"
        />

        <p>
          Pasak Davis, „gyvenime egzistuoja daugybė ryšių, net ir tarp akivaizdžių skirtumų, ir jei
          galvotume apie savo buvimą toje gyvybingoje sistemoje, elgtumėmės kitaip". Man
          artimomis mintimis dalinasi ir menininkė Vita Zaman, per meną atsigręžianti į savo
          vidinį pasaulį.
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-011.jpg"
          alt="Vita Zaman, Naujoji Vaidilutė"
          caption="11 iliustracija. Naujoji Vaidilutė, 2022, drobė, akrilas ir siuvinėjimas medvilniniais siūlais, Vita Zaman."
          align="right"
        />

        <p>
          Vita Zaman per savo kūrybinę raišką mėgina parodyti, jog „galima nesigėdyti vidinio
          minkštumo, dramų ir silpnybių". Jos kūriniuose įžvelgiu panašius sluoksnius kaip ir
          savojoje kūryboje, kur pirmasis sluoksnis yra intuityviai kuriamos abstrakčios dėmės, o
          antrasis — tolimesni apmąstymai, balansuojant tarp intuicijos ir racionalumo.
        </p>

        <ClearFloat />

        <p>
          Mitologinis pasaulėvaizdis randa naujas išraiškos formas šiuolaikinių menininkų kūryboje.
          Rithika Merchant perkuria pasaulio mitus, apjungiančius skirtingas kultūras ir kolektyvinę
          atmintį. Pasak kūrėjos, „mokslas atsako į klausimą „kaip" – o mitai atsako į klausimą
          „kodėl"".
        </p>

        <Fig
          src="/images/img-013.jpg"
          alt="Hyperlife, Rithika Merchant"
          caption="13 iliustracija. Hyperlife, mišri technika, Rithika Merchant, 2020."
          align="left"
        />

        <p>
          Dar viena menininkė, istorijų pasakotoja, kurios darbuose galima atrasti senųjų kultūrų
          pasaulėžiūrą – tai freskų kūrėja Mona Caron. Ne tik menininkė, bet ir aktyvistė, kurianti
          protestų plakatus ir bendradarbiaujanti su socialiniais ir aplinkosaugos judėjimais.
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-014.jpg"
          alt="Mona Caron freska"
          caption="14 iliustracija. Mujeres Custodias de Nuestro Hábitat en Peligro, freska, 10m × 50m, 2008, Mona Caron ir Raúl Ajala."
          align="center"
          width={480}
        />

        <p>
          Tad ką mums gali suteikti žinojimas ir savo atsakomybės prisiėmimas? Negalime visiškai
          ištrinti iš savo atminties to, ką sužinome apie pasaulį. Jei suprantame, kokį poveikį
          turime aplinkai, ar galime gyventi neprisiimdami atsakomybės už tai, ką kuriame ir ką
          komunikuojame pasauliui?
        </p>
      </>
    ),
    en: (
      <>
        <blockquote>
          Another group of people in our community is known as visionaries, creative people. They
          are artists, writers, and performers, whose duty is to introduce innovative perspectives
          into the community, to inform us of creative viewpoints and new ways of looking at things.
          These visionaries remind us that we must always leave room for new things, and that
          creativity is necessary to solve problems we have never faced before.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>86</sup>
          <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.9em" }}>— Jeannette Armstrong</cite>
        </blockquote>
        <p>
          Art can become a tool to reflect the contemporary world and open up new perspectives.
          Sustainability in art can unfold from many angles — through material choices, or
          conceptually by raising questions about the nature–culture relationship. Returning to the
          question raised during embroidery sessions: "what does knowledge and responsibility
          give?"<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>87</sup>
        </p>

        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Inspiration for Change<br /><br />
          The legacy of the environment<br />
          is linked to human<br />
          stories.<br /><br />
          Nature<br />
          mediates<br />
          between trees<br />
          and human actions.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>88</sup>
        </blockquote>

        <Fig
          src="/images/img-012.jpg"
          alt="Inspiration for change"
          caption="Fig. 12. Inspiration for change, from the book Between the Lines: a planet–human story, collage, Liucija Dervinytė, 2019."
          align="right"
        />

        <p>
          Looking at other artists' work I reflect on the balance between intuition and rationality
          in their creative processes. I am interested not only in the final result, but also in the
          creators' own experiences and worldviews. Listening to an interview<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>81</sup> with four
          artists examining ecological themes in Vermont, I found an artist close to my own creative
          processes — Cameron Davis,<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>82</sup> who paints intuitive abstractions of organic forms.
        </p>

        <Fig
          src="/images/img-010.jpg"
          alt="Cameron Davis artwork"
          caption="Fig. 10. A Question of Inscendence: Magnolia Memorial I, 243 × 152 cm, acrylic on canvas, Cameron Davis."
          align="left"
        />

        <p>
          According to Davis, "there are so many connections in life, even between apparent
          differences, and if we thought about our existence in that living system, we would behave
          differently."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>83</sup> Artist Vita Zaman shares similar thoughts, turning to her inner
          world through art.
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-011.jpg"
          alt="Vita Zaman, Naujoji Vaidilutė"
          caption="Fig. 11. Naujoji Vaidilutė (The New Vestal), 2022, canvas, acrylic and cotton thread embroidery, Vita Zaman."
          align="right"
        />

        <p>
          Vita Zaman through her creative expression tries to show that "there is no shame in
          inner softness, dramas and weaknesses."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>84</sup> She also describes the present as "a
          time of emotional crisis, well worth reflecting on."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>85</sup> In her works I see similar
          layers to my own practice — the first layer of intuitive abstract marks, the second of
          further reflection, balancing intuition and rationality.
        </p>

        <ClearFloat />

        <p>
          A mythological worldview finds new forms of expression in contemporary art. Rithika
          Merchant<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>89</sup> recreates world myths connecting different cultures and collective
          memory. As the artist notes, art is "a reaction to what is happening in the world."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>90</sup>{" "}
          According to Merchant, "science answers the question 'how' — myths answer the
          question 'why',"<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>91</sup> giving meaning to our daily lives. As Dissanayake notes,
          "humans have a deep desire to systematize the world and give it meaning."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>92</sup>
        </p>

        <Fig
          src="/images/img-013.jpg"
          alt="Hyperlife, Rithika Merchant"
          caption="Fig. 13. Hyperlife, mixed media, Rithika Merchant, 2020."
          align="left"
        />

        <p>
          Another artist and storyteller in whose work the worldview of ancient cultures can be
          found is muralist Mona Caron<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>93</sup> — not only an artist but also an activist, creating
          protest posters and collaborating with social and environmental movements. Starting from
          the stories of people in her city, San Francisco,<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>94</sup> she has painted murals
          around the world, often telling the stories of climate activists and marginalized
          communities.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>95</sup> As the artist says, she became fascinated by the stories of weeds
          — plants we often see as "dirt" to be "cleaned up."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>96</sup> In her Weeds
          project,<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>97</sup> she calls dandelions "a radical and patient plant," seeing them as a
          metaphor for change: "changes happen through patience and persistence, individually and
          collectively — a cumulative impact that brings life back to 'sterile' places."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>98</sup>
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-014.jpg"
          alt="Mona Caron mural"
          caption="Fig. 14. Mujeres Custodias de Nuestro Hábitat en Peligro, mural, 10m × 50m, 2008, Mona Caron and Raúl Ajala."
          align="center"
          width={480}
        />

        <p>
          So what can knowledge and accepting our responsibility give us? We cannot completely
          erase from our memory what we learn about the world. If we understand what impact we
          have on the environment, can we live without taking responsibility for what we create and
          communicate to the world?
        </p>
      </>
    ),
  },
};

// ── Section 2.3 ───────────────────────────────────────────────────────────────
export const s2_3: SubContent = {
  body: {
    lt: (
      <>
        <p>
          Šiame skyriuje aptariau du svarbius tvarumo aspektus, kuriuos gali adresuoti meno kūrėjai
          savo veiklose – tai vidinį žmogaus balansą, padedantį išorinei harmonijai rastis, bei ryšį
          su supančia aplinka. Tad šioje dalyje noriu pažvelgti į mūsų tarpusavio ryšius ir
          komunikaciją – į tai kas formuoja bendruomenes.
        </p>

        <Fig
          src="/images/img-016.jpg"
          alt="Parodos Spacetime Un[b]locked atidarymas Ideas Block erdvėje"
          caption="16 iliustracija. Parodos Spacetime Un[b]locked atidarymas Ideas Block – Kompresorinės erdvėje, 2023."
          align="right"
        />

        <p>
          2017 metais, kartu su menininku Roberto Becerra, įkūrėme kūrybinę erdvę Ideas Block.
          Ši vieta apjungė daugybę iš pažiūros labai skirtingų veiklų – joje veikė kavinė, galerija
          ir kūrėjų gaminių parduotuvė, vyko koncertai, parodų atidarymai, dirbtuvės, paskaitos ir
          diskusijos. Tai tapo susibūrimo vieta įvairių sričių ir pomėgių žmonėms, suteikė galimybę
          megztis pokalbiams ir sujungti žmones tolimesnei komunikacijai.
        </p>

        <ClearFloat />

        <p>
          Kirstie Macleod dešimtmečius kūrė globalų kolektyvinį siuvinėjimo projektą The Red
          Dress, kuriame dalyvavo šimtai žmonių iš viso pasaulio. Šis projektas – tai tiltas tarp
          kultūrų, laiko ir erdvės, kuriamas per rankų darbo kalbą.
        </p>

        <Fig
          src="/images/img-017.jpg"
          alt="The Red Dress, Kirstie Macleod"
          caption="17 iliustracija. The Red Dress, Lekazia Turner, siuvinėtoja iš Jamaikos, 2022, projekto iniciatorė: Kirstie Macleod."
          align="left"
        />

        <p>
          Kolektyvinis kūrybinis procesas — neišvengiamai — turi potencialą tapti gydančiu
          procesu. Šio vyksmo pagalba stiprėja tarpusavio ryšiai ir supratimas, taip darosi lengviau
          matyti savo vietą platesniame kontekste kaip dalį didesnės struktūros. Visa tai gydo
          Antropoceno krizės įkarštyje atsidūrusį žmogų ir padeda kurti prasmę.
        </p>

        <p>
          Ellen Dissanayake teigimu, „ryšių kūrimas yra mūsų instinktas ir evoliucijos pagrindas,
          o menas gali tapti įrankiu šiam poreikiui užtikrinti, kartu su pojūčiu, jog esame dalis
          didesnės struktūros".
        </p>

        <ClearFloat />
      </>
    ),
    en: (
      <>
        <blockquote>
          When all those with lungs breathe the space between their hands and the space around their
          hands and the space of the room and the space of the building that surrounds the room and
          the space of the neighborhoods nearby and the space of the cities and the space of the
          regions and the space of the nations and the space of the continents and the space of the
          islands and the space of the oceans and the space of the stratosphere and the space of the
          mesosphere breathe in and out.<br />
          {`<…>`}<br />
          How lovely and how doomed this connection of everyone with lungs.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>100</sup>
          <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.9em" }}>— Juliana Spahr</cite>
        </blockquote>
        <p>
          In this section I have discussed two important aspects of sustainability that art creators
          can address — inner human balance, which helps external harmony emerge, and the
          connection with the surrounding environment. Here I want to look at our mutual
          connections and communication — what forms communities. Such art practices have many
          different forms and names — "socially engaged art, community art, participatory art,
          collaborative art, or social practice."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>101</sup>
        </p>

        <Fig
          src="/images/img-016.jpg"
          alt="Opening of Spacetime Un[b]locked at Ideas Block"
          caption="Fig. 16. Opening of the exhibition Spacetime Un[b]locked at Ideas Block – Kompresorinė, 2023."
          align="right"
        />

        <p>
          In 2017, together with artist Roberto Becerra, we founded the creative space Ideas Block.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>102</sup>{" "}
          This place combined many seemingly different activities — a café, gallery, and maker shop,
          with concerts, exhibition openings, workshops, lectures, and discussions. It became a
          gathering place for people of different fields and interests, enabling conversations and
          connecting people for further communication.
        </p>

        <ClearFloat />

        <p>
          Kirstie Macleod spent decades creating the global collective embroidery project The Red
          Dress,<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>103</sup> which travelled to 50 countries involving people from different cultures.
          The dress was made of 85 parts embroidered by 365 women and girls, 7 men and boys, and
          two non-binary artists, all of whom received payment for their work and can sell their
          works in the Red Dress Embroidery online shop.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>104</sup>
        </p>

        <Fig
          src="/images/img-017.jpg"
          alt="The Red Dress, Kirstie Macleod"
          caption="Fig. 17. The Red Dress, Lekazia Turner, embroiderer from Jamaica, 2022, project initiator: Kirstie Macleod."
          align="left"
        />

        <p>
          As Macleod states in interview,<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>105</sup> embroidery and community become the basis for
          healing processes. The collective creative process — inevitably — has the potential to
          become a healing process. Through this process, mutual connections and understanding
          strengthen, making it easier to see one's place in a broader context as part of a larger
          structure. All of this heals a person caught in the heat of the Anthropocene crisis and
          helps create meaning.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>106</sup>
        </p>

        <p>
          According to Ellen Dissanayake, "creating connections is our instinct and the foundation
          of evolution, and art can become a tool to ensure this need, together with the feeling
          that we are part of a larger structure. This understanding provides the basis for full
          engagement, the fullness of lived experience and meaning — the meaning of living together
          with others."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>107</sup>
        </p>

        <ClearFloat />
      </>
    ),
  },
};

// ── Section 3.1 ───────────────────────────────────────────────────────────────
export const s3_1: SubContent = {
  body: {
    lt: (
      <>
        <p>
          Paskutiniuosius keletą metų asmeninė kūrybinė veikla dažnai buvo įtakojama nerimą
          keliančių pasaulio aktualijų, mąstant apie žmogaus veiklos padarinius viskam, kas mus
          supa bei mums patiems. Tiek individualūs tapybos ar tekstilės kūriniai, tiek
          bendradarbiavimu paremti projektai ir instaliacijos sukurtos šiuo periodu suteikė pradžią
          šiame tekste aptariamam meninio tyrimo projektui.
        </p>

        <Fig
          src="/images/img-018.jpg"
          alt="Kritiška padėtis"
          caption="18 iliustracija. Kritiška padėtis, koliažas iš asmeninės knygos Tarp eilučių: planetos–žmonių istorija, Liucija Dervinytė, 2019."
          align="right"
        />

        <p>
          2019 metais pradėjau kurti koliažų knygą <em>Tarp eilučių: planetos–žmonių istorija</em>,
          kurios puslapius užpildžiau žurnalų iškarpomis – tekstais, vaizdais bei išsiuvinėtomis
          detalėmis. Ši knyga – tai pamąstymai apie žmogaus vietą gamtoje ir jo daromą poveikį,
          paliečiant ekologines ir socialines problemas bei galimus jų sprendimo būdus. Tai tapo
          tarsi dienoraščiu, kuriame kas kartą įamžindavau perskaitytą ar išgirstą informaciją mane
          neraminančiomis temomis.
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-019.jpg"
          alt="Pasauliui reikia pertraukos"
          caption="19 iliustracija. Pasauliui reikia pertraukos, koliažas iš asmeninės knygos Tarp eilučių: planetos–žmonių istorija, Liucija Dervinytė, 2019."
          align="left"
        />

        <p>
          Kurdama pirmuosius koliažus naudojau žurnalų iškarpas, piešimą ir siuvinėjimą. Su laiku
          augo formatai, o darbų pagrindu tapo abstrakčių organiškų formų akvarelės, papildomos
          koliažo elementais. Koliažas tapo mano istorijų kūrimo įrankiu, suteikiančiu kartais net
          kiek tiesmuko konkretumo, ko visuomet, jaučiau, jog trūko mano ankstesnio kūrybos
          etapo abstrakcijose.
        </p>

        <ClearFloat />

        <p>
          Kūriniuose susijungiantys skirtingi elementai atspindi dualumo polius – intuiciją ir
          racionalumą, kuomet meditatyvaus proceso metu gimstančios organiškos formos įgauna
          konkretumo ir kuria pasakojimą iškarpų fragmentuose. Mąstant apie kitų asmenų
          netiesioginį prisidėjimą prie individualių meninių procesų, kyla noras išryškinti šias
          sąsajas, kviečiant prisidėti tiesiogiai – kurti kartu.
        </p>

        <Fig
          src="/images/img-020.jpg"
          alt="Naujo pasaulio bruožai"
          caption="20 iliustracija. Naujo pasaulio bruožai, koliažas, Liucija Dervinytė, 2022."
          align="right"
        />

        <p>
          Taip atsiranda bendruomeniškumo dėmuo: atsikartojantys kūrybiniai susitikimai –
          siuvinėjimo pokalbiai, kurių metu ne tik leidžiamės į bendrą kūrybinį siuvinėjimo
          procesą, bet ir mezgame pokalbius aktualiomis temomis. Projekto dalyviai kviečiami
          siuvinėti kartu seną paklodę, kuri susitikimų metu keliauja iš vienų žmonių rankų į kitas,
          susibūrus ratu. Bendro audinio siuvinėjimas tampa jungiančiu elementu, verbalinės ir
          vizualinės komunikacijos priemone.
        </p>

        <ClearFloat />
      </>
    ),
    en: (
      <>
        <p>
          In recent years my personal creative activity has often been influenced by troubling world
          events, thinking about the consequences of human activity on everything that surrounds
          us and on ourselves. Both individual painting or textile works and collaboration-based
          projects and installations created during this period gave rise to the artistic research
          project discussed in this text.
        </p>

        <Fig
          src="/images/img-018.jpg"
          alt="Critical situation"
          caption="Fig. 18. Critical situation, collage from the personal book Between the Lines: a planet–human story, Liucija Dervinytė, 2019."
          align="right"
        />

        <p>
          In 2019 I began creating a collage book <em>Between the Lines: a planet–human story</em>,
          filling its pages with magazine clippings — texts, images, and embroidered details. This
          book is a reflection on humanity's place in nature and its impact, touching on ecological
          and social problems and possible solutions. It became a kind of journal in which I
          captured information on troubling topics each time I read or heard it.
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-019.jpg"
          alt="The world needs a break"
          caption="Fig. 19. The world needs a break, collage from the personal book Between the Lines: a planet–human story, Liucija Dervinytė, 2019."
          align="left"
        />

        <p>
          Creating the first collages I used magazine clippings, drawing, and embroidery. Over
          time the formats grew, and the works became based on watercolor abstractions of organic
          forms supplemented with collage elements. Collage became my storytelling tool, giving
          a certain directness that I felt was missing in the abstractions of my earlier creative phase.
        </p>

        <ClearFloat />

        <p>
          The different elements coming together in the works reflect the poles of duality —
          intuition and rationality — where organic forms born in a meditative process gain
          concreteness and create a narrative through collage fragments. Thinking about others'
          indirect contribution to individual artistic processes, the desire arises to highlight these
          connections by inviting direct participation — to create together.
        </p>

        <Fig
          src="/images/img-020.jpg"
          alt="Features of a new world"
          caption="Fig. 20. Features of a new world, collage, Liucija Dervinytė, 2022."
          align="right"
        />

        <p>
          Thus a communal element emerges: recurring creative gatherings — embroidery
          conversations — during which we not only engage in the collective embroidery process,
          but also weave conversations on relevant topics. Participants are invited to embroider an
          old sheet together, which travels from hand to hand around the circle during meetings.
          The communal embroidery becomes a binding element — a means of verbal and visual
          communication.
        </p>

        <ClearFloat />
      </>
    ),
  },
};

// ── Section 3.2 ───────────────────────────────────────────────────────────────
export const s3_2: SubContent = {
  body: {
    lt: (
      <>
        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Buvimas kartu.<br />
          Atviras suderėjimas.<br />
          Paprasto bendravimo,<br />
          Ne apie materialius dalykus.<br />
          Kartu būti,<br />
          Kartu dalintis,<br />
          Be statusų.<br />
          Kaip sutartinės.
        </blockquote>

        <Fig
          src="/images/img-021.jpg"
          alt="Kolektyvinio siuvinėjimo sesija"
          caption="21 iliustracija. Kolektyvinio siuvinėjimo sesija, Alt lab, SODAS 2123, Vilnius, 2022."
          align="right"
        />

        <p>
          Šis meninis tyrimas – tai santykis tarp to, kas asmeniška, bei to, kas bendra ir jungia mus
          visus. Iš lėto visas kūrybinis procesas pradeda vystytis aplink kolektyvinį siuvinėjimą ir
          jo metu vykstančius pokalbius ir besiformuojančią bendruomenę.
        </p>

        <p>
          Mano kūrybiniame projekte „bendruomenė" – tai atviras kintamasis, priklausomas nuo
          vietos, laiko ir kitų faktorių. Tai bendri interesai, idėjos ar pasaulio supratimas,
          neapriboti konkrečios visuomenės grupės ar teritorijos. Kolektyvinis siuvinėjimas yra
          atviras įtraukti naujus žmones, kuriems jis tampa aktualiu.
        </p>

        <ClearFloat />

        <p>
          Visi prisidėję prie šio projekto tampa jo bendrakūrėjais, tačiau kiekvienas palieka
          skirtingą indėlį. Proceso metu dalyviams neduodu jokių instrukcijų, ką siuvinėti.
          Kiekvienas individas renkasi kaip intensyviai įsitrauks į šį procesą ir kokius ryšius
          toliau puoselės.
        </p>

        <Fig
          src="/images/img-022.jpg"
          alt="Kolektyvinis siuvinėjimas Tartu"
          caption="22 iliustracija. Kolektyvinis siuvinėjimas, projekte Creative Exchange for Community Cohesion, Tartu, Estija, 2022."
          align="left"
        />

        <p>
          Nuo 2021 metų vasaros iki 2023 metų pavasario jau yra įvykę bent 15 siuvinėjimo
          susitikimų, o šiame procese sudalyvavo 56 žmonės. Susitikimai buvo organizuojami tiek
          privačiose, tiek viešose lokacijose, skirtinguose kontekstuose. Vienas iš pirmųjų didesnių
          kolektyvinių kūrybinių susitikimų įvyko Alt lab erdvėje kūrybinių dirbtuvių serijoje,
          nagrinėjančioje tvarumo perspektyvas.
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-023.jpg"
          alt="Pokalbių siūlės"
          caption="23 iliustracija. Pokalbių siūlės, kolektyvinio siuvinėjimo kūrinys praėjus beveik metams nuo projekto pradžios, 2022."
          align="center"
          width={480}
        />

        <p>
          Kolektyvinis kūrybinis procesas suteikia galimybę priartėti prie tam tikrų bendrų
          supratimų ir padeda lengviau identifikuoti save mus supančioje aplinkoje ir platesniame
          kontekste, ieškant naujų jungties taškų. Stiprindami tarpusavio ryšius visuomenėje,
          suteikiame tvaresnį pagrindą santykiams su kitomis gyvybės formomis, aplinka bei
          savimi pačiais.
        </p>
      </>
    ),
    en: (
      <>
        <blockquote style={{ fontStyle: "italic", borderLeft: "none", paddingLeft: 0, color: "var(--color-moss)" }}>
          Being together.<br />
          An open agreement.<br />
          Simple communication,<br />
          Not about material things.<br />
          To be together,<br />
          To share together,<br />
          Without statuses.<br />
          Like sutartinės.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>109</sup>
        </blockquote>

        <Fig
          src="/images/img-021.jpg"
          alt="Collective embroidery session"
          caption="Fig. 21. Collective embroidery session, Alt lab, SODAS 2123, Vilnius, 2022."
          align="right"
        />

        <p>
          This artistic research is about the relationship between what is personal and what is
          common and connects us all. Gradually the entire creative process begins to develop
          around the collective embroidery and the conversations that take place during it and the
          community that forms.
        </p>

        <p>
          In my creative project "community" is an open variable, dependent on place, time, and
          other factors. In Lithuanian, this word refers to a group of people united by something
          in common.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>110</sup> It is shared interests, ideas, or understanding of the world, not
          limited to a specific social group or territory. The collective embroidery is open to
          include new people for whom it becomes relevant.
        </p>

        <ClearFloat />

        <p>
          Everyone who has contributed to this project becomes its co-creator, though each leaves
          a different contribution. During the process I give participants no instructions about what
          to embroider. The whole idea grew gradually — starting with a collaboration on textiles for
          the film Vesper,<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>111</sup> and growing to involve 56 people<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>112</sup> across at
          least 15 sessions by spring 2023. Each individual chooses how intensively to engage and
          what connections to nurture further.
        </p>

        <Fig
          src="/images/img-022.jpg"
          alt="Collective embroidery in Tartu"
          caption="Fig. 22. Collective embroidery, in the project Creative Exchange for Community Cohesion, Tartu, Estonia, 2022."
          align="left"
        />

        <p>
          From the summer of 2021 to the spring of 2023 at least 15 embroidery sessions have
          taken place, involving 56 people. Sessions were organized in both private and public
          locations, in different contexts. One of the first larger collective creative gatherings
          took place at Alt lab in a workshop series exploring sustainability perspectives. A
          memorable session took place in the Creative Exchange for Community Cohesion network<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>113</sup>{" "}
          in Tartu, and the positive impact of the sessions — as "a shared presence allowing open
          conversation about immaterial things"<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>114</sup> — was also noted at the VDA Textile Art
          and Design department. New sessions continue at the reopened Ideas Block,<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>115</sup>{" "}
          including in the context of exhibitions such as Transitions.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>116</sup>
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-023.jpg"
          alt="Threads of conversation"
          caption="Fig. 23. Threads of conversation, collective embroidery work almost a year into the project, 2022."
          align="center"
          width={480}
        />

        <p>
          The collective creative process offers the opportunity to approach certain shared
          understandings and helps one more easily identify oneself in the surrounding environment
          in a broader context, seeking new points of connection. By strengthening mutual
          connections in society, we provide a more sustainable foundation for relationships with
          other forms of life, the environment, and ourselves.
        </p>
      </>
    ),
  },
};

// ── Section 3.3 ───────────────────────────────────────────────────────────────
export const s3_3: SubContent = {
  body: {
    lt: (
      <>
        <blockquote>
          Rizoma neturi nei pradžios, nei pabaigos; ji visada yra viduryje, tarp dalykų, tarp
          būties, intermezzo. Medis yra giminystė, rizoma yra sąjunga, išskirtinai – sąjunga.
          <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.9em" }}>— Gilles Deleuze, Felix Guattari</cite>
        </blockquote>

        <Fig
          src="/images/img-024.jpg"
          alt="Ryšių rizoma"
          caption="24 iliustracija. Ryšių rizoma, mišria technika atliktas kūrinys eksponuojamas grupinėje parodoje Spacetime Un[b]locked, Ideas Block – Kompresorinėje, Liucija Dervinytė, 2023."
          align="right"
        />

        <p>
          Šis meninis tyrimas – <em>Ryšių rizoma</em> – tai siekis užmegzti naujus jungties taškus
          ir praktikuoti skirtingus komunikacijos būdus. Kūrybinio projekto pavadinimui
          neatsitiktinai pasirinktas žodis „rizoma" – tai nuoroda į daugiasluoksnį gamtos tinklą,
          su daugybe sudedamųjų dalių ir jungties taškų, turinčių savo poveikį.
        </p>

        <p>
          Filosofijoje rizomos samprata pabrėžia nehierarchinius, nelinijinius ryšius tarp skirtingų
          elementų. Deleuze ir Guattari teigia, jog rizomoje bet kuris taškas gali ir turi būti
          sujungtas su bet kuriuo kitu tašku. Ši sąsaja tarp iš pirmo žvilgsnio nesusijusių
          elementų egzistuoja ne tik rizomoje – tai pasaulio vaizdinys paneigiantis dichotomiją.
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-025.jpg"
          alt="Sujungti ryšiu"
          caption="25 iliustracija. Sujungti ryšiu, tekstilinis koliažas, Liucija Dervinytė, 2022."
          align="left"
        />

        <p>
          Rizoma sudaryta iš įvairių skirtingų elementų, kur kolektyvinis siuvinėjamas audinys
          formuoja kompleksišką struktūrą, iš kurios į skirtingas puses išauga vizualūs kūriniai,
          tekstiniai pokalbių koliažai, faktinės informacijos fragmentai ir videodokumentacija.
          Ši Rizoma – tai idėjų mainai, tiek kolektyvinio kūrybinio proceso metu, tiek pristatant
          meninio tyrimo rezultatus publikai.
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-026.jpg"
          alt="Žinojimas ir atsakomybė"
          caption="26 iliustracija. Žinojimas ir atsakomybė, suknelės koliažas, ekspozicijos pavyzdys, Liucija Dervinytė, 2023."
          align="right"
        />

        <p>
          Individualiai kuriami darbai – tai eklektiškas darinys, apjungiantis skirtingas technikas
          bei estetikas. Kūrinių seriją sudaro trys didesnio formato paveikslai, apjungiantys
          akvarelę, siuvinėjimą ir koliažą ant drobės, tampantys kiekvienos dalies krypties
          nuorodomis. Projekte dominuoja antrinio panaudojimo medžiagos: sena suplyšusi paklodė,
          tekstilinės atraižos iš ankstesnių projektų, kažkieno anksčiau dėvėti drabužiai.
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-027.jpg"
          alt="Gamtos ašara"
          caption="27 iliustracija. Gamtos ašara, akvarelė, siuvinėjimas, koliažas, Liucija Dervinytė, 2022."
          align="center"
          width={480}
        />

        <p>
          Šis projektas man priminė, kad menas gali būti ne tik estetinis objektas, bet ir tyrimo
          priemonė, bendravimo forma ir socialinis veiksmas. Menininkė kaip ryšių kūrėja – tai
          aktyvus veikėjas gamtos–kultūros rizomoje, kuriančios naujas jungtis ir prasmes tarp
          asmeninių išgyvenimų, tarpusavio santykių ir gamtos. Kiekvienas kūrinys, kiekvienas
          susitikimas, kiekviena gija – tai naujas mazgas šiame tinkle.
        </p>
      </>
    ),
    en: (
      <>
        <blockquote>
          The rhizome has no beginning or end; it is always in the middle, between things,
          interbeing, intermezzo. The tree is filiation, but the rhizome is alliance, uniquely
          alliance.
          <cite style={{ display: "block", marginTop: "0.5rem", fontSize: "0.9em" }}>— Gilles Deleuze, Felix Guattari<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>117</sup></cite>
        </blockquote>

        <Fig
          src="/images/img-024.jpg"
          alt="Rhizome of Connections"
          caption="Fig. 24. Rhizome of Connections, mixed-media work exhibited at Spacetime Un[b]locked, Ideas Block – Kompresorinė, Liucija Dervinytė, 2023."
          align="right"
        />

        <p>
          This artistic research — <em>Rhizome of Connections</em> — is an attempt to establish
          new connection points and practise different modes of communication. The word "rhizome"
          was chosen as the project title not by accident — it is a reference to the multi-layered
          network of nature, with many components and connection points, each having their effect.
          In biology, the rhizome is described as a constantly growing mass of underground stems,
          creating plant systems through shoots and storing nutrients for growth and
          development.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>118</sup>
        </p>

        <p>
          In philosophy the rhizome concept emphasizes non-hierarchical, non-linear connections
          between different elements. Deleuze and Guattari argue that in the rhizome any point can
          and must be connected to any other point.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>119</sup> This connection between apparently
          unrelated elements exists not only in the rhizome — it is a worldview that negates
          dichotomy. Even such elementary concepts as "good" and "evil" are temporary products of
          selection whose understanding changes over time.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>120</sup>
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-025.jpg"
          alt="Connected by a bond"
          caption="Fig. 25. Connected by a bond, textile collage, Liucija Dervinytė, 2022."
          align="left"
        />

        <p>
          The rhizome is composed of various different elements, where the collectively embroidered
          fabric forms a complex structure from which visual works, textual conversation collages,
          factual information fragments, and video documentation grow in different directions.
          This Rhizome is an exchange of ideas — both during the collective creative process and
          when presenting the artistic research results to the public. The sounds heard in the short
          film<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>121</sup> are collectively improvised works — a meditative collective improvisation
          that took place during arts and community workshops in Tartu.
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-026.jpg"
          alt="Knowledge and responsibility"
          caption="Fig. 26. Knowledge and responsibility, dress collage, exhibition example, Liucija Dervinytė, 2023."
          align="right"
        />

        <p>
          The individually created works are an eclectic formation combining different techniques
          and aesthetics. The series consists of three large-format paintings combining watercolor,
          embroidery, and collage on canvas, serving as directional markers for each part.
          Secondary-use materials dominate: an old torn sheet, textile scraps from previous
          projects, previously worn clothing donated by others. As Arleta Griffor writes, "contact
          with the whole is reached through creative movement in which ever subtler meanings are
          disclosed."<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>122</sup>
        </p>

        <ClearFloat />

        <Fig
          src="/images/img-027.jpg"
          alt="Nature's tear"
          caption="Fig. 27. Nature's tear, watercolor, embroidery, collage, Liucija Dervinytė, 2022."
          align="center"
          width={480}
        />

        <p>
          This project reminded me that art can be not only an aesthetic object, but also a research
          tool, a form of communication, and a social action. The artist as a creator of connections
          is an active participant in the nature–culture rhizome, creating new links and meanings
          between personal experiences, mutual relationships, and nature. Every work, every
          gathering, every thread — a new node in this network.<sup style={{fontSize: "0.65em", verticalAlign: "super", lineHeight: 0, color: "#4A7C59"}}>123</sup>
        </p>
      </>
    ),
  },
};

export const SUBSECTION_CONTENT: Record<string, SubContent> = {
  "s1-1": s1_1,
  "s1-2": s1_2,
  "s1-3": s1_3,
  "s2-1": s2_1,
  "s2-2": s2_2,
  "s2-3": s2_3,
  "s3-1": s3_1,
  "s3-2": s3_2,
  "s3-3": s3_3,
};
