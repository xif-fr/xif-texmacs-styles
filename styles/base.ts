<TeXmacs|1.0.7.20>

<style|source>

<\body>
  <\active*>
    <\src-title>
      <src-style-file|base|1.0>

      <\src-purpose>
        The basic style.
      </src-purpose>

    </src-title>
  </active*>

  <use-package|std|env|title-generic|header-generic|section-generic>

  \;

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

  <assign|page-type|a4>
  <assign|magnification|1.2>
  <assign|page-top|15mm>
  <assign|page-bot|15mm>
  <assign|page-even|15mm>
  <assign|page-odd|15mm>
  <assign|page-right|15mm>
  <assign|page-screen-margin|false>

  <assign|eqn-long-above|<macro|0fn>>
  <assign|eqn-long-below|<macro|0fn>>
  <assign|eqn-short-above|<macro|0fn>>
  <assign|eqn-short-below|<macro|0fn>>

  <assign|par-first|0fn>
  <assign|par-par-sep|0.4fn>

  <assign|sectional-sep|<macro|.<space|2spc>>>
  <assign|sectional-post-sep|<macro|>>

  \;

  <assign|code|<\macro|body>
    <\padded>
      <surround||<htab|5mm>|<with|font-family|tt|language|verbatim|par-first|0fn|par-par-sep|0fn|<arg|body>>>
    </padded>
  </macro>>
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
  </collection>
</initial>