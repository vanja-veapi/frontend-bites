Napraviti filtere koji kada se odaberu (cekiraju) taj filter se primenjuje u queryParams
npr adresa="Manhattan 7" u query paramsu ce biti www.example.com/?adresa="Manhattan 7" -> Naravno specijalni karakteri poput space-a i navodinka bice enkodovani

Filteri mogu biti tipa string, boolean, ili niz
primer za string -> adresa = "Neki string"
primer za boolean -> prikazi_promovisane_oglase = true
primer za niz ->
oprema_za_kola: Bluetooth (id:2), krovni nosac(id: 8), Tempomat(id: 1)
[2,8,1]

Funkcionalnost: Klikom na jedno od polja ocekujem da mi se query params puni i da se to prosledjuje u API
