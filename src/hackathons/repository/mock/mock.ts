import { Developer, Hackathon } from "../entities/hackathon.entity";

const developers:Developer[] = [
    {
      rank: 1,
      picture: null,
      login: null,
      gender: "female",
      name: {
        title: "Mrs",
        first: "Mathilde",
        last: "Christensen"
      },
      location: {
        street: {
          number: 6085,
          name: "Kærbyvej"
        },
        city: "Roedovre",
        state: "Midtjylland",
        country: "Denmark",
        postcode: 45746,
        coordinates: {
          latitude: "-41.0211",
          longitude: "60.9123"
        },
        timezone: {
          offset: "+8:00",
          description: "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      email: "mathilde.christensen@example.com",
      dob: {
        date: "1997-02-03T02:43:18.369Z",
        age: 25
      },
      registered: {
        date: "2014-08-08T15:14:50.008Z",
        age: 8
      },
      phone: "97595174",
      cell: "21475840",
      id: {
        name: "CPR",
        value: "020297-5436"
      },
      nat: "DK"
  },
  {
      rank: 2,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Kevin",
        last: "Hunt"
      },
      location: {
        street: {
          number: 8559,
          name: "Green Rd"
        },
        city: "Albany",
        state: "New South Wales",
        country: "Australia",
        postcode: 5229,
        coordinates: {
          latitude: "-13.9773",
          longitude: "-81.8810"
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta"
        }
      },
      email: "kevin.hunt@example.com",
      dob: {
        date: "1971-01-24T13:47:51.624Z",
        age: 51
      },
      registered: {
        date: "2003-12-05T00:53:50.279Z",
        age: 18
      },
      phone: "07-3921-0851",
      cell: "0425-556-455",
      id: {
        name: "TFN",
        value: "219026706"
      },
      nat: "AU"
  },
  {
      rank: 3,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Vassilios",
        last: "Kilic"
      },
      location: {
        street: {
          number: 7654,
          name: "Mittelstraße"
        },
        city: "Langenhagen",
        state: "Thüringen",
        country: "Germany",
        postcode: 40474,
        coordinates: {
          latitude: "10.3137",
          longitude: "39.3670"
        },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      email: "vassilios.kilic@example.com",
      dob: {
        date: "1953-01-12T16:06:35.417Z",
        age: 69
      },
      registered: {
        date: "2012-06-30T05:29:50.181Z",
        age: 10
      },
      phone: "0983-8601607",
      cell: "0172-4792662",
      id: {
        name: "SVNR",
        value: "78 120153 K 433"
      },
      nat: "DE"
  },
  {
      rank: 4,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "علی رضا",
        last: "کامروا"
      },
      location: {
        street: {
          number: 4140,
          name: "مقدس اردبیلی"
        },
        city: "آمل",
        state: "خراسان رضوی",
        country: "Iran",
        postcode: 79670,
        coordinates: {
          latitude: "-23.4461",
          longitude: "159.1358"
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      email: "aalyrd.khmrw@example.com",
      dob: {
        date: "1977-09-15T05:49:55.524Z",
        age: 45
      },
      registered: {
        date: "2019-03-24T17:59:34.309Z",
        age: 3
      },
      phone: "013-71356495",
      cell: "0946-413-4693",
      id: {
        name: "",
        value: null
      },
      nat: "IR"
  },
  {
      rank: 5,
      picture: null,
      login: null,
      gender: "female",
      name: {
        title: "Miss",
        first: "Hazel",
        last: "Thomas"
      },
      location: {
        street: {
          number: 1460,
          name: "Photinia Ave"
        },
        city: "Warragul",
        state: "New South Wales",
        country: "Australia",
        postcode: 5042,
        coordinates: {
          latitude: "43.5532",
          longitude: "-86.4504"
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland"
        }
      },
      email: "hazel.thomas@example.com",
      dob: {
        date: "1970-06-11T20:07:41.572Z",
        age: 52
      },
      registered: {
        date: "2013-01-03T13:42:38.535Z",
        age: 9
      },
      phone: "03-4929-9856",
      cell: "0425-477-336",
      id: {
        name: "TFN",
        value: "457057693"
      },
      nat: "AU"
  },
  {
      rank: 6,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Draško",
        last: "Vrhovac"
      },
      location: {
        street: {
          number: 8213,
          name: "Gorana Gajića "
        },
        city: "Bajina Bašta",
        state: "Kosovska Mitrovica",
        country: "Serbia",
        postcode: 42311,
        coordinates: {
          latitude: "-88.7643",
          longitude: "29.6682"
        },
        timezone: {
          offset: "+9:30",
          description: "Adelaide, Darwin"
        }
      },
      email: "drasko.vrhovac@example.com",
      dob: {
        date: "1952-11-23T02:34:30.368Z",
        age: 69
      },
      registered: {
        date: "2008-07-28T05:21:09.587Z",
        age: 14
      },
      phone: "031-8926-918",
      cell: "068-5436-171",
      id: {
        name: "SID",
        value: "752248622"
      },
      nat: "RS"
  },
  {
      rank: 7,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Maanas",
        last: "Shah"
      },
      location: {
        street: {
          number: 6379,
          name: "Lindsay St"
        },
        city: "Pimpri-Chinchwad",
        state: "Assam",
        country: "India",
        postcode: 72002,
        coordinates: {
          latitude: "-64.4359",
          longitude: "119.9860"
        },
        timezone: {
          offset: "-7:00",
          description: "Mountain Time (US & Canada)"
        }
      },
      email: "maanas.shah@example.com",
      dob: {
        date: "1995-03-10T01:50:38.821Z",
        age: 27
      },
      registered: {
        date: "2022-02-09T07:08:02.382Z",
        age: 0
      },
      phone: "9740776121",
      cell: "9893868724",
      id: {
        name: "UIDAI",
        value: "031653299141"
      },
      nat: "IN"
  },
  {
      rank: 8,
      picture: null,
      login: null,
      gender: "female",
      name: {
        title: "Miss",
        first: "Florence",
        last: "Ross"
      },
      location: {
        street: {
          number: 5320,
          name: "Richmond Ave"
        },
        city: "Charlottetown",
        state: "Northwest Territories",
        country: "Canada",
        postcode: "A3Z 4V8",
        coordinates: {
          latitude: "-17.9171",
          longitude: "7.7062"
        },
        timezone: {
          offset: "-7:00",
          description: "Mountain Time (US & Canada)"
        }
      },
      email: "florence.ross@example.com",
      dob: {
        date: "1964-03-07T07:37:18.581Z",
        age: 58
      },
      registered: {
        date: "2012-06-08T23:34:33.168Z",
        age: 10
      },
      phone: "T30 E48-0352",
      cell: "Q41 R56-8833",
      id: {
        name: "SIN",
        value: "542048327"
      },
      nat: "CA"
  },
  {
      rank: 9,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Batur",
        last: "Polat"
      },
      location: {
        street: {
          number: 9697,
          name: "Necatibey Cd"
        },
        city: "Kocaeli",
        state: "Antalya",
        country: "Turkey",
        postcode: 96829,
        coordinates: {
          latitude: "-33.3036",
          longitude: "-142.5320"
        },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      email: "batur.polat@example.com",
      dob: {
        date: "1993-02-13T04:37:02.427Z",
        age: 29
      },
      registered: {
        date: "2021-11-07T14:34:38.168Z",
        age: 0
      },
      phone: "(386)-418-4775",
      cell: "(869)-554-8950",
      id: {
        name: "",
        value: null
      },
      nat: "TR"
  },
  {
      rank: 10,
      picture:null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Elias",
        last: "Roche"
      },
      location: {
        street: {
          number: 5732,
          name: "Rue Barrème"
        },
        city: "Aulnay-sous-Bois",
        state: "Deux-Sèvres",
        country: "France",
        postcode: 79740,
        coordinates: {
          latitude: "24.8296",
          longitude: "-20.3798"
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii"
        }
      },
      email: "elias.roche@example.com",
      dob: {
        date: "1999-10-23T15:25:25.117Z",
        age: 22
      },
      registered: {
        date: "2005-12-30T17:24:14.248Z",
        age: 16
      },
      phone: "02-70-47-69-11",
      cell: "06-85-12-33-75",
      id: {
        name: "INSEE",
        value: "1990995506289 04"
      },
      nat: "FR"
  }
]

const developers1:Developer[] = [
  {
      rank: 1,
      picture: null,
      login: null,
      gender: "female",
      name: {
        title: "Mrs",
        first: "Mathilde",
        last: "Christensen"
      },
      location: {
        street: {
          number: 6085,
          name: "Kærbyvej"
        },
        city: "Roedovre",
        state: "Midtjylland",
        country: "Denmark",
        postcode: 45746,
        coordinates: {
          latitude: "-41.0211",
          longitude: "60.9123"
        },
        timezone: {
          offset: "+8:00",
          description: "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      email: "mathilde.christensen@example.com",
      dob: {
        date: "1997-02-03T02:43:18.369Z",
        age: 25
      },
      registered: {
        date: "2014-08-08T15:14:50.008Z",
        age: 8
      },
      phone: "97595174",
      cell: "21475840",
      id: {
        name: "CPR",
        value: "020297-5436"
      },
      nat: "DK"
  },
  {
      rank: 2,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Kevin",
        last: "Hunt"
      },
      location: {
        street: {
          number: 8559,
          name: "Green Rd"
        },
        city: "Albany",
        state: "New South Wales",
        country: "Australia",
        postcode: 5229,
        coordinates: {
          latitude: "-13.9773",
          longitude: "-81.8810"
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta"
        }
      },
      email: "kevin.hunt@example.com",
      dob: {
        date: "1971-01-24T13:47:51.624Z",
        age: 51
      },
      registered: {
        date: "2003-12-05T00:53:50.279Z",
        age: 18
      },
      phone: "07-3921-0851",
      cell: "0425-556-455",
      id: {
        name: "TFN",
        value: "219026706"
      },
      nat: "AU"
  },
  {
      rank: 3,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Vassilios",
        last: "Kilic"
      },
      location: {
        street: {
          number: 7654,
          name: "Mittelstraße"
        },
        city: "Langenhagen",
        state: "Thüringen",
        country: "Germany",
        postcode: 40474,
        coordinates: {
          latitude: "10.3137",
          longitude: "39.3670"
        },
        timezone: {
          offset: "+5:00",
          description: "Ekaterinburg, Islamabad, Karachi, Tashkent"
        }
      },
      email: "vassilios.kilic@example.com",
      dob: {
        date: "1953-01-12T16:06:35.417Z",
        age: 69
      },
      registered: {
        date: "2012-06-30T05:29:50.181Z",
        age: 10
      },
      phone: "0983-8601607",
      cell: "0172-4792662",
      id: {
        name: "SVNR",
        value: "78 120153 K 433"
      },
      nat: "DE"
  },
  {
      rank: 4,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "علی رضا",
        last: "کامروا"
      },
      location: {
        street: {
          number: 4140,
          name: "مقدس اردبیلی"
        },
        city: "آمل",
        state: "خراسان رضوی",
        country: "Iran",
        postcode: 79670,
        coordinates: {
          latitude: "-23.4461",
          longitude: "159.1358"
        },
        timezone: {
          offset: "+5:30",
          description: "Bombay, Calcutta, Madras, New Delhi"
        }
      },
      email: "aalyrd.khmrw@example.com",
      dob: {
        date: "1977-09-15T05:49:55.524Z",
        age: 45
      },
      registered: {
        date: "2019-03-24T17:59:34.309Z",
        age: 3
      },
      phone: "013-71356495",
      cell: "0946-413-4693",
      id: {
        name: "",
        value: null
      },
      nat: "IR"
  },
  {
      rank: 5,
      picture: null,
      login: null,
      gender: "female",
      name: {
        title: "Miss",
        first: "Hazel",
        last: "Thomas"
      },
      location: {
        street: {
          number: 1460,
          name: "Photinia Ave"
        },
        city: "Warragul",
        state: "New South Wales",
        country: "Australia",
        postcode: 5042,
        coordinates: {
          latitude: "43.5532",
          longitude: "-86.4504"
        },
        timezone: {
          offset: "-3:30",
          description: "Newfoundland"
        }
      },
      email: "hazel.thomas@example.com",
      dob: {
        date: "1970-06-11T20:07:41.572Z",
        age: 52
      },
      registered: {
        date: "2013-01-03T13:42:38.535Z",
        age: 9
      },
      phone: "03-4929-9856",
      cell: "0425-477-336",
      id: {
        name: "TFN",
        value: "457057693"
      },
      nat: "AU"
  },
  {
      rank: 6,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Draško",
        last: "Vrhovac"
      },
      location: {
        street: {
          number: 8213,
          name: "Gorana Gajića "
        },
        city: "Bajina Bašta",
        state: "Kosovska Mitrovica",
        country: "Serbia",
        postcode: 42311,
        coordinates: {
          latitude: "-88.7643",
          longitude: "29.6682"
        },
        timezone: {
          offset: "+9:30",
          description: "Adelaide, Darwin"
        }
      },
      email: "drasko.vrhovac@example.com",
      dob: {
        date: "1952-11-23T02:34:30.368Z",
        age: 69
      },
      registered: {
        date: "2008-07-28T05:21:09.587Z",
        age: 14
      },
      phone: "031-8926-918",
      cell: "068-5436-171",
      id: {
        name: "SID",
        value: "752248622"
      },
      nat: "RS"
  },
  {
      rank: 7,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Maanas",
        last: "Shah"
      },
      location: {
        street: {
          number: 6379,
          name: "Lindsay St"
        },
        city: "Pimpri-Chinchwad",
        state: "Assam",
        country: "India",
        postcode: 72002,
        coordinates: {
          latitude: "-64.4359",
          longitude: "119.9860"
        },
        timezone: {
          offset: "-7:00",
          description: "Mountain Time (US & Canada)"
        }
      },
      email: "maanas.shah@example.com",
      dob: {
        date: "1995-03-10T01:50:38.821Z",
        age: 27
      },
      registered: {
        date: "2022-02-09T07:08:02.382Z",
        age: 0
      },
      phone: "9740776121",
      cell: "9893868724",
      id: {
        name: "UIDAI",
        value: "031653299141"
      },
      nat: "IN"
  },
  {
      rank: 8,
      picture: null,
      login: null,
      gender: "female",
      name: {
        title: "Miss",
        first: "Florence",
        last: "Ross"
      },
      location: {
        street: {
          number: 5320,
          name: "Richmond Ave"
        },
        city: "Charlottetown",
        state: "Northwest Territories",
        country: "Canada",
        postcode: "A3Z 4V8",
        coordinates: {
          latitude: "-17.9171",
          longitude: "7.7062"
        },
        timezone: {
          offset: "-7:00",
          description: "Mountain Time (US & Canada)"
        }
      },
      email: "florence.ross@example.com",
      dob: {
        date: "1964-03-07T07:37:18.581Z",
        age: 58
      },
      registered: {
        date: "2012-06-08T23:34:33.168Z",
        age: 10
      },
      phone: "T30 E48-0352",
      cell: "Q41 R56-8833",
      id: {
        name: "SIN",
        value: "542048327"
      },
      nat: "CA"
  },
  {
      rank: 9,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Batur",
        last: "Polat"
      },
      location: {
        street: {
          number: 9697,
          name: "Necatibey Cd"
        },
        city: "Kocaeli",
        state: "Antalya",
        country: "Turkey",
        postcode: 96829,
        coordinates: {
          latitude: "-33.3036",
          longitude: "-142.5320"
        },
        timezone: {
          offset: "+3:00",
          description: "Baghdad, Riyadh, Moscow, St. Petersburg"
        }
      },
      email: "batur.polat@example.com",
      dob: {
        date: "1993-02-13T04:37:02.427Z",
        age: 29
      },
      registered: {
        date: "2021-11-07T14:34:38.168Z",
        age: 0
      },
      phone: "(386)-418-4775",
      cell: "(869)-554-8950",
      id: {
        name: "",
        value: null
      },
      nat: "TR"
  },
  {
      rank: 10,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Elias",
        last: "Roche"
      },
      location: {
        street: {
          number: 5732,
          name: "Rue Barrème"
        },
        city: "Aulnay-sous-Bois",
        state: "Deux-Sèvres",
        country: "France",
        postcode: 79740,
        coordinates: {
          latitude: "24.8296",
          longitude: "-20.3798"
        },
        timezone: {
          offset: "-10:00",
          description: "Hawaii"
        }
      },
      email: "elias.roche@example.com",
      dob: {
        date: "1999-10-23T15:25:25.117Z",
        age: 22
      },
      registered: {
        date: "2005-12-30T17:24:14.248Z",
        age: 16
      },
      phone: "02-70-47-69-11",
      cell: "06-85-12-33-75",
      id: {
        name: "INSEE",
        value: "1990995506289 04"
      },
      nat: "FR"
  }
]

const developers2:Developer[] = [
  {
      rank: 1,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Alban",
        last: "Meunier"
      },
      location: {
        street: {
          number: 6732,
          name: "Rue Paul-Duvivier"
        },
        city: "Rouen",
        state: "Corrèze",
        country: "France",
        postcode: 33574,
        coordinates: {
          latitude: "-17.8330",
          longitude: "-74.3930"
        },
        timezone: {
          offset: "-11:00",
          description: "Midway Island, Samoa"
        }
      },
      email: "alban.meunier@example.com",
      dob: {
        date: "1960-01-22T17:08:28.000Z",
        age: 62
      },
      registered: {
        date: "2002-07-25T19:12:42.367Z",
        age: 20
      },
      phone: "03-08-83-69-51",
      cell: "06-73-05-61-45",
      id: {
        name: "INSEE",
        value: "1600076038454 57"
      },
      nat: "FR"
    },
    {
      rank: 2,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Ayush",
        last: "Shet"
      },
      location: {
        street: {
          number: 2688,
          name: "Somwar Peth"
        },
        city: "Amaravati",
        state: "Tripura",
        country: "India",
        postcode: 46851,
        coordinates: {
          latitude: "-58.6815",
          longitude: "86.1179"
        },
        timezone: {
          offset: "0:00",
          description: "Western Europe Time, London, Lisbon, Casablanca"
        }
      },
      email: "ayush.shet@example.com",
      dob: {
        date: "1994-09-04T12:43:42.659Z",
        age: 28
      },
      registered: {
        date: "2015-08-25T04:36:16.665Z",
        age: 7
      },
      phone: "8902644073",
      cell: "9098865570",
      id: {
        name: "UIDAI",
        value: "116978098959"
      },
      nat: "IN"
    },
    {
      rank: 3,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Jared",
        last: "Shaw"
      },
      location: {
        street: {
          number: 775,
          name: "Queen Street"
        },
        city: "Aberdeen",
        state: "Northumberland",
        country: "United Kingdom",
        postcode: "N33 8NF",
        coordinates: {
          latitude: "78.6819",
          longitude: "45.1110"
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands"
        }
      },
      email: "jared.shaw@example.com",
      dob: {
        date: "1982-01-25T18:59:57.246Z",
        age: 40
      },
      registered: {
        date: "2013-07-08T05:29:23.750Z",
        age: 9
      },
      phone: "013873 99407",
      cell: "07246 754361",
      id: {
        name: "NINO",
        value: "LY 57 65 44 N"
      },
      nat: "GB"
    },
    {
      rank: 4,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Dragan",
        last: "Malešević"
      },
      location: {
        street: {
          number: 947,
          name: "Živana Jovanovića"
        },
        city: "Apatin",
        state: "Central Banat",
        country: "Serbia",
        postcode: 24701,
        coordinates: {
          latitude: "51.2651",
          longitude: "125.0035"
        },
        timezone: {
          offset: "+2:00",
          description: "Kaliningrad, South Africa"
        }
      },
      email: "dragan.malesevic@example.com",
      dob: {
        date: "1978-01-25T17:13:21.765Z",
        age: 44
      },
      registered: {
        date: "2010-08-24T01:40:15.630Z",
        age: 12
      },
      phone: "020-7598-302",
      cell: "061-9692-782",
      id: {
        name: "SID",
        value: "298813478"
      },
      nat: "RS"
    },
    {
      rank: 5,
      picture: null,
      login: null,
      gender: "female",
      name: {
        title: "Ms",
        first: "Charlie",
        last: "Slawa"
      },
      location: {
        street: {
          number: 1721,
          name: "3rd St"
        },
        city: "Belmont",
        state: "Ontario",
        country: "Canada",
        postcode: "S4P 7W7",
        coordinates: {
          latitude: "-68.4467",
          longitude: "29.4034"
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands"
        }
      },
      email: "charlie.slawa@example.com",
      dob: {
        date: "1971-10-15T06:39:26.532Z",
        age: 50
      },
      registered: {
        date: "2009-08-02T20:05:02.245Z",
        age: 13
      },
      phone: "H03 R16-5895",
      cell: "N85 R57-5639",
      id: {
        name: "SIN",
        value: "907341481"
      },
      nat: "CA"
    },
    {
      rank: 6,
      picture: null,
      login: null,
      gender: "female",
      name: {
        title: "Miss",
        first: "Nayana",
        last: "Kavser"
      },
      location: {
        street: {
          number: 3579,
          name: "Rajpath"
        },
        city: "Proddatur",
        state: "Jammu and Kashmir",
        country: "India",
        postcode: 84584,
        coordinates: {
          latitude: "88.6834",
          longitude: "28.7095"
        },
        timezone: {
          offset: "+8:00",
          description: "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      email: "nayana.kavser@example.com",
      dob: {
        date: "1977-07-06T00:30:21.031Z",
        age: 45
      },
      registered: {
        date: "2017-08-15T22:03:40.639Z",
        age: 5
      },
      phone: "9900954151",
      cell: "9363037678",
      id: {
        name: "UIDAI",
        value: "249872159067"
      },
      nat: "IN"
    },
    {
      rank: 7,
      picture: null,
      login: null,
      gender: "female",
      name: {
        title: "Mrs",
        first: "Daniela",
        last: "Thorgersen"
      },
      location: {
        street: {
          number: 1574,
          name: "Brynjeveien"
        },
        city: "Øyenkilen",
        state: "Bergen",
        country: "Norway",
        postcode: "0230",
        coordinates: {
          latitude: "-10.4232",
          longitude: "19.3870"
        },
        timezone: {
          offset: "-3:00",
          description: "Brazil, Buenos Aires, Georgetown"
        }
      },
      email: "daniela.thorgersen@example.com",
      dob: {
        date: "1980-01-03T11:36:30.497Z",
        age: 42
      },
      registered: {
        date: "2004-07-20T03:32:21.427Z",
        age: 18
      },
      phone: "50280457",
      cell: "92112278",
      id: {
        name: "FN",
        value: "03018021276"
      },
      nat: "NO"
    },
    {
      rank: 8,
      picture: null,
      login: null,
      gender: "female",
      name: {
        title: "Mrs",
        first: "آیلین",
        last: "رضایی"
      },
      location: {
        street: {
          number: 3654,
          name: "شورا"
        },
        city: "پاکدشت",
        state: "قزوین",
        country: "Iran",
        postcode: 96101,
        coordinates: {
          latitude: "79.8905",
          longitude: "37.4690"
        },
        timezone: {
          offset: "+7:00",
          description: "Bangkok, Hanoi, Jakarta"
        }
      },
      email: "aylyn.rdyy@example.com",
      dob: {
        date: "1962-04-01T02:54:03.972Z",
        age: 60
      },
      registered: {
        date: "2008-02-04T16:24:11.327Z",
        age: 14
      },
      phone: "071-08262097",
      cell: "0953-273-9901",
      id: {
        name: "",
        value: null
      },
      nat: "IR"
    },
    {
      rank: 9,
      picture: null,
      login: null,
      gender: "female",
      name: {
        title: "Ms",
        first: "Laurie",
        last: "Jean-Baptiste"
      },
      location: {
        street: {
          number: 522,
          name: "Alfred St"
        },
        city: "Havelock",
        state: "New Brunswick",
        country: "Canada",
        postcode: "X1D 0T3",
        coordinates: {
          latitude: "-25.6066",
          longitude: "121.8547"
        },
        timezone: {
          offset: "+10:00",
          description: "Eastern Australia, Guam, Vladivostok"
        }
      },
      email: "laurie.jean-baptiste@example.com",
      dob: {
        date: "1998-06-12T13:55:05.866Z",
        age: 24
      },
      registered: {
        date: "2019-07-08T11:33:33.388Z",
        age: 3
      },
      phone: "L80 E22-5174",
      cell: "W24 L17-7955",
      id: {
        name: "SIN",
        value: "284690922"
      },
      nat: "CA"
    },
    {
      rank: 10,
      picture: null,
      login: null,
      gender: "male",
      name: {
        title: "Mr",
        first: "Oliver",
        last: "Rasmussen"
      },
      location: {
        street: {
          number: 6242,
          name: "Købmagergade"
        },
        city: "Ansager",
        state: "Sjælland",
        country: "Denmark",
        postcode: 65340,
        coordinates: {
          latitude: "2.9990",
          longitude: "118.9575"
        },
        timezone: {
          offset: "-1:00",
          description: "Azores, Cape Verde Islands"
        }
      },
      email: "oliver.rasmussen@example.com",
      dob: {
        date: "1946-09-30T15:36:44.413Z",
        age: 75
      },
      registered: {
        date: "2002-12-12T22:13:44.689Z",
        age: 19
      },
      phone: "34626352",
      cell: "02184548",
      id: {
        name: "CPR",
        value: "300946-6067"
      },
      nat: "DK"
  }
]

export const hackathons:Hackathon[] = [
    {
        id: {
            name:"TFN",
            value:"557448189"
        },
        name: "Mr Harrison's Hackathon",
        place: {
            street: {
                number: 8857,
                name: "Otipua Road"
            },
            city: "Upper Hutt",
            state: "Nelson",
            country: "New Zealand",
            postcode: 27911,
            coordinates: {
                latitude: "53.1897",
                longitude: "-95.6131"
            },
            timezone: {
            offset: "-3:00",
            description: "Brazil, Buenos Aires, Georgetown"
            }
        },
        date: "2000-10-21T02:46:51.128Z",
        developers: developers,
    },
    {
        id: {
            name:"AVS",
            value:"756.6111.3653.57"
        },
        name: "Monsieur Livio's Hackathon",
        place: {
            street: {
              number: 4391,
              name: "Rue de la Barre"
            },
            city: "Wängi",
            state: "Bern",
            country: "Switzerland",
            postcode: 6568,
            coordinates: {
              latitude: "-63.0699",
              longitude: "-171.9585"
            },
            timezone: {
              offset: "-7:00",
              description: "Mountain Time (US & Canada)"
            }
        },
        date: "1995-03-31T04:46:28.094Z",
        developers: developers1,
    },
    {
        id: {
            name:"CPF",
            value:"314.542.035-04"
        },
        name: "Ms Hilla's Hackathon",
        place: {
            street: {
              number: 3829,
              name: "Hatanpään Valtatie"
            },
            city: "Hyrynsalmi",
            state: "Päijät-Häme",
            country: "Finland",
            postcode: 24900,
            coordinates: {
              latitude: "-22.4139",
              longitude: "153.5372"
            },
            timezone: {
              offset: "+6:00",
              description: "Almaty, Dhaka, Colombo"
            }
        },
        date: "1956-03-08T20:55:01.457Z",
        developers: developers2,
    },
]

