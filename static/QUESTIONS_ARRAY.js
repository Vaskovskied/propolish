const QUESTIONS_ARRAY = [
  {
    id: 1,
    text: "Wymień znanych ci kompozytorów polskich?",
  },
  {
    id: 2,
    text: "Co wiesz o odsieczy Wiednia?",
  },
  {
    id: 3,
    text: "Z jakim wydarzeniem kojarzy się 3 Maj 1791 roku?",
  },
  {
    id: 4,
    text: "Kiedy wybuchło Powstanie Warszawskie?",
  },
  {
    id: 5,
    text: "Kto sprowadził do Polski Krzyżaków?",
  },
  {
    id: 6,
    text: "Wymień najsłynniejszą  insygnie koronacyjną królów Polski?",
  },
  {
    id: 7,
    text: "Gdzie i kiedy odbył się zjazd gnieźnieński?",
  },
  {
    id: 8,
    text: "Z czym kojarzy się Targowica?",
  },
  {
    id: 9,
    text: "Kim był Tadeusz Kościuszko?",
  },
  {
    id: 10,
    text: "Kto wygrał bitwę pod Płowcami?",
  },
  {
    id: 11,
    text: "Kto taki Dąbrowskie? ",
  },
  {
    id: 12,
    text: "Kto jest patronem Polski?",
  },
  {
    id: 13,
    text: "Kim była Święta Jadwiga?",
  },
  {
    id: 14,
    text: "Jakich malarzy Pan/Pani zna?",
  },
  {
    id: 15,
    text: "Kim był Jan Matejko?",
  },
  {
    id: 16,
    text: "Kim jest Lech Wałęsa?",
  },
  {
    id: 17,
    text: "Kim był Jan Paweł II?",
  },
  {
    id: 18,
    text: "Kim był Karol Józef Wojtyła? ",
  },
  {
    id: 19,
    text: "Kim była Wisława Szymborska?",
  },
  {
    id: 20,
    text: "Muzeum Hymnu Narodowego w Będominie",
  },
  {
    id: 21,
    text: "Lista UNESCO w Polsce",
  },
  {
    id: 22,
    text: "Kto był zwycięzcą w bitwie pod Grunwaldem?",
  },
  {
    id: 23,
    text: "W jaki sposób eleganccy Polacy witają się z kobietami?",
  },
  {
    id: 24,
    text: "Wymień znane ci (typowe) zwyczaje  i  tradycje Polaków",
  },
  {
    id: 25,
    text: "Kim jest Andrzej Wajda?",
  },
  {
    id: 26,
    text: "Kim był Józef Piłsudski? ",
  },
  {
    id: 27,
    text: "Kim był Adam Mickiewicz?",
  },
  {
    id: 28,
    text: "Kim był Mikołaj Kopernik?",
  },
  {
    id: 29,
    text: "Wymień znanych ci reżyserów filmowych i teatralnych",
  },
  {
    id: 30,
    text: "Kim był Jan Matejko?",
  },
  {
    id: 31,
    text: "Co wiesz o Marii Skłodowskiej-Curie, Salomei?",
  },
  {
    id: 32,
    text: "Jak tradycyjnie ubiera się pan młody w dniu ślubu? ",
  },
  {
    id: 33,
    text: "Proszę wymienić polskich noblistów",
  },
  {
    id: 34,
    text: "Z jakim wydarzeniem kojarzy się 3 Maj 1791 roku?",
  },
  {
    id: 35,
    text: "Wymień nazwiska prezydentów RP po 1989 roku",
  },
  {
    id: 36,
    text: "Kto i kiedy założył akademię (Uniwersytet Jagielloński) w Krakowie? ",
  },
  {
    id: 37,
    text: "Wymień krainy geograficzne Polski ",
  },
  {
    id: 38,
    text: "Wymień Parki Narodowe w Polsce:",
  },
  {
    id: 39,
    text: "Jakie zwierzę symbolizuje Puszczę Białowieską? ",
  },
  {
    id: 40,
    text: "Jakie ciasta należą do tradycyjnych deserów w Polsce? ",
  },
  {
    id: 41,
    text: "Wymień znane ci potrawy narodowe? ",
  },
  {
    id: 42,
    text: "Jakie duże polskie miasta są położone nad Bałtykiem?",
  },
  {
    id: 43,
    text: "Przez jakie miasta przepływa rzeka Wisła?",
  },
  {
    id: 44,
    text: "Wymień najważniejsze budowle średniowieczne w ważniejszych miastach Polski ",
  },
  {
    id: 45,
    text: "Najważniejsze miasta Polski?",
  },
  {
    id: 46,
    text: "Jakie miasto było pierwszą stolicą Polski? ",
  },
  {
    id: 47,
    text: "Czy Polska leży nad morzem?",
  },
  {
    id: 48,
    text: "Które góry przekraczają Polska?",
  },
  {
    id: 49,
    text: "Dzień Polonii i Polaków za Granicą ",
  },
  {
    id: 50,
    text: "Najważniejsze rzeki i jeziora w Polsce?",
  },
  {
    id: 51,
    text: "Co było na 13 grudnia w historii Polski? ",
  },
  {
    id: 52,
    text: "Co to jest Mazurek Dąbrowskiego?",
  },
  {
    id: 53,
    text: "Jak wygląda flaga Polski? ",
  },
  {
    id: 54,
    text: "Jak wygląda godło Polski? ",
  },
  {
    id: 55,
    text: "Daty chrztu Polski? ",
  },
  {
    id: 56,
    text: "Autor polskiego hymnu ",
  },
  {
    id: 57,
    text: "Jaki instrument grał hymn?",
  },
  {
    id: 58,
    text: "Data przyjęcia Konstytucji Polskiej ",
  },
  {
    id: 59,
    text: "Dlaczego na Stole Wigilijnym umieścić jedną dodatkową jednostkę?",
  },
  {
    id: 60,
    text: "Miasto, w którym znajduje się międzynarodowy festiwal folklorystyczny? ",
  },
  {
    id: 61,
    text: "Liczba mieszkańców Polski? ",
  },
  {
    id: 62,
    text: "Co można zobaczyć w Krakowie?",
  },
  {
    id: 63,
    text: "Co znajduję się obok Katowic?",
  },
  {
    id: 64,
    text: "Kto jest obecnie premierem? ",
  },
  {
    id: 65,
    text: "Jaka w Polsce jest pustynia?",
  },
  {
    id: 66,
    text: "Godło Warszawy?",
  },
  {
    id: 67,
    text: "Jaki Polska ma podział administracyjny",
  },
  {
    id: 68,
    text: "Co można zobaczyć w Warszawie?",
  },
  {
    id: 69,
    text: "Zimowa stolica Polski",
  },
  {
    id: 70,
    text: "Ile posiłków powinna być na Wigilijnym tabeli? ",
  },
  {
    id: 71,
    text: "Miasto, w którym urodził się Mikołaj Kopernik?",
  },
  {
    id: 72,
    text: "Ile województw w Polsce?",
  },
  {
    id: 73,
    text: "Swięto ruchome w kalendarzu chrześcijańskim przypadające 7 dni przed Wielkanocą ",
  },
  {
    id: 74,
    text: "Kiedy Polska przystąpiła do Unii Europejskiej?",
  },
  {
    id: 75,
    text: "Co to jest słynny ikona w Farnham (jezuita) kościoła?",
  },
  {
    id: 76,
    text: "W czasie których świąt narodowych większość banków i instytucji jest zamknięta, podobnie jak wiele mniejszych sklepów?",
  },
  {
    id: 77,
    text: "Jaki wielki dzień na początku Wielkiego Postu?",
  },
  {
    id: 78,
    text: "Kim był Karol Józef Wojtyla? ",
  },
  {
    id: 79,
    text: "Kiedy jest karnawał?",
  },
  {
    id: 80,
    text: "Kiedy jest Wigilia?",
  },
  {
    id: 81,
    text: "Kiedy ubierają choinkę? ",
  },
  {
    id: 82,
    text: "Ile potraw zwykle gotuje się na Wigilię? ",
  },
  {
    id: 83,
    text: "Jak nazywa się msza na Boże Narodzenie?",
  },
  {
    id: 84,
    text: "Czym dzielą się podczas śniadania wielkanocnego? ",
  },
  {
    id: 85,
    text: "Co to jest pisanki i malowanki?",
  },
  {
    id: 86,
    text: "Co odbywa się w Wielki Piątek?",
  },
  {
    id: 87,
    text: "Proszę nazwać tylko polskie święta?",
  },
  {
    id: 88,
    text: "Co łożymy pod biały obrus podczas Wigilii?",
  },
  {
    id: 89,
    text: "Kiedy dzielą się opłatkiem? ",
  },
  {
    id: 90,
    text: "Czym jest opłatek? ",
  },
  {
    id: 91,
    text: "Jak nazywa się post przed Bożym Narodzeniem? ",
  },
  {
    id: 92,
    text: "Ulubione danie na Wigilię?",
  },
  {
    id: 93,
    text: "Kiedy siadamy do stołu podczas Wigilii?",
  },
  {
    id: 94,
    text: "Kiedy obchodzimy Wielkanoc?",
  },
  {
    id: 95,
    text: "Na pamiątkę czego obchodzimy Wielkanoc?",
  },
  {
    id: 96,
    text: "Jak nazywa się post przed Wielkanocą? ",
  },
  {
    id: 97,
    text: "Co święcimy w kościele na Welkanoc? ",
  },
  {
    id: 98,
    text: "Co to jest śmingus-dyngus? ",
  },
  {
    id: 99,
    text: "Jak nazywa się msza wielkanocna? ",
  },
  {
    id: 100,
    text: "Kiedy zaczyna się Wielki Post? ",
  },
  {
    id: 101,
    text: "Co stoi na stole podczas Wielkanocy? ",
  },
  {
    id: 102,
    text: "Jak nazywa się jednym słowem koszyk wielkonocny? ",
  },
  {
    id: 103,
    text: "Kiedy jest Boże Ciało?",
  },
  {
    id: 104,
    text: "Kiedy jest Dzień Wszystkich Świętych?",
  },
  {
    id: 105,
    text: "Kiedy jest Dzień św.Mikałaja?",
  },
  {
    id: 106,
    text: "Kiedy katolicy obchodzą dzień Bożego Narodzenia?",
  },
  {
    id: 107,
    text: "Kiedy jest Dzień św.Sylwestra?",
  },
  {
    id: 108,
    text: "Jak nazywa się drugi dzień Bożego Narodzenia?",
  },
  {
    id: 109,
    text: "Kiedy jest Dzień Flagi?",
  },
  {
    id: 110,
    text: "Kiedy jest Dzień Wszystkich zmarłych (zaduszki)?",
  },
  {
    id: 111,
    text: "Co robimy na Dzień Wszystkich zmarłych?",
  },
  {
    id: 112,
    text: "Jakie świeto jest 3 maja? ",
  },
  {
    id: 113,
    text: "Prosze nazwać dwa najważniejsze święta w Polsce? ",
  },
  {
    id: 114,
    text: "Kiedy jest Dzień św.Andrzeja?",
  },
  {
    id: 115,
    text: "Kiedy jest Niedziela Palmowa?",
  },
  {
    id: 116,
    text: "Kiedy Dzień pracy?",
  },
  {
    id: 117,
    text: "Jakie świeta są 2 maja? ",
  },
  {
    id: 118,
    text: "Prosze nazwać dwa najważniejsze religijnie święta?",
  },
  {
    id: 119,
    text: "Jakie świeta są 15 sierpnia?",
  },
  {
    id: 120,
    text: "Święta państwowe?",
  },
  {
    id: 121,
    text: "Co to jest dażynki?",
  },
  {
    id: 122,
    text: "Co dziwi nas na cmentarzu 2 listopada? ",
  },
  {
    id: 123,
    text: "Najbardziej znany Polak w świecie?",
  },
  {
    id: 124,
    text: "Jakie zabytki są w Mińsku?",
  },
  {
    id: 125,
    text: "W jakim polskim mieście jest znany festywal muzyczny? ",
  },
  {
    id: 126,
    text: "Jacy znani Polacy mieszkają w Pana/Pani mieście?",
  },
  {
    id: 127,
    text: "Kto z Polaków jest związany z Białorusią? ",
  },
  {
    id: 128,
    text: "Kto z Polaków jest związany z Pana/Pani miastem? ",
  },
  {
    id: 129,
    text: "Co ciekawego jest w Pana/Pani mieście?",
  },
  {
    id: 130,
    text: "Proszę nazwać białoruskie potrawy tradycyjne? ",
  },
  {
    id: 131,
    text: "Czy zna Pan/Pani piosenki patriotyczne?",
  },
  {
    id: 132,
    text: "Gdzie mieszka Smok Wawielski?",
  },
  {
    id: 133,
    text: "Czym różnią się PiS i PKS?",
  },
  {
    id: 134,
    text: "Co to jest PKB, PKS, PiS, PKP, PO? ",
  },
  {
    id: 135,
    text: "Kto powiedział «Polacy nie gęsi, swój język mają»",
  },
  {
    id: 136,
    text: "Z czym jest związane miasto Toruń? ",
  },
  {
    id: 137,
    text: "Gdzie przechodzi festiwal folklorowy? ",
  },
  {
    id: 138,
    text: "Kto z polskich kompozytorów uczył się w Mińsku?",
  },
  {
    id: 139,
    text: "Proszę nazwać dwóch piosenkarzy?",
  },
  {
    id: 140,
    text: "Proszę nazwać dwóch aktorów polskich?",
  },
  {
    id: 141,
    text: "Kto napisał utwór „Quo vadis”? ",
  },
  {
    id: 142,
    text: "Kto z poetów polskich urodził się koło Nowogrudka? ",
  },
  {
    id: 143,
    text: "Kto otrzymał nagrodę Nobla za poezję?",
  },
  {
    id: 144,
    text: "Proszę nazwać dwóch działaczy sztuki? ",
  },
  {
    id: 145,
    text: "Kiedy zmarła Wisława Szymborska ",
  },
  {
    id: 146,
    text: "Najbardziej znany kompozytor Polski? ",
  },
  {
    id: 147,
    text: "Jakie zabytki można zobaczyć na Białorusi, związane z Polską?",
  },
  {
    id: 148,
    text: "Trzy stolicy Polski? ",
  },
  {
    id: 149,
    text: "Kto w 1918 roku objawił niepodległość Polski?",
  },
  {
    id: 150,
    text: "Co stworzył L.Wałęsa?",
  },
  {
    id: 151,
    text: "Proszę nazwać dwóch sportowców? ",
  },
  {
    id: 152,
    text: "Kto namalował «Bitwę pod Grunwaldem»? ",
  },
  {
    id: 153,
    text: "Kto napisał «Nad Niemnem»?",
  },
  {
    id: 154,
    text: "Co napisał W.Reymont?",
  },
  {
    id: 155,
    text: "Jaki utwory Sienkiewicza Pan/Pani zna? ",
  },
  {
    id: 156,
    text: "Kto jest autorem teorii heliocentrycznej? ",
  },
  {
    id: 157,
    text: "Kto otrzymał dwie nagrody Nobla w różnych dziedzinach? ",
  },
  {
    id: 158,
    text: "Co napisał A.Mickewicz? ",
  },
  {
    id: 159,
    text: "Kto z prezydentów zginał pod Smoleńskiem?",
  },
  {
    id: 160,
    text: "Z czym związany w Polsce 1980 rok?",
  },
  {
    id: 161,
    text: "Co to jest zbrodnia katyńska?",
  },
  {
    id: 162,
    text: "Kim są żołnierze wyklęci",
  },
  {
    id: 163,
    text: "Kiedy utworzyła się RP?",
  },
  {
    id: 164,
    text: "Kiedy zaczęła się II wojna światowa? ",
  },
  {
    id: 165,
    text: "Kto był pierwszym prezydentem Polski?",
  },
  {
    id: 166,
    text: "Kiedy utworzyła się partia „Solidarność”",
  },
  {
    id: 167,
    text: "Czym jest «Solidarność», gdzie, kiedy, kierownik?",
  },
  {
    id: 168,
    text: " Proszę nazwać dwóch przestawicelieli dynastii Piastów?",
  },
  {
    id: 169,
    text: " Kto był prezydentem Polski, kiedy Polska wstąpiła do UE?",
  },
  {
    id: 170,
    text: "Kiedy odbyło się ogłoszenie niepodległości? ",
  },
  {
    id: 171,
    text: "Kiedy Karol Wojtyła został paperzem?",
  },
  {
    id: 172,
    text: "Kiedy Polska wstąpiła do NATO?",
  },
  {
    id: 173,
    text: "Kiedy odbył się «Cud nad Wisłą»? ",
  },
  {
    id: 174,
    text: "Kto założył Polskę?",
  },
  {
    id: 175,
    text: "Proszę wymienić polskich generałów",
  },
  {
    id: 176,
    text: "Liczba ludności Polski",
  },
  {
    id: 177,
    text: "Ile jest województw w Polsce? Wymień kilka.",
  },
  {
    id: 178,
    text: "Co jest koło Katowic",
  },
  {
    id: 179,
    text: "Kiedy odbyła się Unia Krewska?",
  },
  {
    id: 180,
    text: "Kto był ostatnim królem z dynastii Jagellonów",
  },
  {
    id: 181,
    text: "Kto był pierwszym królem z dynastii Jagellonów",
  },
  {
    id: 182,
    text: "Kim była Jadwiga?",
  },
  {
    id: 183,
    text: "Dynastie królewskie w Polsce?",
  },
  {
    id: 184,
    text: "Co to jest Miecz Szczerbiec?",
  },
  {
    id: 185,
    text: "Kim był Piast Kołodziej?",
  },
  {
    id: 186,
    text: "Co się stało z Popielem?",
  },
  {
    id: 187,
    text: "Kto był pierwszym królem Polski?",
  },
  {
    id: 188,
    text: "Data chrztu Polski?",
  },
  {
    id: 189,
    text: "Gdzie i kiedy odbył się Zjazd Gnieźnieński?",
  },
  {
    id: 190,
    text: "Kiedy odbyła się II Rzeczpospolita Polska?",
  },
  {
    id: 191,
    text: "Miasta – stolice Polski?",
  },
  {
    id: 192,
    text: "Gdzie i jak zginą Święty Wojciech?",
  },
  {
    id: 193,
    text: "Kiedy odbyła się III Rzeczpospolita Polska?",
  },
  {
    id: 194,
    text: "Kiedy odbyła się Unia Lubelska?",
  },
  {
    id: 195,
    text: "W jakim wieku powstała Polska?",
  },
  {
    id: 196,
    text: "Kto był ostatnim królem Polski?",
  },
  {
    id: 197,
    text: "Gdzie i kiedy koronowano Bolesława Chrobrego?",
  },
  {
    id: 198,
    text: "Testament Bolesława Krywoustego.",
  },
  {
    id: 199,
    text: "Kto sprowadził Krzyżaków do Polski?",
  },
  {
    id: 200,
    text: "Konstytucja 3 Maja?",
  },
  {
    id: 201,
    text: "Okres rozbiorów?",
  },
  {
    id: 202,
    text: "Kiedy miał miejsce Potop szwedzki?",
  },
  {
    id: 203,
    text: "Postać Króla Jana III Sobieskiego?",
  },
  {
    id: 204,
    text: "Gdzie i kiedy zginął Król Władysław Warneńczyk",
  },
  {
    id: 205,
    text: "Kiedy odbyła się bitwa pod Grunwaldem?",
  },
  {
    id: 206,
    text: "Kto i kiedy założyw pierwszy uniwersytet w Polsce",
  },
  {
    id: 207,
    text: "O kim mówiono „Został Polskę drewnianą, a zostawił murowaną”",
  },
  {
    id: 208,
    text: "Kto wygrał bitwę pod Płowcami?",
  },
  {
    id: 209,
    text: "Kiedy odbyła się koronacja Władysława Łokietka?Co oznacza ta koronacja?",
  },
  {
    id: 210,
    text: "Kiedy odbył się napad Tatarów",
  },
  {
    id: 211,
    text: "Dlaczego doszło do rozbiorów i upadku Rzeczpospolitej?",
  },
  {
    id: 212,
    text: "Legiony Polskie we Włoszech, generał Dąbrowski.",
  },
  {
    id: 213,
    text: "12 marca 1999r.",
  },
  {
    id: 214,
    text: "Wymień nazwiska prezudentów Rzeczpospolitej Polski",
  },
  {
    id: 215,
    text: "Data wstąpienia Polski do NATO?",
  },
  {
    id: 216,
    text: "Koniec rządów komunistycznych",
  },
  {
    id: 217,
    text: "13 grudzień 1981r.",
  },
  {
    id: 218,
    text: "Z jakim wydarzeniem kojarzy się 13 grudzień?",
  },
  {
    id: 219,
    text: 'Rok założenia Związku Zawodowego "Solidarność"',
  },
  {
    id: 220,
    text: "Polska po 1944 roku. ",
  },
  {
    id: 221,
    text: "8 maja 1945r.",
  },
  {
    id: 222,
    text: "1 sierpnia 1944",
  },
  {
    id: 223,
    text: "Wyzwolenie miasta Bredy w Holandii",
  },
  {
    id: 224,
    text: "Walki w północnych Włoszech ",
  },
  {
    id: 225,
    text: "Bitwa o Monte Cassino",
  },
  {
    id: 226,
    text: "Bitwa o Anglię",
  },
  {
    id: 227,
    text: "1 września 1939r",
  },
  {
    id: 228,
    text: "ostatni Prezydent II Rzeczpospolitej",
  },
  {
    id: 229,
    text: "pierwszym Prezydentem II Rzeczpospolitej",
  },
  {
    id: 230,
    text: "Cud nad Wisłą",
  },
  {
    id: 231,
    text: "Kiedy wybuchło Powstanie Styczniowe?",
  },
  {
    id: 232,
    text: "Kiedy wybuchło Powstanie Listopadowe?",
  },
  {
    id: 233,
    text: "Józef Piłsudsk",
  },
  {
    id: 234,
    text: "Stefan Banach",
  },
  {
    id: 235,
    text: "Jan Heweliusz",
  },
  {
    id: 236,
    text: "Mikołaj Kopernik",
  },
  {
    id: 237,
    text: "Jan Paweł II – Karol Wojtyła",
  },
  {
    id: 238,
    text: "Wisława Szymborska",
  },
  {
    id: 239,
    text: "Lech Wałęsa",
  },
  {
    id: 240,
    text: "Czesław Miłosz",
  },
  {
    id: 241,
    text: "Henryk Sienkiewicz",
  },
  {
    id: 242,
    text: "Maria Skłodowska-Curie",
  },
  {
    id: 243,
    text: "Juliusz Słowacki",
  },
  {
    id: 244,
    text: "Zbigniew Herbert",
  },
  {
    id: 245,
    text: "Juliusz Tuwim ",
  },
  {
    id: 246,
    text: "Jan Kochanowski",
  },
  {
    id: 247,
    text: "Mikołaj Rej",
  },
  {
    id: 248,
    text: "Adam Mickiewicz",
  },
  {
    id: 249,
    text: "Krzysztof Kieślowski",
  },
  {
    id: 250,
    text: "Roman Polański ",
  },
  {
    id: 251,
    text: "Jerzy Hoffman",
  },
  {
    id: 252,
    text: "Andrzej Wajda ",
  },
  {
    id: 253,
    text: "Witold Lutosławski",
  },
  {
    id: 254,
    text: "Fryderyk Franciszek Chopin",
  },
  {
    id: 255,
    text: "Karol Szymanowski",
  },
  {
    id: 256,
    text: "Trzech Kroli",
  },
  {
    id: 257,
    text: "Sylwester ",
  },
  {
    id: 258,
    text: "Świętego Szczepana ",
  },
  {
    id: 259,
    text: "Pasterka",
  },
  {
    id: 260,
    text: "Boże Narodzenie",
  },
  {
    id: 261,
    text: "Kolędy",
  },
  {
    id: 262,
    text: "Opłatek",
  },
  {
    id: 263,
    text: "Wigilia (Wieczór Wigilijny)",
  },
  {
    id: 264,
    text: "Mikołajki lub Świętego Mikołaja",
  },
  {
    id: 265,
    text: "Adwent.",
  },
  {
    id: 266,
    text: "Andrzejki",
  },
  {
    id: 267,
    text: "Katarzynki",
  },
  {
    id: 268,
    text: "Wszystkich Świętych, Dzień Zaduszny.",
  },
  {
    id: 269,
    text: "Dożynki",
  },
  {
    id: 270,
    text: "Obchody świętojańskiej sobótki",
  },
  {
    id: 271,
    text: "Poniedziałek Wielkanocny",
  },
  {
    id: 272,
    text: "Wielkanoc",
  },
  {
    id: 273,
    text: "Wielki Piątek",
  },
  {
    id: 274,
    text: "Niedziela Palmowa",
  },
  {
    id: 275,
    text: "Środa Popielcowa",
  },
  {
    id: 276,
    text: "Tłusty Czwartek",
  },
  {
    id: 277,
    text: "Karnawał",
  },
  {
    id: 278,
    text: "1 stycznia",
  },
  {
    id: 279,
    text: "6 stycznia ",
  },
  {
    id: 280,
    text: "21 stycznia",
  },
  {
    id: 281,
    text: "8 marca",
  },
  {
    id: 282,
    text: "Niedziela i poniedziałek – pierwsza niedziela po pierwszej wiosennej pełni księżyca ",
  },
  {
    id: 283,
    text: "7 niedziela po Wielkanocy",
  },
  {
    id: 284,
    text: "Czwartek dziewiątego tygodnia po Wielkanocy ",
  },
  {
    id: 285,
    text: "1 maja",
  },
  {
    id: 286,
    text: "2 maja",
  },
  {
    id: 287,
    text: "3 maja ",
  },
  {
    id: 288,
    text: "26 maja ",
  },
  {
    id: 289,
    text: "1 czerwca",
  },
  {
    id: 290,
    text: "15 sierpnia",
  },
  {
    id: 291,
    text: "16 padźiernika",
  },
  {
    id: 292,
    text: "1 listopada",
  },
  {
    id: 293,
    text: "11 listopada",
  },
  {
    id: 294,
    text: "24 grudnia",
  },
  {
    id: 295,
    text: "25 grudnia",
  },
  {
    id: 296,
    text: "26 grudnia",
  },
  {
    id: 297,
    text: "Co Polacy jedzą w Tłusty Czwartek?",
  },
  {
    id: 298,
    text: "Kim był Władysław Horodecki",
  },
  {
    id: 299,
    text: "Jakie ciasta należą do tradycyjnych deserów w Polsce?",
  },
  {
    id: 300,
    text: "Wymień znane ci polskie potrawy narodowe?",
  },
  {
    id: 301,
    text: "Co to jest choinka?",
  },
  {
    id: 302,
    text: "Gdzie mieszka Smok wawelski?",
  },
  {
    id: 303,
    text: "Jakie zwierzę symbolizuje Puszczę Białowieską?",
  },
  {
    id: 304,
    text: "Kto jest świętym patronem Polski?",
  },
  {
    id: 305,
    text: "Kiedy na godle Polski nie było korony?",
  },
  {
    id: 306,
    text: "akie święto obchodzi się w Polsce 1 listopada",
  },
  {
    id: 307,
    text: "Dzień Niepodległości?",
  },
  {
    id: 308,
    text: "Dzień Konstytucji?",
  },
  {
    id: 309,
    text: "Organ władzy w Polsce?",
  },
  {
    id: 310,
    text: "Co to jest Rzeczpospolita Polska",
  },
  {
    id: 311,
    text: "Stolica Polski?",
  },
  {
    id: 312,
    text: "Liczba ludności?",
  },
  {
    id: 313,
    text: "Polski Prezydent?",
  },
];

export default QUESTIONS_ARRAY;
