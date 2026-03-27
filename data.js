// ═══════════════ BIBLE DATA ═══════════════
var genreLabels = {
  law:"Law",history:"History",poetry:"Poetry","major-prophets":"Major Prophets","minor-prophets":"Minor Prophets",
  gospels:"Gospels",acts:"Acts",pauline:"Pauline Epistles",general:"General Epistles",apocalyptic:"Apocalyptic"
};

var books = [
  {name:"Genesis",abbr:"GEN",chapters:50,verses:1533,genre:"law",testament:"OT",order:1},
  {name:"Exodus",abbr:"EXO",chapters:40,verses:1213,genre:"law",testament:"OT",order:2},
  {name:"Leviticus",abbr:"LEV",chapters:27,verses:859,genre:"law",testament:"OT",order:3},
  {name:"Numbers",abbr:"NUM",chapters:36,verses:1288,genre:"law",testament:"OT",order:4},
  {name:"Deuteronomy",abbr:"DEU",chapters:34,verses:959,genre:"law",testament:"OT",order:5},
  {name:"Joshua",abbr:"JOS",chapters:24,verses:658,genre:"history",testament:"OT",order:6},
  {name:"Judges",abbr:"JDG",chapters:21,verses:618,genre:"history",testament:"OT",order:7},
  {name:"Ruth",abbr:"RUT",chapters:4,verses:85,genre:"history",testament:"OT",order:8},
  {name:"1 Samuel",abbr:"1SA",chapters:31,verses:810,genre:"history",testament:"OT",order:9},
  {name:"2 Samuel",abbr:"2SA",chapters:24,verses:695,genre:"history",testament:"OT",order:10},
  {name:"1 Kings",abbr:"1KI",chapters:22,verses:816,genre:"history",testament:"OT",order:11},
  {name:"2 Kings",abbr:"2KI",chapters:25,verses:719,genre:"history",testament:"OT",order:12},
  {name:"1 Chronicles",abbr:"1CH",chapters:29,verses:942,genre:"history",testament:"OT",order:13},
  {name:"2 Chronicles",abbr:"2CH",chapters:36,verses:822,genre:"history",testament:"OT",order:14},
  {name:"Ezra",abbr:"EZR",chapters:10,verses:280,genre:"history",testament:"OT",order:15},
  {name:"Nehemiah",abbr:"NEH",chapters:13,verses:406,genre:"history",testament:"OT",order:16},
  {name:"Esther",abbr:"EST",chapters:10,verses:167,genre:"history",testament:"OT",order:17},
  {name:"Job",abbr:"JOB",chapters:42,verses:1070,genre:"poetry",testament:"OT",order:18},
  {name:"Psalms",abbr:"PSA",chapters:150,verses:2461,genre:"poetry",testament:"OT",order:19},
  {name:"Proverbs",abbr:"PRO",chapters:31,verses:915,genre:"poetry",testament:"OT",order:20},
  {name:"Ecclesiastes",abbr:"ECC",chapters:12,verses:222,genre:"poetry",testament:"OT",order:21},
  {name:"Song of Solomon",abbr:"SOS",chapters:8,verses:117,genre:"poetry",testament:"OT",order:22},
  {name:"Isaiah",abbr:"ISA",chapters:66,verses:1292,genre:"major-prophets",testament:"OT",order:23},
  {name:"Jeremiah",abbr:"JER",chapters:52,verses:1364,genre:"major-prophets",testament:"OT",order:24},
  {name:"Lamentations",abbr:"LAM",chapters:5,verses:154,genre:"major-prophets",testament:"OT",order:25},
  {name:"Ezekiel",abbr:"EZK",chapters:48,verses:1273,genre:"major-prophets",testament:"OT",order:26},
  {name:"Daniel",abbr:"DAN",chapters:12,verses:357,genre:"major-prophets",testament:"OT",order:27},
  {name:"Hosea",abbr:"HOS",chapters:14,verses:197,genre:"minor-prophets",testament:"OT",order:28},
  {name:"Joel",abbr:"JOL",chapters:3,verses:73,genre:"minor-prophets",testament:"OT",order:29},
  {name:"Amos",abbr:"AMO",chapters:9,verses:146,genre:"minor-prophets",testament:"OT",order:30},
  {name:"Obadiah",abbr:"OBA",chapters:1,verses:21,genre:"minor-prophets",testament:"OT",order:31},
  {name:"Jonah",abbr:"JON",chapters:4,verses:48,genre:"minor-prophets",testament:"OT",order:32},
  {name:"Micah",abbr:"MIC",chapters:7,verses:105,genre:"minor-prophets",testament:"OT",order:33},
  {name:"Nahum",abbr:"NAH",chapters:3,verses:47,genre:"minor-prophets",testament:"OT",order:34},
  {name:"Habakkuk",abbr:"HAB",chapters:3,verses:56,genre:"minor-prophets",testament:"OT",order:35},
  {name:"Zephaniah",abbr:"ZEP",chapters:3,verses:53,genre:"minor-prophets",testament:"OT",order:36},
  {name:"Haggai",abbr:"HAG",chapters:2,verses:38,genre:"minor-prophets",testament:"OT",order:37},
  {name:"Zechariah",abbr:"ZEC",chapters:14,verses:211,genre:"minor-prophets",testament:"OT",order:38},
  {name:"Malachi",abbr:"MAL",chapters:4,verses:55,genre:"minor-prophets",testament:"OT",order:39},
  {name:"Matthew",abbr:"MAT",chapters:28,verses:1071,genre:"gospels",testament:"NT",order:40},
  {name:"Mark",abbr:"MRK",chapters:16,verses:678,genre:"gospels",testament:"NT",order:41},
  {name:"Luke",abbr:"LUK",chapters:24,verses:1151,genre:"gospels",testament:"NT",order:42},
  {name:"John",abbr:"JHN",chapters:21,verses:879,genre:"gospels",testament:"NT",order:43},
  {name:"Acts",abbr:"ACT",chapters:28,verses:1007,genre:"acts",testament:"NT",order:44},
  {name:"Romans",abbr:"ROM",chapters:16,verses:433,genre:"pauline",testament:"NT",order:45},
  {name:"1 Corinthians",abbr:"1CO",chapters:16,verses:437,genre:"pauline",testament:"NT",order:46},
  {name:"2 Corinthians",abbr:"2CO",chapters:13,verses:257,genre:"pauline",testament:"NT",order:47},
  {name:"Galatians",abbr:"GAL",chapters:6,verses:149,genre:"pauline",testament:"NT",order:48},
  {name:"Ephesians",abbr:"EPH",chapters:6,verses:155,genre:"pauline",testament:"NT",order:49},
  {name:"Philippians",abbr:"PHP",chapters:4,verses:104,genre:"pauline",testament:"NT",order:50},
  {name:"Colossians",abbr:"COL",chapters:4,verses:95,genre:"pauline",testament:"NT",order:51},
  {name:"1 Thessalonians",abbr:"1TH",chapters:5,verses:89,genre:"pauline",testament:"NT",order:52},
  {name:"2 Thessalonians",abbr:"2TH",chapters:3,verses:47,genre:"pauline",testament:"NT",order:53},
  {name:"1 Timothy",abbr:"1TI",chapters:6,verses:113,genre:"pauline",testament:"NT",order:54},
  {name:"2 Timothy",abbr:"2TI",chapters:4,verses:83,genre:"pauline",testament:"NT",order:55},
  {name:"Titus",abbr:"TIT",chapters:3,verses:46,genre:"pauline",testament:"NT",order:56},
  {name:"Philemon",abbr:"PHM",chapters:1,verses:25,genre:"pauline",testament:"NT",order:57},
  {name:"Hebrews",abbr:"HEB",chapters:13,verses:303,genre:"general",testament:"NT",order:58},
  {name:"James",abbr:"JAS",chapters:5,verses:108,genre:"general",testament:"NT",order:59},
  {name:"1 Peter",abbr:"1PE",chapters:5,verses:105,genre:"general",testament:"NT",order:60},
  {name:"2 Peter",abbr:"2PE",chapters:3,verses:61,genre:"general",testament:"NT",order:61},
  {name:"1 John",abbr:"1JN",chapters:5,verses:105,genre:"general",testament:"NT",order:62},
  {name:"2 John",abbr:"2JN",chapters:1,verses:13,genre:"general",testament:"NT",order:63},
  {name:"3 John",abbr:"3JN",chapters:1,verses:14,genre:"general",testament:"NT",order:64},
  {name:"Jude",abbr:"JDE",chapters:1,verses:25,genre:"general",testament:"NT",order:65},
  {name:"Revelation",abbr:"REV",chapters:22,verses:404,genre:"apocalyptic",testament:"NT",order:66}
];

var bookNameMap = {
  GEN:"Genesis",EXO:"Exodus",LEV:"Leviticus",NUM:"Numbers",DEU:"Deuteronomy",
  JOS:"Joshua",JDG:"Judges",RUT:"Ruth","1SA":"1 Samuel","2SA":"2 Samuel",
  "1KI":"1 Kings","2KI":"2 Kings","1CH":"1 Chronicles","2CH":"2 Chronicles",
  EZR:"Ezra",NEH:"Nehemiah",EST:"Esther",JOB:"Job",PSA:"Psalms",
  PRO:"Proverbs",ECC:"Ecclesiastes",SOS:"Song of Solomon",ISA:"Isaiah",JER:"Jeremiah",
  LAM:"Lamentations",EZK:"Ezekiel",DAN:"Daniel",HOS:"Hosea",JOL:"Joel",
  AMO:"Amos",OBA:"Obadiah",JON:"Jonah",MIC:"Micah",NAH:"Nahum",
  HAB:"Habakkuk",ZEP:"Zephaniah",HAG:"Haggai",ZEC:"Zechariah",MAL:"Malachi",
  MAT:"Matthew",MRK:"Mark",LUK:"Luke",JHN:"John",ACT:"Acts",
  ROM:"Romans","1CO":"1 Corinthians","2CO":"2 Corinthians",GAL:"Galatians",EPH:"Ephesians",
  PHP:"Philippians",COL:"Colossians","1TH":"1 Thessalonians","2TH":"2 Thessalonians",
  "1TI":"1 Timothy","2TI":"2 Timothy",TIT:"Titus",PHM:"Philemon",
  HEB:"Hebrews",JAS:"James","1PE":"1 Peter","2PE":"2 Peter",
  "1JN":"1 John","2JN":"2 John","3JN":"3 John",JDE:"Jude",REV:"Revelation"
};

var bookSummaries = {
  GEN: "The foundational book of beginnings, detailing creation, the fall, and the origins of Israel through God's covenant with Abraham, Isaac, and Jacob.",
  EXO: "The epic narrative of God delivering the Israelites from Egyptian slavery, the parting of the Red Sea, and the giving of the Ten Commandments.",
  LEV: "A manual of regulations for worship and holy living, detailing sacrifices, festivals, and the role of priests in ancient Israel.",
  NUM: "The historical account of Israel's 40-year wandering in the wilderness, featuring censuses, rebellions, and God's sustaining grace.",
  DEU: "Moses' final sermons to the Israelites before they enter the Promised Land, serving as a renewal of God's covenant and laws.",
  JOS: "The story of Israel's conquest and settling of the Promised Land under the leadership of Joshua.",
  JDG: "A turbulent period where Israel repeatedly falls into idolatry, faces oppression, and is rescued by God-appointed leaders called judges.",
  RUT: "A beautiful story of loyalty and redemption set during the time of the judges, ending with the ancestry of King David.",
  "1SA": "The transition from the era of judges to a monarchy, featuring the prophet Samuel, King Saul's tragic reign, and the rise of David.",
  "2SA": "The history of King David's reign, highlighting his military triumphs, his grave sins, and God's eternal covenant with his family line.",
  "1KI": "The glorious reign of Solomon and the building of the Temple, followed by the tragic split of Israel into two divided kingdoms.",
  "2KI": "The continued decline of the divided kingdoms of Israel and Judah, culminating in their exile by the Assyrian and Babylonian empires.",
  "1CH": "A retelling of Israel's history with a focus on the southern kingdom of Judah, the priesthood, and the legacy of King David.",
  "2CH": "The history of the kings of Judah from Solomon to the Babylonian exile, emphasizing the importance of worship and the Temple.",
  EZR: "The historical account of the Jews returning from Babylonian exile to rebuild the Temple in Jerusalem under the leadership of Zerubbabel and Ezra.",
  NEH: "The story of Nehemiah's leadership in returning to Jerusalem to rebuild its ruined walls and restore the faith of the Jewish people.",
  EST: "A dramatic account of God's providence protecting the Jewish people from genocide in the Persian Empire, without explicitly mentioning God's name.",
  JOB: "A profound poetic exploration of human suffering, God's sovereignty, and the limits of human wisdom in the face of tragedy.",
  PSA: "A rich collection of 150 poetic songs and prayers expressing the full spectrum of human emotion, worship, and faith in God.",
  PRO: "A collection of practical wisdom, largely written by Solomon, offering timeless advice on morality, relationships, and everyday life.",
  ECC: "A philosophical reflection on the fleeting nature of life and the conclusion that true meaning is found only in fearing God.",
  SOS: "A beautiful, poetic celebration of romantic love and marriage, often viewed as an allegory of God's love for His people.",
  ISA: "A sweeping prophetic book containing powerful messages of judgment and vivid prophecies about the coming Messiah and His kingdom.",
  JER: "The 'weeping prophet' warns Judah of its impending destruction by Babylon, while offering a future hope of a New Covenant.",
  LAM: "Five poetic dirges expressing deep sorrow and mourning over the destruction of Jerusalem and the Temple by the Babylonians.",
  EZK: "Vivid visions and prophecies given to Israelites in exile, emphasizing God's holiness and promising future restoration and a new heart.",
  DAN: "Stories of faithfulness in a pagan court and apocalyptic visions detailing the rise and fall of empires, ultimately pointing to God's eternal kingdom.",
  HOS: "A tragic real-life story of the prophet marrying an unfaithful wife, serving as a powerful picture of God's relentless love for unfaithful Israel.",
  JOL: "A prophecy warning of judgment through a devastating locust plague and the future outpouring of the Holy Spirit on all people.",
  AMO: "A strong message of social justice, rebuking the wealthy of Israel for their exploitation of the poor and their shallow religious rituals.",
  OBA: "A short prophecy pronouncing judgment on the nation of Edom for their violence and pride against incredibly vulnerable Israel.",
  JON: "The famous story of a reluctant prophet swallowed by a great fish, highlighting God's vast mercy reaching even to the wicked city of Nineveh.",
  MIC: "A prophecy warning of judgment for social injustices, while pointing to future hope and the exact birthplace of the coming Messiah.",
  NAH: "A poetic and terrifying prophecy declaring the imminent and final destruction of the brutal Assyrian capital of Nineveh.",
  HAB: "A dialogue between the prophet and God regarding the problem of evil, ending in a profound declaration of faith amidst coming destruction.",
  ZEP: "A stark warning of the coming 'Day of the Lord' and judgment, followed by a beautiful promise of God's restoration and joyful singing over His people.",
  HAG: "A brief but urgent message encouraging the returned exiles to prioritize the rebuilding of God's Temple in Jerusalem over their own homes.",
  ZEC: "Visions and prophecies encouraging the Temple builders, intertwined with numerous detailed predictions about the coming Messiah.",
  MAL: "The final Old Testament book, challenging the apathy and superficial worship of the returned exiles and predicting the coming of a forerunner to the Messiah.",
  
  MAT: "Written primarily to a Jewish audience, presenting Jesus Christ as the long-awaited King and Messiah fulfilling Old Testament prophecies.",
  MRK: "A fast-paced, action-oriented Gospel emphasizing the miracles, authority, and servanthood of Jesus Christ.",
  LUK: "A carefully researched and detailed account highlighting the humanity, compassion, and universal salvation offered by Jesus to all people.",
  JHN: "A profoundly spiritual Gospel focusing on the divine identity of Jesus as the Son of God, featuring His 'I AM' statements and long discourses.",
  ACT: "The historical narrative of the birth of the early church and the spectacular spread of the Gospel following the descent of the Holy Spirit.",
  ROM: "Paul's theological masterpiece, clearly detailing the problem of human sin, the reality of justification by faith, and life in the Spirit.",
  "1CO": "A letter addressing severe moral and doctrinal issues in a divided church, notably featuring teachings on spiritual gifts, love, and the resurrection.",
  "2CO": "A highly personal letter where Paul defends his apostolic authority, discusses suffering, and encourages generous giving.",
  GAL: "A passionate defense of the gospel of grace, warning against legalism and declaring that believers are justified by faith in Christ alone.",
  EPH: "A letter exploring the profound spiritual blessings believers have in Christ and outlining practical instructions for unity and Christian living.",
  PHP: "A joyful letter written from prison, encouraging believers to live with humility, unity, and a Christ-centered mindset.",
  COL: "A letter exalting the supreme divinity and sufficiency of Jesus Christ, warning against false philosophies and mystical practices.",
  "1TH": "A comforting letter commending a young church's faith and offering hope and clarity regarding the second coming of Jesus Christ.",
  "2TH": "A follow-up letter correcting misunderstandings about the Day of the Lord and encouraging steadfastness in the face of persecution.",
  "1TI": "Pastoral instructions given to a young church leader regarding church organization, qualifications for leaders, and guarding sound doctrine.",
  "2TI": "Paul's highly emotional final letter, urging Timothy to remain faithful, endure hardship, and preach the Word in the face of impending death.",
  TIT: "A brief pastoral letter instructing a church leader on assigning qualified elders and teaching sound doctrine leading to good works.",
  PHM: "A masterful, personal letter from Paul urging a Christian master to forgive and accept back his runaway slave as a brother in Christ.",
  HEB: "A rich theological book demonstrating how Jesus Christ is the ultimate fulfillment and far superior to the Old Testament angels, prophets, priests, and sacrifices.",
  JAS: "A highly practical letter emphasizing that genuine faith must be inevitably accompanied by righteous actions and a changed lifestyle.",
  "1PE": "A letter offering profound hope, encouragement, and instruction on holy living to Christians facing intense suffering and persecution.",
  "2PE": "A strong warning against the destructive influence of false teachers and a reminder of the certainty of Christ's future return.",
  "1JN": "A letter assuring believers of their eternal life, emphasizing the inseparable connection between loving God, loving others, and walking in the light.",
  "2JN": "A brief letter emphasizing the necessity of walking in truth and love while strictly warning against showing hospitality to deceitful false teachers.",
  "3JN": "A short, personal letter commending a believer for his hospitality and support of traveling missionaries while condemning a disruptive church member.",
  JDE: "A fierce and urgent warning to contend for the true faith against ungodly infiltrators who were perverting God's grace.",
  REV: "A sweeping apocalyptic vision given to the Apostle John, dramatically revealing the ultimate triumph of Jesus Christ over evil and the establishment of the New Jerusalem."
};

var singleChapterBooks = {OBA:21,PHM:25,"2JN":13,"3JN":14,JDE:25};

var eras = [
  {name:"Creation & Early World",color:"#a78bfa",events:[
    {date:"Beginning",title:"Creation",reference:"Genesis 1-2"},
    {date:"Unknown",title:"The Fall of Man",reference:"Genesis 3"},
    {date:"Unknown",title:"The Great Flood",reference:"Genesis 6-9"},
    {date:"Unknown",title:"Tower of Babel",reference:"Genesis 11"}
  ]},
  {name:"The Patriarchs",color:"hsl(40,90%,55%)",events:[
    {date:"c. 2091 BC",title:"Abraham Called",reference:"Genesis 12"},
    {date:"c. 2081 BC",title:"Covenant with Abraham",reference:"Genesis 15"},
    {date:"c. 2066 BC",title:"Isaac Born",reference:"Genesis 21"},
    {date:"c. 1915 BC",title:"Joseph Sold into Slavery",reference:"Genesis 37"},
    {date:"c. 1885 BC",title:"Israel Moves to Egypt",reference:"Genesis 46"}
  ]},
  {name:"The Exodus",color:"#22d3ee",events:[
    {date:"c. 1446 BC",title:"The Exodus from Egypt",reference:"Exodus 12-14"},
    {date:"c. 1446 BC",title:"Ten Commandments Given",reference:"Exodus 20"},
    {date:"c. 1406 BC",title:"40 Years of Wandering End",reference:"Deuteronomy 34"}
  ]},
  {name:"Conquest of Canaan",color:"#4ade80",events:[
    {date:"c. 1406 BC",title:"Crossing the Jordan",reference:"Joshua 3"},
    {date:"c. 1400 BC",title:"Fall of Jericho",reference:"Joshua 6"}
  ]},
  {name:"Period of Judges",color:"#f472b6",events:[
    {date:"c. 1375–1050 BC",title:"The Judges Rule Israel",reference:"Judges"},
    {date:"c. 1100 BC",title:"Story of Ruth",reference:"Ruth"}
  ]},
  {name:"United Kingdom",color:"#ef4444",events:[
    {date:"c. 1050 BC",title:"Saul Becomes King",reference:"1 Samuel 10"},
    {date:"c. 1010 BC",title:"David Becomes King",reference:"2 Samuel 5"},
    {date:"c. 970 BC",title:"Solomon Builds the Temple",reference:"1 Kings 6"}
  ]},
  {name:"Divided Kingdom",color:"#f97316",events:[
    {date:"c. 930 BC",title:"Kingdom Divides",reference:"1 Kings 12"},
    {date:"c. 870 BC",title:"Elijah's Ministry",reference:"1 Kings 17"},
    {date:"c. 760 BC",title:"Prophets Amos & Hosea",reference:"Amos, Hosea"}
  ]},
  {name:"Exile",color:"#dc2626",events:[
    {date:"722 BC",title:"Fall of Israel (North)",reference:"2 Kings 17"},
    {date:"586 BC",title:"Fall of Judah / Temple Destroyed",reference:"2 Kings 25"},
    {date:"586–538 BC",title:"Babylonian Exile",reference:"Daniel, Ezekiel"}
  ]},
  {name:"Return from Exile",color:"#22c55e",events:[
    {date:"538 BC",title:"Decree of Cyrus",reference:"Ezra 1"},
    {date:"516 BC",title:"Second Temple Built",reference:"Ezra 6"},
    {date:"445 BC",title:"Nehemiah Rebuilds Walls",reference:"Nehemiah 2"}
  ]},
  {name:"Intertestamental Period",color:"#9ca3af",events:[
    {date:"c. 400 BC – 5 BC",title:"400 Years of Silence",reference:""}
  ]},
  {name:"Life of Jesus",color:"#60a5fa",events:[
    {date:"c. 5 BC",title:"Birth of Jesus",reference:"Luke 2"},
    {date:"c. AD 27",title:"Jesus Begins Ministry",reference:"Mark 1"},
    {date:"c. AD 30",title:"Crucifixion & Resurrection",reference:"Matthew 27-28"}
  ]},
  {name:"Early Church",color:"#a855f7",events:[
    {date:"c. AD 30",title:"Pentecost",reference:"Acts 2"},
    {date:"c. AD 35",title:"Conversion of Paul",reference:"Acts 9"},
    {date:"c. AD 49–67",title:"Paul's Missionary Journeys",reference:"Acts 13-28"}
  ]},
  {name:"Epistles & Revelation",color:"#ec4899",events:[
    {date:"c. AD 49–95",title:"New Testament Letters Written",reference:"Romans – Jude"},
    {date:"c. AD 95",title:"Revelation Written",reference:"Revelation"}
  ]}
];

var themes = [
  {title:"Love",desc:"God's unconditional love for humanity and the call to love one another.",icon:"❤️",bg:"#ec4899",verses:["John 3:16","1 Corinthians 13:4-8","1 John 4:8"]},
  {title:"Salvation",desc:"God's plan to redeem humanity through faith in Jesus Christ.",icon:"✝️",bg:"#ef4444",verses:["Ephesians 2:8-9","Romans 10:9","John 14:6"]},
  {title:"Faith",desc:"Trusting in God's promises and His sovereign plan for our lives.",icon:"🛡️",bg:"#3b82f6",verses:["Hebrews 11:1","Romans 1:17","James 2:26"]},
  {title:"Grace",desc:"God's unmerited favor shown to humanity despite our unworthiness.",icon:"✨",bg:"#a855f7",verses:["2 Corinthians 12:9","Ephesians 2:8","Titus 2:11"]},
  {title:"Justice",desc:"God's righteous judgment and His call for us to act justly toward others.",icon:"⚖️",bg:"#f59e0b",verses:["Micah 6:8","Isaiah 1:17","Psalm 89:14"]},
  {title:"Kingdom of God",desc:"The reign and rule of God both in heaven and on earth through Christ.",icon:"👑",bg:"#eab308",verses:["Matthew 6:33","Luke 17:21","Revelation 11:15"]},
  {title:"Covenant",desc:"God's binding promises with His people throughout biblical history.",icon:"🤝",bg:"#14b8a6",verses:["Genesis 9:13","Jeremiah 31:31-34","Hebrews 8:6"]},
  {title:"Holiness",desc:"God's perfect purity and the call for believers to be set apart.",icon:"🔥",bg:"#f97316",verses:["1 Peter 1:16","Isaiah 6:3","Hebrews 12:14"]},
  {title:"Redemption",desc:"God's act of buying back what was lost through the sacrifice of Christ.",icon:"👁️",bg:"#10b981",verses:["Galatians 3:13","Colossians 1:14","1 Peter 1:18-19"]}
];

var otStructure = [
  {label:"Pentateuch (Law)",genre:"law",desc:"The five books of Moses containing the Law and the history of creation and Israel's early days.",icon:"📜",bg:"rgba(168,85,247,0.2)",color:"#c084fc",bar:"#c084fc"},
  {label:"Historical Books",genre:"history",desc:"The narrative of Israel's history from conquest of the Promised Land to the return from exile.",icon:"📖",bg:"rgba(200,170,50,0.2)",color:"hsl(40,90%,55%)",bar:"hsl(40,90%,55%)"},
  {label:"Wisdom & Poetry",genre:"poetry",desc:"Songs, proverbs, and wisdom literature exploring the human experience and relationship with God.",icon:"🪶",bg:"rgba(34,197,94,0.2)",color:"#4ade80",bar:"#4ade80"},
  {label:"Major Prophets",genre:"major-prophets",desc:"Longer prophetic books calling Israel to repentance and foretelling the Messiah.",icon:"📢",bg:"rgba(239,68,68,0.2)",color:"#f87171",bar:"#f87171"},
  {label:"Minor Prophets",genre:"minor-prophets",desc:"Twelve shorter prophetic books with messages of judgment and hope.",icon:"👁️",bg:"rgba(249,115,22,0.2)",color:"#fb923c",bar:"#fb923c"}
];

var ntStructure = [
  {label:"Gospels",genre:"gospels",desc:"The four accounts of Jesus Christ's life, ministry, death, and resurrection.",icon:"⭐",bg:"rgba(59,130,246,0.2)",color:"#60a5fa",bar:"#60a5fa"},
  {label:"History (Acts)",genre:"acts",desc:"The history of the early church and the spread of the gospel to the Gentiles.",icon:"⛪",bg:"rgba(20,184,166,0.2)",color:"#2dd4bf",bar:"#2dd4bf"},
  {label:"Pauline Epistles",genre:"pauline",desc:"Letters from the Apostle Paul to churches and individuals, teaching doctrine and Christian living.",icon:"📄",bg:"rgba(236,72,153,0.2)",color:"#f472b6",bar:"#f472b6"},
  {label:"General Epistles",genre:"general",desc:"Letters from other apostles addressing various challenges in the early church.",icon:"📄",bg:"rgba(168,85,247,0.2)",color:"#c084fc",bar:"#c084fc"},
  {label:"Prophecy",genre:"apocalyptic",desc:"The book of Revelation, revealing the ultimate triumph of God's kingdom.",icon:"🔥",bg:"rgba(239,68,68,0.2)",color:"#f87171",bar:"#f87171"}
];

var colorCoding = [
  {label:"Pentateuch (Law)",range:"Genesis - Deuteronomy",color:"#c084fc"},
  {label:"History",range:"Joshua - Esther",color:"hsl(40,90%,55%)"},
  {label:"Wisdom & Poetry",range:"Job - Song of Solomon",color:"#4ade80"},
  {label:"Major Prophets",range:"Isaiah - Daniel",color:"#f87171"},
  {label:"Minor Prophets",range:"Hosea - Malachi",color:"#fb923c"},
  {label:"Gospels",range:"Matthew - John",color:"#60a5fa"},
  {label:"Epistles",range:"Romans - Jude",color:"#c084fc"},
  {label:"Prophecy",range:"Revelation",color:"#f87171"}
];
