# Sections Folder

Bu klasor, sadeleştirilmiş yeni içindekiler yapisina gore alt basliklari ayri `.tex` dosyalarinda tutar.

- `data/1.tex` ... `data/14.tex`: Chapter dosyalari
- `data/sections/XX/XX-YY.tex`: Alt baslik dosyalari

Kural:
- Chapter dosyalari alt dosyalari `\input{...}` ile cagirir.
- Alt dosyalar `\section{...}` ile baslar.
