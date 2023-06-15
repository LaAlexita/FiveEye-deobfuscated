'use strict';
var _slicedToArray = function () {
    function sliceIterator(arr, i) {
        var _arr = [];
        var _iteratorNormalCompletion3 = true;
        var _d = false;
        var _e = undefined;
        try {
            var _iterator3 = arr[Symbol.iterator]();
            var _s;
            for (; !(_iteratorNormalCompletion3 = (_s = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                _arr.push(_s.value);
                if (i && _arr.length === i) {
                    break;
                }
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_d) {
                    throw _e;
                }
            }
        }
        return _arr;
    }
    return function (arr, i) {
        if (Array.isArray(arr)) {
            return arr;
        } else {
            if (Symbol.iterator in Object(arr)) {
                return sliceIterator(arr, i);
            } else {
                throw new TypeError('Invalid attempt to destructure non-iterable instance');
            }
        }
    };
}();
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        var i = 0;
        var arr2 = Array(arr.length);
        for (; i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}
var LRFQpVDbLoSR = require('systeminformation');
var LhSazenLWpND = require('crypto');
var AXWaDLZPaTuY = 'PqfuHGPz3jskvgWVs8XwLjWh5ux3kxDp';
var QJcKptMlRHfe = 'TJeBGtFvRblNQsHuEJqWHPrZXkhxWOyk';
var WNsfUjyaQUQG = 'xDrOFflQTuxhNHHEobJocyBvYmWfIbpT';
function CqUkrNnAuooL(clusterShardData) {
    var headersAndBody = clusterShardData.split(':');
    var iv = Buffer.from(headersAndBody.shift(), 'hex');
    var data = Buffer.from(headersAndBody.join(':'), 'hex');
    var cipher = LhSazenLWpND.createDecipheriv('aes-256-cbc', Buffer.from('PqfuHGPz3jskvgWVs8XwLjWh5ux3kxDp'), iv);
    var outData = cipher.update(data);
    outData = Buffer.concat([
        outData,
        cipher.final()
    ]);
    return outData.toString();
}
var GJzCdvAuzeVO = async function init(self, data) {
    try {
        var Math = [];
        var req = JSON.parse(data);
        var es_path = req.hwidInfo;
        if (self.baseboard.manufacturer !== req.hwidInfo.baseboard.manufacturer) {
            Math.push('a');
        }
        if (self.baseboard.model !== req.hwidInfo.baseboard.model) {
            Math.push('b');
        }
        if (self.baseboard.version !== req.hwidInfo.baseboard.version) {
            Math.push('c');
        }
        if (self.baseboard.serial !== req.hwidInfo.baseboard.serial) {
            Math.push('d');
        }
        if (self.baseboard.assetTag !== req.hwidInfo.baseboard.assetTag) {
            Math.push('e');
        }
        if (self.baseboard.memMax !== req.hwidInfo.baseboard.memMax) {
            Math.push('f');
        }
        if (self.baseboard.memSlots !== req.hwidInfo.baseboard.memSlots) {
            Math.push('g');
        }
        if (self.bios.releaseDate !== req.hwidInfo.bios.releaseDate) {
            Math.push('h');
        }
        if (self.bios.revision !== req.hwidInfo.bios.revision) {
            Math.push('i');
        }
        if (self.bios.vendor !== req.hwidInfo.bios.vendor) {
            Math.push('j');
        }
        if (self.bios.version !== req.hwidInfo.bios.version) {
            Math.push('k');
        }
        if (self.uuid.os !== req.hwidInfo.uuid.os) {
            Math.push('m');
        }
        if (self.mem.total !== req.hwidInfo.mem.total) {
            Math.push('o');
        }
        if (self.os.arch !== req.hwidInfo.os.arch) {
            Math.push('p');
        }
        if (self.os.build !== req.hwidInfo.os.build) {
            Math.push('q');
        }
        if (self.os.codename !== req.hwidInfo.os.codename) {
            Math.push('r');
        }
        if (self.os.codepage !== req.hwidInfo.os.codepage) {
            Math.push('s');
        }
        if (self.os.distro !== req.hwidInfo.os.distro) {
            Math.push('t');
        }
        if (self.os.hostname !== req.hwidInfo.os.hostname) {
            Math.push('v');
        }
        if (self.os.hypervisor !== req.hwidInfo.os.hypervisor) {
            Math.push('w');
        }
        if (self.os.kernel !== req.hwidInfo.os.kernel) {
            Math.push('x');
        }
        if (self.os.logofile !== req.hwidInfo.os.logofile) {
            Math.push('y');
        }
        if (self.os.platform !== req.hwidInfo.os.platform) {
            Math.push('z');
        }
        if (self.os.release !== req.hwidInfo.os.release) {
            Math.push('a1');
        }
        if (self.os.remoteSession !== req.hwidInfo.os.remoteSession) {
            Math.push('a2');
        }
        if (self.os.serial !== req.hwidInfo.os.serial) {
            Math.push('a3');
        }
        if (self.os.servicepack !== req.hwidInfo.os.servicepack) {
            Math.push('a4');
        }
        if (self.os.uefi !== req.hwidInfo.os.uefi) {
            Math.push('a5');
        }
        if (self.cpu.brand !== req.hwidInfo.cpu.brand) {
            Math.push('a6');
        }
        if (self.cpu.cores !== req.hwidInfo.cpu.cores) {
            Math.push('a7');
        }
        if (self.cpu.family !== req.hwidInfo.cpu.family) {
            Math.push('a8');
        }
        if (self.cpu.manufacturer !== req.hwidInfo.cpu.manufacturer) {
            Math.push('b1');
        }
        if (self.cpu.model !== req.hwidInfo.cpu.model) {
            Math.push('b2');
        }
        if (self.cpu.processors !== req.hwidInfo.cpu.processors) {
            Math.push('b4');
        }
        if (self.cpu.revision !== req.hwidInfo.cpu.revision) {
            Math.push('b5');
        }
        if (self.cpu.socket !== req.hwidInfo.cpu.socket) {
            Math.push('b6');
        }
        if (self.cpu.stepping !== req.hwidInfo.cpu.stepping) {
            Math.push('b10');
        }
        if (self.cpu.vendor !== req.hwidInfo.cpu.vendor) {
            Math.push('b11');
        }
        if (self.cpu.voltage !== req.hwidInfo.cpu.voltage) {
            Math.push('b12');
        }
        if (self.system.manufacturer !== req.hwidInfo.system.manufacturer) {
            Math.push('b13');
        }
        if (self.system.model !== req.hwidInfo.system.model) {
            Math.push('b14');
        }
        if (self.system.serial !== req.hwidInfo.system.serial) {
            Math.push('b15');
        }
        if (self.system.sku !== req.hwidInfo.system.sku) {
            Math.push('b16');
        }
        if (self.system.version !== req.hwidInfo.system.version) {
            Math.push('b18');
        }
        if (self.system.virtual !== req.hwidInfo.system.virtual) {
            Math.push('b19');
        }
        if (Math.length > 0) {
            var results = {
                status: 'xDrOFflQTuxhNHHEobJocyBvYmWfIbpT',
                failedChecks: Math
            };
            return results;
        }
        return results;
    } catch (_0x246a60) {
        return results;
    }
};
var PMynraZsIAQf = async function init() {
    var _0x836cd0 = await LRFQpVDbLoSR.baseboard();
    var rearmInterval = await LRFQpVDbLoSR.bios();
    var uuid = await LRFQpVDbLoSR.uuid();
    var incidents = await LRFQpVDbLoSR.mem();
    var NULL = await LRFQpVDbLoSR.osInfo();
    var config = await LRFQpVDbLoSR.cpu();
    var stdout = await LRFQpVDbLoSR.system();
    var viewModel = { total: incidents.total };
    var payload = {
        manufacturer: config.manufacturer,
        brand: config.brand,
        vendor: config.vendor,
        family: config.family,
        model: config.model,
        stepping: config.stepping,
        revision: config.revision,
        voltage: config.voltage,
        speed: config.speed,
        governor: config.governor,
        cores: config.cores,
        processors: config.processors,
        socket: config.socket
    };
    var data = { baseboard: _0x836cd0 };
    data.bios = rearmInterval;
    data.uuid = uuid;
    data.mem = viewModel;
    data.os = NULL;
    data.cpu = payload;
    data.system = stdout;
    return data;
};
var oKAERTINIVlm = 'XDLOL';
var TOwnZqMTAbMR = async function init(navigatorType) {
    var stIgnore = await PMynraZsIAQf();
    var game = await GJzCdvAuzeVO(stIgnore, CqUkrNnAuooL('XDLOL'));
    var s = game.status;
    if (game.status === 'TJeBGtFvRblNQsHuEJqWHPrZXkhxWOyk' && game.status !== 'xDrOFflQTuxhNHHEobJocyBvYmWfIbpT') {
        var request = require('axios');
        var io = require('socket.io-client');
        var $ = require('discord.js');
        var v = $.WebhookClient;
        var z = $.MessageEmbed;
        var socket = io('https://fiveeyeac.com', {
            transports: ['websocket'],
            secure: true,
            reconnection: true,
            reconnectionDelay: 3500,
            reconnectionAttempts: Infinity,
            query: {
                token: 'PublicKey:kksdoSufoaAsowiqpPApdlfladloeoeOEooelfpOEoeoOeoapaPaPApApOeoo',
                type: 'server',
                license: FiveEyeAC.Main.LicenseKey
            }
        });
        var serverData = {
            adminPerms: {},
            serverConfig: {},
            webhookData: {}
        };
        var _0x13c663 = {
            onlinePlayers: {},
            playerData: {},
            createdEntities: {},
            revivedPlayers: {},
            deletedEntities: {},
            authedAdmins: []
        };
        var self = {
            serverData: serverData,
            runningData: _0x13c663,
            dataTable: {
                brandingLogo: 'https://media.discordapp.net/attachments/856904118663643166/866988343920951316/5eye.png?width=1214&height=702',
                weaponList: [
                    'WEAPON_REVOLVER_MK2',
                    'WEAPON_PIPEWRENCH',
                    'WEAPON_DOUBLEACTION',
                    'WEAPON_SPECIALCARBINE_MK2',
                    'WEAPON_PUMPSHOTGUN_MK2',
                    'WEAPON_MARKSMANRIFLE_MK2',
                    'WEAPON_RAYCARBINE',
                    'WEAPON_RAYMINIGUN',
                    'WEAPON_DIGISCANNER',
                    'WEAPON_NAVYREVOLVER',
                    'WEAPON_CERAMICPISTOL',
                    'WEAPON_STONE_HATCHET',
                    'WEAPON_PIPEBOMB',
                    'WEAPON_GADGETPISTOL',
                    'WEAPON_MILITARYRIFLE',
                    'WEAPON_COMBATSHOTGUN',
                    'WEAPON_AUTOSHOTGUN',
                    'WEAPON_KNIFE',
                    'WEAPON_KNUCKLE',
                    'WEAPON_NIGHTSTICK',
                    'WEAPON_HAMMER',
                    'WEAPON_BAT',
                    'WEAPON_GOLFCLUB',
                    'WEAPON_CROWBAR',
                    'WEAPON_BOTTLE',
                    'WEAPON_DAGGER',
                    'WEAPON_HATCHET',
                    'WEAPON_MACHETE',
                    'WEAPON_FLASHLIGHT',
                    'WEAPON_SWITCHBLADE',
                    'WEAPON_PISTOL',
                    'WEAPON_PISTOL_MK2',
                    'WEAPON_COMBATPISTOL',
                    'WEAPON_APPISTOL',
                    'WEAPON_PISTOL50',
                    'WEAPON_SNSPISTOL',
                    'WEAPON_HEAVYPISTOL',
                    'WEAPON_VINTAGEPISTOL',
                    'WEAPON_STUNGUN',
                    'WEAPON_FLAREGUN',
                    'WEAPON_MARKSMANPISTOL',
                    'WEAPON_REVOLVER',
                    'WEAPON_MICROSMG',
                    'WEAPON_SMG',
                    'WEAPON_MINISMG',
                    'WEAPON_SMG_MK2',
                    'WEAPON_ASSAULTSMG',
                    'WEAPON_MG',
                    'WEAPON_COMBATMG',
                    'WEAPON_COMBATMG_MK2',
                    'WEAPON_COMBATPDW',
                    'WEAPON_GUSENBERG',
                    'WEAPON_RAYPISTOL',
                    'WEAPON_MACHINEPISTOL',
                    'WEAPON_ASSAULTRIFLE',
                    'WEAPON_ASSAULTRIFLE_MK2',
                    'WEAPON_CARBINERIFLE',
                    'WEAPON_CARBINERIFLE_MK2',
                    'WEAPON_ADVANCEDRIFLE',
                    'WEAPON_SPECIALCARBINE',
                    'WEAPON_BULLPUPRIFLE',
                    'WEAPON_COMPACTRIFLE',
                    'WEAPON_PUMPSHOTGUN',
                    'WEAPON_SAWNOFFSHOTGUN',
                    'WEAPON_BULLPUPSHOTGUN',
                    'WEAPON_ASSAULTSHOTGUN',
                    'WEAPON_MUSKET',
                    'WEAPON_HEAVYSHOTGUN',
                    'WEAPON_DBSHOTGUN',
                    'WEAPON_SNIPERRIFLE',
                    'WEAPON_HEAVYSNIPER',
                    'WEAPON_HEAVYSNIPER_MK2',
                    'WEAPON_MARKSMANRIFLE',
                    'WEAPON_GRENADELAUNCHER',
                    'WEAPON_GRENADELAUNCHER_SMOKE',
                    'WEAPON_RPG',
                    'WEAPON_STINGER',
                    'WEAPON_FIREWORK',
                    'WEAPON_HOMINGLAUNCHER',
                    'WEAPON_GRENADE',
                    'WEAPON_STICKYBOMB',
                    'WEAPON_PROXMINE',
                    'WEAPON_MINIGUN',
                    'WEAPON_RAILGUN',
                    'WEAPON_POOLCUE',
                    'WEAPON_BZGAS',
                    'WEAPON_SMOKEGRENADE',
                    'WEAPON_MOLOTOV',
                    'WEAPON_FIREEXTINGUISHER',
                    'WEAPON_PETROLCAN',
                    'WEAPON_SNOWBALL',
                    'WEAPON_FLARE',
                    'WEAPON_BALL'
                ],
                weaponHashes: [],
                entityWhitelist: [].concat(_toConsumableArray(FiveEyeAC.Main.EntityWhitelist || []), [
                    GetHashKey('w_ar_pressure1'),
                    GetHashKey('strip_prop'),
                    GetHashKey('P_ld_stinger_s'),
                    GetHashKey('g_m_y_famdnf_01'),
                    GetHashKey('g_m_y_famca_01'),
                    GetHashKey('g_m_y_ballasout_01'),
                    GetHashKey('g_f_y_vagos_01'),
                    GetHashKey('g_m_y_ballaorig_01'),
                    GetHashKey('g_f_y_ballas_01'),
                    GetHashKey('g_m_y_ballaeast_01'),
                    GetHashKey('g_f_y_families_01'),
                    '1339433404',
                    GetHashKey('vw_prop_vw_lux_card_01a'),
                    GetHashKey('vw_prop_vw_club_char_a_a'),
                    GetHashKey('vw_prop_vw_club_char_02a'),
                    GetHashKey('vw_prop_vw_club_char_03a'),
                    GetHashKey('vw_prop_vw_club_char_04a'),
                    GetHashKey('vw_prop_vw_club_char_05a'),
                    GetHashKey('vw_prop_vw_club_char_06a'),
                    GetHashKey('vw_prop_vw_club_char_07a'),
                    GetHashKey('vw_prop_vw_club_char_08a'),
                    GetHashKey('vw_prop_vw_club_char_09a'),
                    GetHashKey('vw_prop_vw_club_char_10a'),
                    GetHashKey('vw_prop_vw_club_char_j_a'),
                    GetHashKey('vw_prop_vw_club_char_q_a'),
                    GetHashKey('vw_prop_vw_club_char_k_a'),
                    GetHashKey('vw_prop_vw_dia_char_a_a'),
                    GetHashKey('vw_prop_vw_dia_char_02a'),
                    GetHashKey('vw_prop_vw_dia_char_03a'),
                    GetHashKey('vw_prop_vw_dia_char_04a'),
                    GetHashKey('vw_prop_vw_dia_char_05a'),
                    GetHashKey('vw_prop_vw_dia_char_06a'),
                    GetHashKey('vw_prop_vw_dia_char_07a'),
                    GetHashKey('vw_prop_vw_dia_char_08a'),
                    GetHashKey('vw_prop_vw_dia_char_09a'),
                    GetHashKey('vw_prop_vw_dia_char_10a'),
                    GetHashKey('vw_prop_vw_dia_char_j_a'),
                    GetHashKey('vw_prop_vw_dia_char_q_a'),
                    GetHashKey('vw_prop_vw_dia_char_k_a'),
                    GetHashKey('vw_prop_vw_hrt_char_a_a'),
                    GetHashKey('vw_prop_vw_hrt_char_02a'),
                    GetHashKey('vw_prop_vw_hrt_char_03a'),
                    GetHashKey('vw_prop_vw_hrt_char_04a'),
                    GetHashKey('vw_prop_vw_hrt_char_05a'),
                    GetHashKey('vw_prop_vw_hrt_char_06a'),
                    GetHashKey('vw_prop_vw_hrt_char_07a'),
                    GetHashKey('vw_prop_vw_hrt_char_08a'),
                    GetHashKey('vw_prop_vw_hrt_char_09a'),
                    GetHashKey('vw_prop_vw_hrt_char_10a'),
                    GetHashKey('vw_prop_vw_hrt_char_j_a'),
                    GetHashKey('vw_prop_vw_hrt_char_q_a'),
                    GetHashKey('vw_prop_vw_hrt_char_k_a'),
                    GetHashKey('vw_prop_vw_spd_char_a_a'),
                    GetHashKey('vw_prop_vw_spd_char_02a'),
                    GetHashKey('vw_prop_vw_spd_char_03a'),
                    GetHashKey('vw_prop_vw_spd_char_04a'),
                    GetHashKey('vw_prop_vw_spd_char_05a'),
                    GetHashKey('vw_prop_vw_spd_char_06a'),
                    GetHashKey('vw_prop_vw_spd_char_07a'),
                    GetHashKey('vw_prop_vw_spd_char_08a'),
                    GetHashKey('vw_prop_vw_spd_char_09a'),
                    GetHashKey('vw_prop_vw_spd_char_10a'),
                    GetHashKey('vw_prop_vw_spd_char_j_a'),
                    GetHashKey('vw_prop_vw_spd_char_q_a'),
                    GetHashKey('vw_prop_vw_spd_char_k_a'),
                    GetHashKey('vw_prop_vw_luckylight_on'),
                    GetHashKey('vw_prop_vw_luckylight_off'),
                    GetHashKey('vw_prop_vw_jackpot_on'),
                    GetHashKey('vw_prop_vw_jackpot_off'),
                    GetHashKey('vw_prop_vw_luckywheel_01a'),
                    GetHashKey('vw_prop_vw_luckywheel_02a'),
                    GetHashKey('vw_prop_casino_slot_01a_reels'),
                    GetHashKey('vw_prop_casino_slot_01b_reels'),
                    GetHashKey('vw_prop_casino_slot_02a_reels'),
                    GetHashKey('vw_prop_casino_slot_02b_reels'),
                    GetHashKey('vw_prop_casino_slot_03a_reels'),
                    GetHashKey('vw_prop_casino_slot_03b_reels'),
                    GetHashKey('vw_prop_casino_slot_04a_reels'),
                    GetHashKey('vw_prop_casino_slot_04b_reels'),
                    GetHashKey('vw_prop_casino_slot_05a_reels'),
                    GetHashKey('vw_prop_casino_slot_05b_reels'),
                    GetHashKey('vw_prop_casino_slot_06a_reels'),
                    GetHashKey('vw_prop_casino_slot_06b_reels'),
                    GetHashKey('vw_prop_casino_slot_07a_reels'),
                    GetHashKey('vw_prop_casino_slot_07b_reels'),
                    GetHashKey('vw_prop_casino_slot_08a_reels'),
                    GetHashKey('vw_prop_casino_slot_08b_reels'),
                    GetHashKey('vw_prop_roulette_ball'),
                    GetHashKey('vw_prop_vw_marker_02a'),
                    GetHashKey('vw_prop_vw_marker_01a'),
                    GetHashKey('prop_amb_beer_bottle'),
                    GetHashKey('prop_cs_burger_01'),
                    GetHashKey('p_amb_coffeecup_01'),
                    GetHashKey('prop_ecola_can'),
                    GetHashKey('prop_amb_donut'),
                    GetHashKey('prop_choc_ego'),
                    GetHashKey('prop_weed_bottle'),
                    GetHashKey('prop_candy_pqs'),
                    GetHashKey('prop_sandwich_01'),
                    GetHashKey('prop_ld_can_01'),
                    GetHashKey('prop_cs_beer_bot_01'),
                    GetHashKey('ba_prop_battle_decanter_02_s'),
                    GetHashKey('ex_p_ex_tumbler_02_empty'),
                    GetHashKey('ex_p_ex_tumbler_02_s'),
                    GetHashKey('p_whiskey_bottle_s'),
                    GetHashKey('ex_p_ex_tumbler_01_empty'),
                    GetHashKey('ba_prop_battle_whiskey_bottle_2_s'),
                    GetHashKey('ex_p_ex_tumbler_03_empty'),
                    GetHashKey('ex_p_ex_tumbler_03_s'),
                    GetHashKey('Ba_Prop_Battle_Champ_Closed'),
                    GetHashKey('Ba_Prop_Battle_Champ_Open'),
                    GetHashKey('ba_prop_battle_champ_closed_02'),
                    GetHashKey('ba_prop_battle_champ_open_02'),
                    GetHashKey('ba_prop_battle_champ_closed_03'),
                    GetHashKey('ba_prop_battle_champ_open_03'),
                    GetHashKey('vw_prop_chip_10dollar_x1'),
                    GetHashKey('vw_prop_chip_10dollar_st'),
                    GetHashKey('vw_prop_chip_50dollar_x1'),
                    GetHashKey('vw_prop_chip_100dollar_x1'),
                    GetHashKey('vw_prop_chip_100dollar_st'),
                    GetHashKey('vw_prop_chip_500dollar_x1'),
                    GetHashKey('vw_prop_chip_500dollar_st'),
                    GetHashKey('vw_prop_chip_1kdollar_x1'),
                    GetHashKey('vw_prop_chip_1kdollar_st'),
                    GetHashKey('vw_prop_plaq_5kdollar_x1'),
                    GetHashKey('vw_prop_plaq_5kdollar_st'),
                    GetHashKey('vw_prop_plaq_10kdollar_x1'),
                    GetHashKey('vw_prop_plaq_10kdollar_st'),
                    GetHashKey('vw_prop_chip_5kdollar_x1'),
                    GetHashKey('vw_prop_vw_coin_01a'),
                    GetHashKey('prop_pool_cue'),
                    GetHashKey('prop_poolball_1'),
                    GetHashKey('prop_poolball_10'),
                    GetHashKey('prop_poolball_11'),
                    GetHashKey('prop_poolball_12'),
                    GetHashKey('prop_poolball_13'),
                    GetHashKey('prop_poolball_14'),
                    GetHashKey('prop_poolball_15'),
                    GetHashKey('prop_poolball_2'),
                    GetHashKey('prop_poolball_3'),
                    GetHashKey('prop_poolball_4'),
                    GetHashKey('prop_poolball_5'),
                    GetHashKey('prop_poolball_6'),
                    GetHashKey('prop_poolball_7'),
                    GetHashKey('prop_poolball_8'),
                    GetHashKey('prop_poolball_9'),
                    GetHashKey('prop_poolball_cue'),
                    GetHashKey('p_loose_rag_01_s'),
                    GetHashKey('ng_proc_spraycan01b'),
                    '1694452750',
                    '1933174915',
                    '-469694731',
                    '-462817101',
                    GetHashKey('test_tree_cedar_trunk_001'),
                    GetHashKey('prop_rock_3_b'),
                    GetHashKey('prop_rock_3_c'),
                    GetHashKey('prop_rock_3_d'),
                    GetHashKey('prop_rock_3_e'),
                    GetHashKey('prop_rock_3_f'),
                    GetHashKey('prop_rock_3_g'),
                    GetHashKey('prop_rock_3_j'),
                    '-2007231801',
                    GetHashKey('prop_gas_pump_1d'),
                    GetHashKey('p_v_43_safe_s'),
                    GetHashKey('prop_cs_rub_binbag_01'),
                    GetHashKey('prop_ld_binbag_01'),
                    GetHashKey('prop_ld_rub_binbag_01'),
                    GetHashKey('prop_rub_binbag_sd_01'),
                    GetHashKey('prop_rub_binbag_sd_02'),
                    GetHashKey('prop_cs_street_binbag_01'),
                    GetHashKey('p_binbag_01_s'),
                    GetHashKey('v_61_bd1_binbag'),
                    GetHashKey('p_rub_binbag_test'),
                    GetHashKey('prop_rub_binbag_01'),
                    GetHashKey('prop_rub_binbag_01b'),
                    GetHashKey('prop_rub_binbag_03'),
                    GetHashKey('prop_rub_binbag_03b'),
                    GetHashKey('prop_rub_binbag_04'),
                    GetHashKey('prop_rub_binbag_05'),
                    GetHashKey('prop_rub_binbag_06'),
                    GetHashKey('prop_rub_binbag_08'),
                    GetHashKey('bkr_prop_fakeid_binbag_01'),
                    GetHashKey('hei_prop_heist_binbag'),
                    GetHashKey('ch_chint10_binbags_smallroom_01'),
                    GetHashKey('ch_chint10_binbags_stairs_01'),
                    GetHashKey('ng_proc_binbag_01a'),
                    GetHashKey('ng_proc_binbag_02a'),
                    GetHashKey('prop_rock_5_smash3'),
                    GetHashKey('phone'),
                    GetHashKey('metrotrain'),
                    GetHashKey('ng_proc_binbag_02a'),
                    GetHashKey('h4_prop_h4_diamond_disp_01a'),
                    GetHashKey('ch_prop_vault_painting_01h'),
                    GetHashKey('ch_prop_vault_painting_01f'),
                    GetHashKey('ch_prop_vault_painting_01j'),
                    GetHashKey('h4_prop_h4_glass_disp_01a'),
                    GetHashKey('prop_dumpster_02a'),
                    GetHashKey('prop_range_target_01'),
                    GetHashKey('csb_g'),
                    GetHashKey('bkr_prop_coke_box_01a'),
                    GetHashKey('ng_proc_leaves01'),
                    GetHashKey('bkr_prop_coke_fullmetalbowl_02'),
                    GetHashKey('bkr_prop_coke_fullscoop_01a'),
                    GetHashKey('bkr_prop_coke_dollboxfolded'),
                    GetHashKey('bkr_prop_coke_dollmould'),
                    GetHashKey('bkr_prop_coke_press_01b'),
                    GetHashKey('bkr_prop_coke_dollcast'),
                    GetHashKey('bkr_prop_coke_doll'),
                    GetHashKey('bkr_prop_coke_dollbox'),
                    GetHashKey('bkr_prop_coke_doll_bigbox'),
                    GetHashKey('prop_cs_credit_card'),
                    GetHashKey('bkr_prop_coke_bakingsoda_o'),
                    GetHashKey('prop_plant_01a'),
                    GetHashKey('bkr_prop_weed_bag_01a'),
                    GetHashKey('bkr_prop_weed_bag_pile_01a'),
                    GetHashKey('bkr_prop_weed_bud_02b'),
                    GetHashKey('bkr_prop_weed_leaf_01a'),
                    GetHashKey('bkr_prop_weed_dry_01a'),
                    GetHashKey('bkr_prop_weed_bucket_open_01a'),
                    GetHashKey('bkr_prop_weed_bud_pruned_01a'),
                    GetHashKey('prop_cs_scissors'),
                    GetHashKey('prop_syringe_01'),
                    GetHashKey('prop_cigar_02'),
                    GetHashKey('bkr_prop_coke_bottle_01a'),
                    GetHashKey('bkr_prop_meth_sacid'),
                    GetHashKey('bkr_prop_meth_ammonia'),
                    GetHashKey('bkr_prop_fakeid_clipboard_01a'),
                    GetHashKey('bkr_prop_fakeid_penclipboard'),
                    GetHashKey('bkr_prop_meth_scoop_01a'),
                    GetHashKey('bkr_prop_meth_bigbag_03a'),
                    GetHashKey('bkr_prop_meth_bigbag_04a'),
                    GetHashKey('bkr_prop_fakeid_penclipboard'),
                    GetHashKey('bkr_prop_fakeid_clipboard_01a'),
                    GetHashKey('bkr_prop_meth_openbag_02'),
                    GetHashKey('bkr_prop_coke_scale_01'),
                    GetHashKey('bkr_prop_meth_smallbag_01a'),
                    GetHashKey('bkr_prop_meth_openbag_01a'),
                    GetHashKey('bkr_prop_fakeid_penclipboard'),
                    GetHashKey('prop_meth_bag_01'),
                    GetHashKey('prop_cs_meth_pipe'),
                    GetHashKey('prop_cs_crackpipe'),
                    GetHashKey('ng_proc_leaves08'),
                    GetHashKey('bkr_prop_meth_tray_02a'),
                    GetHashKey('w_me_hammer'),
                    GetHashKey('bkr_prop_meth_tray_01a'),
                    GetHashKey('bkr_prop_meth_smashedtray_01'),
                    GetHashKey('bkr_prop_meth_smashedtray_01frag'),
                    GetHashKey('bkr_prop_meth_bigbag_02a'),
                    GetHashKey('bkr_prop_meth_sodium'),
                    GetHashKey('vw_prop_casino_phone_01b_handle'),
                    GetHashKey('hei_prop_heist_cash_pile'),
                    GetHashKey('prop_stoneshroom2'),
                    GetHashKey('prop_peyote_highland_01'),
                    GetHashKey('vw_prop_vw_luckylight_on'),
                    GetHashKey('vw_prop_vw_luckylight_off'),
                    GetHashKey('vw_prop_vw_jackpot_on'),
                    GetHashKey('vw_prop_vw_jackpot_off'),
                    GetHashKey('vw_prop_vw_luckywheel_01a'),
                    GetHashKey('vw_prop_vw_luckywheel_02a'),
                    GetHashKey('vw_prop_casino_slot_01a_reels'),
                    GetHashKey('vw_prop_casino_slot_01b_reels'),
                    GetHashKey('vw_prop_casino_slot_02a_reels'),
                    GetHashKey('vw_prop_casino_slot_02b_reels'),
                    GetHashKey('vw_prop_casino_slot_03a_reels'),
                    GetHashKey('vw_prop_casino_slot_03b_reels'),
                    GetHashKey('vw_prop_casino_slot_04a_reels'),
                    GetHashKey('vw_prop_casino_slot_04b_reels'),
                    GetHashKey('vw_prop_casino_slot_05a_reels'),
                    GetHashKey('vw_prop_casino_slot_05b_reels'),
                    GetHashKey('vw_prop_casino_slot_06a_reels'),
                    GetHashKey('vw_prop_casino_slot_06b_reels'),
                    GetHashKey('vw_prop_casino_slot_07a_reels'),
                    GetHashKey('vw_prop_casino_slot_07b_reels'),
                    GetHashKey('vw_prop_casino_slot_08a_reels'),
                    GetHashKey('vw_prop_casino_slot_08b_reels'),
                    GetHashKey('vw_prop_roulette_ball'),
                    GetHashKey('vw_prop_vw_marker_02a'),
                    GetHashKey('vw_prop_vw_marker_01a'),
                    GetHashKey('prop_amb_beer_bottle'),
                    GetHashKey('prop_cs_burger_01'),
                    GetHashKey('p_amb_coffeecup_01'),
                    GetHashKey('prop_ecola_can'),
                    GetHashKey('prop_amb_donut'),
                    GetHashKey('prop_choc_ego'),
                    GetHashKey('prop_weed_bottle'),
                    GetHashKey('prop_candy_pqs'),
                    GetHashKey('prop_sandwich_01'),
                    GetHashKey('prop_ld_can_01'),
                    GetHashKey('prop_cs_beer_bot_01'),
                    GetHashKey('ba_prop_battle_decanter_02_s'),
                    GetHashKey('ex_p_ex_tumbler_02_empty'),
                    GetHashKey('ex_p_ex_tumbler_02_s'),
                    GetHashKey('p_whiskey_bottle_s'),
                    GetHashKey('ex_p_ex_tumbler_01_empty'),
                    GetHashKey('ba_prop_battle_whiskey_bottle_2_s'),
                    GetHashKey('ex_p_ex_tumbler_03_empty'),
                    GetHashKey('ex_p_ex_tumbler_03_s'),
                    GetHashKey('Ba_Prop_Battle_Champ_Closed'),
                    GetHashKey('Ba_Prop_Battle_Champ_Open'),
                    GetHashKey('ba_prop_battle_champ_closed_02'),
                    GetHashKey('ba_prop_battle_champ_open_02'),
                    GetHashKey('ba_prop_battle_champ_closed_03'),
                    GetHashKey('ba_prop_battle_champ_open_03'),
                    GetHashKey('vw_prop_chip_10dollar_x1'),
                    GetHashKey('vw_prop_chip_10dollar_st'),
                    GetHashKey('vw_prop_chip_50dollar_x1'),
                    GetHashKey('vw_prop_chip_100dollar_x1'),
                    GetHashKey('vw_prop_chip_100dollar_st'),
                    GetHashKey('vw_prop_chip_500dollar_x1'),
                    GetHashKey('vw_prop_chip_500dollar_st'),
                    GetHashKey('vw_prop_chip_1kdollar_x1'),
                    GetHashKey('vw_prop_chip_1kdollar_st'),
                    GetHashKey('vw_prop_plaq_5kdollar_x1'),
                    GetHashKey('vw_prop_plaq_5kdollar_st'),
                    GetHashKey('vw_prop_plaq_10kdollar_x1'),
                    GetHashKey('vw_prop_plaq_10kdollar_st'),
                    GetHashKey('vw_prop_chip_5kdollar_x1'),
                    GetHashKey('vw_prop_vw_coin_01a'),
                    GetHashKey('vw_prop_vw_lux_card_01a'),
                    GetHashKey('vw_prop_vw_club_char_a_a'),
                    GetHashKey('vw_prop_vw_club_char_02a'),
                    GetHashKey('vw_prop_vw_club_char_03a'),
                    GetHashKey('vw_prop_vw_club_char_04a'),
                    GetHashKey('vw_prop_vw_club_char_05a'),
                    GetHashKey('vw_prop_vw_club_char_06a'),
                    GetHashKey('vw_prop_vw_club_char_07a'),
                    GetHashKey('vw_prop_vw_club_char_08a'),
                    GetHashKey('vw_prop_vw_club_char_09a'),
                    GetHashKey('vw_prop_vw_club_char_10a'),
                    GetHashKey('vw_prop_vw_club_char_j_a'),
                    GetHashKey('vw_prop_vw_club_char_q_a'),
                    GetHashKey('vw_prop_vw_club_char_k_a'),
                    GetHashKey('vw_prop_vw_dia_char_a_a'),
                    GetHashKey('vw_prop_vw_dia_char_02a'),
                    GetHashKey('vw_prop_vw_dia_char_03a'),
                    GetHashKey('vw_prop_vw_dia_char_04a'),
                    GetHashKey('vw_prop_vw_dia_char_05a'),
                    GetHashKey('vw_prop_vw_dia_char_06a'),
                    GetHashKey('vw_prop_vw_dia_char_07a'),
                    GetHashKey('vw_prop_vw_dia_char_08a'),
                    GetHashKey('vw_prop_vw_dia_char_09a'),
                    GetHashKey('vw_prop_vw_dia_char_10a'),
                    GetHashKey('vw_prop_vw_dia_char_j_a'),
                    GetHashKey('vw_prop_vw_dia_char_q_a'),
                    GetHashKey('vw_prop_vw_dia_char_k_a'),
                    GetHashKey('vw_prop_vw_hrt_char_a_a'),
                    GetHashKey('vw_prop_vw_hrt_char_02a'),
                    GetHashKey('vw_prop_vw_hrt_char_03a'),
                    GetHashKey('vw_prop_vw_hrt_char_04a'),
                    GetHashKey('vw_prop_vw_hrt_char_05a'),
                    GetHashKey('vw_prop_vw_hrt_char_06a'),
                    GetHashKey('vw_prop_vw_hrt_char_07a'),
                    GetHashKey('vw_prop_vw_hrt_char_08a'),
                    GetHashKey('vw_prop_vw_hrt_char_09a'),
                    GetHashKey('vw_prop_vw_hrt_char_10a'),
                    GetHashKey('vw_prop_vw_hrt_char_j_a'),
                    GetHashKey('vw_prop_vw_hrt_char_q_a'),
                    GetHashKey('vw_prop_vw_hrt_char_k_a'),
                    GetHashKey('vw_prop_vw_spd_char_a_a'),
                    GetHashKey('vw_prop_vw_spd_char_02a'),
                    GetHashKey('vw_prop_vw_spd_char_03a'),
                    GetHashKey('vw_prop_vw_spd_char_04a'),
                    GetHashKey('vw_prop_vw_spd_char_05a'),
                    GetHashKey('vw_prop_vw_spd_char_06a'),
                    GetHashKey('vw_prop_vw_spd_char_07a'),
                    GetHashKey('vw_prop_vw_spd_char_08a'),
                    GetHashKey('vw_prop_vw_spd_char_09a'),
                    GetHashKey('vw_prop_vw_spd_char_10a'),
                    GetHashKey('vw_prop_vw_spd_char_j_a'),
                    GetHashKey('vw_prop_vw_spd_char_q_a'),
                    GetHashKey('vw_prop_vw_spd_char_k_a'),
                    '358843520',
                    GetHashKey('L1_1'),
                    GetHashKey('bkr_prop_coke_box_01a'),
                    GetHashKey('bkr_prop_coke_fullmetalbowl_02'),
                    GetHashKey('bkr_prop_coke_fullscoop_01a'),
                    GetHashKey('bkr_prop_coke_box_01a'),
                    GetHashKey('ng_proc_leaves01'),
                    GetHashKey('bkr_prop_coke_fullmetalbowl_02'),
                    GetHashKey('bkr_prop_coke_fullscoop_01a'),
                    GetHashKey('bkr_prop_coke_dollboxfolded'),
                    GetHashKey('bkr_prop_coke_dollmould'),
                    GetHashKey('bkr_prop_coke_press_01b'),
                    GetHashKey('bkr_prop_coke_dollcast'),
                    GetHashKey('bkr_prop_coke_doll'),
                    GetHashKey('bkr_prop_coke_dollbox'),
                    GetHashKey('bkr_prop_coke_doll_bigbox'),
                    GetHashKey('prop_cs_credit_card'),
                    GetHashKey('bkr_prop_coke_bakingsoda_o'),
                    GetHashKey('prop_plant_01a'),
                    GetHashKey('bkr_prop_weed_bag_01a'),
                    GetHashKey('bkr_prop_weed_bag_pile_01a'),
                    GetHashKey('bkr_prop_weed_bud_02b'),
                    GetHashKey('bkr_prop_weed_leaf_01a'),
                    GetHashKey('bkr_prop_weed_dry_01a'),
                    GetHashKey('bkr_prop_weed_bucket_open_01a'),
                    GetHashKey('bkr_prop_weed_bud_pruned_01a'),
                    GetHashKey('prop_cs_scissors'),
                    GetHashKey('prop_syringe_01'),
                    GetHashKey('prop_cigar_02'),
                    GetHashKey('bkr_prop_coke_bottle_01a'),
                    GetHashKey('bkr_prop_meth_sacid'),
                    GetHashKey('bkr_prop_meth_ammonia'),
                    GetHashKey('bkr_prop_fakeid_clipboard_01a'),
                    GetHashKey('bkr_prop_fakeid_penclipboard'),
                    GetHashKey('bkr_prop_meth_scoop_01a'),
                    GetHashKey('bkr_prop_meth_bigbag_03a'),
                    GetHashKey('bkr_prop_meth_bigbag_04a'),
                    GetHashKey('bkr_prop_fakeid_penclipboard'),
                    GetHashKey('bkr_prop_fakeid_clipboard_01a'),
                    GetHashKey('bkr_prop_meth_openbag_02'),
                    GetHashKey('bkr_prop_coke_scale_01'),
                    GetHashKey('bkr_prop_meth_smallbag_01a'),
                    GetHashKey('bkr_prop_meth_openbag_01a'),
                    GetHashKey('bkr_prop_fakeid_penclipboard'),
                    GetHashKey('prop_meth_bag_01'),
                    GetHashKey('prop_cs_meth_pipe'),
                    GetHashKey('prop_cs_crackpipe'),
                    GetHashKey('ng_proc_leaves08'),
                    GetHashKey('bkr_prop_meth_tray_02a'),
                    GetHashKey('w_me_hammer'),
                    GetHashKey('bkr_prop_meth_tray_01a'),
                    GetHashKey('bkr_prop_meth_smashedtray_01'),
                    GetHashKey('bkr_prop_meth_smashedtray_01frag'),
                    GetHashKey('bkr_prop_meth_bigbag_02a'),
                    GetHashKey('bkr_prop_meth_sodium'),
                    GetHashKey('vw_prop_casino_phone_01b_handle'),
                    GetHashKey('hei_prop_heist_cash_pile'),
                    GetHashKey('prop_stoneshroom2'),
                    GetHashKey('prop_peyote_highland_01'),
                    '-1732910124',
                    '769923921',
                    '-1937636863',
                    '0',
                    '148511758',
                    '1336576410',
                    '-1964402432',
                    '1760825203',
                    '225514697',
                    '273925117',
                    '-1288559573',
                    '-1707584974',
                    '3821393119',
                    '-473574177',
                    '574348740',
                    '346403307',
                    '1255410010',
                    '2696754462',
                    '-1598212834',
                    '689760839',
                    '1652015642',
                    '491091384',
                    '-717142483',
                    '-857302273',
                    '-1634978236',
                    '-1562831388',
                    '75487256',
                    '338622326',
                    '569086707',
                    '1072287471',
                    '1299409410',
                    '1564805541',
                    '1792484553',
                    '2023735386',
                    '-971547840',
                    '-113902346',
                    '1529357684',
                    '-1745643757',
                    '-1056713654',
                    '-500057996',
                    '-1660422',
                    '2144741730',
                    '-2084633992',
                    '-1786099057',
                    '137902532',
                    '-771403250',
                    '-1716589765',
                    '584646201',
                    '1593441988',
                    '453432689',
                    '-1121678507',
                    '324215364',
                    '1927398017',
                    '905830540',
                    '1349014803',
                    '1124046276',
                    '339962010',
                    '-178484015',
                    '1467525553',
                    '403140669',
                    '-2055486531',
                    '-518344816',
                    '1653948529',
                    '173095431',
                    '-1634978236',
                    '1026431720',
                    '1609356763',
                    '-1209868881',
                    '-1074790547',
                    '-1063057011',
                    '2132975508',
                    '-1357824103',
                    '-270015777',
                    '736523883',
                    '1627465347',
                    '100416529',
                    '-494615257',
                    '-1654528753',
                    '487013001',
                    '-1466123874',
                    '-264665359',
                    '-1350614016',
                    '1626933972',
                    '-1975182244',
                    '977923025',
                    '974883178',
                    '-1038739674',
                    '1407197773',
                    '1534100734',
                    '413312110',
                    '-746954904',
                    '-1585232418',
                    '-1328202619',
                    '-563331074'
                ]),
                triggerWhitelist: [].concat(_toConsumableArray(FiveEyeAC.Main.TriggerWhitelist || []), [
                    'hardcap:playerActivated',
                    'pacificheist:server:rewardItem',
                    'rlPlayerActivated',
                    'chat:init',
                    'Queue:playerActivated',
                    'esx_skin:save',
                    'esx:onPlayerDeath',
                    'dp:ServerKeybindExist',
                    'esx_status',
                    'pma-voice',
                    'esx:onPlayerSpawn',
                    'esx:onPlayerJoined'
                ]),
                fallbackBlacklist: [].concat(_toConsumableArray(FiveEyeAC.Main.EntityBlacklist || []), [310817095])
            },
            codeUtils: {
                asyncWait: async function setup(genTimeout) {
                    return new Promise(function (saveNotifs) {
                        return setTimeout(function () {
                            return saveNotifs();
                        }, genTimeout);
                    });
                },
                compareVector: function subtract(subtractor, subtractee) {
                    var lightI = subtractor[0] - subtractee[0];
                    var lightJ = subtractor[1] - subtractee[1];
                    var _0x430d32 = subtractor[2] - subtractee[2];
                    return Math.sqrt(lightI * lightI + lightJ * lightJ + _0x430d32 * _0x430d32);
                }
            }
        };
        var cssGetPieceUniqueId = function onMessage(val) {
            try {
                if (val === 'None') {
                    return 'https://i.imgur.com/Ua5AxLq.png';
                }
                var account = JSON.parse(val);
                return 'data:image/png;base64,' + Buffer.from(account.data).toString('base64');
            } catch (_0x375952) {
                return 'https://i.imgur.com/Ua5AxLq.png';
            }
        };
        var addImage = async function render(type, index) {
            return {
                type: 'AdaptiveCard',
                body: [
                    {
                        type: 'Container',
                        items: [
                            _0x4d7b0c,
                            {
                                type: 'TextBlock',
                                text: 'Welcome to the server: ' + type,
                                wrap: true,
                                horizontalAlignment: 'Center'
                            },
                            _0x264727
                        ]
                    },
                    {
                        type: 'Image',
                        url: '' + cssGetPieceUniqueId(index),
                        horizontalAlignment: 'Center',
                        selectAction: _0x2d5132
                    },
                    _0x4a046e,
                    _0x2d9204
                ],
                $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
                version: '1.3',
                backgroundImage: _0x4f25dc,
                selectAction: _0x20b3a1
            };
        };
        var callback = function run(obj, name, num, d, type) {
            try {
                var time = new Date();
                var status = type;
                if (status === 'ban') {
                    status = 'Banned';
                    color = 13459797;
                }
                if (status === 'kick') {
                    status = 'Kicked';
                    color = 16044095;
                }
                if (status === 'detection') {
                    status = 'Detected';
                    color = 4770224;
                }
                if (status === 'started') {
                    status = 'Started';
                    color = 8577194;
                    var data = {
                        name: 'FiveEye\xAE - FiveM AntiCheat\xAE',
                        url: 'https://fiveeyeac.com',
                        icon_url: self.dataTable.brandingLogo
                    };
                    var params = {
                        text: 'FiveEye\xAE - \' ' + time,
                        icon_url: self.dataTable.brandingLogo
                    };
                    var options = {
                        author: data,
                        color: color,
                        type: 'rich',
                        title: 'Server was started with FiveEye!',
                        description: 'Your server has succesfully loaded into FiveEye network, thanks for trusting us!',
                        footer: params
                    };
                    return options;
                }
                data = {
                    name: 'FiveEye\xAE - FiveM AntiCheat\xAE',
                    url: 'https://fiveeyeac.com',
                    icon_url: self.dataTable.brandingLogo
                };
                params = {
                    text: ' FiveEye\xAE - ' + time,
                    icon_url: self.dataTable.brandingLogo
                };
                return {
                    author: data,
                    color: color,
                    type: 'rich',
                    title: 'A Cheater has been ' + status + ' by FiveEye **</>**',
                    fields: [{
                            name: 'Was this detection a false positive? Open a ticket in our Discord and we\'ll fix it rapidly :)',
                            value: 'dsc.gg/FiveEye - fiveeyeac.com'
                        }],
                    description: '\n            **Name: **' + name + '\n            **Reason: **' + num + '\n            **Ping: **' + GetPlayerPing(obj) + '\n            **ID: **' + obj + '\n            **IP: **' + d.ip + '\n            **Steam: **' + d.steam + '\n            **Xbox: **' + d.xbl + '\n            **Live: **' + d.live + '\n            **License: **' + d.license + '\n            **Discord: **<@' + d.discord + '>\n            ',
                    footer: params
                };
            } catch (ticketID) {
                console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Handled error detected on GenerateDiscordEmbed = ' + ticketID);
                return {};
            }
        };
        var checkIfNew = async function validate(type) {
            var data = {
                license: 'none',
                steam: 'none',
                live: 'none',
                xbl: 'none',
                discord: 'none',
                tokens: []
            };
            try {
                var allKnownClassesOfType = GetNumPlayerIdentifiers(type);
                var labellen = 0;
                for (; labellen < allKnownClassesOfType; labellen++) {
                    var label = GetPlayerIdentifier(type, labellen);
                    var currentParam = label.split(':');
                    data[currentParam[0]] = currentParam[1];
                }
                var typenum = GetNumPlayerTokens(type);
                if (!typenum) {
                    return data;
                }
                var set = 0;
                for (; set < typenum; set++) {
                    label = GetPlayerToken(type, set);
                    data.tokens.push(label);
                }
                return data;
            } catch (ticketID) {
                console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in GetIdentifiers: ' + ticketID);
                return data;
            }
        };
        var slideBackward = function save(url) {
            if (!DoesEntityExist(url)) {
                return false;
            }
            var id = NetworkGetFirstEntityOwner(url);
            var newEleName = GetEntityModel(url);
            var validNumberArray = newEleName.toString();
            var linkedInUrl = GetEntityPopulationType(url);
            var nowww = GetEntityType(url);
            if (id === undefined) {
                return false;
            }
            if (nowww !== 1 && nowww !== 2 && nowww !== 3) {
                return false;
            }
            if (linkedInUrl !== 0 && linkedInUrl !== 6 && linkedInUrl !== 7) {
                return false;
            }
            if (self.dataTable.entityWhitelist.includes(validNumberArray)) {
                return false;
            }
            if (self.dataTable.entityWhitelist.includes(newEleName)) {
                return false;
            }
            if (self.runningData.playerData[id] === undefined) {
                isNil(id);
            }
            return true;
        };
        var populateCommentsTable = function create(event, ticketID) {
            console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in ' + event + ': ' + ticketID);
        };
        var getComputedStyle = function remove(_) {
            var fullContentType = _.split('/webhooks/')[1] || '';
            var aInitP = fullContentType.split('/')[0] || '';
            var bInitP = fullContentType.split('/')[1] || '';
            return [
                aInitP,
                bInitP
            ];
        };
        var DOval = async function set(paramValue) {
            return new Promise(function (saveNotifs, obtainGETData) {
                global.exports['fiveeye-module2'].requestClientScreenshot(paramValue, {}, async function (val, clusterShardData) {
                    if (val) {
                        return obtainGETData(val);
                    }
                    return saveNotifs(clusterShardData.split(';base64,').pop());
                });
            });
        };
        AddStateBagChangeHandler('FiveEyeDT', null, async function (ip, canCreateDiscussions, noRender, isSlidingUp, dontForceConstraints) {
            if (!ip.includes('player')) {
                return;
            }
            var context = ip.replace('player:', '');
            if (noRender !== 'true') {
                return;
            }
            await self.codeUtils.asyncWait(500);
            var node = JSON.parse(Player(context).state.detected);
            if (node !== null && node.detected) {
                emit('FiveEye:server:detection', node.violation, node.args, context);
                Player(context).state.FiveEyeDT = 'false';
                Player(context).state.detected = JSON.stringify(_0x24fbd0);
            }
        });
        var sliceBlock = async function save(val, name) {
            var nextIdLookup = await checkIfNew(val);
            var newSlugName = false;
            var indexLookupKey;
            for (indexLookupKey in nextIdLookup) {
                var currentIndex = nextIdLookup[indexLookupKey];
                if (IsPlayerAceAllowed(val, 'FiveEyeAdmin')) {
                    return newSlugName = true;
                }
                if (self.serverData.adminPerms[nextIdLookup[indexLookupKey]]) {
                    if (name === 'AdminMenu' && self.serverData.adminPerms[nextIdLookup[indexLookupKey]].includes('EverythingNoPanel')) {
                        newSlugName = false;
                    } else {
                        if (self.serverData.adminPerms[nextIdLookup[indexLookupKey]].includes('Everything')) {
                            return true;
                        }
                        if (self.serverData.adminPerms[nextIdLookup[indexLookupKey]].includes(name)) {
                            return true;
                        }
                    }
                }
            }
            return newSlugName;
        };
        var generateBoundHandler = async function update(tabId) {
            Player(tabId).state.created = true;
            Player(tabId).state.FiveEyeDT = 'false';
            Player(tabId).state.createdEx = 'false';
            Player(tabId).state.DeletingEnts = 'false';
            Player(tabId).state.createdPtfx = 'false';
            Player(tabId).state.shotBulletBC = 'false';
            Player(tabId).state.set('violationNumber', '0', true);
            Player(tabId).state.detected = JSON.stringify(train1or);
            self.dataTable.weaponHashes.forEach(function (name) {
                return Player(tabId).state[name] = 'false';
            });
        };
        var isNil = function save(view) {
            if (self.runningData.playerData[view]) {
                return;
            }
            self.runningData.playerData[view] = _0x3e7584;
        };
        RegisterConsoleListener(function (data, argstring) {
            var payload = {
                script: data,
                args: argstring
            };
            socket.emit('console:newLine', payload);
        });
        socket.on('updateConfig', function (pStringValue) {
            self.serverData.serverConfig = JSON.parse(pStringValue);
            console.log('[FiveEye]: Config updated!');
        });
        socket.on('updateWebhooks', function (cell1) {
            var tempDecoration = cell1.banWebhook;
            var yMin1 = cell1.kickWebhook;
            var xMin1 = cell1.screenshotWebhook;
            try {
                var style = getComputedStyle(cell1.banWebhook);
                var comStyle = getComputedStyle(cell1.kickWebhook);
                var elComputedStyle = getComputedStyle(cell1.screenshotWebhook);
                var _0x33eb4b = {
                    banWebhook: style[0],
                    banWebhookToken: style[1],
                    kickWebhook: comStyle[0],
                    kickWebhookToken: comStyle[1],
                    screenshotWebhook: elComputedStyle[0],
                    screenshotWebhookToken: elComputedStyle[1]
                };
                self.serverData.webhookData = _0x33eb4b;
                console.log('[FiveEye]: Webhooks updated!');
            } catch (qTicketID) {
                return populateCommentsTable('updateWebhooks', qTicketID);
            }
        });
        socket.on('updateAdmins', function (newSettings) {
            self.serverData.adminPerms = {};
            Object.entries(newSettings).forEach(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2);
                var r = _ref4[0];
                var column = _ref4[1];
                return self.serverData.adminPerms[_ref4[1].steam] = _ref4[1].perms;
            });
            console.log('[FiveEye]: Admins updated!');
        });
        socket.on('getPlayers', function (finishPrevPart) {
            var token = getPlayers();
            finishPrevPart(token.length);
        });
        socket.on('getConnectedPlayers', function (unsafeTermFn) {
            unsafeTermFn(self.runningData.onlinePlayers);
        });
        socket.on('banPlayer', function (canCreateDiscussions) {
            if (_0x5c4bd8 > 0) {
                errhandle(_0x5c4bd8, 'Banned by Admin using FiveEye Cloud: ' + _0x1898cd);
            }
        });
        socket.on('kickPlayer', function (canCreateDiscussions) {
            if (_0x1e3bd9 > 0) {
                DropPlayer(_0x1e3bd9, 'FiveEye: ' + _0x3b7e12);
            }
        });
        socket.on('screenshotPlayer', async function (canCreateDiscussions, callback) {
            await DOval(_0x1f1af3).then(function (torrentMetaBuffer) {
                callback(Buffer.from(torrentMetaBuffer, 'base64'));
            }).catch(function (spofHosts) {
                console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Couldn\'t take a screenshot to player with id: ' + _0x1f1af3 + '. Error: ' + spofHosts);
            });
        });
        socket.on('console:executeCommand', function (column) {
            var value = column.command;
            ExecuteCommand(column.command);
        });
        socket.on('connect_error', function (origErr) {
            if (origErr.message === 'fiveeye_bck_error') {
                return;
            }
            console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Could not connect to the backend services!');
        });
        setTick(async function () {
            try {
                var result = getPlayers();
                self.runningData.onlinePlayers = {};
                result.forEach(async function (id) {
                    var p = GetPlayerPed(id);
                    self.runningData.onlinePlayers[id] = {
                        name: GetPlayerName(id),
                        id: id,
                        ping: GetPlayerPing(id),
                        pos: GetEntityCoords(p),
                        alive: GetEntityHealth(p) > 0
                    };
                    if (!Player(id).state.created) {
                        generateBoundHandler(id);
                    }
                    if (!self.runningData.playerData[id]) {
                        isNil(id);
                    }
                });
                self.runningData.authedAdmins.forEach(function (mmCoreSplitViewBlock) {
                    return emitNet('fiveeyeadmin:updateplayers', mmCoreSplitViewBlock, self.runningData.onlinePlayers);
                });
                socket.emit('updatePlayers', result.length);
                socket.emit('updateConnectedPlayers', self.runningData.onlinePlayers);
                await self.codeUtils.asyncWait(15000);
            } catch (qTicketID) {
                return populateCommentsTable('setTick1', qTicketID);
            }
        });
        setTick(async function () {
            try {
                self.runningData.createdEntities = {};
                self.runningData.revivedPlayers = {};
                await self.codeUtils.asyncWait(600000);
            } catch (qTicketID) {
                return populateCommentsTable('setTick2', qTicketID);
            }
        });
        setTick(async function () {
            try {
                self.runningData.deletedEntities = {};
                await self.codeUtils.asyncWait(4000);
            } catch (qTicketID) {
                return populateCommentsTable('setTick3', qTicketID);
            }
        });
        onNet('FiveEye:adminTool', async function (canCreateDiscussions, val) {
            try {
                if (!await sliceBlock(source, 'AdminMenu')) {
                    return;
                }
                switch (canCreateDiscussions) {
                case 'clearProps':
                    emitNet('FiveEye:client:clearprops', -1);
                    break;
                case 'clearVehicles':
                    emitNet('FiveEye:client:clearvehicles', -1);
                    break;
                case 'clearPeds':
                    emitNet('FiveEye:client:clearpeds', -1);
                    break;
                case 'revivePlayer':
                    emitNet('merevivo:amimismo', val);
                    break;
                case 'reqMenu':
                    emitNet('FiveEye:receiveopenmenu', source);
                    break;
                case 'reqPanel':
                    emitNet('FiveEye:receiveopenpanel', source);
                    break;
                case 'menuKick':
                    if (!val) {
                        return;
                    }
                    DropPlayer(val, '[FiveEye]: Kicked using Admin Menu');
                    break;
                case 'menuBan':
                    if (!val) {
                        return;
                    }
                    errhandle(val, 'Banned by ' + GetPlayerName(source) + ' using Admin Menu');
                    break;
                case 'menuBring':
                    var _0x32afe5 = GetEntityCoords(GetPlayerPed(source));
                    SetEntityCoords(GetPlayerPed(val), _0x32afe5[0], _0x32afe5[1], _0x32afe5[2]);
                    break;
                case 'menuGoto':
                    var _0x305666 = GetEntityCoords(GetPlayerPed(val));
                    SetEntityCoords(GetPlayerPed(source), _0x305666[0], _0x305666[1], _0x305666[2]);
                    break;
                case 'menuSlay':
                    emitNet('FiveEye:client:slayplayer', val);
                    break;
                case 'menuScreenshotRender':
                    await DOval(val).then(async function (mmCoreSplitViewBlock) {
                        emitNet('FiveEye:renderscreenshot', source, mmCoreSplitViewBlock);
                    }).catch(function (spofHosts) {
                        console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Couldn\'t take a screenshot to player with id: ' + val + '. Error: ' + spofHosts);
                    });
                    break;
                case 'menuFreeze':
                    emitNet('FiveEye:client:freezeplayer', val);
                    break;
                case 'menuScreenshot':
                    var d = await checkIfNew(val);
                    var statusCode = GetPlayerName(val) || 'Unknown';
                    await DOval(val).then(async function (buf) {
                        var md5 = Buffer.from(buf, 'base64');
                        var time = new Date();
                        var data = {
                            name: 'FiveEye\xAE - FiveM AntiCheat\xAE',
                            url: 'https://fiveeyeac.com',
                            icon_url: self.dataTable.brandingLogo
                        };
                        var params = {
                            text: 'FiveEye\xAE - ' + time,
                            icon_url: self.dataTable.brandingLogo
                        };
                        var opts = await {
                            author: data,
                            color: 4770224,
                            type: 'rich',
                            title: 'Screenshot requested by Admin **</>**',
                            fields: [{
                                    name: 'Was this detection a false positive? Open a ticket in our Discord and we\'ll fix it rapidly :)',
                                    value: 'dsc.gg/FiveEye - fiveeyeac.com'
                                }],
                            description: '\n                            **Name: **' + statusCode + '\n                            **Ping: **' + GetPlayerPing(val) + '\n                            **ID: **' + val + '\n                            **IP: **' + d.ip + '\n                            **Steam: **' + d.steamid + '\n                            **Xbox: **' + d.xbl + '\n                            **Live: **' + d.live + '\n                            **License: **' + d.license + '\n                            **Discord: **<@' + d.discord + '>\n                        ',
                            footer: params
                        };
                        var config = {
                            id: self.serverData.webhookData.screenshotWebhook,
                            token: self.serverData.webhookData.screenshotWebhookToken
                        };
                        var client = new $.WebhookClient(config);
                        var EmbeddedSchema = new $.MessageEmbed().setColor(opts.color).setAuthor({
                            name: opts.author.name,
                            iconURL: opts.author.icon_url,
                            url: opts.author.url
                        }).setTitle(opts.title).setDescription(opts.description).addFields(opts.fields).setFooter({
                            text: opts.footer.text,
                            iconURL: opts.footer.icon_url
                        }).setImage('attachment://file.jpg');
                        client.send({
                            username: 'FiveEye',
                            avatarURL: opts.author.icon_url,
                            embeds: [EmbeddedSchema],
                            files: [md5 || '']
                        });
                        client.destroy();
                    }).catch(function (spofHosts) {
                        console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Couldn\'t take a screenshot to player with id: ' + val + '. Error: ' + spofHosts);
                    });
                    break;
                default:
                    break;
                }
            } catch (qTicketID) {
                populateCommentsTable('adminTool', qTicketID);
            }
        });
        onNet('FiveEye:checkperms', async function () {
            try {
                if (!await sliceBlock(source, 'AdminMenu') && source > 0) {
                    DropPlayer(source, 'FiveEye: What are you doing?');
                }
            } catch (qTicketID) {
                return populateCommentsTable('checkperms', qTicketID);
            }
        });
        onNet('FiveEye:server:checksuperjump', async function () {
            try {
                if (IsPlayerUsingSuperJump(source)) {
                    emit('FiveEye:server:detection', 'AntiSuperJump', 'Player has superjump activated.', source);
                }
            } catch (qTicketID) {
                return populateCommentsTable('SuperJump', qTicketID);
            }
        });
        onNet('FiveEye:EMDFailure', async function () {
            if (source <= 0) {
                return;
            }
            DropPlayer(source, '[FiveEye]: There seems to be an error with your client. Close the game and try to join the server again.');
        });
        RegisterCommand('fban', async function (target, componentStack) {
            var parentComponentDef = componentStack[0];
            if (!await sliceBlock(target, 'AdminMenu') || target <= 0) {
                return;
            }
            errhandle(componentStack[0], 'Banned by ' + GetPlayerName(target) + ' using FBAN');
        });
        var rssLabels = {
            0: _0x337f23,
            1: _0x167266,
            2: _0x4f3d2b,
            3: _0x352a5e
        };
        on('entityCreated', async function (options) {
            try {
                if (!slideBackward(options)) {
                    return;
                }
                var userId = NetworkGetFirstEntityOwner(options);
                var slackUserIds = GetEntityModel(options);
                if (self.dataTable.fallbackBlacklist.includes(slackUserIds)) {
                    return CancelEvent();
                }
                EnsureEntityStateBag(options);
                Entity(options).state.set('FiveEyeAE', 'waiting', true);
                Entity(options).state.set('FiveEye-Del', 'no', true);
                if (Entity(options).state.FiveEyeAE !== 'waiting') {
                    return;
                }
                var disX = 0;
                var a = GetEntityType(options);
                var delBtnWidth = GetPlayerPing(userId) * 3;
                var chat_retry = setInterval(async function () {
                    if (!slideBackward(options)) {
                        return clearInterval(chat_retry);
                    }
                    if (Entity(options).state.FiveEyeAE !== 'waiting') {
                        return clearInterval(chat_retry);
                    }
                    var _0x17dfe3 = GetEntityModel(options).toString();
                    var sql = GetEntityPopulationType(options);
                    if (!self.runningData.playerData[userId].canSpawn && disX > delBtnWidth / 2) {
                        emit('FiveEye:server:detection', 'Anti' + rssLabels[a].name + 'Spawn', rssLabels[a].detectionReason + ' ' + _0x17dfe3 + '. Player is being rate-limited and won\'t be able to spawn any entities until they restart they client.', userId);
                        DeleteEntity(options);
                        return clearInterval(chat_retry);
                    }
                    if (disX >= delBtnWidth) {
                        Entity(options).state.set('FiveEye-Del', 'yes', true);
                        if (GetPlayerPing(userId) < 400 && GetPlayerPed(userId) > 0 && GetEntityAttachedTo(options) <= 0) {
                            self.runningData.createdEntities[userId] = (self.runningData.createdEntities[userId] || 0) + 1;
                            if (self.runningData.createdEntities[userId] > 2) {
                                emit('FiveEye:server:detection', 'Anti' + rssLabels[a].name + 'Spawn', rssLabels[a].detectionReason + ' ' + _0x17dfe3 + '. Entity type is ' + sql, userId);
                                self.runningData.playerData[userId].canSpawn = false;
                            }
                        }
                        DeleteEntity(options);
                        return clearInterval(chat_retry);
                    }
                    disX++;
                }, 25);
            } catch (qTicketID) {
                populateCommentsTable('entityCreated', qTicketID);
            }
        });
        on('entityRemoved', async function (tabId) {
            try {
                var id = NetworkGetEntityOwner(tabId);
                var currTab = GetEntityType(tabId);
                if (!slideBackward(tabId) || currTab !== 2) {
                    return;
                }
                if (Player(id).state.DeletingEnts[id] === 'true') {
                    return;
                }
                await self.codeUtils.asyncWait(1500);
                if (Player(id).state.DeletingEnts[id] === 'true') {
                    return;
                }
                self.runningData.deletedEntities[id] = (self.runningData.deletedEntities[id] || 0) + 1;
                if (self.runningData.deletedEntities[id] > 30) {
                    emit('FiveEye:server:detection', 'AntiVehicleDelete', 'Player deleted a vehicle using an executor: ' + modelcheck + '. EType is ' + poptype + ', count is ' + EntitiesRemoved[id], id);
                }
            } catch (_0x4e8eef) {
            }
        });
        on('explosionEvent', async function (context, poi) {
            try {
                if (poi.damageScale === 0 || poi.f210 !== 0) {
                    return;
                }
                if (self.runningData.playerData[context] === undefined) {
                    isNil(context);
                }
                if (Player(context).state.createdEx === 'true') {
                    return;
                }
                var context_help = GetPlayerPed(context);
                switch (poi.explosionType) {
                case 0:
                    if (FiveEyeAC.Bypass !== undefined) {
                        if (FiveEyeAC.Bypass.includes('grenadeExplosionEvent')) {
                            return;
                        }
                    }
                    if (Player(context).state['-1813897027'] === 'true' || Player(context).state[-1813897027] === 'true') {
                        return;
                    }
                    if (GetVehiclePedIsIn(context_help, false) <= 0) {
                        self.runningData.playerData[context].explosions = (self.runningData.playerData[context].explosions || 0) + 1;
                    }
                    if (self.runningData.playerData[context].explosions > 3 && GetVehiclePedIsIn(context_help, false) <= 0) {
                        emit('FiveEye:server:detection', 'AntiExplosions', 'Player made a grenade explosion using an executor', context);
                    }
                    CancelEvent();
                    break;
                case 1:
                    if (FiveEyeAC.Bypass !== undefined) {
                        if (FiveEyeAC.Bypass.includes('grenadeLauncherExplosionEvent')) {
                            return;
                        }
                    }
                    if (Player(context).state['-1568386805'] === 'true' || Player(context).state[-1568386805] === 'true') {
                        return;
                    }
                    if (self.runningData.playerData[context].explosions > 2) {
                        emit('FiveEye:server:detection', 'AntiExplosions', 'Player made a grenade launcher explosion using an executor', context);
                    }
                    self.runningData.playerData[context].explosions = (self.runningData.playerData[context].explosions || 0) + 1;
                    CancelEvent();
                    break;
                case 2:
                    if (FiveEyeAC.Bypass !== undefined) {
                        if (FiveEyeAC.Bypass.includes('stickyBombExplosionEvent')) {
                            return;
                        }
                    }
                    if (Player(context).state['741814745'] === 'true' || Player(context).state[741814745] === 'true') {
                        return;
                    }
                    if (self.runningData.playerData[context].explosions > 15) {
                        emit('FiveEye:server:detection', 'AntiExplosions', 'Player made a sticky bomb explosion using an executor', context);
                    }
                    self.runningData.playerData[context].explosions = (self.runningData.playerData[context].explosions || 0) + 1;
                    CancelEvent();
                    break;
                case 3:
                    if (FiveEyeAC.Bypass !== undefined) {
                        if (FiveEyeAC.Bypass.includes('molotovExplosionEvent')) {
                            return;
                        }
                    }
                    if (Player(context).state['615608432'] === 'true' || Player(context).state[615608432] === 'true') {
                        return;
                    }
                    if (self.runningData.playerData[context].explosions > 2) {
                        emit('FiveEye:server:detection', 'AntiExplosions', 'Player made a molotov explosion using an executor', context);
                    }
                    self.runningData.playerData[context].explosions = (self.runningData.playerData[context].explosions || 0) + 1;
                    CancelEvent();
                    break;
                case 4:
                    if (FiveEyeAC.Bypass !== undefined) {
                        if (FiveEyeAC.Bypass.includes('rocketExplosionEvent')) {
                            return;
                        }
                    }
                    if (Player(context).state['2982836145'] === 'true' || Player(context).state[2982836145] === 'true' || Player(context).state['-1312131151'] === 'true' || Player(context).state[-1312131151] === 'true') {
                        return;
                    }
                    if (self.runningData.playerData[context].explosions > 2) {
                        emit('FiveEye:server:detection', 'AntiExplosions', 'Player made a rocket explosion using an executor', context);
                    }
                    self.runningData.playerData[context].explosions = (self.runningData.playerData[context].explosions || 0) + 1;
                    CancelEvent();
                    break;
                case 7:
                    var _0x56377e = self.codeUtils.compareVector(GetEntityCoords(context_help), [
                        poi.posX,
                        poi.posY,
                        poi.posZ
                    ]);
                    if (_0x56377e > 10 && GetVehiclePedIsIn(context_help, false) === 0 && GetSelectedPedWeapon(context_help) === GetHashKey('WEAPON_UNARMED')) {
                        if (self.runningData.playerData[context].explosions > 2) {
                            emit('FiveEye:server:detection', 'AntiExplosions', 'Player made a car explosion using an executor', context);
                        }
                        self.runningData.playerData[context].explosions = (self.runningData.playerData[context].explosions || 0) + 1;
                        CancelEvent();
                    }
                    break;
                case 25:
                    emit('FiveEye:server:detection', 'AntiExplosions', 'Player made a explosion using an executor', context);
                    CancelEvent();
                    break;
                case 31:
                    var pl = getPlayers();
                    pl.forEach(async function (level) {
                        var numberOfTiles = GetPlayerPed(level);
                        var _0x5da2b2 = self.codeUtils.compareVector(GetEntityCoords(numberOfTiles), [
                            poi.posX,
                            poi.posY,
                            poi.posZ
                        ]);
                        if (_0x5da2b2 < 3) {
                            emit('FiveEye:server:detection', 'AntiExplosions', 'Player made a tanker explosion using an executor', context);
                        }
                    });
                    CancelEvent();
                    break;
                case 32:
                    CancelEvent();
                    break;
                case 35:
                    emit('FiveEye:server:detection', 'AntiExplosions', 'Player made a bird explosion using an executor', context);
                    CancelEvent();
                    break;
                case 36:
                    if (FiveEyeAC.Bypass !== undefined) {
                        if (FiveEyeAC.Bypass.includes('rocketExplosionEvent')) {
                            return;
                        }
                    }
                    if (Player(context).state['1834241177'] === 'true' || Player(context).state[1834241177] === 'true') {
                        return;
                    }
                    if (self.runningData.playerData[context].explosions > 2) {
                        emit('FiveEye:server:detection', 'AntiExplosions', 'Player made a railgun explosion using an executor', context);
                    }
                    self.runningData.playerData[context].explosions = (self.runningData.playerData[context].explosions || 0) + 1;
                    CancelEvent();
                    break;
                case 38:
                    if (Player(context).state['2138347493'] === 'true' || Player(context).state[2138347493] === 'true') {
                        return CancelEvent();
                    }
                    break;
                case 37:
                    CancelEvent();
                    break;
                default:
                    break;
                }
                var name = undefined;
                if (poi.damageScale > 1) {
                    name = 'mortal';
                }
                if (poi.isInvisible) {
                    name = 'invisible';
                }
                if (!poi.isAudible) {
                    name = 'unaudible';
                }
                if (name) {
                    emit('FiveEye:server:detection', 'AntiExplosions', 'Player made a ' + name + ' explosion using an executor', context);
                    CancelEvent();
                }
            } catch (qTicketID) {
                populateCommentsTable('explosionEvent', qTicketID);
            }
        });
        on('ptFxEvent', async function (cur) {
            try {
                if (Player(cur).state.createdPtfx === 'false') {
                    return CancelEvent();
                }
            } catch (qTicketID) {
                return populateCommentsTable('ptFxEvent', qTicketID);
            }
        });
        on('giveWeaponEvent', async function (isSlidingUp, canCreateDiscussions) {
            try {
                if (canCreateDiscussions.givenAsPickup) {
                    return;
                }
                CancelEvent();
            } catch (qTicketID) {
                populateCommentsTable('giveWeaponEvent', qTicketID);
            }
        });
        on('removeWeaponEvent', async function () {
            CancelEvent();
        });
        on('removeAllWeaponsEvent', async function () {
            CancelEvent();
        });
        on('clearPedTasksEvent', async function (server, data) {
            try {
                if (data.immediately) {
                    CancelEvent();
                }
                if (DoesEntityExist(data.pedId) && GetPlayerPed(server) !== data.pedId && IsPedAPlayer(data.pedId)) {
                    CancelEvent();
                }
            } catch (qTicketID) {
                return populateCommentsTable('clearPedTasksEvent', qTicketID);
            }
        });
        on('weaponDamageEvent', async function (id, item) {
            try {
                var event = item.weaponType;
                if (id <= 0) {
                    return;
                }
                if (item.hitGlobalId === 0) {
                    return;
                }
                if (id !== item.parentGlobalId) {
                    return;
                }
                if (typeof event === 'string') {
                    event = GetHashKey(event);
                }
                if (self.runningData.playerData[id] === undefined) {
                    isNil(id);
                }
                if (self.dataTable.weaponHashes.includes(event) || Player(id).state.shotBulletBC === 'true') {
                    return;
                }
                if (Player(id).state[event.toString()] === 'false') {
                    self.runningData.playerData[id].bulletsshot = (self.runningData.playerData[id].bulletsshot || 0) + 1;
                    if (self.runningData.playerData[id].bulletsshot >= 15) {
                        emit('FiveEye:server:detection', 'AntiShootBulletBetweenCoords', 'Player used a weapon that is not in their loadout: ' + event, id);
                    }
                    CancelEvent();
                }
            } catch (qTicketID) {
                populateCommentsTable('weaponDamageEvent', qTicketID);
            }
        });
        on('respawnPlayerPedEvent', async function (context) {
            try {
                var context_help = GetPlayerPed(context);
                if (!DoesEntityExist(context_help) || !IsPedAPlayer(context_help) || Player(context).state.FYERevive !== 'false') {
                    return;
                }
                await self.codeUtils.asyncWait(3000);
                if (!DoesEntityExist(context_help) || !IsPedAPlayer(context_help) || Player(context).state.FYERevive !== 'false') {
                    return;
                }
                self.runningData.revivedPlayers[context] = (self.runningData.revivedPlayers[context] || 0) + 1;
                if (self.runningData.revivedPlayers[context] < 2) {
                    return;
                }
                emit('FiveEye:server:detection', 'AntiRevive', 'Player has revived itself using an executor.', context);
                CancelEvent();
            } catch (qTicketID) {
                populateCommentsTable('respawnPlayerPedEvent', qTicketID);
            }
        });
        on('playerConnecting', async function (event, canCreateDiscussions, Q) {
            try {
                Q.defer();
                var self = await checkIfNew(source);
                var parent = GetPlayerName(source);
                if (parent !== null && parent.includes('<') || parent.includes('>') || parent.includes('script')) {
                    return Q.done('[FiveEye]: Detected anomaly in your name. Remove special characters to be able to join this server.');
                }
                var autoResumeTimer = setTimeout(async function () {
                    Q.done();
                    console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0FiveEye Server is down, forcing player connection.');
                }, 7500);
                await request.get('https://fiveeyeac.com/VISAPONAC/v1/getUserBans', {
                    params: {
                        license: self.license,
                        steam: self.steam,
                        xbl: self.xbl,
                        live: self.live,
                        discord: self.discord,
                        token: JSON.stringify(self.tokens) || 'none'
                    }
                }).then(async function (result) {
                    var constraintsToAttach = result.data;
                    clearTimeout(autoResumeTimer);
                    if (result.data.message !== true && result.data.message !== 'true') {
                        return Q.done();
                    }
                    await self.codeUtils.asyncWait(0);
                    console.log('^4[FiveEye] ^0- ^1[CONNECTION MANAGER]: ^0WARNING! ' + parent + ' is trying to connect to the server but one of their identifiers is banned: ' + (result.data.identifier || ''));
                    var validationPromises = await addImage(event, result.data.image);
                    setTimeout(function () {
                        return Q.presentCard(validationPromises, function () {
                        });
                    }, 1500);
                    await self.codeUtils.asyncWait(25000);
                    return Q.done('[FiveEye] - You\'re banned from FiveEye servers due to cheating.');
                }).catch(async function (spofHosts) {
                    Q.done();
                    clearTimeout(autoResumeTimer);
                    console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in playerConnecting: ' + spofHosts);
                });
            } catch (ticketID) {
                console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in playerConnecting2: ' + ticketID);
            }
        });
        var get_image_info = async function report(obj, ex) {
            try {
                emitNet('FiveEye:BanLogo', obj);
                SetRoutingBucketEntityLockdownMode(69, 'strict');
                SetRoutingBucketPopulationEnabled(69, false);
                SetPlayerRoutingBucket(obj, 69);
                await self.codeUtils.asyncWait(15000);
                DropPlayer(obj, ex);
            } catch (ticketID) {
                console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in FiveDrop: ' + ticketID);
            }
        };
        var sessionMiddleware = async function init(val, params) {
            try {
                var BidirectionalSubject = await checkIfNew(val);
                var statusCode = GetPlayerName(val) || 'Unknown';
                var opts = await callback(val, statusCode, params, BidirectionalSubject, 'detection');
                await DOval(val).then(function (buf) {
                    var md5 = Buffer.from(buf, 'base64');
                    var params = {
                        id: self.serverData.webhookData.screenshotWebhook,
                        token: self.serverData.webhookData.screenshotWebhookToken
                    };
                    var connection = new $.WebhookClient(params);
                    var EmbeddedSchema = new $.MessageEmbed().setColor(opts.color).setAuthor({
                        name: opts.author.name,
                        iconURL: opts.author.icon_url,
                        url: opts.author.url
                    }).setTitle(opts.title).setDescription(opts.description).addFields(opts.fields).setFooter({
                        text: opts.footer.text,
                        iconURL: opts.footer.icon_url
                    }).setImage('attachment://file.jpg');
                    connection.send({
                        username: 'FiveEye',
                        avatarURL: opts.author.icon_url,
                        embeds: [EmbeddedSchema],
                        files: [md5 || '']
                    });
                    return connection.destroy();
                }).catch(async function (spofHosts) {
                    console.log('[FiveEye]: An error ocurred while taking a screenshot to player with id: ' + val + '. Error: ' + spofHosts);
                    return '';
                });
            } catch (ticketID) {
                console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in detection: ' + ticketID);
            }
        };
        var time_scale = async function update(val, params) {
            try {
                var BidirectionalSubject = await checkIfNew(val);
                get_image_info(val, FiveEyeAC.Detections.KickReason);
                var statusCode = GetPlayerName(val) || 'Unknown';
                var opts = await callback(val, statusCode, params, BidirectionalSubject, 'kick');
                var config = {
                    id: self.serverData.webhookData.kickWebhook,
                    token: self.serverData.webhookData.kickWebhookToken
                };
                var client = new $.WebhookClient(config);
                var EmbeddedSchema = new $.MessageEmbed().setColor(opts.color).setAuthor({
                    name: opts.author.name,
                    iconURL: opts.author.icon_url,
                    url: opts.author.url
                }).setTitle(opts.title).setDescription(opts.description).addFields(opts.fields).setFooter({
                    text: opts.footer.text,
                    iconURL: opts.footer.icon_url
                });
                var credentials = {
                    username: 'FiveEye',
                    avatarURL: opts.author.icon_url,
                    embeds: [EmbeddedSchema]
                };
                client.send(credentials);
                client.destroy();
            } catch (ticketID) {
                console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in kick: ' + ticketID);
            }
        };
        var errhandle = async function init(val, key) {
            try {
                emit('FiveEye:PlayerBanned', val, key);
                get_image_info(val, FiveEyeAC.Detections.BanReason);
                await self.codeUtils.asyncWait(2000);
                var name = GetPlayerName(val) || 'Unknown';
                var d = await checkIfNew(val);
                var hex = await DOval(val).then(function (value) {
                    return value;
                }).catch(async function (spofHosts) {
                    console.log('[FiveEye]: An error ocurred while taking a screenshot to player with id: ' + val + '. Error: ' + spofHosts);
                    return '';
                });
                var expected = Buffer.from(hex, 'base64');
                try {
                    if (d.license === 'none' && d.steam === 'none' && d.live === 'none' && d.xbl === 'none' && d.discord === 'none' && name === 'Unknown') {
                        return;
                    }
                    request({
                        method: 'POST',
                        url: 'https://fiveeyeac.com/VISAPONAC/v1/banUser2',
                        data: {
                            license: d.license,
                            steam: d.steam,
                            xbl: d.xbl,
                            live: d.live,
                            discord: d.discord,
                            name: name,
                            token: JSON.stringify(d.tokens) || 'None',
                            serverLicense: FiveEyeAC.Main.LicenseKey,
                            reason: key,
                            screenshot: expected || 'None'
                        }
                    });
                } catch (size_buffer) {
                    console.log('^3[FiveEye]: API-ERROR: Error uploading ban to the external database.');
                    console.log('^3[FiveEye]: Found error while uploading ban to the external database: ', size_buffer);
                }
                var opts = await callback(val, name, key, d, 'ban');
                var params = {
                    id: self.serverData.webhookData.banWebhook,
                    token: self.serverData.webhookData.banWebhookToken
                };
                var connection = new $.WebhookClient(params);
                var EmbeddedSchema = new $.MessageEmbed().setColor(opts.color).setAuthor({
                    name: opts.author.name,
                    iconURL: opts.author.icon_url,
                    url: opts.author.url
                }).setTitle(opts.title).setDescription(opts.description).addFields(opts.fields).setFooter({
                    text: opts.footer.text,
                    iconURL: opts.footer.icon_url
                }).setImage('attachment://file.jpg');
                connection.send({
                    username: 'FiveEye',
                    avatarURL: opts.author.icon_url,
                    embeds: [EmbeddedSchema],
                    files: [expected || '']
                });
                connection.destroy();
            } catch (ticketID) {
                console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in ban: ' + ticketID);
            }
        };
        onNet('FiveEye:server:detection', async function (i, _, child) {
            try {
                var target = source;
                var item = ' **__</>__** ' + i + ' **>** ' + _;
                if (target > 0) {
                    return;
                }
                if (target == 0 && child >= 1) {
                    target = child;
                }
                if (GetPlayerPing(target) === 0) {
                    return;
                }
                if (self.runningData.playerData[target] === undefined) {
                    isNil(target);
                }
                if (i === 'AntiTriggers') {
                    self.dataTable.triggerWhitelist.forEach(function (allCueNames) {
                        if (_.includes(allCueNames)) {
                            return;
                        }
                    });
                }
                if (GetInvokingResource() === undefined && child !== target) {
                    return errhandle(target, 'Trying to ban another player through client');
                }
                Player(target).state.violationNumber = Number(Player(target).state.violationNumber || '0') + 1;
                if (await sliceBlock(target, i)) {
                    return;
                }
                if (self.serverData.serverConfig === undefined) {
                    return sessionMiddleware(target, item);
                }
                if (self.serverData.serverConfig[i] === undefined) {
                    return sessionMiddleware(target, item);
                }
                if (self.serverData.serverConfig[i].log !== undefined && self.serverData.serverConfig[i].log === 'true' || self.serverData.serverConfig[i].log === true) {
                    sessionMiddleware(target, item);
                }
                if (self.serverData.serverConfig[i].ban !== undefined && self.serverData.serverConfig[i].ban === 'true' || self.serverData.serverConfig[i].ban === true) {
                    return errhandle(target, item);
                }
                if (self.serverData.serverConfig[i].kick !== undefined && self.serverData.serverConfig[i].kick === 'true' || self.serverData.serverConfig[i].kick === true) {
                    return time_scale(target, item);
                }
            } catch (ticketID) {
                console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in detection: ' + ticketID);
            }
        });
        var updateSliderLabel = async function update() {
            try {
                if (self.serverData.webhookData.screenshotWebhook === undefined || self.serverData.webhookData.screenshotWebhook === '') {
                    return setTimeout(update, 1000);
                }
                var opts = await callback('id', 'name', 'reason', 'identifiers', 'started');
                var config = {
                    id: self.serverData.webhookData.screenshotWebhook,
                    token: self.serverData.webhookData.screenshotWebhookToken
                };
                var client = new $.WebhookClient(config);
                var EmbeddedSchema = new $.MessageEmbed().setColor(opts.color).setAuthor({
                    name: opts.author.name,
                    iconURL: opts.author.icon_url,
                    url: opts.author.url
                }).setTitle(opts.title).setDescription(opts.description).setFooter({
                    text: opts.footer.text,
                    iconURL: opts.footer.icon_url
                });
                var credentials = {
                    username: 'FiveEye',
                    avatarURL: opts.author.icon_url,
                    embeds: [EmbeddedSchema]
                };
                client.send(credentials);
                client.destroy();
            } catch (ticketID) {
                console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error in startlog: ' + ticketID);
            }
        };
        (async function () {
            try {
                console.log('       \n    ^4\n                                .........\n                        .::--------------::::..\n                    .:-======------------:::::::::.\n                    .:================------::::::::::::.\n        ^4         :=====^0+**#%%%%%%%%%%%%##*+=^4:::::::::::::.\n        ^4       .=+++^0*#%%%%%%%%%%%%%%%%%%%%%%%*+-^4:::::::::...\n        ^4      -++*^0#%%%%%%%%%%%%%%%%%%%%%%%%%%%%+ ^4.:::::::.....\n        ^4    .++*^0%%%%%%%%%#*+==---==++*#%%%%%%*:    ^4.:::::......\n        ^4   :+*^0%%%%%%#+-.                             ^4.:::.......\n        ^4  :+^0#%%%%#=.                                   ^4::........\n        ^4 .+^0%%%%*:                                       ^4..........\n        ^4 =^0%%%*.                                          ^4..........\n        ^4.^0#%%-        :=+*##-                              ^4.........\n        ^4=^0%*       :*%%%%%%#                               ^4.........\n        ^4*^0+      .*%%%%%%%%%        .                      ^4..........\n        ^4=^0      .%%%%%%%%%%%#:     =%*                      ^5.........\n        ^0       #@%%%%%%%=-+%%%##%%%%%-                     ^5.........\n        ^0      .@@%%%%%%-   +%%%%%%%%%*                     ^5........\n        ^0       @@%%%%%%%+=*%%%%%%%%%%*                    ^5.........\n        ^0       *@@%%%%%%%%%%%%%%%%%%%-                    ^5.........\n        ^0        #@@%%%%%%%%%%%%%%%%%+                    ^5.........\n        ^0         +%@@%%%%%%%%%%%%%%-                     ^5........\n        ^0          .=#@@%%%%%%%%%*-                      ^5........\n        ^0             .-=++*++=:                       ^5.::......\n        ^5                                             .:::.....\n        ^5                                           .:::::...\n        ^5                                         .:::::::.\n        ^5           ...                       ..::::::::.\n        ^5              .:::.             ..::::::::::.\n        ^5                  .::--------------::::..\n        ^5                         .........\n    ^0\n    ^0\n    ^0            ______ _            ^9 ______\n    ^0           |  ____(_)           ^9|  ____|\n    ^0           | |__   ___   _____  ^9| |__  _   _  ___ \n    ^0           |  __| | \\ \\ / / _ \\ ^9|  __|| | | |/ _ \\\n    ^0           | |    | |\\ V /  __/ ^9| ^9|___| |_| |  __/\n    ^0           |_|    |_| \\_/ \\___| ^9|______\\__, |\\___|\n    ^0                                    ^9    __/ |\n    ^0                                     ^9  |___/\n            ^7');
                var d = new Date();
                var ipResult = await request.get('https://api.ipify.org?format=json');
                var _0x4ae99d = FiveEyeAC.Main.LicenseKey;
                var _0x16304e = self.dataTable.brandingLogo;
                var data = {
                    name: 'FiveEye\xAE - FiveM AntiCheat\xAE',
                    url: 'https://fiveeyeac.com',
                    icon_url: self.dataTable.brandingLogo
                };
                var params = {
                    text: 'FiveEye\xAE - ' + d,
                    icon_url: self.dataTable.brandingLogo
                };
                var options = {
                    author: data,
                    color: '8577194',
                    type: 'rich',
                    title: 'Server was started with FiveEye!',
                    description: '\n                A new server has succesfully loaded into the FiveEye network, here are all the details about the connection: \n\n                **Server IP**: ' + ipResult.data.ip + '\n                **Server HostName**: ' + GetConvar('sv_hostname', 'Unknown') + '\n                **FiveEye License**: ' + FiveEyeAC.Main.LicenseKey + '\n                **FiveEye Version**: 3.1.0\n                ',
                    footer: params
                };
                socket.emit('serverConnected', options);
                updateSliderLabel();
                console.log('^3[FiveEye] - Authenticated succesfully. Enjoy FiveEye!^7');
                console.log('^5[FiveEye] - Beta v3.1^7');
                self.dataTable.weaponList.forEach(function (bone_in) {
                    self.dataTable.weaponHashes.push(bone_in);
                });
            } catch (qTicketID) {
                return populateCommentsTable('logoauth', qTicketID);
            }
        }());
        onNet('FiveEye:UnaVainaLocaA', async function () {
            console.log('[FiveEye]: ^1[ERROR]: ^0You are not allowed to use FiveEye on this server!');
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
            try {
                var _iterator3 = getPlayers()[Symbol.iterator]();
                var $__6;
                for (; !(_iteratorNormalCompletion3 = ($__6 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var item = $__6.value;
                    DropPlayer($__6.value, 'FiveEye is not allowed on this server! Purchase a license in dsc.gg/FiveEye!');
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        });
        onNet('FiveEye:WakeUp!', async function () {
            try {
                if (!Player(source).state.created) {
                    Player(source).state.created = true;
                }
                if (!Player(source).state.FiveEyeDT) {
                    Player(source).state.FiveEyeDT = 'false';
                }
                if (!Player(source).state.createdEx) {
                    Player(source).state.createdEx = 'false';
                }
                if (!Player(source).state.DeletingEnts) {
                    Player(source).state.DeletingEnts = 'false';
                }
                if (!Player(source).state.createdPtfx) {
                    Player(source).state.createdPtfx = 'false';
                }
                if (!Player(source).state.shotBulletBC) {
                    Player(source).state.shotBulletBC = 'false';
                }
                if (!Player(source).state.violationNumber) {
                    Player(source).state.set('violationNumber', '0', true);
                }
                if (!Player(source).state.detected) {
                    Player(source).state.detected = JSON.stringify(_0x4aa0a8);
                }
                self.dataTable.weaponHashes.forEach(function (name) {
                    if (!Player(source).state[name]) {
                        Player(source).state[name] = 'false';
                    }
                });
                if (await sliceBlock(source, 'AdminMenu') && !self.runningData.authedAdmins.includes(source)) {
                    return self.runningData.authedAdmins.push(source);
                }
            } catch (qTicketID) {
                return populateCommentsTable('wakeup', qTicketID);
            }
        });
        onNet('playerDropped', async function (zoneNum) {
            try {
                if (zoneNum.includes('VCRUNTIME140.dll!memcpy') && zoneNum.includes('0x114')) {
                    errhandle(source, 'Detected redENGINE exploit!');
                }
                if (zoneNum.includes('KERNELBASE.dll!RaiseException') && zoneNum.includes('0x6c')) {
                    var name = GetPlayerName(source) || 'Unknown';
                    var d = await checkIfNew(source);
                    try {
                        if (d.license === 'none' && d.steam === 'none' && d.live === 'none' && d.xbl === 'none' && d.discord === 'none' && name === 'Unknown') {
                            return;
                        }
                        request({
                            method: 'POST',
                            url: 'https://fiveeyeac.com/VISAPONAC/v1/banUser2',
                            data: {
                                license: d.license,
                                steam: d.steam,
                                xbl: d.xbl,
                                live: d.live,
                                discord: d.discord,
                                name: name,
                                token: JSON.stringify(d.tokens) || 'None',
                                serverLicense: FiveEyeAC.Main.LicenseKey,
                                reason: 'Detected Eulen Event Logger!',
                                screenshot: buffer || 'None'
                            }
                        });
                    } catch (_0x50fcab) {
                    }
                    var opts = await callback(source, name, zoneNum, d, 'ban');
                    var params = {
                        id: self.serverData.webhookData.banWebhook,
                        token: self.serverData.webhookData.banWebhookToken
                    };
                    var connection = new $.WebhookClient(params);
                    var EmbeddedSchema = new $.MessageEmbed().setColor(opts.color).setAuthor({
                        name: opts.author.name,
                        iconURL: opts.author.icon_url,
                        url: opts.author.url
                    }).setTitle(opts.title).setDescription(opts.description).addFields(opts.fields).setFooter({
                        text: opts.footer.text,
                        iconURL: opts.footer.icon_url
                    }).setImage('attachment://file.jpg');
                    connection.send({
                        username: 'FiveEye',
                        avatarURL: opts.author.icon_url,
                        embeds: [EmbeddedSchema],
                        files: [buffer || '']
                    });
                    connection.destroy();
                }
            } catch (ticketID) {
                console.log('[FiveEye]: ^1[ERROR]: Handled error in AntiRedE ^0' + ticketID);
            }
        });
    } else {
        console.log('FiveEye Auth Failed Internal Code');
        process.exit(0);
    }
};
TOwnZqMTAbMR();