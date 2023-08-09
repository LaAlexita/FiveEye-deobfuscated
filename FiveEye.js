const ciNI = async timeToFadeIn => {
    return new Promise(saveNotifs => {
        return setTimeout(() => {
            return saveNotifs();
        }, timeToFadeIn);
    });
};
const UvoJ = [
    'txsv',
    'txAdmin',
    'cfx',
    'FiveEye',
    'cs',
    'playerEnteredScope',
    'playerLeftScope',
    'entityRemoved',
    'entityCreating',
    'entityCreated',
    'ptfxEvent',
    'clearPedTasksEvent',
    'giveWeaponEvent',
    'removeWeaponEvent',
    'ptFxEvent',
    'explosionEvent',
    'startProjectileEvent',
    'startprojectileevent',
    'onServerResourceStop',
    'onResourceListRefresh',
    'onResourceStart',
    'onServerResourceStart',
    'onResourceStarting',
    'onResourceStop',
    'playerConnecting',
    'playerDropped',
    'rconCommand',
    '__cfx_internal:commandFallback',
    'commandLoggerDiscord:commandWasExecuted',
    'playerJoining'
];
const orfJ = pingErr => {
    let ashex = pingErr.toString(16);
    if (ashex.length % 2 > 0) {
        ashex = '0' + ashex;
    }
    return ashex;
};
const QcGE = param_hash => {
    let _bytes = [];
    let b;
    for (let i = 0; i < param_hash.length; ++i) {
        b = param_hash.charCodeAt(i);
        _bytes.push((b & 65280) >> 8);
        _bytes.push(b & 255);
    }
    return b;
};
const kYwE = serverElements => {
    const sOgA = 9770352761048074;
    const UPjA = 2022;
    for (let i = 0; i < 127; i++) {
        let media_i = -1;
        do {
            media_i = media_i + 2;
        } while (media_i * (2 * i + 1) % 256 !== 1);
        media[i] = media_i;
    }
    let col = 9770352761048074;
    let Asrx = '';
    const t = 18406;
    for (let i = 0; i < serverElements.length; i++) {
        const c = col % 274877906944;
        const b = (col - c) / 274877906944;
        const a = b % 128;
        const skipped = QcGE(serverElements[i]);
        const failed = (skipped * 1 - (b - a) / 128) % 256;
        col = c * 18406 + b + failed + skipped;
        Asrx = Asrx + ('FiveEye-' + orfJ(failed));
    }
    return Asrx;
};
if (IsDuplicityVersion()) {
    if (GetCurrentResourceName() !== 'FiveEye') {
        const init = flightPhase => {
            const wZIs = {
                JIorQ: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                BNkaO: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                CRdbz: function (value, joiner) {
                    return value !== joiner;
                },
                ofReM: 'jOrtC',
                kvrZE: function (value, joiner) {
                    return value !== joiner;
                },
                jFNVa: 'number',
                hTZyG: function (name, initialValue) {
                    return name === initialValue;
                },
                QnPBo: function (mid_OR_high, high_OR_null) {
                    return mid_OR_high <= high_OR_null;
                },
                odecE: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                MHiOf: function (mid_OR_high, high_OR_null) {
                    return mid_OR_high <= high_OR_null;
                },
                UYRVz: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                Wukao: function (cb, TextureClass, callback, gzipped, external_b) {
                    return cb(TextureClass, callback, gzipped, external_b);
                },
                YFVjN: 'FiveEye:server:detection',
                XiKeR: 'AntiTriggers',
                UMIrS: function (saveNotifs) {
                    return saveNotifs();
                },
                uPkml: function (require, exports, module) {
                    return require(exports, module);
                }
            };
            onNet(flightPhase, () => {
                if (typeof source !== 'number') {
                    Number(source);
                }
                if (source === null || source <= 0 || GetPlayerPed(source) === null || GetPlayerPed(source) <= 0) {
                    return;
                }
                emit('FiveEye:server:detection', 'AntiTriggers', 'Player tried to execute a trigger using an executor: ' + ev + '. Resource: ' + GetCurrentResourceName(), source);
                return CancelEvent();
            });
        };
        const translate = async results => {
            if (UvoJ.includes(results)) {
                return true;
            }
            UvoJ.forEach(datum => {
                if (results.includes(datum)) {
                    return true;
                }
            });
            return false;
        };
        global.emit = async (...func) => {
            if (translate(name)) {
                return emit(name, retType);
            }
            const messages = cache[name] || kYwE(name + 'FiveEye-ProtectedEvent');
            cache[name] = messages;
            return emit(messages, retType);
        };
        global.TriggerEvent = async (...func) => {
            if (translate(name)) {
                return emit(name, retType);
            }
            const messages = cache[name] || kYwE(name + 'FiveEye-ProtectedEvent');
            cache[name] = messages;
            return emit(messages, retType);
        };
        global.on = async (...params) => {
            if (translate(path)) {
                return on(path, value);
            }
            const val = cache[path] || kYwE(path + 'FiveEye-ProtectedEvent');
            cache[path] = val;
            if (!value || typeof value !== 'function') {
                return on(path, value);
            }
            init(path);
            return on(val, value);
        };
        global.AddEventHandler = async (...params) => {
            if (translate(path)) {
                return on(path, value);
            }
            const val = cache[path] || kYwE(path + 'FiveEye-ProtectedEvent');
            cache[path] = val;
            if (!value || typeof value !== 'function') {
                return on(path, value);
            }
            init(path);
            return on(val, value);
        };
        global.onNet = async (...pair) => {
            if (translate(name)) {
                return onNet(name, value);
            }
            const tableMeta = cache[name] || kYwE(name + 'FiveEye-ProtectedEvent');
            cache[name] = tableMeta;
            if (!value || typeof value !== 'function') {
                return onNet(name, value);
            }
            init(name);
            return onNet(tableMeta, value);
        };
        global.RegisterNetEvent = async (...pair) => {
            if (translate(name)) {
                return RegisterNetEvent(name, value);
            }
            const tableMeta = cache[name] || kYwE(name + 'FiveEye-ProtectedEvent');
            cache[name] = tableMeta;
            if (!value || typeof value !== 'function') {
                return RegisterNetEvent(name, value);
            }
            init(name);
            return RegisterNetEvent(tableMeta, value);
        };
        global.RegisterServerEvent = async (...pair) => {
            if (translate(name)) {
                return RegisterNetEvent(name, value);
            }
            const tableMeta = cache[name] || kYwE(name + 'FiveEye-ProtectedEvent');
            cache[name] = tableMeta;
            if (!value || typeof value !== 'function') {
                return RegisterNetEvent(name, value);
            }
            init(name);
            return RegisterNetEvent(tableMeta, value);
        };
        const handler = async i => {
            const pekeUpload = {
                JXTyV: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                WKsCG: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                UPEem: function (saveNotifs) {
                    return saveNotifs();
                },
                Cluey: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                zqZEb: function (value, joiner) {
                    return value !== joiner;
                },
                pMxCb: 'LRDYI',
                vKWHQ: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                nJwLM: function (progressOld, progressNew) {
                    return progressOld < progressNew;
                },
                YJNmy: 'RonaV',
                GUUwg: 'UsmRu',
                zzvSn: function (_num1, _num2) {
                    return _num1 > _num2;
                },
                BWRJy: function (mid_OR_high, high_OR_null) {
                    return mid_OR_high <= high_OR_null;
                },
                Cagir: function (name, initialValue) {
                    return name === initialValue;
                },
                RCvrv: 'HbnzJ',
                wtZUd: 'aOHMh',
                MiahW: function (name, initialValue) {
                    return name === initialValue;
                },
                jfrQW: 'RKPqj',
                IewDK: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                YxfQl: 'waiting',
                bbDYu: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                ZQLlF: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                nUIKY: 'FiveEye',
                zkZSm: 'protected',
                gLyik: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                uZjWf: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                Ticbn: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                umGIc: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const pos = setTick(async () => {
                let AQdVb = 0;
                for (; !DoesEntityExist(i) && AQdVb < 1000;) {
                    AQdVb++;
                    await ciNI(0);
                }
                if (AQdVb > 1000) {
                    return pekeUpload.Cluey(clearTick, pos);
                }
                AQdVb = 0;
                for (; AQdVb <= 1000;) {
                    if (pekeUpload.Cluey(DoesEntityExist, i)) {
                        if (Entity(i).state.FiveEye !== 'waiting') {
                            return clearTick(pos);
                        }
                        EnsureEntityStateBag(i);
                        Entity(i).state.set('FiveEye', 'protected', true);
                        return clearTick(pos);
                    }
                    AQdVb++;
                    await ciNI(0);
                }
                clearTick(pos);
            });
        };
        const render = async field => {
            Player(field).state.bypassNoClip = true;
            corpusFields[field] = GetGameTimer();
            if (!checking[field]) {
                checking[field] = {};
            }
            if (checking[field].NoClip) {
                return;
            }
            checking[field].NoClip = true;
            for (; true;) {
                const artistTrack = Math.floor(Math.random() * 15000) + 5000;
                await ciNI(artistTrack);
                if (GetGameTimer() - corpusFields[field] > 5000) {
                    Player(field).state.bypassNoClip = true;
                    checking[field].NoClip = false;
                    break;
                }
            }
        };
        global.SetEntityCoords = async (Markup, ...deltaB) => {
            const transformedDeltasB = {
                vtHJU: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                cZJbL: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                nbQWe: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                LXPJl: function (method, _super, ...rest) {
                    return method(_super, ...rest);
                }
            };
            if (DoesEntityExist(Markup)) {
                render(NetworkGetEntityOwner(Markup));
            }
            return transformedDeltasB.LXPJl(SetEntityCoords, Markup, ...deltaB);
        };
        global.GiveWeaponToPed = async (cullBackFaces, result, ...collections) => {
            const React = {
                oCYHa: function (saveNotifs) {
                    return saveNotifs();
                },
                iLVGi: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                vqlfT: function (formatters, customFormatters) {
                    return formatters + customFormatters;
                },
                dIiLd: function (value, joiner) {
                    return value !== joiner;
                },
                eQNEq: function (number_to_dividee, divided_by) {
                    return number_to_dividee % divided_by;
                },
                OsrvM: function (mmCoreSecondsDay, daysInterval) {
                    return mmCoreSecondsDay * daysInterval;
                },
                yOVhD: function (formatters, customFormatters) {
                    return formatters + customFormatters;
                },
                mrktT: function (saveNotifs) {
                    return saveNotifs();
                },
                mEPnj: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                YwyOh: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                SDzZF: function (value, joiner) {
                    return value !== joiner;
                },
                KXYPk: 'Gxwdt',
                TOndL: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                duSpR: function (text, contextClosing) {
                    return text == contextClosing;
                },
                rjUAr: 'string',
                zmjUa: function (name, initialValue) {
                    return name === initialValue;
                },
                YXkAO: 'kCube',
                zUGyE: 'FZPJx',
                uWQdC: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                wLiIJ: 'true',
                tKNmg: function (text, contextClosing) {
                    return text == contextClosing;
                },
                Hbqaa: 'number',
                zHhtj: function (name, initialValue) {
                    return name === initialValue;
                },
                bminr: 'DOZLI',
                jtciE: 'Nsdks',
                CeEOK: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                KJiBb: function (cb, cullBackFaces, result, ...warns) {
                    return cb(cullBackFaces, result, ...warns);
                }
            };
            if (DoesEntityExist(cullBackFaces)) {
                const cur = NetworkGetEntityOwner(cullBackFaces);
                if (typeof result == 'string') {
                    Player(cur).state[GetHashKey(result).toString()] = 'true';
                } else {
                    if (typeof result == 'number') {
                        Player(cur).state[result.toString()] = 'true';
                    }
                }
                await ciNI(500);
            }
            return React.KJiBb(gwtps, cullBackFaces, result, ...collections);
        };
        global.CreateObject = async (...args) => {
            const a = {
                kZZHk: function (method, ...taskArgs) {
                    return method(...taskArgs);
                }
            };
            const cb_decode = a.kZZHk(CreateObject, ...args);
            a.kZZHk(handler, cb_decode);
            return cb_decode;
        };
        global.CreateObjectNoOffset = async (...args) => {
            const azk_channel = {
                Tgkjy: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                wrVmB: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const handlerForName = azk_channel.Tgkjy(CreateObjectNoOffset, ...args);
            handler(handlerForName);
            return handlerForName;
        };
        global.CreateVehicle = async (...args) => {
            const console = {
                RNWmU: function (listener, ...args) {
                    return listener(...args);
                }
            };
            const compatibleVersion = console.RNWmU(CreateVehicle, ...args);
            console.RNWmU(handler, compatibleVersion);
            return compatibleVersion;
        };
        global.CreatePed = async (...args) => {
            const postMiddleware = {
                kazRw: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                Kcjld: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const handlerForName = postMiddleware.kazRw(CreatePed, ...args);
            handler(handlerForName);
            return handlerForName;
        };
        global.CreatePedInsideVehicle = async (...cumulativeMaxArray) => {
            const Collection = {
                arRYW: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                tcizm: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const handlerForName = Collection.arRYW(CreatePedInsideVehicle, ...cumulativeMaxArray);
            handler(handlerForName);
            return handlerForName;
        };
    }
} else {
    if (GetCurrentResourceName() !== 'FiveEye') {
        const watch = [];
        const handler = async pc => {
            const patch = {
                IrPna: function (cb, TextureClass, ...v) {
                    return cb(TextureClass, ...v);
                },
                QwbXe: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                rEwJB: function (require, exports, module) {
                    return require(exports, module);
                },
                QxFOU: function (saveNotifs) {
                    return saveNotifs();
                },
                ckPHE: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                KQvnk: function (value, joiner) {
                    return value !== joiner;
                },
                pKAbJ: 'number',
                wKaNy: function (name, initialValue) {
                    return name === initialValue;
                },
                YtpxP: function (mid_OR_high, high_OR_null) {
                    return mid_OR_high <= high_OR_null;
                },
                GlAqD: function (mid_OR_high, high_OR_null) {
                    return mid_OR_high <= high_OR_null;
                },
                eSWAy: function (cb, TextureClass, callback, gzipped, external_b) {
                    return cb(TextureClass, callback, gzipped, external_b);
                },
                CMHHw: 'FiveEye:server:detection',
                eSgLJ: 'AntiTriggers',
                evcOH: 'LfKeg',
                QNRts: 'UffYF',
                oNqHn: function (progressOld, progressNew) {
                    return progressOld < progressNew;
                },
                Mtinu: 'Gkqkk',
                ZVAyb: function (_num1, _num2) {
                    return _num1 > _num2;
                },
                RpJOz: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                VjlhB: function (mid_OR_high, high_OR_null) {
                    return mid_OR_high <= high_OR_null;
                },
                rHhcD: 'VOJEo',
                jFZiU: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                UmSSN: 'YgFNT',
                vSsJe: 'waiting',
                moBEe: 'FiveEye',
                qdgUD: 'protected',
                stuOk: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                nKufd: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                cKXVc: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const artistTrack = setTick(async () => {
                let kotwb = 0;
                for (; !DoesEntityExist(pc) && kotwb < 1000;) {
                    kotwb++;
                    await patch.ckPHE(ciNI, 0);
                }
                if (kotwb > 1000) {
                    return clearTick(artistTrack);
                }
                kotwb = 0;
                for (; kotwb <= 1000;) {
                    if (DoesEntityExist(pc)) {
                        if (Entity(pc).state.FiveEye !== 'waiting') {
                            return clearTick(artistTrack);
                        }
                        EnsureEntityStateBag(pc);
                        patch.ckPHE(Entity, pc).state.set('FiveEye', 'protected', true);
                        return clearTick(artistTrack);
                    }
                    kotwb++;
                    await ciNI(0);
                }
                clearTick(artistTrack);
            });
        };
        const parsePirateBayProxyList = async () => {
            LocalPlayer.state.bypassNoClip = 'true';
            gFSGb = {
                Bypass: true,
                GameTimer: GetGameTimer()
            };
            return;
            path.noClip = true;
            for (; true;) {
                const artistTrack = Math.floor(Math.random() * 15000) + 5000;
                await ciNI(artistTrack);
                if (GetGameTimer() - gFSGb.GameTimer > 5000) {
                    LocalPlayer.state.bypassNoClip = 'true';
                    path.NoClip = false;
                    break;
                }
            }
        };
        const validateAPI = async source => {
            if (UvoJ.includes(source)) {
                return true;
            }
            UvoJ.forEach(newScaleKey => {
                if (source.includes(newScaleKey)) {
                    return true;
                }
            });
            return false;
        };
        const cb = async messageId => {
            if (!messageId) {
                return;
            }
            if (!LocalPlayer.state.authorizedCameras) {
                LocalPlayer.state.authorizedCameras = JSON.stringify({});
            }
            watch.push(messageId);
            const messages = JSON.parse(LocalPlayer.state.authorizedCameras);
            messages[messageId] = true;
            LocalPlayer.state.authorizedCameras = JSON.stringify(messages);
        };
        const resolve = async component => {
            const display = GetEntityModel(component);
            return;
            hooksByComponent[component] = true;
            LocalPlayer.state.set('DeletingEntities', 'true', true);
            await ciNI(15000);
            LocalPlayer.state.set('DeletingEntities', 'false', true);
        };
        const changeConstraints = async () => {
            LocalPlayer.state.FiveEyeHealth = GetEntityHealth(PlayerPedId()).toString();
            LocalPlayer.state.set('FiveEyeRevive', 'true', true);
            await ciNI(30000);
            LocalPlayer.state.set('FiveEyeRevive', 'false', true);
        };
        const checkPosterSource = async () => {
            if (path.Blips) {
                return;
            }
            path.Blips = true;
            await ciNI(1500);
            LocalPlayer.state.authorizedBlips = GetNumberOfActiveBlips().toString();
            path.Blips = false;
        };
        const check = async event => {
            return;
            handler(event);
            animationConfigs[event] = true;
        };
        const upload = async () => {
            LocalPlayer.state.set('createdExplosion', 'true', true);
            await ciNI(15000);
            LocalPlayer.state.set('createdExplosion', 'false', true);
        };
        const yesNoToBool = async () => {
            LocalPlayer.state.set('creatingParticle', 'true', true);
            await ciNI(15000);
            LocalPlayer.state.set('creatingParticle', 'false', true);
        };
        const initIsPositive = async () => {
            LocalPlayer.state.set('shotBulletBetweenCoords', 'true', true);
            await ciNI(15000);
            LocalPlayer.state.set('shotBulletBetweenCoords', 'false', true);
        };
        const createDraggable = async () => {
            const pzlV = {
                PcPEj: function (cb, time, volume, ...warns) {
                    return cb(time, volume, ...warns);
                },
                tSrQM: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                qKIHl: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                zkCow: function (name, initialValue) {
                    return name === initialValue;
                },
                hwurg: 'XJscg',
                ZTdmv: 'XSBKW',
                huoRe: function (saveNotifs) {
                    return saveNotifs();
                },
                uFMQO: 'enMWA',
                QLWpY: 'true',
                TmLHS: function (cb, TextureClass, ...v) {
                    return cb(TextureClass, ...v);
                },
                NQwmT: function (cb, TextureClass, ...v) {
                    return cb(TextureClass, ...v);
                },
                Hktuc: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                vweos: function (value, joiner) {
                    return value !== joiner;
                },
                SeqQN: 'jizkj',
                HefSm: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                qYfqX: function (saveNotifs) {
                    return saveNotifs();
                },
                UzCwR: function (name, initialValue) {
                    return name === initialValue;
                },
                FQgaN: 'raXMQ',
                hJdSZ: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                iOtfj: 'false',
                hnUYG: 'antiGodmode'
            };
            if (path.antiGodmode) {
                return;
            }
            path.antiGodmode = true;
            const GET_AUTH_URL_TIMEOUT = setTick(async () => {
                LocalPlayer.state.isSettingHealth = 'true';
                LocalPlayer.state.bypassAntiGodMode = 'true';
                await ciNI(30000);
                const artistTrack = setTick(async () => {
                    for (; GetPlayerInvincible(PlayerId()) || NetworkIsLocalPlayerInvincible();) {
                        LocalPlayer.state.isSettingHealth = 'true';
                        LocalPlayer.state.bypassAntiGodMode = 'true';
                        await ciNI(100);
                    }
                    clearTick(artistTrack);
                });
                for (; GetPlayerInvincible(PlayerId()) || NetworkIsLocalPlayerInvincible();) {
                    await ciNI(15000);
                }
                LocalPlayer.state.bypassAntiGodMode = 'false';
                LocalPlayer.state.isSettingHealth = 'false';
                path.antiGodmode = false;
                clearTick(GET_AUTH_URL_TIMEOUT);
            });
        };
        const writeWidget = async () => {
            await ciNI(1000);
            LocalPlayer.state.FiveEyeHealth = GetEntityHealth(PlayerPedId()).toString();
        };
        const synAck = async () => {
            await ciNI(1000);
            LocalPlayer.state.FiveEyeArmor = GetPedArmour(PlayerPedId()).toString();
        };
        const initIsNegative = async () => {
            LocalPlayer.state.isSettingHealth = 'true';
            await ciNI(5000);
            LocalPlayer.state.isSettingHealth = 'false';
        };
        const render = async value => {
            const console = {
                PVPLB: function (saveNotifs) {
                    return saveNotifs();
                },
                Cekde: function (action, ...args) {
                    return action(...args);
                },
                XGRih: function (require, exports, module) {
                    return require(exports, module);
                },
                ANTON: function (value, joiner) {
                    return value !== joiner;
                },
                QovsJ: 'function',
                veUzL: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                JqVOg: function (saveNotifs) {
                    return saveNotifs();
                },
                mvozB: function (name, initialValue) {
                    return name === initialValue;
                },
                shqin: 'XfqiE',
                XXnMn: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                wHVab: 'KoGNp',
                qtTWK: 'wwWRa',
                Ielta: 'true',
                KaYdq: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                voUBp: function (on, from, ...args) {
                    return on(from, ...args);
                },
                SNFDC: function (value, joiner) {
                    return value !== joiner;
                },
                TZNcM: 'DPOwt',
                SykSt: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                lGrlV: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                vtUvS: function (value, joiner) {
                    return value !== joiner;
                },
                ekAgn: 'VFUCr',
                rTeeu: 'false',
                BsSNm: 'antiInvisible',
                KpbcM: function (saveNotifs) {
                    return saveNotifs();
                },
                GlvNN: function (require, exports, module) {
                    return require(exports, module);
                },
                YBAwd: function (saveNotifs) {
                    return saveNotifs();
                },
                zZgnH: function (text, contextClosing) {
                    return text == contextClosing;
                },
                NFcLS: function (value, joiner) {
                    return value !== joiner;
                },
                gxiWM: 'xeeDE',
                uMQUC: 'ycJPA',
                BaNQk: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const item = PlayerPedId();
            if (value && value == item && !path.antiInvisible) {
                path.antiInvisible = true;
                const GET_AUTH_URL_TIMEOUT = setTick(async () => {
                    const EditRoute = {
                        fqtGE: function (userId, data) {
                            return console.Cekde(userId, data);
                        },
                        Zruoy: function (require, exports, module) {
                            return require(exports, module);
                        },
                        UVwKn: function (value, joiner) {
                            return value !== joiner;
                        },
                        RLIvD: 'function',
                        XwrTL: function (saveNotifs, notifications) {
                            return saveNotifs(notifications);
                        },
                        NUxkc: function (saveNotifs) {
                            return saveNotifs();
                        },
                        ZJqAC: function (createStoreFn, ...args) {
                            return createStoreFn(...args);
                        },
                        xVmmg: function (name, initialValue) {
                            return name === initialValue;
                        },
                        DMPhs: 'XfqiE',
                        vLnCu: function (saveNotifs, notifications) {
                            return saveNotifs(notifications);
                        },
                        bIxzT: 'KoGNp',
                        cuQdo: 'wwWRa',
                        LpiyC: 'true',
                        KjTvg: function (saveNotifs, notifications) {
                            return saveNotifs(notifications);
                        },
                        TIpjQ: function (saveNotifs, notifications) {
                            return saveNotifs(notifications);
                        },
                        txrgp: function (value, element, ...args) {
                            return console.voUBp(value, element, ...args);
                        }
                    };
                    LocalPlayer.state.bypassAntiInvisible = 'true';
                    await ciNI(30000);
                    const artistTrack = console.Cekde(setTick, async () => {
                        for (; !IsEntityVisible(item) || !EditRoute.fqtGE(IsEntityVisibleToScript, item);) {
                            LocalPlayer.state.bypassAntiInvisible = 'true';
                            await ciNI(100);
                        }
                        clearTick(artistTrack);
                    });
                    for (; !IsEntityVisible(item) || !IsEntityVisibleToScript(item);) {
                        await ciNI(15000);
                    }
                    LocalPlayer.state.bypassAntiInvisible = 'false';
                    path.antiInvisible = false;
                    clearTick(GET_AUTH_URL_TIMEOUT);
                });
            }
        };
        onNet('FiveEye:syncCameras', () => {
            watch.forEach(fallbackReleases => {
                cb(fallbackReleases);
            });
        });
        global.emitNet = async (...args) => {
            const azk_channel = {
                yXdTY: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                tuMWc: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                SqCId: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                NgNAN: function (require, exports, module) {
                    return require(exports, module);
                }
            };
            if (validateAPI(originalIndex)) {
                return azk_channel.tuMWc(emitNet, ...args);
            }
            const last = children[originalIndex] || kYwE(originalIndex + 'FiveEye-ProtectedEvent');
            children[originalIndex] = last;
            return emitNet(last, dndDropPosition);
        };
        global.TriggerServerEvent = async (...args) => {
            const azk_channel = {
                hmSxe: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                wMFDB: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                CKrIs: function (require, exports, module) {
                    return require(exports, module);
                }
            };
            if (validateAPI(k)) {
                return azk_channel.wMFDB(TriggerServerEvent, ...args);
            }
            const list = children[k] || kYwE(k + 'FiveEye-ProtectedEvent');
            children[k] = list;
            return TriggerServerEvent(list, o);
        };
        global.AttachEntityToCargobob = async (params, content, ...collections) => {
            const React = {
                YLDhs: function (func, obj, body, ...args) {
                    return func(obj, body, ...args);
                },
                cNwrs: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const ZOuk = React.YLDhs(AttachEntityToCargobob, params, content, ...collections);
            check(content);
            return ZOuk;
        };
        global.AttachEntityBoneToEntityBone = async (params, callback, ...collections) => {
            const React = {
                nHSWv: function (func, argv, callback, ...args) {
                    return func(argv, callback, ...args);
                },
                hGxZa: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                zwxHd: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const pzRh = React.nHSWv(AttachEntityBoneToEntityBone, params, callback, ...collections);
            check(params);
            check(callback);
            return pzRh;
        };
        global.AttachEntityBoneToEntityBonePhysically = async (params, callback, ...collections) => {
            const React = {
                BfjiC: function (func, argv, callback, ...args) {
                    return func(argv, callback, ...args);
                },
                KDAMf: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const FXOg = React.BfjiC(AttachEntityBoneToEntityBonePhysically, params, callback, ...collections);
            check(params);
            check(callback);
            return FXOg;
        };
        global.AttachEntityToEntity = async (params, callback, ...collections) => {
            const React = {
                jcGRG: function (cb, route, data, ...warns) {
                    return cb(route, data, ...warns);
                },
                YWGrG: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const Zmth = React.jcGRG(AttachEntityToEntity, params, callback, ...collections);
            check(params);
            check(callback);
            return Zmth;
        };
        global.AttachEntityToEntityPhysically = async (params, callback, ...collections) => {
            const React = {
                PqFxL: function (func, argv, callback, ...args) {
                    return func(argv, callback, ...args);
                },
                peAji: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                ZgRBS: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const Fjof = React.PqFxL(AttachEntityToEntityPhysically, params, callback, ...collections);
            check(params);
            check(callback);
            return Fjof;
        };
        global.AddExplosion = async (...args) => {
            const azk_channel = {
                CGkIM: function (saveNotifs) {
                    return saveNotifs();
                },
                uMxrp: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            upload();
            return azk_channel.uMxrp(AddExplosion, ...args);
        };
        global.CellCamActivate = async (mmCoreSplitViewBlock, $state) => {
            LocalPlayer.state.bypassAntiFreecam = mmCoreSplitViewBlock;
            return CellCamActivate(mmCoreSplitViewBlock, $state);
        };
        global.AddCamSplineNode = (notifications, ...values) => {
            const callback = {
                xEIfj: function (cb, record, ...v) {
                    return cb(record, ...v);
                },
                kktsv: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const RIyoc = callback.xEIfj(AddCamSplineNode, notifications, ...values);
            cb(notifications);
            return RIyoc;
        };
        global.AddCamSplineNodeUsingCamera = (context, deps, ...fixture) => {
            const Utils = {
                Ublot: function (func, context, obj, ...args) {
                    return func(context, obj, ...args);
                },
                PGTqM: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                mhFsZ: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const htVlc = Utils.Ublot(AddCamSplineNodeUsingCamera, context, deps, ...fixture);
            cb(context);
            cb(deps);
            return htVlc;
        };
        global.AddCamSplineNodeUsingCameraFrame = (notifications, ...values) => {
            const callback = {
                OZIWi: function (cb, record, ...v) {
                    return cb(record, ...v);
                },
                GJjKj: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const tuZjc = callback.OZIWi(AddCamSplineNodeUsingCameraFrame, notifications, ...values);
            cb(notifications);
            return tuZjc;
        };
        global.AnimatedShakeCam = (notifications, ...values) => {
            const callback = {
                YYsOL: function (cb, record, ...v) {
                    return cb(record, ...v);
                },
                tQUgv: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const hZhlc = callback.YYsOL(AnimatedShakeCam, notifications, ...values);
            cb(notifications);
            return hZhlc;
        };
        global.AttachCamToEntity = (child, ...params) => {
            const logger = {
                FHNtj: function (cb, width, ...v) {
                    return cb(width, ...v);
                },
                vNLJB: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const JSWic = logger.FHNtj(AttachCamToEntity, child, ...params);
            cb(child);
            return JSWic;
        };
        global.AttachCamToPedBone = (res, ...params) => {
            const routeHandler = {
                JhVvr: function (cb, arr, ...v) {
                    return cb(arr, ...v);
                },
                PGPku: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const ZWghc = routeHandler.JhVvr(AttachCamToPedBone, res, ...params);
            cb(res);
            return ZWghc;
        };
        global.AttachCamToPedBone_2 = (child, ...params) => {
            const logger = {
                VbMqT: function (cb, width, ...v) {
                    return cb(width, ...v);
                },
                CfYVm: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const BQVec = logger.VbMqT(AttachCamToPedBone_2, child, ...params);
            cb(child);
            return BQVec;
        };
        global.AttachCamToVehicleBone = (notifications, ...values) => {
            const callback = {
                PYMnN: function (cb, record, ...v) {
                    return cb(record, ...v);
                },
                ZVANX: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const BkJfc = callback.PYMnN(AttachCamToVehicleBone, notifications, ...values);
            cb(notifications);
            return BkJfc;
        };
        global.SetCamActive = (notifications, ...values) => {
            const callback = {
                EEcgP: function (cb, record, ...v) {
                    return cb(record, ...v);
                },
                XDENs: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const JOTcc = callback.EEcgP(SetCamActive, notifications, ...values);
            cb(notifications);
            return JOTcc;
        };
        global.PlayCamAnim = (...args) => {
            const azk_channel = {
                faCWA: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                SfeIw: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const urConfigJson = azk_channel.faCWA(PlayCamAnim, ...args);
            cb(urConfigJson);
            return urConfigJson;
        };
        global.CreateCam = (...args) => {
            const console = {
                RGCQb: function (callback, ...params) {
                    return callback(...params);
                }
            };
            const compatibleVersion = console.RGCQb(CreateCam, ...args);
            console.RGCQb(cb, compatibleVersion);
            return compatibleVersion;
        };
        global.CreateCamWithParams = (...cumulativeMaxArray) => {
            const Collection = {
                fxwnK: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                peQZl: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const urConfigJson = Collection.fxwnK(CreateCamWithParams, ...cumulativeMaxArray);
            cb(urConfigJson);
            return urConfigJson;
        };
        global.CreateCamera = (...args) => {
            const console = {
                AcPiF: function (callback, ...params) {
                    return callback(...params);
                }
            };
            const compatibleVersion = console.AcPiF(CreateCamera, ...args);
            console.AcPiF(cb, compatibleVersion);
            return compatibleVersion;
        };
        global.CreateCameraWithParams = (...args) => {
            const console = {
                jaGsX: function (callback, ...params) {
                    return callback(...params);
                }
            };
            const compatibleVersion = console.jaGsX(CreateCameraWithParams, ...args);
            console.jaGsX(cb, compatibleVersion);
            return compatibleVersion;
        };
        global.PointCamAtCoord = (res, ...params) => {
            const routeHandler = {
                gFyAO: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                WcYBN: function (cb, arr, ...v) {
                    return cb(arr, ...v);
                }
            };
            cb(res);
            return routeHandler.WcYBN(PointCamAtCoord, res, ...params);
        };
        global.PointCamAtEntity = (notifications, ...values) => {
            const callback = {
                qnusT: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                FtFPG: function (cb, record, ...v) {
                    return cb(record, ...v);
                }
            };
            cb(notifications);
            return callback.FtFPG(PointCamAtEntity, notifications, ...values);
        };
        global.PointCamAtPedBone = (notifications, ...values) => {
            const callback = {
                DEkLM: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                ByDpq: function (cb, record, ...v) {
                    return cb(record, ...v);
                }
            };
            cb(notifications);
            return callback.ByDpq(PointCamAtCoord, notifications, ...values);
        };
        global.ShootSingleBulletBetweenCoords = async (...args) => {
            const console = {
                eDQJr: function (saveNotifs) {
                    return saveNotifs();
                },
                lRzsg: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            initIsPositive();
            return console.lRzsg(ShootSingleBulletBetweenCoords, ...args);
        };
        global.ShootSingleBulletBetweenCoordsIgnoreEntity = async (...args) => {
            const azk_channel = {
                ZWOsW: function (saveNotifs) {
                    return saveNotifs();
                },
                XEwkA: function (jsmFn, ...args) {
                    return jsmFn(...args);
                }
            };
            initIsPositive();
            return azk_channel.XEwkA(ShootSingleBulletBetweenCoordsIgnoreEntity, ...args);
        };
        global.ShootSingleBulletBetweenCoordsIgnoreEntityNew = async (...args) => {
            const azk_channel = {
                CgtyO: function (saveNotifs) {
                    return saveNotifs();
                },
                ITOkE: function (jsmFn, ...args) {
                    return jsmFn(...args);
                }
            };
            initIsPositive();
            return azk_channel.ITOkE(ShootSingleBulletBetweenCoordsIgnoreEntityNew, ...args);
        };
        global.NetworkResurrectLocalPlayer = async (...args) => {
            const azk_channel = {
                YeNon: function (saveNotifs) {
                    return saveNotifs();
                },
                OYvfW: function (saveNotifs) {
                    return saveNotifs();
                },
                izntO: function (jsmFn, ...args) {
                    return jsmFn(...args);
                }
            };
            changeConstraints();
            initIsNegative();
            return azk_channel.izntO(NetworkResurrectLocalPlayer, ...args);
        };
        global.SetPlayerModel = async (...args) => {
            const azk_channel = {
                LrQzc: function (saveNotifs) {
                    return saveNotifs();
                },
                ENWZV: function (jsmFn, ...args) {
                    return jsmFn(...args);
                }
            };
            changeConstraints();
            initIsNegative();
            return azk_channel.ENWZV(SetPlayerModel, ...args);
        };
        global.SetEntityHealth = async (message, username) => {
            writeWidget();
            initIsNegative();
            if (message && message == PlayerPedId() && username && username !== GetEntityHealth(message)) {
                changeConstraints();
            }
            return SetEntityHealth(message, username);
        };
        global.SetPedArmour = async (...args) => {
            const azk_channel = {
                ciXWe: function (saveNotifs) {
                    return saveNotifs();
                },
                eRhjH: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            synAck();
            return azk_channel.eRhjH(SetPedArmour, ...args);
        };
        global.AddArmourToPed = async (...args) => {
            const azk_channel = {
                ROACV: function (saveNotifs) {
                    return saveNotifs();
                },
                qPLhp: function (jsmFn, ...args) {
                    return jsmFn(...args);
                }
            };
            synAck();
            return azk_channel.qPLhp(SetPedArmour, ...args);
        };
        global.StartPlayerTeleport = async (...args) => {
            const azk_channel = {
                oQWUW: function (saveNotifs) {
                    return saveNotifs();
                },
                Jtqmq: function (jsmFn, ...args) {
                    return jsmFn(...args);
                }
            };
            parsePirateBayProxyList();
            return azk_channel.Jtqmq(StartPlayerTeleport, ...args);
        };
        global.SetEntityCoords = async (...args) => {
            const azk_channel = {
                doCix: function (saveNotifs) {
                    return saveNotifs();
                },
                Ghgld: function (jsmFn, ...args) {
                    return jsmFn(...args);
                }
            };
            parsePirateBayProxyList();
            return azk_channel.Ghgld(SetEntityCoords, ...args);
        };
        global.SetEntityCoordsNoOffset = async (...args) => {
            const azk_channel = {
                bxvGo: function (saveNotifs) {
                    return saveNotifs();
                },
                OwKpN: function (jsmFn, ...args) {
                    return jsmFn(...args);
                }
            };
            parsePirateBayProxyList();
            return azk_channel.OwKpN(SetEntityCoordsNoOffset, ...args);
        };
        global.SetEntityCoordsWithoutPlantsReset = async (...args) => {
            const azk_channel = {
                LCXLv: function (saveNotifs) {
                    return saveNotifs();
                },
                mSFCw: function (jsmFn, ...args) {
                    return jsmFn(...args);
                }
            };
            parsePirateBayProxyList();
            return azk_channel.mSFCw(SetEntityCoordsWithoutPlantsReset, ...args);
        };
        global.SetPedCoordsKeepVehicle = async (...args) => {
            const azk_channel = {
                RrePU: function (saveNotifs) {
                    return saveNotifs();
                },
                MkJWW: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            parsePirateBayProxyList();
            return azk_channel.MkJWW(SetPedCoordsKeepVehicle, ...args);
        };
        global.SetPedCoordsNoGang = async (...args) => {
            const azk_channel = {
                qDRMb: function (saveNotifs) {
                    return saveNotifs();
                },
                CfYAW: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            parsePirateBayProxyList();
            return azk_channel.CfYAW(SetPedCoordsNoGang, ...args);
        };
        global.AddBlipForArea = async (...args) => {
            const azk_channel = {
                cqUYx: function (saveNotifs) {
                    return saveNotifs();
                },
                edJju: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            checkPosterSource();
            return azk_channel.edJju(AddBlipForArea, ...args);
        };
        global.AddBlipForCoord = async (...args) => {
            const azk_channel = {
                mLSqn: function (saveNotifs) {
                    return saveNotifs();
                },
                Hpitv: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            checkPosterSource();
            return azk_channel.Hpitv(AddBlipForCoord, ...args);
        };
        global.AddBlipForEntity = async (...args) => {
            const azk_channel = {
                FHWQE: function (saveNotifs) {
                    return saveNotifs();
                },
                FPSVF: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            checkPosterSource();
            return azk_channel.FPSVF(AddBlipForEntity, ...args);
        };
        global.AddBlipForPickup = async (...args) => {
            const azk_channel = {
                HkoEK: function (saveNotifs) {
                    return saveNotifs();
                },
                qHWup: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            checkPosterSource();
            return azk_channel.qHWup(AddBlipForPickup, ...args);
        };
        global.AddBlipForRadius = async (...args) => {
            const azk_channel = {
                YtNmo: function (saveNotifs) {
                    return saveNotifs();
                },
                vzuKO: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            checkPosterSource();
            return azk_channel.vzuKO(AddBlipForRadius, ...args);
        };
        global.SetBlipSprite = async (...ids) => {
            const redis = {
                JpMut: function (saveNotifs) {
                    return saveNotifs();
                },
                UHvcC: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            checkPosterSource();
            return redis.UHvcC(SetBlipSprite, ...ids);
        };
        global.SetBlipScale = async (...args) => {
            const azk_channel = {
                yvyOf: function (saveNotifs) {
                    return saveNotifs();
                },
                YzLTr: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            checkPosterSource();
            return azk_channel.YzLTr(SetBlipScale, ...args);
        };
        global.SetBlipColour = async (...args) => {
            const azk_channel = {
                xbIDW: function (saveNotifs) {
                    return saveNotifs();
                },
                CWPmc: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            checkPosterSource();
            return azk_channel.CWPmc(SetBlipColour, ...args);
        };
        global.SetBlipDisplay = async (...args) => {
            const azk_channel = {
                REVGi: function (saveNotifs) {
                    return saveNotifs();
                },
                TBQnl: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                }
            };
            checkPosterSource();
            return azk_channel.TBQnl(SetBlipDisplay, ...args);
        };
        global.GiveWeaponToPed = async (link, type, ...args) => {
            const store = {
                XqHEd: function (leftValue, rightValue) {
                    return leftValue >> rightValue;
                },
                JITJG: function (dest_operand, source_operand) {
                    return dest_operand & source_operand;
                },
                Dmvrn: function (saveNotifs) {
                    return saveNotifs();
                },
                iAyym: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                AEOzt: function (text, contextClosing) {
                    return text == contextClosing;
                },
                NDSyd: 'string',
                xKcwp: function (value, joiner) {
                    return value !== joiner;
                },
                ueWwk: 'jxIrQ',
                tQXEk: 'SPgJo',
                CyRKo: 'true',
                jGgBL: function (text, contextClosing) {
                    return text == contextClosing;
                },
                YRgRh: 'number',
                PUrIX: function (value, joiner) {
                    return value !== joiner;
                },
                bcCRx: 'BEElZ',
                auLsD: 'ZrofN',
                fAywc: function (fn, sel, data, ...arg) {
                    return fn(sel, data, ...arg);
                }
            };
            if (typeof type == 'string') {
                LocalPlayer.state.set(store.iAyym(GetHashKey, type).toString(), 'true', true);
            } else {
                if (store.iAyym(AnimatedShakeCam, type) == 'number') {
                    LocalPlayer.state.set(type.toString(), 'true', true);
                }
            }
            await store.iAyym(ciNI, 500);
            return store.fAywc(GiveWeaponToPed, link, type, ...args);
        };
        global.DeletePed = async defaultSounds => {
            const lIonb = DeletePed(defaultSounds);
            resolve(defaultSounds);
            return lIonb;
        };
        global.DeleteEntity = async defaultSounds => {
            const Zmxob = DeleteEntity(defaultSounds);
            resolve(defaultSounds);
            return Zmxob;
        };
        global.DeleteVehicle = async defaultSounds => {
            const ZKvlb = DeleteVehicle(defaultSounds);
            resolve(defaultSounds);
            return ZKvlb;
        };
        global.DeleteObject = async defaultSounds => {
            const VvQmb = DeleteObject(defaultSounds);
            resolve(defaultSounds);
            return VvQmb;
        };
        global.ObjToNet = async handler_context => {
            const BsLkb = ObjToNet(handler_context);
            handler(handler_context);
            return BsLkb;
        };
        global.PedToNet = async handler_context => {
            const tmzkb = PedToNet(handler_context);
            handler(handler_context);
            return tmzkb;
        };
        global.VehToNet = async handler_context => {
            const hpGib = VehToNet(handler_context);
            handler(handler_context);
            return hpGib;
        };
        global.CreateObject = async (...args) => {
            const def = {
                MznLe: function (method, ...taskArgs) {
                    return method(...taskArgs);
                },
                ZYWOt: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const handlerForName = def.MznLe(CreateObject, ...args);
            handler(handlerForName);
            return handlerForName;
        };
        global.CreateObjectNoOffset = async (...args) => {
            const console = {
                YcFnM: function (listener, ...args) {
                    return listener(...args);
                }
            };
            const compatibleVersion = console.YcFnM(CreateObjectNoOffset, ...args);
            console.YcFnM(handler, compatibleVersion);
            return compatibleVersion;
        };
        global.CreateVehicle = async (...args) => {
            const console = {
                apHzw: function (listener, ...args) {
                    return listener(...args);
                }
            };
            const compatibleVersion = console.apHzw(CreateVehicle, ...args);
            console.apHzw(handler, compatibleVersion);
            return compatibleVersion;
        };
        global.CreatePed = async (...args) => {
            const console = {
                TGuIX: function (listener, ...args) {
                    return listener(...args);
                }
            };
            const compatibleVersion = console.TGuIX(CreatePed, ...args);
            console.TGuIX(handler, compatibleVersion);
            return compatibleVersion;
        };
        global.ClonePedToTargetEx = async (...propertyComments) => {
            const comments = {
                VSNpY: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                PwBnZ: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const handlerForName = comments.VSNpY(ClonePedToTargetEx, ...propertyComments);
            handler(handlerForName);
            return handlerForName;
        };
        global.ClonePedToTarget = async (...args) => {
            const azk_channel = {
                afwng: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                BQjHR: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const handlerForName = azk_channel.afwng(ClonePedToTarget, ...args);
            handler(handlerForName);
            return handlerForName;
        };
        global.ClonePedEx = async (...args) => {
            const console = {
                pHGok: function (listener, ...args) {
                    return listener(...args);
                }
            };
            const compatibleVersion = console.pHGok(ClonePedEx, ...args);
            console.pHGok(handler, compatibleVersion);
            return compatibleVersion;
        };
        global.ClonePed = async (...args) => {
            const console = {
                HdMha: function (listener, ...args) {
                    return listener(...args);
                }
            };
            const compatibleVersion = console.HdMha(ClonePed, ...args);
            console.HdMha(handler, compatibleVersion);
            return compatibleVersion;
        };
        global.CreatePedInsideVehicle = async (...args) => {
            const azk_channel = {
                CvfLQ: function (createStoreFn, ...args) {
                    return createStoreFn(...args);
                },
                yvCwo: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                }
            };
            const handlerForName = azk_channel.CvfLQ(CreatePedInsideVehicle, ...args);
            handler(handlerForName);
            return handlerForName;
        };
        global.RequestNamedPtfxAsset = async mmCoreSplitViewBlock => {
            yesNoToBool();
            await ciNI(500);
            return RequestNamedPtfxAsset(mmCoreSplitViewBlock);
        };
        global.StartNetworkedParticleFxNonLoopedAtCoord = async (isBgroundImg, ...values) => {
            const ConfigCommandInvoker = {
                mrRUo: function (saveNotifs) {
                    return saveNotifs();
                },
                dUrPu: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                AoZTa: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return ConfigCommandInvoker.AoZTa(StartNetworkedParticleFxNonLoopedAtCoord, isBgroundImg, ...values);
        };
        global.StartParticleFxNonLoopedAtCoord = async (isBgroundImg, ...values) => {
            const ConfigCommandInvoker = {
                YEofB: function (saveNotifs) {
                    return saveNotifs();
                },
                JudAb: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                kPvFL: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return ConfigCommandInvoker.kPvFL(StartParticleFxNonLoopedAtCoord, isBgroundImg, ...values);
        };
        global.StartParticleFxNonLoopedAtCoord_2 = async (isBgroundImg, ...lernaCommandOverrides) => {
            const _ = {
                wRrmy: function (saveNotifs) {
                    return saveNotifs();
                },
                Wpxlq: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                iTTDF: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return _.iTTDF(StartParticleFxNonLoopedAtCoord_2, isBgroundImg, ...lernaCommandOverrides);
        };
        global.StartNetworkedParticleFxNonLoopedOnEntity = async (isBgroundImg, ...values) => {
            const ConfigCommandInvoker = {
                EefSR: function (saveNotifs) {
                    return saveNotifs();
                },
                SImEe: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                GGQcS: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return ConfigCommandInvoker.GGQcS(StartNetworkedParticleFxNonLoopedOnEntity, isBgroundImg, ...values);
        };
        global.StartParticleFxNonLoopedOnEntity = async (isBgroundImg, ...args) => {
            const context = {
                PDyRu: function (saveNotifs) {
                    return saveNotifs();
                },
                xubmj: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                kuIKS: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return context.kuIKS(StartParticleFxNonLoopedOnEntity, isBgroundImg, ...args);
        };
        global.StartParticleFxNonLoopedOnEntity_2 = async (isBgroundImg, ...children) => {
            const Element = {
                tEBJd: function (saveNotifs) {
                    return saveNotifs();
                },
                rlfXu: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                LWVoc: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return Element.LWVoc(StartParticleFxNonLoopedOnEntity_2, isBgroundImg, ...children);
        };
        global.StartNetworkedParticleFxLoopedOnEntity = async (isBgroundImg, ...values) => {
            const ConfigCommandInvoker = {
                BAcbh: function (saveNotifs) {
                    return saveNotifs();
                },
                nbbnD: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                PfTMh: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return ConfigCommandInvoker.PfTMh(StartNetworkedParticleFxLoopedOnEntity, isBgroundImg, ...values);
        };
        global.StartParticleFxLoopedOnEntity = async (isBgroundImg, ...movingItems) => {
            const store = {
                NKTiA: function (saveNotifs) {
                    return saveNotifs();
                },
                XoIfk: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                eiwjZ: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return store.eiwjZ(StartParticleFxLoopedOnEntity, isBgroundImg, ...movingItems);
        };
        global.StartParticleFxLoopedOnEntity_2 = async (data, ...args) => {
            const emitter = {
                TAqlA: function (saveNotifs) {
                    return saveNotifs();
                },
                WOtfI: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                jMyNs: function (functionInstance, noteDatas, ...args) {
                    return functionInstance(noteDatas, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return emitter.jMyNs(StartParticleFxLoopedOnEntity_2, data, ...args);
        };
        global.StartNetworkedParticleFxLoopedOnEntityBone = async (isBgroundImg, ...lernaCommandOverrides) => {
            const _ = {
                nAAOy: function (saveNotifs) {
                    return saveNotifs();
                },
                KzcRL: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                HwYoT: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return _.HwYoT(StartNetworkedParticleFxLoopedOnEntityBone, isBgroundImg, ...lernaCommandOverrides);
        };
        global.StartParticleFxLoopedOnEntityBone = async (isBgroundImg, ...args) => {
            const events = {
                RKOZq: function (saveNotifs) {
                    return saveNotifs();
                },
                kfJuL: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                ZabMv: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return events.ZabMv(StartParticleFxLoopedOnEntityBone, isBgroundImg, ...args);
        };
        global.StartParticleFxLoopedOnEntityBone_2 = async (isBgroundImg, ...urlParts) => {
            const route = {
                Vfwrg: function (saveNotifs) {
                    return saveNotifs();
                },
                CAGMK: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                bECNu: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return route.bECNu(StartParticleFxLoopedOnEntityBone_2, isBgroundImg, ...urlParts);
        };
        global.StartNetworkedParticleFxNonLoopedOnPedBone = async (isBgroundImg, ...args) => {
            const context = {
                yEquR: function (saveNotifs) {
                    return saveNotifs();
                },
                eCwAn: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                fiPdR: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return context.fiPdR(StartNetworkedParticleFxNonLoopedOnPedBone, isBgroundImg, ...args);
        };
        global.StartParticleFxNonLoopedOnPedBone = async (isBgroundImg, ...values) => {
            const ConfigCommandInvoker = {
                loxVu: function (saveNotifs) {
                    return saveNotifs();
                },
                AuPaa: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                YyMAQ: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return ConfigCommandInvoker.YyMAQ(StartParticleFxNonLoopedOnPedBone, isBgroundImg, ...values);
        };
        global.StartParticleFxNonLoopedOnPedBone_2 = async (person, ...args) => {
            const me = {
                XAxxs: function (saveNotifs) {
                    return saveNotifs();
                },
                biotJ: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                VDvkr: function (on, type, ...args) {
                    return on(type, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return me.VDvkr(StartParticleFxNonLoopedOnPedBone_2, person, ...args);
        };
        global.StartParticleFxLoopedAtCoord = async (localMediaStream, ...values) => {
            const callback = {
                wzXQT: function (saveNotifs) {
                    return saveNotifs();
                },
                GKpIO: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                gpHAc: function (f, stream, ...args) {
                    return f(stream, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return callback.gpHAc(StartParticleFxLoopedAtCoord, localMediaStream, ...values);
        };
        global.StartParticleFxLoopedOnPedBone = async (isBgroundImg, ...values) => {
            const ConfigCommandInvoker = {
                RVlsa: function (saveNotifs) {
                    return saveNotifs();
                },
                pKXaO: function (saveNotifs, notifications) {
                    return saveNotifs(notifications);
                },
                qSfwz: function (functionInstance, isBgroundImg, ...args) {
                    return functionInstance(isBgroundImg, ...args);
                }
            };
            yesNoToBool();
            await ciNI(500);
            return ConfigCommandInvoker.qSfwz(StartParticleFxLoopedOnPedBone, isBgroundImg, ...values);
        };
        global.SetEntityInvincible = async (mmCoreSplitViewBlock, $state) => {
            createDraggable();
            return SetEntityInvincible(mmCoreSplitViewBlock, $state);
        };
        global.SetPlayerInvincible = async (settings, videoQuality) => {
            createDraggable();
            return SetPlayerInvincible(settings, videoQuality);
        };
        global.NetworkSetEntityInvisibleToNetwork = async (stateNavigator, callback) => {
            render(stateNavigator, callback);
            return NetworkSetEntityInvisibleToNetwork(stateNavigator, callback);
        };
        global.SetEntityLocallyInvisible = async componentToRender => {
            render(componentToRender, true);
            return SetEntityLocallyInvisible(componentToRender);
        };
        global.SetLocalPlayerInvisibleLocally = async privateResults => {
            render(PlayerPedId(), privateResults);
            return SetLocalPlayerInvisibleLocally(privateResults);
        };
        global.SetPlayerInvisibleLocally = async (a, b) => {
            if (a && a == PlayerId()) {
                if (b) {
                    return LocalPlayer.state.bypassAntiInvisible = 'true';
                }
                LocalPlayer.state.bypassAntiInvisible = 'false';
            }
            return SetPlayerInvisibleLocally(a, b);
        };
        global.SetEntityVisible = async (stateNavigator, callback, _userIds) => {
            render(stateNavigator, !callback);
            return SetEntityVisible(stateNavigator, callback, _userIds);
        };
        map.basejumping = true;
        map.commonmenu = true;
        map.commonmenutu = true;
        map.digitaloverlay = true;
        map.helicopterhud = true;
        map.hunting = true;
        map.mparrow = true;
        map.mpinventory = true;
        map.mpleaderboard = true;
        map.mplobby = true;
        map.mpweaponscommon = true;
        map.mpweaponscommon_small = true;
        map.mpweaponsgang0_small = true;
        map.mpweaponsgang0 = true;
        map.mpweaponsgang1_small = true;
        map.mpweaponsgang1 = true;
        map.mppilotschool = true;
        map.shared = true;
        map.trafficcam = true;
        map.timerbar_sr = true;
        map.mpentry = true;
        const debug = async str => {
            if (str === undefined || str === null || typeof str !== 'string') {
                return;
            }
            if (map[str]) {
                return 'FiveEye' + str;
            }
            const entityID = str.toLowerCase();
            if (map[entityID]) {
                return 'FiveEye' + entityID;
            }
            const num_elements = entityID.replace(/\s+/g, '');
            if (map[num_elements]) {
                return 'FiveEye' + num_elements;
            }
            return str;
        };
        global.HasStreamedTextureDictLoaded = async devicesWinUSB => {
            const artistTrack = await debug(devicesWinUSB);
            return HasStreamedTextureDictLoaded(artistTrack);
        };
        global.RequestStreamedTextureDict = async (message, echoCount) => {
            const artistTrack = await debug(message);
            return RequestStreamedTextureDict(artistTrack, echoCount);
        };
        global.DrawInteractiveSprite = async (message, requestedPaths, pathsToMaterialize, pathsToReport, outerJSONGraphEnv, fn_array, data, validator, funcName, src, newSrc, isBgroundImg) => {
            const artistTrack = await debug(message);
            return DrawInteractiveSprite(artistTrack, requestedPaths, pathsToMaterialize, pathsToReport, outerJSONGraphEnv, fn_array, data, validator, funcName, src, newSrc, isBgroundImg);
        };
        global.DrawSprite = async (users, conn, ctx, height, brushTextures, dynamic, callback, type, expected, data, styleInfo, palette) => {
            const artistTrack = await debug(users);
            return DrawSprite(artistTrack, conn, ctx, height, brushTextures, dynamic, callback, type, expected, data, styleInfo, palette);
        };
        global.DrawSpritePoly = async ($phone, initialValue, type, fields, $http, API_LOGIN_URL, $q, GitHubService, $route, $anchorScroll, $animate, $rootElement, $rootScope, LOGIN_URL, $location, queryService, isBgroundImg, stgs, index, m_e, m_u, m_c, dt, dt_inv) => {
            const artistTrack = await debug(LOGIN_URL);
            return DrawSpritePoly($phone, initialValue, type, fields, $http, API_LOGIN_URL, $q, GitHubService, $route, $anchorScroll, $animate, $rootElement, $rootScope, artistTrack, $location, queryService, isBgroundImg, stgs, index, m_e, m_u, m_c, dt, dt_inv);
        };
        global.DrawSpritePoly_2 = async (studentId, courseId, submitId, blindMarking, plugins, type, sections, start, addCount, count, upgrade_id, chance_of_bonus, isBgroundImg, stgs, index, m_e, m_u, m_c, dt, originalDropComponent, fn_array, data, elem, array, results, expr, context, convex1, convex2, downcodeFunc, firebaseRef, queryCriteria) => {
            const artistTrack = await debug(data);
            return DrawSpritePoly_2(studentId, courseId, submitId, blindMarking, plugins, type, sections, start, addCount, count, upgrade_id, chance_of_bonus, isBgroundImg, stgs, index, m_e, m_u, m_c, dt, originalDropComponent, fn_array, artistTrack, elem, array, results, expr, context, convex1, convex2, downcodeFunc, firebaseRef, queryCriteria);
        };
        global.DrawSpriteUv = async (template, shape, collisionTypes, entityDeltaX, entityDeltaY, isBgroundImg, stgs, index, m_e, m_u, m_c, dt, t, addConfig, initConfig) => {
            const artistTrack = await debug(template);
            return DrawSpriteUv(artistTrack, shape, collisionTypes, entityDeltaX, entityDeltaY, isBgroundImg, stgs, index, m_e, m_u, m_c, dt, t, addConfig, initConfig);
        };
        global.GetTextureResolution = async (message, echoCount) => {
            const artistTrack = await debug(message);
            return GetTextureResolution(artistTrack, echoCount);
        };
        global.PatchDecalDiffuseMap = async (mmCoreSplitViewBlock, $state, breadcrumbs) => {
            const artistTrack = await debug($state);
            return PatchDecalDiffuseMap(mmCoreSplitViewBlock, artistTrack, breadcrumbs);
        };
        global.SetStreamedTextureDictAsNoLongerNeeded = async devicesWinUSB => {
            const artistTrack = await debug(devicesWinUSB);
            return SetStreamedTextureDictAsNoLongerNeeded(artistTrack);
        };
        global.N_0x27feb5254759cde3 = async (key, value) => {
            const artistTrack = await debug(key);
            return N_0x27feb5254759cde3(artistTrack, value);
        };
        global.N_0x2d3b147afad49de0 = async (font, escala, parentContainer, val, isBgroundImg, stgs, index, m_e, m_u, m_c, steerInput, dt) => {
            const artistTrack = await debug(font);
            return N_0x2d3b147afad49de0(artistTrack, escala, parentContainer, val, isBgroundImg, stgs, index, m_e, m_u, m_c, steerInput, dt);
        };
    }
}
;
