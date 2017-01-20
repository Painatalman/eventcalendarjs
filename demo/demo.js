/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Calendar = __webpack_require__(1);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// var Calendar = require('./dist/app.js');
	// TEST
	var eventSettingObjects = [{
	  day: 25,
	  month: 4,
	  year: 2016,
	  title: "Adoção do Riscas"
	}, {
	  day: 17,
	  month: 4,
	  year: 2016,
	  title: "Anos de um amigo com o mesmo primeiro nome"
	}, {
	  day: 13,
	  month: 4,
	  year: 2016,
	  title: "Anos de um amigo"
	}, {
	  day: 12,
	  month: 8,
	  year: 2016,
	  title: "Anos da Celina"
	}];
	
	var pictureUrls = {
	  'default': 'https://lh3.googleusercontent.com/A798ePpnjRpz5TUnrmxMYOddTo9p172jh1S03cwaEWwV3QSz-rNveC-D2G4qlGhKFXTP2_sTdWdlWkc7CdvAWFHnPAkyJUcdJ9bQvYzsxkGym3VPMiEpaH4jPVsQDzsRHsPESW8bD6-0SVExtl2TfKtekE789WELSdD31XrNgYX4p-jrft4RIkrx-zeUHogDFKb3OYOXEUxWb8rAUmU6u4mNi5JV1Te9_muN2p-LcNmnO1LH7Anr_vYcjuyr8KKPeEaNvik7MQthIPhy7idj0iXA4y4AATLSToZvCztuMedFmoui5HyTL141SvqLWA5cw9i8v74t5oYPQNCgcNNVpmNQ-4mS0gzGnm0-3sn6SkmW2_tT-QSbv5gK7S9iv9GWfh0UKquymwrQYmxeQwf4_J-aTtaItYyqcvZpBr5xQ1vM2HyLFFEmgeJVJZn3RjAWqhiCeVo8zyUEBFt2cO_B7hUouPnSWJN2Qfvgmi8Idh50-odWXaUdiHkWaU9T49BP1Jnm-zRbUZVtLij4ZnXYijYW3bdRZi5BI7TZOR88vZt0nPMUnVXV19YEu3XCAmI9hbZt=w1010-h606-no',
	  'all': {
	    10: 'https://lh3.googleusercontent.com/7-nWkiuilgTMOyKxvHTYYmI_G3LKzFKn5pqswUOgmZ-_DMoqtpiQJRyvOetJyp6JhrZv5r1MWF9UA8SVBEealws8PQ7XUNc46sw_9O80ftKl3ty4XpAj8BOmAUcb-y900c1XZPV0kB7g29YbmfvXNKk7FCdMLnQStwowQmmoFUdNwvs27xkI1UkpTvinG3oLXsCYGKbMsSjJCgM6dR9m34VLVAjQiaDnI-_Uj0KOW9hwrZTmsj7nXfiB5JD-ya_vWSEMb4slqLS7QqHS40yvbIA7E3q5D8P-u4RIbL_p43ofIeJrAt2doldB25Q7zbxJgOnxqJOi89ns7J88bLf0RxzxxZCuNRYFqmb9pceXYuJXtWEEhPTYAzuXW4HbMJA9ni62SG-AmF1gk_nq5KrzGJ1kJfvIEqGWYsb6usgE-PMKRVo22HAqPnMdnaHA4hJPaMDyenlVq51Hti_274f59UAqEF2BrGljUOBWzKSeEfoVrp3Vbp2X4z57pjs5A-f0vm6mvHJ2geCvklwX1NV2iK2cgbg4yhnL2RJlSnrLmfHvWtEpNh3qAYSsbmY3lW7QNR-Z8WuUKOV0IJzDWoM_aohfyarYVIQrkolQajI8PagquWVi=w356-h201-no',
	    8: 'https://lh3.googleusercontent.com/BNQYn7fyryotN1kah9eSQyfnF4oPjeVNsGCNNIc91ONsfk60b5aY7qw9smnBtYR-zYCS3nRg3TKNEkzlYBaESKVkOoyZ92gzisXqx0t49hhmajIV3QuImZRA8kH2ehuNC_UuhMqPVR1pvNdG--y4Kn8ZtBE1gR5JPFPd5GALtxYGnijFIZ-PFjlM0VecmdW8YZ9nWpioQppR3FakcthuEpiTvvED_e7hosvhUCgDUGM_itwaccaTK2osTeRGINvLLTX2oMZZlFrTM6fMBzc68jAqf0efp-RUB_WFIfKfH83IEtxa2cevszJcIh9Hf3Kjn0KRFqmQ-1_0SsKEI3wfGRZHRbgAyoYvhGg8GcxP8T-UVjCpBnyd9t_004AVcosv-o60-YigbkhW7NKebfr8y-udBZrwC3JJwNI97FIfJxP_nwJKqiZgbdXwJKpRADac-suoUpJB8Ti425zs2ZIadqtYITC0MdhDD18iekgVVynhCTFIgCFY8gHBKdji0LVlBRbJklcs2U_YjDe_P9ttVVCsmMiLLw3M99LjdMIIaD7Ak8bNHrVnhuci-Z5-hi6dFfY1reCZaoiRSLJTtgyi5zMJ9TEA8VJ4v7fFnTUPDbPaskEd=w298-h179-no',
	    4: 'https://lh3.googleusercontent.com/_ywMQV-vCNC6CTP59ZUjfpJeQ82_9yKypBdTroxGDZfaQCIedXsulmV_o4lfjPHPOPR3Gg2cI8AIQWF493ZS0hQ-ODAxnUvP2gZ7S3h5oMbbqOXwPSBBa9YnXpwIYVucvlKl5ddNxpe9c23xXPcEJ3ogKAS9Gj0arhq50v1lLw0Qgmysq0KvsP-H27nw6Yp7Xq-rv86BStMyoUHpSbRb7VXhgdq4vcXBOrXMwzFmJ45kj172NRMCgkWs8Cz_IDN9ODPeD3Rhhbp3MBqo_LrxfmUZ5y5W_e9vX7rO_QVskDRp7q9mRlvrxiG2LeyMxe_O6pL6-OY_rh0nBanLNSglA9hR_eA8VymKxRAX27jh8M1dEgpdfmHmHlQ6sK_XuOoI_jLfTQtKcbXHteCpaDtSfoFq5bNuX3ekBEb_VO14p6fISDyXCafu-dTne_ftVAq4bSNsVRuWzEkbQY0lVbZYqdhfA6bMKqWmryJPrrSm_9hTNfurY6k3ckagYWDWVltYHjP5b_HWGGi9oUHa4PTOeCc8N2tyDozgUmrkzK1zFzuuXa_J3jjIJg_BJEwrQIjW0AwtuHKxqcdelCq11TkyptWotLsoUADfY1SDRfQAAJ4hsLhG=w375-h282-no',
	    2: 'https://lh3.googleusercontent.com/aghgSa8NnBOJiM0RZZT2N5wSUOYrQb4VWeIJa941CoSbzdy-QZGP9-PHxeU5_qBthTQN6OOm3I6whvgtA-HPGI-JaZrePO6xSIJ9gTyysQhGwi3sw4WAuTGib8W_r_eCI5QTk9ROlIQuUkc79CiGUifph4tv2QV2Te1_L9XP6cxQnH-QHbOI0qBCflaf7mj8e-wkbkAMLVVFIe1KYbslpahKwqRCD3DZRw2sK6SfcYc5apdWEvSHLoAUhkalry-UcETxkEjLosMqKZzNnTvUdoMFGiel6U20jnjLVgOUP8HLk_1GYqZHL4bQ6Iy5wXZRr9gqcbvs7h0jFEcjJD7A-FM4uCjqvRJH9o9SZV6gqTlAORD9Y6CvuunzcmIsrtQ2ANhuV3HQ6ASpx8wgo78dXv4NrTtRYkLu62IUI9gWCHViLpXYZjr2N0VSAYIDR21af6IMJLpJ6l9CXrik4M68aG_6aZZHcbtW9ut_Zc1G-_bbavAu7Ll29V2_R-EBfIrjyMH4NV9gmX0ODFDWj-0vLm42SkxObdPkNExx7VtytXZoF1gFw--fphc7dSxJmZRxuINYss5R9GSCRits-koqP1-T5S6FCplKhjMXFSe5FvVKeILX=w355-h200-no',
	    6: 'https://lh3.googleusercontent.com/0FVikr14_EJVvL8eT_GmyGifkSgBMDIKkejfwsVO-NJgvYVbN5_lPzu1HPUbqVbJu20wGKrEvLYq9o1oaieizJw38nJxoxZXqDHGe0WYaXae3bwXs7EpNoofrQ2TJGwnhHtrRZqhp1dfI811WyzUSNpDKOJHCNdEFSz60FR45DHPQetEA66ItDl6EtjmyrDlH6wg3V1TQVmvVFIVjA9q6UwcojHUTPvlvYYV3mCJMBfP0LXVL93lJAMV545iYkiPxPRm8k9YQ1tJVj85mv7s1Gt4-OYjW4FGeWnINSwDWQpI2GXAR0I8Nz12lgcUBQ1prx1PSa8G7bCEef9u5K-5fFGPWiMZTl7rzpg9IvA8H0GeOePYs5RUbfS9JO2HlCyjqJphx2k4FRtVA-uyC-E2hJHHrXe5jWmh-4sJvbwJ8qJHsJeNaW4nGt2VYHc8oo14cEXsnGPOiJcnO0aGH8GCTw5PA-qe4Hb2aRv5Q15C67kEGLP6fNeTj0fBoQnhXk59NS_Gs3wpfwbX-x9zoeG2t1ZgHaEaen8nr_ew73Zx3vqM7PbXGYMGrmtfr9d8tV-I83BArd8jHx6hMnyDaxGV18-lZVo4AfG665ZDfsYQhCmXkwSe=w356-h267-no',
	    9: 'https://lh3.googleusercontent.com/KKIyri2N-tgJO4VmAIvq8rJsD5LcDBrHL6AP4VLe5hlcsTBC7Cth1IJUB53gRrX-crRrf545gxiy3WOus5it-YR6KoHn_-n9zXfiuBl1u5byWXk6613wZjHgwH3DRlM_jcLGVfXIP_9inMtoBZ0oAKfLlnOWK5ZtEFOtujyChJ1iPIKiUlDa1L7rjXPjwCkZindr9-IX26yKgMlJsxwz1Y__r3a_M6fdwuD-QwKeW8E6BbxOWS29yPle6dy8yJczsRw0CcLxuUCGOdOWbIoSTkE3wW9fpDiPL5NnZHXq-VApEacchYDpeUzfu9zrtjvzZyYHaUA2yjLwPCIWnXv_Xrky_HxyooojVej41Q3KyaLUEWgnXtXQJHhOrO2ppRxD3y4y6aPGjHpEm9pS-Kd8jwasLROTUwfKxbDwoLRqSaZsNhub_WfpS6lxAaF4x-uu04V27WT_rsVvf407NgRXHp2r1wrYyuJN0ooSQXWZzdFMpkLN3ptOEt6rKYcqTzpCcP2VpI8smri05oJLot2_aNeZIzL1zk4jx5PhSPLUP4WTZe8_QYR9F6H-Dl_z5f3bTkh0QeTRd1F2PbEWBuX-9JAOzeSw-j8pkPS2qMEcW5mJzvCR=w803-h452-no',
	    11: 'https://lh3.googleusercontent.com/Siw_SQ97ZSFzN2_4JFPOpsVfmiNdWtEf6Sq7eFb2SO-gBmBpngDki8FC1X4ohDgBlzuPhjUxROqmWaKh0t01ucsZeLCf_DVqzDurV8XoGrFUra-s26NDP2Gb2YuEMWTcKZIdjgQ_KrcqataPUn-TjoVrhiQdvmsGOZMHBbaKbpVcHflhWjUvW8G1UAIjPkRaayOkBYe1S1huKBEC5FAKFhSZvD2YMCR1QIfQY9KvhSB-1W5DjcoacIHF0I_FBAwoL9IxHUg4UdIeYgTJuFnQ5jqhRsLcKP1uE__DWaJxICwHoVQAQNBhUbZPTlHbNqzftrMj8eE8pee4y2R4Q-as7nRwGNz_GcR8X08nZlsw7i1VtyhiJU9Exq31ITmtca8ylUqMyVIUInMiVF43Sb8M_8naELjoQy_qOAd5QK1a7yPc1PPp8CbnAwlO4-iG2K73evhfwx88H8cbj4sXG3Yzq3WAedjbqOx1wj0uOpUWk0cUWyFnGAwDtiQVpbRKKdUxb2laVooSe_2d5aK3dBp1GiXNsCSAQ7R0utKTcVvLCTACHhBxpR-P_msx3dIjRvDDpP4ST0zOzdjX_aAXstDZ1hXU9fbD5tkVmVnQQDNJd91Ch2oi=w443-h249-no'
	  },
	  2017: {
	    1: 'https://lh3.googleusercontent.com/m-pSX--s9aTsNxZYezjTVtgHSIbLu0JB_aaPnhGD_Z0QcTYvOh2ifLhMW4lzXszh557fSmmZWPxzBH4-yup6SHlCCmH8-Aa4jWtczjeAG9rfqd6EEWbQJNfLOA49yKgoIljyitVjlmO-X-WlzSTOFKLj6tvZFIcxDefASWbWtLgGbAXOoIQ4cO0J9mvl18czWGh4cPkOsQLNg0e00CwurPB6NRAYM5UoxjN2i1yH4j8cnBcCMwVKs55E1UkYjTDMTQ7ZCit2qswxtX-dK7R3njnkyPCVH8s_8Y5NJs1ruvdmaqXsc1gjznnQ9Y6pGDmyHPlDdSOmxr86qlFUscFIRTvGH0x0xOdEh4psuovmWuIXHyDHCjkV1oO6pU60BRFgIulv_O0ymZHNia9m_mHdLfjaujTalXjikiDpE6SAavknAh6K2OOPDHZA7S52vrAUT4U_9RJwiCMl54z3tEVkaBEpfpBfSb1vB3otBjrk9CoWb7WkN33WsCEoRpwERpzLenwWg7b6bwsR3KWpWXukUQItVEPMN6x87Gfl_lyR9N-1_HSlAyb5QhBxEhG_UyTUhqZaUa-HyPR8BCSvK3bgSSIZ1WchGoGRLZaHYe9jwKKon7OZ=w116-h206-no',
	    6: 'https://lh3.googleusercontent.com/9ZdGN5Of7qOhIJ1GrYmnpdsPuSM6vlqZP_yIE7KnPpablnEkJzhdixbm3XSloPMNozTOV5cWo46WIkXcbqogHYRm5Qp1h4ySsdkvCA38TAbgNrGInnWNZFniI7guCGeV4b1p0Wfxj-LacvpFCn4pg0QzferREVUfb-xM3F9McsrnGHNJVlB_K8Q_XC_vduQZGYqNaMKIcxrV1yW_A34VDSD26jcXpQouuqSt1I1S7rjg1Krl_aHVzj5ocE2VHJJUo4SuOXqfZOrczY-87ldNdt49avX3Qkecdm2mRY_LfnCgWzu1-_RpxwH6v6qkguyU1xVDFkFImvkQ02IBW-0F6LuYUAnD7fyOndlbDQ9QGTF98lfPNEj4TA0NU2IGXRihN6KlBFdLbAYs81p-937y_wLBu35GzKuhrNFQFEtGr0OiW7ZLxA-ofF7fThoQK8t7mr90546-Te3j9C7LooMSVOeNRC4a3Gf52qU9lUbDHXLNMw08y2b55fSYk3MojCJg7uCcKh-B8K8Azo9LeZ5Od5FPg-bHU_76Lsx3Pvp0Hq_d3TQfFhb8NUtOt7RTlsi6pWbqWAWKK6C3nNRRBbz1-ono2jb3Mnl_FlZn16IWiZQxcSll=w763-h430-no',
	    10: 'https://lh3.googleusercontent.com/43vVeCDi3SzzoPl1qF1E1E2FPX_msL5E5dd-uh4EGUX9KBgZ69PhOEMYfe5Mc1YKO8F4ovSpzfe-HEM-ZenR05zhb19_-Mhp7SBryl7AISGcOGgNaUD83b-yWYpVFL7n1iTN1jH5xqzUIRoZGHWtPrSnJpzRKvfDSjexiAiWGF7oLxkaJRRCF5iFQk7iHK-uISuUKRjEwyvc6CBgFp42EMjp47dITpQwLxRssRp8PFk9kV5kWw_84SsqcorKDbJikX4kmFQJ9gZVsWHBOg5gGPv7cViIaDYTe2vBiOx6y91wSdOc1_U6ToYxN_VU9iTOjgu2QyGMc3_YydY9KSyWvB1-6-gcJR3G3bkPpTXcvrxVZ4Rv5JcAEDv1emK2oZ2uuisTBNBnx0ZERkgLxcZEeQ5vlSjb1I5ZkTxBq8bij80bpsIQEo0efFB-Ly5RM0X0ztpdgAWeCjxix-nsXIA9KlyYBvdO9bnbEySLemo5rLVyPNElurCQZYce_WmrB9cl25lMUbUC-yG2OWZsltXQlY71hS0V9F97D-8t57rQAiQ0dqTDj87btKn6tyQchHkOXu0Auj9KadYjAsHhojRsyuroJHrEK5A2Z5L8pOFcQLpll8vB=w355-h200-no'
	  }
	};
	
	var calendar = new _Calendar2.default("#app", { year: 2016, month: 4, pictureUrls: pictureUrls, eventSettingObjects: eventSettingObjects });
	
	calendar.createAndAddEvent({
	  day: 25,
	  month: 12,
	  year: 1900,
	  isYearly: true,
	  title: "Natal"
	});
	
	calendar.createAndAddEvent({
	  day: 1,
	  month: 1,
	  year: 2017,
	  isYearly: false,
	  title: "Ano novo 2017"
	});
	
	calendar.createAndAddEvent({
	  day: 1,
	  month: 1,
	  year: 2016,
	  isYearly: true,
	  title: "Ano novo (geral)"
	}, {
	  success: function success() {
	    console.log(JSON.stringify(calendar.getEvents(true)));
	  }
	});
	
	// testing no year
	calendar.createAndAddEvent({
	  day: 1,
	  month: 11,
	  isYearly: true,
	  title: "Dia de los muertos"
	}, {
	  success: function success() {
	    console.log(JSON.stringify(calendar.getEvents(true)));
	  }
	});
	
	calendar.createAndAddEvent({
	  title: "Today day!"
	});
	
	calendar.createAndAddEvent({
	  day: 21,
	  month: 6,
	  isYearly: true,
	  year: 'all',
	  title: 'My Birthday'
	});
	
	window.calendar = calendar;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _EventCollection = __webpack_require__(2);
	
	var _EventCollection2 = _interopRequireDefault(_EventCollection);
	
	var _Event = __webpack_require__(3);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _Calendar = __webpack_require__(4);
	
	var _Calendar2 = _interopRequireDefault(_Calendar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Calendar class with some private properties, like
	 * - curDate: current date
	 */
	var Calendar = function () {
	  // TODO: set an image for each month/year combo, or just for each month, with defaults
	  // TODO: what is the multipleEvents parameter for?
	  // firstDay is the first day of the week in the calendar: 1 is for "monday"
	  // every eventDay must have a concrete date (day, month, year) and event title, with optional event info
	  function Calendar(elementSelector) {
	    var _this = this;
	
	    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    var year = _ref.year;
	    var month = _ref.month;
	    var day = _ref.day;
	    var _ref$firstDayOfWeek = _ref.firstDayOfWeek;
	    var firstDayOfWeek = _ref$firstDayOfWeek === undefined ? 1 : _ref$firstDayOfWeek;
	    var _ref$multipleElements = _ref.multipleElements;
	    var multipleElements = _ref$multipleElements === undefined ? false : _ref$multipleElements;
	    var pictureUrl = _ref.pictureUrl;
	    var pictureUrls = _ref.pictureUrls;
	    var _ref$eventSettingObje = _ref.eventSettingObjects;
	    var eventSettingObjects = _ref$eventSettingObje === undefined ? [] : _ref$eventSettingObje;
	
	    _classCallCheck(this, Calendar);
	
	    var curDate = new Date();
	    year && curDate.setYear(year);
	    month && curDate.setMonth(parseInt(month) - 1);
	    // set to firstDay of Month
	    curDate.setDate(1);
	
	    // defines whether the calendar has been rendered or not
	    // it is set to true when rendered is first called
	    this.isRendered = false;
	
	    this.pictureUrl = pictureUrl;
	    this.pictureUrls = pictureUrls;
	    // TODO: set for multiple elements
	    this.element = document.querySelector(elementSelector);
	    // TODO: set data attributes
	    this.curDay = day;
	    this.firstDayOfWeek = firstDayOfWeek || 1;
	    this.curDate = curDate;
	
	    this.events = new _EventCollection2.default();
	    /*
	     although events have a date as a property, they will be organized in the following format, for mapping purposes:
	    // { 2016: [ 1:{ 20: {title, event, picture: "..."} }, 2:{} ]}
	    */
	    eventSettingObjects.forEach(function (item) {
	      // console.log(item);
	      _this.events.addEvent(new _Event2.default(item));
	    });
	
	    // THE RENDERING IS THE FINAL STEP
	
	    // add the default class for eventCalendar to the element
	    if (!this.element.classList.contains(_Calendar2.default["calendar-widget"])) {
	      this.element.classList.add(_Calendar2.default["calendar-widget"]);
	    }
	
	    // set up an addFormNode property
	    this.addEventFormNode = null;
	
	    this.render();
	    // console.log(this.getFirstDayOfCalendar().getDate());
	  }
	
	  _createClass(Calendar, [{
	    key: "createAndAddEvent",
	    value: function createAndAddEvent() {
	      var eventData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { day: day, month: month, year: year, title: title, description: "No description", picture: picture, isYearly: false };
	      var callbacks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { success: null, error: null };
	
	      try {
	        this.events.createAndAddEvent(eventData);
	        if (this.isRendered) {
	          // already rendered? Re-render it!
	          this.render();
	        }
	        if (callbacks && typeof callbacks.success === 'function') {
	          callbacks.success();
	        }
	      } catch (e) {
	        if (callbacks && typeof callbacks.error === 'function') {
	          callbacks.error();
	        }
	      }
	    }
	  }, {
	    key: "getEvents",
	    value: function getEvents() {
	      var deserialized = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      return this.events.getEvents(deserialized);
	    }
	  }, {
	    key: "hideAddEventForm",
	    value: function hideAddEventForm() {
	      this.addEventFormNode.classList.add(_Calendar2.default['calendar-widget__form--is-hidden']);
	    }
	    /**
	     * Shows the form Node for adding an event
	     * It is intended to be used with some parameters: year, month and day, that may be filled automatically
	     *
	     * @param      {<type>}  eventData  The event data
	     */
	
	  }, {
	    key: "showAddEventForm",
	    value: function showAddEventForm() {
	      var eventData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { year: undefined, month: undefined, day: undefined };
	
	      var addEventFormNode = this.addEventFormNode;
	
	      ['year', 'month', 'day'].forEach(function (parameterName) {
	        if (eventData[parameterName]) {
	          addEventFormNode[parameterName].value = eventData[parameterName];
	        }
	      });
	
	      addEventFormNode.classList.remove(_Calendar2.default['calendar-widget__form--is-hidden']);
	    }
	    /**
	     * Creates and returns the Header node for the calendar
	     * This includes the picture and navigator, which also involve the calendar title node and calendar nav node
	     *
	     * @return     {<type>}  The header node.
	     */
	
	  }, {
	    key: "getHeaderNode",
	    value: function getHeaderNode() {
	      var curDate = this.curDate;
	
	      var headerNode = document.createElement("header");
	      var headerPictureFrameNode = document.createElement("div");
	      // let headerPictureNode = document.createElement("img");
	      var headerTitleNode = document.createElement("div");
	
	      var prevNavNode = this.getCalendarNavNode(false);
	      var nextNavNode = this.getCalendarNavNode(true);
	      var titleNode = this.getCalendarTitleNode();
	      var pictureUrl = this.getCalendarImageSource();
	
	      headerNode.classList.add(_Calendar2.default["calendar-widget__header"]);
	      headerTitleNode.appendChild(prevNavNode);
	      headerTitleNode.appendChild(titleNode);
	      headerTitleNode.appendChild(nextNavNode);
	
	      headerTitleNode.classList.add(_Calendar2.default["calendar-widget__title"]);
	
	      // picture-specific
	      if (pictureUrl) {
	        headerPictureFrameNode.classList.add(_Calendar2.default["calendar-widget__picture-frame"]);
	        // headerPictureNode.classList.add(styles["calendar-widget__picture"]);
	        headerPictureFrameNode.style.backgroundImage = "url(\"" + pictureUrl + "\")";
	
	        // headerPictureFrameNode.appendChild(headerPictureNode);
	        headerNode.appendChild(headerPictureFrameNode);
	      }
	
	      headerNode.appendChild(headerTitleNode);
	
	      return headerNode;
	    }
	    /**
	     * Gets the calendar title node.
	     * This includes the month and year that are being rendered
	     *
	     * @return     {<type>}  The calendar title node.
	     */
	
	  }, {
	    key: "getCalendarTitleNode",
	    value: function getCalendarTitleNode() {
	      var titleSpan = document.createElement("span");
	
	      titleSpan.innerHTML += this.curDate.getFullYear() + " - " + this.curDate.toLocaleString(window.locale, {
	        month: "long"
	      });
	
	      return titleSpan;
	    }
	    /**
	     * Gets the calendar image source.
	     * First, it checks for a this.pictureUrls object with either an attribute corresponding to the current year and month
	     * If it does not exist, it checks for an 'all' and current month image url
	     * Finally, it returns a default this.pictureUrl or this.pictureUrls.default
	     */
	
	  }, {
	    key: "getCalendarImageSource",
	    value: function getCalendarImageSource() {
	      var imageUrl = void 0;
	      var pictureUrls = this.pictureUrls;
	      var currentMonth = this.curDate.getMonth() + 1;
	      var currentYear = this.curDate.getFullYear();
	
	      if (pictureUrls && pictureUrls[currentYear] && pictureUrls[currentYear][currentMonth]) {
	        imageUrl = this.pictureUrls[currentYear][currentMonth];
	      } else if (pictureUrls && pictureUrls['all'] && pictureUrls['all'][currentMonth]) {
	        imageUrl = pictureUrls['all'][currentMonth];
	      } else {
	        imageUrl = pictureUrls && pictureUrls['default'] || this.pictureUrl;
	      }
	
	      return imageUrl;
	    }
	    /**
	     * Gets a calendar navigation node, which can be used to either go to the next or previous month.
	     * This is actually part of a larger navigation node
	     * This is called during the rendering of the calendar header node
	     *
	     * @param      {(boolean|string)}  isNext  Indicates if next
	     * @return     {<type>}            The calendar navigation node.
	     */
	
	  }, {
	    key: "getCalendarNavNode",
	    value: function getCalendarNavNode() {
	      var _this2 = this;
	
	      var isNext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	      var navSpan = document.createElement("span");
	      var modifierClassSuffix = isNext ? "next" : "prev";
	
	      navSpan.classList.add(_Calendar2.default["calendar-widget__nav"]);
	      navSpan.classList.add(_Calendar2.default["calendar-widget__nav--" + modifierClassSuffix]);
	
	      navSpan.addEventListener("click", function () {
	
	        _this2.setPrevNextMonth(isNext);
	      });
	
	      return navSpan;
	    }
	    /**
	     * This renders the TOP of the calendar day table
	     * Do not confuse this with the Calendar.getHeaderNode method, which returns the main header of the calendar (picture + navigator + title)
	     * In short, this is the table heading with the weekdays' names
	     *
	     * @return     {<type>}  The calendar header node.
	     */
	
	  }, {
	    key: "getCalendarHeaderNode",
	    value: function getCalendarHeaderNode() {
	      var headerNode = document.createElement("tr");
	      var date = this.getFirstDayOfCalendar();
	
	      // use the first 7 days of the calendar to render the header
	      for (var i = 0; i < 7; i++) {
	
	        var thNode = document.createElement("th");
	        thNode.classList.add(_Calendar2.default["calendar-widget__weekday"]);
	        thNode.innerHTML = date.toLocaleString(window.navigator.language, {
	          weekday: 'short'
	        });
	        headerNode.appendChild(thNode);
	        date.setDate(date.getDate() + 1);
	      }
	
	      return headerNode;
	    }
	    /**
	     * Gets the calendar node for the calendar table itself
	     *
	     * @return     {<type>}  The calendar node.
	     */
	
	  }, {
	    key: "getCalendarNode",
	    value: function getCalendarNode() {
	      var calendarNode = document.createElement("table");
	
	      calendarNode.classList.add(_Calendar2.default["calendar-widget__days"]);
	      calendarNode.appendChild(this.getCalendarHeaderNode());
	      calendarNode.appendChild(this.getCalendarDaysNode());
	
	      return calendarNode;
	    }
	  }, {
	    key: "getCalendarWeekNode",
	    value: function getCalendarWeekNode(firstDay) {
	      var date = new Date(firstDay);
	      var calendarWeekNode = document.createElement("tr");
	      calendarWeekNode.classList.add(_Calendar2.default["calendar-widget__week"]);
	      // console.log(date.toString());
	      // use the first 7 days of the calendar to render the header
	      for (var i = 0; i < 7; i++) {
	        calendarWeekNode.appendChild(this.getCalendarDayNode(date));
	        date.setDate(date.getDate() + 1);
	      }
	
	      return calendarWeekNode;
	    }
	    /**
	     * Gets the calendar day node.
	     * This also attaches the onclick event, which is used to show the addEventForm node, for now
	     *
	     * @param      {Date}  date    The date
	     * @return     {<type>}  The calendar day node.
	     */
	
	  }, {
	    key: "getCalendarDayNode",
	    value: function getCalendarDayNode(date) {
	      var calendarDayNode = document.createElement("td"),
	          events = this.events.getEventsFor(date);
	
	      calendarDayNode.classList.add(_Calendar2.default["calendar-widget__day"]);
	
	      // check if this day belongs to the currently-displayed month
	      if (this.curDate.getMonth() !== date.getMonth()) {
	        calendarDayNode.classList.add(_Calendar2.default["calendar-widget__day--is-from-another-month"]);
	      }
	
	      calendarDayNode.innerHTML = date.getDate();
	
	      if (events.length) {
	        // console.log("an event:", event);
	        calendarDayNode.title = events.map(function (event) {
	          return event.title;
	        }).reduce(function (finalTitle, title) {
	          return finalTitle + " | " + title;
	        });
	        // add a class
	        // TODO: set this class as dynamic
	        calendarDayNode.classList.add(_Calendar2.default["calendar-widget__day--has-event"]);
	        // TODO: set a data attribute
	      }
	
	      calendarDayNode.onclick = this.showAddEventForm.bind(this, {
	        month: date.getMonth() + 1,
	        year: date.getFullYear(),
	        day: date.getDate()
	      });
	
	      return calendarDayNode;
	    }
	  }, {
	    key: "getCalendarDaysNode",
	    value: function getCalendarDaysNode() {
	      var date = this.getFirstDayOfCalendar();
	      var lastDate = this.getLastDayOfCalendar();
	      var calendarDaysNode = document.createElement("tbody");
	
	      while (date <= lastDate) {
	        // render week
	        calendarDaysNode.appendChild(this.getCalendarWeekNode(date));
	        date.setDate(date.getDate() + 7);
	        // console.log("now on", date.toString());
	      }
	      // console.log(dateString);
	      return calendarDaysNode;
	    }
	  }, {
	    key: "getCalendarAddEventFormNode",
	    value: function getCalendarAddEventFormNode() {
	      var calendarFormNode = document.createElement('form');
	      var calendarReference = this;
	
	      calendarFormNode.classList.add(_Calendar2.default["calendar-widget__form"]);
	      calendarFormNode.classList.add(_Calendar2.default["calendar-widget__form--is-hidden"]);
	
	      calendarFormNode.innerHTML = "\n    <div class=\"" + _Calendar2.default['calendar-widget__form-row'] + "\">\n      <input class=\"" + _Calendar2.default["calendar-widget__form-input"] + "\" type='text' name='title' placeholder='title'>\n    </div>\n    <div class=\"" + _Calendar2.default["calendar-widget__form-row"] + "\">\n      <input class=\"" + _Calendar2.default["calendar-widget__form-input"] + "\" type='text' name='message' placeholder='message'>\n    </div>\n    <div class=\"" + _Calendar2.default["calendar-widget__form-row"] + "\">\n      <input class=\"" + _Calendar2.default["calendar-widget__form-input"] + " " + _Calendar2.default["calendar-widget__form-input--is-small"] + "\" type='number' name='year' placeholder='year' max=9999> /\n      <input class=\"" + _Calendar2.default["calendar-widget__form-input"] + " " + _Calendar2.default["calendar-widget__form-input--is-small"] + "\" type='number' name='month' placeholder='month' min=1 max=12> /\n      <input class=\"" + _Calendar2.default["calendar-widget__form-input"] + " " + _Calendar2.default["calendar-widget__form-input--is-small"] + "\" type='number' name='day' placeholder='day' min=1 max=31>\n    </div>\n    <div class=\"" + _Calendar2.default["calendar-widget__form-row"] + "\">\n      <input class=\"" + _Calendar2.default["calendar-widget__form-input"] + " " + _Calendar2.default["calendar-widget__form-input--is-small"] + "\" type='number' name='hours' placeholder='hours' min=0 max=23>:\n      <input class=\"" + _Calendar2.default["calendar-widget__form-input"] + " " + _Calendar2.default["calendar-widget__form-input--is-small"] + " \" type='number' name='minutes' placeholder='minutes' min=0 max=59>\n    </div>\n    <div class=\"" + _Calendar2.default["calendar-widget__form-row"] + "\">\n      <label class=\"" + _Calendar2.default["calendar-widget__form-label"] + "\">Is yearly?</label> <input class=\"" + _Calendar2.default["calendar-widget__form-input"] + " " + _Calendar2.default["calendar-widget__form-input--is-checkbox"] + "\" type='checkbox' name='isYearly'>\n    </div>\n    <div class=\"" + _Calendar2.default["calendar-widget__form-row"] + "\">\n      <input type='submit' value='submit'>\n      <button type='button' data-hide-form onclick=\"debugger;console.log('this'); calendarFormReference.hideAddEventForm()\">Hide</button>\n    </div>\n    ";
	
	      // to attach an event to a button
	      calendarFormNode.querySelector('[data-hide-form]').onclick = calendarReference.hideAddEventForm.bind(calendarReference);
	
	      calendarFormNode.onsubmit = function (e) {
	        e.preventDefault(); // prevent page refresh due to submission
	
	        calendarReference.createAndAddEvent({
	          title: this.title.value,
	          message: this.message.value,
	          year: parseInt(this.year.value),
	          month: parseInt(this.month.value),
	          day: parseInt(this.day.value),
	          hours: parseInt(this.hours.value),
	          minutes: parseInt(this.minutes.value),
	          isYearly: this.isYearly.checked
	        });
	      };
	
	      return calendarFormNode;
	    }
	  }, {
	    key: "renderDayElement",
	    value: function renderDayElement(day) {
	      return day + " ";
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      // reset element first
	      this.element.innerHTML = "";
	
	      // create header document fragment
	      var node = document.createDocumentFragment();
	      this.addEventFormNode = this.getCalendarAddEventFormNode();
	
	      node.appendChild(this.getHeaderNode());
	      node.appendChild(this.getCalendarNode());
	      node.appendChild(this.addEventFormNode);
	
	      this.element.appendChild(node);
	
	      this.isRendered = true;
	    }
	  }, {
	    key: "getLastDayOfMonth",
	    value: function getLastDayOfMonth() {
	      var curDate = this.curDate;
	      var curMonth = curDate.getMonth();
	      var nextMonth = curMonth + 1 % 12;
	
	      var lastDayOfMonth = new Date(curDate);
	      lastDayOfMonth.setMonth(nextMonth);
	      lastDayOfMonth.setDate(lastDayOfMonth.getDate() - 1);
	
	      return lastDayOfMonth;
	    }
	  }, {
	    key: "getFirstDayOfCalendar",
	    value: function getFirstDayOfCalendar() {
	      // determine offset
	      var offset = this.curDate.getDay() - this.firstDayOfWeek;
	      if (offset < 0) offset += 7;
	      var firstDay = new Date(this.curDate);
	      firstDay.setDate(firstDay.getDate() - offset);
	      // console.log(firstDay.toString());
	      return firstDay;
	    }
	  }, {
	    key: "getLastDayOfCalendar",
	    value: function getLastDayOfCalendar() {
	      var lastDayOfMonth = this.getLastDayOfMonth();
	      var lastDayOfWeek = (this.firstDayOfWeek + 6) % 7;
	      // console.log(lastDayOfMonth.toString());
	      var offset = lastDayOfWeek - lastDayOfMonth.getDay();
	      if (offset < 0) {
	        offset += 7;
	      }
	
	      var lastDate = new Date(lastDayOfMonth);
	      lastDate.setDate(lastDate.getDate() + offset);
	      // console.log(lastDate.toString());
	      return lastDate;
	    }
	  }, {
	    key: "setPrevNextMonth",
	    value: function setPrevNextMonth() {
	      var isNext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	
	      var gap = isNext ? 1 : -1;
	
	      this.curDate.setMonth(this.curDate.getMonth() + gap);
	
	      // console.log(this.curDate.getMonth());
	
	      // re-render afterwards
	      this.render();
	    }
	  }]);
	
	  return Calendar;
	}();
	
	module.exports = Calendar;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Event = __webpack_require__(3);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventCollection = function () {
	  function EventCollection() {
	    _classCallCheck(this, EventCollection);
	
	    // it is actually an object that will have years as keys
	    this.events = {};
	
	    // the id for the next event to be added to the mix
	    this.nextEventId = 0;
	  }
	
	  /**
	   * Creates an event.
	   * This does NOT add an event to the event collection
	   * Hence, this event will NOT increase the nextEventId count
	   *
	   * @param      {Object}  eventData  The event data required for an event creation
	   * @return     {Event}   { A new Event object }
	   */
	
	
	  _createClass(EventCollection, [{
	    key: "createEvent",
	    value: function createEvent() {
	      var eventData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { day: day, month: month, year: year, title: title, description: "No description", picture: picture, isYearly: false, hours: null, minutes: null };
	
	      return new _Event2.default(Object.assign(eventData));
	    }
	  }, {
	    key: "createAndAddEvent",
	    value: function createAndAddEvent() {
	      var eventData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { day: day, month: month, year: year, title: title, description: "No description", picture: picture, isYearly: false, hours: null, minutes: null };
	
	      this.addEvent(this.createEvent(Object.assign(eventData, { id: this.nextEventId })));
	
	      // leave the nextEventId increase to the professionals... in this case, the universal addEvent method
	      // this.nextEventId += 1;
	    }
	  }, {
	    key: "addEvent",
	    value: function addEvent(event) {
	      // TODO: check for instance of event
	      var year = event.getYear(),
	          month = event.getMonth(),
	          day = event.getDay(),
	          events = this.events;
	      if (!(year in events)) {
	        events[year] = {};
	      }
	      if (!(month in events[year])) {
	        events[year][month] = {};
	      }
	      if (!(day in events[year][month])) {
	        events[year][month][day] = [];
	      }
	
	      // if there is no event id, then it was created differently
	      event.id = this.nextEventId;
	      this.nextEventId++;
	
	      events[year][month][day].push(event);
	    }
	  }, {
	    key: "getEvents",
	    value: function getEvents() {
	      var _this = this;
	
	      var deserialize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      if (!deserialize) {
	        return this.events;
	      } else {
	        var _ret = function () {
	          var events = _this.events;
	          var deserializedEvents = [];
	
	          // SHAME: woah, triple loop of keys
	          for (var _year in events) {
	            if (events.hasOwnProperty(_year)) {
	              var yearEvents = events[_year];
	              for (var _month in yearEvents) {
	                if (yearEvents.hasOwnProperty(_month)) {
	                  var monthEvents = yearEvents[_month];
	                  for (var _day in monthEvents) {
	                    if (monthEvents.hasOwnProperty(_day)) {
	                      var dayEvents = monthEvents[_day];
	
	                      dayEvents.forEach(function (event) {
	                        var newEvent = {};
	
	                        Object.assign(newEvent, event, {
	                          day: event.getDay(),
	                          month: event.getMonth(),
	                          year: event.getYear()
	                        });
	
	                        delete newEvent.date;
	
	                        deserializedEvents.push(newEvent);
	                      });
	                    }
	                  }
	                }
	              }
	            }
	          }
	
	          return {
	            v: deserializedEvents
	          };
	        }();
	
	        if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
	      }
	    }
	  }, {
	    key: "getEventsFor",
	    value: function getEventsFor(dayOrDate, month, year) {
	      var events = this.events;
	      if (dayOrDate instanceof Date) {
	        year = dayOrDate.getFullYear();
	        month = dayOrDate.getMonth() + 1;
	        dayOrDate = dayOrDate.getDate();
	      }
	
	      // SHAME: repeated code for yearly events
	      // TODO: create a function to get all events based on year
	      var singleEvents = year in events && month in events[year] && dayOrDate in events[year][month] && events[year][month][dayOrDate] || [];
	      var yearlyEvents = 'all' in events && month in events['all'] && dayOrDate in events['all'][month] && events['all'][month][dayOrDate] || [];
	
	      return singleEvents.concat(yearlyEvents);
	    }
	  }, {
	    key: "fetchEventsFromGoogleCalendar",
	    value: function fetchEventsFromGoogleCalendar(calendarId, apiKey) {
	      var baseUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'https://www.googleapis.com/calendar/v3/calendars';
	
	      var url = baseUrl + "/" + calendarId + "/" + apiKey;
	
	      var request = new XMLHttpRequest();
	      request.open('GET', url, true);
	
	      request.onload = function () {
	        if (request.status >= 200 && request.status < 400) {
	          // Success!
	          var resp = request.responseText;
	        } else {
	          // We reached our target server, but it returned an error
	
	        }
	      };
	
	      request.onerror = function () {
	        // There was a connection error of some sort
	      };
	
	      request.send();
	    }
	  }]);
	
	  return EventCollection;
	}();
	
	exports.default = EventCollection;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function getCurrentYear() {
	  var date = new Date();
	  return date.getFullYear();
	}
	
	function getCurrentMonth() {
	  var date = new Date();
	  return date.getMonth() + 1;
	}
	
	function getCurrentDay() {
	  var date = new Date();
	  return date.getDate();
	}
	
	/**
	 *  An event class for creating event objects that include a day, month, year, title, description and optional picture and isYearly
	 *  In case an event is yearly, it returns 'all' in the getYear method
	 *  TODO: force a day, month and year... without these, there is NO valid event
	 *  TODO: validate hours and minutes
	 *  TODO: create a setTime method
	 */
	
	var Event = function () {
	  // WARNING: month is in the 1-12 format, not the default 0-11 one
	  // WARNING: if there are no hours, then minutes will be ignored even if set up
	  function Event() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	    var _ref$day = _ref.day;
	    var day = _ref$day === undefined ? getCurrentDay() : _ref$day;
	    var _ref$month = _ref.month;
	    var month = _ref$month === undefined ? getCurrentMonth() : _ref$month;
	    var _ref$year = _ref.year;
	    var year = _ref$year === undefined ? getCurrentYear() : _ref$year;
	    var _ref$title = _ref.title;
	    var title = _ref$title === undefined ? "" : _ref$title;
	    var _ref$description = _ref.description;
	    var description = _ref$description === undefined ? "" : _ref$description;
	    var _ref$picture = _ref.picture;
	    var picture = _ref$picture === undefined ? null : _ref$picture;
	    var _ref$isYearly = _ref.isYearly;
	    var isYearly = _ref$isYearly === undefined ? false : _ref$isYearly;
	    var _ref$id = _ref.id;
	    var id = _ref$id === undefined ? null : _ref$id;
	    var _ref$hours = _ref.hours;
	    var hours = _ref$hours === undefined ? null : _ref$hours;
	    var _ref$minutes = _ref.minutes;
	    var minutes = _ref$minutes === undefined ? null : _ref$minutes;
	
	    _classCallCheck(this, Event);
	
	    this.date = new Date();
	    // reset the hours, too
	
	    if (hours) {
	      // hours are set to their value OR zero
	      minutes = minutes || 0;
	
	      this.date.setHours(hours, minutes, 0, 0);
	    } else {
	      // if hours are set and minutes are not, just ignore the latter, as well
	      minutes = null;
	      this.date.setHours(0, 0, 0, 0);
	    }
	
	    // set year to current if it is 'all'... for creating a real date, nothing else
	    if (typeof year !== 'number') {
	      year = getCurrentYear();
	    }
	
	    // I guess the day should come last, for it may change everything else?
	    this.date.setYear(year);
	    this.date.setMonth(parseInt(month) - 1);
	    this.date.setDate(day);
	
	    this.isYearly = isYearly;
	    this.title = title;
	    this.description = description;
	    this.picture = picture;
	    this.id = id;
	
	    this.hours = hours;
	    this.minutes = minutes;
	  }
	
	  _createClass(Event, [{
	    key: "getYear",
	    value: function getYear() {
	      return this.isYearly ? 'all' : this.date.getFullYear();
	    }
	  }, {
	    key: "getMonth",
	    value: function getMonth() {
	      return this.date.getMonth() + 1;
	    }
	  }, {
	    key: "getDay",
	    value: function getDay() {
	      return this.date.getDate();
	    }
	  }, {
	    key: "getRawDate",
	    value: function getRawDate() {
	      return this.date;
	    }
	  }, {
	    key: "getDescription",
	    value: function getDescription() {
	      return this.description;
	    }
	  }, {
	    key: "getTitle",
	    value: function getTitle() {
	      return this.title;
	    }
	  }, {
	    key: "getPicture",
	    value: function getPicture() {
	      return this.picture;
	    }
	  }, {
	    key: "setPicture",
	    value: function setPicture(pictureUrl) {
	      this.picture = pictureUrl;
	    }
	  }, {
	    key: "setDescription",
	    value: function setDescription(text) {
	      this.description = text;
	    }
	  }, {
	    key: "setTitle",
	    value: function setTitle(text) {
	      this.title = text;
	    }
	  }, {
	    key: "setYear",
	    value: function setYear(year) {
	      this.date.setYear(year);
	    }
	  }, {
	    key: "setMonth",
	    value: function setMonth(month) {
	      this.date.setMonth(month - 1);
	    }
	  }, {
	    key: "setDay",
	    value: function setDay(day) {
	      this.date.setDate(day);
	    }
	  }, {
	    key: "setDate",
	    value: function setDate() {
	      var dateOrObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { day: day, month: month, year: year };
	
	      if (dateOrObject instanceof Date) {
	        this.date = dateOrObject;
	      } else {
	        var _day = dateOrObject.day;
	        var _month = dateOrObject.month;
	        var _year = dateOrObject.year;
	
	
	        _year && this.setYear(_year);
	        _month && this.setMonth(_month);
	        _day && this.setDay(_day);
	      }
	    }
	  }, {
	    key: "isYearly",
	    value: function isYearly() {
	      return this.isYearly;
	    }
	  }, {
	    key: "getId",
	    value: function getId() {
	      return this.id;
	    }
	  }]);
	
	  return Event;
	}();
	
	exports.default = Event;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(5);
	if (typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if (content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if (false) {
		// When the styles change, update the <style> tags
		if (!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./Calendar.css", function () {
				var newContent = require("!!./../../node_modules/css-loader/index.js?modules!./../../node_modules/postcss-loader/index.js!./Calendar.css");
				if (typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function () {
			update();
		});
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports
	
	
	// module
	exports.push([module.id, "/**\n@use postcss-nested;\n**/\n\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n._20I9VEEji0s14PwqBp3tBd {\n  position: relative;\n\n  display: inline-block;\n\n  width: 100%;\n  min-width: 240px;\n  max-width: 450px;\n\n  border: 1px solid transparent;\n\n  box-shadow: 2px 2px 2px black;\n}\n\n._24lt64jWBF7GU3wrTEsjlO {\n\n}\n\n.iZ5NERKXuDEBNZf4YWTWR {\n  width: 100%;\n  \n}\n._2yaNxRA_OKEWfQ4QJHWOEL {\n  position: relative;\n  width: 100%;\n  padding-bottom: 56.25%; /* 16:9 aspect ratio*/\n  background-position: center center;\n  background-size: cover;\n}\n._2HigPtClDF1kAFkKvX0Tes {\n text-align: center;\n  font-size: 1.3em;\n  padding: 12px 0;\n  margin-bottom: 12px;\n  box-shadow: 0 2px 5px black;\n  text-transform: uppercase;\n  font-weight: bold;\n}\n._2a3hDQbJCUej8fdLCnIl3u {\n  text-align: center;\n  width: 100%;\n}\n._1Kx9i6nPLghy3kISjsUO4y {\n\n  height: 35px;\n  cursor: pointer;\n}\n._1mL5_0d8xEPxuWSNvTw-WC {\n  color: salmon;\n  font-weight: bold;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.TEpu29FpFto3Y_gMU92uF {\n  color: lightgray;\n}\n\n._2tSmy4npf6HLp4pP0MlFXP {\n  padding: 0 32px;\n\n  cursor: pointer;\n}\n\n._1yQg1VhhWUU_lnggq6Lo_s {\n  float: left;\n}\n\n._1yQg1VhhWUU_lnggq6Lo_s::before {\n  content:\"\\25C3\";\n}\n\n.LndY2V7viDXupPQS2K9JP {\n  float: right;\n}\n\n.LndY2V7viDXupPQS2K9JP::before {\n  content:\"\\25B6\";\n}\n\n._2xqMR2rBCDqE9wa71p_v5K {\n  position: absolute;\n  top: 0;\n\n  width: 100%;\n  height: 240px;\n  padding: 12px;\n  overflow: hidden;\n\n  background: white;\n\n  transition: height 250ms ease-in-out, padding 250ms ease-in-out 250ms;\n}\n\n.syNTZLOTwsRCWQID7n5Xm {\n  font-size: 16px;\n  width: 80%;\n}\n\n._1uNIq5kC5PmuF1ezvFZBaa {\n  width: 20%;\n}\n\n._2ofXAMY1YJNe-MwDI72LOa {\n  width: auto;\n}\n\n._3CPfGdbOlSRz-7DHRD7RAQ {\n\n}\n\n._1434u6FLprJrrACO_QmwoY {\n  margin-bottom: 6px;\n}\n\n._3bTa6V-vUZCTFX4vsSmMIY {\n  height: 0;\n  padding: 0;\n}\n", ""]);
	
	// exports
	exports.locals = {
		"calendar-widget": "_20I9VEEji0s14PwqBp3tBd",
		"calendar-widget__header": "_24lt64jWBF7GU3wrTEsjlO",
		"calendar-widget__picture": "iZ5NERKXuDEBNZf4YWTWR",
		"calendar-widget__picture-frame": "_2yaNxRA_OKEWfQ4QJHWOEL",
		"calendar-widget__title": "_2HigPtClDF1kAFkKvX0Tes",
		"calendar-widget__days": "_2a3hDQbJCUej8fdLCnIl3u",
		"calendar-widget__day": "_1Kx9i6nPLghy3kISjsUO4y",
		"calendar-widget__day--has-event": "_1mL5_0d8xEPxuWSNvTw-WC",
		"calendar-widget__day--is-from-another-month": "TEpu29FpFto3Y_gMU92uF",
		"calendar-widget__nav": "_2tSmy4npf6HLp4pP0MlFXP",
		"calendar-widget__nav--prev": "_1yQg1VhhWUU_lnggq6Lo_s",
		"calendar-widget__nav--next": "LndY2V7viDXupPQS2K9JP",
		"calendar-widget__form": "_2xqMR2rBCDqE9wa71p_v5K",
		"calendar-widget__form-input": "syNTZLOTwsRCWQID7n5Xm",
		"calendar-widget__form-input--is-small": "_1uNIq5kC5PmuF1ezvFZBaa",
		"calendar-widget__form-input--is-checkbox": "_2ofXAMY1YJNe-MwDI72LOa",
		"calendar-widget__form-label": "_3CPfGdbOlSRz-7DHRD7RAQ",
		"calendar-widget__form-row": "_1434u6FLprJrrACO_QmwoY",
		"calendar-widget__form--is-hidden": "_3bTa6V-vUZCTFX4vsSmMIY"
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
//# sourceMappingURL=demo.js.map