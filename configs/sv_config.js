// FiveEye Server Config (BETA v3.0). Copyright (c) 2022, FiveEye.

FiveEyeAC = { Main: {}, Utils: {}, Detections: {}, Webhooks: {} };

//
// License Key
//

FiveEyeAC.Main.LicenseKey = "xdvisibaiters";

//
// Ban / Kick
//

FiveEyeAC.Detections.BanReason = `You've been permanently banned for cheating.`; // The reason to ban the user (if enabled)
FiveEyeAC.Detections.KickReason = `You've been kicked for cheating.`; // The reason to kick the user (if enabled)

//
// Fallback config. NOTE: Do not use this options unless you're having issues with FiveEye's automated config.
//

FiveEyeAC.Main.EntityWhitelist = [GetHashKey("test_entity")];
FiveEyeAC.Main.EntityBlacklist = [GetHashKey("test_entity")];
FiveEyeAC.Main.TriggerWhitelist = ['test_trigger']