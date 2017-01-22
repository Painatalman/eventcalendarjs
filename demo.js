import Calendar from "./src/components/Calendar.js";
// var Calendar = require('./dist/app.js');
// TEST
var eventSettingObjects = [
  {
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
  }
];

let pictureUrls = {
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
    1: 'https://scontent.flis5-1.fna.fbcdn.net/v/t1.0-9/16142824_10205766834689793_8222752294772988374_n.jpg?oh=366cce7cc6a065a7af3fd0ad841f7c05&oe=5916DF54',
    6: 'https://lh3.googleusercontent.com/9ZdGN5Of7qOhIJ1GrYmnpdsPuSM6vlqZP_yIE7KnPpablnEkJzhdixbm3XSloPMNozTOV5cWo46WIkXcbqogHYRm5Qp1h4ySsdkvCA38TAbgNrGInnWNZFniI7guCGeV4b1p0Wfxj-LacvpFCn4pg0QzferREVUfb-xM3F9McsrnGHNJVlB_K8Q_XC_vduQZGYqNaMKIcxrV1yW_A34VDSD26jcXpQouuqSt1I1S7rjg1Krl_aHVzj5ocE2VHJJUo4SuOXqfZOrczY-87ldNdt49avX3Qkecdm2mRY_LfnCgWzu1-_RpxwH6v6qkguyU1xVDFkFImvkQ02IBW-0F6LuYUAnD7fyOndlbDQ9QGTF98lfPNEj4TA0NU2IGXRihN6KlBFdLbAYs81p-937y_wLBu35GzKuhrNFQFEtGr0OiW7ZLxA-ofF7fThoQK8t7mr90546-Te3j9C7LooMSVOeNRC4a3Gf52qU9lUbDHXLNMw08y2b55fSYk3MojCJg7uCcKh-B8K8Azo9LeZ5Od5FPg-bHU_76Lsx3Pvp0Hq_d3TQfFhb8NUtOt7RTlsi6pWbqWAWKK6C3nNRRBbz1-ono2jb3Mnl_FlZn16IWiZQxcSll=w763-h430-no',
    10: 'https://lh3.googleusercontent.com/43vVeCDi3SzzoPl1qF1E1E2FPX_msL5E5dd-uh4EGUX9KBgZ69PhOEMYfe5Mc1YKO8F4ovSpzfe-HEM-ZenR05zhb19_-Mhp7SBryl7AISGcOGgNaUD83b-yWYpVFL7n1iTN1jH5xqzUIRoZGHWtPrSnJpzRKvfDSjexiAiWGF7oLxkaJRRCF5iFQk7iHK-uISuUKRjEwyvc6CBgFp42EMjp47dITpQwLxRssRp8PFk9kV5kWw_84SsqcorKDbJikX4kmFQJ9gZVsWHBOg5gGPv7cViIaDYTe2vBiOx6y91wSdOc1_U6ToYxN_VU9iTOjgu2QyGMc3_YydY9KSyWvB1-6-gcJR3G3bkPpTXcvrxVZ4Rv5JcAEDv1emK2oZ2uuisTBNBnx0ZERkgLxcZEeQ5vlSjb1I5ZkTxBq8bij80bpsIQEo0efFB-Ly5RM0X0ztpdgAWeCjxix-nsXIA9KlyYBvdO9bnbEySLemo5rLVyPNElurCQZYce_WmrB9cl25lMUbUC-yG2OWZsltXQlY71hS0V9F97D-8t57rQAiQ0dqTDj87btKn6tyQchHkOXu0Auj9KadYjAsHhojRsyuroJHrEK5A2Z5L8pOFcQLpll8vB=w355-h200-no'
  }
}

// var calendar = new Calendar("#app", {year:2016, month: 4, pictureUrls: pictureUrls, eventSettingObjects: eventSettingObjects});
var calendar = new Calendar("#app", {pictureUrls: pictureUrls, eventSettingObjects: eventSettingObjects});


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
  success: () => {
    // console.log(JSON.stringify(calendar.getEvents(true)));
  }
});


// testing no year
calendar.createAndAddEvent({
  day: 1,
  month: 11,
  isYearly: true,
  title: "Dia de los muertos"
}, {
  success: () => {
    // console.log(JSON.stringify(calendar.getEvents(true)));
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

calendar.createAndAddEvent({
  date: new Date(2017, 0, 14),
  title: '2017 Holiday',
  description: 'The day we went to Meimoa'
});

window.calendar = calendar;
