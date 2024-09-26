interface Country {
  name: string;
  code: string;
  flagUrl: string;
}

const countryData = [
  {
    name: "Afghanistan",
    code: "AF",
    flagUrl: "https://flagcdn.com/w80/af.png",
  },
  {
    name: "Albania",
    code: "AL",
    flagUrl: "https://flagcdn.com/w80/al.png",
  },
  {
    name: "Algeria",
    code: "DZ",
    flagUrl: "https://flagcdn.com/w80/dz.png",
  },
  {
    name: "Andorra",
    code: "AD",
    flagUrl: "https://flagcdn.com/w80/ad.png",
  },
  {
    name: "Angola",
    code: "AO",
    flagUrl: "https://flagcdn.com/w80/ao.png",
  },
  {
    name: "Antigua and Barbuda",
    code: "AG",
    flagUrl: "https://flagcdn.com/w80/ag.png",
  },
  {
    name: "Argentina",
    code: "AR",
    flagUrl: "https://flagcdn.com/w80/ar.png",
  },
  {
    name: "Armenia",
    code: "AM",
    flagUrl: "https://flagcdn.com/w80/am.png",
  },
  {
    name: "Australia",
    code: "AU",
    flagUrl: "https://flagcdn.com/w80/au.png",
  },
  {
    name: "Austria",
    code: "AT",
    flagUrl: "https://flagcdn.com/w80/at.png",
  },
  {
    name: "Azerbaijan",
    code: "AZ",
    flagUrl: "https://flagcdn.com/w80/az.png",
  },
  {
    name: "Bahamas",
    code: "BS",
    flagUrl: "https://flagcdn.com/w80/bs.png",
  },
  {
    name: "Bahrain",
    code: "BH",
    flagUrl: "https://flagcdn.com/w80/bh.png",
  },
  {
    name: "Bangladesh",
    code: "BD",
    flagUrl: "https://flagcdn.com/w80/bd.png",
  },
  {
    name: "Barbados",
    code: "BB",
    flagUrl: "https://flagcdn.com/w80/bb.png",
  },
  {
    name: "Belarus",
    code: "BY",
    flagUrl: "https://flagcdn.com/w80/by.png",
  },
  {
    name: "Belgium",
    code: "BE",
    flagUrl: "https://flagcdn.com/w80/be.png",
  },
  {
    name: "Belize",
    code: "BZ",
    flagUrl: "https://flagcdn.com/w80/bz.png",
  },
  {
    name: "Benin",
    code: "BJ",
    flagUrl: "https://flagcdn.com/w80/bj.png",
  },
  {
    name: "Bhutan",
    code: "BT",
    flagUrl: "https://flagcdn.com/w80/bt.png",
  },
  {
    name: "Bolivia",
    code: "BO",
    flagUrl: "https://flagcdn.com/w80/bo.png",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
    flagUrl: "https://flagcdn.com/w80/ba.png",
  },
  {
    name: "Botswana",
    code: "BW",
    flagUrl: "https://flagcdn.com/w80/bw.png",
  },
  {
    name: "Brazil",
    code: "BR",
    flagUrl: "https://flagcdn.com/w80/br.png",
  },
  {
    name: "Brunei",
    code: "BN",
    flagUrl: "https://flagcdn.com/w80/bn.png",
  },
  {
    name: "Bulgaria",
    code: "BG",
    flagUrl: "https://flagcdn.com/w80/bg.png",
  },
  {
    name: "Burkina Faso",
    code: "BF",
    flagUrl: "https://flagcdn.com/w80/bf.png",
  },
  {
    name: "Burundi",
    code: "BI",
    flagUrl: "https://flagcdn.com/w80/bi.png",
  },
  {
    name: "Cabo Verde",
    code: "CV",
    flagUrl: "https://flagcdn.com/w80/cv.png",
  },
  {
    name: "Cambodia",
    code: "KH",
    flagUrl: "https://flagcdn.com/w80/kh.png",
  },
  {
    name: "Cameroon",
    code: "CM",
    flagUrl: "https://flagcdn.com/w80/cm.png",
  },
  {
    name: "Canada",
    code: "CA",
    flagUrl: "https://flagcdn.com/w80/ca.png",
  },
  {
    name: "Central African Republic",
    code: "CF",
    flagUrl: "https://flagcdn.com/w80/cf.png",
  },
  {
    name: "Chad",
    code: "TD",
    flagUrl: "https://flagcdn.com/w80/td.png",
  },
  {
    name: "Chile",
    code: "CL",
    flagUrl: "https://flagcdn.com/w80/cl.png",
  },
  {
    name: "China",
    code: "CN",
    flagUrl: "https://flagcdn.com/w80/cn.png",
  },
  {
    name: "Colombia",
    code: "CO",
    flagUrl: "https://flagcdn.com/w80/co.png",
  },
  {
    name: "Comoros",
    code: "KM",
    flagUrl: "https://flagcdn.com/w80/km.png",
  },
  {
    name: "Congo (Congo-Brazzaville)",
    code: "CG",
    flagUrl: "https://flagcdn.com/w80/cg.png",
  },
  {
    name: "Costa Rica",
    code: "CR",
    flagUrl: "https://flagcdn.com/w80/cr.png",
  },
  {
    name: "Croatia",
    code: "HR",
    flagUrl: "https://flagcdn.com/w80/hr.png",
  },
  {
    name: "Cuba",
    code: "CU",
    flagUrl: "https://flagcdn.com/w80/cu.png",
  },
  {
    name: "Cyprus",
    code: "CY",
    flagUrl: "https://flagcdn.com/w80/cy.png",
  },
  {
    name: "Czechia (Czech Republic)",
    code: "CZ",
    flagUrl: "https://flagcdn.com/w80/cz.png",
  },
  {
    name: "Denmark",
    code: "DK",
    flagUrl: "https://flagcdn.com/w80/dk.png",
  },
  {
    name: "Djibouti",
    code: "DJ",
    flagUrl: "https://flagcdn.com/w80/dj.png",
  },
  {
    name: "Dominica",
    code: "DM",
    flagUrl: "https://flagcdn.com/w80/dm.png",
  },
  {
    name: "Dominican Republic",
    code: "DO",
    flagUrl: "https://flagcdn.com/w80/do.png",
  },
  {
    name: "Ecuador",
    code: "EC",
    flagUrl: "https://flagcdn.com/w80/ec.png",
  },
  {
    name: "Egypt",
    code: "EG",
    flagUrl: "https://flagcdn.com/w80/eg.png",
  },
  {
    name: "El Salvador",
    code: "SV",
    flagUrl: "https://flagcdn.com/w80/sv.png",
  },
  {
    name: "Equatorial Guinea",
    code: "GQ",
    flagUrl: "https://flagcdn.com/w80/gq.png",
  },
  {
    name: "Eritrea",
    code: "ER",
    flagUrl: "https://flagcdn.com/w80/er.png",
  },
  {
    name: "Estonia",
    code: "EE",
    flagUrl: "https://flagcdn.com/w80/ee.png",
  },
  {
    name: "Eswatini (fmr. 'Swaziland')",
    code: "SZ",
    flagUrl: "https://flagcdn.com/w80/sz.png",
  },
  {
    name: "Ethiopia",
    code: "ET",
    flagUrl: "https://flagcdn.com/w80/et.png",
  },
  {
    name: "Fiji",
    code: "FJ",
    flagUrl: "https://flagcdn.com/w80/fj.png",
  },
  {
    name: "Finland",
    code: "FI",
    flagUrl: "https://flagcdn.com/w80/fi.png",
  },
  {
    name: "France",
    code: "FR",
    flagUrl: "https://flagcdn.com/w80/fr.png",
  },
  {
    name: "Gabon",
    code: "GA",
    flagUrl: "https://flagcdn.com/w80/ga.png",
  },
  {
    name: "Gambia",
    code: "GM",
    flagUrl: "https://flagcdn.com/w80/gm.png",
  },
  {
    name: "Georgia",
    code: "GE",
    flagUrl: "https://flagcdn.com/w80/ge.png",
  },
  {
    name: "Germany",
    code: "DE",
    flagUrl: "https://flagcdn.com/w80/de.png",
  },
  {
    name: "Ghana",
    code: "GH",
    flagUrl: "https://flagcdn.com/w80/gh.png",
  },
  {
    name: "Greece",
    code: "GR",
    flagUrl: "https://flagcdn.com/w80/gr.png",
  },
  {
    name: "Grenada",
    code: "GD",
    flagUrl: "https://flagcdn.com/w80/gd.png",
  },
  {
    name: "Guatemala",
    code: "GT",
    flagUrl: "https://flagcdn.com/w80/gt.png",
  },
  {
    name: "Guinea",
    code: "GN",
    flagUrl: "https://flagcdn.com/w80/gn.png",
  },
  {
    name: "Guinea-Bissau",
    code: "GW",
    flagUrl: "https://flagcdn.com/w80/gw.png",
  },
  {
    name: "Guyana",
    code: "GY",
    flagUrl: "https://flagcdn.com/w80/gy.png",
  },
  {
    name: "Haiti",
    code: "HT",
    flagUrl: "https://flagcdn.com/w80/ht.png",
  },
  {
    name: "Honduras",
    code: "HN",
    flagUrl: "https://flagcdn.com/w80/hn.png",
  },
  {
    name: "Hungary",
    code: "HU",
    flagUrl: "https://flagcdn.com/w80/hu.png",
  },
  {
    name: "Iceland",
    code: "IS",
    flagUrl: "https://flagcdn.com/w80/is.png",
  },
  {
    name: "India",
    code: "IN",
    flagUrl: "https://flagcdn.com/w80/in.png",
  },
  {
    name: "Indonesia",
    code: "ID",
    flagUrl: "https://flagcdn.com/w80/id.png",
  },
  {
    name: "Iran",
    code: "IR",
    flagUrl: "https://flagcdn.com/w80/ir.png",
  },
  {
    name: "Iraq",
    code: "IQ",
    flagUrl: "https://flagcdn.com/w80/iq.png",
  },
  {
    name: "Ireland",
    code: "IE",
    flagUrl: "https://flagcdn.com/w80/ie.png",
  },
  {
    name: "Israel",
    code: "IL",
    flagUrl: "https://flagcdn.com/w80/il.png",
  },
  {
    name: "Italy",
    code: "IT",
    flagUrl: "https://flagcdn.com/w80/it.png",
  },
  {
    name: "Jamaica",
    code: "JM",
    flagUrl: "https://flagcdn.com/w80/jm.png",
  },
  {
    name: "Japan",
    code: "JP",
    flagUrl: "https://flagcdn.com/w80/jp.png",
  },
  {
    name: "Jordan",
    code: "JO",
    flagUrl: "https://flagcdn.com/w80/jo.png",
  },
  {
    name: "Kazakhstan",
    code: "KZ",
    flagUrl: "https://flagcdn.com/w80/kz.png",
  },
  {
    name: "Kenya",
    code: "KE",
    flagUrl: "https://flagcdn.com/w80/ke.png",
  },
  {
    name: "Kiribati",
    code: "KI",
    flagUrl: "https://flagcdn.com/w80/ki.png",
  },
  {
    name: "Kuwait",
    code: "KW",
    flagUrl: "https://flagcdn.com/w80/kw.png",
  },
  {
    name: "Kyrgyzstan",
    code: "KG",
    flagUrl: "https://flagcdn.com/w80/kg.png",
  },
  {
    name: "Laos",
    code: "LA",
    flagUrl: "https://flagcdn.com/w80/la.png",
  },
  {
    name: "Latvia",
    code: "LV",
    flagUrl: "https://flagcdn.com/w80/lv.png",
  },
  {
    name: "Lebanon",
    code: "LB",
    flagUrl: "https://flagcdn.com/w80/lb.png",
  },
  {
    name: "Lesotho",
    code: "LS",
    flagUrl: "https://flagcdn.com/w80/ls.png",
  },
  {
    name: "Liberia",
    code: "LR",
    flagUrl: "https://flagcdn.com/w80/lr.png",
  },
  {
    name: "Libya",
    code: "LY",
    flagUrl: "https://flagcdn.com/w80/ly.png",
  },
  {
    name: "Liechtenstein",
    code: "LI",
    flagUrl: "https://flagcdn.com/w80/li.png",
  },
  {
    name: "Lithuania",
    code: "LT",
    flagUrl: "https://flagcdn.com/w80/lt.png",
  },
  {
    name: "Luxembourg",
    code: "LU",
    flagUrl: "https://flagcdn.com/w80/lu.png",
  },
  {
    name: "Madagascar",
    code: "MG",
    flagUrl: "https://flagcdn.com/w80/mg.png",
  },
  {
    name: "Malawi",
    code: "MW",
    flagUrl: "https://flagcdn.com/w80/mw.png",
  },
  {
    name: "Malaysia",
    code: "MY",
    flagUrl: "https://flagcdn.com/w80/my.png",
  },
  {
    name: "Maldives",
    code: "MV",
    flagUrl: "https://flagcdn.com/w80/mv.png",
  },
  {
    name: "Mali",
    code: "ML",
    flagUrl: "https://flagcdn.com/w80/ml.png",
  },
  {
    name: "Malta",
    code: "MT",
    flagUrl: "https://flagcdn.com/w80/mt.png",
  },
  {
    name: "Marshall Islands",
    code: "MH",
    flagUrl: "https://flagcdn.com/w80/mh.png",
  },
  {
    name: "Mauritania",
    code: "MR",
    flagUrl: "https://flagcdn.com/w80/mr.png",
  },
  {
    name: "Mauritius",
    code: "MU",
    flagUrl: "https://flagcdn.com/w80/mu.png",
  },
  {
    name: "Mexico",
    code: "MX",
    flagUrl: "https://flagcdn.com/w80/mx.png",
  },
  {
    name: "Micronesia",
    code: "FM",
    flagUrl: "https://flagcdn.com/w80/fm.png",
  },
  {
    name: "Moldova",
    code: "MD",
    flagUrl: "https://flagcdn.com/w80/md.png",
  },
  {
    name: "Monaco",
    code: "MC",
    flagUrl: "https://flagcdn.com/w80/mc.png",
  },
  {
    name: "Mongolia",
    code: "MN",
    flagUrl: "https://flagcdn.com/w80/mn.png",
  },
  {
    name: "Montenegro",
    code: "ME",
    flagUrl: "https://flagcdn.com/w80/me.png",
  },
  {
    name: "Morocco",
    code: "MA",
    flagUrl: "https://flagcdn.com/w80/ma.png",
  },
  {
    name: "Mozambique",
    code: "MZ",
    flagUrl: "https://flagcdn.com/w80/mz.png",
  },
  {
    name: "Myanmar (formerly Burma)",
    code: "MM",
    flagUrl: "https://flagcdn.com/w80/mm.png",
  },
  {
    name: "Namibia",
    code: "NA",
    flagUrl: "https://flagcdn.com/w80/na.png",
  },
  {
    name: "Nauru",
    code: "NR",
    flagUrl: "https://flagcdn.com/w80/nr.png",
  },
  {
    name: "Nepal",
    code: "NP",
    flagUrl: "https://flagcdn.com/w80/np.png",
  },
  {
    name: "Netherlands",
    code: "NL",
    flagUrl: "https://flagcdn.com/w80/nl.png",
  },
  {
    name: "New Zealand",
    code: "NZ",
    flagUrl: "https://flagcdn.com/w80/nz.png",
  },
  {
    name: "Nicaragua",
    code: "NI",
    flagUrl: "https://flagcdn.com/w80/ni.png",
  },
  {
    name: "Niger",
    code: "NE",
    flagUrl: "https://flagcdn.com/w80/ne.png",
  },
  {
    name: "Nigeria",
    code: "NG",
    flagUrl: "https://flagcdn.com/w80/ng.png",
  },
  {
    name: "North Korea",
    code: "KP",
    flagUrl: "https://flagcdn.com/w80/kp.png",
  },
  {
    name: "North Macedonia",
    code: "MK",
    flagUrl: "https://flagcdn.com/w80/mk.png",
  },
  {
    name: "Norway",
    code: "NO",
    flagUrl: "https://flagcdn.com/w80/no.png",
  },
  {
    name: "Oman",
    code: "OM",
    flagUrl: "https://flagcdn.com/w80/om.png",
  },
  {
    name: "Pakistan",
    code: "PK",
    flagUrl: "https://flagcdn.com/w80/pk.png",
  },
  {
    name: "Palau",
    code: "PW",
    flagUrl: "https://flagcdn.com/w80/pw.png",
  },
  {
    name: "Panama",
    code: "PA",
    flagUrl: "https://flagcdn.com/w80/pa.png",
  },
  {
    name: "Papua New Guinea",
    code: "PG",
    flagUrl: "https://flagcdn.com/w80/pg.png",
  },
  {
    name: "Paraguay",
    code: "PY",
    flagUrl: "https://flagcdn.com/w80/py.png",
  },
  {
    name: "Peru",
    code: "PE",
    flagUrl: "https://flagcdn.com/w80/pe.png",
  },
  {
    name: "Philippines",
    code: "PH",
    flagUrl: "https://flagcdn.com/w80/ph.png",
  },
  {
    name: "Poland",
    code: "PL",
    flagUrl: "https://flagcdn.com/w80/pl.png",
  },
  {
    name: "Portugal",
    code: "PT",
    flagUrl: "https://flagcdn.com/w80/pt.png",
  },
  {
    name: "Qatar",
    code: "QA",
    flagUrl: "https://flagcdn.com/w80/qa.png",
  },
  {
    name: "Romania",
    code: "RO",
    flagUrl: "https://flagcdn.com/w80/ro.png",
  },
  {
    name: "Russia",
    code: "RU",
    flagUrl: "https://flagcdn.com/w80/ru.png",
  },
  {
    name: "Rwanda",
    code: "RW",
    flagUrl: "https://flagcdn.com/w80/rw.png",
  },
  {
    name: "Saint Kitts and Nevis",
    code: "KN",
    flagUrl: "https://flagcdn.com/w80/kn.png",
  },
  {
    name: "Saint Lucia",
    code: "LC",
    flagUrl: "https://flagcdn.com/w80/lc.png",
  },
  {
    name: "Saint Vincent and the Grenadines",
    code: "VC",
    flagUrl: "https://flagcdn.com/w80/vc.png",
  },
  {
    name: "Samoa",
    code: "WS",
    flagUrl: "https://flagcdn.com/w80/ws.png",
  },
  {
    name: "San Marino",
    code: "SM",
    flagUrl: "https://flagcdn.com/w80/sm.png",
  },
  {
    name: "Sao Tome and Principe",
    code: "ST",
    flagUrl: "https://flagcdn.com/w80/st.png",
  },
  {
    name: "Saudi Arabia",
    code: "SA",
    flagUrl: "https://flagcdn.com/w80/sa.png",
  },
  {
    name: "Senegal",
    code: "SN",
    flagUrl: "https://flagcdn.com/w80/sn.png",
  },
  {
    name: "Serbia",
    code: "RS",
    flagUrl: "https://flagcdn.com/w80/rs.png",
  },
  {
    name: "Seychelles",
    code: "SC",
    flagUrl: "https://flagcdn.com/w80/sc.png",
  },
  {
    name: "Sierra Leone",
    code: "SL",
    flagUrl: "https://flagcdn.com/w80/sl.png",
  },
  {
    name: "Singapore",
    code: "SG",
    flagUrl: "https://flagcdn.com/w80/sg.png",
  },
  {
    name: "Slovakia",
    code: "SK",
    flagUrl: "https://flagcdn.com/w80/sk.png",
  },
  {
    name: "Slovenia",
    code: "SI",
    flagUrl: "https://flagcdn.com/w80/si.png",
  },
  {
    name: "Solomon Islands",
    code: "SB",
    flagUrl: "https://flagcdn.com/w80/sb.png",
  },
  {
    name: "Somalia",
    code: "SO",
    flagUrl: "https://flagcdn.com/w80/so.png",
  },
  {
    name: "South Africa",
    code: "ZA",
    flagUrl: "https://flagcdn.com/w80/za.png",
  },
  {
    name: "South Korea",
    code: "KR",
    flagUrl: "https://flagcdn.com/w80/kr.png",
  },
  {
    name: "South Sudan",
    code: "SS",
    flagUrl: "https://flagcdn.com/w80/ss.png",
  },
  {
    name: "Spain",
    code: "ES",
    flagUrl: "https://flagcdn.com/w80/es.png",
  },
  {
    name: "Sri Lanka",
    code: "LK",
    flagUrl: "https://flagcdn.com/w80/lk.png",
  },
  {
    name: "Sudan",
    code: "SD",
    flagUrl: "https://flagcdn.com/w80/sd.png",
  },
  {
    name: "Suriname",
    code: "SR",
    flagUrl: "https://flagcdn.com/w80/sr.png",
  },
  {
    name: "Sweden",
    code: "SE",
    flagUrl: "https://flagcdn.com/w80/se.png",
  },
  {
    name: "Switzerland",
    code: "CH",
    flagUrl: "https://flagcdn.com/w80/ch.png",
  },
  {
    name: "Syria",
    code: "SY",
    flagUrl: "https://flagcdn.com/w80/sy.png",
  },
  {
    name: "Taiwan",
    code: "TW",
    flagUrl: "https://flagcdn.com/w80/tw.png",
  },
  {
    name: "Tajikistan",
    code: "TJ",
    flagUrl: "https://flagcdn.com/w80/tj.png",
  },
  {
    name: "Tanzania",
    code: "TZ",
    flagUrl: "https://flagcdn.com/w80/tz.png",
  },
  {
    name: "Thailand",
    code: "TH",
    flagUrl: "https://flagcdn.com/w80/th.png",
  },
  {
    name: "Timor-Leste",
    code: "TL",
    flagUrl: "https://flagcdn.com/w80/tl.png",
  },
  {
    name: "Togo",
    code: "TG",
    flagUrl: "https://flagcdn.com/w80/tg.png",
  },
  {
    name: "Tonga",
    code: "TO",
    flagUrl: "https://flagcdn.com/w80/to.png",
  },
  {
    name: "Trinidad and Tobago",
    code: "TT",
    flagUrl: "https://flagcdn.com/w80/tt.png",
  },
  {
    name: "Tunisia",
    code: "TN",
    flagUrl: "https://flagcdn.com/w80/tn.png",
  },
  {
    name: "Turkey",
    code: "TR",
    flagUrl: "https://flagcdn.com/w80/tr.png",
  },
  {
    name: "Turkmenistan",
    code: "TM",
    flagUrl: "https://flagcdn.com/w80/tm.png",
  },
  {
    name: "Tuvalu",
    code: "TV",
    flagUrl: "https://flagcdn.com/w80/tv.png",
  },
  {
    name: "Uganda",
    code: "UG",
    flagUrl: "https://flagcdn.com/w80/ug.png",
  },
  {
    name: "Ukraine",
    code: "UA",
    flagUrl: "https://flagcdn.com/w80/ua.png",
  },
  {
    name: "United Arab Emirates",
    code: "AE",
    flagUrl: "https://flagcdn.com/w80/ae.png",
  },
  {
    name: "United Kingdom",
    code: "GB",
    flagUrl: "https://flagcdn.com/w80/gb.png",
  },
  {
    name: "United States",
    code: "US",
    flagUrl: "https://flagcdn.com/w80/us.png",
  },
  {
    name: "Uruguay",
    code: "UY",
    flagUrl: "https://flagcdn.com/w80/uy.png",
  },
  {
    name: "Uzbekistan",
    code: "UZ",
    flagUrl: "https://flagcdn.com/w80/uz.png",
  },
  {
    name: "Vanuatu",
    code: "VU",
    flagUrl: "https://flagcdn.com/w80/vu.png",
  },
  {
    name: "Vatican City",
    code: "VA",
    flagUrl: "https://flagcdn.com/w80/va.png",
  },
  {
    name: "Venezuela",
    code: "VE",
    flagUrl: "https://flagcdn.com/w80/ve.png",
  },
  {
    name: "Vietnam",
    code: "VN",
    flagUrl: "https://flagcdn.com/w80/vn.png",
  },
  {
    name: "Yemen",
    code: "YE",
    flagUrl: "https://flagcdn.com/w80/ye.png",
  },
  {
    name: "Zambia",
    code: "ZM",
    flagUrl: "https://flagcdn.com/w80/zm.png",
  },
  {
    name: "Zimbabwe",
    code: "ZW",
    flagUrl: "https://flagcdn.com/w80/zw.png",
  },
];

export default countryData;
