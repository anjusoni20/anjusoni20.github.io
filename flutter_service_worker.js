'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "25b779168855f8e717d5e527f4b69029",
".git/config": "48a9617034207b7e29aaaceca58c1023",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3ae3cd713c27d6b6c12e72cb6705b34f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "681d7ed50a69b6405eed737ad85b8cf6",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "539f3a762ed47cf37b4d368770ca0f65",
".git/logs/refs/heads/master": "539f3a762ed47cf37b4d368770ca0f65",
".git/logs/refs/remotes/origin/master": "52740e337d52c503ddd0d7ae4219faab",
".git/objects/01/4c0f1db7187ec98bdc5bb863fb5047c5dffe56": "113da4381486350ad956a1b73f9ca352",
".git/objects/01/b7d6e052cb8a2ef390573823b8b132a3742c81": "b675a7d3ac18ae7bd2d613e51d75919e",
".git/objects/09/abcb283f4587da7d8cdd44222b219114d6ad4d": "e7782effe382f3b05cbdc841ed1d1856",
".git/objects/09/ad27af87bbf3ebce2322e44cead0531cef988f": "d12db55a3ff3c1a568bcd84dfc61fa04",
".git/objects/10/a6f3818dafb8cd0ac747eade0b250d4f559717": "52d6f1c3f33e43a8163c327edc4f0516",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/14/4e4fa9dd935dbbc2d7a58448bc695ed7a720ba": "f07230ec56058ee0c87381e0d925f695",
".git/objects/14/87f1a03f09ecfe3e96667dab8aadf42843ff0a": "b9e8c195ca9b8e143b6cdb15e44d1eaf",
".git/objects/18/9508a21a2cfe1e4a2e74c1f566031adaa6697a": "c74c10dd1423d2171e098e4c8e76e94d",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/67116ebace2e7cc7f0dc28a1e7035d938b3054": "d47b406b850ce1df0ae8a6dd89727768",
".git/objects/21/5cfa41e421a6af47cb2afd03744f1b6f7d525a": "40fe86aa53631ae9dbc07d906e66e45c",
".git/objects/25/52364605214ee10072f10eff8b2a493664ee11": "f676423b027998a3dba9d4f94a5545fb",
".git/objects/28/4d7e2c1cf6d92de952fbf8ef17848b7769f54a": "1eb34adad6de2f7351322d671b713e14",
".git/objects/29/28406937c9602f37013f9457f35088392e5243": "cf6055ebffd9b96758e2e11cdf678cc3",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/ee8194a0130367a3d3049c1625d33c1489254c": "e53b00a5102a74ce682adc66627662e7",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/3a/8f2f41eeee046f3f03080fbc16a4f14195d38f": "cb25e6514655c68042cdd21cdf8596e4",
".git/objects/3c/a9a30c0bc7c16e2ab11bc198a83eab6a2ba957": "c00a50251f0b9da6dce0cc535135f5aa",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/3f/3ef9a1ca5c4fdf2c7c65c81af6a375590af765": "64c7dd010542ce7fc9caeb8944d83592",
".git/objects/3f/44eaaf3a9542cfa87dae1ed7a59cccaf92a558": "41b6eb0c5743f61ba9a843651fbc9d66",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/43/1cb6c0007f9b28879e7d3513b101a61c813c38": "a5aa95f226dbcca106d7c1cb2537c89d",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/45/2e5f921a2a46f3c5db6e5da858515a8aa4dc99": "08a1b01a6f9efed3cc81b75b4857e301",
".git/objects/45/edb3dbf4c1724b1cdeb18ef7604072afce3364": "f060cc78a22d15b933dfc7ce23a045b6",
".git/objects/48/ac0832d05df97fc4a7b407420d597df821b343": "5ae250d8fc9c5e3b47d54515ccaa9424",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4f/6c823b9175e952950c12adeae259fa48e451d0": "68b646d711f74e2c9878cb28d6890389",
".git/objects/51/9f4c5647d4026374861bb92f6ba258d6e952b4": "42cd1e67dff6f0273a481746f7f5ffc1",
".git/objects/54/f5c4c04bcbd0a5ed23bacaa8f003fff2d6361c": "8c91cbdd0895bb783ddfe2476cf098ae",
".git/objects/5b/36fb70cfae43c079739354c2a65194e5e02ffe": "63f824bafab9b7efdef87ba980f8470d",
".git/objects/5c/fdcc3cb4307fb8caf7905cc175e404a61b3a2a": "4e331e3c8d8c2a34a250ee5cab47068c",
".git/objects/5d/467142dbe3654e8b866365b622e26e2cddc4ee": "190903905f6858b4e01bd91bb934aa58",
".git/objects/5f/bfef8205ff1b3b50c8bd00ced3f870f159a65b": "3a69a09fe6a444897411f9d270678cd9",
".git/objects/63/0dc290c6333b84b86059d00757023f1cf02bd6": "dae65a3805e5603f82ec40125f203d0a",
".git/objects/64/080d4c6075a55e9b32835aa6ae21751729e36e": "6a079112a545af78eae97c1d2a706d7b",
".git/objects/64/46ad008aca6dc8dda43c36db138f85e1b93146": "955c102941f146c49487015bb6c4daf4",
".git/objects/6b/83c301347c50ddc4fb8ab22bcac5f856f4ab39": "55ed82257a1f8f29acdb7a74edd9b861",
".git/objects/6d/a33cb6667ca8b55a2f44d5b77820a9dc059cb1": "d1eb9c8652fd822390e2978b37512b94",
".git/objects/6d/f4d689fb40c76cb01286cc1b2f7e83ab5d8f6e": "65bf0955957cd1cc0b56cc92d9aeeb6e",
".git/objects/71/f5270144f18cbe7f71e0d3bdcf092f57ddf535": "a7644f04765c394bef5ef2038058f1c4",
".git/objects/72/8e9ba1da1e37a52a79f1dcd65f83be2e844b41": "87062b9e2408fe735790e308aeb1f178",
".git/objects/76/fc4d35526aae8685dd9149393edd91e6826436": "e0016f4cd92f762f07e161cfaa003e12",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/b581481557f35fa3d46d3b466caba05e82043d": "d994793938047c2b529bb67d7b1e573c",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/ed7b0f2e0d26bd73b33a2741d1f922f9243c6f": "4324b220bacf01c58f28f4e8ca47ee0e",
".git/objects/81/01943bf35d27c4ea5651f94b1a4e6acdc9922a": "b0847e3d988362eb78223adc5e5a9323",
".git/objects/81/daa02ad99248f966d09a1f77ad700efdd4d72b": "caae07f5b4226fb0796c578dbadf583b",
".git/objects/82/135cf9788165582ef445eb82ef7e6e11369625": "564dd38ee9d633af8dda7d38658e658d",
".git/objects/86/32eb880ddfb6225532947b5f5890f1989cf1b6": "d392cd5a6d370e4d0335d59045c06f9e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/9b1c47dfe1d9eb67a3a016d0807ae4a1c6932d": "e7dadb1d819a4484eb8417a7c734c1b2",
".git/objects/8d/b9c27c912291140207a81891ddd68805643e06": "04c04a1effc0501f15e6a50c1c1c47a0",
".git/objects/8e/7bf9ab6bf4b7b4be5132b84b63c40dbbde0f62": "fe3cc8f75a959eff610adcef3dcb98a6",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/93/4cd5b6dab970dd165774a0e083220d0ed6f4d1": "bbaabb8bc6ac4f2a66f5cccb63eb10b6",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/9a/0816af8144c815eb234790d7571ff1789bd1bb": "8f7fa0d192e47584a2b4e3cf82fc8d13",
".git/objects/9c/7827fb72b91bf614ccbf30b6d915b3be7f5547": "729967b4f52a387a4c21d36b880563b8",
".git/objects/9d/64e75b05e8e40999cec9121863020b9bba4606": "70820a7e26d528f547751b59f5eec11f",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/b026b0cacca22d74114496d039b424d9c1c336": "77ff81751f99ac889a5fd707ca4fd690",
".git/objects/a3/d0aba2359d476718781bb269a7beb67ffb6dc2": "1688e122b1f3f6a3fa527a0654fa92d4",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/af/b4496435fb9e7eeef2f8164e5bf10663c4622a": "b4a1a8ba5195cf4cf63188b3bc714a20",
".git/objects/af/f45d287b507a82c98e5c725f460a67bb0729af": "f4bf166440073e47483b9918e180b529",
".git/objects/b2/0d0da95b04b0f141329efb369f30f3a0da5d49": "dc5291935ae1b043fa3816db073c1a3a",
".git/objects/b2/896f9a58cf01ead823fe242d1a0582f3d40a54": "747b42342078ba03f06e93a22e3a7330",
".git/objects/b2/9e1c27e2460aaacedaa07bb5e13afeca140ad5": "06238b59351cb3974097fba9ba0c676f",
".git/objects/b3/336fdd3861f8a64399452e8074655f3a74bb46": "8b9b8499e5148ee337189401fea887cd",
".git/objects/b5/d870e92b8c4b708f18347f823ff1b4ac3a6b56": "1ecd4494560a6644355680e3fa19ef4b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5ca8601129ce83b0b2c7e799244b91bac62ca8": "7eb6c7caa71bb5e65cfabff14c09ede8",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/bf/d14fc817f6e8623834627c6ee732028829f943": "a8c15a6226bf845ad84db5c4e7f2e08f",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ce/b03f4cf40533b1e03bddf31f16169d22de3a3c": "c54c3df89b50a9cad897f23b2cfa5bb8",
".git/objects/d0/346bfd469b91e45ea848299bd9f75ee08ee2bf": "e082587e653b7cf8a1927c6231cf9e95",
".git/objects/d2/553895d65e9e2c24b88c8d47a604039d9fbf16": "d9055ec784b053ba005a094cdecdad4e",
".git/objects/d5/bc9912224824c4ec0ac958a35fe7fc27f5ba81": "786e2874ecb55e49bdc1cfca948d2218",
".git/objects/d6/e11864cca8a596e08a2cfe8f5a8ad24d944919": "977ad23e59752607815f7c076c2c6719",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/dd/f1e262276346b31696495c64ca385201fe30fd": "6bec85af96f92670b884b272d19ff7fe",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/c6483dbf4b706b94723b3cfe47bf50a7c48ac7": "ed1756494e9b5af933e4f6d439141a52",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e0/4ec44ab2bbc5f9d19aadd2e902e0504ea44111": "6590dbc020019930440be8046b557066",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/2b21c5c58cf26d7c5438e9e79caee5c6bc479f": "54f4d0d6d6b07cdc2b245937a4851518",
".git/objects/e7/f6a598e615507e47355d81a4a45d345d5d7071": "460a5ff9936b9f3ff2121fdeac3cfd3d",
".git/objects/e8/475e6c0a7ac77e1681992496f4259710321846": "34fe37424ea0bd77c4b47a7475f55c5e",
".git/objects/ed/f25ea2d6dd36ae089bf96d69e6ade81cd31d2f": "ddc23f190c20ebd37e06028dcfa9fd25",
".git/objects/f3/34f635e8d80bacfe4a82c24042dba8cc810d8d": "03b9a7ff3cdcbe33fa10348ac6d24493",
".git/objects/f4/c5d45028f372ead50fa95f2bdaec81e47bc881": "b48b7fb51c4c3555c3deab8077268abd",
".git/objects/f5/5d8a6d8c7f8a765304a7652be0d6dce7d3087d": "49e089791b733721e7c1554b015db984",
".git/objects/fb/77e327ecd529a26ef779f265b92564cce2c59e": "e9a498e4e7c0a2adb30b592092e6003b",
".git/refs/heads/master": "dac13d544ed887cf2f20c8ee000b31f3",
".git/refs/remotes/origin/master": "dac13d544ed887cf2f20c8ee000b31f3",
"assets/AssetManifest.json": "4d9c0fb6353bc26ee857171cc3150851",
"assets/assets/fonts/TTNorms-Bold.otf": "02272f01a6a057304b0d429448157b90",
"assets/assets/fonts/TTNorms-Medium.otf": "38aced5b5d46fc7d64a8412bc07cdde2",
"assets/assets/icons/appli.svg": "1d0953625ff5262be24be3b67d89aaa6",
"assets/assets/icons/arrow_down.svg": "9d32f71424c93b328477e105e731d596",
"assets/assets/icons/calendar.svg": "fcf9dd50b4c3a777a363f9b2fcbb55f0",
"assets/assets/icons/log_out.svg": "3dc4faad67ebd983f5a03dd538d0ea9e",
"assets/assets/icons/msg.svg": "5f54634f40aee2097f606bf19a1c98d2",
"assets/assets/icons/notif.svg": "fa0144fea4ec5447016187b05bc6aba2",
"assets/assets/icons/record.svg": "ad17c19ea765a1df249bcc81353ca16b",
"assets/assets/icons/setting.svg": "a4f05de3edf401028fd63ed289a0cba9",
"assets/assets/icons/user.svg": "a3c9dd4649257bbdbffc244ab3c4885a",
"assets/assets/icons/write.svg": "47f876d9b4d2baac5d7d815a1270dd92",
"assets/assets/images/Dog_1.png": "eac690eddacdb2380dd98a6564a1628e",
"assets/assets/images/Dog_2.png": "f8c8a0ad87d3c81f64df845a705627ee",
"assets/assets/images/Dog_3.png": "57096c0edfe51bacdca0fb46df04600e",
"assets/assets/images/Dog_4.png": "412166121fb2491649ecd2544b3825bc",
"assets/assets/images/facebook.png": "8fa61091fe3ec9e07090eb2e2149142a",
"assets/assets/images/google.png": "229bb2852ef40dabb4cade3c9f718fc9",
"assets/assets/images/linkedin.png": "660266a0d69b6bd16a5f2950abdd725a",
"assets/assets/images/profil.png": "bac5846a4d5444e7f276b42e488d2a48",
"assets/assets/images/profil1.png": "7ec72bffd6bd67d1feee85950dbe5f98",
"assets/assets/images/profil2.png": "c961125d1f39ad479db49fa5be45b726",
"assets/assets/images/profil3.png": "233830217c71d26c2046d8b5edff2cec",
"assets/assets/images/profil4.png": "8261ca7bfb947e4eb5168bb552bcc6f1",
"assets/assets/images/Signup.png": "edea501b7642236e2ca758b9ab271b2b",
"assets/assets/images/sss.png": "431d2d5bf5aa2348964e3d7f8ad216fc",
"assets/FontManifest.json": "71d55b0f925ab22a5b143a4e91ee5771",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "7c9603b0d5e6bfbcf33c5ed936897e39",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "bcc78af7963d22efd760444145073cd3",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "cfd8b09eabc793f3f71f149739bdd266",
"/": "cfd8b09eabc793f3f71f149739bdd266",
"main.dart.js": "3b40d8e4a42b056c410d6f0a0f793266",
"manifest.json": "c23ec3262bc54813c73a122f9571d8ee",
"version.json": "1fcbac89cd65c1593111e8211945ac29"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
