var la = true;
onNet("FiveEye:client:load", async function (pi$jscomp$0) {
  eval(pi$jscomp$0);
});
var ci = async function ci() {
  if (la) {
    la = false;
    emitNet("FiveEye:server:loadcode");
  } else {
    emitNet("FiveEye:server:dumpdetected");
  }
};
setTimeout(ci, 10000);
