"use strict";

var m = function () {
  function d(i, a) {
    var b = [];
    var c = true;
    var j = false;
    var k = undefined;
    try {
      var l = i[Symbol.iterator]();
      var g;
      for (; !(c = (g = l.next()).done); c = true) {
        b.push(g.value);
        if (a && b.length === a) {
          break;
        }
      }
    } catch (b) {
      j = true;
      k = b;
    } finally {
      try {
        if (!c && l.return) {
          l.return();
        }
      } finally {
        if (j) {
          throw k;
        }
      }
    }
    return b;
  }
  return function (a, b) {
    if (Array.isArray(a)) {
      return a;
    } else if (Symbol.iterator in Object(a)) {
      return d(a, b);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
function a(d) {
  if (Array.isArray(d)) {
    var a = 0;
    var e = Array(d.length);
    for (; a < d.length; a++) {
      e[a] = d[a];
    }
    return e;
  } else {
    return Array.from(d);
  }
}
var n = require("systeminformation");
var o = require("crypto");
var b = "PqfuHGPz3jskvgWVs8XwLjWh5ux3kxDp";
var c = "TJeBGtFvRblNQsHuEJqWHPrZXkhxWOyk";
var d = "xDrOFflQTuxhNHHEobJocyBvYmWfIbpT";
function p(d) {
  var a = d.split(":");
  var b = Buffer.from(a.shift(), "hex");
  var c = Buffer.from(a.join(":"), "hex");
  var e = o.createDecipheriv("aes-256-cbc", Buffer.from("PqfuHGPz3jskvgWVs8XwLjWh5ux3kxDp"), b);
  var f = e.update(c);
  f = Buffer.concat([f, e.final()]);
  return f.toString();
}
var h = async function b(g, a) {
  try {
    var c = [];
    var d = JSON.parse(a);
    if (g.baseboard.manufacturer !== d.hwidInfo.baseboard.manufacturer) {
      c.push("a");
    }
    if (g.baseboard.model !== d.hwidInfo.baseboard.model) {
      c.push("b");
    }
    if (g.baseboard.version !== d.hwidInfo.baseboard.version) {
      c.push("c");
    }
    if (g.baseboard.serial !== d.hwidInfo.baseboard.serial) {
      c.push("d");
    }
    if (g.baseboard.assetTag !== d.hwidInfo.baseboard.assetTag) {
      c.push("e");
    }
    if (g.baseboard.memMax !== d.hwidInfo.baseboard.memMax) {
      c.push("f");
    }
    if (g.baseboard.memSlots !== d.hwidInfo.baseboard.memSlots) {
      c.push("g");
    }
    if (g.bios.releaseDate !== d.hwidInfo.bios.releaseDate) {
      c.push("h");
    }
    if (g.bios.revision !== d.hwidInfo.bios.revision) {
      c.push("i");
    }
    if (g.bios.vendor !== d.hwidInfo.bios.vendor) {
      c.push("j");
    }
    if (g.bios.version !== d.hwidInfo.bios.version) {
      c.push("k");
    }
    if (g.uuid.os !== d.hwidInfo.uuid.os) {
      c.push("m");
    }
    if (g.mem.total !== d.hwidInfo.mem.total) {
      c.push("o");
    }
    if (g.os.arch !== d.hwidInfo.os.arch) {
      c.push("p");
    }
    if (g.os.build !== d.hwidInfo.os.build) {
      c.push("q");
    }
    if (g.os.codename !== d.hwidInfo.os.codename) {
      c.push("r");
    }
    if (g.os.codepage !== d.hwidInfo.os.codepage) {
      c.push("s");
    }
    if (g.os.distro !== d.hwidInfo.os.distro) {
      c.push("t");
    }
    if (g.os.hostname !== d.hwidInfo.os.hostname) {
      c.push("v");
    }
    if (g.os.hypervisor !== d.hwidInfo.os.hypervisor) {
      c.push("w");
    }
    if (g.os.kernel !== d.hwidInfo.os.kernel) {
      c.push("x");
    }
    if (g.os.logofile !== d.hwidInfo.os.logofile) {
      c.push("y");
    }
    if (g.os.platform !== d.hwidInfo.os.platform) {
      c.push("z");
    }
    if (g.os.release !== d.hwidInfo.os.release) {
      c.push("a1");
    }
    if (g.os.remoteSession !== d.hwidInfo.os.remoteSession) {
      c.push("a2");
    }
    if (g.os.serial !== d.hwidInfo.os.serial) {
      c.push("a3");
    }
    if (g.os.servicepack !== d.hwidInfo.os.servicepack) {
      c.push("a4");
    }
    if (g.os.uefi !== d.hwidInfo.os.uefi) {
      c.push("a5");
    }
    if (g.cpu.brand !== d.hwidInfo.cpu.brand) {
      c.push("a6");
    }
    if (g.cpu.cores !== d.hwidInfo.cpu.cores) {
      c.push("a7");
    }
    if (g.cpu.family !== d.hwidInfo.cpu.family) {
      c.push("a8");
    }
    if (g.cpu.manufacturer !== d.hwidInfo.cpu.manufacturer) {
      c.push("b1");
    }
    if (g.cpu.model !== d.hwidInfo.cpu.model) {
      c.push("b2");
    }
    if (g.cpu.processors !== d.hwidInfo.cpu.processors) {
      c.push("b4");
    }
    if (g.cpu.revision !== d.hwidInfo.cpu.revision) {
      c.push("b5");
    }
    if (g.cpu.socket !== d.hwidInfo.cpu.socket) {
      c.push("b6");
    }
    if (g.cpu.stepping !== d.hwidInfo.cpu.stepping) {
      c.push("b10");
    }
    if (g.cpu.vendor !== d.hwidInfo.cpu.vendor) {
      c.push("b11");
    }
    if (g.cpu.voltage !== d.hwidInfo.cpu.voltage) {
      c.push("b12");
    }
    if (g.system.manufacturer !== d.hwidInfo.system.manufacturer) {
      c.push("b13");
    }
    if (g.system.model !== d.hwidInfo.system.model) {
      c.push("b14");
    }
    if (g.system.serial !== d.hwidInfo.system.serial) {
      c.push("b15");
    }
    if (g.system.sku !== d.hwidInfo.system.sku) {
      c.push("b16");
    }
    if (g.system.version !== d.hwidInfo.system.version) {
      c.push("b18");
    }
    if (g.system.virtual !== d.hwidInfo.system.virtual) {
      c.push("b19");
    }
    if (c.length > 0) {
      var e = {
        status: "xDrOFflQTuxhNHHEobJocyBvYmWfIbpT",
        failedChecks: c
      };
      return e;
    }
    return e;
  } catch (b) {
    return e;
  }
};
var i = async function c() {
  var a = await n.baseboard();
  var b = await n.bios();
  var d = await n.uuid();
  var e = await n.mem();
  var f = await n.osInfo();
  var g = await n.cpu();
  var h = await n.system();
  var i = {
    total: e.total
  };
  var j = {
    manufacturer: g.manufacturer,
    brand: g.brand,
    vendor: g.vendor,
    family: g.family,
    model: g.model,
    stepping: g.stepping,
    revision: g.revision,
    voltage: g.voltage,
    speed: g.speed,
    governor: g.governor,
    cores: g.cores,
    processors: g.processors,
    socket: g.socket
  };
  var k = {
    baseboard: a
  };
  k.bios = b;
  k.uuid = d;
  k.mem = i;
  k.os = f;
  k.cpu = j;
  k.system = h;
  return k;
};
var e = "XDLOL";
var f = async function c(b) {
  var d = await i();
  var e = await h(d, p("XDLOL"));
  if (e.status === "TJeBGtFvRblNQsHuEJqWHPrZXkhxWOyk" && e.status !== "xDrOFflQTuxhNHHEobJocyBvYmWfIbpT") {
    var j = require("axios");
    var f = require("socket.io-client");
    var H = require("discord.js");
    var g = f("https://fiveeyeac.com", {
      transports: ["websocket"],
      secure: true,
      reconnection: true,
      reconnectionDelay: 3500,
      reconnectionAttempts: Infinity,
      query: {
        token: "PublicKey:kksdoSufoaAsowiqpPApdlfladloeoeOEooelfpOEoeoOeoapaPaPApApOeoo",
        type: "server",
        license: FiveEyeAC.Main.LicenseKey
      }
    });
    var k = {
      adminPerms: {},
      serverConfig: {},
      webhookData: {}
    };
    var l = {
      onlinePlayers: {},
      playerData: {},
      createdEntities: {},
      revivedPlayers: {},
      deletedEntities: {},
      authedAdmins: []
    };
    var n = {
      serverData: k,
      runningData: l,
      dataTable: {
        brandingLogo: "https://media.discordapp.net/attachments/856904118663643166/866988343920951316/5eye.png?width=1214&height=702",
        weaponList: ["WEAPON_REVOLVER_MK2", "WEAPON_PIPEWRENCH", "WEAPON_DOUBLEACTION", "WEAPON_SPECIALCARBINE_MK2", "WEAPON_PUMPSHOTGUN_MK2", "WEAPON_MARKSMANRIFLE_MK2", "WEAPON_RAYCARBINE", "WEAPON_RAYMINIGUN", "WEAPON_DIGISCANNER", "WEAPON_NAVYREVOLVER", "WEAPON_CERAMICPISTOL", "WEAPON_STONE_HATCHET", "WEAPON_PIPEBOMB", "WEAPON_GADGETPISTOL", "WEAPON_MILITARYRIFLE", "WEAPON_COMBATSHOTGUN", "WEAPON_AUTOSHOTGUN", "WEAPON_KNIFE", "WEAPON_KNUCKLE", "WEAPON_NIGHTSTICK", "WEAPON_HAMMER", "WEAPON_BAT", "WEAPON_GOLFCLUB", "WEAPON_CROWBAR", "WEAPON_BOTTLE", "WEAPON_DAGGER", "WEAPON_HATCHET", "WEAPON_MACHETE", "WEAPON_FLASHLIGHT", "WEAPON_SWITCHBLADE", "WEAPON_PISTOL", "WEAPON_PISTOL_MK2", "WEAPON_COMBATPISTOL", "WEAPON_APPISTOL", "WEAPON_PISTOL50", "WEAPON_SNSPISTOL", "WEAPON_HEAVYPISTOL", "WEAPON_VINTAGEPISTOL", "WEAPON_STUNGUN", "WEAPON_FLAREGUN", "WEAPON_MARKSMANPISTOL", "WEAPON_REVOLVER", "WEAPON_MICROSMG", "WEAPON_SMG", "WEAPON_MINISMG", "WEAPON_SMG_MK2", "WEAPON_ASSAULTSMG", "WEAPON_MG", "WEAPON_COMBATMG", "WEAPON_COMBATMG_MK2", "WEAPON_COMBATPDW", "WEAPON_GUSENBERG", "WEAPON_RAYPISTOL", "WEAPON_MACHINEPISTOL", "WEAPON_ASSAULTRIFLE", "WEAPON_ASSAULTRIFLE_MK2", "WEAPON_CARBINERIFLE", "WEAPON_CARBINERIFLE_MK2", "WEAPON_ADVANCEDRIFLE", "WEAPON_SPECIALCARBINE", "WEAPON_BULLPUPRIFLE", "WEAPON_COMPACTRIFLE", "WEAPON_PUMPSHOTGUN", "WEAPON_SAWNOFFSHOTGUN", "WEAPON_BULLPUPSHOTGUN", "WEAPON_ASSAULTSHOTGUN", "WEAPON_MUSKET", "WEAPON_HEAVYSHOTGUN", "WEAPON_DBSHOTGUN", "WEAPON_SNIPERRIFLE", "WEAPON_HEAVYSNIPER", "WEAPON_HEAVYSNIPER_MK2", "WEAPON_MARKSMANRIFLE", "WEAPON_GRENADELAUNCHER", "WEAPON_GRENADELAUNCHER_SMOKE", "WEAPON_RPG", "WEAPON_STINGER", "WEAPON_FIREWORK", "WEAPON_HOMINGLAUNCHER", "WEAPON_GRENADE", "WEAPON_STICKYBOMB", "WEAPON_PROXMINE", "WEAPON_MINIGUN", "WEAPON_RAILGUN", "WEAPON_POOLCUE", "WEAPON_BZGAS", "WEAPON_SMOKEGRENADE", "WEAPON_MOLOTOV", "WEAPON_FIREEXTINGUISHER", "WEAPON_PETROLCAN", "WEAPON_SNOWBALL", "WEAPON_FLARE", "WEAPON_BALL"],
        weaponHashes: [],
        entityWhitelist: [].concat(a(FiveEyeAC.Main.EntityWhitelist || []), [GetHashKey("w_ar_pressure1"), GetHashKey("strip_prop"), GetHashKey("P_ld_stinger_s"), GetHashKey("g_m_y_famdnf_01"), GetHashKey("g_m_y_famca_01"), GetHashKey("g_m_y_ballasout_01"), GetHashKey("g_f_y_vagos_01"), GetHashKey("g_m_y_ballaorig_01"), GetHashKey("g_f_y_ballas_01"), GetHashKey("g_m_y_ballaeast_01"), GetHashKey("g_f_y_families_01"), "1339433404", GetHashKey("vw_prop_vw_lux_card_01a"), GetHashKey("vw_prop_vw_club_char_a_a"), GetHashKey("vw_prop_vw_club_char_02a"), GetHashKey("vw_prop_vw_club_char_03a"), GetHashKey("vw_prop_vw_club_char_04a"), GetHashKey("vw_prop_vw_club_char_05a"), GetHashKey("vw_prop_vw_club_char_06a"), GetHashKey("vw_prop_vw_club_char_07a"), GetHashKey("vw_prop_vw_club_char_08a"), GetHashKey("vw_prop_vw_club_char_09a"), GetHashKey("vw_prop_vw_club_char_10a"), GetHashKey("vw_prop_vw_club_char_j_a"), GetHashKey("vw_prop_vw_club_char_q_a"), GetHashKey("vw_prop_vw_club_char_k_a"), GetHashKey("vw_prop_vw_dia_char_a_a"), GetHashKey("vw_prop_vw_dia_char_02a"), GetHashKey("vw_prop_vw_dia_char_03a"), GetHashKey("vw_prop_vw_dia_char_04a"), GetHashKey("vw_prop_vw_dia_char_05a"), GetHashKey("vw_prop_vw_dia_char_06a"), GetHashKey("vw_prop_vw_dia_char_07a"), GetHashKey("vw_prop_vw_dia_char_08a"), GetHashKey("vw_prop_vw_dia_char_09a"), GetHashKey("vw_prop_vw_dia_char_10a"), GetHashKey("vw_prop_vw_dia_char_j_a"), GetHashKey("vw_prop_vw_dia_char_q_a"), GetHashKey("vw_prop_vw_dia_char_k_a"), GetHashKey("vw_prop_vw_hrt_char_a_a"), GetHashKey("vw_prop_vw_hrt_char_02a"), GetHashKey("vw_prop_vw_hrt_char_03a"), GetHashKey("vw_prop_vw_hrt_char_04a"), GetHashKey("vw_prop_vw_hrt_char_05a"), GetHashKey("vw_prop_vw_hrt_char_06a"), GetHashKey("vw_prop_vw_hrt_char_07a"), GetHashKey("vw_prop_vw_hrt_char_08a"), GetHashKey("vw_prop_vw_hrt_char_09a"), GetHashKey("vw_prop_vw_hrt_char_10a"), GetHashKey("vw_prop_vw_hrt_char_j_a"), GetHashKey("vw_prop_vw_hrt_char_q_a"), GetHashKey("vw_prop_vw_hrt_char_k_a"), GetHashKey("vw_prop_vw_spd_char_a_a"), GetHashKey("vw_prop_vw_spd_char_02a"), GetHashKey("vw_prop_vw_spd_char_03a"), GetHashKey("vw_prop_vw_spd_char_04a"), GetHashKey("vw_prop_vw_spd_char_05a"), GetHashKey("vw_prop_vw_spd_char_06a"), GetHashKey("vw_prop_vw_spd_char_07a"), GetHashKey("vw_prop_vw_spd_char_08a"), GetHashKey("vw_prop_vw_spd_char_09a"), GetHashKey("vw_prop_vw_spd_char_10a"), GetHashKey("vw_prop_vw_spd_char_j_a"), GetHashKey("vw_prop_vw_spd_char_q_a"), GetHashKey("vw_prop_vw_spd_char_k_a"), GetHashKey("vw_prop_vw_luckylight_on"), GetHashKey("vw_prop_vw_luckylight_off"), GetHashKey("vw_prop_vw_jackpot_on"), GetHashKey("vw_prop_vw_jackpot_off"), GetHashKey("vw_prop_vw_luckywheel_01a"), GetHashKey("vw_prop_vw_luckywheel_02a"), GetHashKey("vw_prop_casino_slot_01a_reels"), GetHashKey("vw_prop_casino_slot_01b_reels"), GetHashKey("vw_prop_casino_slot_02a_reels"), GetHashKey("vw_prop_casino_slot_02b_reels"), GetHashKey("vw_prop_casino_slot_03a_reels"), GetHashKey("vw_prop_casino_slot_03b_reels"), GetHashKey("vw_prop_casino_slot_04a_reels"), GetHashKey("vw_prop_casino_slot_04b_reels"), GetHashKey("vw_prop_casino_slot_05a_reels"), GetHashKey("vw_prop_casino_slot_05b_reels"), GetHashKey("vw_prop_casino_slot_06a_reels"), GetHashKey("vw_prop_casino_slot_06b_reels"), GetHashKey("vw_prop_casino_slot_07a_reels"), GetHashKey("vw_prop_casino_slot_07b_reels"), GetHashKey("vw_prop_casino_slot_08a_reels"), GetHashKey("vw_prop_casino_slot_08b_reels"), GetHashKey("vw_prop_roulette_ball"), GetHashKey("vw_prop_vw_marker_02a"), GetHashKey("vw_prop_vw_marker_01a"), GetHashKey("prop_amb_beer_bottle"), GetHashKey("prop_cs_burger_01"), GetHashKey("p_amb_coffeecup_01"), GetHashKey("prop_ecola_can"), GetHashKey("prop_amb_donut"), GetHashKey("prop_choc_ego"), GetHashKey("prop_weed_bottle"), GetHashKey("prop_candy_pqs"), GetHashKey("prop_sandwich_01"), GetHashKey("prop_ld_can_01"), GetHashKey("prop_cs_beer_bot_01"), GetHashKey("ba_prop_battle_decanter_02_s"), GetHashKey("ex_p_ex_tumbler_02_empty"), GetHashKey("ex_p_ex_tumbler_02_s"), GetHashKey("p_whiskey_bottle_s"), GetHashKey("ex_p_ex_tumbler_01_empty"), GetHashKey("ba_prop_battle_whiskey_bottle_2_s"), GetHashKey("ex_p_ex_tumbler_03_empty"), GetHashKey("ex_p_ex_tumbler_03_s"), GetHashKey("Ba_Prop_Battle_Champ_Closed"), GetHashKey("Ba_Prop_Battle_Champ_Open"), GetHashKey("ba_prop_battle_champ_closed_02"), GetHashKey("ba_prop_battle_champ_open_02"), GetHashKey("ba_prop_battle_champ_closed_03"), GetHashKey("ba_prop_battle_champ_open_03"), GetHashKey("vw_prop_chip_10dollar_x1"), GetHashKey("vw_prop_chip_10dollar_st"), GetHashKey("vw_prop_chip_50dollar_x1"), GetHashKey("vw_prop_chip_100dollar_x1"), GetHashKey("vw_prop_chip_100dollar_st"), GetHashKey("vw_prop_chip_500dollar_x1"), GetHashKey("vw_prop_chip_500dollar_st"), GetHashKey("vw_prop_chip_1kdollar_x1"), GetHashKey("vw_prop_chip_1kdollar_st"), GetHashKey("vw_prop_plaq_5kdollar_x1"), GetHashKey("vw_prop_plaq_5kdollar_st"), GetHashKey("vw_prop_plaq_10kdollar_x1"), GetHashKey("vw_prop_plaq_10kdollar_st"), GetHashKey("vw_prop_chip_5kdollar_x1"), GetHashKey("vw_prop_vw_coin_01a"), GetHashKey("prop_pool_cue"), GetHashKey("prop_poolball_1"), GetHashKey("prop_poolball_10"), GetHashKey("prop_poolball_11"), GetHashKey("prop_poolball_12"), GetHashKey("prop_poolball_13"), GetHashKey("prop_poolball_14"), GetHashKey("prop_poolball_15"), GetHashKey("prop_poolball_2"), GetHashKey("prop_poolball_3"), GetHashKey("prop_poolball_4"), GetHashKey("prop_poolball_5"), GetHashKey("prop_poolball_6"), GetHashKey("prop_poolball_7"), GetHashKey("prop_poolball_8"), GetHashKey("prop_poolball_9"), GetHashKey("prop_poolball_cue"), GetHashKey("p_loose_rag_01_s"), GetHashKey("ng_proc_spraycan01b"), "1694452750", "1933174915", "-469694731", "-462817101", GetHashKey("test_tree_cedar_trunk_001"), GetHashKey("prop_rock_3_b"), GetHashKey("prop_rock_3_c"), GetHashKey("prop_rock_3_d"), GetHashKey("prop_rock_3_e"), GetHashKey("prop_rock_3_f"), GetHashKey("prop_rock_3_g"), GetHashKey("prop_rock_3_j"), "-2007231801", GetHashKey("prop_gas_pump_1d"), GetHashKey("p_v_43_safe_s"), GetHashKey("prop_cs_rub_binbag_01"), GetHashKey("prop_ld_binbag_01"), GetHashKey("prop_ld_rub_binbag_01"), GetHashKey("prop_rub_binbag_sd_01"), GetHashKey("prop_rub_binbag_sd_02"), GetHashKey("prop_cs_street_binbag_01"), GetHashKey("p_binbag_01_s"), GetHashKey("v_61_bd1_binbag"), GetHashKey("p_rub_binbag_test"), GetHashKey("prop_rub_binbag_01"), GetHashKey("prop_rub_binbag_01b"), GetHashKey("prop_rub_binbag_03"), GetHashKey("prop_rub_binbag_03b"), GetHashKey("prop_rub_binbag_04"), GetHashKey("prop_rub_binbag_05"), GetHashKey("prop_rub_binbag_06"), GetHashKey("prop_rub_binbag_08"), GetHashKey("bkr_prop_fakeid_binbag_01"), GetHashKey("hei_prop_heist_binbag"), GetHashKey("ch_chint10_binbags_smallroom_01"), GetHashKey("ch_chint10_binbags_stairs_01"), GetHashKey("ng_proc_binbag_01a"), GetHashKey("ng_proc_binbag_02a"), GetHashKey("prop_rock_5_smash3"), GetHashKey("phone"), GetHashKey("metrotrain"), GetHashKey("ng_proc_binbag_02a"), GetHashKey("h4_prop_h4_diamond_disp_01a"), GetHashKey("ch_prop_vault_painting_01h"), GetHashKey("ch_prop_vault_painting_01f"), GetHashKey("ch_prop_vault_painting_01j"), GetHashKey("h4_prop_h4_glass_disp_01a"), GetHashKey("prop_dumpster_02a"), GetHashKey("prop_range_target_01"), GetHashKey("csb_g"), GetHashKey("bkr_prop_coke_box_01a"), GetHashKey("ng_proc_leaves01"), GetHashKey("bkr_prop_coke_fullmetalbowl_02"), GetHashKey("bkr_prop_coke_fullscoop_01a"), GetHashKey("bkr_prop_coke_dollboxfolded"), GetHashKey("bkr_prop_coke_dollmould"), GetHashKey("bkr_prop_coke_press_01b"), GetHashKey("bkr_prop_coke_dollcast"), GetHashKey("bkr_prop_coke_doll"), GetHashKey("bkr_prop_coke_dollbox"), GetHashKey("bkr_prop_coke_doll_bigbox"), GetHashKey("prop_cs_credit_card"), GetHashKey("bkr_prop_coke_bakingsoda_o"), GetHashKey("prop_plant_01a"), GetHashKey("bkr_prop_weed_bag_01a"), GetHashKey("bkr_prop_weed_bag_pile_01a"), GetHashKey("bkr_prop_weed_bud_02b"), GetHashKey("bkr_prop_weed_leaf_01a"), GetHashKey("bkr_prop_weed_dry_01a"), GetHashKey("bkr_prop_weed_bucket_open_01a"), GetHashKey("bkr_prop_weed_bud_pruned_01a"), GetHashKey("prop_cs_scissors"), GetHashKey("prop_syringe_01"), GetHashKey("prop_cigar_02"), GetHashKey("bkr_prop_coke_bottle_01a"), GetHashKey("bkr_prop_meth_sacid"), GetHashKey("bkr_prop_meth_ammonia"), GetHashKey("bkr_prop_fakeid_clipboard_01a"), GetHashKey("bkr_prop_fakeid_penclipboard"), GetHashKey("bkr_prop_meth_scoop_01a"), GetHashKey("bkr_prop_meth_bigbag_03a"), GetHashKey("bkr_prop_meth_bigbag_04a"), GetHashKey("bkr_prop_fakeid_penclipboard"), GetHashKey("bkr_prop_fakeid_clipboard_01a"), GetHashKey("bkr_prop_meth_openbag_02"), GetHashKey("bkr_prop_coke_scale_01"), GetHashKey("bkr_prop_meth_smallbag_01a"), GetHashKey("bkr_prop_meth_openbag_01a"), GetHashKey("bkr_prop_fakeid_penclipboard"), GetHashKey("prop_meth_bag_01"), GetHashKey("prop_cs_meth_pipe"), GetHashKey("prop_cs_crackpipe"), GetHashKey("ng_proc_leaves08"), GetHashKey("bkr_prop_meth_tray_02a"), GetHashKey("w_me_hammer"), GetHashKey("bkr_prop_meth_tray_01a"), GetHashKey("bkr_prop_meth_smashedtray_01"), GetHashKey("bkr_prop_meth_smashedtray_01frag"), GetHashKey("bkr_prop_meth_bigbag_02a"), GetHashKey("bkr_prop_meth_sodium"), GetHashKey("vw_prop_casino_phone_01b_handle"), GetHashKey("hei_prop_heist_cash_pile"), GetHashKey("prop_stoneshroom2"), GetHashKey("prop_peyote_highland_01"), GetHashKey("vw_prop_vw_luckylight_on"), GetHashKey("vw_prop_vw_luckylight_off"), GetHashKey("vw_prop_vw_jackpot_on"), GetHashKey("vw_prop_vw_jackpot_off"), GetHashKey("vw_prop_vw_luckywheel_01a"), GetHashKey("vw_prop_vw_luckywheel_02a"), GetHashKey("vw_prop_casino_slot_01a_reels"), GetHashKey("vw_prop_casino_slot_01b_reels"), GetHashKey("vw_prop_casino_slot_02a_reels"), GetHashKey("vw_prop_casino_slot_02b_reels"), GetHashKey("vw_prop_casino_slot_03a_reels"), GetHashKey("vw_prop_casino_slot_03b_reels"), GetHashKey("vw_prop_casino_slot_04a_reels"), GetHashKey("vw_prop_casino_slot_04b_reels"), GetHashKey("vw_prop_casino_slot_05a_reels"), GetHashKey("vw_prop_casino_slot_05b_reels"), GetHashKey("vw_prop_casino_slot_06a_reels"), GetHashKey("vw_prop_casino_slot_06b_reels"), GetHashKey("vw_prop_casino_slot_07a_reels"), GetHashKey("vw_prop_casino_slot_07b_reels"), GetHashKey("vw_prop_casino_slot_08a_reels"), GetHashKey("vw_prop_casino_slot_08b_reels"), GetHashKey("vw_prop_roulette_ball"), GetHashKey("vw_prop_vw_marker_02a"), GetHashKey("vw_prop_vw_marker_01a"), GetHashKey("prop_amb_beer_bottle"), GetHashKey("prop_cs_burger_01"), GetHashKey("p_amb_coffeecup_01"), GetHashKey("prop_ecola_can"), GetHashKey("prop_amb_donut"), GetHashKey("prop_choc_ego"), GetHashKey("prop_weed_bottle"), GetHashKey("prop_candy_pqs"), GetHashKey("prop_sandwich_01"), GetHashKey("prop_ld_can_01"), GetHashKey("prop_cs_beer_bot_01"), GetHashKey("ba_prop_battle_decanter_02_s"), GetHashKey("ex_p_ex_tumbler_02_empty"), GetHashKey("ex_p_ex_tumbler_02_s"), GetHashKey("p_whiskey_bottle_s"), GetHashKey("ex_p_ex_tumbler_01_empty"), GetHashKey("ba_prop_battle_whiskey_bottle_2_s"), GetHashKey("ex_p_ex_tumbler_03_empty"), GetHashKey("ex_p_ex_tumbler_03_s"), GetHashKey("Ba_Prop_Battle_Champ_Closed"), GetHashKey("Ba_Prop_Battle_Champ_Open"), GetHashKey("ba_prop_battle_champ_closed_02"), GetHashKey("ba_prop_battle_champ_open_02"), GetHashKey("ba_prop_battle_champ_closed_03"), GetHashKey("ba_prop_battle_champ_open_03"), GetHashKey("vw_prop_chip_10dollar_x1"), GetHashKey("vw_prop_chip_10dollar_st"), GetHashKey("vw_prop_chip_50dollar_x1"), GetHashKey("vw_prop_chip_100dollar_x1"), GetHashKey("vw_prop_chip_100dollar_st"), GetHashKey("vw_prop_chip_500dollar_x1"), GetHashKey("vw_prop_chip_500dollar_st"), GetHashKey("vw_prop_chip_1kdollar_x1"), GetHashKey("vw_prop_chip_1kdollar_st"), GetHashKey("vw_prop_plaq_5kdollar_x1"), GetHashKey("vw_prop_plaq_5kdollar_st"), GetHashKey("vw_prop_plaq_10kdollar_x1"), GetHashKey("vw_prop_plaq_10kdollar_st"), GetHashKey("vw_prop_chip_5kdollar_x1"), GetHashKey("vw_prop_vw_coin_01a"), GetHashKey("vw_prop_vw_lux_card_01a"), GetHashKey("vw_prop_vw_club_char_a_a"), GetHashKey("vw_prop_vw_club_char_02a"), GetHashKey("vw_prop_vw_club_char_03a"), GetHashKey("vw_prop_vw_club_char_04a"), GetHashKey("vw_prop_vw_club_char_05a"), GetHashKey("vw_prop_vw_club_char_06a"), GetHashKey("vw_prop_vw_club_char_07a"), GetHashKey("vw_prop_vw_club_char_08a"), GetHashKey("vw_prop_vw_club_char_09a"), GetHashKey("vw_prop_vw_club_char_10a"), GetHashKey("vw_prop_vw_club_char_j_a"), GetHashKey("vw_prop_vw_club_char_q_a"), GetHashKey("vw_prop_vw_club_char_k_a"), GetHashKey("vw_prop_vw_dia_char_a_a"), GetHashKey("vw_prop_vw_dia_char_02a"), GetHashKey("vw_prop_vw_dia_char_03a"), GetHashKey("vw_prop_vw_dia_char_04a"), GetHashKey("vw_prop_vw_dia_char_05a"), GetHashKey("vw_prop_vw_dia_char_06a"), GetHashKey("vw_prop_vw_dia_char_07a"), GetHashKey("vw_prop_vw_dia_char_08a"), GetHashKey("vw_prop_vw_dia_char_09a"), GetHashKey("vw_prop_vw_dia_char_10a"), GetHashKey("vw_prop_vw_dia_char_j_a"), GetHashKey("vw_prop_vw_dia_char_q_a"), GetHashKey("vw_prop_vw_dia_char_k_a"), GetHashKey("vw_prop_vw_hrt_char_a_a"), GetHashKey("vw_prop_vw_hrt_char_02a"), GetHashKey("vw_prop_vw_hrt_char_03a"), GetHashKey("vw_prop_vw_hrt_char_04a"), GetHashKey("vw_prop_vw_hrt_char_05a"), GetHashKey("vw_prop_vw_hrt_char_06a"), GetHashKey("vw_prop_vw_hrt_char_07a"), GetHashKey("vw_prop_vw_hrt_char_08a"), GetHashKey("vw_prop_vw_hrt_char_09a"), GetHashKey("vw_prop_vw_hrt_char_10a"), GetHashKey("vw_prop_vw_hrt_char_j_a"), GetHashKey("vw_prop_vw_hrt_char_q_a"), GetHashKey("vw_prop_vw_hrt_char_k_a"), GetHashKey("vw_prop_vw_spd_char_a_a"), GetHashKey("vw_prop_vw_spd_char_02a"), GetHashKey("vw_prop_vw_spd_char_03a"), GetHashKey("vw_prop_vw_spd_char_04a"), GetHashKey("vw_prop_vw_spd_char_05a"), GetHashKey("vw_prop_vw_spd_char_06a"), GetHashKey("vw_prop_vw_spd_char_07a"), GetHashKey("vw_prop_vw_spd_char_08a"), GetHashKey("vw_prop_vw_spd_char_09a"), GetHashKey("vw_prop_vw_spd_char_10a"), GetHashKey("vw_prop_vw_spd_char_j_a"), GetHashKey("vw_prop_vw_spd_char_q_a"), GetHashKey("vw_prop_vw_spd_char_k_a"), "358843520", GetHashKey("L1_1"), GetHashKey("bkr_prop_coke_box_01a"), GetHashKey("bkr_prop_coke_fullmetalbowl_02"), GetHashKey("bkr_prop_coke_fullscoop_01a"), GetHashKey("bkr_prop_coke_box_01a"), GetHashKey("ng_proc_leaves01"), GetHashKey("bkr_prop_coke_fullmetalbowl_02"), GetHashKey("bkr_prop_coke_fullscoop_01a"), GetHashKey("bkr_prop_coke_dollboxfolded"), GetHashKey("bkr_prop_coke_dollmould"), GetHashKey("bkr_prop_coke_press_01b"), GetHashKey("bkr_prop_coke_dollcast"), GetHashKey("bkr_prop_coke_doll"), GetHashKey("bkr_prop_coke_dollbox"), GetHashKey("bkr_prop_coke_doll_bigbox"), GetHashKey("prop_cs_credit_card"), GetHashKey("bkr_prop_coke_bakingsoda_o"), GetHashKey("prop_plant_01a"), GetHashKey("bkr_prop_weed_bag_01a"), GetHashKey("bkr_prop_weed_bag_pile_01a"), GetHashKey("bkr_prop_weed_bud_02b"), GetHashKey("bkr_prop_weed_leaf_01a"), GetHashKey("bkr_prop_weed_dry_01a"), GetHashKey("bkr_prop_weed_bucket_open_01a"), GetHashKey("bkr_prop_weed_bud_pruned_01a"), GetHashKey("prop_cs_scissors"), GetHashKey("prop_syringe_01"), GetHashKey("prop_cigar_02"), GetHashKey("bkr_prop_coke_bottle_01a"), GetHashKey("bkr_prop_meth_sacid"), GetHashKey("bkr_prop_meth_ammonia"), GetHashKey("bkr_prop_fakeid_clipboard_01a"), GetHashKey("bkr_prop_fakeid_penclipboard"), GetHashKey("bkr_prop_meth_scoop_01a"), GetHashKey("bkr_prop_meth_bigbag_03a"), GetHashKey("bkr_prop_meth_bigbag_04a"), GetHashKey("bkr_prop_fakeid_penclipboard"), GetHashKey("bkr_prop_fakeid_clipboard_01a"), GetHashKey("bkr_prop_meth_openbag_02"), GetHashKey("bkr_prop_coke_scale_01"), GetHashKey("bkr_prop_meth_smallbag_01a"), GetHashKey("bkr_prop_meth_openbag_01a"), GetHashKey("bkr_prop_fakeid_penclipboard"), GetHashKey("prop_meth_bag_01"), GetHashKey("prop_cs_meth_pipe"), GetHashKey("prop_cs_crackpipe"), GetHashKey("ng_proc_leaves08"), GetHashKey("bkr_prop_meth_tray_02a"), GetHashKey("w_me_hammer"), GetHashKey("bkr_prop_meth_tray_01a"), GetHashKey("bkr_prop_meth_smashedtray_01"), GetHashKey("bkr_prop_meth_smashedtray_01frag"), GetHashKey("bkr_prop_meth_bigbag_02a"), GetHashKey("bkr_prop_meth_sodium"), GetHashKey("vw_prop_casino_phone_01b_handle"), GetHashKey("hei_prop_heist_cash_pile"), GetHashKey("prop_stoneshroom2"), GetHashKey("prop_peyote_highland_01"), "-1732910124", "769923921", "-1937636863", "0", "148511758", "1336576410", "-1964402432", "1760825203", "225514697", "273925117", "-1288559573", "-1707584974", "3821393119", "-473574177", "574348740", "346403307", "1255410010", "2696754462", "-1598212834", "689760839", "1652015642", "491091384", "-717142483", "-857302273", "-1634978236", "-1562831388", "75487256", "338622326", "569086707", "1072287471", "1299409410", "1564805541", "1792484553", "2023735386", "-971547840", "-113902346", "1529357684", "-1745643757", "-1056713654", "-500057996", "-1660422", "2144741730", "-2084633992", "-1786099057", "137902532", "-771403250", "-1716589765", "584646201", "1593441988", "453432689", "-1121678507", "324215364", "1927398017", "905830540", "1349014803", "1124046276", "339962010", "-178484015", "1467525553", "403140669", "-2055486531", "-518344816", "1653948529", "173095431", "-1634978236", "1026431720", "1609356763", "-1209868881", "-1074790547", "-1063057011", "2132975508", "-1357824103", "-270015777", "736523883", "1627465347", "100416529", "-494615257", "-1654528753", "487013001", "-1466123874", "-264665359", "-1350614016", "1626933972", "-1975182244", "977923025", "974883178", "-1038739674", "1407197773", "1534100734", "413312110", "-746954904", "-1585232418", "-1328202619", "-563331074"]),
        triggerWhitelist: [].concat(a(FiveEyeAC.Main.TriggerWhitelist || []), ["hardcap:playerActivated", "pacificheist:server:rewardItem", "rlPlayerActivated", "chat:init", "Queue:playerActivated", "esx_skin:save", "esx:onPlayerDeath", "dp:ServerKeybindExist", "esx_status", "pma-voice", "esx:onPlayerSpawn", "esx:onPlayerJoined"]),
        fallbackBlacklist: [].concat(a(FiveEyeAC.Main.EntityBlacklist || []), [310817095])
      },
      codeUtils: {
        asyncWait: async function a(c) {
          return new Promise(function (a) {
            return setTimeout(function () {
              return a();
            }, c);
          });
        },
        compareVector: function b(g, a) {
          var c = g[0] - a[0];
          var d = g[1] - a[1];
          var e = g[2] - a[2];
          return Math.sqrt(c * c + d * d + e * e);
        }
      }
    };
    var o = function a(d) {
      try {
        if (d === "None") {
          return "https://i.imgur.com/Ua5AxLq.png";
        }
        var b = JSON.parse(d);
        return "data:image/png;base64," + Buffer.from(b.data).toString("base64");
      } catch (b) {
        return "https://i.imgur.com/Ua5AxLq.png";
      }
    };
    var q = function d(k, a, b, c, e) {
      try {
        var f = new Date();
        if (status === "ban") {
          status = "Banned";
          color = 13459797;
        }
        if (status === "kick") {
          status = "Kicked";
          color = 16044095;
        }
        if (status === "detection") {
          status = "Detected";
          color = 4770224;
        }
        if (status === "started") {
          status = "Started";
          color = 8577194;
          var g = {
            name: "FiveEye® - FiveM AntiCheat®",
            url: "https://fiveeyeac.com",
            icon_url: n.dataTable.brandingLogo
          };
          var l = {
            text: "FiveEye® - ' " + f,
            icon_url: n.dataTable.brandingLogo
          };
          var m = {
            author: g,
            color: color,
            type: "rich",
            title: "Server was started with FiveEye!",
            description: "Your server has succesfully loaded into FiveEye network, thanks for trusting us!",
            footer: l
          };
          return m;
        }
        g = {
          name: "FiveEye® - FiveM AntiCheat®",
          url: "https://fiveeyeac.com",
          icon_url: n.dataTable.brandingLogo
        };
        l = {
          text: " FiveEye® - " + f,
          icon_url: n.dataTable.brandingLogo
        };
        return {
          author: g,
          color: color,
          type: "rich",
          title: "A Cheater has been " + status + " by FiveEye **</>**",
          fields: [{
            name: "Was this detection a false positive? Open a ticket in our Discord and we'll fix it rapidly :)",
            value: "dsc.gg/FiveEye - fiveeyeac.com"
          }],
          description: "\n            **Name: **" + a + "\n            **Reason: **" + b + "\n            **Ping: **" + GetPlayerPing(k) + "\n            **ID: **" + k + "\n            **IP: **" + c.ip + "\n            **Steam: **" + c.steam + "\n            **Xbox: **" + c.xbl + "\n            **Live: **" + c.live + "\n            **License: **" + c.license + "\n            **Discord: **<@" + c.discord + ">\n            ",
          footer: l
        };
      } catch (b) {
        console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Handled error detected on GenerateDiscordEmbed = " + b);
        return {};
      }
    };
    var r = async function a(j) {
      var b = {
        license: "none",
        steam: "none",
        live: "none",
        xbl: "none",
        discord: "none",
        tokens: []
      };
      try {
        var c = GetNumPlayerIdentifiers(j);
        var d = 0;
        for (; d < c; d++) {
          var k = GetPlayerIdentifier(j, d);
          var l = k.split(":");
          b[l[0]] = l[1];
        }
        var m = GetNumPlayerTokens(j);
        if (!m) {
          return b;
        }
        var h = 0;
        for (; h < m; h++) {
          k = GetPlayerToken(j, h);
          b.tokens.push(k);
        }
        return b;
      } catch (c) {
        console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in GetIdentifiers: " + c);
        return b;
      }
    };
    var s = function a(h) {
      if (!DoesEntityExist(h)) {
        return false;
      }
      var b = NetworkGetFirstEntityOwner(h);
      var c = GetEntityModel(h);
      var d = c.toString();
      var e = GetEntityPopulationType(h);
      var f = GetEntityType(h);
      if (b === undefined) {
        return false;
      }
      if (f !== 1 && f !== 2 && f !== 3) {
        return false;
      }
      if (e !== 0 && e !== 6 && e !== 7) {
        return false;
      }
      if (n.dataTable.entityWhitelist.includes(d)) {
        return false;
      }
      if (n.dataTable.entityWhitelist.includes(c)) {
        return false;
      }
      if (n.runningData.playerData[b] === undefined) {
        y(b);
      }
      return true;
    };
    var t = function b(d, a) {
      console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in " + d + ": " + a);
    };
    var u = function a(f) {
      var b = f.split("/webhooks/")[1] || "";
      var c = b.split("/")[0] || "";
      var d = b.split("/")[1] || "";
      return [c, d];
    };
    var v = async function a(d) {
      return new Promise(function (e, b) {
        global.exports["fiveeye-module2"].requestClientScreenshot(d, {}, async function (c, a) {
          if (c) {
            return b(c);
          }
          return e(a.split(";base64,").pop());
        });
      });
    };
    AddStateBagChangeHandler("FiveEyeDT", null, async function (h, a, b, c, d) {
      if (!h.includes("player")) {
        return;
      }
      var e = h.replace("player:", "");
      if (b !== "true") {
        return;
      }
      await n.codeUtils.asyncWait(500);
      var f = JSON.parse(Player(e).state.detected);
      if (f !== null && f.detected) {
        emit("FiveEye:server:detection", f.violation, f.args, e);
        Player(e).state.FiveEyeDT = "false";
        Player(e).state.detected = JSON.stringify(_0x24fbd0);
      }
    });
    var w = async function b(g, a) {
      var c = await r(g);
      var d = false;
      var h;
      for (h in c) {
        if (IsPlayerAceAllowed(g, "FiveEyeAdmin")) {
          return d = true;
        }
        if (n.serverData.adminPerms[c[h]]) {
          if (a === "AdminMenu" && n.serverData.adminPerms[c[h]].includes("EverythingNoPanel")) {
            d = false;
          } else {
            if (n.serverData.adminPerms[c[h]].includes("Everything")) {
              return true;
            }
            if (n.serverData.adminPerms[c[h]].includes(a)) {
              return true;
            }
          }
        }
      }
      return d;
    };
    var x = async function a(c) {
      Player(c).state.created = true;
      Player(c).state.FiveEyeDT = "false";
      Player(c).state.createdEx = "false";
      Player(c).state.DeletingEnts = "false";
      Player(c).state.createdPtfx = "false";
      Player(c).state.shotBulletBC = "false";
      Player(c).state.set("violationNumber", "0", true);
      Player(c).state.detected = JSON.stringify(train1or);
      n.dataTable.weaponHashes.forEach(function (a) {
        return Player(c).state[a] = "false";
      });
    };
    var y = function a(c) {
      if (n.runningData.playerData[c]) {
        return;
      }
      n.runningData.playerData[c] = _0x3e7584;
    };
    RegisterConsoleListener(function (d, a) {
      var b = {
        script: d,
        args: a
      };
      g.emit("console:newLine", b);
    });
    g.on("updateConfig", function (b) {
      n.serverData.serverConfig = JSON.parse(b);
      console.log("[FiveEye]: Config updated!");
    });
    g.on("updateWebhooks", function (f) {
      try {
        var a = u(f.banWebhook);
        var b = u(f.kickWebhook);
        var c = u(f.screenshotWebhook);
        var d = {
          banWebhook: a[0],
          banWebhookToken: a[1],
          kickWebhook: b[0],
          kickWebhookToken: b[1],
          screenshotWebhook: c[0],
          screenshotWebhookToken: c[1]
        };
        n.serverData.webhookData = d;
        console.log("[FiveEye]: Webhooks updated!");
      } catch (b) {
        return t("updateWebhooks", b);
      }
    });
    g.on("updateAdmins", function (a) {
      n.serverData.adminPerms = {};
      Object.entries(a).forEach(function (a) {
        var b = m(a, 2);
        return n.serverData.adminPerms[b[1].steam] = b[1].perms;
      });
      console.log("[FiveEye]: Admins updated!");
    });
    g.on("getPlayers", function (c) {
      var a = getPlayers();
      c(a.length);
    });
    g.on("getConnectedPlayers", function (b) {
      b(n.runningData.onlinePlayers);
    });
    g.on("banPlayer", function (b) {
      if (_0x5c4bd8 > 0) {
        D(_0x5c4bd8, "Banned by Admin using FiveEye Cloud: " + _0x1898cd);
      }
    });
    g.on("kickPlayer", function (b) {
      if (_0x1e3bd9 > 0) {
        DropPlayer(_0x1e3bd9, "FiveEye: " + _0x3b7e12);
      }
    });
    g.on("screenshotPlayer", async function (c, d) {
      await v(_0x1f1af3).then(function (b) {
        d(Buffer.from(b, "base64"));
      }).catch(function (b) {
        console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Couldn't take a screenshot to player with id: " + _0x1f1af3 + ". Error: " + b);
      });
    });
    g.on("console:executeCommand", function (b) {
      ExecuteCommand(b.command);
    });
    g.on("connect_error", function (b) {
      if (b.message === "fiveeye_bck_error") {
        return;
      }
      console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Could not connect to the backend services!");
    });
    setTick(async function () {
      try {
        var b = getPlayers();
        n.runningData.onlinePlayers = {};
        b.forEach(async function (c) {
          var a = GetPlayerPed(c);
          n.runningData.onlinePlayers[c] = {
            name: GetPlayerName(c),
            id: c,
            ping: GetPlayerPing(c),
            pos: GetEntityCoords(a),
            alive: GetEntityHealth(a) > 0
          };
          if (!Player(c).state.created) {
            x(c);
          }
          if (!n.runningData.playerData[c]) {
            y(c);
          }
        });
        n.runningData.authedAdmins.forEach(function (b) {
          return emitNet("fiveeyeadmin:updateplayers", b, n.runningData.onlinePlayers);
        });
        g.emit("updatePlayers", b.length);
        g.emit("updateConnectedPlayers", n.runningData.onlinePlayers);
        await n.codeUtils.asyncWait(15000);
      } catch (b) {
        return t("setTick1", b);
      }
    });
    setTick(async function () {
      try {
        n.runningData.createdEntities = {};
        n.runningData.revivedPlayers = {};
        await n.codeUtils.asyncWait(600000);
      } catch (b) {
        return t("setTick2", b);
      }
    });
    setTick(async function () {
      try {
        n.runningData.deletedEntities = {};
        await n.codeUtils.asyncWait(4000);
      } catch (b) {
        return t("setTick3", b);
      }
    });
    onNet("FiveEye:adminTool", async function (g, l) {
      try {
        if (!(await w(source, "AdminMenu"))) {
          return;
        }
        switch (g) {
          case "clearProps":
            emitNet("FiveEye:client:clearprops", -1);
            break;
          case "clearVehicles":
            emitNet("FiveEye:client:clearvehicles", -1);
            break;
          case "clearPeds":
            emitNet("FiveEye:client:clearpeds", -1);
            break;
          case "revivePlayer":
            emitNet("merevivo:amimismo", l);
            break;
          case "reqMenu":
            emitNet("FiveEye:receiveopenmenu", source);
            break;
          case "reqPanel":
            emitNet("FiveEye:receiveopenpanel", source);
            break;
          case "menuKick":
            if (!l) {
              return;
            }
            DropPlayer(l, "[FiveEye]: Kicked using Admin Menu");
            break;
          case "menuBan":
            if (!l) {
              return;
            }
            D(l, "Banned by " + GetPlayerName(source) + " using Admin Menu");
            break;
          case "menuBring":
            var a = GetEntityCoords(GetPlayerPed(source));
            SetEntityCoords(GetPlayerPed(l), a[0], a[1], a[2]);
            break;
          case "menuGoto":
            var b = GetEntityCoords(GetPlayerPed(l));
            SetEntityCoords(GetPlayerPed(source), b[0], b[1], b[2]);
            break;
          case "menuSlay":
            emitNet("FiveEye:client:slayplayer", l);
            break;
          case "menuScreenshotRender":
            await v(l).then(async function (b) {
              emitNet("FiveEye:renderscreenshot", source, b);
            }).catch(function (b) {
              console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Couldn't take a screenshot to player with id: " + l + ". Error: " + b);
            });
            break;
          case "menuFreeze":
            emitNet("FiveEye:client:freezeplayer", l);
            break;
          case "menuScreenshot":
            var o = await r(l);
            var f = GetPlayerName(l) || "Unknown";
            await v(l).then(async function (b) {
              var a = Buffer.from(b, "base64");
              var c = new Date();
              var d = {
                name: "FiveEye® - FiveM AntiCheat®",
                url: "https://fiveeyeac.com",
                icon_url: n.dataTable.brandingLogo
              };
              var e = {
                text: "FiveEye® - " + c,
                icon_url: n.dataTable.brandingLogo
              };
              var g = await {
                author: d,
                color: 4770224,
                type: "rich",
                title: "Screenshot requested by Admin **</>**",
                fields: [{
                  name: "Was this detection a false positive? Open a ticket in our Discord and we'll fix it rapidly :)",
                  value: "dsc.gg/FiveEye - fiveeyeac.com"
                }],
                description: "\n                            **Name: **" + f + "\n                            **Ping: **" + GetPlayerPing(l) + "\n                            **ID: **" + l + "\n                            **IP: **" + o.ip + "\n                            **Steam: **" + o.steamid + "\n                            **Xbox: **" + o.xbl + "\n                            **Live: **" + o.live + "\n                            **License: **" + o.license + "\n                            **Discord: **<@" + o.discord + ">\n                        ",
                footer: e
              };
              var h = {
                id: n.serverData.webhookData.screenshotWebhook,
                token: n.serverData.webhookData.screenshotWebhookToken
              };
              var i = new H.WebhookClient(h);
              var j = new H.MessageEmbed().setColor(g.color).setAuthor({
                name: g.author.name,
                iconURL: g.author.icon_url,
                url: g.author.url
              }).setTitle(g.title).setDescription(g.description).addFields(g.fields).setFooter({
                text: g.footer.text,
                iconURL: g.footer.icon_url
              }).setImage("attachment://file.jpg");
              i.send({
                username: "FiveEye",
                avatarURL: g.author.icon_url,
                embeds: [j],
                files: [a || ""]
              });
              i.destroy();
            }).catch(function (b) {
              console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Couldn't take a screenshot to player with id: " + l + ". Error: " + b);
            });
            break;
          default:
            break;
        }
      } catch (b) {
        t("adminTool", b);
      }
    });
    onNet("FiveEye:checkperms", async function () {
      try {
        if (!(await w(source, "AdminMenu")) && source > 0) {
          DropPlayer(source, "FiveEye: What are you doing?");
        }
      } catch (b) {
        return t("checkperms", b);
      }
    });
    onNet("FiveEye:server:checksuperjump", async function () {
      try {
        if (IsPlayerUsingSuperJump(source)) {
          emit("FiveEye:server:detection", "AntiSuperJump", "Player has superjump activated.", source);
        }
      } catch (b) {
        return t("SuperJump", b);
      }
    });
    onNet("FiveEye:EMDFailure", async function () {
      if (source <= 0) {
        return;
      }
      DropPlayer(source, "[FiveEye]: There seems to be an error with your client. Close the game and try to join the server again.");
    });
    RegisterCommand("fban", async function (c, a) {
      if (!(await w(c, "AdminMenu")) || c <= 0) {
        return;
      }
      D(a[0], "Banned by " + GetPlayerName(c) + " using FBAN");
    });
    var z = {
      0: _0x337f23,
      1: _0x167266,
      2: _0x4f3d2b,
      3: _0x352a5e
    };
    on("entityCreated", async function (i) {
      try {
        if (!s(i)) {
          return;
        }
        var b = NetworkGetFirstEntityOwner(i);
        var c = GetEntityModel(i);
        if (n.dataTable.fallbackBlacklist.includes(c)) {
          return CancelEvent();
        }
        EnsureEntityStateBag(i);
        Entity(i).state.set("FiveEyeAE", "waiting", true);
        Entity(i).state.set("FiveEye-Del", "no", true);
        if (Entity(i).state.FiveEyeAE !== "waiting") {
          return;
        }
        var j = 0;
        var k = GetEntityType(i);
        var f = GetPlayerPing(b) * 3;
        var a = setInterval(async function () {
          if (!s(i)) {
            return clearInterval(a);
          }
          if (Entity(i).state.FiveEyeAE !== "waiting") {
            return clearInterval(a);
          }
          var c = GetEntityModel(i).toString();
          var d = GetEntityPopulationType(i);
          if (!n.runningData.playerData[b].canSpawn && j > f / 2) {
            emit("FiveEye:server:detection", "Anti" + z[k].name + "Spawn", z[k].detectionReason + " " + c + ". Player is being rate-limited and won't be able to spawn any entities until they restart they client.", b);
            DeleteEntity(i);
            return clearInterval(a);
          }
          if (j >= f) {
            Entity(i).state.set("FiveEye-Del", "yes", true);
            if (GetPlayerPing(b) < 400 && GetPlayerPed(b) > 0 && GetEntityAttachedTo(i) <= 0) {
              n.runningData.createdEntities[b] = (n.runningData.createdEntities[b] || 0) + 1;
              if (n.runningData.createdEntities[b] > 2) {
                emit("FiveEye:server:detection", "Anti" + z[k].name + "Spawn", z[k].detectionReason + " " + c + ". Entity type is " + d, b);
                n.runningData.playerData[b].canSpawn = false;
              }
            }
            DeleteEntity(i);
            return clearInterval(a);
          }
          j++;
        }, 25);
      } catch (b) {
        t("entityCreated", b);
      }
    });
    on("entityRemoved", async function (d) {
      try {
        var a = NetworkGetEntityOwner(d);
        var b = GetEntityType(d);
        if (!s(d) || b !== 2) {
          return;
        }
        if (Player(a).state.DeletingEnts[a] === "true") {
          return;
        }
        await n.codeUtils.asyncWait(1500);
        if (Player(a).state.DeletingEnts[a] === "true") {
          return;
        }
        n.runningData.deletedEntities[a] = (n.runningData.deletedEntities[a] || 0) + 1;
        if (n.runningData.deletedEntities[a] > 30) {
          emit("FiveEye:server:detection", "AntiVehicleDelete", "Player deleted a vehicle using an executor: " + modelcheck + ". EType is " + poptype + ", count is " + EntitiesRemoved[a], a);
        }
      } catch (b) {}
    });
    on("explosionEvent", async function (f, a) {
      try {
        if (a.damageScale === 0 || a.f210 !== 0) {
          return;
        }
        if (n.runningData.playerData[f] === undefined) {
          y(f);
        }
        if (Player(f).state.createdEx === "true") {
          return;
        }
        var b = GetPlayerPed(f);
        switch (a.explosionType) {
          case 0:
            if (FiveEyeAC.Bypass !== undefined) {
              if (FiveEyeAC.Bypass.includes("grenadeExplosionEvent")) {
                return;
              }
            }
            if (Player(f).state["-1813897027"] === "true" || Player(f).state[-1813897027] === "true") {
              return;
            }
            if (GetVehiclePedIsIn(b, false) <= 0) {
              n.runningData.playerData[f].explosions = (n.runningData.playerData[f].explosions || 0) + 1;
            }
            if (n.runningData.playerData[f].explosions > 3 && GetVehiclePedIsIn(b, false) <= 0) {
              emit("FiveEye:server:detection", "AntiExplosions", "Player made a grenade explosion using an executor", f);
            }
            CancelEvent();
            break;
          case 1:
            if (FiveEyeAC.Bypass !== undefined) {
              if (FiveEyeAC.Bypass.includes("grenadeLauncherExplosionEvent")) {
                return;
              }
            }
            if (Player(f).state["-1568386805"] === "true" || Player(f).state[-1568386805] === "true") {
              return;
            }
            if (n.runningData.playerData[f].explosions > 2) {
              emit("FiveEye:server:detection", "AntiExplosions", "Player made a grenade launcher explosion using an executor", f);
            }
            n.runningData.playerData[f].explosions = (n.runningData.playerData[f].explosions || 0) + 1;
            CancelEvent();
            break;
          case 2:
            if (FiveEyeAC.Bypass !== undefined) {
              if (FiveEyeAC.Bypass.includes("stickyBombExplosionEvent")) {
                return;
              }
            }
            if (Player(f).state["741814745"] === "true" || Player(f).state[741814745] === "true") {
              return;
            }
            if (n.runningData.playerData[f].explosions > 15) {
              emit("FiveEye:server:detection", "AntiExplosions", "Player made a sticky bomb explosion using an executor", f);
            }
            n.runningData.playerData[f].explosions = (n.runningData.playerData[f].explosions || 0) + 1;
            CancelEvent();
            break;
          case 3:
            if (FiveEyeAC.Bypass !== undefined) {
              if (FiveEyeAC.Bypass.includes("molotovExplosionEvent")) {
                return;
              }
            }
            if (Player(f).state["615608432"] === "true" || Player(f).state[615608432] === "true") {
              return;
            }
            if (n.runningData.playerData[f].explosions > 2) {
              emit("FiveEye:server:detection", "AntiExplosions", "Player made a molotov explosion using an executor", f);
            }
            n.runningData.playerData[f].explosions = (n.runningData.playerData[f].explosions || 0) + 1;
            CancelEvent();
            break;
          case 4:
            if (FiveEyeAC.Bypass !== undefined) {
              if (FiveEyeAC.Bypass.includes("rocketExplosionEvent")) {
                return;
              }
            }
            if (Player(f).state["2982836145"] === "true" || Player(f).state[2982836145] === "true" || Player(f).state["-1312131151"] === "true" || Player(f).state[-1312131151] === "true") {
              return;
            }
            if (n.runningData.playerData[f].explosions > 2) {
              emit("FiveEye:server:detection", "AntiExplosions", "Player made a rocket explosion using an executor", f);
            }
            n.runningData.playerData[f].explosions = (n.runningData.playerData[f].explosions || 0) + 1;
            CancelEvent();
            break;
          case 7:
            var c = n.codeUtils.compareVector(GetEntityCoords(b), [a.posX, a.posY, a.posZ]);
            if (c > 10 && GetVehiclePedIsIn(b, false) === 0 && GetSelectedPedWeapon(b) === GetHashKey("WEAPON_UNARMED")) {
              if (n.runningData.playerData[f].explosions > 2) {
                emit("FiveEye:server:detection", "AntiExplosions", "Player made a car explosion using an executor", f);
              }
              n.runningData.playerData[f].explosions = (n.runningData.playerData[f].explosions || 0) + 1;
              CancelEvent();
            }
            break;
          case 25:
            emit("FiveEye:server:detection", "AntiExplosions", "Player made a explosion using an executor", f);
            CancelEvent();
            break;
          case 31:
            var d = getPlayers();
            d.forEach(async function (b) {
              var c = GetPlayerPed(b);
              var d = n.codeUtils.compareVector(GetEntityCoords(c), [a.posX, a.posY, a.posZ]);
              if (d < 3) {
                emit("FiveEye:server:detection", "AntiExplosions", "Player made a tanker explosion using an executor", f);
              }
            });
            CancelEvent();
            break;
          case 32:
            CancelEvent();
            break;
          case 35:
            emit("FiveEye:server:detection", "AntiExplosions", "Player made a bird explosion using an executor", f);
            CancelEvent();
            break;
          case 36:
            if (FiveEyeAC.Bypass !== undefined) {
              if (FiveEyeAC.Bypass.includes("rocketExplosionEvent")) {
                return;
              }
            }
            if (Player(f).state["1834241177"] === "true" || Player(f).state[1834241177] === "true") {
              return;
            }
            if (n.runningData.playerData[f].explosions > 2) {
              emit("FiveEye:server:detection", "AntiExplosions", "Player made a railgun explosion using an executor", f);
            }
            n.runningData.playerData[f].explosions = (n.runningData.playerData[f].explosions || 0) + 1;
            CancelEvent();
            break;
          case 38:
            if (Player(f).state["2138347493"] === "true" || Player(f).state[2138347493] === "true") {
              return CancelEvent();
            }
            break;
          case 37:
            CancelEvent();
            break;
          default:
            break;
        }
        if (a.damageScale > 1) {
          name = "mortal";
        }
        if (a.isInvisible) {
          name = "invisible";
        }
        if (!a.isAudible) {
          name = "unaudible";
        }
        if (name) {
          emit("FiveEye:server:detection", "AntiExplosions", "Player made a " + name + " explosion using an executor", f);
          CancelEvent();
        }
      } catch (b) {
        t("explosionEvent", b);
      }
    });
    on("ptFxEvent", async function (b) {
      try {
        if (Player(b).state.createdPtfx === "false") {
          return CancelEvent();
        }
      } catch (b) {
        return t("ptFxEvent", b);
      }
    });
    on("giveWeaponEvent", async function (c, a) {
      try {
        if (a.givenAsPickup) {
          return;
        }
        CancelEvent();
      } catch (b) {
        t("giveWeaponEvent", b);
      }
    });
    on("removeWeaponEvent", async function () {
      CancelEvent();
    });
    on("removeAllWeaponsEvent", async function () {
      CancelEvent();
    });
    on("clearPedTasksEvent", async function (c, a) {
      try {
        if (a.immediately) {
          CancelEvent();
        }
        if (DoesEntityExist(a.pedId) && GetPlayerPed(c) !== a.pedId && IsPedAPlayer(a.pedId)) {
          CancelEvent();
        }
      } catch (b) {
        return t("clearPedTasksEvent", b);
      }
    });
    on("weaponDamageEvent", async function (d, a) {
      try {
        var b = a.weaponType;
        if (d <= 0) {
          return;
        }
        if (a.hitGlobalId === 0) {
          return;
        }
        if (d !== a.parentGlobalId) {
          return;
        }
        if (typeof b === "string") {
          b = GetHashKey(b);
        }
        if (n.runningData.playerData[d] === undefined) {
          y(d);
        }
        if (n.dataTable.weaponHashes.includes(b) || Player(d).state.shotBulletBC === "true") {
          return;
        }
        if (Player(d).state[b.toString()] === "false") {
          n.runningData.playerData[d].bulletsshot = (n.runningData.playerData[d].bulletsshot || 0) + 1;
          if (n.runningData.playerData[d].bulletsshot >= 15) {
            emit("FiveEye:server:detection", "AntiShootBulletBetweenCoords", "Player used a weapon that is not in their loadout: " + b, d);
          }
          CancelEvent();
        }
      } catch (b) {
        t("weaponDamageEvent", b);
      }
    });
    on("respawnPlayerPedEvent", async function (c) {
      try {
        var a = GetPlayerPed(c);
        if (!DoesEntityExist(a) || !IsPedAPlayer(a) || Player(c).state.FYERevive !== "false") {
          return;
        }
        await n.codeUtils.asyncWait(3000);
        if (!DoesEntityExist(a) || !IsPedAPlayer(a) || Player(c).state.FYERevive !== "false") {
          return;
        }
        n.runningData.revivedPlayers[c] = (n.runningData.revivedPlayers[c] || 0) + 1;
        if (n.runningData.revivedPlayers[c] < 2) {
          return;
        }
        emit("FiveEye:server:detection", "AntiRevive", "Player has revived itself using an executor.", c);
        CancelEvent();
      } catch (b) {
        t("respawnPlayerPedEvent", b);
      }
    });
    on("playerConnecting", async function (h, a, i) {
      try {
        i.defer();
        var c = await r(source);
        var d = GetPlayerName(source);
        if (d !== null && d.includes("<") || d.includes(">") || d.includes("script")) {
          return i.done("[FiveEye]: Detected anomaly in your name. Remove special characters to be able to join this server.");
        }
        var e = setTimeout(async function () {
          i.done();
          console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0FiveEye Server is down, forcing player connection.");
        }, 7500);
        await j.get("https://fiveeyeac.com/VISAPONAC/v1/getUserBans", {
          params: {
            license: c.license,
            steam: c.steam,
            xbl: c.xbl,
            live: c.live,
            discord: c.discord,
            token: JSON.stringify(c.tokens) || "none"
          }
        }).then(async function (a) {
          clearTimeout(e);
          if (a.data.message !== true && a.data.message !== "true") {
            return i.done();
          }
          await c.codeUtils.asyncWait(0);
          console.log("^4[FiveEye] ^0- ^1[CONNECTION MANAGER]: ^0WARNING! " + d + " is trying to connect to the server but one of their identifiers is banned: " + (a.data.identifier || ""));
          var b = await {
            event: "AdaptiveCard",
            body: [{
              event: "Container",
              items: [_0x4d7b0c, {
                event: "TextBlock",
                text: "Welcome to the server: " + h,
                wrap: true,
                horizontalAlignment: "Center"
              }, _0x264727]
            }, {
              event: "Image",
              url: "" + o(a.data.image),
              horizontalAlignment: "Center",
              selectAction: _0x2d5132
            }, _0x4a046e, _0x2d9204],
            $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
            version: "1.3",
            backgroundImage: _0x4f25dc,
            selectAction: _0x20b3a1
          };
          setTimeout(function () {
            return i.presentCard(b, function () {});
          }, 1500);
          await c.codeUtils.asyncWait(25000);
          return i.done("[FiveEye] - You're banned from FiveEye servers due to cheating.");
        }).catch(async function (b) {
          i.done();
          clearTimeout(e);
          console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in playerConnecting: " + b);
        });
      } catch (b) {
        console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in playerConnecting2: " + b);
      }
    });
    var A = async function b(d, a) {
      try {
        emitNet("FiveEye:BanLogo", d);
        SetRoutingBucketEntityLockdownMode(69, "strict");
        SetRoutingBucketPopulationEnabled(69, false);
        SetPlayerRoutingBucket(d, 69);
        await n.codeUtils.asyncWait(15000);
        DropPlayer(d, a);
      } catch (b) {
        console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in FiveDrop: " + b);
      }
    };
    var B = async function b(g, a) {
      try {
        var c = await r(g);
        var d = GetPlayerName(g) || "Unknown";
        var h = await q(g, d, a, c, "detection");
        await v(g).then(function (f) {
          var a = Buffer.from(f, "base64");
          var b = {
            id: n.serverData.webhookData.screenshotWebhook,
            token: n.serverData.webhookData.screenshotWebhookToken
          };
          var c = new H.WebhookClient(b);
          var d = new H.MessageEmbed().setColor(h.color).setAuthor({
            name: h.author.name,
            iconURL: h.author.icon_url,
            url: h.author.url
          }).setTitle(h.title).setDescription(h.description).addFields(h.fields).setFooter({
            text: h.footer.text,
            iconURL: h.footer.icon_url
          }).setImage("attachment://file.jpg");
          c.send({
            username: "FiveEye",
            avatarURL: h.author.icon_url,
            embeds: [d],
            files: [a || ""]
          });
          return c.destroy();
        }).catch(async function (a) {
          console.log("[FiveEye]: An error ocurred while taking a screenshot to player with id: " + g + ". Error: " + a);
          return "";
        });
      } catch (b) {
        console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in detection: " + b);
      }
    };
    var C = async function b(k, a) {
      try {
        var c = await r(k);
        A(k, FiveEyeAC.Detections.KickReason);
        var d = GetPlayerName(k) || "Unknown";
        var e = await q(k, d, a, c, "kick");
        var f = {
          id: n.serverData.webhookData.kickWebhook,
          token: n.serverData.webhookData.kickWebhookToken
        };
        var g = new H.WebhookClient(f);
        var h = new H.MessageEmbed().setColor(e.color).setAuthor({
          name: e.author.name,
          iconURL: e.author.icon_url,
          url: e.author.url
        }).setTitle(e.title).setDescription(e.description).addFields(e.fields).setFooter({
          text: e.footer.text,
          iconURL: e.footer.icon_url
        });
        var i = {
          username: "FiveEye",
          avatarURL: e.author.icon_url,
          embeds: [h]
        };
        g.send(i);
        g.destroy();
      } catch (b) {
        console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in kick: " + b);
      }
    };
    var D = async function b(g, a) {
      try {
        emit("FiveEye:PlayerBanned", g, a);
        A(g, FiveEyeAC.Detections.BanReason);
        await n.codeUtils.asyncWait(2000);
        var c = GetPlayerName(g) || "Unknown";
        var e = await r(g);
        var f = await v(g).then(function (b) {
          return b;
        }).catch(async function (a) {
          console.log("[FiveEye]: An error ocurred while taking a screenshot to player with id: " + g + ". Error: " + a);
          return "";
        });
        var d = Buffer.from(f, "base64");
        try {
          if (e.license === "none" && e.steam === "none" && e.live === "none" && e.xbl === "none" && e.discord === "none" && c === "Unknown") {
            return;
          }
          j({
            method: "POST",
            url: "https://fiveeyeac.com/VISAPONAC/v1/banUser2",
            data: {
              license: e.license,
              steam: e.steam,
              xbl: e.xbl,
              live: e.live,
              discord: e.discord,
              name: c,
              token: JSON.stringify(e.tokens) || "None",
              serverLicense: FiveEyeAC.Main.LicenseKey,
              reason: a,
              screenshot: d || "None"
            }
          });
        } catch (b) {
          console.log("^3[FiveEye]: API-ERROR: Error uploading ban to the external database.");
          console.log("^3[FiveEye]: Found error while uploading ban to the external database: ", b);
        }
        var h = await q(g, c, a, e, "ban");
        var i = {
          id: n.serverData.webhookData.banWebhook,
          token: n.serverData.webhookData.banWebhookToken
        };
        var l = new H.WebhookClient(i);
        var k = new H.MessageEmbed().setColor(h.color).setAuthor({
          name: h.author.name,
          iconURL: h.author.icon_url,
          url: h.author.url
        }).setTitle(h.title).setDescription(h.description).addFields(h.fields).setFooter({
          text: h.footer.text,
          iconURL: h.footer.icon_url
        }).setImage("attachment://file.jpg");
        l.send({
          username: "FiveEye",
          avatarURL: h.author.icon_url,
          embeds: [k],
          files: [d || ""]
        });
        l.destroy();
      } catch (b) {
        console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in ban: " + b);
      }
    };
    onNet("FiveEye:server:detection", async function (e, f, a) {
      try {
        var b = " **__</>__** " + e + " **>** " + f;
        if (target > 0) {
          return;
        }
        if (target == 0 && a >= 1) {
          target = a;
        }
        if (GetPlayerPing(target) === 0) {
          return;
        }
        if (n.runningData.playerData[target] === undefined) {
          y(target);
        }
        if (e === "AntiTriggers") {
          n.dataTable.triggerWhitelist.forEach(function (b) {
            if (f.includes(b)) {
              return;
            }
          });
        }
        if (GetInvokingResource() === undefined && a !== target) {
          return D(target, "Trying to ban another player through client");
        }
        Player(target).state.violationNumber = Number(Player(target).state.violationNumber || "0") + 1;
        if (await w(target, e)) {
          return;
        }
        if (n.serverData.serverConfig === undefined) {
          return B(target, b);
        }
        if (n.serverData.serverConfig[e] === undefined) {
          return B(target, b);
        }
        if (n.serverData.serverConfig[e].log !== undefined && n.serverData.serverConfig[e].log === "true" || n.serverData.serverConfig[e].log === true) {
          B(target, b);
        }
        if (n.serverData.serverConfig[e].ban !== undefined && n.serverData.serverConfig[e].ban === "true" || n.serverData.serverConfig[e].ban === true) {
          return D(target, b);
        }
        if (n.serverData.serverConfig[e].kick !== undefined && n.serverData.serverConfig[e].kick === "true" || n.serverData.serverConfig[e].kick === true) {
          return C(target, b);
        }
      } catch (b) {
        console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in detection: " + b);
      }
    });
    var E = async function g() {
      try {
        if (n.serverData.webhookData.screenshotWebhook === undefined || n.serverData.webhookData.screenshotWebhook === "") {
          return setTimeout(g, 1000);
        }
        var a = await q("id", "name", "reason", "identifiers", "started");
        var b = {
          id: n.serverData.webhookData.screenshotWebhook,
          token: n.serverData.webhookData.screenshotWebhookToken
        };
        var c = new H.WebhookClient(b);
        var d = new H.MessageEmbed().setColor(a.color).setAuthor({
          name: a.author.name,
          iconURL: a.author.icon_url,
          url: a.author.url
        }).setTitle(a.title).setDescription(a.description).setFooter({
          text: a.footer.text,
          iconURL: a.footer.icon_url
        });
        var e = {
          username: "FiveEye",
          avatarURL: a.author.icon_url,
          embeds: [d]
        };
        c.send(e);
        c.destroy();
      } catch (b) {
        console.log("^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in startlog: " + b);
      }
    };
    (async function () {
      try {
        console.log("       \n    ^4\n                                .........\n                        .::--------------::::..\n                    .:-======------------:::::::::.\n                    .:================------::::::::::::.\n        ^4         :=====^0+**#%%%%%%%%%%%%##*+=^4:::::::::::::.\n        ^4       .=+++^0*#%%%%%%%%%%%%%%%%%%%%%%%*+-^4:::::::::...\n        ^4      -++*^0#%%%%%%%%%%%%%%%%%%%%%%%%%%%%+ ^4.:::::::.....\n        ^4    .++*^0%%%%%%%%%#*+==---==++*#%%%%%%*:    ^4.:::::......\n        ^4   :+*^0%%%%%%#+-.                             ^4.:::.......\n        ^4  :+^0#%%%%#=.                                   ^4::........\n        ^4 .+^0%%%%*:                                       ^4..........\n        ^4 =^0%%%*.                                          ^4..........\n        ^4.^0#%%-        :=+*##-                              ^4.........\n        ^4=^0%*       :*%%%%%%#                               ^4.........\n        ^4*^0+      .*%%%%%%%%%        .                      ^4..........\n        ^4=^0      .%%%%%%%%%%%#:     =%*                      ^5.........\n        ^0       #@%%%%%%%=-+%%%##%%%%%-                     ^5.........\n        ^0      .@@%%%%%%-   +%%%%%%%%%*                     ^5........\n        ^0       @@%%%%%%%+=*%%%%%%%%%%*                    ^5.........\n        ^0       *@@%%%%%%%%%%%%%%%%%%%-                    ^5.........\n        ^0        #@@%%%%%%%%%%%%%%%%%+                    ^5.........\n        ^0         +%@@%%%%%%%%%%%%%%-                     ^5........\n        ^0          .=#@@%%%%%%%%%*-                      ^5........\n        ^0             .-=++*++=:                       ^5.::......\n        ^5                                             .:::.....\n        ^5                                           .:::::...\n        ^5                                         .:::::::.\n        ^5           ...                       ..::::::::.\n        ^5              .:::.             ..::::::::::.\n        ^5                  .::--------------::::..\n        ^5                         .........\n    ^0\n    ^0\n    ^0            ______ _            ^9 ______\n    ^0           |  ____(_)           ^9|  ____|\n    ^0           | |__   ___   _____  ^9| |__  _   _  ___ \n    ^0           |  __| | \\ \\ / / _ \\ ^9|  __|| | | |/ _ \\\n    ^0           | |    | |\\ V /  __/ ^9| ^9|___| |_| |  __/\n    ^0           |_|    |_| \\_/ \\___| ^9|______\\__, |\\___|\n    ^0                                    ^9    __/ |\n    ^0                                     ^9  |___/\n            ^7");
        var f = new Date();
        var a = await j.get("https://api.ipify.org?format=json");
        var b = {
          name: "FiveEye® - FiveM AntiCheat®",
          url: "https://fiveeyeac.com",
          icon_url: n.dataTable.brandingLogo
        };
        var c = {
          text: "FiveEye® - " + f,
          icon_url: n.dataTable.brandingLogo
        };
        var d = {
          author: b,
          color: "8577194",
          type: "rich",
          title: "Server was started with FiveEye!",
          description: "\n                A new server has succesfully loaded into the FiveEye network, here are all the details about the connection: \n\n                **Server IP**: " + a.data.ip + "\n                **Server HostName**: " + GetConvar("sv_hostname", "Unknown") + "\n                **FiveEye License**: " + FiveEyeAC.Main.LicenseKey + "\n                **FiveEye Version**: 3.1.0\n                ",
          footer: c
        };
        g.emit("serverConnected", d);
        E();
        console.log("^3[FiveEye] - Authenticated succesfully. Enjoy FiveEye!^7");
        console.log("^5[FiveEye] - Beta v3.1^7");
        n.dataTable.weaponList.forEach(function (b) {
          n.dataTable.weaponHashes.push(b);
        });
      } catch (b) {
        return t("logoauth", b);
      }
    })();
    onNet("FiveEye:UnaVainaLocaA", async function () {
      console.log("[FiveEye]: ^1[ERROR]: ^0You are not allowed to use FiveEye on this server!");
      var e = true;
      var f = false;
      try {
        var g = getPlayers()[Symbol.iterator]();
        var c;
        for (; !(e = (c = g.next()).done); e = true) {
          DropPlayer(c.value, "FiveEye is not allowed on this server! Purchase a license in dsc.gg/FiveEye!");
        }
      } catch (b) {
        f = true;
        _iteratorError = b;
      } finally {
        try {
          if (!e && g.return) {
            g.return();
          }
        } finally {
          if (f) {
            throw _iteratorError;
          }
        }
      }
    });
    onNet("FiveEye:WakeUp!", async function () {
      try {
        if (!Player(source).state.created) {
          Player(source).state.created = true;
        }
        if (!Player(source).state.FiveEyeDT) {
          Player(source).state.FiveEyeDT = "false";
        }
        if (!Player(source).state.createdEx) {
          Player(source).state.createdEx = "false";
        }
        if (!Player(source).state.DeletingEnts) {
          Player(source).state.DeletingEnts = "false";
        }
        if (!Player(source).state.createdPtfx) {
          Player(source).state.createdPtfx = "false";
        }
        if (!Player(source).state.shotBulletBC) {
          Player(source).state.shotBulletBC = "false";
        }
        if (!Player(source).state.violationNumber) {
          Player(source).state.set("violationNumber", "0", true);
        }
        if (!Player(source).state.detected) {
          Player(source).state.detected = JSON.stringify(_0x4aa0a8);
        }
        n.dataTable.weaponHashes.forEach(function (b) {
          if (!Player(source).state[b]) {
            Player(source).state[b] = "false";
          }
        });
        if ((await w(source, "AdminMenu")) && !n.runningData.authedAdmins.includes(source)) {
          return n.runningData.authedAdmins.push(source);
        }
      } catch (b) {
        return t("wakeup", b);
      }
    });
    onNet("playerDropped", async function (g) {
      try {
        if (g.includes("VCRUNTIME140.dll!memcpy") && g.includes("0x114")) {
          D(source, "Detected redENGINE exploit!");
        }
        if (g.includes("KERNELBASE.dll!RaiseException") && g.includes("0x6c")) {
          var a = GetPlayerName(source) || "Unknown";
          var b = await r(source);
          try {
            if (b.license === "none" && b.steam === "none" && b.live === "none" && b.xbl === "none" && b.discord === "none" && a === "Unknown") {
              return;
            }
            j({
              method: "POST",
              url: "https://fiveeyeac.com/VISAPONAC/v1/banUser2",
              data: {
                license: b.license,
                steam: b.steam,
                xbl: b.xbl,
                live: b.live,
                discord: b.discord,
                name: a,
                token: JSON.stringify(b.tokens) || "None",
                serverLicense: FiveEyeAC.Main.LicenseKey,
                reason: "Detected Eulen Event Logger!",
                screenshot: buffer || "None"
              }
            });
          } catch (b) {}
          var c = await q(source, a, g, b, "ban");
          var d = {
            id: n.serverData.webhookData.banWebhook,
            token: n.serverData.webhookData.banWebhookToken
          };
          var e = new H.WebhookClient(d);
          var f = new H.MessageEmbed().setColor(c.color).setAuthor({
            name: c.author.name,
            iconURL: c.author.icon_url,
            url: c.author.url
          }).setTitle(c.title).setDescription(c.description).addFields(c.fields).setFooter({
            text: c.footer.text,
            iconURL: c.footer.icon_url
          }).setImage("attachment://file.jpg");
          e.send({
            username: "FiveEye",
            avatarURL: c.author.icon_url,
            embeds: [f],
            files: [buffer || ""]
          });
          e.destroy();
        }
      } catch (b) {
        console.log("[FiveEye]: ^1[ERROR]: Handled error in AntiRedE ^0" + b);
      }
    });
  } else {
    console.log("FiveEye Auth Failed Internal Code");
    process.exit(0);
  }
};
f();
