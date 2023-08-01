'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7c5b3c2e328ff5338a58f2cb77ce5314",
".git/config": "d54f428cf4ec26a963f3407c0034134e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d0946d04b84b74f7f1efbf55643c0a3c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "98c4dc5c6ef7ea3c9277f404b5ee79f4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c6c0695027548c02a6e8b1dac1688f7",
".git/logs/refs/heads/main": "5c6c0695027548c02a6e8b1dac1688f7",
".git/logs/refs/remotes/origin/main": "9af1031d5011f832345a05cedacbb605",
".git/objects/00/f454bfb3b264642cdc9a40680e9ff6e4a2e416": "16918be50c569523cfde898f082dad0e",
".git/objects/01/b91f18c30e0afc617c5941567e79f897465c1a": "1069dc90a3c2a8c1c569c26febee1401",
".git/objects/03/3f741a22c9a00aabd121580f2abbd69a0a4274": "fb378342c5db15fc36191787aad76513",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/08/71013f4862d36877ec48aa7f37590aedf74799": "bd7f3a1f1e8d1d046ca19d54235b9f02",
".git/objects/08/ca3e59771afad360b77887567156f4ba27bf81": "53b31c0e18559edf9f44f587e152c035",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/3f227d3f40ccbce29062f779ff18ce76863895": "c444e85b255e304d32dc33f6f8af62ea",
".git/objects/10/89246837b7e783b442a586faac502c8ff97ca2": "99094e91d0943c7fd9f74cc08d74362f",
".git/objects/12/957a964f57076ca99912ffdf63d22611eb6c30": "607b3a9c31f92f324a7c0a4cbcf3b371",
".git/objects/13/70aed1ef1d4553450e8de7625b9467e42158c1": "e34b5b6a01d25eec34cdc660eb2749ae",
".git/objects/17/32e4bb9d55d005a8417e569583b0be4d761ded": "5196723170351b3790d1f84d2e302869",
".git/objects/1b/de155e4173588f7ac48da9d65229d24006099b": "bd815e551553c7883efb8d5fd1f1c8ca",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/93169c4b51e0baee5ba0a647a49e6330ca26f6": "786da8240cc988c7856ee3d003eebd88",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/dda756d9ddd834f42fbe3b9e0dcbc2d2825e18": "d01e2b1f53f6833bf54b7a9592b21f38",
".git/objects/21/0811d31e6c6dd0690f38b46660daddfaf95fe9": "798d0ddaa654991499999e85db527575",
".git/objects/23/dfaf455894ace8281af4fe19a3a27f3e0f0b30": "61705ddf332974756a7721c2b0b290e4",
".git/objects/27/38ca1fb312519e3636b876c22d777e4e999580": "2b4234eb38138043dd407a5260bed2c6",
".git/objects/2d/86cd4964e84ba5ed1092c59030ccd0540d3892": "52832cd1216a74c560a3231f1a2b993e",
".git/objects/2e/8d22217cb74f10698cf6423ce81f0785dccabe": "e6f74c2b7d25694dc42ea58aecc16961",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/00409830a5c225a8c59fa36baa253f50f11497": "47e9df6fffb4af1757b5432e429437e5",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/44/1f41ade01b118dfe0f13a8e113651894dcae6c": "fa2117a64833624e80cc6a6e9682e884",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f04cf7b199d9af3e7abe3a4de8d690df65e27d": "cfce80fd8d425eb9ba139dc7d9fa1a18",
".git/objects/47/a6b4ac27ecb58359d2f65b3a855cb76b35fbed": "609398542160f093b38670262e2dc0b5",
".git/objects/48/0ab9cf9230d767b6535e4e8e51cef3b75bf23a": "3fa35cf3dfd01fcc5de8e16e54c51e93",
".git/objects/4a/cdbb81780e830f3f5db1d7e28c33d85e164769": "343b685b44dfc2ee504a505d7e8296dd",
".git/objects/4b/281592d0889ec4d07f3a9e4b17d7bdcd4bb0c4": "0ddfe7a371e56f7f42976d41596e2031",
".git/objects/4d/6b912eef02b84ea0a1ace418edab135f7ab81a": "ad774adc573be0a2819545ab0643f63c",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/14cf0fd3346f09745f01f2d76e389f643f5012": "e0c920151884bf9075ef15013fd4ce82",
".git/objects/53/5ce81cf842ff7373f582ecf4ac39b14002fa9b": "bd311ca70e7863ef97734760bb1db90a",
".git/objects/57/6c1828a64d6484891013e03d55422f6123cb1e": "89906af6ded00429bc7a051b7b18b016",
".git/objects/59/6b1b5b848a6a5f0f43555addb532a918080d48": "6b0ff2bfa6db16085c7b89acf88b18d5",
".git/objects/5a/02083a1dace59688d9bde2b1fe2b1765171398": "12ce3cea4467ed3c3f40c39e7c5add21",
".git/objects/5d/d9d525847fce9ec58f9fe4ec89b0fc4a68e3e7": "70c62369eff9d673b26e8efb78a7b307",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/18eca4e7797c4dc8f96624a276173bd733758e": "9d65fd91b43c357c959b152402f4cf20",
".git/objects/67/5f6a6d0fc7bdafa41add445d431f136f486208": "168f80418fecec11f28bdd489fde79aa",
".git/objects/69/13f49b29c9e19003ddce3eabaa7db48e6ad4a2": "a25d393c86c291049cbdd51ac36dbf71",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/c5529a2ebaf18896cb641c94ccc28a83426ea5": "230f1a8c11c2d1ed6669d08af9e40f75",
".git/objects/73/18f758415e2444e3a83d8b4de3ef312c09e89c": "20de2d967a1fbe2f91035225c130e6dc",
".git/objects/78/f6dfff09141909e1ed86cfcd670709e2fa5ffb": "eeb8ac12d9019d1b1211b71c3c8a6ec3",
".git/objects/81/6341208c8494a5dae114a5d2dd3665c222f6d6": "3d139e75d262426204920aaf41b3c276",
".git/objects/81/f91a664735f8ed2047f125479f790ddbfc4da5": "15a14ef7d9eff34b004ee9b386d486c5",
".git/objects/83/8f112f86c7f02688b2b819ea7925fa6aac5085": "c3a13e24b2d9cfce45f3afc693c2d4b7",
".git/objects/84/09f24eb43b850f1a588bb6b36609886e8a8ff9": "921fda02bdb62088b9146871e2dd27a8",
".git/objects/8b/50037bfb670f635930ff4e899de8dc3796134b": "a1f96d4d77725b66213a3678b3e12d3e",
".git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/93/ed9ae362b9f0d8dd978a48ad612f6e427ef13d": "cc1b2a0428cbdcfb8a8d3d7716e02989",
".git/objects/9c/e2695a7de329afc937f85b1347b600cc3e4072": "bd4ceef20662c9280d548db7ca9da99f",
".git/objects/a6/8c77fda966d15f64c846647bba315be2175616": "c2294d297d47497a61669f6872fd5f87",
".git/objects/a6/b03b56b772aaa0f06f205c84b2198b0f658c80": "9412941eb0e0861620aae9bdd5bdfa24",
".git/objects/a9/4f5f5ca4a2a842d321baf2b656170655e2ff65": "9083f4c70d52c2008901153a9e915f07",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/5500fd0f8fa13b92dec6c1852b537df28f307b": "0e011d831c459b2fb925381fab64afaf",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b8/221ddce11117bb78909f94a4139aa8232e1e5c": "942b4c5faf25b6774e93044f99628d97",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/bda6bb09e75b0a806c2545c2f1a0a870dcf0e1": "f74c37028e4ab625d4d87855bb13e23e",
".git/objects/be/e343cee1cd701da41981e52c5da06eaed45325": "c5c444459633651f5972565679bc4f88",
".git/objects/c0/69ad01658f905e1868911872601e7b96cd559c": "9a08d944f35258c923605e592c1c1f83",
".git/objects/c1/0947f5551d50278af08358cf0c4bf2bc29c691": "a9a68862271a4bc42056f40d19a72b36",
".git/objects/c4/00a8933c6a879ae884b546fa71134f7460f3a4": "976b81d56563714d06568e86b633879e",
".git/objects/c7/1f641e842fbb494957e1e040ff74c4cc21532b": "03d4f700aacf523a360a5af83e199dfd",
".git/objects/c8/d101cf708a5f4ba779f44645d76241cdfe9edf": "9111e2f1b6c82dcc6237bffa76acc409",
".git/objects/c9/4453f0d1b366283a54a20e08b05f4e6f96e7f8": "1f111dbedd9c3b70b91b253f456fe1ac",
".git/objects/ca/8d7efd322e47ff2c65acc402acf67849420686": "6771711e925fdf5fdb1ff0e0d8f7c5b3",
".git/objects/cf/073dbd9dea181e495ca33fa0994230c81a0ac5": "a8d1f878ae7b155e8096e4c176fd57bc",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/f6f2f7f2b7e94a01ab6e3309a301c97730e35f": "9f754a2df67438eeca78cb88bda96d74",
".git/objects/dc/38568f31c664813b16fcdc9487908e3f2d3809": "45a4a1f7869fc460dd014d6adfacf217",
".git/objects/e3/b884df6161373cf00b98a77b791108694c088b": "3e2fc9ec7b9eeaf3fc0bf0edf3ffdcce",
".git/objects/e4/de0b3cd2131cf4a2e4afe4a2edb71cddabc904": "fbcb6179e75153c91d2ff373c0e48045",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/5b2926d34c1ad9076d1c9e9e2deed8259177a4": "bc1e50534756edc0e020d89b550f061e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/d7c0078900e53449c97a6e47e138055663cc7e": "d4e5accdc5b66ba8abfdf92e88568537",
".git/objects/f1/fade7a6710667ecef5167ea54e4b208584338a": "39d73ab3019e6f8c18c5c8dc94dc9112",
".git/objects/fa/a8265dec32c4b18bc6d066a293cf5cce106311": "db51214b6f367b89e107e7d1437e76ca",
".git/objects/fa/b1a53000aec2932cb258c75773f9242e7f55e1": "da03b92743130c93c45f41840290f2f9",
".git/objects/fe/f9ebd0f0ac45c3edbc4083c1afeef91f1d6a8a": "27405ba5056f9d035144d5f660b8afcf",
".git/objects/pack/pack-0ab516e6e03a7efccc22095cd074122b6bf346b2.idx": "dd7ab32ccbeb004ef21624b194eb5322",
".git/objects/pack/pack-0ab516e6e03a7efccc22095cd074122b6bf346b2.pack": "b62f61645737f678fef33b3793e2faf8",
".git/ORIG_HEAD": "ca8c13dca345aeb763e47ac6ec6c858d",
".git/refs/heads/main": "ca8c13dca345aeb763e47ac6ec6c858d",
".git/refs/remotes/origin/main": "ca8c13dca345aeb763e47ac6ec6c858d",
"assets/asset/images/5d8318ba-1c38-4450-a29d-29971df6c58f.jpg": "32282acd7a5df3a9d5a92a6b6545cd8e",
"assets/asset/images/appStore.svg": "3faef46c004ef3e793bfee24cbcf4c5a",
"assets/asset/images/appstoreLight.svg": "0085f8055f5298a61cd3e8e061638d3e",
"assets/asset/images/container6Mobile.svg": "3b59c07cd8266b0c21b77763a22b75d3",
"assets/asset/images/cusotmerDp1.svg": "873f80744b339804fd706d42b1b4a971",
"assets/asset/images/discordIcon.svg": "71fb03ff820e2bfeec5189a0d91221fa",
"assets/asset/images/fbIcon.svg": "6e435a5573709358a2bb5280e0a51065",
"assets/asset/images/googleplay.svg": "497e1941982d6194fd7360f13631d256",
"assets/asset/images/googlePlayLight.svg": "08c1a996960d5b485c2aa2e0e210cfb0",
"assets/asset/images/haderIcon.svg": "b3ce8a248e488a21462bf947df823a48",
"assets/asset/images/heroImg.svg": "1c462f54a65c8f116a318138a0b2b836",
"assets/asset/images/heroImg2.png": "a66906110c40ea635040111efeca8b6e",
"assets/asset/images/heroImg2.svg": "32336165b871d2f8c7528d2b94bfcc4c",
"assets/asset/images/heroImg3.png": "6a359697bbe0724714b3053cabdf7393",
"assets/asset/images/heroImg3.svg": "ebfea2d502d646c088f4bec9388c1d1a",
"assets/asset/images/heroImg4.png": "cef26bd20eb87313df04b17964d02292",
"assets/asset/images/heroImg4.svg": "4945c850c5799959405a9631d3666449",
"assets/asset/images/heroImg42.png": "12ff051abdbeac0211390e319c8a4f91",
"assets/asset/images/heroImg43.png": "bbea6ba1b924ec669a72b7f2d231c33f",
"assets/asset/images/heroImg5.svg": "698756f60331431c40e5626152202fe8",
"assets/asset/images/heroImg6.png": "70ba04df5ba1f39121b655b44c9fe108",
"assets/asset/images/heroImg6.svg": "03bb4b3c5ab788ec1f6c6ab0501e4570",
"assets/asset/images/HeroImg6ImgPhone.png": "b4804bed3df7be3824b72308fa5e0f8d",
"assets/asset/images/heroImgMobile1.1": "3e4060c26bfec59a0363c9ab11a5fbeb",
"assets/asset/images/heroImgMobile1.2": "3306d7e52d59b6c7c75299df18275d73",
"assets/asset/images/heroImgPng.png": "e2d9ad89abbfbdd4ffbd3cabd728384c",
"assets/asset/images/images.jpeg": "a269ec3e994c1a25192f0a52e401cab3",
"assets/asset/images/indian_tailor.jpg": "b01c712d20d265aa3a2668557c0f61f5",
"assets/asset/images/inrIcon.svg": "049ba5372cc5019ad81f4714d0161711",
"assets/asset/images/insight.svg": "c94005d6d2faa8c685a53c03ff05b065",
"assets/asset/images/Instagram.svg": "55220d40d63969cea2411cc09ce174b0",
"assets/asset/images/invoice.svg": "db88ce4791bebd9ae27a03a5541437ac",
"assets/asset/images/ladiesTalior.png": "835db6a7341799608a2a342ad04ef957",
"assets/asset/images/linkedin.svg": "21477506603b7ecabae6af5cd0791fb1",
"assets/asset/images/measurementIcon.svg": "8e52aa2ea369f20ee34c6ba1fb82c57f",
"assets/asset/images/menuIcon.svg": "832bcc942e3ebf8c134f2e8e8b8d7936",
"assets/asset/images/mulitligual.svg": "ef5c7ef5872383e33400aeaebd19394d",
"assets/asset/images/panjabiTalior.png": "812f818dd9af1cc6ba19f2b10522afe6",
"assets/asset/images/peopleIcon.svg": "178a1cd9f71fffb42b80890904cf27e8",
"assets/asset/images/peoplePaymentIonc.svg": "6724754cdca7473d3f7a6c9d50c9e5d3",
"assets/asset/images/peopleTickIcon.svg": "f8bf589a46eb99aca1d3224b8f29223d",
"assets/asset/images/purpleCircle.svg": "360630269bff49855ee6a3f9dd903af7",
"assets/asset/images/sheetTickIcon.svg": "370f53d203fbfe7e9b7182f0537a941d",
"assets/asset/images/shielIcon.svg": "b5c92a4b6c2867484aa2e7b00c8938ff",
"assets/asset/images/taloir1-transformed.png": "a4041640aa45e51b87898370883a7740",
"assets/asset/images/testomonialImag1.png": "f3439dcc89ce82b7092c45939670aff0",
"assets/asset/images/twitterIcon.svg": "764382093f693abd3ebe95db24e04f27",
"assets/asset/images/whatsAppIcon.svg": "fe1c67785505293197acbbd57d23cf90",
"assets/AssetManifest.bin": "f06b9615640ba7cd21b9a24ac849ca44",
"assets/AssetManifest.json": "f65cd0fb72c8eaaa700b02b2ef509533",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e87190567d932952b9c6bc0181e73e89",
"assets/NOTICES": "bcca60e7e11ac32cdb935611daa4e68a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "3607234ffb1ce4fb046b015b5665b7a4",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/apple-touch-icon.png": "27c2e05595a82bbfa32490274b07f759",
"icons/favicon-16x16.png": "da0237918d3796e01dce4897e085a91b",
"icons/favicon-32x32.png": "aa02784222fb8587c07fd3438c5d78c8",
"icons/favicon.ico": "f783984ad04cb93348592765e4e2d9cd",
"icons/Icon-192%20.png": "3ec984cae6791dbfe4c9be729f0c1684",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "165e3acbfb7a154a96e759f2797b19a5",
"/": "165e3acbfb7a154a96e759f2797b19a5",
"main.dart.js": "5a77b9173a2b763bf87107c7f15ea5ba",
"manifest.json": "55ec68961c1fac122d4a2311cc70e711",
"version.json": "1344d082b2c5a54e3ba619513aaaf88f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
