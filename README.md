My styles and settings for [TeXmacs](https://www.texmacs.org/tmweb/home/welcome.en.html).

Styles
------

Two styles with rather small page margins, and rather compact, and largish text.
Most importantly, with text in sans-serif and math in serif :

![style screenshot](https://github.com/xif-fr/xif-texmacs-styles/assets/34941891/07c23b0c-7a54-4a3d-be65-a465348127b6)


`base`: For short documents/articles.  
`basebook`: Used for my PhD thesis. With some additional utilities (units, some symbols, some useful macros...)

Bibliography style
------------------

`xif.scm`

As I like :
* Uses directly bibtex entry IDs as citation handles in the text, not automatically generated handles like numbers or "AuthorYear".
* Displays e-archive stuff and DOIs. Adds URLs for arXiv and DOIs.
* Titles in italic, authors in smallcaps.


![bibliography style screenshot](https://github.com/xif-fr/xif-texmacs-styles/assets/34941891/49a7a7e5-3f7e-453c-a0fc-048537c28575)


Warning, this is full of very dirty hacks.  
Stolen and adapted from [http://forum.texmacs.cn/t/about-bibliography-in-texmacs/133](http://forum.texmacs.cn/t/about-bibliography-in-texmacs/133).

`my-init-texmacs.scm`
---------------------

Some customization and keyboard shortcuts.
