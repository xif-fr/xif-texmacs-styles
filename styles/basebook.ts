<TeXmacs|2.1.2>

<style|source>

<\body>
  <\active*>
    <\src-title>
      <src-style-file|basebook|1.0>

      <\src-purpose>
        The basic book style.
      </src-purpose>
    </src-title>
  </active*>

  <use-package|book|vdh>

  <assign|math-colored|<macro|x|<with|font-family|rm|<arg|x>>>>

  <assign|uncolored-math|<value|math>>

  <assign|uncolored-equation*|<value|equation*>>

  <assign|uncolored-equations-base|<value|equations-base>>

  <assign|math|<macro|x|<math-colored|<uncolored-math|<arg|x>>>>>

  <assign|equation*|<\macro|x>
    <math-colored|<\uncolored-equation*>
      <arg|x>
    </uncolored-equation*>>
  </macro>>

  <assign|equations-base|<\macro|x>
    <math-colored|<\uncolored-equations-base>
      <arg|x>
    </uncolored-equations-base>>
  </macro>>

  <assign|uncolored-text|<value|text>>

  <assign|text-colored|<macro|x|<with|font-family|ss|<arg|x>>>>

  <assign|text|<macro|x|<text-colored|<uncolored-text|<arg|x>>>>>

  <assign|font-family|ss>

  <assign|page-type|a4> <assign|magnification|1.2>

  <assign|eqn-long-above|<macro|0fn>> <assign|eqn-long-below|<macro|0fn>>
  <assign|eqn-short-above|<macro|0fn>> <assign|eqn-short-below|<macro|0fn>>

  <assign|par-first|0fn> <assign|par-par-sep|0.4fn>

  <\active*>
    <\src-comment>
      Utilities.
    </src-comment>
  </active*>

  <assign|bra|<macro|x|<around*|\<langle\>|<arg|x>|\|>>>

  <assign|ket|<macro|x|<around*|\||<arg|x>|\<rangle\>>>>

  <assign|vecsl|<macro|x|<shift|<wide|<shift|<math-sl|<arg|x>>|-0.08em|>|\<vect\>>|0.05em|>>>

  <\active*>
    <\src-comment>
      Units.
    </src-comment>
  </active*>

  <assign|u|<macro|unit|<math-up|<arg|unit>>>>

  <assign|vunit|<macro|x|u|<math|<arg|x> <arg|u>>>>

  <assign|vu|<macro|x|unit|<vunit|<arg|x>|<u|<arg|unit>>>>>

  <assign|vunits|<macro|x|unum|udem|<vunit|<arg|x>|<with|math-condensed|true|<arg|unum>/<arg|udem>>>>>

  <\active*>
    <\src-comment>
      Headers.
    </src-comment>
  </active*>

  <assign|odd-page-text|<macro|s|<assign|page-odd-header|<quasiquote|<small|<style-with|src-compact|none|<wide-std-underlined|<with|font-shape|small-caps|<unquote|<arg|s>>><htab|5mm><unquote|<page-number>>>>>>>>>

  <assign|even-page-text|<macro|s|<assign|page-even-header|<quasiquote|<small|<style-with|src-compact|none|<wide-std-underlined|<unquote|<page-number>><htab|5mm><with|font-shape|small-caps|<unquote|<arg|s>>>>>>>>>>

  <\active*>
    <\src-comment>
      Chapters.
    </src-comment>
  </active*>

  <assign|sectional-sep|<macro|.<space|2spc>>>
  <assign|sectional-post-sep|<macro|<space|2spc>>>

  <assign|chapter-title|<macro|name|<style-with|src-compact|none|<new-dpage*><new-line><style-with|src-compact|none|<sectional-centered-bold|<vspace*|2fn><with|font-shape|small-caps|<really-large|<arg|name>>><vspace|3fn>>>>>>

  <assign|chapter-long-title|<macro|first-title|second-title|<style-with|src-compact|none|<chapter-title|<style-with|src-compact|none|<very-huge|<arg|first-title>><right-flush><vspace|1.5fn><new-line><left-flush><arg|second-title>>>>>>

  <assign|chapter-numbered-title|<macro|title|<style-with|src-compact|none|<chapter-long-title|<chapter-text>
  <the-chapter>|<arg|title>>>>>

  <assign|appendix-numbered-title|<macro|title|<style-with|src-compact|none|<chapter-long-title|<appendix-text>
  <the-appendix>|<arg|title>>>>>

  <\active*>
    <\src-comment>
      Sections, subsections and subsubsections.
    </src-comment>
  </active*>

  <assign|section-title|<macro|name|<style-with|src-compact|none|<sectional-centered-bold|<vspace*|2fn><with|font-shape|small-caps|<larger|<arg|name>>><vspace|1fn>>>>>

  <assign|subsection-title|<macro|name|<style-with|src-compact|none|<sectional-normal-bold|<vspace*|1.5fn><large|<arg|name>><vspace|0.5fn>>>>>

  <assign|subsubsection-title|<macro|name|<style-with|src-compact|none|<sectional-normal-bold|<vspace*|1fn><arg|name><vspace|0.5fn>>>>>

  <\active*>
    <\src-comment>
      Other customization.
    </src-comment>
  </active*>

  <assign|theorem-name|<macro|name|<with|font-shape|small-caps|<arg|name>>>>

  <assign|toc-strong-2|<macro|left|right|<style-with|src-compact|none|<vspace*|1fn><with|font-series|bold|math-font-series|bold|font-shape|small-caps|<arg|left>><toc-dots><arg|right><vspace|0.5fn>>>>

  <assign|render-bibliography|<\macro|name|body>
    <subsection*|<arg|name>>

    <with|par-first|0fn|par-par-sep|0fn|font-size|0.8|<arg|body>>
  </macro>>

  \;
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
  </collection>
</initial>