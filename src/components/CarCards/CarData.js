const CarData = [
  {
    name: [
      "Touareg V6 3.0 4×4TDI Automat skóra xsenon klimatronic",
      "Zarejestrowany, 1,.4 benzyna, dwa komplety kół",
      "Fiat Bravo w pakiecie SPORT 1.4 T-JET 150KM 2-letnia instalacja LPG",
      "Hyundai I30 1.4 Classic, Darmowa dostawa",
      "Skoda Kamiq Skoda Kamiq Style 1.5 DSG",
      "BMW 3GT 320d xDrive GT",
      "Vw Golf 6 1.6Tdi 4 Motion Panorama",
      "Volvo XC 90 2020, T6, 4x4",
      "Ford Focus 2.0 TDCi Titanium",
      "Peugeot 207 1.6 benz. 2007r",
      "Mazda 6 2,0 benzyna 165Hp",
    ],
    age: [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
    vip: [false, false, false, false, false, false, true],
    countryOfOrigin: [
      "Polska",
      "Niemcy",
      "USA",
      "Francja",
      "Szwajcaria",
      "Włochy",
      "Wielka Brytania",
      "Austria",
      "Szwecja",
    ],
    mileage: [
      "100 000",
      "110 000",
      "120 000",
      "130 000",
      "140 000",
      "150 000",
      "160 000",
      "170 000",
    ],
    img: [
      "https://ireland.apollo.olxcdn.com/v1/files/sre41c9kuba72-PL/image;s=2000x0;q=50",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImdjZGhlYjNxMzN5aDEtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.Nid8nVA-t_gfABEvkJLk9Asn7XfY6xU8mABCgCLCF1s/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/xphixwprtxoq-PL/image;s=1000x700",
      "https://ireland.apollo.olxcdn.com/v1/files/u1lymrvo7nwi1-PL/image;s=1000x700",
      "https://ireland.apollo.olxcdn.com/v1/files/2oohex2d46872-PL/image;s=2000x0;q=50",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InBpb2Q2aXh4ZWtlMTMtT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.dtB6aPEA5c1mauhv88UJJI_LC4UiSo6veP3mhrI3D2Q/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImUwN2l2MnFqaDAyNjItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.F6nFr3IwNXSEX5gRAfr0CzsKxyhiAmK_ukPNR_qameY/image;s=1080x720",
      "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjJhaGE4NXlycDgwZDItT1RPTU9UT1BMIiwidyI6W3siZm4iOiJ3ZzRnbnFwNnkxZi1PVE9NT1RPUEwiLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.1ABQZuKxPulrpaexNxpW5_rGNKB5iT3CdpI-zXGBN3w/image;s=1080x720"
    ],
    verified: [true, false],
    city: [
      'Augustów',
      'Bartoszyce',
      'Bełchatów',
      'Będzin',
      'Biała Podlaska',
      'Białobrzegi',
      'Białogard',
      'Białystok',
      'Biecz',
      'Bielsk Podlaski',
      'Bielsko-Biała',
      'Bieruń',
      'Bochnia',
      'Bolesławiec',
      'Brodnica',
      'Brzeg',
      'Brzesko',
      'Busko-Zdrój',
      'Bydgoszcz',
      'Bytom',
      'Chełm',
      'Chełmek',
      'Chojnice',
      'Chorzów',
      'Ciechanów',
      'Ciechocinek',
      'Cieszyn',
      'Czaplinek',
      'Czarnków',
      'Czechowice-Dziedzice',
      'Czeladź',
      'Częstochowa',
      'Człuchów',
      'Dąbrowa Górnicza',
      'Dębica',
      'Dęblin',
      'Działdowo',
      'Działoszyce',
      'Dzierżoniów',
      'Elbląg',
      'Ełk',
      'Gdańsk',
      'Gdynia',
      'Giżycko',
      'Gliwice',
      'Głogów',
      'Gniezno',
      'Gorlice',
      'Gorzów Wielkopolski',
      'Gostyń',
      'Grodzisk Mazowiecki',
      'Grójec',
      'Grudziądz',
      'Hrubieszów',
      'Iława',
      'Imielin',
      'Inowrocław',
      'Jarocin',
      'Jarosław',
      'Jasło',
      'Jastrzębie-Zdrój',
      'Jaworzno',
      'Jelenia Góra',
      'Józefów',
      'Kalisz',
      'Kamienna Góra',
      'Kamień Pomorski',
      'Karpacz',
      'Kartuzy',
      'Katowice',
      'Kąty Wrocławskie',
      'Kędzierzyn-Koźle',
      'Kępno',
      'Kętrzyn',
      'Kielce',
      'Kłodzko',
      'Koło',
      'Kołobrzeg',
      'Konin',
      'Końskie',
      'Koszalin',
      'Kościan',
      'Kościerzyna',
      'Kozienice',
      'Koźmin Wielkopolski',
      'Kórnik',
      'Kraków',
      'Kraśnik',
      'Krosno',
      'Krotoszyn',
      'Krzanowice',
      'Kutno',
      'Kwidzyn',
      'Legionowo',
      'Legnica',
      'Leszno',
      'Leżajsk',
      'Lębork',
      'Libiąż',
      'Lidzbark Warmiński',
      'Limanowa',
      'Lipno',
      'Lubań',
      'Lubin',
      'Lublin',
      'Lubliniec',
      'Łańcut',
      'Łapy',
      'Łęczyca',
      'Łomianki',
      'Łomża',
      'Łódź',
      'Łuków',
      'Malbork',
      'Mielec',
      'Międzyrzecz',
      'Międzyzdroje',
      'Mikołajki',
      'Mikołów',
      'Milicz',
      'Mińsk Mazowiecki',
      'Mława',
      'Morąg',
      'Mosina',
      'Mrągowo',
      'Mszana Dolna',
      'Mszczonów',
      'Mysłowice',
      'Myślenice',
      'Namysłów',
      'Nowa Sól',
      'Nowe Miasto Lubawskie',
      'Nowy Dwór Mazowiecki',
      'Nowy Sącz',
      'Nowy Targ',
      'Nowy Tomyśl',
      'Nysa',
      'Oborniki',
      'Oborniki Śląskie',
      'Olecko',
      'Oleśnica',
      'Olkusz',
      'Olsztyn',
      'Oława',
      'Opole',
      'Ostrołęka',
      'Ostrowiec Świętokrzyski',
      'Ostróda',
      'Ostrów Mazowiecka',
      'Ostrów Wielkopolski',
      'Ostrzeszów',
      'Oświęcim',
      'Otwock',
      'Pabianice',
      'Piaseczno',
      'Piła',
      'Piotrków Trybunalski',
      'Pisz',
      'Pleszew',
      'Płock',
      'Płońsk',
      'Pniewy',
      'Polkowice',
      'Poznań',
      'Pruszcz Gdański',
      'Pruszków',
      'Przemyśl',
      'Pszczyna',
      'Puławy',
      'Pułtusk',
      'Racibórz',
      'Radlin',
      'Radom',
      'Radomsko',
      'Radzymin',
      'Rawa Mazowiecka',
      'Reda',
      'Ruda Śląska',
      'Rumia',
      'Rybnik',
      'Rzepin',
      'Rzeszów',
      'Sandomierz',
      'Sanok',
      'Serock',
      'Sędziszów',
      'Siedlce',
      'Siemianowice Śląskie',
      'Sieradz',
      'Skarżysko-Kamienna',
      'Skierniewice',
      'Słubice',
      'Słupca',
      'Słupsk',
      'Sopot',
      'Sosnowiec',
      'Stalowa Wola',
      'Starachowice',
      'Stargard',
      'Starogard Gdański',
      'Strzegom',
      'Sucha Beskidzka',
      'Sulechów',
      'Sulejów',
      'Suwałki',
      'Szamotuły',
      'Szczecin',
      'Szczecinek',
      'Szczyrk',
      'Szczytno',
      'Środa Wielkopolska',
      'Świdnica',
      'Świebodzice',
      'Świebodzin',
      'Świecie',
      'Świętochłowice',
      'Świnoujście',
      'Tarczyn',
      'Tarnowskie Góry',
      'Tarnów',
      'Tczew',
      'Tomaszów Mazowiecki',
      'Toruń',
      'Tychy',
      'Ustka',
      'Ustroń',
      'Wadowice',
      'Wałbrzych',
      'Wałcz',
      'Warszawa',
      'Wągrowiec',
      'Wejherowo',
      'Węgorzewo',
      'Węgrów',
      'Wieluń',
      'Wisła',
      'Władysławowo',
      'Włocławek',
      'Wodzisław Śląski',
      'Wolsztyn',
      'Wołomin',
      'Wrocław',
      'Września',
      'Wyszków',
      'Zabrze',
      'Zakopane',
      'Zambrów',
      'Zamość',
      'Zawiercie',
      'Ząbki',
      'Zduńska Wola',
      'Zgierz',
      'Zgorzelec',
      'Zielona Góra',
      'Złotów',
      'Żagań',
      'Żary',
      'Żory',
      'Żyrardów',
    ],
  },
];

export default CarData;
