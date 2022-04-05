const top15bank = [
  '0x9a3a55723dc8974289ec64ee6517fcfb20577b40',
  '0xb3866a052c7d39dc3f149bfefdc2672988761121',
  '0x5fd4fa07178f49b2a4d599a0c82d2d73c3433a3d',
  '0xeadae19b253acf632b0428eaa0499c87c30f340b',
  '0x6c002a02670b2879cf8d64e6f9a37a495a38b6ab',
  '0x6333dd17adb9171bbdf7604292490d9b75847561',
  '0xdf3ab7c85b4a65013b52100add7918d163851639',
  '0xd52784d31f5575fbcbb45d7fc36ec68c7f9dda12',
  '0xd2aeb292adb0785a9062d90ac33047d12e9043e9',
  '0x997ac66df7857e878646dce97c13ab11103ad723',
  '0x79393d0c8442f1c01ccd18d1e6c4519a2c2f4868',
  '0x2fca36d06e82bc822d7507bfedf548d03ace41f9',
  '0xe42c71135fb7b6c98eec92334d68f73cb1e702db',
  '0x5027310c3620116587ab84278c8a5c34911e90c3',
  '0x7454f88ae2acbcfb13a66a15b1798c9400d9eadb',
  '0xacd41dec7efda46bde8e4bc512941f9216b98be8',
]

// const potentialWhales = [
//     "0x00d3be15cc9a9d071b6810531fbac7938c50ac39",
//     "0x02a2117a68f7c1d3635cfaf49135b71e388e80ba",
//     "0x04310545bce1a5d43f498e5613bc76ad185e95c3",
//     "0x04739c4b2d1ce9e3249906a6ba6bcbacff461ba8",
//     "0x050f76f8897d9f6a61ee05c146cfc002c7c7e3c5",
//     "0x0a81cacc9fd26f34363a415b6dd69c45ca1837e4",
//     "0x0ad6f0bc2300d311bc51cee76899d1f737748cdf",
//     "0x0c271ee191e55d5e6ecc725ee84953f5163c60ab",
//     "0x16006fa86d122f3963d7f268b4a7e03b8c3789b2",
//     "0x1c7ecd6eb506248727e5b6500f14106deb2f2257",
//     "0x2038c11f3132ac62ae062984ac0d8a14fe2e096f",
//     "0x208b2bce76ffefbe70c0fef6ca60556f2bf86490",
//     "0x22e1da0698f504ca56a4a4d5d3395391d8cfdd7c",
//     "0x23726751acc6718f1426ab321357ff81bbc0716b",
//     "0x23c0394f412b830d14870970e8d746a65846312e",
//     "0x244729f7e533bdc671e1c5d6419c0c2c215a5334",
//     "0x24e4a9c7b4a7a981dcd159f3dcba8bcd41cf70f3",
//     "0x25548cd21f4128d9ce479f006017b5da56d450c0",
//     "0x28275b34c719f07b2ec0e4fd7bea768ada57fd63",
//     "0x2c58b41cfdba0023c311724ae134766999ed3b69",
//     "0x2d88b3097cb30ca0be6922e84728e9d6bc8fe93d",
//     "0x2e75332e7eb55056017dbcdee206601cab372eec",
//     "0x2edf166a658af79c5c8bb268265a7def157eb62e",
//     "0x2f5698917cfa66322277ca0bf4f63b6b56faa0fb",
//     "0x3442cc6573e36ee8a123b922ca1068f12d213b35",
//     "0x3460aaf9f6161b45e73bf9316b896ebdb8226489",
//     "0x34a7c30af9d01df92e997967161053e4271ceb8a",
//     "0x34bbf057b533870db9a6090d20f204cc6b003240",
//     "0x450b66d90da714ece6d50ec001dae18e25230ea7",
//     "0x45c4144f8f995824eddf08d89eb46dcc58790a8d",
//     "0x49aeb029966057481eea09752df660891ef91a74",
//     "0x4a60adc9dba099a2f0c2c50befea1c017c70f43b",
//     "0x4a92150030cbf4c8f72c735e81b3adfeb7a7d0cb",
//     "0x50a1596e29c73708ec6416fce33615dd65e00ecf",
//     "0x50d1393a8c5ee410b4b1766a6e3365de7f7ff05d",
//     "0x51963ab4e054d45c79d1feba4e7e7e9e1d6c5ee3",
//     "0x5b1164dac546b37f4dea2f393b39602403422dd5",
//     "0x5b270c1fb46149c5d15836471c029b1f320b5421",
//     "0x5cea483300b666a7cd17d2338aca2aad7f5883d3",
//     "0x5e798b5beaa4cc65c5aa77bc189fa63c0e307bae",
//     "0x5fd4fa07178f49b2a4d599a0c82d2d73c3433a3d",
//     "0x61cb380c9ed6de17617fe0fb187c069a78ac4a6e",
//     "0x61d7c6572922a1ecff8fce8b88920f7eaaab1dae",
//     "0x62bc0b1c6a690f5fb60020b924a0c5833201dee3",
//     "0x6333dd17adb9171bbdf7604292490d9b75847561",
//     "0x650915fcd9f4d7c186affba606ca5bae1d05f4a5",
//     "0x6610e09ff914e115814fd6856de77ea28d05982d",
//     "0x69379ec9d211e0860330472a5cc5bf1adbd86527",
//     "0x6aaddd8b69c2d93483a174d96e42c063e3a6babc",
//     "0x6d34eb464a5c8d44ec4447a0678902f85f8a4590",
//     "0x6ddf1f5e106a274d311147fed969c1ffba05f809",
//     "0x6f5eea1e20e69c5db953db53267d0ab99b98bb03",
//     "0x71601eaefcbd2e1885345cd326eb17d511efaf29",
//     "0x71acf149b92f21c0570888a7331d362e5d808423",
//     "0x72dcbbbf54b24d22f8be0990349032a931799ccf",
//     "0x75f1255e8a03066c1624e43e90949da63e1489fc",
//     "0x78b348195f53f526889bde7e478d1a5d4bf041bd",
//     "0x79d860858361577a4f2a33d83aac2299b6d77025",
//     "0x7a0584eafd56e980ef74dd053802b832eabdbbff",
//     "0x7d9a78f607706b8f5ce26fba6c9eacabf8937df0",
//     "0x801a8b12c6a6bd62dad7f2a8b3d8496c8d0857af",
//     "0x804604f55fe79ad0237696465c57d3de997c14c1",
//     "0x81ed721b2bca42578002ce44ded3a33f199a8460",
//     "0x82dcff3c5f3cd89eee6887ca817a92289a73b7b8",
//     "0x837ba7fd792e9f7d9a2180afa0a9f02564b327c4",
//     "0x88dac82ed0fd80f0eba30395abecc0e14556cff5",
//     "0x8bacf86066d0e1fa13d750712ec155672298a0b4",
//     "0x8df34c66027a6a4a84f18ccac8b62dcdf7a238f3",
//     "0x8e8adeb64bcd257fdd83645296045094d0cc1845",
//     "0x8fb7ae993198a0369efe959ec99b6674cf672731",
//     "0x90930ea74ca84eeac6575f87262042c3e0bff493",
//     "0x96578f3de207423c612cd86591474f0bbdaf6e4e",
//     "0x97d7b13d7edc09fda5107a848c04417c49da7251",
//     "0x9952814d76a916725a3b3eb4d7154a2826103640",
//     "0x9a3a55723dc8974289ec64ee6517fcfb20577b40",
//     "0x9ff5dbd7484ce9915404695bc5bfd91d995599a8",
//     "0xa4bc31f18b4736c7279da9cd5e805c8a218077ef",
//     "0xa75f84403f62d9134e7ac798951f966fd8c510ac",
//     "0xa887bcd12c2426357020a4cbea5e54156a3692b8",
//     "0xacd41dec7efda46bde8e4bc512941f9216b98be8",
//     "0xb0a1be32df8c8248a54389af5d5528c38d92d5be",
//     "0xb1db096de2a713dbb6950dff2eafb76521881863",
//     "0xb40005c1b841975dda6ff115a3cf6547a8ed49f2",
//     "0xb558f57dd89ef477753fe90ef2619156ecfe1551",
//     "0xb820893d8a6be44e7cf5d57070a7cf801fe15120",
//     "0xbd3cd009f4b227f15a15acb6e0fda58bc02292d4",
//     "0xbdee31bcbe103a5ada02eafa2c35736cb39e53dd",
//     "0xc0ebf8cf9448be8e3ab08f2e16ccb45fd19a29b3",
//     "0xc1f5bc25e0f5c4d65530f42ecef1055ca55ee1ef",
//     "0xc677c66401b1d4c63d2edd7310e4da36070dc648",
//     "0xc70b844673bbd777c9e1cffa45401a267b16c065",
//     "0xcbc9792c620784da6eed5e2e61f7579ae102265d",
//     "0xcd147f1394941bdc7a00b48531dce81af0fd858c",
//     "0xcdd2773a38a3d45209e5da52cc6360c1bd29d813",
//     "0xd91b383c7ca00a25aad4a511f35d7fc892ababf5",
//     "0xde966ed974ca94b22814a78a0229022ba1479950",
//     "0xe12a2437cb7a8b0b86fedf6d05fde24afe193204",
//     "0xe2a3eededa9c77fd0f32c996d94a261d9a5cd225",
//     "0xe3a4973a84227f51ba9d35c55d3a2ceabb8c0f1f",
//     "0xe74531fc684fd031a1c1597a0e4a3fd974cf4c6e",
//     "0xeadae19b253acf632b0428eaa0499c87c30f340b",
//     "0xee8ad6769fe89ecb8fee0d981ad709e08e6d1c06",
//     "0xeeceea712b7c92e31a9f29ef290acdcbd08d609e",
//     "0xf2df969f59b2c86e4b230da88918cdebcfc4ccbc",
//     "0xf2e9af1c57564680a9fac773579e6afc403aaccf",
//     "0xf752f75e0ab6edae98bcb7817a7cd160c687b480",
//     "0xf7a8f04c7fe7c8a6ed692bdf5ee1658559cbe7dc",
//     "0xf9358cc0b2a2b8f20da1edd5d385e2d59a5370e3",
// ]

module.exports = top15bank
