const a = async a => {
  return new Promise(b => {
    return;
    // TOLOOK
    setTimeout(() => {
      return b();
    }, a);
  });
};
const b = ["txsv", "txAdmin", "cfx", "FiveEye", "cs", "playerEnteredScope", "playerLeftScope", "entityRemoved", "entityCreating", "entityCreated", "ptfxEvent", "clearPedTasksEvent", "giveWeaponEvent", "removeWeaponEvent", "ptFxEvent", "explosionEvent", "startProjectileEvent", "startprojectileevent", "onServerResourceStop", "onResourceListRefresh", "onResourceStart", "onServerResourceStart", "onResourceStarting", "onResourceStop", "playerConnecting", "playerDropped", "rconCommand", "__cfx_internal:commandFallback", "commandLoggerDiscord:commandWasExecuted", "playerJoining"];
const d = a => {
  let b = a.toString(16);
  if (b.length % 2 > 0) {
    b = "0" + b;
  }
  return b;
};
const e = a => {
  let c = [];
  let d;
  for (let b = 0; b < a.length; ++b) {
    d = a.charCodeAt(b);
    c.push((d & 65280) >> 8);
    c.push(d & 255);
  }
  return d;
};
const f = f => {
  for (let a = 0; a < 127; a++) {
    let b = -1;
    do {
      b = b + 2;
    } while (b * (a * 2 + 1) % 256 !== 1);
    media[a] = b;
  }
  let g = 9770352761048074;
  let h = "";
  for (let j = 0; j < f.length; j++) {
    const i = g % 274877906944;
    const c = (g - i) / 274877906944;
    const b = c % 128;
    const a = e(f[j]);
    const l = (a * 1 - (c - b) / 128) % 256;
    g = i * 18406 + c + l + a;
    h = h + ("FiveEye-" + d(l));
  }
  return h;
};
if (IsDuplicityVersion()) {
  if (GetCurrentResourceName() !== "FiveEye") {
    const c = a => {
      onNet(a, () => {
        if (typeof source !== "number") {
          Number(source);
        }
        if (source === null || source <= 0 || GetPlayerPed(source) === null || GetPlayerPed(source) <= 0) {
          return;
        }
        emit("FiveEye:server:detection", "AntiTriggers", "Player tried to execute a trigger using an executor: " + ev + ". Resource: " + GetCurrentResourceName(), source);
        return CancelEvent();
      });
    };
    const d = async a => {
      if (b.includes(a)) {
        return true;
      }
      b.forEach(b => {
        if (a.includes(b)) {
          return true;
        }
      });
      return false;
    };
    global.emit = async (...a) => {
      if (d(name)) {
        return emit(name, retType);
      }
      const b = cache[name] || f(name + "FiveEye-ProtectedEvent");
      cache[name] = b;
      return emit(b, retType);
    };
    global.TriggerEvent = async (...a) => {
      if (d(name)) {
        return emit(name, retType);
      }
      const b = cache[name] || f(name + "FiveEye-ProtectedEvent");
      cache[name] = b;
      return emit(b, retType);
    };
    global.on = async (...a) => {
      if (d(path)) {
        return on(path, value);
      }
      const b = cache[path] || f(path + "FiveEye-ProtectedEvent");
      cache[path] = b;
      if (!value || typeof value !== "function") {
        return on(path, value);
      }
      c(path);
      return on(b, value);
    };
    global.AddEventHandler = async (...a) => {
      if (d(path)) {
        return on(path, value);
      }
      const b = cache[path] || f(path + "FiveEye-ProtectedEvent");
      cache[path] = b;
      if (!value || typeof value !== "function") {
        return on(path, value);
      }
      c(path);
      return on(b, value);
    };
    global.onNet = async (...a) => {
      if (d(name)) {
        return onNet(name, value);
      }
      const b = cache[name] || f(name + "FiveEye-ProtectedEvent");
      cache[name] = b;
      if (!value || typeof value !== "function") {
        return onNet(name, value);
      }
      c(name);
      return onNet(b, value);
    };
    global.RegisterNetEvent = async (...a) => {
      if (d(name)) {
        return RegisterNetEvent(name, value);
      }
      const b = cache[name] || f(name + "FiveEye-ProtectedEvent");
      cache[name] = b;
      if (!value || typeof value !== "function") {
        return RegisterNetEvent(name, value);
      }
      c(name);
      return RegisterNetEvent(b, value);
    };
    global.RegisterServerEvent = async (...a) => {
      if (d(name)) {
        return RegisterNetEvent(name, value);
      }
      const b = cache[name] || f(name + "FiveEye-ProtectedEvent");
      cache[name] = b;
      if (!value || typeof value !== "function") {
        return RegisterNetEvent(name, value);
      }
      c(name);
      return RegisterNetEvent(b, value);
    };
    const e = async b => {
      const c = setTick(async () => {
        let d = 0;
        while (!DoesEntityExist(b) && d < 1000) {
          d++;
          await a(0);
        }
        if (d > 1000) {
          return clearTick(c);
        }
        d = 0;
        while (d <= 1000) {
          if (DoesEntityExist(b)) {
            if (Entity(b).state.FiveEye !== "waiting") {
              return clearTick(c);
            }
            EnsureEntityStateBag(b);
            Entity(b).state.set("FiveEye", "protected", true);
            return clearTick(c);
          }
          d++;
          await a(0);
        }
        clearTick(c);
      });
    };
    const g = async b => {
      Player(b).state.bypassNoClip = true;
      corpusFields[b] = GetGameTimer();
      if (!checking[b]) {
        checking[b] = {};
      }
      if (checking[b].NoClip) {
        return;
      }
      checking[b].NoClip = true;
      while (true) {
        const c = Math.floor(Math.random() * 15000) + 5000;
        await a(c);
        if (GetGameTimer() - corpusFields[b] > 5000) {
          Player(b).state.bypassNoClip = true;
          checking[b].NoClip = false;
          break;
        }
      }
    };
    global.SetEntityCoords = async (a, ...b) => {
      const c = {
        vtHJU: function (a, b) {
          return a(b);
        },
        cZJbL: function (a, b) {
          return a(b);
        },
        nbQWe: function (a, b) {
          return a(b);
        },
        LXPJl: function (a, b, ...c) {
          return a(b, ...c);
        }
      };
      if (DoesEntityExist(a)) {
        g(NetworkGetEntityOwner(a));
      }
      return c.LXPJl(SetEntityCoords, a, ...b);
    };
    global.GiveWeaponToPed = async (b, c, ...d) => {
      const React = {
        oCYHa: function (a) {
          return a();
        },
        iLVGi: function (a, ...b) {
          return a(...b);
        },
        vqlfT: function (a, b) {
          return a + b;
        },
        dIiLd: function (a, b) {
          return a !== b;
        },
        eQNEq: function (a, b) {
          return a % b;
        },
        OsrvM: function (a, b) {
          return a * b;
        },
        yOVhD: function (a, b) {
          return a + b;
        },
        mrktT: function (a) {
          return a();
        },
        mEPnj: function (a, ...b) {
          return a(...b);
        },
        YwyOh: function (a, b) {
          return a(b);
        },
        SDzZF: function (a, b) {
          return a !== b;
        },
        KXYPk: "Gxwdt",
        TOndL: function (a, b) {
          return a(b);
        },
        duSpR: function (a, b) {
          return a == b;
        },
        rjUAr: "string",
        zmjUa: function (a, b) {
          return a === b;
        },
        YXkAO: "kCube",
        zUGyE: "FZPJx",
        uWQdC: function (a, b) {
          return a(b);
        },
        wLiIJ: "true",
        tKNmg: function (a, b) {
          return a == b;
        },
        Hbqaa: "number",
        zHhtj: function (a, b) {
          return a === b;
        },
        bminr: "DOZLI",
        jtciE: "Nsdks",
        CeEOK: function (a, b) {
          return a(b);
        },
        KJiBb: function (a, b, c, ...d) {
          return a(b, c, ...d);
        }
      };
      if (DoesEntityExist(b)) {
        const d = NetworkGetEntityOwner(b);
        if (typeof c == "string") {
          Player(d).state[GetHashKey(c).toString()] = "true";
        } else if (typeof c == "number") {
          Player(d).state["[object Object]"] = "true";
        }
        await a(500);
      }
      return React.KJiBb(gwtps, b, c, ...d);
    };
    global.CreateObject = async (...a) => {
      const b = CreateObject(...a);
      e(b);
      return b;
    };
    global.CreateObjectNoOffset = async (...a) => {
      const b = CreateObjectNoOffset(...a);
      e(b);
      return b;
    };
    global.CreateVehicle = async (...a) => {
      const b = CreateVehicle(...a);
      e(b);
      return b;
    };
    global.CreatePed = async (...a) => {
      const b = CreatePed(...a);
      e(b);
      return b;
    };
    global.CreatePedInsideVehicle = async (...a) => {
      const b = CreatePedInsideVehicle(...a);
      e(b);
      return b;
    };
  }
} else if (GetCurrentResourceName() !== "FiveEye") {
  const c = [];
  const d = async b => {
    const c = {
      IrPna: function (a, b, ...c) {
        return a(b, ...c);
      },
      QwbXe: function (a, b) {
        return a(b);
      },
      rEwJB: function (a, b, c) {
        return a(b, c);
      },
      QxFOU: function (a) {
        return a();
      },
      ckPHE: function (a, ...b) {
        return a(...b);
      },
      KQvnk: function (a, b) {
        return a !== b;
      },
      pKAbJ: "number",
      wKaNy: function (a, b) {
        return a === b;
      },
      YtpxP: function (a, b) {
        return a <= b;
      },
      GlAqD: function (a, b) {
        return a <= b;
      },
      eSWAy: function (a, b, c, d, e) {
        return a(b, c, d, e);
      },
      CMHHw: "FiveEye:server:detection",
      eSgLJ: "AntiTriggers",
      evcOH: "LfKeg",
      QNRts: "UffYF",
      oNqHn: function (a, b) {
        return a < b;
      },
      Mtinu: "Gkqkk",
      ZVAyb: function (a, b) {
        return a > b;
      },
      RpJOz: function (a, b) {
        return a(b);
      },
      VjlhB: function (a, b) {
        return a <= b;
      },
      rHhcD: "VOJEo",
      jFZiU: function (a, b) {
        return a(b);
      },
      UmSSN: "YgFNT",
      vSsJe: "waiting",
      moBEe: "FiveEye",
      qdgUD: "protected",
      stuOk: function (a, b) {
        return a(b);
      },
      nKufd: function (a, b) {
        return a(b);
      },
      cKXVc: function (a, b) {
        return a(b);
      }
    };
    const d = setTick(async () => {
      let e = 0;
      while (!DoesEntityExist(b) && e < 1000) {
        e++;
        await c.ckPHE(a, 0);
      }
      if (e > 1000) {
        return clearTick(d);
      }
      e = 0;
      while (e <= 1000) {
        if (DoesEntityExist(b)) {
          if (Entity(b).state.FiveEye !== "waiting") {
            return clearTick(d);
          }
          EnsureEntityStateBag(b);
          c.ckPHE(Entity, b).state.set("FiveEye", "protected", true);
          return clearTick(d);
        }
        e++;
        await a(0);
      }
      clearTick(d);
    });
  };
  const e = async () => {
    LocalPlayer.state.bypassNoClip = "true";
    gFSGb = {
      Bypass: true,
      GameTimer: GetGameTimer()
    };
    return;
    path.noClip = true;
    while (true) {
      const b = Math.floor(Math.random() * 15000) + 5000;
      await a(b);
      if (GetGameTimer() - gFSGb.GameTimer > 5000) {
        LocalPlayer.state.bypassNoClip = "true";
        path.NoClip = false;
        break;
      }
    }
  };
  const g = async a => {
    if (b.includes(a)) {
      return true;
    }
    b.forEach(b => {
      if (a.includes(b)) {
        return true;
      }
    });
    return false;
  };
  const h = async a => {
    if (!a) {
      return;
    }
    if (!LocalPlayer.state.authorizedCameras) {
      LocalPlayer.state.authorizedCameras = JSON.stringify({});
    }
    c.push(a);
    const b = JSON.parse(LocalPlayer.state.authorizedCameras);
    b[a] = true;
    LocalPlayer.state.authorizedCameras = JSON.stringify(b);
  };
  const i = async b => {
    return;
    hooksByComponent[b] = true;
    LocalPlayer.state.set("DeletingEntities", "true", true);
    await a(15000);
    LocalPlayer.state.set("DeletingEntities", "false", true);
  };
  const j = async () => {
    LocalPlayer.state.FiveEyeHealth = GetEntityHealth(PlayerPedId()).toString();
    LocalPlayer.state.set("FiveEyeRevive", "true", true);
    await a(30000);
    LocalPlayer.state.set("FiveEyeRevive", "false", true);
  };
  const l = async () => {
    if (path.Blips) {
      return;
    }
    path.Blips = true;
    await a(1500);
    LocalPlayer.state.authorizedBlips = GetNumberOfActiveBlips().toString();
    path.Blips = false;
  };
  const m = async a => {
    return;
    d(a);
    animationConfigs[a] = true;
  };
  const n = async () => {
    LocalPlayer.state.set("createdExplosion", "true", true);
    await a(15000);
    LocalPlayer.state.set("createdExplosion", "false", true);
  };
  const p = async () => {
    LocalPlayer.state.set("creatingParticle", "true", true);
    await a(15000);
    LocalPlayer.state.set("creatingParticle", "false", true);
  };
  const q = async () => {
    LocalPlayer.state.set("shotBulletBetweenCoords", "true", true);
    await a(15000);
    LocalPlayer.state.set("shotBulletBetweenCoords", "false", true);
  };
  const r = async () => {
    if (path.antiGodmode) {
      return;
    }
    path.antiGodmode = true;
    const b = setTick(async () => {
      LocalPlayer.state.isSettingHealth = "true";
      LocalPlayer.state.bypassAntiGodMode = "true";
      await a(30000);
      const c = setTick(async () => {
        while (GetPlayerInvincible(PlayerId()) || NetworkIsLocalPlayerInvincible()) {
          LocalPlayer.state.isSettingHealth = "true";
          LocalPlayer.state.bypassAntiGodMode = "true";
          await a(100);
        }
        clearTick(c);
      });
      while (GetPlayerInvincible(PlayerId()) || NetworkIsLocalPlayerInvincible()) {
        await a(15000);
      }
      LocalPlayer.state.bypassAntiGodMode = "false";
      LocalPlayer.state.isSettingHealth = "false";
      path.antiGodmode = false;
      clearTick(b);
    });
  };
  const s = async () => {
    await a(1000);
    LocalPlayer.state.FiveEyeHealth = GetEntityHealth(PlayerPedId()).toString();
  };
  const t = async () => {
    await a(1000);
    LocalPlayer.state.FiveEyeArmor = GetPedArmour(PlayerPedId()).toString();
  };
  const u = async () => {
    LocalPlayer.state.isSettingHealth = "true";
    await a(5000);
    LocalPlayer.state.isSettingHealth = "false";
  };
  const v = async b => {
    const c = {
      PVPLB: function (a) {
        return a();
      },
      Cekde: function (a, ...b) {
        return a(...b);
      },
      XGRih: function (a, b, c) {
        return a(b, c);
      },
      ANTON: function (a, b) {
        return a !== b;
      },
      QovsJ: "function",
      veUzL: function (a, b) {
        return a(b);
      },
      JqVOg: function (a) {
        return a();
      },
      mvozB: function (a, b) {
        return a === b;
      },
      shqin: "XfqiE",
      XXnMn: function (a, b) {
        return a(b);
      },
      wHVab: "KoGNp",
      qtTWK: "wwWRa",
      Ielta: "true",
      KaYdq: function (a, b) {
        return a(b);
      },
      voUBp: function (a, b, ...c) {
        return a(b, ...c);
      },
      SNFDC: function (a, b) {
        return a !== b;
      },
      TZNcM: "DPOwt",
      SykSt: function (a, b) {
        return a(b);
      },
      lGrlV: function (a, b) {
        return a(b);
      },
      vtUvS: function (a, b) {
        return a !== b;
      },
      ekAgn: "VFUCr",
      rTeeu: "false",
      BsSNm: "antiInvisible",
      KpbcM: function (a) {
        return a();
      },
      GlvNN: function (a, b, c) {
        return a(b, c);
      },
      YBAwd: function (a) {
        return a();
      },
      zZgnH: function (a, b) {
        return a == b;
      },
      NFcLS: function (a, b) {
        return a !== b;
      },
      gxiWM: "xeeDE",
      uMQUC: "ycJPA",
      BaNQk: function (a, b) {
        return a(b);
      }
    };
    const d = PlayerPedId();
    if (b && b == d && !path.antiInvisible) {
      path.antiInvisible = true;
      const b = setTick(async () => {
        LocalPlayer.state.bypassAntiInvisible = "true";
        await a(30000);
        const e = c.Cekde(setTick, async () => {
          while (!IsEntityVisible(d) || !c.Cekde(IsEntityVisibleToScript, d)) {
            LocalPlayer.state.bypassAntiInvisible = "true";
            await a(100);
          }
          clearTick(e);
        });
        while (!IsEntityVisible(d) || !IsEntityVisibleToScript(d)) {
          await a(15000);
        }
        LocalPlayer.state.bypassAntiInvisible = "false";
        path.antiInvisible = false;
        clearTick(b);
      });
    }
  };
  onNet("FiveEye:syncCameras", () => {
    c.forEach(a => {
      h(a);
    });
  });
  global.emitNet = async (...a) => {
    if (g(originalIndex)) {
      return emitNet(...a);
    }
    const b = children[originalIndex] || f(originalIndex + "FiveEye-ProtectedEvent");
    children[originalIndex] = b;
    return emitNet(b, dndDropPosition);
  };
  global.TriggerServerEvent = async (...a) => {
    if (g(k)) {
      return TriggerServerEvent(...a);
    }
    const b = children[k] || f(k + "FiveEye-ProtectedEvent");
    children[k] = b;
    return TriggerServerEvent(b, o);
  };
  global.AttachEntityToCargobob = async (a, b, ...c) => {
    const React = {
      YLDhs: function (a, b, c, ...d) {
        return a(b, c, ...d);
      },
      cNwrs: function (a, b) {
        return a(b);
      }
    };
    const d = React.YLDhs(AttachEntityToCargobob, a, b, ...c);
    m(b);
    return d;
  };
  global.AttachEntityBoneToEntityBone = async (a, b, ...c) => {
    const React = {
      nHSWv: function (a, b, c, ...d) {
        return a(b, c, ...d);
      },
      hGxZa: function (a, b) {
        return a(b);
      },
      zwxHd: function (a, b) {
        return a(b);
      }
    };
    const d = React.nHSWv(AttachEntityBoneToEntityBone, a, b, ...c);
    m(a);
    m(b);
    return d;
  };
  global.AttachEntityBoneToEntityBonePhysically = async (a, b, ...c) => {
    const React = {
      BfjiC: function (a, b, c, ...d) {
        return a(b, c, ...d);
      },
      KDAMf: function (a, b) {
        return a(b);
      }
    };
    const d = React.BfjiC(AttachEntityBoneToEntityBonePhysically, a, b, ...c);
    m(a);
    m(b);
    return d;
  };
  global.AttachEntityToEntity = async (a, b, ...c) => {
    const React = {
      jcGRG: function (a, b, c, ...d) {
        return a(b, c, ...d);
      },
      YWGrG: function (a, b) {
        return a(b);
      }
    };
    const d = React.jcGRG(AttachEntityToEntity, a, b, ...c);
    m(a);
    m(b);
    return d;
  };
  global.AttachEntityToEntityPhysically = async (a, b, ...c) => {
    const React = {
      PqFxL: function (a, b, c, ...d) {
        return a(b, c, ...d);
      },
      peAji: function (a, b) {
        return a(b);
      },
      ZgRBS: function (a, b) {
        return a(b);
      }
    };
    const d = React.PqFxL(AttachEntityToEntityPhysically, a, b, ...c);
    m(a);
    m(b);
    return d;
  };
  global.AddExplosion = async (...a) => {
    n();
    return AddExplosion(...a);
  };
  global.CellCamActivate = async (a, b) => {
    LocalPlayer.state.bypassAntiFreecam = a;
    return CellCamActivate(a, b);
  };
  global.AddCamSplineNode = (a, ...b) => {
    const c = {
      xEIfj: function (a, b, ...c) {
        return a(b, ...c);
      },
      kktsv: function (a, b) {
        return a(b);
      }
    };
    const d = c.xEIfj(AddCamSplineNode, a, ...b);
    h(a);
    return d;
  };
  global.AddCamSplineNodeUsingCamera = (a, b, ...c) => {
    const d = {
      Ublot: function (a, b, c, ...d) {
        return a(b, c, ...d);
      },
      PGTqM: function (a, b) {
        return a(b);
      },
      mhFsZ: function (a, b) {
        return a(b);
      }
    };
    const e = d.Ublot(AddCamSplineNodeUsingCamera, a, b, ...c);
    h(a);
    h(b);
    return e;
  };
  global.AddCamSplineNodeUsingCameraFrame = (a, ...b) => {
    const c = {
      OZIWi: function (a, b, ...c) {
        return a(b, ...c);
      },
      GJjKj: function (a, b) {
        return a(b);
      }
    };
    const d = c.OZIWi(AddCamSplineNodeUsingCameraFrame, a, ...b);
    h(a);
    return d;
  };
  global.AnimatedShakeCam = (a, ...b) => {
    const c = {
      YYsOL: function (a, b, ...c) {
        return a(b, ...c);
      },
      tQUgv: function (a, b) {
        return a(b);
      }
    };
    const d = c.YYsOL(AnimatedShakeCam, a, ...b);
    h(a);
    return d;
  };
  global.AttachCamToEntity = (a, ...b) => {
    const c = {
      FHNtj: function (a, b, ...c) {
        return a(b, ...c);
      },
      vNLJB: function (a, b) {
        return a(b);
      }
    };
    const d = c.FHNtj(AttachCamToEntity, a, ...b);
    h(a);
    return d;
  };
  global.AttachCamToPedBone = (a, ...b) => {
    const c = {
      JhVvr: function (a, b, ...c) {
        return a(b, ...c);
      },
      PGPku: function (a, b) {
        return a(b);
      }
    };
    const d = c.JhVvr(AttachCamToPedBone, a, ...b);
    h(a);
    return d;
  };
  global.AttachCamToPedBone_2 = (a, ...b) => {
    const c = {
      VbMqT: function (a, b, ...c) {
        return a(b, ...c);
      },
      CfYVm: function (a, b) {
        return a(b);
      }
    };
    const d = c.VbMqT(AttachCamToPedBone_2, a, ...b);
    h(a);
    return d;
  };
  global.AttachCamToVehicleBone = (a, ...b) => {
    const c = {
      PYMnN: function (a, b, ...c) {
        return a(b, ...c);
      },
      ZVANX: function (a, b) {
        return a(b);
      }
    };
    const d = c.PYMnN(AttachCamToVehicleBone, a, ...b);
    h(a);
    return d;
  };
  global.SetCamActive = (a, ...b) => {
    const c = {
      EEcgP: function (a, b, ...c) {
        return a(b, ...c);
      },
      XDENs: function (a, b) {
        return a(b);
      }
    };
    const d = c.EEcgP(SetCamActive, a, ...b);
    h(a);
    return d;
  };
  global.PlayCamAnim = (...a) => {
    const b = PlayCamAnim(...a);
    h(b);
    return b;
  };
  global.CreateCam = (...a) => {
    const b = CreateCam(...a);
    h(b);
    return b;
  };
  global.CreateCamWithParams = (...a) => {
    const b = CreateCamWithParams(...a);
    h(b);
    return b;
  };
  global.CreateCamera = (...a) => {
    const b = CreateCamera(...a);
    h(b);
    return b;
  };
  global.CreateCameraWithParams = (...a) => {
    const b = CreateCameraWithParams(...a);
    h(b);
    return b;
  };
  global.PointCamAtCoord = (a, ...b) => {
    const c = {
      gFyAO: function (a, b) {
        return a(b);
      },
      WcYBN: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    h(a);
    return c.WcYBN(PointCamAtCoord, a, ...b);
  };
  global.PointCamAtEntity = (a, ...b) => {
    const c = {
      qnusT: function (a, b) {
        return a(b);
      },
      FtFPG: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    h(a);
    return c.FtFPG(PointCamAtEntity, a, ...b);
  };
  global.PointCamAtPedBone = (a, ...b) => {
    const c = {
      DEkLM: function (a, b) {
        return a(b);
      },
      ByDpq: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    h(a);
    return c.ByDpq(PointCamAtCoord, a, ...b);
  };
  global.ShootSingleBulletBetweenCoords = async (...a) => {
    q();
    return ShootSingleBulletBetweenCoords(...a);
  };
  global.ShootSingleBulletBetweenCoordsIgnoreEntity = async (...a) => {
    q();
    return ShootSingleBulletBetweenCoordsIgnoreEntity(...a);
  };
  global.ShootSingleBulletBetweenCoordsIgnoreEntityNew = async (...a) => {
    q();
    return ShootSingleBulletBetweenCoordsIgnoreEntityNew(...a);
  };
  global.NetworkResurrectLocalPlayer = async (...a) => {
    j();
    u();
    return NetworkResurrectLocalPlayer(...a);
  };
  global.SetPlayerModel = async (...a) => {
    j();
    u();
    return SetPlayerModel(...a);
  };
  global.SetEntityHealth = async (a, b) => {
    s();
    u();
    if (a && a == PlayerPedId() && b && b !== GetEntityHealth(a)) {
      j();
    }
    return SetEntityHealth(a, b);
  };
  global.SetPedArmour = async (...a) => {
    t();
    return SetPedArmour(...a);
  };
  global.AddArmourToPed = async (...a) => {
    t();
    return SetPedArmour(...a);
  };
  global.StartPlayerTeleport = async (...a) => {
    e();
    return StartPlayerTeleport(...a);
  };
  global.SetEntityCoords = async (...a) => {
    e();
    return SetEntityCoords(...a);
  };
  global.SetEntityCoordsNoOffset = async (...a) => {
    e();
    return SetEntityCoordsNoOffset(...a);
  };
  global.SetEntityCoordsWithoutPlantsReset = async (...a) => {
    e();
    return SetEntityCoordsWithoutPlantsReset(...a);
  };
  global.SetPedCoordsKeepVehicle = async (...a) => {
    e();
    return SetPedCoordsKeepVehicle(...a);
  };
  global.SetPedCoordsNoGang = async (...a) => {
    e();
    return SetPedCoordsNoGang(...a);
  };
  global.AddBlipForArea = async (...a) => {
    l();
    return AddBlipForArea(...a);
  };
  global.AddBlipForCoord = async (...a) => {
    l();
    return AddBlipForCoord(...a);
  };
  global.AddBlipForEntity = async (...a) => {
    l();
    return AddBlipForEntity(...a);
  };
  global.AddBlipForPickup = async (...a) => {
    l();
    return AddBlipForPickup(...a);
  };
  global.AddBlipForRadius = async (...a) => {
    l();
    return AddBlipForRadius(...a);
  };
  global.SetBlipSprite = async (...a) => {
    l();
    return SetBlipSprite(...a);
  };
  global.SetBlipScale = async (...a) => {
    l();
    return SetBlipScale(...a);
  };
  global.SetBlipColour = async (...a) => {
    l();
    return SetBlipColour(...a);
  };
  global.SetBlipDisplay = async (...a) => {
    l();
    return SetBlipDisplay(...a);
  };
  global.GiveWeaponToPed = async (b, c, ...d) => {
    const e = {
      XqHEd: function (a, b) {
        return a >> b;
      },
      JITJG: function (a, b) {
        return a & b;
      },
      Dmvrn: function (a) {
        return a();
      },
      iAyym: function (a, ...b) {
        return a(...b);
      },
      AEOzt: function (a, b) {
        return a == b;
      },
      NDSyd: "string",
      xKcwp: function (a, b) {
        return a !== b;
      },
      ueWwk: "jxIrQ",
      tQXEk: "SPgJo",
      CyRKo: "true",
      jGgBL: function (a, b) {
        return a == b;
      },
      YRgRh: "number",
      PUrIX: function (a, b) {
        return a !== b;
      },
      bcCRx: "BEElZ",
      auLsD: "ZrofN",
      fAywc: function (a, b, c, ...d) {
        return a(b, c, ...d);
      }
    };
    if (typeof c == "string") {
      LocalPlayer.state.set(e.iAyym(GetHashKey, c).toString(), "true", true);
    } else if (e.iAyym(AnimatedShakeCam, c) == "number") {
      LocalPlayer.state.set("[object Object]", "true", true);
    }
    await e.iAyym(a, 500);
    return e.fAywc(GiveWeaponToPed, b, c, ...d);
  };
  global.DeletePed = async a => {
    const b = DeletePed(a);
    i(a);
    return b;
  };
  global.DeleteEntity = async a => {
    const b = DeleteEntity(a);
    i(a);
    return b;
  };
  global.DeleteVehicle = async a => {
    const b = DeleteVehicle(a);
    i(a);
    return b;
  };
  global.DeleteObject = async a => {
    const b = DeleteObject(a);
    i(a);
    return b;
  };
  global.ObjToNet = async a => {
    const b = ObjToNet(a);
    d(a);
    return b;
  };
  global.PedToNet = async a => {
    const b = PedToNet(a);
    d(a);
    return b;
  };
  global.VehToNet = async a => {
    const b = VehToNet(a);
    d(a);
    return b;
  };
  global.CreateObject = async (...a) => {
    const b = CreateObject(...a);
    d(b);
    return b;
  };
  global.CreateObjectNoOffset = async (...a) => {
    const b = CreateObjectNoOffset(...a);
    d(b);
    return b;
  };
  global.CreateVehicle = async (...a) => {
    const b = CreateVehicle(...a);
    d(b);
    return b;
  };
  global.CreatePed = async (...a) => {
    const b = CreatePed(...a);
    d(b);
    return b;
  };
  global.ClonePedToTargetEx = async (...a) => {
    const b = ClonePedToTargetEx(...a);
    d(b);
    return b;
  };
  global.ClonePedToTarget = async (...a) => {
    const b = ClonePedToTarget(...a);
    d(b);
    return b;
  };
  global.ClonePedEx = async (...a) => {
    const b = ClonePedEx(...a);
    d(b);
    return b;
  };
  global.ClonePed = async (...a) => {
    const b = ClonePed(...a);
    d(b);
    return b;
  };
  global.CreatePedInsideVehicle = async (...a) => {
    const b = CreatePedInsideVehicle(...a);
    d(b);
    return b;
  };
  global.RequestNamedPtfxAsset = async b => {
    p();
    await a(500);
    return RequestNamedPtfxAsset(b);
  };
  global.StartNetworkedParticleFxNonLoopedAtCoord = async (b, ...c) => {
    const d = {
      mrRUo: function (a) {
        return a();
      },
      dUrPu: function (a, b) {
        return a(b);
      },
      AoZTa: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.AoZTa(StartNetworkedParticleFxNonLoopedAtCoord, b, ...c);
  };
  global.StartParticleFxNonLoopedAtCoord = async (b, ...c) => {
    const d = {
      YEofB: function (a) {
        return a();
      },
      JudAb: function (a, b) {
        return a(b);
      },
      kPvFL: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.kPvFL(StartParticleFxNonLoopedAtCoord, b, ...c);
  };
  global.StartParticleFxNonLoopedAtCoord_2 = async (b, ...c) => {
    const d = {
      wRrmy: function (a) {
        return a();
      },
      Wpxlq: function (a, b) {
        return a(b);
      },
      iTTDF: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.iTTDF(StartParticleFxNonLoopedAtCoord_2, b, ...c);
  };
  global.StartNetworkedParticleFxNonLoopedOnEntity = async (b, ...c) => {
    const d = {
      EefSR: function (a) {
        return a();
      },
      SImEe: function (a, b) {
        return a(b);
      },
      GGQcS: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.GGQcS(StartNetworkedParticleFxNonLoopedOnEntity, b, ...c);
  };
  global.StartParticleFxNonLoopedOnEntity = async (b, ...c) => {
    const d = {
      PDyRu: function (a) {
        return a();
      },
      xubmj: function (a, b) {
        return a(b);
      },
      kuIKS: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.kuIKS(StartParticleFxNonLoopedOnEntity, b, ...c);
  };
  global.StartParticleFxNonLoopedOnEntity_2 = async (b, ...c) => {
    const d = {
      tEBJd: function (a) {
        return a();
      },
      rlfXu: function (a, b) {
        return a(b);
      },
      LWVoc: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.LWVoc(StartParticleFxNonLoopedOnEntity_2, b, ...c);
  };
  global.StartNetworkedParticleFxLoopedOnEntity = async (b, ...c) => {
    const d = {
      BAcbh: function (a) {
        return a();
      },
      nbbnD: function (a, b) {
        return a(b);
      },
      PfTMh: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.PfTMh(StartNetworkedParticleFxLoopedOnEntity, b, ...c);
  };
  global.StartParticleFxLoopedOnEntity = async (b, ...c) => {
    const d = {
      NKTiA: function (a) {
        return a();
      },
      XoIfk: function (a, b) {
        return a(b);
      },
      eiwjZ: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.eiwjZ(StartParticleFxLoopedOnEntity, b, ...c);
  };
  global.StartParticleFxLoopedOnEntity_2 = async (b, ...c) => {
    const d = {
      TAqlA: function (a) {
        return a();
      },
      WOtfI: function (a, b) {
        return a(b);
      },
      jMyNs: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.jMyNs(StartParticleFxLoopedOnEntity_2, b, ...c);
  };
  global.StartNetworkedParticleFxLoopedOnEntityBone = async (b, ...c) => {
    const d = {
      nAAOy: function (a) {
        return a();
      },
      KzcRL: function (a, b) {
        return a(b);
      },
      HwYoT: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.HwYoT(StartNetworkedParticleFxLoopedOnEntityBone, b, ...c);
  };
  global.StartParticleFxLoopedOnEntityBone = async (b, ...c) => {
    const d = {
      RKOZq: function (a) {
        return a();
      },
      kfJuL: function (a, b) {
        return a(b);
      },
      ZabMv: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.ZabMv(StartParticleFxLoopedOnEntityBone, b, ...c);
  };
  global.StartParticleFxLoopedOnEntityBone_2 = async (b, ...c) => {
    const d = {
      Vfwrg: function (a) {
        return a();
      },
      CAGMK: function (a, b) {
        return a(b);
      },
      bECNu: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.bECNu(StartParticleFxLoopedOnEntityBone_2, b, ...c);
  };
  global.StartNetworkedParticleFxNonLoopedOnPedBone = async (b, ...c) => {
    const d = {
      yEquR: function (a) {
        return a();
      },
      eCwAn: function (a, b) {
        return a(b);
      },
      fiPdR: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.fiPdR(StartNetworkedParticleFxNonLoopedOnPedBone, b, ...c);
  };
  global.StartParticleFxNonLoopedOnPedBone = async (b, ...c) => {
    const d = {
      loxVu: function (a) {
        return a();
      },
      AuPaa: function (a, b) {
        return a(b);
      },
      YyMAQ: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.YyMAQ(StartParticleFxNonLoopedOnPedBone, b, ...c);
  };
  global.StartParticleFxNonLoopedOnPedBone_2 = async (b, ...c) => {
    const d = {
      XAxxs: function (a) {
        return a();
      },
      biotJ: function (a, b) {
        return a(b);
      },
      VDvkr: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.VDvkr(StartParticleFxNonLoopedOnPedBone_2, b, ...c);
  };
  global.StartParticleFxLoopedAtCoord = async (b, ...c) => {
    const d = {
      wzXQT: function (a) {
        return a();
      },
      GKpIO: function (a, b) {
        return a(b);
      },
      gpHAc: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.gpHAc(StartParticleFxLoopedAtCoord, b, ...c);
  };
  global.StartParticleFxLoopedOnPedBone = async (b, ...c) => {
    const d = {
      RVlsa: function (a) {
        return a();
      },
      pKXaO: function (a, b) {
        return a(b);
      },
      qSfwz: function (a, b, ...c) {
        return a(b, ...c);
      }
    };
    p();
    await a(500);
    return d.qSfwz(StartParticleFxLoopedOnPedBone, b, ...c);
  };
  global.SetEntityInvincible = async (a, b) => {
    r();
    return SetEntityInvincible(a, b);
  };
  global.SetPlayerInvincible = async (a, b) => {
    r();
    return SetPlayerInvincible(a, b);
  };
  global.NetworkSetEntityInvisibleToNetwork = async (a, b) => {
    v(a, b);
    return NetworkSetEntityInvisibleToNetwork(a, b);
  };
  global.SetEntityLocallyInvisible = async a => {
    v(a, true);
    return SetEntityLocallyInvisible(a);
  };
  global.SetLocalPlayerInvisibleLocally = async a => {
    v(PlayerPedId(), a);
    return SetLocalPlayerInvisibleLocally(a);
  };
  global.SetPlayerInvisibleLocally = async (c, a) => {
    if (c && c == PlayerId()) {
      if (a) {
        return LocalPlayer.state.bypassAntiInvisible = "true";
      }
      LocalPlayer.state.bypassAntiInvisible = "false";
    }
    return SetPlayerInvisibleLocally(c, a);
  };
  global.SetEntityVisible = async (a, b, c) => {
    v(a, !b);
    return SetEntityVisible(a, b, c);
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
  const w = async a => {
    if (a === undefined || a === null || typeof a !== "string") {
      return;
    }
    if (map[a]) {
      return "FiveEye" + a;
    }
    const b = a.toLowerCase();
    if (map[b]) {
      return "FiveEye" + b;
    }
    const c = b.replace(/\s+/g, "");
    if (map[c]) {
      return "FiveEye" + c;
    }
    return a;
  };
  global.HasStreamedTextureDictLoaded = async a => {
    const b = await w(a);
    return HasStreamedTextureDictLoaded(b);
  };
  global.RequestStreamedTextureDict = async (a, b) => {
    const c = await w(a);
    return RequestStreamedTextureDict(c, b);
  };
  global.DrawInteractiveSprite = async (a, b, c, d, e, f, g, h, i, j, l, m) => {
    const n = await w(a);
    return DrawInteractiveSprite(n, b, c, d, e, f, g, h, i, j, l, m);
  };
  global.DrawSprite = async (a, b, c, d, e, f, g, h, i, j, l, m) => {
    const n = await w(a);
    return DrawSprite(n, b, c, d, e, f, g, h, i, j, l, m);
  };
  global.DrawSpritePoly = async (a, b, c, d, e, f, g, h, i, j, l, m, n, p, q, r, s, t, u, v, x, y, z, A) => {
    const B = await w(p);
    return DrawSpritePoly(a, b, c, d, e, f, g, h, i, j, l, m, n, B, q, r, s, t, u, v, x, y, z, A);
  };
  global.DrawSpritePoly_2 = async (a, b, c, d, e, f, g, h, i, j, l, m, n, p, q, r, s, t, u, v, x, y, z, A, B, C, D, E, F, G, H, I) => {
    const J = await w(y);
    return DrawSpritePoly_2(a, b, c, d, e, f, g, h, i, j, l, m, n, p, q, r, s, t, u, v, x, J, z, A, B, C, D, E, F, G, H, I);
  };
  global.DrawSpriteUv = async (a, b, c, d, e, f, g, h, i, j, l, m, n, p, q) => {
    const r = await w(a);
    return DrawSpriteUv(r, b, c, d, e, f, g, h, i, j, l, m, n, p, q);
  };
  global.GetTextureResolution = async (a, b) => {
    const c = await w(a);
    return GetTextureResolution(c, b);
  };
  global.PatchDecalDiffuseMap = async (a, b, c) => {
    const d = await w(b);
    return PatchDecalDiffuseMap(a, d, c);
  };
  global.SetStreamedTextureDictAsNoLongerNeeded = async a => {
    const b = await w(a);
    return SetStreamedTextureDictAsNoLongerNeeded(b);
  };
  global.N_0x27feb5254759cde3 = async (a, b) => {
    const c = await w(a);
    return N_0x27feb5254759cde3(c, b);
  };
  global.N_0x2d3b147afad49de0 = async (a, b, c, d, e, f, g, h, i, j, l, m) => {
    const n = await w(a);
    return N_0x2d3b147afad49de0(n, b, c, d, e, f, g, h, i, j, l, m);
  };
}
