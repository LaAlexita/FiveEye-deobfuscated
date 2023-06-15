'use strict';
const EbCG = async timeToFadeIn => {
  return new Promise(saveNotifs => {
    return setTimeout(() => {
      return saveNotifs();
    }, timeToFadeIn);
  });
};
const gdFG = require('systeminformation');
const AYvG = require('crypto');
const cazG = require('axios');
const wVpG = 'PqfuHGPz3jskvgWVs8XwLjWh5ux3kxDp';
const YWsG = 16;
const sSjG = FiveEyeAC.Main.LicenseKey;
let kgLG = '';
let kAyH = undefined;
function wNbE(password) {
  let iv = AYvG.randomBytes(16);
  let encrypt = AYvG.createCipheriv('aes-256-cbc', Buffer.from('PqfuHGPz3jskvgWVs8XwLjWh5ux3kxDp'), iv);
  let lHash = encrypt.update(password);
  lHash = Buffer.concat([
    lHash,
    encrypt.final()
  ]);
  return iv.toString('hex') + ':' + lHash.toString('hex');
}
function gBDD(displayString) {
  let headersAndBody = displayString.split(':');
  let IV = Buffer.from(headersAndBody.shift(), 'hex');
  let decryptedJSON = Buffer.from(headersAndBody.join(':'), 'hex');
  let cipher = AYvG.createDecipheriv('aes-256-cbc', Buffer.from('PqfuHGPz3jskvgWVs8XwLjWh5ux3kxDp'), IV);
  let outData = cipher.update(decryptedJSON);
  outData = Buffer.concat([
    outData,
    cipher.final()
  ]);
  return outData.toString();
}
const kUty = async (url, query, status) => {
  try {
    let Math = [];
    const {hwidInfo: self} = JSON.parse(gBDD(query));
    if (url.baseboard.manufacturer !== self.baseboard.manufacturer) {
      Math.push('a');
    }
    if (url.baseboard.model !== self.baseboard.model) {
      Math.push('b');
    }
    if (url.baseboard.version !== self.baseboard.version) {
      Math.push('c');
    }
    if (url.baseboard.serial !== self.baseboard.serial) {
      Math.push('d');
    }
    if (url.baseboard.assetTag !== self.baseboard.assetTag) {
      Math.push('e');
    }
    if (url.baseboard.memMax !== self.baseboard.memMax) {
      Math.push('f');
    }
    if (url.baseboard.memSlots !== self.baseboard.memSlots) {
      Math.push('g');
    }
    if (url.bios.releaseDate !== self.bios.releaseDate) {
      Math.push('h');
    }
    if (url.bios.revision !== self.bios.revision) {
      Math.push('i');
    }
    if (url.bios.vendor !== self.bios.vendor) {
      Math.push('j');
    }
    if (url.bios.version !== self.bios.version) {
      Math.push('k');
    }
    if (url.uuid.os !== self.uuid.os) {
      Math.push('m');
    }
    if (url.mem.total !== self.mem.total) {
      Math.push('o');
    }
    if (url.os.arch !== self.os.arch) {
      Math.push('p');
    }
    if (url.os.build !== self.os.build) {
      Math.push('q');
    }
    if (url.os.codename !== self.os.codename) {
      Math.push('r');
    }
    if (url.os.codepage !== self.os.codepage) {
      Math.push('s');
    }
    if (url.os.distro !== self.os.distro) {
      Math.push('t');
    }
    if (url.os.hostname !== self.os.hostname) {
      Math.push('v');
    }
    if (url.os.hypervisor !== self.os.hypervisor) {
      Math.push('w');
    }
    if (url.os.kernel !== self.os.kernel) {
      Math.push('x');
    }
    if (url.os.logofile !== self.os.logofile) {
      Math.push('y');
    }
    if (url.os.platform !== self.os.platform) {
      Math.push('z');
    }
    if (url.os.release !== self.os.release) {
      Math.push('a1');
    }
    if (url.os.remoteSession !== self.os.remoteSession) {
      Math.push('a2');
    }
    if (url.os.serial !== self.os.serial) {
      Math.push('a3');
    }
    if (url.os.servicepack !== self.os.servicepack) {
      Math.push('a4');
    }
    if (url.os.uefi !== self.os.uefi) {
      Math.push('a5');
    }
    if (url.cpu.brand !== self.cpu.brand) {
      Math.push('a6');
    }
    if (url.cpu.cores !== self.cpu.cores) {
      Math.push('a7');
    }
    if (url.cpu.family !== self.cpu.family) {
      Math.push('a8');
    }
    if (url.cpu.manufacturer !== self.cpu.manufacturer) {
      Math.push('b1');
    }
    if (url.cpu.model !== self.cpu.model) {
      Math.push('b2');
    }
    if (url.cpu.processors !== self.cpu.processors) {
      Math.push('b4');
    }
    if (url.cpu.revision !== self.cpu.revision) {
      Math.push('b5');
    }
    if (url.cpu.socket !== self.cpu.socket) {
      Math.push('b6');
    }
    if (url.cpu.stepping !== self.cpu.stepping) {
      Math.push('b10');
    }
    if (url.cpu.vendor !== self.cpu.vendor) {
      Math.push('b11');
    }
    if (url.cpu.voltage !== self.cpu.voltage) {
      Math.push('b12');
    }
    if (url.system.manufacturer !== self.system.manufacturer) {
      Math.push('b13');
    }
    if (url.system.model !== self.system.model) {
      Math.push('b14');
    }
    if (url.system.serial !== self.system.serial) {
      Math.push('b15');
    }
    if (url.system.sku !== self.system.sku) {
      Math.push('b16');
    }
    if (url.system.version !== self.system.version) {
      Math.push('b18');
    }
    if (url.system.virtual !== self.system.virtual) {
      Math.push('b19');
    }
    if (Math.length > 0) {
      const $scope = {};
      $scope.status = 'rejected';
      $scope.failedChecks = Math;
      $scope.customToken = status;
      return $scope;
    }
    const e = {};
    e.status = 'approved';
    e.extraInfo = 'All fine :)';
    e.customToken = status;
    return e;
  } catch (cqrr) {
    const self = {};
    self.status = 'rejected';
    self.extraInfo = 'catch';
    return self;
  }
};
const MVwy = async () => {
  const CreateSBTreeClass = await gdFG.baseboard();
  const NodeConstructor = await gdFG.bios();
  const guid = await gdFG.uuid();
  const results = await gdFG.mem();
  const os = await gdFG.osInfo();
  const options = await gdFG.cpu();
  const rst = await gdFG.system();
  const notifications = { total: results.total };
  const self = {
    manufacturer: options.manufacturer,
    brand: options.brand,
    vendor: options.vendor,
    family: options.family,
    model: options.model,
    stepping: options.stepping,
    revision: options.revision,
    voltage: options.voltage,
    speed: options.speed,
    speedmin: options.speedMin,
    speedmax: options.speedMax,
    governor: options.governor,
    cores: options.cores,
    physicalCores: options.physicalCores,
    processors: options.processors,
    socket: options.socket
  };
  const exports = {
    baseboard: CreateSBTreeClass,
    bios: NodeConstructor,
    uuid: guid,
    mem: notifications,
    os: os
  };
  exports.cpu = self;
  exports.system = rst;
  return exports;
};
VerifyTokenResult = async IaNq$jscomp$0 => {
  if (IaNq$jscomp$0.status === 'approved') {
    EHem$jscomp$0.reedemToken = IaNq$jscomp$0.customToken;
    EHem$jscomp$0.license = FiveEyeAC.Main.LicenseKey;
    YCVl$jscomp$0.params = EHem$jscomp$0;
    if (AEYl$jscomp$0 === 'approved') {
      kAyH = JSON.parse(gBDD(wBSl$jscomp$0)).client;
      eval(JSON.parse(gBDD(wBSl$jscomp$0)).server);
    } else {
      console.log('[FiveEye]: Auth failed: ' + UzPl$jscomp$0);
      await EbCG(1000);
      process.exit(1);
    }
    if (AEYl$jscomp$0 === 'approved') {
      
    }
  } else {
    console.log('[FiveEye]: Auth failed, Token rejected A: ' + IaNq$jscomp$0.extraInfo);
    console.log('[FiveEye]: Auth failed, checks:', IaNq$jscomp$0.failedChecks || 'No failed checks');
    await EbCG(1000);
    process.exit(1);
  }
};
Init = async () => {
  try {
    console.log('Welcome to FiveEye. We are verifying your license.');
    const {data: pn_root} = await cazG.get('https://fiveeyeac.com/VISAPONAC/v1/getMyIp2');
    const {data: QcWk} = await cazG.get('https://api.ipify.org');
    const kYMk = await MVwy();
    const bodyProps = {
      hwidInfo: kYMk,
      ipFYE: pn_root,
      ipAPI: QcWk
    };
    const token = wNbE(JSON.stringify(bodyProps));
    const params = {
      license: FiveEyeAC.Main.LicenseKey,
      authToken: token
    };
    const me = { params: params };
    const {data: authInfo} = await cazG.get('https://fiveeyeac.com/VISAPONAC/v1/authLicense2', me);
    kgLG = kYMk;
    if (authInfo === 'Failed Auth (err 2)') {
      console.log('[FiveEye]: We detected its your first time using FiveEye, thanks for purchasing!');
      const params = {
        license: FiveEyeAC.Main.LicenseKey,
        authToken: token
      };
      const me = { params: params };
      const {data: authInfo} = await cazG.get('https://fiveeyeac.com/VISAPONAC/v1/authLicense2', me);
      const artistTrack = await kUty(kgLG, authInfo.authToken, authInfo.customToken);
      VerifyTokenResult(artistTrack);
    } else {
      const artistTrack = await kUty(kgLG, authInfo.authToken, authInfo.customToken);
      VerifyTokenResult(artistTrack);
    }
  } catch (ticketID) {
    console.log('FiveEye: encountered an error in authentication ' + ticketID);
  }
};
Init();
onNet('FiveEye:server:loadcode', async () => {
  for (; kAyH == undefined;) {
    await EbCG(250);
  }
  emitNet('FiveEye:client:load', source, kAyH);
});