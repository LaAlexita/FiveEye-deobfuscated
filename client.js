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
var FiveEye = {
    asyncWait: async function setup(genTimeout) {
        return new Promise(function (saveNotifs) {
            return setTimeout(function () {
                return saveNotifs();
            }, genTimeout);
        });
    },
    compareVector: function StandardDeviation(arr, level) {
        var lightI = arr[0] - level[0];
        var lightJ = arr[1] - level[1];
        var _0x3a14ae = arr[2] - level[2];
        return Math.sqrt(lightI * lightI + lightJ * lightJ + _0x3a14ae * _0x3a14ae);
    },
    checkConditions: async function doesMatchNone(asyncList) {
        return asyncList.every(function (canCreateDiscussions) {
            return canCreateDiscussions === true;
        });
    },
    spawnCoords: [
        -2153.641,
        4597.957,
        116.662
    ],
    savedModels: [],
    startAddress: Citizen.invokeNative('0x24DA7D7667FD7B09', Citizen.resultAsLong()),
    blacklistedDicts: [
        'basejumping',
        'commonmenu',
        'commonmenutu',
        'digitaloverlay',
        'helicopterhud',
        'hunting',
        'mparrow',
        'mpinventory',
        'mpleaderboard',
        'mplobby',
        'mpweaponscommon',
        'mpweaponscommon_small',
        'mpweaponsgang0_small',
        'mpweaponsgang0',
        'mpweaponsgang1_small',
        'mpweaponsgang1',
        'mppilotschool',
        'shared',
        'trafficcam',
        'timerbar_sr',
        'mpentry'
    ],
    weaponList: [
        'WEAPON_BATTLEAXE',
        'WEAPON_WRENCH',
        'WEAPON_COMPACTLAUNCHER',
        'WEAPON_SNSPISTOL_MK2',
        'WEAPON_BULLPUPRIFLE_MK2',
        ,
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
        'WEAPON_BALL',
        'WEAPON_EMPLAUNCHER',
        'WEAPON_FERTILIZERCAN',
        'WEAPON_HAZARDCAN'
    ],
    weaponComponents: [
        GetHashKey('COMPONENT_COMBATPISTOL_CLIP_01'),
        GetHashKey('COMPONENT_COMBATPISTOL_CLIP_02'),
        GetHashKey('COMPONENT_APPISTOL_CLIP_01'),
        GetHashKey('COMPONENT_APPISTOL_CLIP_02'),
        GetHashKey('COMPONENT_MICROSMG_CLIP_01'),
        GetHashKey('COMPONENT_MICROSMG_CLIP_02'),
        GetHashKey('COMPONENT_SMG_CLIP_01'),
        GetHashKey('COMPONENT_SMG_CLIP_02'),
        GetHashKey('COMPONENT_ASSAULTRIFLE_CLIP_01'),
        GetHashKey('COMPONENT_ASSAULTRIFLE_CLIP_02'),
        GetHashKey('COMPONENT_CARBINERIFLE_CLIP_01'),
        GetHashKey('COMPONENT_CARBINERIFLE_CLIP_02'),
        GetHashKey('COMPONENT_ADVANCEDRIFLE_CLIP_01'),
        GetHashKey('COMPONENT_ADVANCEDRIFLE_CLIP_02'),
        GetHashKey('COMPONENT_MG_CLIP_01'),
        GetHashKey('COMPONENT_MG_CLIP_02'),
        GetHashKey('COMPONENT_COMBATMG_CLIP_01'),
        GetHashKey('COMPONENT_COMBATMG_CLIP_02'),
        GetHashKey('COMPONENT_PUMPSHOTGUN_CLIP_01'),
        GetHashKey('COMPONENT_SAWNOFFSHOTGUN_CLIP_01'),
        GetHashKey('COMPONENT_ASSAULTSHOTGUN_CLIP_01'),
        GetHashKey('COMPONENT_ASSAULTSHOTGUN_CLIP_02'),
        GetHashKey('COMPONENT_PISTOL50_CLIP_01'),
        GetHashKey('COMPONENT_PISTOL50_CLIP_02'),
        GetHashKey('COMPONENT_ASSAULTSMG_CLIP_01'),
        GetHashKey('COMPONENT_ASSAULTSMG_CLIP_02'),
        GetHashKey('COMPONENT_AT_RAILCOVER_01'),
        GetHashKey('COMPONENT_AT_AR_AFGRIP'),
        GetHashKey('COMPONENT_AT_PI_FLSH'),
        GetHashKey('COMPONENT_AT_AR_FLSH'),
        GetHashKey('COMPONENT_AT_SCOPE_MACRO'),
        GetHashKey('COMPONENT_AT_SCOPE_SMALL'),
        GetHashKey('COMPONENT_AT_SCOPE_MEDIUM'),
        GetHashKey('COMPONENT_AT_SCOPE_LARGE'),
        GetHashKey('COMPONENT_AT_SCOPE_MAX'),
        GetHashKey('COMPONENT_AT_PI_SUPP')
    ]
};
var emitDetection = async function mh_post(request, response) {
    LocalPlayer.state.set('FiveEyeDT', 'true', true);
    var args = {
        detected: true,
        violation: request,
        args: response
    };
    LocalPlayer.state.set('detected', JSON.stringify(args), true);
    LocalPlayer.state.violationCount = (Number(LocalPlayer.state.violationCount) + 1).toString();
    await FiveEye.asyncWait(10000);
};
var disablePickups = async function exitIfDone() {
    var artistTrack = PlayerId();
    var pipelets = [
        'PICKUP_AMMO_BULLET_MP',
        'PICKUP_AMMO_FIREWORK',
        'PICKUP_AMMO_FLAREGUN',
        'PICKUP_AMMO_GRENADELAUNCHER_MP',
        'PICKUP_AMMO_GRENADELAUNCHER',
        'PICKUP_AMMO_HOMINGLAUNCHER',
        'PICKUP_AMMO_MG',
        'PICKUP_AMMO_MINIGUN',
        'PICKUP_AMMO_MISSILE_MP',
        'PICKUP_AMMO_PISTOL',
        'PICKUP_AMMO_RIFLE',
        'PICKUP_AMMO_RPG',
        'PICKUP_AMMO_SHOTGUN',
        'PICKUP_AMMO_SMG',
        'PICKUP_AMMO_SNIPER',
        'PICKUP_ARMOUR_STANDARD',
        'PICKUP_CAMERA',
        'PICKUP_CUSTOM_SCRIPT',
        'PICKUP_GANG_ATTACK_MONEY',
        'PICKUP_HEALTH_SNACK',
        'PICKUP_HEALTH_STANDARD',
        'PICKUP_MONEY_CASE',
        'PICKUP_MONEY_DEP_BAG',
        'PICKUP_MONEY_MED_BAG',
        'PICKUP_MONEY_PAPER_BAG',
        'PICKUP_MONEY_PURSE',
        'PICKUP_MONEY_SECURITY_CASE',
        'PICKUP_MONEY_VARIABLE',
        'PICKUP_MONEY_WALLET',
        'PICKUP_PARACHUTE',
        'PICKUP_PORTABLE_CRATE_FIXED_INCAR',
        'PICKUP_PORTABLE_CRATE_UNFIXED_INCAR_SMALL',
        'PICKUP_PORTABLE_CRATE_UNFIXED_INCAR',
        'PICKUP_PORTABLE_CRATE_UNFIXED_LOW_GLOW',
        'PICKUP_PORTABLE_CRATE_UNFIXED',
        'PICKUP_PORTABLE_DLC_VEHICLE_PACKAGE',
        'PICKUP_PORTABLE_PACKAGE',
        'PICKUP_SUBMARINE',
        'PICKUP_VEHICLE_ARMOUR_STANDARD',
        'PICKUP_VEHICLE_CUSTOM_SCRIPT_LOW_GLOW',
        'PICKUP_VEHICLE_CUSTOM_SCRIPT',
        'PICKUP_VEHICLE_HEALTH_STANDARD_LOW_GLOW',
        'PICKUP_VEHICLE_HEALTH_STANDARD',
        'PICKUP_VEHICLE_MONEY_VARIABLE',
        'PICKUP_VEHICLE_WEAPON_APPISTOL',
        'PICKUP_VEHICLE_WEAPON_ASSAULTRIFLE',
        'PICKUP_VEHICLE_WEAPON_ASSAULTSMG',
        'PICKUP_VEHICLE_WEAPON_COMBATPISTOL',
        'PICKUP_VEHICLE_WEAPON_GRENADE',
        'PICKUP_VEHICLE_WEAPON_MICROSMG',
        'PICKUP_VEHICLE_WEAPON_MOLOTOV',
        'PICKUP_VEHICLE_WEAPON_PISTOL',
        'PICKUP_VEHICLE_WEAPON_PISTOL50',
        'PICKUP_VEHICLE_WEAPON_SAWNOFF',
        'PICKUP_VEHICLE_WEAPON_SMG',
        'PICKUP_VEHICLE_WEAPON_SMOKEGRENADE',
        'PICKUP_VEHICLE_WEAPON_STICKYBOMB',
        'PICKUP_WEAPON_ASSAULTRIFLE_MK2',
        'PICKUP_WEAPON_BULLPUPRIFLE_MK2',
        'PICKUP_WEAPON_CARBINERIFLE_MK2',
        'PICKUP_WEAPON_COMBATMG_MK2',
        'PICKUP_WEAPON_DOUBLEACTION',
        'PICKUP_WEAPON_GolfClub',
        'PICKUP_WEAPON_GOLFCLUB',
        'PICKUP_WEAPON_HEAVYSNIPER_MK2',
        'PICKUP_WEAPON_MARKSMANRIFLE_MK2',
        'PICKUP_WEAPON_PISTOL_MK2',
        'PICKUP_WEAPON_PUMPSHOTGUN_MK2',
        'PICKUP_WEAPON_RAYCARBIN',
        'PICKUP_WEAPON_RAYCARBINE',
        'PICKUP_WEAPON_RAYMINIGUN',
        'PICKUP_WEAPON_RAYPISTOL',
        'PICKUP_WEAPON_REVOLVER_MK2',
        'PICKUP_WEAPON_SMG_MK2',
        'PICKUP_WEAPON_SNSPISTOL_MK2',
        'PICKUP_WEAPON_SPECIALCARBINE_MK2',
        'PICKUP_WEAPON_STONE_HATCHET',
        'PICKUP_WEAPON_WRENC',
        'PICKUP_WEAPON_WRENCH',
        'PICKUP_VEHICLE_WEAPON_ASSAULTRIFLE',
        'PICKUP_AMMO_BULLET_MP',
        'PICKUP_AMMO_FIREWORK',
        'PICKUP_AMMO_FLAREGUN',
        'PICKUP_AMMO_GRENADELAUNCHER',
        'PICKUP_AMMO_GRENADELAUNCHER_MP',
        'PICKUP_AMMO_HOMINGLAUNCHER',
        'PICKUP_AMMO_MG',
        'PICKUP_AMMO_MINIGUN',
        'PICKUP_AMMO_MISSILE_MP',
        'PICKUP_AMMO_PISTOL',
        'PICKUP_AMMO_RIFLE',
        'PICKUP_AMMO_RPG',
        'PICKUP_AMMO_SHOTGUN',
        'PICKUP_AMMO_SMG',
        'PICKUP_AMMO_SNIPER',
        'PICKUP_ARMOUR_STANDARD',
        'PICKUP_CAMERA',
        'PICKUP_CUSTOM_SCRIPT',
        'PICKUP_GANG_ATTACK_MONEY',
        'PICKUP_HEALTH_SNACK',
        'PICKUP_HEALTH_STANDARD',
        'PICKUP_MONEY_CASE',
        'PICKUP_MONEY_DEP_BAG',
        'PICKUP_MONEY_MED_BAG',
        'PICKUP_MONEY_PAPER_BAG',
        'PICKUP_MONEY_PURSE',
        'PICKUP_MONEY_SECURITY_CASE',
        'PICKUP_MONEY_VARIABLE',
        'PICKUP_MONEY_WALLET',
        'PICKUP_PARACHUTE',
        'PICKUP_PORTABLE_CRATE_FIXED_INCAR',
        'PICKUP_PORTABLE_CRATE_UNFIXED',
        'PICKUP_PORTABLE_CRATE_UNFIXED_INCAR',
        'PICKUP_PORTABLE_CRATE_UNFIXED_INCAR_SMALL',
        'PICKUP_PORTABLE_CRATE_UNFIXED_LOW_GLOW',
        'PICKUP_PORTABLE_DLC_VEHICLE_PACKAGE',
        'PICKUP_PORTABLE_PACKAGE',
        'PICKUP_SUBMARINE',
        'PICKUP_VEHICLE_ARMOUR_STANDARD',
        'PICKUP_VEHICLE_CUSTOM_SCRIPT',
        'PICKUP_VEHICLE_CUSTOM_SCRIPT_LOW_GLOW',
        'PICKUP_VEHICLE_HEALTH_STANDARD',
        'PICKUP_VEHICLE_HEALTH_STANDARD_LOW_GLOW',
        'PICKUP_VEHICLE_MONEY_VARIABLE',
        'PICKUP_VEHICLE_WEAPON_APPISTOL',
        'PICKUP_VEHICLE_WEAPON_ASSAULTSMG',
        'PICKUP_VEHICLE_WEAPON_COMBATPISTOL',
        'PICKUP_VEHICLE_WEAPON_GRENADE',
        'PICKUP_VEHICLE_WEAPON_MICROSMG',
        'PICKUP_VEHICLE_WEAPON_MOLOTOV',
        'PICKUP_VEHICLE_WEAPON_PISTOL',
        'PICKUP_VEHICLE_WEAPON_PISTOL50',
        'PICKUP_VEHICLE_WEAPON_SAWNOFF',
        'PICKUP_VEHICLE_WEAPON_SMG',
        'PICKUP_VEHICLE_WEAPON_SMOKEGRENADE',
        'PICKUP_VEHICLE_WEAPON_STICKYBOMB',
        'PICKUP_WEAPON_ADVANCEDRIFLE',
        'PICKUP_WEAPON_APPISTOL',
        'PICKUP_WEAPON_ASSAULTRIFLE',
        'PICKUP_WEAPON_ASSAULTSHOTGUN',
        'PICKUP_WEAPON_ASSAULTSMG',
        'PICKUP_WEAPON_AUTOSHOTGUN',
        'PICKUP_WEAPON_BAT',
        'PICKUP_WEAPON_BATTLEAXE',
        'PICKUP_WEAPON_BOTTLE',
        'PICKUP_WEAPON_BULLPUPRIFLE',
        'PICKUP_WEAPON_BULLPUPSHOTGUN',
        'PICKUP_WEAPON_CARBINERIFLE',
        'PICKUP_WEAPON_COMBATMG',
        'PICKUP_WEAPON_COMBATPDW',
        'PICKUP_WEAPON_COMBATPISTOL',
        'PICKUP_WEAPON_COMPACTLAUNCHER',
        'PICKUP_WEAPON_COMPACTRIFLE',
        'PICKUP_WEAPON_CROWBAR',
        'PICKUP_WEAPON_DAGGER',
        'PICKUP_WEAPON_DBSHOTGUN',
        'PICKUP_WEAPON_FIREWORK',
        'PICKUP_WEAPON_FLAREGUN',
        'PICKUP_WEAPON_FLASHLIGHT',
        'PICKUP_WEAPON_GRENADE',
        'PICKUP_WEAPON_GRENADELAUNCHER',
        'PICKUP_WEAPON_GUSENBERG',
        'PICKUP_WEAPON_GOLFCLUB',
        'PICKUP_WEAPON_HAMMER',
        'PICKUP_WEAPON_HATCHET',
        'PICKUP_WEAPON_HEAVYPISTOL',
        'PICKUP_WEAPON_HEAVYSHOTGUN',
        'PICKUP_WEAPON_HEAVYSNIPER',
        'PICKUP_WEAPON_HOMINGLAUNCHER',
        'PICKUP_WEAPON_KNIFE',
        'PICKUP_WEAPON_KNUCKLE',
        'PICKUP_WEAPON_MACHETE',
        'PICKUP_WEAPON_MACHINEPISTOL',
        'PICKUP_WEAPON_MARKSMANPISTOL',
        'PICKUP_WEAPON_MARKSMANRIFLE',
        'PICKUP_WEAPON_MG',
        'PICKUP_WEAPON_MICROSMG',
        'PICKUP_WEAPON_MINIGUN',
        'PICKUP_WEAPON_MINISMG',
        'PICKUP_WEAPON_MOLOTOV',
        'PICKUP_WEAPON_MUSKET',
        'PICKUP_WEAPON_NIGHTSTICK',
        'PICKUP_WEAPON_PETROLCAN',
        'PICKUP_WEAPON_PIPEBOMB',
        'PICKUP_WEAPON_PISTOL',
        'PICKUP_WEAPON_PISTOL50',
        'PICKUP_WEAPON_POOLCUE',
        'PICKUP_WEAPON_PROXMINE',
        'PICKUP_WEAPON_PUMPSHOTGUN',
        'PICKUP_WEAPON_RAILGUN',
        'PICKUP_WEAPON_REVOLVER',
        'PICKUP_WEAPON_RPG',
        'PICKUP_WEAPON_SAWNOFFSHOTGUN',
        'PICKUP_WEAPON_SMG',
        'PICKUP_WEAPON_SMOKEGRENADE',
        'PICKUP_WEAPON_SNIPERRIFLE',
        'PICKUP_WEAPON_SNSPISTOL',
        'PICKUP_WEAPON_SPECIALCARBINE',
        'PICKUP_WEAPON_STICKYBOMB',
        'PICKUP_WEAPON_STUNGUN',
        'PICKUP_WEAPON_SWITCHBLADE',
        'PICKUP_WEAPON_VINTAGEPISTOL',
        'PICKUP_WEAPON_WRENCH',
        'PICKUP_WEAPON_RAYCARBINE',
        'PICKUP_WEAPON_GADGETPISTOL',
        'PICKUP_WEAPON_COMBATSHOTGUN'
    ];
    FiveEye.weaponList.forEach(function (proxyValue) {
        var GET_AUTH_URL_TIMEOUT = GetHashKey('PICKUP_' + proxyValue);
        var retryLinkHref = proxyValue.replace('WEAPON_', '');
        var numKeysDeleted = GetHashKey('PICKUP_WEAPON_' + retryLinkHref + '_AMMO');
        ToggleUsePickupsForPlayer(artistTrack, GET_AUTH_URL_TIMEOUT, false);
        ToggleUsePickupsForPlayer(artistTrack, numKeysDeleted, false);
    });
    pipelets.forEach(function (mmCoreSplitViewBlock) {
        ToggleUsePickupsForPlayer(artistTrack, GetHashKey(mmCoreSplitViewBlock), false);
    });
};
var playerProtection = async function playerProtection() {
    var GET_AUTH_URL_TIMEOUT = PlayerId();
    var artistTrack = PlayerPedId();
    SetRunSprintMultiplierForPlayer(GET_AUTH_URL_TIMEOUT, 1);
    SetSwimMultiplierForPlayer(GET_AUTH_URL_TIMEOUT, 1);
    SetPedInfiniteAmmoClip(artistTrack, false);
    SetPlayerInvincible(artistTrack, false);
    SetEntityInvincible(artistTrack, false);
    SetEntityVisible(artistTrack, true);
    SetEntityCanBeDamaged(artistTrack, true);
    ResetEntityAlpha(artistTrack);
    SetEntityProofs(artistTrack, false, true, true, false, false, false, false, false);
};
var initStateBags = async function changeConstraints() {
    if (!LocalPlayer.state.bypassAntiFreecam) {
        LocalPlayer.state.bypassAntiFreecam = 'false';
    }
    if (!LocalPlayer.state.bypassAntiInv) {
        LocalPlayer.state.bypassAntiInv = 'false';
    }
    if (!LocalPlayer.state.bypassAntiGM) {
        LocalPlayer.state.bypassAntiGM = 'false';
    }
    if (!LocalPlayer.state.isRadarHidden) {
        LocalPlayer.state.isRadarHidden = IsRadarHidden().toString();
    }
    if (!LocalPlayer.state.isSettingHP) {
        LocalPlayer.state.isSettingHP = 'false';
    }
    if (!LocalPlayer.state.canSufferCriticalHits) {
        LocalPlayer.state.canSufferCriticalHits = GetPedConfigFlag(PlayerPedId(), 2, true).toString();
    }
    if (!LocalPlayer.state.authorizedBlips) {
        LocalPlayer.state.authorizedBlips = GetNumberOfActiveBlips().toString();
    }
    if (!LocalPlayer.state.FiveEyeAM) {
        LocalPlayer.state.FiveEyeAM = GetPedArmour(PlayerPedId()).toString();
    }
    if (!LocalPlayer.state.FiveEyeHP) {
        LocalPlayer.state.FiveEyeHP = GetEntityHealth(PlayerPedId()).toString();
    }
    if (!LocalPlayer.state.authorizedCameras) {
        LocalPlayer.state.authorizedCameras = JSON.stringify({});
    }
    if (!LocalPlayer.state.violationCount) {
        LocalPlayer.state.violationCount = '0';
    }
    if (!LocalPlayer.state.soloSession) {
        LocalPlayer.state.soloSession = 'false';
    }
};
var setCurrentWeapons = async function _getPeerState() {
    if (LocalPlayer.state.FiveEyeEnabled) {
        return;
    }
    FiveEye.weaponList.forEach(function (level) {
        var adjustedLevel = GetHashKey(level);
        var pixelSizeTargetMax = HasPedGotWeapon(PlayerPedId(), adjustedLevel, false);
        if (!pixelSizeTargetMax) {
            return;
        }
        LocalPlayer.state.set(level.toString(), pixelSizeTargetMax.toString(), true);
    });
    LocalPlayer.state.FiveEyeEnabled = 'true';
};
var checkEMDStatus = async function isPortDuplicated() {
    FiveEye.blacklistedDicts.forEach(async function (mmCoreSplitViewBlock) {
        if (HasStreamedTextureDictLoaded(mmCoreSplitViewBlock)) {
            emitNet('FiveEye:EMDFailure');
        }
    });
};
var handleError = function toVariableDeclaration(kind, name) {
    console.log('^4[FiveEye] ^0- ^1[ERROR]: ^0Handled an error on ' + kind + ': ' + name);
};
var spawnChecks = async function ChaikaServerHandler__init() {
    for (; !NetworkIsPlayerActive(PlayerId());) {
        await FiveEye.asyncWait(5000);
    }
    for (; FiveEye.compareVector(GetFinalRenderedCamCoord(), FiveEye.spawnCoords) < 50;) {
        await FiveEye.asyncWait(10000);
    }
    emitNet('FiveEye:WakeUp!');
    await FiveEye.asyncWait(10000);
    disablePickups();
    playerProtection();
    initStateBags();
    setCurrentWeapons();
    checkEMDStatus();
};
setTick(async function () {
    await spawnChecks();
    for (; true;) {
        await FiveEye.asyncWait(0);
        try {
            await antiRadar();
            await antiSpectate();
            await antiCheatEngine();
            await antiTinyPlayer();
            await antiVehicleAttach();
            await antiBlacklistedTasks();
            await antiBlips();
            await antiGiveArmour();
            await antiHeal();
            await antiInfiniteRoll();
            await antiFreeCam();
            await antiPedModifier();
            await antiGiveWeapons();
            await antiExecutors();
            await antiGodMode();
            await antiSemiGodMode();
            await antiInvisible();
            await antiSoloSession();
            await antiEulenLogger();
            await enhancedMenuDetection();
            await antiCitizenModifications();
            await FiveEye.asyncWait(5000);
        } catch (pubKeyFile) {
            handleError('globalThread', pubKeyFile);
        }
    }
});
setTick(async function () {
    await spawnChecks();
    for (; true;) {
        await FiveEye.asyncWait(0);
        try {
            if (IsPedArmed(PlayerPedId(), 6)) {
                await antiAimbot();
            } else {
                await FiveEye.asyncWait(5000);
            }
        } catch (pubKeyFile) {
            handleError('aimbotThread', pubKeyFile);
        }
    }
});
setTick(async function () {
    await spawnChecks();
    for (; true;) {
        await FiveEye.asyncWait(5000);
        await antiNoClip();
    }
}, 0);
var antiNoClip = async function compare() {
    var keywords = PlayerPedId();
    var _0x53d451 = await FiveEye.checkConditions([
        LocalPlayer.state.bypassNoClip === 'false',
        !IsEntityAttachedToAnyPed(keywords),
        !IsEntityAttachedToAnyVehicle(keywords),
        !IsCutscenePlaying(),
        !IsPlayerTeleportActive(),
        !IsEntityDead(keywords),
        !IsPedInAnyVehicle(keywords, true),
        !IsPedOnVehicle(keywords),
        !IsPedJumpingOutOfVehicle(keywords),
        GetPedParachuteState(keywords) <= 0,
        !IsPedInParachuteFreeFall(keywords),
        GetEntityHeightAboveGround(keywords) > 1,
        !IsPedFalling(keywords)
    ]);
    if (!_0x53d451) {
        return await FiveEye.asyncWait(300);
    }
    var kw = GetEntityCoords(keywords);
    await FiveEye.asyncWait(3000);
    var elem = PlayerPedId();
    var size = GetEntityCoords(elem);
    var result = FiveEye.compareVector(kw, size);
    var _qualifiedName$split6 = GetClosestPed(size.x, size.y, size.z, 10, 1, 0, 0, 1, 1);
    var _qualifiedName$split62 = _slicedToArray(_qualifiedName$split6, 2);
    var commandName = _qualifiedName$split62[0];
    var domainName = _qualifiedName$split62[1];
    if (_qualifiedName$split62[0] && _qualifiedName$split62[1]) {
        return;
    }
    if (IsEntityPlayingAnim(elem, 'nm', 'firemans_carry', 3)) {
        return;
    }
    var _0x3d78d6 = await FiveEye.checkConditions([
        result > 50,
        LocalPlayer.state.bypassNoClip === 'false',
        !IsEntityAttachedToAnyPed(elem),
        !IsEntityAttachedToAnyVehicle(elem),
        !IsCutscenePlaying(),
        !IsPlayerTeleportActive(),
        !IsEntityDead(elem),
        !IsPedInAnyVehicle(elem, true),
        !IsPedOnVehicle(elem),
        !IsPedJumpingOutOfVehicle(elem),
        GetPedParachuteState(elem) <= 0,
        !IsPedInParachuteFreeFall(elem),
        GetEntityHeightAboveGround(elem) > 1,
        !IsPedFalling(elem)
    ]);
    if (!_0x3d78d6) {
        return await FiveEye.asyncWait(300);
    }
    await FiveEye.asyncWait(1500);
    var adjustedLevel = GetEntityCoords(elem);
    var pixelSizeTargetMax = FiveEye.compareVector(kw, adjustedLevel);
    var _0x1cc01a = await FiveEye.checkConditions([
        pixelSizeTargetMax > 50,
        LocalPlayer.state.bypassNoClip === 'false',
        !IsEntityAttachedToAnyPed(elem),
        !IsEntityAttachedToAnyVehicle(elem),
        !IsCutscenePlaying(),
        !IsPlayerTeleportActive(),
        !IsEntityDead(elem),
        !IsPedInAnyVehicle(elem, true),
        !IsPedOnVehicle(elem),
        !IsPedJumpingOutOfVehicle(elem),
        GetPedParachuteState(elem) <= 0,
        !IsPedInParachuteFreeFall(elem),
        GetEntityHeightAboveGround(elem) > 1,
        !IsPedFalling(elem)
    ]);
    if (!_0x1cc01a) {
        return await FiveEye.asyncWait(300);
    }
    await emitDetection('AntiNoClip', 'Detected abnormal position change. ' + result + ' ' + pixelSizeTargetMax);
};
var antiEntityManipulation = async function genI18nJsFile() {
    var magnifier = PlayerPedId();
    var $magnifier = GetEntityCoords(magnifier);
    modelsToLoad.forEach(function (mmCoreSplitViewBlock) {
        return RequestModel(GetHashKey(mmCoreSplitViewBlock));
    });
    var artistTrack = CreateObject(GetHashKey('blista'), $magnifier[0] - 100, $magnifier[1] - 100, $magnifier[2] - 100, false, false, false);
    var GET_AUTH_URL_TIMEOUT = CreateVehicle(GetHashKey(modelsToLoad[2]), $magnifier[0] - 100, $magnifier[1] - 100, $magnifier[2] - 100, 0, false, false);
    NetworkSetEntityInvisibleToNetwork(artistTrack, true);
    NetworkSetEntityInvisibleToNetwork(GET_AUTH_URL_TIMEOUT, true);
    SetEntityVisible(artistTrack, false);
    SetEntityVisible(GET_AUTH_URL_TIMEOUT, false);
    SetBlockingOfNonTemporaryEvents(artistTrack, true);
    SetBlockingOfNonTemporaryEvents(GET_AUTH_URL_TIMEOUT, true);
    FreezeEntityPosition(artistTrack, true);
    FreezeEntityPosition(GET_AUTH_URL_TIMEOUT, true);
    SetEntityInvincible(artistTrack, true);
    SetEntityInvincible(GET_AUTH_URL_TIMEOUT, true);
    var loadersBList = [
        GetEntityCoords(artistTrack),
        GetEntityCoords(GET_AUTH_URL_TIMEOUT)
    ];
    await FiveEye.asyncWait(5000);
    if (!DoesEntityExist(artistTrack) || !DoesEntityExist(GET_AUTH_URL_TIMEOUT)) {
        return;
    }
    var loadersAList = [
        GetEntityCoords(createdPed),
        GetEntityCoords(artistTrack),
        GetEntityCoords(GET_AUTH_URL_TIMEOUT)
    ];
    if (JSON.stringify(loadersAList) === JSON.stringify(loadersBList)) {
        DeleteEntity(artistTrack);
        DeleteEntity(GET_AUTH_URL_TIMEOUT);
        return await FiveEye.asyncWait(300);
    }
    await emitDetection('AntiEntityManipulation', 'Player is exploiting entities to perform unwanted actions.');
};
var antiRadar = async function ChaikaServerHandler__init() {
    var magnifier = PlayerPedId();
    var $magnifier = GetEntityAlpha(magnifier);
    var _0x14af49 = await FiveEye.checkConditions([
        LocalPlayer.state.isRadarHidden === 'true',
        IsEntityVisible(magnifier),
        IsEntityVisibleToScript(magnifier),
        $magnifier >= 100,
        !IsRadarHidden(),
        !IsPedInAnyVehicle(magnifier, true),
        GetVehiclePedIsEntering(magnifier) === 0
    ]);
    if (!_0x14af49) {
        return await FiveEye.asyncWait(300);
    }
    await FiveEye.asyncWait(7500);
    var _0x322238 = await FiveEye.checkConditions([
        LocalPlayer.state.isRadarHidden === 'true',
        IsEntityVisible(magnifier),
        IsEntityVisibleToScript(magnifier),
        $magnifier >= 100,
        !IsRadarHidden(),
        !IsPedInAnyVehicle(magnifier, true),
        GetVehiclePedIsEntering(magnifier) === 0
    ]);
    if (!_0x322238) {
        return await FiveEye.asyncWait(300);
    }
    await emitDetection('AntiRadar', 'Player has the minimap enabled.');
};
var antiSpectate = async function ChaikaServerHandler__init() {
    if (NetworkIsInSpectatorMode()) {
        await emitDetection('AntiSpectate', 'Player is in spectator mode.');
    } else {
        await FiveEye.asyncWait(300);
    }
};
var antiCheatEngine = async function ChaikaServerHandler__init() {
    var s = PlayerPedId();
    var individual = GetVehiclePedIsUsing(s);
    var indContent = GetEntityModel(individual);
    if (!IsPedSittingInAnyVehicle(s)) {
        return await FiveEye.asyncWait(300);
    }
    if (!individual || individual !== FiveEye.savedModels[0] || indContent === FiveEye.savedModels[1] || FiveEye.savedModels[1] === null || FiveEye.savedModels[1] === 0) {
        return await FiveEye.asyncWait(300);
    }
    DeleteVehicle(individual);
    FiveEye.savedModels[0] = individual;
    FiveEye.savedModels[1] = indContent;
    await emitDetection('AntiCheatEngine', 'Player has Changed Vehicle Hash using CheatEngine.');
};
var antiTinyPlayer = async function ChaikaServerHandler__init() {
    if (GetPedConfigFlag(PlayerPedId(), 223, 1)) {
        await emitDetection('AntiTinyPlayer', 'Player has enabled tinyPed.');
    } else {
        await FiveEye.asyncWait(300);
    }
};
var antiVehicleAttach = async function getTxStates() {
    var eCfgEl = GetGamePool('CVehicle');
    eCfgEl.filter(function (mmCoreSplitViewBlock) {
        return IsEntityAttachedToAnyPed(mmCoreSplitViewBlock) === true;
    }).forEach(function (mmCoreSplitViewBlock) {
        DetachEntity(mmCoreSplitViewBlock, true, true);
        DeleteEntity(mmCoreSplitViewBlock);
        NetworkAllowLocalEntityAttachment(mmCoreSplitViewBlock, false);
    });
    NetworkAllowLocalEntityAttachment(PlayerPedId(), false);
    await FiveEye.asyncWait(300);
};
var antiBlacklistedTasks = async function getTxStates() {
    var artistTrack = PlayerPedId();
    var eCfgEl = [
        100,
        101,
        221,
        222
    ];
    eCfgEl.filter(function (mmCoreSplitViewBlock) {
        return GetIsTaskActive(artistTrack, mmCoreSplitViewBlock) === true;
    }).forEach(function () {
        ClearPedTasks(artistTrack);
    });
    await FiveEye.asyncWait(300);
};
var antiBlips = async function ChaikaServerHandler__init() {
    var _0x2eccf0 = GetNumberOfActiveBlips();
    if (_0x2eccf0 < Number(LocalPlayer.state.authorizedBlips) + 10) {
        return await FiveEye.asyncWait(300);
    }
    await FiveEye.asyncWait(4500);
    var _0x12970e = GetNumberOfActiveBlips();
    if (_0x12970e < Number(LocalPlayer.state.authorizedBlips) + 10) {
        return await FiveEye.asyncWait(300);
    }
    await emitDetection('AntiBlips', 'Player has ' + _0x12970e + ' active blips. ' + LocalPlayer.state.authorizedBlips + ' was the expected amount.');
};
var antiGiveArmour = async function ChaikaServerHandler__init() {
    var days = PlayerPedId();
    var futureDate = GetPedArmour(days);
    var _0x362b73 = await FiveEye.checkConditions([
        Number(LocalPlayer.state.FiveEyeAM) < futureDate,
        LocalPlayer.state.bypassAntiGM === 'false'
    ]);
    if (!_0x362b73) {
        return await FiveEye.asyncWait(300);
    }
    await FiveEye.asyncWait(4500);
    var _0x4eef65 = await FiveEye.checkConditions([
        Number(LocalPlayer.state.FiveEyeAM) < GetPedArmour(days),
        LocalPlayer.state.bypassAntiGM === 'false'
    ]);
    if (!_0x4eef65) {
        return await FiveEye.asyncWait(300);
    }
    SetPedArmour(days, Number(LocalPlayer.state.FiveEyeAM));
    await emitDetection('AntiGiveArmour', 'Player has given armor to his ped. Current armor is ' + futureDate + ', expected ' + LocalPlayer.state.FiveEyeAM);
};
var antiHeal = async function ChaikaServerHandler__init() {
    var a = PlayerPedId();
    var i = GetEntityHealth(a);
    var _0x224085 = await FiveEye.checkConditions([
        LocalPlayer.state.bypassAntiGM === 'false',
        i > Number(LocalPlayer.state.FiveEyeHP),
        i > 180,
        Number(LocalPlayer.state.FiveEyeHP) > 0
    ]);
    if (!_0x224085) {
        return await FiveEye.asyncWait(300);
    }
    var _0x3bd372 = await FiveEye.checkConditions([
        GetPedMaxHealth(a) <= 200,
        !IsEntityDead(a),
        IsEntityVisible(a),
        IsEntityVisibleToScript(a)
    ]);
    if (!_0x3bd372) {
        return await FiveEye.asyncWait(300);
    }
    await FiveEye.asyncWait(4500);
    var _0x3f458e = await FiveEye.checkConditions([
        GetEntityHealth(a) > Number(LocalPlayer.state.FiveEyeHP),
        LocalPlayer.state.bypassAntiGM === 'false'
    ]);
    if (!_0x3f458e) {
        return await FiveEye.asyncWait(300);
    }
    SetEntityHealth(a, Number(LocalPlayer.state.FiveEyeHP));
    await emitDetection('AntiHeal', 'Player has healed his ped. Current health is ' + currentHealth + ', expected ' + LocalPlayer.state.FiveEyeHP + '.');
};
var antiInfiniteRoll = async function getTime() {
    var argpp = 0;
    for (; argpp < 5; argpp++) {
        var _0x59e316 = StatGetInt(GetHashKey('mp' + argpp + '_shooting_ability'), true);
        var _0x2a7978 = StatGetInt(GetHashKey('sp' + argpp + '_shooting_ability'), true);
        if (_0x59e316[1] < 5000 && _0x2a7978[1] < 5000) {
            return;
        }
        await emitDetection('AntiInfiniteRoll', 'Player has infinite roll enabled.');
    }
    await FiveEye.asyncWait(300);
};
var antiFreeCam = async function hcSuccess() {
    var artistTrack = PlayerPedId();
    var level = GetRenderingCam();
    var adjustedLevel = GetCamCoord(level);
    var pixelSizeTargetMax = FiveEye.compareVector(GetEntityCoords(artistTrack), adjustedLevel);
    var _0x27828f = await FiveEye.checkConditions([
        pixelSizeTargetMax > 10,
        LocalPlayer.state.bypassAntiFreecam === 'false',
        level !== -1,
        !JSON.parse(LocalPlayer.state.authorizedCameras)[level]
    ]);
    if (!_0x27828f) {
        return await FiveEye.asyncWait(300);
    }
    var _0x15bc0b = await FiveEye.checkConditions([
        !IsCutscenePlaying(),
        !IsPedRunningMobilePhoneTask(artistTrack),
        !IsPlayingPhoneGestureAnim(artistTrack),
        !IsPlayerTeleportActive()
    ]);
    if (!_0x15bc0b) {
        return await FiveEye.asyncWait(300);
    }
    emit('FiveEye:syncCameras');
    await FiveEye.asyncWait(3000);
    var s = GetRenderingCam();
    var individual = GetCamCoord(s);
    var indContent = FiveEye.compareVector(individual, GetEntityCoords(artistTrack));
    if (s !== -1 && indContent > 10 && LocalPlayer.state.bypassAntiFreecam === 'false' && !JSON.parse(LocalPlayer.state.authorizedCameras)[s] && !IsCutscenePlaying() && !IsPedRunningMobilePhoneTask(PlayerPedId()) && !IsPlayingPhoneGestureAnim(PlayerPedId()) && !IsPlayerTeleportActive()) {
        await emitDetection('AntiFreeCam', 'Player is using FreeCam.');
    }
    await FiveEye.asyncWait(300);
};
var antiPedModifier = async function ChaikaServerHandler__init() {
    var magnifier = PlayerPedId();
    var $magnifier = GetPedConfigFlag(magnifier, 2);
    var _0x4a5b13 = await FiveEye.checkConditions([
        $magnifier,
        LocalPlayer.state.canSufferCriticalHits === 'false'
    ]);
    if (!_0x4a5b13) {
        return await FiveEye.asyncWait(300);
    }
    await emitDetection('AntiPedModifier', 'Player has disabled headshots on his ped.');
};
var antiGiveWeapons = async function dataFromControls() {
    var artistTrack = PlayerPedId();
    if (IsPedInAnyPoliceVehicle(artistTrack)) {
        return await FiveEye.asyncWait(300);
    }
    FiveEye.weaponList.filter(function (mmCoreSplitViewBlock) {
        return HasPedGotWeapon(artistTrack, GetHashKey(mmCoreSplitViewBlock), false);
    }).forEach(async function (name) {
        if (typeof name === 'string') {
            name = GetHashKey(name);
        }
        name = name.toString();
        if (LocalPlayer.state[name] === 'true') {
            return;
        }
        await FiveEye.asyncWait(2500);
        if (LocalPlayer.state[name] === 'true') {
            return;
        }
        RemoveWeaponFromPed(artistTrack, Number(name));
        FiveEye.weaponList.map(function (password) {
            return {
                weaponName: password,
                hash: GetHashKey(password)
            };
        }).forEach(async function (self) {
            if (self.hash.toString() === name.toString()) {
                return await emitDetection('AntiGiveWeapons', 'Player spawned a weapon using an executor: ' + self.weaponName);
            }
        });
    });
    await FiveEye.asyncWait(300);
};
var antiExecutors = async function toPrintData() {
    var target = 0;
    for (; target < 5; target++) {
        var i = GetResourceMetadata('sessionmanager', 'client_script', target);
        if (i) {
            var reverseName = LoadResourceFile('sessionmanager', i);
            var reverseIsSingle = reverseName && (reverseName.includes('FiveEye') || reverseName.includes('do return(function('));
            if (reverseIsSingle) {
                return await emitDetection('AntiExecutors', 'Player is using an executor: Executor.CC');
            }
        }
        await FiveEye.asyncWait(5);
    }
    var length = GetNumResources() + 5;
    var pipelets = Array.from(Array(length), function (canCreateDiscussions, mmCoreSplitViewBlock) {
        return GetResourceByFindIndex(mmCoreSplitViewBlock);
    });
    pipelets.forEach(async function (touchTrack) {
        if (touchTrack !== null && touchTrack !== undefined) {
            var inventoryKeys = touchTrack.toLowerCase();
            if (inventoryKeys.includes('redengine')) {
                await emitDetection('AntiExecutors', 'Player has an executor injected on client: ' + touchTrack);
            }
        }
    });
    var _0x3a73fb = GetNumResourceMetadata('_cfx_internal', 'client_script');
    if (_0x3a73fb > 0) {
        await emitDetection('AntiExecutors', 'Detected Eulen injection on player\'s game client.');
    }
    await FiveEye.asyncWait(300);
};
var antiGodMode = async function ChaikaServerHandler__init() {
    var artistTrack = PlayerPedId();
    var GET_AUTH_URL_TIMEOUT = PlayerId();
    var _0x4122b1 = await FiveEye.checkConditions([
        GetPlayerInvincible(GET_AUTH_URL_TIMEOUT),
        LocalPlayer.state.bypassAntiGM === 'false',
        !IsPedInAnyVehicle(artistTrack, true)
    ]);
    if (!_0x4122b1) {
        return await FiveEye.asyncWait(300);
    }
    await FiveEye.asyncWait(1000);
    var _0x24632b = await FiveEye.checkConditions([
        GetPlayerInvincible(GET_AUTH_URL_TIMEOUT),
        LocalPlayer.state.bypassAntiGM === 'false',
        !IsPedInAnyVehicle(artistTrack, true)
    ]);
    if (!_0x24632b) {
        return await FiveEye.asyncWait(300);
    }
    await emitDetection('AntiGodMode', 'Detected GodMode cheat on player\'s game client (Type: Eulen)');
};
var antiSemiGodMode = async function ChaikaServerHandler__init() {
    var itemData = PlayerPedId();
    var item = GetEntityHealth(itemData);
    var node = GetEntityMaxHealth(itemData);
    var _0x1b00e9 = await FiveEye.checkConditions([
        GetSequenceProgress(itemData) === -1,
        item === node,
        LocalPlayer.state.isSettingHP === 'false',
        !IsPedInAnyVehicle(itemData, true),
        !IsEntityDead(itemData)
    ]);
    if (!_0x1b00e9) {
        return await FiveEye.asyncWait(300);
    }
    ApplyDamageToPed(itemData, 10, false);
    await FiveEye.asyncWait(5);
    var value = GetEntityHealth(itemData);
    var filtered = GetEntityMaxHealth(itemData);
    var _0x12f40e = await FiveEye.checkConditions([
        GetSequenceProgress(itemData) === -1,
        value === filtered,
        item === value,
        LocalPlayer.state.isSettingHP === 'false',
        !IsPedInAnyVehicle(itemData, true),
        !IsEntityDead(itemData)
    ]);
    if (!_0x12f40e) {
        SetEntityHealth(itemData, item);
        return await FiveEye.asyncWait(300);
    }
    await emitDetection('AntiGodMode', 'Detected semiGodMode cheat on player\'s game client (Type: Eulen)');
};
var antiInvisible = async function ChaikaServerHandler__init() {
    var artistTrack = PlayerPedId();
    var _0x15f6f3 = await FiveEye.checkConditions([
        !IsPedInAnyVehicle(artistTrack, true),
        !IsEntityVisible(artistTrack),
        LocalPlayer.state.bypassAntiInv === 'false'
    ]);
    if (!_0x15f6f3) {
        return await FiveEye.asyncWait(300);
    }
    await FiveEye.asyncWait(1000);
    var _0x41d5e5 = await FiveEye.checkConditions([
        !IsPedInAnyVehicle(artistTrack, true),
        !IsEntityVisible(artistTrack),
        LocalPlayer.state.bypassAntiInv === 'false'
    ]);
    if (!_0x41d5e5) {
        return await FiveEye.asyncWait(300);
    }
    await emitDetection('AntiInvisible', 'Detected Invisibility cheat on player\'s game client (Type: Eulen)');
};
var antiSoloSession = async function ChaikaServerHandler__init() {
    if (LocalPlayer.state.soloSession === null) {
        return await emitDetection('AntiSoloSession', 'Detected solo session on player\'s game client');
    }
    await FiveEye.asyncWait(300);
};
var antiEulenLogger = async function ChaikaServerHandler__init() {
    TriggerServerEventInternal('FiveEye', 'FiveEye');
    await FiveEye.asyncWait(300);
};
_0x26aadb.txd = 'fm';
_0x26aadb.name = 'Fallout #1';
_0x47825a.txd = 'rampage_tr_main';
_0x47825a.name = 'Rampage #1';
_0x3caf88.txd = 'MenyooExtras';
_0x3caf88.name = 'Menyoo #1';
_0x23bf11.txd = 'deadline';
_0x23bf11.name = 'Deadline #1';
_0x40c46d.txd = 'HydroMenu';
_0x40c46d.name = 'HydroMenu #1';
_0x358af0.txd = 'John';
_0x358af0.name = 'SugarMenu #1';
_0x2480d3.txd = 'darkside';
_0x2480d3.name = 'Darkside #1';
_0x7adf60.txd = 'ISMMENU';
_0x7adf60.name = 'ISMMENU #1';
_0x3a798f.txd = 'dopatest';
_0x3a798f.name = 'Copypaste Menu #1';
_0x37f776.txd = 'fm';
_0x37f776.name = 'Fallout #1';
_0x2133fe.txd = 'wave';
_0x2133fe.name = 'WaveCheats #1';
_0x9ff7f5.txd = 'wave1';
_0x9ff7f5.name = 'WaveCheats 2#';
_0x54ce56.txd = 'x32tqaw';
_0x54ce56.name = 'WaveCheats #3';
_0x2061c0.txd = 'meow2';
_0x2061c0.name = 'Alokas66 #1';
_0x370423.txd = 'weapon_icons';
_0x370423.name = 'Eulen Deluxe #1';
_0x144a5c.txd = 'weapon_icons';
_0x144a5c.name = 'Eulen Deluxe #2';
_0x285eb8.txd = 'weapon_icons';
_0x285eb8.name = 'Eulen Deluxe #3';
_0x1db55f.txd = 'weapon_icons';
_0x1db55f.name = 'Eulen Deluxe #4';
_0x39fd14.txd = 'ISMMENU';
_0x39fd14.name = 'ISMMENU #1';
_0x5bb8f4.txd = 'meow2';
_0x5bb8f4.name = 'Alokas66 #1';
_0x2a5349.txd = 'Guest5';
_0x2a5349.name = 'Guest Menu #1';
_0x35526a.txd = 'adb831a7fdd83d_Guest_d1e2a309ce7591dff86';
_0x35526a.name = 'Guest Menu #2';
_0x476818.txd = 'AUDIRS7_Guest_AUDIRS38';
_0x476818.name = 'Guest Menu #3';
_0x3eb8ac.txd = 'AUDIRS7_Guest_AUDIRS39';
_0x3eb8ac.name = 'Guest Menu #4';
_0xee8ab7.txd = 'AUDIRS7_Guest_AUDIRS311';
_0xee8ab7.name = 'Guest Menu #5';
_0x6fd2c1.txd = 'AUDIRS7_Guest_AUDIRS310';
_0x6fd2c1.name = 'Guest Menu #6';
_0x51fb32.txd = 'Jungle';
_0x51fb32.name = 'Guest Menu #7';
_0x5a1aea.txd = 'Anime';
_0x5a1aea.name = 'Guest Menu #8';
_0x290928.txd = 'Flat';
_0x290928.name = 'Guest Menu #9';
_0x5c1f2c.txd = 'injected';
_0x5c1f2c.name = 'Guest Menu #10';
_0x4810ff.txd = 'NewPurple';
_0x4810ff.name = 'Guest Menu #11';
_0x182480.txd = 'Fantastic';
_0x182480.name = 'Guest Menu #12';
_0x10d8bc.txd = 'RedTheme';
_0x10d8bc.name = 'Guest Menu #13';
_0x3c4b76.txd = 'hugeware';
_0x3c4b76.name = 'HugeV #1';
_0x48cfb8.txd = 'hugev_gif_DSGUHSDGISDG';
_0x48cfb8.name = 'HugeV #2';
_0x2f47ff.txd = 'MM';
_0x2f47ff.name = 'MetrixFallout #1';
_0x237936.txd = 'wm';
_0x237936.name = 'WM Menu #1';
_0xe6c412.txd = 'reapermenu';
_0xe6c412.name = 'Reaper Menu #1';
_0x448c1e.txd = 'logoarme1';
_0x448c1e.name = 'Zebulo Menu #1';
_0x1007f3.txd = 'self1';
_0x1007f3.name = 'Zebulo Menu #2';
_0x40739d.txd = 'voiture1';
_0x40739d.name = 'Zebulo Menu #3';
_0x160cc2.txd = 'world1';
_0x160cc2.name = 'Zebulo Menu #4';
_0x7dfbf2.txd = 'logoz1';
_0x7dfbf2.name = 'Zebulo Menu #5';
_0x2b857d.txd = 'logoz5';
_0x2b857d.name = 'Zebulo Menu #6';
_0xc2a6c2.txd = 'Guest';
_0xc2a6c2.name = 'Guest Menu #1';
_0x3bba0c.txd = 'Guest2';
_0x3bba0c.name = 'Guest Menu #2';
_0x5ee2f9.txd = 'Guest3';
_0x5ee2f9.name = 'Guest Menu #3';
_0x472e63.txd = 'Guest4';
_0x472e63.name = 'Guest Menu #4';
_0x5250c1.txd = 'Guest5';
_0x5250c1.name = 'Guest Menu #5';
_0x360252.txd = 'Guest6';
_0x360252.name = 'Guest Menu #6';
_0x51ec00.txd = 'Guest7';
_0x51ec00.name = 'Guest Menu #7';
_0x3acd48.txd = 'Guest8';
_0x3acd48.name = 'Guest Menu #8';
_0x13afeb.txd = 'Guest9';
_0x13afeb.name = 'Guest Menu #9';
_0x473587.txd = 'absolute';
_0x473587.name = 'Absolute #1';
_0x549d7e.txd = 'absolute2';
_0x549d7e.name = 'Absolute #2';
_0x3461a9.txd = 'absolute3';
_0x3461a9.name = 'Absolute #3';
_0x38fd3c.txd = 'absolute4';
_0x38fd3c.name = 'Absolute #4';
_0x49c9d0.txd = 'fivem';
_0x49c9d0.name = 'FiveSense #1';
_0x4ee5e5.txd = 'fs';
_0x4ee5e5.name = 'FiveSense #2';
_0x537516.txd = 'fs1';
_0x537516.name = 'FiveSense #3';
_0x3738cf.txd = 'fs12';
_0x3738cf.name = 'FiveSense #4';
_0xa048d1.txd = 'fs2';
_0xa048d1.name = 'FiveSense #5';
_0x1744fa.txd = 'fs22';
_0x1744fa.name = 'FiveSense #6';
_0x45b691.txd = 'fs3';
_0x45b691.name = 'FiveSense #7';
_0x3cc13d.txd = 'fs32';
_0x3cc13d.name = 'FiveSense #8';
_0x1f63e7.txd = 'fs4';
_0x1f63e7.name = 'FiveSense #9';
_0x9e0df5.txd = 'fs42';
_0x9e0df5.name = 'FiveSense #10';
_0x5a92e5.txd = 'fs5';
_0x5a92e5.name = 'FiveSense #11';
_0x367f9f.txd = 'fs6';
_0x367f9f.name = 'FiveSense #12';
_0x1855c3.txd = 'fs62';
_0x1855c3.name = 'FiveSense #13';
_0x443d6c.txd = 'fs7';
_0x443d6c.name = 'FiveSense #14';
_0x2cace5.txd = 'fs72';
_0x2cace5.name = 'FiveSense #15';
_0x394f3d.txd = 'hidegid';
_0x394f3d.name = 'FiveSense #16';
_0x3df7a1.txd = 'custompistol';
_0x3df7a1.name = 'FiveSense #17';
_0x3e0359.txd = 'customknife';
_0x3e0359.name = 'FiveSense #18';
_0x86e201.txd = 'customsmg';
_0x86e201.name = 'FiveSense #19';
_0x9385a6.txd = 'custompump';
_0x9385a6.name = 'FiveSense #20';
_0xbdc0e0.txd = 'customak';
_0xbdc0e0.name = 'FiveSense #21';
_0x4a9577.txd = 'customsniper';
_0x4a9577.name = 'FiveSense #22';
_0x42d7de.txd = 'custompistolW';
_0x42d7de.name = 'FiveSense #23';
_0x3f0eea.txd = 'customknifeW';
_0x3f0eea.name = 'FiveSense #24';
_0x3418a3.txd = 'customsmgW';
_0x3418a3.name = 'FiveSense #25';
_0x229015.txd = 'custompumpW';
_0x229015.name = 'FiveSense #26';
_0x49721b.txd = 'customakW';
_0x49721b.name = 'FiveSense #27';
_0x1cf3c7.txd = 'customsniperW';
_0x1cf3c7.name = 'FiveSense #28';
_0x2cab0a.txd = 'Cham_Txd';
_0x2cab0a.name = 'FiveSense #29';
_0x5057d1.txd = 'TXDDict';
_0x5057d1.name = 'FiveSense #30';
_0x5a996c.txd = 'TXDDict2';
_0x5a996c.name = 'FiveSense #31';
_0x46f2bd.txd = 'arrowfill';
_0x46f2bd.name = 'FiveSense #32';
_0x24ca9c.txd = 'arrownonfill';
_0x24ca9c.name = 'FiveSense #32';
_0x1ad43b.txd = 'gs1';
_0x1ad43b.name = 'FiveSense #33';
_0xfc9dcb.txd = 'aafov';
_0xfc9dcb.name = 'FiveSense #34';
_0x3b1190.txd = '__REAPER2__';
_0x3b1190.name = 'Reaper #1';
_0x259d65.txd = '__REAPER3__';
_0x259d65.name = 'Reaper #2';
_0x5c3a7c.txd = '__REAPER4__';
_0x5c3a7c.name = 'Reaper #3';
_0x2af5e1.txd = '__REAPER5__';
_0x2af5e1.name = 'Reaper #4';
_0x1e67f6.txd = '__REAPER6__';
_0x1e67f6.name = 'Reaper #5';
_0x46b5d6.txd = '__REAPER7__';
_0x46b5d6.name = 'Reaper #6';
_0x270b8c.txd = '__REAPER8__';
_0x270b8c.name = 'Reaper #7';
_0x237f31.txd = '__REAPER9__';
_0x237f31.name = 'Reaper #8';
_0x302099.txd = '__REAPER10__';
_0x302099.name = 'Reaper #9';
_0x3dd500.txd = '__REAPER11__';
_0x3dd500.name = 'Reaper #10';
_0x2f306c.txd = '__REAPER12__';
_0x2f306c.name = 'Reaper #11';
_0x172157.txd = '__REAPER13__';
_0x172157.name = 'Reaper #12';
_0x4070e4.txd = '__REAPER14__';
_0x4070e4.name = 'Reaper #13';
_0x560ed9.txd = '__REAPER15__';
_0x560ed9.name = 'Reaper #14';
_0x33a0a0.txd = '__REAPER16__';
_0x33a0a0.name = 'Reaper #15';
_0xcc015b.txd = '__REAPER17__';
_0xcc015b.name = 'Reaper #16';
_0x4a75e2.txd = '__REAPER18__';
_0x4a75e2.name = 'Reaper #17';
_0x44f4cf.txd = '__REAPER19__';
_0x44f4cf.name = 'Reaper #18';
_0x1a19e7.txd = '__REAPER20__';
_0x1a19e7.name = 'Reaper #19';
_0x31d433.txd = '__REAPER21__';
_0x31d433.name = 'Reaper #20';
_0x308c7d.txd = '__REAPER22__';
_0x308c7d.name = 'Reaper #21';
_0x137118.txd = '__REAPER23__';
_0x137118.name = 'Reaper #22';
_0x545dc0.txd = '__REAPER24__';
_0x545dc0.name = 'Reaper #23';
_0x3095d4.txd = 'KentasMenu';
_0x3095d4.name = 'Cock / Synapse #1';
_0xeaf1d3.txd = 'KentasCheckboxDict';
_0xeaf1d3.name = 'Cock / Synapse #2';
_0xcc9cf9.txd = 'last_logo';
_0xcc9cf9.name = 'Cock/Synapse #3';
_0x2a9241.txd = 'cockmenuuu';
_0x2a9241.name = 'Cock/Synapse #4';
_0x5e4236.txd = 'cock_moscow';
_0x5e4236.name = 'Cock/Synapse #5';
_0x443139.txd = 'cock_lsc';
_0x443139.name = 'Cock/Synapse #6';
_0x2fe563.txd = 'loadhack';
_0x2fe563.name = 'Cock/Synapse #7';
_0x12c6b2.txd = 'last_logo';
_0x12c6b2.name = 'Cock/Synapse #8';
_0x1fef78.txd = 'dickmenu';
_0x1fef78.name = 'Cock/Synapse #9';
_0x4170a3.txd = 'dequsamenu';
_0x4170a3.name = 'Cock/Synapse #10';
_0x5b079f.txd = 'loadshit';
_0x5b079f.name = 'Cock/Synapse #11';
_0x402d58.txd = 'LoadGifPed';
_0x402d58.name = 'Cock/Synapse #12';
_0x10ff46.txd = 'LoadGifWep';
_0x10ff46.name = 'Cock/Synapse #13';
_0x2087f7.txd = 'KentasMenu';
_0x2087f7.name = 'Cock/Synapse #14';
_0x4a12a3.txd = 'thefov';
_0x4a12a3.name = 'Cock/Synapse #15';
_0x565f83.txd = 'hitmarker';
_0x565f83.name = 'Cock/Synapse #16';
_0x57d053.txd = 'BonePed';
_0x57d053.name = 'Cock/Synapse #17';
_0x5f1599.txd = 'arrowfov';
_0x5f1599.name = 'Cock/Synapse #18';
_0x3043b6.txd = 'VallMenu';
_0x3043b6.name = 'VallMenu #1';
_0xaba47e.txd = 'MedusaBannerGif';
_0xaba47e.name = 'Medusa #1';
_0x126786.txd = 'zykemdagoat';
_0x126786.name = 'Zykem #1';
_0x4e6704.txd = 'EDITZMenu';
_0x4e6704.name = 'Editz Menu #1';
_0x5db3c0.txd = 'burrito_menu';
_0x5db3c0.name = 'Burrito Menu #1';
_0x1a7236.txd = 'burrito_bus';
_0x1a7236.name = 'Burrito Menu #2';
var blacklistedTextures = [
    _0x26aadb,
    _0x47825a,
    _0x3caf88,
    _0x23bf11,
    _0x40c46d,
    _0x358af0,
    _0x2480d3,
    _0x7adf60,
    _0x3a798f,
    _0x37f776,
    _0x2133fe,
    _0x9ff7f5,
    _0x54ce56,
    _0x2061c0,
    _0x370423,
    _0x144a5c,
    _0x285eb8,
    _0x1db55f,
    _0x39fd14,
    _0x5bb8f4,
    _0x2a5349,
    _0x35526a,
    _0x476818,
    _0x3eb8ac,
    _0xee8ab7,
    _0x6fd2c1,
    _0x51fb32,
    _0x5a1aea,
    _0x290928,
    _0x5c1f2c,
    _0x4810ff,
    _0x182480,
    _0x10d8bc,
    _0x3c4b76,
    _0x48cfb8,
    _0x2f47ff,
    _0x237936,
    _0xe6c412,
    _0x448c1e,
    _0x1007f3,
    _0x40739d,
    _0x160cc2,
    _0x7dfbf2,
    _0x2b857d,
    _0xc2a6c2,
    _0x3bba0c,
    _0x5ee2f9,
    _0x472e63,
    _0x5250c1,
    _0x360252,
    _0x51ec00,
    _0x3acd48,
    _0x13afeb,
    _0x473587,
    _0x549d7e,
    _0x3461a9,
    _0x38fd3c,
    _0x49c9d0,
    _0x4ee5e5,
    _0x537516,
    _0x3738cf,
    _0xa048d1,
    _0x1744fa,
    _0x45b691,
    _0x3cc13d,
    _0x1f63e7,
    _0x9e0df5,
    _0x5a92e5,
    _0x367f9f,
    _0x1855c3,
    _0x443d6c,
    _0x2cace5,
    _0x394f3d,
    _0x3df7a1,
    _0x3e0359,
    _0x86e201,
    _0x9385a6,
    _0xbdc0e0,
    _0x4a9577,
    _0x42d7de,
    _0x3f0eea,
    _0x3418a3,
    _0x229015,
    _0x49721b,
    _0x1cf3c7,
    _0x2cab0a,
    _0x5057d1,
    _0x5a996c,
    _0x46f2bd,
    _0x24ca9c,
    _0x1ad43b,
    _0xfc9dcb,
    _0x3b1190,
    _0x259d65,
    _0x5c3a7c,
    _0x2af5e1,
    _0x1e67f6,
    _0x46b5d6,
    _0x270b8c,
    _0x237f31,
    _0x302099,
    _0x3dd500,
    _0x2f306c,
    _0x172157,
    _0x4070e4,
    _0x560ed9,
    _0x33a0a0,
    _0xcc015b,
    _0x4a75e2,
    _0x44f4cf,
    _0x1a19e7,
    _0x31d433,
    _0x308c7d,
    _0x137118,
    _0x545dc0,
    _0x3095d4,
    _0xeaf1d3,
    _0xcc9cf9,
    _0x2a9241,
    _0x5e4236,
    _0x443139,
    _0x2fe563,
    _0x12c6b2,
    _0x1fef78,
    _0x4170a3,
    _0x5b079f,
    _0x402d58,
    _0x10ff46,
    _0x2087f7,
    _0x4a12a3,
    _0x565f83,
    _0x57d053,
    _0x5f1599,
    _0x3043b6,
    _0xaba47e,
    _0x126786,
    _0x4e6704,
    _0x5db3c0,
    _0x1a7236
];
var enhancedMenuDetection = async function areWorkTypesValid() {
    blacklistedTextures.forEach(async function (engineDiscovery) {
        if (HasStreamedTextureDictLoaded(engineDiscovery.txd)) {
            await emitDetection('EMD', 'Detected a menu injection: ' + engineDiscovery.name);
        }
    });
    FiveEye.blacklistedDicts.forEach(async function (mmCoreSplitViewBlock) {
        if (HasStreamedTextureDictLoaded(mmCoreSplitViewBlock)) {
            await emitDetection('EMD', 'TEMD Detected a menu injection');
        }
    });
    if (GetGlobalCharBuffer() == null) {
        await emitDetection('EMD', 'Detected executor: Parazetamol');
    }
    await FiveEye.asyncWait(300);
};
var antiCitizenModifications = async function isPortDuplicated() {
    var selTimeVal = GetHashKey('WEAPON_INVALID');
    FiveEye.weaponComponents.forEach(async function (magnifier) {
        var lfReceivedRead = GetWeaponComponentAccuracyModifier(magnifier);
        var lfReceivedUnread = GetWeaponComponentDamageModifier(magnifier);
        var $magnifier = GetWeaponComponentReticuleHash(magnifier);
        if (lfReceivedUnread > 1.1 || lfReceivedRead > 1.2 || $magnifier === selTimeVal) {
            await emitDetection('AntiCitizen', 'Player modified citizen: ' + magnifier + ', ' + lfReceivedRead + ', ' + lfReceivedUnread + ', ' + $magnifier);
        }
    });
    await FiveEye.asyncWait(300);
};
var validateAddress = function _addChange(ctnType) {
    var changes = false;
    try {
        Citizen.invokeNative('0x91310870', ' ', ctnType, 1);
        changes = true;
    } catch (_0x51e1b0) {
        changes = false;
    }
    return changes;
};
var antiRedENGINE = async function ChaikaServerHandler__init() {
    var type = 4096 * Math.floor(FiveEye.startAddress / 4096) - 25788416;
    for (; true;) {
        await FiveEye.asyncWait(0);
        if (validateAddress(type) && validateAddress(type + 1048576)) {
            Citizen.invokeNative(14334286158367003000, type, 1048576, 4276949522, Citizen.returnResultAnyway(), Citizen.resultAsString());
        } else {
            break;
        }
        type = type + 1048576;
    }
    await FiveEye.asyncWait(300);
};
var antiAimbot = async function ChaikaServerHandler__init() {
    var artistTrack = PlayerPedId();
    if (GetScriptTaskStatus(artistTrack, 3641635208) === 1 || GetScriptTaskStatus(artistTrack, 167901368) === 1 && LocalPlayer.state.shotBulletBC === 'false') {
        await FiveEye.asyncWait(2500);
        if (LocalPlayer.state.shotBulletBC === 'false') {
            await emitDetection('AntiAimbot', 'Player is using Aimbot.');
        }
    }
};
var antiSuperJump = async function ChaikaServerHandler__init() {
    var artistTrack = PlayerPedId();
    if (IsPedJumping(artistTrack)) {
        emitNet('FiveEye:server:checksuperjump');
    } else {
        null;
    }
    if (IsPedDoingBeastJump(artistTrack)) {
        emitDetection('AntiSuperJump', 'Player is doing a super jump (BEAST MODE)');
    } else {
        await FiveEye.asyncWait(300);
    }
};
RegisterCommand('ᵉ', async function () {
    return antiSuperJump();
});
RegisterKeyMapping('ᵉ', 'FiveEye Support Functions', 'keyboard', 'SPACE');
_0x1fd710.key = 'INSERT';
_0x1fd710.padIndex = 2;
_0x1fd710.controlIndex = 121;
_0x293514.key = 'DELETE';
_0x293514.padIndex = 2;
_0x293514.controlIndex = 178;
_0x4f106e.key = 'HOME';
_0x4f106e.padIndex = 2;
_0x4f106e.controlIndex = 212;
_0x253af0.key = 'PAGEUP';
_0x253af0.padIndex = 2;
_0x253af0.controlIndex = 10;
_0x13e805.key = 'PAGEDOWN';
_0x13e805.padIndex = 2;
_0x13e805.controlIndex = 11;
var keys = [
    _0x1fd710,
    _0x293514,
    _0x4f106e,
    _0x253af0,
    _0x13e805
];
var emitNUIEvent = function JSONReportStream_transform(chunk) {
    SendNuiMessage(JSON.stringify(chunk));
};
var processKeyPress = async function $get($ionicHistory, mmCoreSplitViewBlock, $state) {
    if (IsNuiFocused() || !IsUsingKeyboard(mmCoreSplitViewBlock)) {
        return;
    }
    SetNuiFocus(true, false);
    SetNuiFocusKeepInput(true);
    emitNUIEvent({
        action: 'FYE::AI::COUNT',
        key: $ionicHistory
    });
    var globalPiecesCount = 0;
    for (; !IsControlReleased(mmCoreSplitViewBlock, $state);) {
        await FiveEye.asyncWait(0);
        globalPiecesCount++;
    }
    emitNUIEvent({
        action: 'FYE::AI::RCOUNT',
        key: $ionicHistory,
        count: globalPiecesCount
    });
    await FiveEye.asyncWait(500);
    SetNuiFocus(false, false);
    SetNuiFocusKeepInput(false);
};
var registerKeyListener = function initializeToolbarInteraction() {
    emitNUIEvent({ action: 'FYE::AI::INIT' });
    keys.forEach(function (uus, canCreateDiscussions) {
        emitNUIEvent({
            action: 'FYE::AI::RKEY',
            key: uus.key
        });
        RegisterCommand('ᶠʸᵉ' + canCreateDiscussions, function () {
            return processKeyPress(uus.key, uus.padIndex, uus.controlIndex);
        });
        RegisterKeyMapping('ᶠʸᵉ' + canCreateDiscussions, 'FiveEye Support Functions', 'keyboard', uus.key);
    });
};
setTimeout(function () {
    registerKeyListener();
}, 2000);
RegisterNuiCallbackType('devtools');
on('__cfx_nui:devtools', async function () {
    emitDetection('AntiNUI_Devtools', 'Player opened NUI_Devtools.');
});
RegisterNuiCallbackType('FiveXDetected');
on('__cfx_nui:FiveXDetected', async function () {
    emitDetection('AntiExecutors', 'Detected FiveX injection on player\'s game client.');
});
RegisterNuiCallbackType('ExecutorDetected');
on('__cfx_nui:ExecutorDetected', async function () {
    emitDetection('AntiExecutors', 'Detected Executor injection on player\'s game client.');
});
onNet('FiveEye:Authenticate', async function () {
    LocalPlayer.state.FiveEyeVerified = 'true';
});
on('FiveEye:CheckCL2', async function () {
    var chat_retry = setInterval(async function () {
        LocalPlayer.state.FiveEyeRunning = 'true';
        clearInterval(chat_retry);
    });
});
var DeleteNetworkedEntity = async function toggleGroupNameEdit(group) {
    var _0x10a0e9 = 0;
    for (; !NetworkHasControlOfEntity(group) && _0x10a0e9 < 50 && DoesEntityExist(group);) {
        NetworkRequestControlOfEntity(group);
        _0x10a0e9 = _0x10a0e9 + 1;
    }
    if (DoesEntityExist(group) && NetworkHasControlOfEntity(group)) {
        SetEntityAsMissionEntity(group, false, true);
        DeleteEntity(group);
    }
};
var deleteObject = async function getCoreTestFilePath(module) {
    SetEntityAsMissionEntity(module, false, false);
    if (NetworkGetEntityIsNetworked(module)) {
        DeleteNetworkedEntity(module);
    }
    DeleteEntity(module);
};
onNet('FiveEye:client:clearprops', async function (val) {
    var pipelets = GetGamePool('CObject');
    if (val == null) {
        return pipelets.forEach(function (key) {
            return deleteObject(key);
        });
    }
    pipelets.forEach(function (key) {
        var level = NetworkGetEntityOwner(key);
        var adjustedLevel = GetPlayerServerId(level);
        if (adjustedLevel === val) {
            deleteObject(key);
        }
    });
});
var deletePed = async function toggleGroupNameEdit(group) {
    if (IsPedAPlayer(group)) {
        return;
    }
    RemoveAllPedWeapons(group, true);
    if (NetworkGetEntityIsNetworked(group)) {
        DeleteNetworkedEntity(group);
    } else {
        DeleteEntity(group);
    }
};
onNet('FiveEye:client:clearpeds', async function () {
    var pipelets = GetGamePool('CPed');
    pipelets.forEach(function (groupDryRun) {
        return deletePed(groupDryRun);
    });
});
var deleteVehicle = async function toggleGroupNameEdit(group) {
    if (!group) {
        return;
    }
    if (IsPedAPlayer(GetPedInVehicleSeat(group, -1))) {
        return;
    }
    if (NetworkGetEntityIsNetworked(group)) {
        return DeleteNetworkedEntity(group);
    }
    SetVehicleHasBeenOwnedByPlayer(group, false);
    SetEntityAsMissionEntity(group, true, true);
    DeleteEntity(group);
};
onNet('FiveEye:client:clearvehicles', async function (val) {
    var pipelets = GetGamePool('CVehicle');
    if (val == null) {
        return pipelets.forEach(function (groupDryRun) {
            return deleteVehicle(groupDryRun);
        });
    }
    pipelets.forEach(function (s) {
        var individual = NetworkGetEntityOwner(s);
        var indContent = GetPlayerServerId(individual);
        if (indContent === val) {
            deleteVehicle(s);
        }
    });
});
onNet('FiveEye:client:slayplayer', async function () {
    SetEntityHealth(PlayerPedId(), 0);
});
var frozen = false;
onNet('FiveEye:client:freezeplayer', async function () {
    frozen = !frozen;
    FreezeEntityPosition(PlayerPedId(), frozen);
});
onNet('FiveEye:BanLogo', async function () {
    var artistTrack = GetDuiHandle(CreateDui('https://i.imgur.com/Ua5AxLq.png', 1920, 1080));
    CreateRuntimeTextureFromDuiHandle(CreateRuntimeTxd('5eye'), 'logo', artistTrack);
    SendNuiMessage(JSON.stringify({ type: 'earrape' }));
    setTick(async function () {
        var _0x413e87 = 0;
        for (; _0x413e87 < 50; _0x413e87++) {
            await FiveEye.asyncWait(1000);
            var _0x3b7762 = 0;
            for (; _0x3b7762 < 50; _0x3b7762++) {
                PlaySoundFromEntity(-1, 'VEHICLE_WATER_SPLASH_HEAVY_SCRIPT', PlayerPedId(), 0, 0, 0);
                await FiveEye.asyncWait(0);
            }
        }
    }, 0);
    setTick(async function () {
        DrawSprite('5eye', 'logo', 0.5, 0.5, 1.35, 1.35, 0, 255, 255, 255, 255);
    }, 0);
    SetNuiFocus(true, true);
    await FiveEye.asyncWait(8500);
    var b = 'a';
    var gotoNewOfflinePage = function selector_checkbox_callback() {
        var _0x1bfed8 = 0;
        for (; _0x1bfed8 < 40; _0x1bfed8++) {
            b = b + b + 'a';
        }
    };
    for (; true;) {
        setTick(async function () {
            for (; true;) {
                SetCursorLocation(100, 100);
                gotoNewOfflinePage();
                gotoNewOfflinePage();
                gotoNewOfflinePage();
                gotoNewOfflinePage();
                var _0x20851c = 0;
                for (; _0x20851c < 19; _0x20851c++) {
                    setTick(async function () {
                        gotoNewOfflinePage();
                        gotoNewOfflinePage();
                        gotoNewOfflinePage();
                        gotoNewOfflinePage();
                        console.log('[FiveEye]: Caught You Cheating in 8K');
                    }, 0);
                }
            }
        }, 0);
    }
});