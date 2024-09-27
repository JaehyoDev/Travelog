interface Country {
  code: string;
  name: string;
  flagUrl: string;
}

const countryData = [
  {
    code: "AF",
    name: "Afghanistan",
    flagUrl: "https://flagcdn.com/w80/af.png",
  },
  {
    code: "AL",
    name: "Albania",
    flagUrl: "https://flagcdn.com/w80/al.png",
  },
  {
    code: "DZ",
    name: "Algeria",
    flagUrl: "https://flagcdn.com/w80/dz.png",
  },
  {
    code: "AD",
    name: "Andorra",
    flagUrl: "https://flagcdn.com/w80/ad.png",
  },
  {
    code: "AO",
    name: "Angola",
    flagUrl: "https://flagcdn.com/w80/ao.png",
  },
  {
    code: "AG",
    name: "Antigua and Barbuda",
    flagUrl: "https://flagcdn.com/w80/ag.png",
  },
  {
    code: "AR",
    name: "Argentina",
    flagUrl: "https://flagcdn.com/w80/ar.png",
  },
  {
    code: "AM",
    name: "Armenia",
    flagUrl: "https://flagcdn.com/w80/am.png",
  },
  {
    code: "AU",
    name: "Australia",
    flagUrl: "https://flagcdn.com/w80/au.png",
  },
  {
    code: "AT",
    name: "Austria",
    flagUrl: "https://flagcdn.com/w80/at.png",
  },
  {
    code: "AZ",
    name: "Azerbaijan",
    flagUrl: "https://flagcdn.com/w80/az.png",
  },
  {
    code: "BS",
    name: "Bahamas",
    flagUrl: "https://flagcdn.com/w80/bs.png",
  },
  {
    code: "BH",
    name: "Bahrain",
    flagUrl: "https://flagcdn.com/w80/bh.png",
  },
  {
    code: "BD",
    name: "Bangladesh",
    flagUrl: "https://flagcdn.com/w80/bd.png",
  },
  {
    code: "BB",
    name: "Barbados",
    flagUrl: "https://flagcdn.com/w80/bb.png",
  },
  {
    code: "BY",
    name: "Belarus",
    flagUrl: "https://flagcdn.com/w80/by.png",
  },
  {
    code: "BE",
    name: "Belgium",
    flagUrl: "https://flagcdn.com/w80/be.png",
  },
  {
    code: "BZ",
    name: "Belize",
    flagUrl: "https://flagcdn.com/w80/bz.png",
  },
  {
    code: "BJ",
    name: "Benin",
    flagUrl: "https://flagcdn.com/w80/bj.png",
  },
  {
    code: "BT",
    name: "Bhutan",
    flagUrl: "https://flagcdn.com/w80/bt.png",
  },
  {
    code: "BO",
    name: "Bolivia",
    flagUrl: "https://flagcdn.com/w80/bo.png",
  },
  {
    code: "BA",
    name: "Bosnia and Herzegovina",
    flagUrl: "https://flagcdn.com/w80/ba.png",
  },
  {
    code: "BW",
    name: "Botswana",
    flagUrl: "https://flagcdn.com/w80/bw.png",
  },
  {
    code: "BR",
    name: "Brazil",
    flagUrl: "https://flagcdn.com/w80/br.png",
  },
  {
    code: "BN",
    name: "Brunei",
    flagUrl: "https://flagcdn.com/w80/bn.png",
  },
  {
    code: "BG",
    name: "Bulgaria",
    flagUrl: "https://flagcdn.com/w80/bg.png",
  },
  {
    code: "BF",
    name: "Burkina Faso",
    flagUrl: "https://flagcdn.com/w80/bf.png",
  },
  {
    code: "BI",
    name: "Burundi",
    flagUrl: "https://flagcdn.com/w80/bi.png",
  },
  {
    code: "CV",
    name: "Cabo Verde",
    flagUrl: "https://flagcdn.com/w80/cv.png",
  },
  {
    code: "KH",
    name: "Cambodia",
    flagUrl: "https://flagcdn.com/w80/kh.png",
  },
  {
    code: "CM",
    name: "Cameroon",
    flagUrl: "https://flagcdn.com/w80/cm.png",
  },
  {
    code: "CA",
    name: "Canada",
    flagUrl: "https://flagcdn.com/w80/ca.png",
  },
  {
    code: "CF",
    name: "Central African Republic",
    flagUrl: "https://flagcdn.com/w80/cf.png",
  },
  {
    code: "TD",
    name: "Chad",
    flagUrl: "https://flagcdn.com/w80/td.png",
  },
  {
    code: "CL",
    name: "Chile",
    flagUrl: "https://flagcdn.com/w80/cl.png",
  },
  {
    code: "CN",
    name: "China",
    flagUrl: "https://flagcdn.com/w80/cn.png",
  },
  {
    code: "CO",
    name: "Colombia",
    flagUrl: "https://flagcdn.com/w80/co.png",
  },
  {
    code: "KM",
    name: "Comoros",
    flagUrl: "https://flagcdn.com/w80/km.png",
  },
  {
    code: "CG",
    name: "Congo (Congo-Brazzaville)",
    flagUrl: "https://flagcdn.com/w80/cg.png",
  },
  {
    code: "CR",
    name: "Costa Rica",
    flagUrl: "https://flagcdn.com/w80/cr.png",
  },
  {
    code: "HR",
    name: "Croatia",
    flagUrl: "https://flagcdn.com/w80/hr.png",
  },
  {
    code: "CU",
    name: "Cuba",
    flagUrl: "https://flagcdn.com/w80/cu.png",
  },
  {
    code: "CY",
    name: "Cyprus",
    flagUrl: "https://flagcdn.com/w80/cy.png",
  },
  {
    code: "CZ",
    name: "Czechia (Czech Republic)",
    flagUrl: "https://flagcdn.com/w80/cz.png",
  },
  {
    code: "DK",
    name: "Denmark",
    flagUrl: "https://flagcdn.com/w80/dk.png",
  },
  {
    code: "DJ",
    name: "Djibouti",
    flagUrl: "https://flagcdn.com/w80/dj.png",
  },
  {
    code: "DM",
    name: "Dominica",
    flagUrl: "https://flagcdn.com/w80/dm.png",
  },
  {
    code: "DO",
    name: "Dominican Republic",
    flagUrl: "https://flagcdn.com/w80/do.png",
  },
  {
    code: "EC",
    name: "Ecuador",
    flagUrl: "https://flagcdn.com/w80/ec.png",
  },
  {
    code: "EG",
    name: "Egypt",
    flagUrl: "https://flagcdn.com/w80/eg.png",
  },
  {
    code: "SV",
    name: "El Salvador",
    flagUrl: "https://flagcdn.com/w80/sv.png",
  },
  {
    code: "GQ",
    name: "Equatorial Guinea",
    flagUrl: "https://flagcdn.com/w80/gq.png",
  },
  {
    code: "ER",
    name: "Eritrea",
    flagUrl: "https://flagcdn.com/w80/er.png",
  },
  {
    code: "EE",
    name: "Estonia",
    flagUrl: "https://flagcdn.com/w80/ee.png",
  },
  {
    code: "SZ",
    name: "Eswatini (fmr. 'Swaziland')",
    flagUrl: "https://flagcdn.com/w80/sz.png",
  },
  {
    code: "ET",
    name: "Ethiopia",
    flagUrl: "https://flagcdn.com/w80/et.png",
  },
  {
    code: "FJ",
    name: "Fiji",
    flagUrl: "https://flagcdn.com/w80/fj.png",
  },
  {
    code: "FI",
    name: "Finland",
    flagUrl: "https://flagcdn.com/w80/fi.png",
  },
  {
    code: "FR",
    name: "France",
    flagUrl: "https://flagcdn.com/w80/fr.png",
  },
  {
    code: "GA",
    name: "Gabon",
    flagUrl: "https://flagcdn.com/w80/ga.png",
  },
  {
    code: "GM",
    name: "Gambia",
    flagUrl: "https://flagcdn.com/w80/gm.png",
  },
  {
    code: "GE",
    name: "Georgia",
    flagUrl: "https://flagcdn.com/w80/ge.png",
  },
  {
    code: "DE",
    name: "Germany",
    flagUrl: "https://flagcdn.com/w80/de.png",
  },
  {
    code: "GH",
    name: "Ghana",
    flagUrl: "https://flagcdn.com/w80/gh.png",
  },
  {
    code: "GR",
    name: "Greece",
    flagUrl: "https://flagcdn.com/w80/gr.png",
  },
  {
    code: "GD",
    name: "Grenada",
    flagUrl: "https://flagcdn.com/w80/gd.png",
  },
  {
    code: "GT",
    name: "Guatemala",
    flagUrl: "https://flagcdn.com/w80/gt.png",
  },
  {
    code: "GN",
    name: "Guinea",
    flagUrl: "https://flagcdn.com/w80/gn.png",
  },
  {
    code: "GW",
    name: "Guinea-Bissau",
    flagUrl: "https://flagcdn.com/w80/gw.png",
  },
  {
    code: "GY",
    name: "Guyana",
    flagUrl: "https://flagcdn.com/w80/gy.png",
  },
  {
    code: "HT",
    name: "Haiti",
    flagUrl: "https://flagcdn.com/w80/ht.png",
  },
  {
    code: "HN",
    name: "Honduras",
    flagUrl: "https://flagcdn.com/w80/hn.png",
  },
  {
    code: "HU",
    name: "Hungary",
    flagUrl: "https://flagcdn.com/w80/hu.png",
  },
  {
    code: "IS",
    name: "Iceland",
    flagUrl: "https://flagcdn.com/w80/is.png",
  },
  {
    code: "IN",
    name: "India",
    flagUrl: "https://flagcdn.com/w80/in.png",
  },
  {
    code: "ID",
    name: "Indonesia",
    flagUrl: "https://flagcdn.com/w80/id.png",
  },
  {
    code: "IR",
    name: "Iran",
    flagUrl: "https://flagcdn.com/w80/ir.png",
  },
  {
    code: "IQ",
    name: "Iraq",
    flagUrl: "https://flagcdn.com/w80/iq.png",
  },
  {
    code: "IE",
    name: "Ireland",
    flagUrl: "https://flagcdn.com/w80/ie.png",
  },
  {
    code: "IL",
    name: "Israel",
    flagUrl: "https://flagcdn.com/w80/il.png",
  },
  {
    code: "IT",
    name: "Italy",
    flagUrl: "https://flagcdn.com/w80/it.png",
  },
  {
    code: "JM",
    name: "Jamaica",
    flagUrl: "https://flagcdn.com/w80/jm.png",
  },
  {
    code: "JP",
    name: "Japan",
    flagUrl: "https://flagcdn.com/w80/jp.png",
  },
  {
    code: "JE",
    name: "Jersey",
    flagUrl: "https://flagcdn.com/w80/je.png",
  },
  {
    code: "JO",
    name: "Jordan",
    flagUrl: "https://flagcdn.com/w80/jo.png",
  },
  {
    code: "KZ",
    name: "Kazakhstan",
    flagUrl: "https://flagcdn.com/w80/kz.png",
  },
  {
    code: "KE",
    name: "Kenya",
    flagUrl: "https://flagcdn.com/w80/ke.png",
  },
  {
    code: "KI",
    name: "Kiribati",
    flagUrl: "https://flagcdn.com/w80/ki.png",
  },
  {
    code: "KP",
    name: "North Korea",
    flagUrl: "https://flagcdn.com/w80/kp.png",
  },
  {
    code: "KW",
    name: "Kuwait",
    flagUrl: "https://flagcdn.com/w80/kw.png",
  },
  {
    code: "KG",
    name: "Kyrgyzstan",
    flagUrl: "https://flagcdn.com/w80/kg.png",
  },
  {
    code: "LA",
    name: "Laos",
    flagUrl: "https://flagcdn.com/w80/la.png",
  },
  {
    code: "LV",
    name: "Latvia",
    flagUrl: "https://flagcdn.com/w80/lv.png",
  },
  {
    code: "LB",
    name: "Lebanon",
    flagUrl: "https://flagcdn.com/w80/lb.png",
  },
  {
    code: "LS",
    name: "Lesotho",
    flagUrl: "https://flagcdn.com/w80/ls.png",
  },
  {
    code: "LR",
    name: "Liberia",
    flagUrl: "https://flagcdn.com/w80/lr.png",
  },
  {
    code: "LY",
    name: "Libya",
    flagUrl: "https://flagcdn.com/w80/ly.png",
  },
  {
    code: "LI",
    name: "Liechtenstein",
    flagUrl: "https://flagcdn.com/w80/li.png",
  },
  {
    code: "LT",
    name: "Lithuania",
    flagUrl: "https://flagcdn.com/w80/lt.png",
  },
  {
    code: "LU",
    name: "Luxembourg",
    flagUrl: "https://flagcdn.com/w80/lu.png",
  },
  {
    code: "MG",
    name: "Madagascar",
    flagUrl: "https://flagcdn.com/w80/mg.png",
  },
  {
    code: "MW",
    name: "Malawi",
    flagUrl: "https://flagcdn.com/w80/mw.png",
  },
  {
    code: "MY",
    name: "Malaysia",
    flagUrl: "https://flagcdn.com/w80/my.png",
  },
  {
    code: "MV",
    name: "Maldives",
    flagUrl: "https://flagcdn.com/w80/mv.png",
  },
  {
    code: "ML",
    name: "Mali",
    flagUrl: "https://flagcdn.com/w80/ml.png",
  },
  {
    code: "MT",
    name: "Malta",
    flagUrl: "https://flagcdn.com/w80/mt.png",
  },
  {
    code: "MH",
    name: "Marshall Islands",
    flagUrl: "https://flagcdn.com/w80/mh.png",
  },
  {
    code: "MR",
    name: "Mauritania",
    flagUrl: "https://flagcdn.com/w80/mr.png",
  },
  {
    code: "MU",
    name: "Mauritius",
    flagUrl: "https://flagcdn.com/w80/mu.png",
  },
  {
    code: "MX",
    name: "Mexico",
    flagUrl: "https://flagcdn.com/w80/mx.png",
  },
  {
    code: "FM",
    name: "Micronesia",
    flagUrl: "https://flagcdn.com/w80/fm.png",
  },
  {
    code: "MD",
    name: "Moldova",
    flagUrl: "https://flagcdn.com/w80/md.png",
  },
  {
    code: "MC",
    name: "Monaco",
    flagUrl: "https://flagcdn.com/w80/mc.png",
  },
  {
    code: "MN",
    name: "Mongolia",
    flagUrl: "https://flagcdn.com/w80/mn.png",
  },
  {
    code: "ME",
    name: "Montenegro",
    flagUrl: "https://flagcdn.com/w80/me.png",
  },
  {
    code: "MA",
    name: "Morocco",
    flagUrl: "https://flagcdn.com/w80/ma.png",
  },
  {
    code: "MZ",
    name: "Mozambique",
    flagUrl: "https://flagcdn.com/w80/mz.png",
  },
  {
    code: "MM",
    name: "Myanmar (formerly Burma)",
    flagUrl: "https://flagcdn.com/w80/mm.png",
  },
  {
    code: "NA",
    name: "Namibia",
    flagUrl: "https://flagcdn.com/w80/na.png",
  },
  {
    code: "NR",
    name: "Nauru",
    flagUrl: "https://flagcdn.com/w80/nr.png",
  },
  {
    code: "NP",
    name: "Nepal",
    flagUrl: "https://flagcdn.com/w80/np.png",
  },
  {
    code: "NL",
    name: "Netherlands",
    flagUrl: "https://flagcdn.com/w80/nl.png",
  },
  {
    code: "NZ",
    name: "New Zealand",
    flagUrl: "https://flagcdn.com/w80/nz.png",
  },
  {
    code: "NI",
    name: "Nicaragua",
    flagUrl: "https://flagcdn.com/w80/ni.png",
  },
  {
    code: "NE",
    name: "Niger",
    flagUrl: "https://flagcdn.com/w80/ne.png",
  },
  {
    code: "NG",
    name: "Nigeria",
    flagUrl: "https://flagcdn.com/w80/ng.png",
  },
  {
    code: "MK",
    name: "North Macedonia",
    flagUrl: "https://flagcdn.com/w80/mk.png",
  },
  {
    code: "NO",
    name: "Norway",
    flagUrl: "https://flagcdn.com/w80/no.png",
  },
  {
    code: "OM",
    name: "Oman",
    flagUrl: "https://flagcdn.com/w80/om.png",
  },
  {
    code: "PK",
    name: "Pakistan",
    flagUrl: "https://flagcdn.com/w80/pk.png",
  },
  {
    code: "PW",
    name: "Palau",
    flagUrl: "https://flagcdn.com/w80/pw.png",
  },
  {
    code: "PS",
    name: "Palestine State",
    flagUrl: "https://flagcdn.com/w80/ps.png",
  },
  {
    code: "PA",
    name: "Panama",
    flagUrl: "https://flagcdn.com/w80/pa.png",
  },
  {
    code: "PG",
    name: "Papua New Guinea",
    flagUrl: "https://flagcdn.com/w80/pg.png",
  },
  {
    code: "PY",
    name: "Paraguay",
    flagUrl: "https://flagcdn.com/w80/py.png",
  },
  {
    code: "PE",
    name: "Peru",
    flagUrl: "https://flagcdn.com/w80/pe.png",
  },
  {
    code: "PH",
    name: "Philippines",
    flagUrl: "https://flagcdn.com/w80/ph.png",
  },
  {
    code: "PL",
    name: "Poland",
    flagUrl: "https://flagcdn.com/w80/pl.png",
  },
  {
    code: "PT",
    name: "Portugal",
    flagUrl: "https://flagcdn.com/w80/pt.png",
  },
  {
    code: "QA",
    name: "Qatar",
    flagUrl: "https://flagcdn.com/w80/qa.png",
  },
  {
    code: "RE",
    name: "Réunion",
    flagUrl: "https://flagcdn.com/w80/re.png",
  },
  {
    code: "RO",
    name: "Romania",
    flagUrl: "https://flagcdn.com/w80/ro.png",
  },
  {
    code: "RU",
    name: "Russia",
    flagUrl: "https://flagcdn.com/w80/ru.png",
  },
  {
    code: "RW",
    name: "Rwanda",
    flagUrl: "https://flagcdn.com/w80/rw.png",
  },
  {
    code: "WS",
    name: "Samoa",
    flagUrl: "https://flagcdn.com/w80/ws.png",
  },
  {
    code: "SM",
    name: "San Marino",
    flagUrl: "https://flagcdn.com/w80/sm.png",
  },
  {
    code: "ST",
    name: "Sao Tome and Principe",
    flagUrl: "https://flagcdn.com/w80/st.png",
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    flagUrl: "https://flagcdn.com/w80/sa.png",
  },
  {
    code: "SN",
    name: "Senegal",
    flagUrl: "https://flagcdn.com/w80/sn.png",
  },
  {
    code: "RS",
    name: "Serbia",
    flagUrl: "https://flagcdn.com/w80/rs.png",
  },
  {
    code: "SC",
    name: "Seychelles",
    flagUrl: "https://flagcdn.com/w80/sc.png",
  },
  {
    code: "SL",
    name: "Sierra Leone",
    flagUrl: "https://flagcdn.com/w80/sl.png",
  },
  {
    code: "SG",
    name: "Singapore",
    flagUrl: "https://flagcdn.com/w80/sg.png",
  },
  {
    code: "SK",
    name: "Slovakia",
    flagUrl: "https://flagcdn.com/w80/sk.png",
  },
  {
    code: "SI",
    name: "Slovenia",
    flagUrl: "https://flagcdn.com/w80/si.png",
  },
  {
    code: "SB",
    name: "Solomon Islands",
    flagUrl: "https://flagcdn.com/w80/sb.png",
  },
  {
    code: "SO",
    name: "Somalia",
    flagUrl: "https://flagcdn.com/w80/so.png",
  },
  {
    code: "ZA",
    name: "South Africa",
    flagUrl: "https://flagcdn.com/w80/za.png",
  },
  {
    code: "KR",
    name: "South Korea",
    flagUrl: "https://flagcdn.com/w80/kr.png",
  },
  {
    code: "SS",
    name: "South Sudan",
    flagUrl: "https://flagcdn.com/w80/ss.png",
  },
  {
    code: "ES",
    name: "Spain",
    flagUrl: "https://flagcdn.com/w80/es.png",
  },
  {
    code: "LK",
    name: "Sri Lanka",
    flagUrl: "https://flagcdn.com/w80/lk.png",
  },
  {
    code: "SD",
    name: "Sudan",
    flagUrl: "https://flagcdn.com/w80/sd.png",
  },
  {
    code: "SR",
    name: "Suriname",
    flagUrl: "https://flagcdn.com/w80/sr.png",
  },
  {
    code: "SZ",
    name: "Swaziland",
    flagUrl: "https://flagcdn.com/w80/sz.png",
  },
  {
    code: "SE",
    name: "Sweden",
    flagUrl: "https://flagcdn.com/w80/se.png",
  },
  {
    code: "CH",
    name: "Switzerland",
    flagUrl: "https://flagcdn.com/w80/ch.png",
  },
  {
    code: "SY",
    name: "Syria",
    flagUrl: "https://flagcdn.com/w80/sy.png",
  },
  {
    code: "TW",
    name: "Taiwan",
    flagUrl: "https://flagcdn.com/w80/tw.png",
  },
  {
    code: "TJ",
    name: "Tajikistan",
    flagUrl: "https://flagcdn.com/w80/tj.png",
  },
  {
    code: "TZ",
    name: "Tanzania",
    flagUrl: "https://flagcdn.com/w80/tz.png",
  },
  {
    code: "TH",
    name: "Thailand",
    flagUrl: "https://flagcdn.com/w80/th.png",
  },
  {
    code: "TG",
    name: "Togo",
    flagUrl: "https://flagcdn.com/w80/tg.png",
  },
  {
    code: "TK",
    name: "Tokelau",
    flagUrl: "https://flagcdn.com/w80/tk.png",
  },
  {
    code: "TO",
    name: "Tonga",
    flagUrl: "https://flagcdn.com/w80/to.png",
  },
  {
    code: "TT",
    name: "Trinidad and Tobago",
    flagUrl: "https://flagcdn.com/w80/tt.png",
  },
  {
    code: "TN",
    name: "Tunisia",
    flagUrl: "https://flagcdn.com/w80/tn.png",
  },
  {
    code: "TR",
    name: "Turkey",
    flagUrl: "https://flagcdn.com/w80/tr.png",
  },
  {
    code: "TM",
    name: "Turkmenistan",
    flagUrl: "https://flagcdn.com/w80/tm.png",
  },
  {
    code: "TV",
    name: "Tuvalu",
    flagUrl: "https://flagcdn.com/w80/tv.png",
  },
  {
    code: "UG",
    name: "Uganda",
    flagUrl: "https://flagcdn.com/w80/ug.png",
  },
  {
    code: "UA",
    name: "Ukraine",
    flagUrl: "https://flagcdn.com/w80/ua.png",
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    flagUrl: "https://flagcdn.com/w80/ae.png",
  },
  {
    code: "GB",
    name: "United Kingdom",
    flagUrl: "https://flagcdn.com/w80/gb.png",
  },
  {
    code: "US",
    name: "United States",
    flagUrl: "https://flagcdn.com/w80/us.png",
  },
  {
    code: "UY",
    name: "Uruguay",
    flagUrl: "https://flagcdn.com/w80/uy.png",
  },
  {
    code: "UZ",
    name: "Uzbekistan",
    flagUrl: "https://flagcdn.com/w80/uz.png",
  },
  {
    code: "VU",
    name: "Vanuatu",
    flagUrl: "https://flagcdn.com/w80/vu.png",
  },
  {
    code: "VE",
    name: "Venezuela",
    flagUrl: "https://flagcdn.com/w80/ve.png",
  },
  {
    code: "VN",
    name: "Vietnam",
    flagUrl: "https://flagcdn.com/w80/vn.png",
  },
  {
    code: "WF",
    name: "Wallis and Futuna",
    flagUrl: "https://flagcdn.com/w80/wf.png",
  },
  {
    code: "EH",
    name: "Western Sahara",
    flagUrl: "https://flagcdn.com/w80/eh.png",
  },
  {
    code: "YE",
    name: "Yemen",
    flagUrl: "https://flagcdn.com/w80/ye.png",
  },
  {
    code: "ZM",
    name: "Zambia",
    flagUrl: "https://flagcdn.com/w80/zm.png",
  },
  {
    code: "ZW",
    name: "Zimbabwe",
    flagUrl: "https://flagcdn.com/w80/zw.png",
  },
];

export default countryData;
