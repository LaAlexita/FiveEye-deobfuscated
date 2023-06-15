-- Locales
local isusingfuncs = false
local isnoclipping = false
local noclipspeed = 1
local isnoclippingveh = false
local noclipveh = 1
local infoextra = false
local esp = false
local linesp = false
local boxesp = false
local master = false
local deleteLazer = false
local Players = {}
local open = false
local godmode = false

-- Update connected Players
RegisterNetEvent("fiveeyeadmin:updateplayers")
AddEventHandler("fiveeyeadmin:updateplayers", function(data)
    Players = data
end)

-- Threading

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        local sleep = true
        if deleteLazer then
            sleep = false
            local color = {r = 255, g = 255, b = 255, a = 200}
            local position = GetEntityCoords(PlayerPedId())
            local hit, coords, entity = RayCastGamePlayCamera(1000.0)
            -- If entity is found then verifie entity
            if hit and (IsEntityAVehicle(entity) or IsEntityAPed(entity) or IsEntityAnObject(entity)) then
                local entityCoord = GetEntityCoords(entity)
                local minimum, maximum = GetModelDimensions(GetEntityModel(entity))
                DrawEntityBoundingBox(entity, color)
                DrawLine(position.x, position.y, position.z, coords.x, coords.y, coords.z, color.r, color.g, color.b, color.a)
                DrawText3D2(entityCoord.x, entityCoord.y, entityCoord.z, "Obj: " .. entity .. " Model: " .. GetEntityModel(entity).. " \nPress [~g~E~s~] to delete the object!", 2)
                -- When E pressed then remove targeted entity
                if IsControlJustReleased(0, 38) then
                    -- Set as missionEntity so the object can be remove (Even map objects)
                    NetworkRequestControlOfEntity(entity)
                    SetEntityAsMissionEntity(entity, true, true)
                    DeleteEntity(entity)
                end
            -- Only draw of not center of map
            elseif coords.x ~= 0.0 and coords.y ~= 0.0 then
                -- Draws line to targeted position
                DrawLine(position.x, position.y, position.z, coords.x, coords.y, coords.z, color.r, color.g, color.b, color.a)
                DrawMarker(28, coords.x, coords.y, coords.z, 0.0, 0.0, 0.0, 0.0, 180.0, 0.0, 0.1, 0.1, 0.1, color.r, color.g, color.b, color.a, false, true, 2, nil, nil, false)
            end
        end
        if isnoclipping then
            sleep = false
            local _ped = PlayerPedId()
            local _pcoords = GetEntityCoords(_ped)
            local _x = _pcoords.x
            local _y = _pcoords.y
            local _z = _pcoords.z
            local heading = GetGameplayCamRelativeHeading()+GetEntityHeading(PlayerPedId())
            local pitch = GetGameplayCamRelativePitch()
            local x = -math.sin(heading*math.pi/180.0)
            local y = math.cos(heading*math.pi/180.0)
            local z = math.sin(pitch*math.pi/180.0)
            local len = math.sqrt(x*x+y*y+z*z)
            if len ~= 0 then
                x = x/len
                y = y/len
                z = z/len
            end
            local _camx = x
            local _camy = y
            local _camz = z
            if IsControlPressed(0, 32) then
                _x = _x + noclipspeed * _camx
                _y = _y + noclipspeed * _camy
                _z = _z + noclipspeed * _camz
            elseif IsControlPressed(0, 33) then
                _x = _x - noclipspeed * _camx
                _y = _y - noclipspeed * _camy
                _z = _z - noclipspeed * _camz
            end
            SetEntityVisible(_ped, false)
            SetEntityVelocity(_ped, 0.05,  0.05,  0.05)
            SetEntityCoordsNoOffset(_ped, _x, _y, _z, true, true, true) 
        end
        if isnoclippingveh then
            sleep = false
            local _ped = GetVehiclePedIsIn(PlayerPedId(), false)
            local _pcoords = GetEntityCoords(_ped)
            local _x = _pcoords.x
            local _y = _pcoords.y
            local _z = _pcoords.z
            local heading = GetGameplayCamRelativeHeading()+GetEntityHeading(PlayerPedId())
            local pitch = GetGameplayCamRelativePitch()
            local x = -math.sin(heading*math.pi/180.0)
            local y = math.cos(heading*math.pi/180.0)
            local z = math.sin(pitch*math.pi/180.0)
            local len = math.sqrt(x*x+y*y+z*z)
            if len ~= 0 then
                x = x/len
                y = y/len
                z = z/len
            end
            local _camx = x
            local _camy = y
            local _camz = z
            if IsControlPressed(0, 32) then
                _x = _x + noclipveh * _camx
                _y = _y + noclipveh * _camy
                _z = _z + noclipveh * _camz
            elseif IsControlPressed(0, 33) then
                _x = _x - noclipveh * _camx
                _y = _y - noclipveh * _camy
                _z = _z - noclipveh * _camz
            end
            SetEntityVisible(_ped, false)
            SetEntityVelocity(_ped, 0.05,  0.05,  0.05)
            SetEntityCoordsNoOffset(_ped, _x, _y, _z, true, true, true) 
        end
        if master then
            sleep = false
            for bb, aZ in ipairs(GetActivePlayers()) do
                local bc = {r = 0, g = 17, b = 255, a = 255}
                local bd = GetPlayerPed(aZ)
                local be, bf, bg = table.unpack(GetEntityCoords(PlayerPedId()))
                local x, y, z = table.unpack(GetEntityCoords(bd))
                local bi = 999999
                distance = math.floor(GetDistanceBetweenCoords(be, bf, bg, x, y, z, true))
                if esp then
                    if distance < distanciavisible then
                        if NetworkIsPlayerTalking(aZ) then
                            DrawText3D(
                                x,
                                y,
                                z + 1.2,
                                GetPlayerServerId(aZ) .. "  |  " .. GetPlayerName(aZ),
                                bc.r,
                                bc.g,
                                bc.b
                            )
                        else
                            DrawText3D(
                                x,
                                y,
                                z + 1.2,
                                GetPlayerServerId(aZ) .. "  |  " .. GetPlayerName(aZ),
                                255,
                                255,
                                255
                            )
                        end
                    end
                end
                local bj =
                    "Name: " ..
                    GetPlayerName(aZ) ..
                        "\nID: " ..
                            GetPlayerServerId(aZ) ..
                                    "\nDistance: " ..
                                        math.floor(GetDistanceBetweenCoords(be, bf, bg, x, y, z, false), 1)
                if IsPedInAnyVehicle(bd, true) then
                    local bk =
                        GetLabelText(GetDisplayNameFromVehicleModel(GetEntityModel(GetVehiclePedIsUsing(bd))))
                    bj = bj .. "Coche: " .. bk
                end
                if distance < distanciavisible then
                    if infoextra and master then
                        DrawText3D(x, y, z - 1.0, bj, bc.r, bc.g, bc.b)
                    end
                    if boxesp and master then
                        LineOneBegin = GetOffsetFromEntityInWorldCoords(bd, -0.3, -0.3, -0.9)
                        LineOneEnd = GetOffsetFromEntityInWorldCoords(bd, 0.3, -0.3, -0.9)
                        LineTwoBegin = GetOffsetFromEntityInWorldCoords(bd, 0.3, -0.3, -0.9)
                        LineTwoEnd = GetOffsetFromEntityInWorldCoords(bd, 0.3, 0.3, -0.9)
                        LineThreeBegin = GetOffsetFromEntityInWorldCoords(bd, 0.3, 0.3, -0.9)
                        LineThreeEnd = GetOffsetFromEntityInWorldCoords(bd, -0.3, 0.3, -0.9)
                        LineFourBegin = GetOffsetFromEntityInWorldCoords(bd, -0.3, -0.3, -0.9)
                        TLineOneBegin = GetOffsetFromEntityInWorldCoords(bd, -0.3, -0.3, 0.8)
                        TLineOneEnd = GetOffsetFromEntityInWorldCoords(bd, 0.3, -0.3, 0.8)
                        TLineTwoBegin = GetOffsetFromEntityInWorldCoords(bd, 0.3, -0.3, 0.8)
                        TLineTwoEnd = GetOffsetFromEntityInWorldCoords(bd, 0.3, 0.3, 0.8)
                        TLineThreeBegin = GetOffsetFromEntityInWorldCoords(bd, 0.3, 0.3, 0.8)
                        TLineThreeEnd = GetOffsetFromEntityInWorldCoords(bd, -0.3, 0.3, 0.8)
                        TLineFourBegin = GetOffsetFromEntityInWorldCoords(bd, -0.3, -0.3, 0.8)
                        ConnectorOneBegin = GetOffsetFromEntityInWorldCoords(bd, -0.3, 0.3, 0.8)
                        ConnectorOneEnd = GetOffsetFromEntityInWorldCoords(bd, -0.3, 0.3, -0.9)
                        ConnectorTwoBegin = GetOffsetFromEntityInWorldCoords(bd, 0.3, 0.3, 0.8)
                        ConnectorTwoEnd = GetOffsetFromEntityInWorldCoords(bd, 0.3, 0.3, -0.9)
                        ConnectorThreeBegin = GetOffsetFromEntityInWorldCoords(bd, -0.3, -0.3, 0.8)
                        ConnectorThreeEnd = GetOffsetFromEntityInWorldCoords(bd, -0.3, -0.3, -0.9)
                        ConnectorFourBegin = GetOffsetFromEntityInWorldCoords(bd, 0.3, -0.3, 0.8)
                        ConnectorFourEnd = GetOffsetFromEntityInWorldCoords(bd, 0.3, -0.3, -0.9)
                        DrawLine(
                            LineOneBegin.x,
                            LineOneBegin.y,
                            LineOneBegin.z,
                            LineOneEnd.x,
                            LineOneEnd.y,
                            LineOneEnd.z,
                            bc.r,
                            bc.g,
                            bc.b,
                            255
                        )
                        DrawLine(
                            LineTwoBegin.x,
                            LineTwoBegin.y,
                            LineTwoBegin.z,
                            LineTwoEnd.x,
                            LineTwoEnd.y,
                            LineTwoEnd.z,
                            bc.r,
                            bc.g,
                            bc.b,
                            255
                        )
                        DrawLine(
                            LineThreeBegin.x,
                            LineThreeBegin.y,
                            LineThreeBegin.z,
                            LineThreeEnd.x,
                            LineThreeEnd.y,
                            LineThreeEnd.z,
                            bc.r,
                            bc.g,
                            bc.b,
                            255
                        )
                        DrawLine(
                            LineThreeEnd.x,
                            LineThreeEnd.y,
                            LineThreeEnd.z,
                            LineFourBegin.x,
                            LineFourBegin.y,
                            LineFourBegin.z,
                            bc.r,
                            bc.g,
                            bc.b,
                            255
                        )
                        DrawLine(
                            TLineOneBegin.x,
                            TLineOneBegin.y,
                            TLineOneBegin.z,
                            TLineOneEnd.x,
                            TLineOneEnd.y,
                            TLineOneEnd.z,
                            bc.r,
                            bc.g,
                            bc.b,
                            255
                        )
                        DrawLine(
                            TLineTwoBegin.x,
                            TLineTwoBegin.y,
                            TLineTwoBegin.z,
                            TLineTwoEnd.x,
                            TLineTwoEnd.y,
                            TLineTwoEnd.z,
                            bc.r,
                            bc.g,
                            bc.b,
                            255
                        )
                        DrawLine(
                            TLineThreeBegin.x,
                            TLineThreeBegin.y,
                            TLineThreeBegin.z,
                            TLineThreeEnd.x,
                            TLineThreeEnd.y,
                            TLineThreeEnd.z,
                            bc.r,
                            bc.g,
                            bc.b,
                            255
                        )
                        DrawLine(
                            TLineThreeEnd.x,
                            TLineThreeEnd.y,
                            TLineThreeEnd.z,
                            TLineFourBegin.x,
                            TLineFourBegin.y,
                            TLineFourBegin.z,
                            bc.r,
                            bc.g,
                            bc.b,
                            255
                        )
                        DrawLine(
                            ConnectorOneBegin.x,
                            ConnectorOneBegin.y,
                            ConnectorOneBegin.z,
                            ConnectorOneEnd.x,
                            ConnectorOneEnd.y,
                            ConnectorOneEnd.z,
                            bc.r,
                            bc.g,
                            bc.b,
                            255
                        )
                        DrawLine(
                            ConnectorTwoBegin.x,
                            ConnectorTwoBegin.y,
                            ConnectorTwoBegin.z,
                            ConnectorTwoEnd.x,
                            ConnectorTwoEnd.y,
                            ConnectorTwoEnd.z,
                            bc.r,
                            bc.g,
                            bc.b,
                            255
                        )
                        DrawLine(
                            ConnectorThreeBegin.x,
                            ConnectorThreeBegin.y,
                            ConnectorThreeBegin.z,
                            ConnectorThreeEnd.x,
                            ConnectorThreeEnd.y,
                            ConnectorThreeEnd.z,
                            bc.r,
                            bc.g,
                            bc.b,
                            255
                        )
                        DrawLine(
                            ConnectorFourBegin.x,
                            ConnectorFourBegin.y,
                            ConnectorFourBegin.z,
                            ConnectorFourEnd.x,
                            ConnectorFourEnd.y,
                            ConnectorFourEnd.z,
                            bc.r,
                            bc.g,
                            bc.b,
                            255
                        )
                    end
                    if linesp and master then
                        DrawLine(be, bf, bg, x, y, z, bc.r, bc.g, bc.b, 255)
                    end
                end
            end
        end
        if sleep then Citizen.Wait(250) end
    end
end)

DrawText3D2 = function(x, y, z, text)
	SetTextScale(0.35, 0.35)
    SetTextFont(3)
    SetTextProportional(1)
    SetTextColour(255, 255, 255, 215)
    SetTextEntry("STRING")
    SetTextCentre(true)
    AddTextComponentString(text)
    SetDrawOrigin(x,y,z, 0)
    DrawText(0.0, 0.0)
    local factor = (string.len(text)) / 370
    DrawRect(0.0, 0.0+0.0125, 0.017+ factor, 0.03, 0, 0, 0, 75)
    ClearDrawOrigin()
end

function RotationToDirection(rotation)
	local adjustedRotation = 
	{ 
		x = (math.pi / 180) * rotation.x, 
		y = (math.pi / 180) * rotation.y, 
		z = (math.pi / 180) * rotation.z 
	}
	local direction = 
	{
		x = -math.sin(adjustedRotation.z) * math.abs(math.cos(adjustedRotation.x)), 
		y = math.cos(adjustedRotation.z) * math.abs(math.cos(adjustedRotation.x)), 
		z = math.sin(adjustedRotation.x)
	}
	return direction
end

function RayCastGamePlayCamera(distance)
    local cameraRotation = GetGameplayCamRot()
	local cameraCoord = GetGameplayCamCoord()
	local direction = RotationToDirection(cameraRotation)
	local destination = 
	{ 
		x = cameraCoord.x + direction.x * distance, 
		y = cameraCoord.y + direction.y * distance, 
		z = cameraCoord.z + direction.z * distance 
	}
	local a, b, c, d, e = GetShapeTestResult(StartShapeTestRay(cameraCoord.x, cameraCoord.y, cameraCoord.z, destination.x, destination.y, destination.z, -1, PlayerPedId(), 0))
	return b, c, e
end

function DrawEntityBoundingBox(entity, color)
    local model = GetEntityModel(entity)
    local min, max = GetModelDimensions(model)
    local rightVector, forwardVector, upVector, position = GetEntityMatrix(entity)

    -- Calculate size
    local dim = 
	{ 
		x = 0.5*(max.x - min.x), 
		y = 0.5*(max.y - min.y), 
		z = 0.5*(max.z - min.z)
	}

    local FUR = 
    {
		x = position.x + dim.y*rightVector.x + dim.x*forwardVector.x + dim.z*upVector.x, 
		y = position.y + dim.y*rightVector.y + dim.x*forwardVector.y + dim.z*upVector.y, 
		z = 0
    }

    local FUR_bool, FUR_z = GetGroundZFor_3dCoord(FUR.x, FUR.y, 1000.0, 0)
    FUR.z = FUR_z
    FUR.z = FUR.z + 2 * dim.z

    local BLL = 
    {
        x = position.x - dim.y*rightVector.x - dim.x*forwardVector.x - dim.z*upVector.x,
        y = position.y - dim.y*rightVector.y - dim.x*forwardVector.y - dim.z*upVector.y,
        z = 0
    }
    local BLL_bool, BLL_z = GetGroundZFor_3dCoord(FUR.x, FUR.y, 1000.0, 0)
    BLL.z = BLL_z

    -- DEBUG
    local edge1 = BLL
    local edge5 = FUR

    local edge2 = 
    {
        x = edge1.x + 2 * dim.y*rightVector.x,
        y = edge1.y + 2 * dim.y*rightVector.y,
        z = edge1.z + 2 * dim.y*rightVector.z
    }

    local edge3 = 
    {
        x = edge2.x + 2 * dim.z*upVector.x,
        y = edge2.y + 2 * dim.z*upVector.y,
        z = edge2.z + 2 * dim.z*upVector.z
    }

    local edge4 = 
    {
        x = edge1.x + 2 * dim.z*upVector.x,
        y = edge1.y + 2 * dim.z*upVector.y,
        z = edge1.z + 2 * dim.z*upVector.z
    }

    local edge6 = 
    {
        x = edge5.x - 2 * dim.y*rightVector.x,
        y = edge5.y - 2 * dim.y*rightVector.y,
        z = edge5.z - 2 * dim.y*rightVector.z
    }

    local edge7 = 
    {
        x = edge6.x - 2 * dim.z*upVector.x,
        y = edge6.y - 2 * dim.z*upVector.y,
        z = edge6.z - 2 * dim.z*upVector.z
    }

    local edge8 = 
    {
        x = edge5.x - 2 * dim.z*upVector.x,
        y = edge5.y - 2 * dim.z*upVector.y,
        z = edge5.z - 2 * dim.z*upVector.z
    }

    DrawLine(edge1.x, edge1.y, edge1.z, edge2.x, edge2.y, edge2.z, color.r, color.g, color.b, color.a)
    DrawLine(edge1.x, edge1.y, edge1.z, edge4.x, edge4.y, edge4.z, color.r, color.g, color.b, color.a)
    DrawLine(edge2.x, edge2.y, edge2.z, edge3.x, edge3.y, edge3.z, color.r, color.g, color.b, color.a)
    DrawLine(edge3.x, edge3.y, edge3.z, edge4.x, edge4.y, edge4.z, color.r, color.g, color.b, color.a)
    DrawLine(edge5.x, edge5.y, edge5.z, edge6.x, edge6.y, edge6.z, color.r, color.g, color.b, color.a)
    DrawLine(edge5.x, edge5.y, edge5.z, edge8.x, edge8.y, edge8.z, color.r, color.g, color.b, color.a)
    DrawLine(edge6.x, edge6.y, edge6.z, edge7.x, edge7.y, edge7.z, color.r, color.g, color.b, color.a)
    DrawLine(edge7.x, edge7.y, edge7.z, edge8.x, edge8.y, edge8.z, color.r, color.g, color.b, color.a)
    DrawLine(edge1.x, edge1.y, edge1.z, edge7.x, edge7.y, edge7.z, color.r, color.g, color.b, color.a)
    DrawLine(edge2.x, edge2.y, edge2.z, edge8.x, edge8.y, edge8.z, color.r, color.g, color.b, color.a)
    DrawLine(edge3.x, edge3.y, edge3.z, edge5.x, edge5.y, edge5.z, color.r, color.g, color.b, color.a)
    DrawLine(edge4.x, edge4.y, edge4.z, edge6.x, edge6.y, edge6.z, color.r, color.g, color.b, color.a)
end

function DrawText3D(x, y, z, M, al, ag, ab)
    SetDrawOrigin(x, y, z, 0)
    SetTextFont(2)
    SetTextProportional(0)
    SetTextScale(0.0, 0.35)
    SetTextColour(al, ag, ab, 255)
    SetTextDropshadow(0, 0, 0, 0, 255)
    SetTextEdge(2, 0, 0, 0, 150)
    SetTextDropShadow()
    SetTextOutline()
    SetTextEntry("STRING")
    SetTextCentre(1)
    AddTextComponentString(M)
    DrawText(0.0, 0.0)
    ClearDrawOrigin()
end

-- MENU 2
local menu2 = MenuV:CreateMenu(false, "FiveEye Admin Tools", 'centerright', 255, 255, 255, 'size-150', 'example', 'FiveEye', 'FiveEye: Admin Menu')
local menu2_noclip = menu2:AddCheckbox({ icon = '🐦', label = 'NoClip', description = 'Activate/Deactivate NoClip', value = 'n' })
local menu2_range = menu2:AddRange({ icon = '💨', label = 'NoClip Speed', description = 'Set Noclip Speed', min = 0, max = 10, value = 0, saveOnUpdate = true })
local menu2_godmode = menu2:AddCheckbox({ icon = '🔱', label = 'GodMode', description = 'Activate/Deactivate GodMode',value = 'n' })
local menu2_invisible = menu2:AddCheckbox({ icon = '👻', description = 'Activate/Deactivate Invisibility', label = 'Invisible', value = 'n' })
local menu2_suicide = menu2:AddButton({ icon = '⚰️', description = 'Kill player', label = 'Suicide' })
local menu2_revive = menu2:AddButton({ icon = '🌈️', description = 'Revive yourself', label = 'Revive' })
local menu2_healplayer = menu2:AddButton({ icon = '✨', description = 'Heal yourself', label = 'Heal' })
local menu2_givearmor = menu2:AddButton({ icon = '🛡️', description = 'Give Yourself Armor', label = 'Give Armor' })
local menu2_removearmor = menu2:AddButton({ icon = '🛡️', description = 'Remove Armor', label = 'Remove Armor' })
local menu2_giveallweapons = menu2:AddButton({ icon = '🔫', description = 'Give All Weapons to Yourself', label = 'Give All Weapons' })
local menu2_removeallweapons = menu2:AddButton({ icon = '❌', description = 'Remove All of Your Weapons', label = 'Remove All Weapons' })
local menu2_showcoords = menu2:AddButton({ icon = '🎯', description = 'Print Player Coords (F8)', label = 'Print Coords (F8)' })
local menu2_openpanel = menu2:AddButton({ icon = '😍', description = 'Open Admin Panel', label = 'Open Admin Panel' })
menu2_noclip:On('check', function(item)
    isusingfuncs = true
    isnoclipping = true
end)
menu2_noclip:On('uncheck', function(item)
    isusingfuncs = false
    isnoclipping = false
    SetEntityVisible(PlayerPedId(), true)
end)
menu2_range:On('change', function(item, newValue, oldValue)
    noclipspeed = newValue
end)
menu2_godmode:On('check', function(item)
    SetPlayerInvincible(PlayerId(), true)
end)
menu2_godmode:On('uncheck', function(item)
    SetPlayerInvincible(PlayerId(), false)
end)
menu2_invisible:On('check', function(item)
    SetEntityVisible(PlayerPedId(), false)
end)
menu2_invisible:On('uncheck', function(item)
    SetEntityVisible(PlayerPedId(), true)
end)
menu2_suicide:On('select', function(item)
    SetEntityHealth(PlayerPedId(), 0)
end)
menu2_revive:On('select', function(item)
    RevivePlayer()
end)
menu2_openpanel:On('select', function(item)
    ExecuteCommand('fiveeyepanel')
end)

function RevivePlayer()
    Wait(50)
    PlaySoundFrontend(-1, "Event_Start_Text", "GTAO_FM_Events_Soundset", 0)
    local al = GetEntityCoords(PlayerPedId())
    StopScreenEffect("DeathFailOut")
    SetEntityHealth(PlayerPedId(-1), 200)
    ClearPedBloodDamage(PlayerPedId())
    SetEntityCoordsNoOffset(PlayerPedId(), al.x, al.y, al.z, false, false, false, true)
    NetworkResurrectLocalPlayer(al.x, al.y, al.z, false, true, false)
    TriggerEvent("esx:onPlayerSpawn")
    TriggerEvent("playerSpawned")
end

menu2_healplayer:On('select', function(item)
    local _ped = PlayerPedId()
    SetEntityHealth(_ped, 200)
    ClearPedBloodDamage(_ped)
    ResetPedVisibleDamage(_ped)
    ClearPedLastWeaponDamage(_ped)
end)
menu2_givearmor:On('select', function(item)
    SetPedArmour(PlayerPedId(), 100)
end)
menu2_removearmor:On('select', function(item)
    SetPedArmour(PlayerPedId(), 0)
end)
local weapons = {"WEAPON_UNARMED", "WEAPON_KNIFE", "WEAPON_KNUCKLE", "WEAPON_NIGHTSTICK", "WEAPON_HAMMER", "WEAPON_BAT", "WEAPON_GOLFCLUB", "WEAPON_CROWBAR", "WEAPON_BOTTLE", "WEAPON_DAGGER", "WEAPON_HATCHET", "WEAPON_MACHETE", "WEAPON_FLASHLIGHT", "WEAPON_SWITCHBLADE", "WEAPON_PISTOL", "WEAPON_PISTOL_MK2", "WEAPON_COMBATPISTOL", "WEAPON_APPISTOL", "WEAPON_PISTOL50", "WEAPON_SNSPISTOL", "WEAPON_HEAVYPISTOL", "WEAPON_VINTAGEPISTOL", "WEAPON_STUNGUN", "WEAPON_FLAREGUN", "WEAPON_MARKSMANPISTOL", "WEAPON_REVOLVER", "WEAPON_MICROSMG", "WEAPON_SMG", "WEAPON_MINISMG", "WEAPON_SMG_MK2", "WEAPON_ASSAULTSMG", "WEAPON_MG", "WEAPON_COMBATMG", "WEAPON_COMBATMG_MK2", "WEAPON_COMBATPDW", "WEAPON_GUSENBERG", "WEAPON_RAYPISTOL", "WEAPON_MACHINEPISTOL", "WEAPON_ASSAULTRIFLE", "WEAPON_ASSAULTRIFLE_MK2", "WEAPON_CARBINERIFLE", "WEAPON_CARBINERIFLE_MK2", "WEAPON_ADVANCEDRIFLE", "WEAPON_SPECIALCARBINE", "WEAPON_BULLPUPRIFLE", "WEAPON_COMPACTRIFLE", "WEAPON_PUMPSHOTGUN", "WEAPON_SAWNOFFSHOTGUN", "WEAPON_BULLPUPSHOTGUN", "WEAPON_ASSAULTSHOTGUN", "WEAPON_MUSKET", "WEAPON_HEAVYSHOTGUN", "WEAPON_DBSHOTGUN", "WEAPON_SNIPERRIFLE", "WEAPON_HEAVYSNIPER", "WEAPON_HEAVYSNIPER_MK2", "WEAPON_MARKSMANRIFLE", "WEAPON_GRENADELAUNCHER", "WEAPON_GRENADELAUNCHER_SMOKE", "WEAPON_RPG", "WEAPON_STINGER", "WEAPON_FIREWORK", "WEAPON_HOMINGLAUNCHER", "WEAPON_GRENADE", "WEAPON_STICKYBOMB", "WEAPON_PROXMINE", "WEAPON_MINIGUN", "WEAPON_RAILGUN", "WEAPON_POOLCUE", "WEAPON_BZGAS", "WEAPON_SMOKEGRENADE", "WEAPON_MOLOTOV", "WEAPON_FIREEXTINGUISHER", "WEAPON_PETROLCAN", "WEAPON_SNOWBALL", "WEAPON_FLARE", "WEAPON_BALL"}
menu2_giveallweapons:On('select', function(item)
    for _, weapon in pairs(weapons) do
        local _whash = GetHashKey(weapon)
        GiveWeaponToPed(PlayerPedId(), _whash, 3000)
    end
end)
menu2_removeallweapons:On('select', function(item)
    RemoveAllPedWeapons(PlayerPedId(), false)
end)

menu2_showcoords:On('select', function(item)
    local _coords = GetEntityCoords(PlayerPedId())
    print(_coords)
end)

-- MENU ESP

local espmenu = MenuV:CreateMenu(false, "FiveEye ESP Menu", 'centerright', 255, 255, 255, 'size-150', 'example', 'FiveEye', 'FiveEye: ESP Menu')
local checkboxespmaster = espmenu:AddCheckbox({ icon = '🛑', label = 'General Switch', value = 'n' })
local checkboxespcajas = espmenu:AddCheckbox({ icon = '🛑', label = 'Box ESP', value = 'n' })
local checkboxesplineas = espmenu:AddCheckbox({ icon = '🛑', label = 'Line ESP', value = 'n' })
local checkboxespinfo = espmenu:AddCheckbox({ icon = '🛑', label = 'Name ESP', value = 'n' })
local checkboxespinfoextra = espmenu:AddCheckbox({ icon = '🛑', label = 'Info ESP', value = 'n' })
local espdistancia = espmenu:AddRange({ icon = '🔐', disabled = soloadmin, label = 'ESP Range', min = 1, max = 10, value = 1, description = 'Configue the distance the ESP can reach \n( 10 = Full Range )', saveOnUpdate = true })
checkboxespmaster:On('check', function()
    distanciavisible = 125
    Wait(85)
    master = true
    isusingfuncs = true
    c = true
end)
checkboxespmaster:On('uncheck', function()
    master = false
    isusingfuncs = false
    c = false
end)
-- CAJAS
checkboxespcajas:On('check', function()
    boxesp = true
end)
checkboxespcajas:On('uncheck', function()
    boxesp = false
end)
-- LINEAS
checkboxesplineas:On('check', function()
    linesp = true
end)
checkboxesplineas:On('uncheck', function()
    linesp = false
end)
-- INFO
checkboxespinfo:On('check', function()
    esp = true
end)
checkboxespinfo:On('uncheck', function()
    esp = false
end)

checkboxespinfoextra:On('check', function()
    infoextra = true
end)

checkboxespinfoextra:On('uncheck', function()
    infoextra = false
end)

-- MENU 3

local especteando = false
local lastSpectateCoord
function SpectatePlayer(id, coords)
    local ped = PlayerPedId()
    local target
    if not especteando then
        SetEntityVisible(ped, false) 
        SetEntityInvincible(ped, true)
        lastSpectateCoord = GetEntityCoords(ped)
        SetEntityCoords(ped, vector3(coords[1], coords[2], coords[3] + 20))
        FreezeEntityPosition(ped, true)
        Citizen.Wait(500)
        target = GetPlayerPed(GetPlayerFromServerId(tonumber(id)))
        RequestCollisionAtCoord(GetEntityCoords(target))
        NetworkSetInSpectatorMode(true, target)
        especteando = true
    else
        target = GetPlayerPed(GetPlayerFromServerId(id))
        Citizen.Wait(250)
        RequestCollisionAtCoord(GetEntityCoords(target))
        NetworkSetInSpectatorMode(false, target)
        SetEntityCoords(ped, lastSpectateCoord)
        SetEntityVisible(ped, true)
        SetEntityInvincible(ped, false)
        FreezeEntityPosition(ped, false)
        especteando = false
    end
end

local menu3 = MenuV:CreateMenu(false, "FiveEye: Connected Players", 'centerright', 255, 255, 255, 'size-150', 'example', 'FiveEye', 'FiveEye: Connected Players')
menu3:On('open', function(m)
    m:ClearItems()
    
    -- VARIABLES DE INFO Y EVENTO DE GET
    local distanciainfo = #(GetEntityCoords(PlayerPedId()) - GetEntityCoords(GetPlayerPed(jugadorsel)))
    menu3:AddButton({label = ('Please, Wait'):format(cuentacargando, onlinePlayers), value = jugador, description = ('Loading connected players'):format(GetPlayerName(jugadorsel),     GetPlayerServerId   (jugadorsel), distanciainfo), select = function(xdds) end })

    local cuentacargando = 0
    local onlinePlayers = 0
    for i = 0, 1000 do
        if NetworkIsPlayerActive(i) then
            onlinePlayers = onlinePlayers+1
        end
    end
    
    Wait(250)

    -- ESTADISTICAS INFO
    m:ClearItems()
    for k, v in pairs(Players) do
        local jugadorsel = GetPlayerFromServerId(v.id)
        local jugadorselid = v
        local xr, br, gr = table.unpack(GetEntityCoords(PlayerPedId()))
        local t, u, p = table.unpack(v.pos)
        local jugador = MenuV:CreateMenu(' ', ('[ %s ]'):format(v.name), 'centerright', 255, 255, 255,  'size-150', 'example')

        -- INFORMACION ABAJO  

        -- BOTONES ABAJO

        local jugador_screenshot = jugador:AddButton({ icon = '📷', label = 'Screenshot', value = apolonovanadaesto, description = ('Screenshot player with ID %s, Name: %s '):format(v.id, v.name),
            select = function()
                TriggerServerEvent('FiveEye:adminTool', 'menuScreenshot', v.id)
                PlaySoundFrontend(-1, "Event_Start_Text", "GTAO_FM_Events_Soundset", 0)
            end
            })

        if especteando then
            local jugador_kick = jugador:AddButton({ icon = '🙉', label = 'Spectate', value = apolonovanaddasdasdadeesto, description = ('Spectate ID %s, Name: %s '):format(v.id, v.name),
                select = function()
                    SpectatePlayer(v.id, v.pos)
                end
            })
        else
            local jugador_kick = jugador:AddButton({ icon = '🙉', label = 'Spectate', value = apolonovanadadeestoasdasdas, description = ('Spectate ID %s, Name: %s '):format(v.id, v.name),
                select = function()
                    SpectatePlayer(v.id, v.pos)
                end
            })
        end

        local jugador_ir = jugador:AddButton({ icon = '🛫', label = 'Goto', value = apolonovanadaesto, description = ('Go to ID %s, Name: %s '):format(v.id, v.name),
            select = function()
                TriggerServerEvent('FiveEye:adminTool', 'menuGoto', v.id)
                PlaySoundFrontend(-1, "Event_Start_Text", "GTAO_FM_Events_Soundset", 0)
            end
        })

        local jugador_traer = jugador:AddButton({ icon = '🛬', label = 'Bring', value = apolonovanadaesto, description = ('Bring ID %s, Name: %s '):format(v.id, v.name),
            select = function()
                TriggerServerEvent('FiveEye:adminTool', 'menuBring', v.id)
            end
        })
        

        local jugador_revivir = jugador:AddButton({ icon = '🩹', label = 'Revive', value = apolonovanadaesto, description = ('Revive ID %s, Name: %s '):format(v.id, v.name),
            select = function()
                TriggerServerEvent('FiveEye:adminTool', 'revivePlayer', v.id)
                PlaySoundFrontend(-1, "Event_Start_Text", "GTAO_FM_Events_Soundset", 0)
            end
        })
        
        local jugador_kick = jugador:AddButton({ icon = '🦶', label = 'Kick', value = apolonovanadaesto, description = ('Kick ID %s, Name: %s '):format(v.id, v.name),
            select = function()
                TriggerServerEvent('FiveEye:adminTool', 'menuKick', v.id, "Reason not Specified")
            end
        })
        
        local jugador_banear = jugador:AddButton({ icon = '🚷', disabled = soloadmin, label = 'Ban', value = apolonovanadaesto, description = ('Banear ID %s, Name: %s '):format(v.id, v.name),
            select = function()
                TriggerServerEvent('FiveEye:adminTool', 'menuBan', v.id, "Reason not Specified")
            end
        })

        local jugador_eliminararmas = jugador:AddButton({ icon = '🔫', disabled = soloadmin, label = 'Remove Weapons', value = apolonovanadaesto, description = ('Remove weapons to ID %s, Name: %s '):format(v.id, v.name),
            select = function()
                RemoveAllPedWeapons(GetPlayerPed(jugadorsel), false)
            end
        })
        local distancebetween = #(GetEntityCoords(PlayerPedId()) - vector3(v.pos[1], v.pos[2], v.pos[3]))
        if v ~= 0 then
            if v.alive then
                menu3:AddButton({ icon = '❤️', label = ('[%s] %s'):format(v.id, v.name), value = jugadorxd, description = ('Info about: %s ID: %s Distance: %s'):format(v.name, v.id, distancebetween), select = function(i) 
                    jugador()
                end })
            else
                menu3:AddButton({ icon = '💀', label = ('[%s] %s'):format(v.id, v.name), value = jugadorxd, description = ('Info about: %s ID: %s Distance: %s'):format(v.name, v.id, distancebetween), select = function(i)
                    jugador()
                end })
            end
        end
    end

end)

RegisterNetEvent('merevivo:amimismo')
AddEventHandler('merevivo:amimismo', function()
    Wait(50)
    PlaySoundFrontend(-1, "Event_Start_Text", "GTAO_FM_Events_Soundset", 0)
    local al = GetEntityCoords(PlayerPedId())
    StopScreenEffect("DeathFailOut")
    SetEntityHealth(PlayerPedId(), 200)
    ClearPedBloodDamage(PlayerPedId())
    SetEntityCoordsNoOffset(PlayerPedId(), al.x, al.y, al.z, false, false, false, true)
    NetworkResurrectLocalPlayer(al.x, al.y, al.z, false, true, false)
    TriggerEvent("esx:onPlayerSpawn")
    TriggerEvent("playerSpawned")
end)

-- MENU 4

local menu4 = MenuV:CreateMenu(false, "FiveEye Server Tools", 'centerright', 255, 255, 255, 'size-150', 'example', 'FiveEye', 'FiveEye: Server Tools')
local menu4_deletegun = menu4:AddCheckbox({ icon = '🔫', label = 'Delete Laser', description = 'Activate/Deactivate Delete Laser', value = 'n' })
local menu4_deletevehicles = menu4:AddButton({ icon = '🚙', label = 'Delete All Vehicles', description = 'Delete All Vehicles in Server', value = menu4_deletevehicles })
local menu4_deleteprops = menu4:AddButton({ icon = '🏢', label = 'Delete All Props', value = menu4_deleteprops, description = 'Delete all Entities in Server' })
local menu4_deletepeds = menu4:AddButton({ icon = '🧍', label = 'Delete All Peds', value = menu4_deletepeds, description = 'Delete all Peds in server' })

menu4_deletegun:On('check', function(item)
    deleteLazer = true
end)
menu4_deletegun:On('uncheck', function(item)
    deleteLazer = false
end)

menu4_deletevehicles:On('select', function(item)
    TriggerServerEvent("FiveEye:adminTool", "clearVehicles")
end)

menu4_deleteprops:On('select', function(item)
    TriggerServerEvent("FiveEye:adminTool", "clearProps")
end)

menu4_deletepeds:On('select', function(item)
    TriggerServerEvent("FiveEye:adminTool", "clearPeds")
end)

-- MENU 5
local menu5 = MenuV:CreateMenu(false, "FiveEye Teleport Options", 'centerright', 255, 255, 255, 'size-150', 'example', 'FiveEye', 'FiveEye: Teleport Options')
local menu5_tptowaypoint = menu5:AddButton({ icon = '📍', label = 'TP To Waypoint', description = 'TP To Waypoint' })
menu5_tptowaypoint:On('select', function(item) 
    local _waypoint = GetFirstBlipInfoId(8)

    if DoesBlipExist(_waypoint) then
        local waypointCoords = GetBlipInfoIdCoord(_waypoint)

        for height = 1, 1000 do
            SetPedCoordsKeepVehicle(PlayerPedId(), waypointCoords["x"], waypointCoords["y"], height + 0.0)

            local foundGround, zPos = GetGroundZFor_3dCoord(waypointCoords["x"], waypointCoords["y"], height + 0.0)

            if foundGround then
                SetPedCoordsKeepVehicle(PlayerPedId(), waypointCoords["x"], waypointCoords["y"], height + 0.0)
                break
            end

            Citizen.Wait(5)
        end
    end
end)

-- MENU 6
local menu6 = MenuV:CreateMenu(false, "FiveEye Vehicle Tools", 'centerright', 255, 255, 255, 'size-150', 'example', 'FiveEye', 'FiveEye: Vehicle Tools')
local menu6_fixcar = menu6:AddButton({ icon = '🔧', label = 'Fix Car', description = 'Fix Car' })
local menu6_godmode = menu6:AddCheckbox({ icon = '🔱', label = 'GodMode', description = 'GodMode', value = 'n' })
local menu6_noclip = menu6:AddCheckbox({ icon = '🐦', label = 'NoClip (Vehicle)', description = 'Noclip with a Vehicle', value = 'n' })
local menu6_nocliprange = menu6:AddRange({ icon = '💨', label = 'Noclip Speed', min = 0, max = 10, value = 0, saveOnUpdate = true, description = 'Set NoClip Speed' })
local menu6_engineboost = menu6:AddRange({ icon = '👩‍🦼', label = 'Engine Boost', min = 0, max = 10, value = 0, saveOnUpdate = true, description = 'Set Vehicle Engine Boost' })
menu6_fixcar:On('select', function(item)
    local _ped = PlayerPedId()
    local _vehiclein = GetVehiclePedIsIn(_ped)
    if _vehiclein ~= 0 then
        SetVehicleFixed(_vehiclein)
        SetVehicleDeformationFixed(_vehiclein)
        SetVehicleUndriveable(_vehiclein, false)
        SetVehicleEngineOn(_vehiclein, true, true)
    end
end)
menu6_godmode:On('check', function(item)
    local _ped = PlayerPedId()
    local _vehiclein = GetVehiclePedIsIn(_ped)
    if _vehiclein ~= 0 then
        SetEntityInvincible(_vehiclein, true)
    end
end)
menu6_godmode:On('uncheck', function(item)
    local _ped = PlayerPedId()
    local _vehiclein = GetVehiclePedIsIn(_ped)
    if _vehiclein ~= 0 then
        SetEntityInvincible(_vehiclein, false)
    end
end)
menu6_noclip:On('check', function(item)
    isusingfuncs = true
    isnoclippingveh = true
end)
menu6_noclip:On('uncheck', function(item)
    local _ped = PlayerPedId()
    isusingfuncs = false
    isnoclippingveh = false
    SetEntityVisible(_ped, true)
    local _vehiclein = GetVehiclePedIsIn(_ped)
    if _vehiclein ~= 0 then
        SetEntityVisible(_vehiclein, true)
    end
end)
menu6_nocliprange:On('change', function(item, newValue, oldValue)
    noclipveh = newValue
end)
menu6_engineboost:On('change', function(item, newValue, oldValue)
    local _veh = GetVehiclePedIsIn(PlayerPedId())
    if _veh ~= 0 then
        local _boost = 1.0
        if newValue ~= 1 then
            _boost = newValue * 50.0
        end 
        SetVehicleEnginePowerMultiplier(_veh, _boost)
    end
end)

-- MENU 7
local menu7 = MenuV:CreateMenu(false, "FiveEye Admin Tools", 'centerright', 255, 255, 255, 'size-150', 'example', 'FiveEye', 'FiveEye: TP Tools Tools')
local menu7_acinfo = menu7:AddButton({ icon = 'ℹ️', label = 'AntiCheat Version: 2.0', description = 'discord.gg/vf3E3TBvXt' })
local menu7_creatorac = menu7:AddButton({ icon = 'ℹ️', label = 'FiveEye by Apolo & VisiBait', description = 'discord.gg/vf3E3TBvXt' })

-- NEW MENUS (Augusto/Mopped7)

-- Menu 8 (Skin do PED)
local menu8 = MenuV:CreateMenu(false, "Change PED Skin", 'centerright', 255, 255, 255, 'size-150', 'example', 'FiveEye', 'Change Characters skin')
local menu8_padraom = menu8:AddButton({ icon = '👨', label = 'MP Male', description = 'Change skin to MP Male' })
local menu8_padraof = menu8:AddButton({ icon = '👧', label = 'MP Female', description = 'Change skin to MP Female' })
local menu8_monkey = menu8:AddButton({ icon = '🐒', label = 'Monkey', description = 'Change skin to Monkey' })
local menu8_rato = menu8:AddButton({ icon = '🐀 ', label = 'Rat', description = 'Change skin to Rat' })
local menu8_dog = menu8:AddButton({ icon = '🐶 ', label = 'Dog', description = 'Change skin to Dog' })
local menu8_cat = menu8:AddButton({ icon = '🐱 ', label = 'Cat', description = 'Change skin to Cat' })
local menu8_ped1 = menu8:AddButton({ icon = '🚶 ', label = 'NPC Male', description = 'Change skin to NPC Male' })
local menu8_ped2 = menu8:AddButton({ icon = '💃 ', label = 'NPC Female', description = 'Change skin to NPC Female' })
menu8_padraom:On('select', function(item)
    local modelo = GetHashKey('mp_m_freemode_01')
    while not HasModelLoaded(modelo) do
        RequestModel(modelo)
        Citizen.Wait(10)
    end

    if HasModelLoaded(modelo) then
        SetPlayerModel(PlayerId(),modelo)
        SetPedDefaultComponentVariation(PlayerPedId())
        SetModelAsNoLongerNeeded(modelo)
    end
end)

menu8_padraof:On('select', function(item)
    local modelo = GetHashKey('mp_f_freemode_01')
    while not HasModelLoaded(modelo) do
        RequestModel(modelo)
        Citizen.Wait(10)
    end

    if HasModelLoaded(modelo) then
        SetPlayerModel(PlayerId(),modelo)
        SetPedDefaultComponentVariation(PlayerPedId())
        SetModelAsNoLongerNeeded(modelo)
    end
end)

menu8_monkey:On('select', function(item)
    local modelo = GetHashKey('a_c_chimp')
    while not HasModelLoaded(modelo) do
        RequestModel(modelo)
        Citizen.Wait(10)
    end

    if HasModelLoaded(modelo) then
        SetPlayerModel(PlayerId(),modelo)
        SetModelAsNoLongerNeeded(modelo)
    end
end)

menu8_rato:On('select', function(item)
    local modelo = GetHashKey('a_c_rat')
    while not HasModelLoaded(modelo) do
        RequestModel(modelo)
        Citizen.Wait(10)
    end

    if HasModelLoaded(modelo) then
        SetPlayerModel(PlayerId(),modelo)
        SetModelAsNoLongerNeeded(modelo)
    end
end)

menu8_dog:On('select', function(item)
    local modelo = GetHashKey('a_c_poodle')
    while not HasModelLoaded(modelo) do
        RequestModel(modelo)
        Citizen.Wait(10)
    end

    if HasModelLoaded(modelo) then
        SetPlayerModel(PlayerId(),modelo)
        SetModelAsNoLongerNeeded(modelo)
    end
end)

menu8_cat:On('select', function(item)
    local modelo = GetHashKey('a_c_cat_01')
    while not HasModelLoaded(modelo) do
        RequestModel(modelo)
        Citizen.Wait(10)
    end

    if HasModelLoaded(modelo) then
        SetPlayerModel(PlayerId(),modelo)
        SetModelAsNoLongerNeeded(modelo)
    end
end)

menu8_ped1:On('select', function(item)
    local modelo = GetHashKey('a_m_m_fatlatin_01')
    while not HasModelLoaded(modelo) do
        RequestModel(modelo)
        Citizen.Wait(10)
    end

    if HasModelLoaded(modelo) then
        SetPlayerModel(PlayerId(),modelo)
        SetModelAsNoLongerNeeded(modelo)
    end
end)

menu8_ped2:On('select', function(item)
    local modelo = GetHashKey('a_f_m_fatcult_01')
    while not HasModelLoaded(modelo) do
        RequestModel(modelo)
        Citizen.Wait(10)
    end

    if HasModelLoaded(modelo) then
        SetPlayerModel(PlayerId(),modelo)
        SetModelAsNoLongerNeeded(modelo)
    end
end)

-- Menu 9

local menu9 = MenuV:CreateMenu(false, "Vision Functions", 'centerright', 255, 255, 255, 'size-150', 'example', 'FiveEye', 'Activate/Deactivate Vision Functions')
local menu9_visaonoturna = menu9:AddCheckbox({ icon = '🌒', label = 'Night Vision', description = 'Activate/Deactivate Night Vision', value = 'n' })
local menu9_visaotermica = menu9:AddCheckbox({ icon = '🔥', label = 'Thermal Vision', description = 'Activate/deactivate Thermal Vision', value = 'n' })

menu9_visaonoturna:On('check', function(item)
    SetNightvision(1)
end)
menu9_visaonoturna:On('uncheck', function(item)
    SetNightvision(0)
end)

menu9_visaotermica:On('check', function(item)
    SetSeethrough(1)
end)
menu9_visaotermica:On('uncheck', function(item)
    SetSeethrough(0)
end)

-- PRINCIPAL MENU
local menu = MenuV:CreateMenu(false, "Welcome to FiveEye's Admin Menu", 'centerright', 255, 255, 255, 'size-150', 'example', 'FiveEye', 'FiveEye: Main Menu')
local menu_admintools = menu:AddButton({ icon = '🔥', label = 'Admin Tools', value = menu2, description = 'Open Admin Tools' })
local menu_esp = menu:AddButton({ icon = '🌀', disabled = soloadmin, label = 'ESP Menu', value = espmenu, description = 'ESP Menu (Admin WallHacks )' })
local menu_vehicleoptions = menu:AddButton({ icon = '🚗', label = 'Vehicle Options', value = menu6, description = 'Open Vehicle Options' })
local menu_connectedplayers = menu:AddButton({ icon = '⛹️', label = 'Connected Players', value = menu3, description = 'See the Player List' })
local menu_servertools = menu:AddButton({ icon = '🤖', label = 'Server Tools', value = menu4, description = 'Open Server Tools' })
local menu_tpoptions = menu:AddButton({ icon = '📍', label = 'Teleport Options', value = menu5, description = 'Open Teleport Options' })
local menu_skin = menu:AddButton({ icon = '🦺', label = 'Skin Functions', value = menu8, description = 'Change your Ped/Skin' })
local menu_visaoconfig = menu:AddButton({ icon = '🔭', label = 'Vision Functions', value = menu9, description = 'Activate/Deactivate Vision Mods' })
local menu_infoanticheat = menu:AddButton({ icon = 'ℹ️', label = 'Information', value = menu7, description = 'See the Anticheat Version' })

-- Panel

RegisterNUICallback('noclip', function(data, cb)
    isnoclipping = not isnoclipping
    if not isnoclipping then
        SetEntityVisible(PlayerPedId(), true)
    end
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('godmode', function(data, cb)
    godmode = not godmode
    SetPlayerInvincible(PlayerId(), godmode)
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('coords', function(data, cb)
    print(GetEntityCoords(PlayerPedId()))
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('revive', function(data, cb)
    RevivePlayer()
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('clearvehs', function(data, cb)
    TriggerServerEvent("FiveEye:adminTool", "clearVehicles")
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('clearprops', function(data, cb)
    TriggerServerEvent("FiveEye:adminTool", "clearProps")
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('clearpeds', function(data, cb)
    TriggerServerEvent("FiveEye:adminTool", "clearPeds")
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('clearall', function(data, cb)
    TriggerServerEvent("FiveEye:adminTool", "clearVehicles")
    TriggerServerEvent("FiveEye:adminTool", "clearProps")
    TriggerServerEvent("FiveEye:adminTool", "clearPeds")
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('banplayer', function(data, cb)
    TriggerServerEvent('FiveEye:adminTool', 'menuBan', data.id, "Reason not Specified")
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('kickplayer', function(data, cb)
    TriggerServerEvent('FiveEye:adminTool', 'menuKick', data.id, "Reason not Specified")
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('screenshotplayer', function(data, cb)
    TriggerServerEvent('FiveEye:adminTool', 'menuScreenshotRender', data.id)
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('reviveplayer', function(data, cb)
    TriggerServerEvent('FiveEye:adminTool', 'revivePlayer', data.id)
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('slayplayer', function(data, cb)
    TriggerServerEvent('FiveEye:adminTool', 'menuSlay', data.id)
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('freezeplayer', function(data, cb)
    TriggerServerEvent('FiveEye:adminTool', 'menuFreeze', data.id)
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNUICallback('spectateplayer', function(data, cb)
    SpectatePlayer(data.id, Players[data.id].pos)
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNetEvent('FiveEye:renderscreenshot', function(data)
    SendNUIMessage({
        type = "screenshot",
        url = data
    })
end)

RegisterNUICallback('NUIFocusOff', function(data, cb)
    open = not open
    SetNuiFocus(false, false)
end)

-- Open Menu

RegisterNetEvent('FiveEye:receiveopenmenu', function()
    menu:Open()
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterNetEvent('FiveEye:receiveopenpanel', function()
    open = not open
    SetNuiFocus(open, open)
    SendNUIMessage({
        type = "openPanel",
        players = Players,
    })
    TriggerServerEvent("FiveEye:checkperms")
end)

RegisterCommand('fiveeyemenu', function()
    TriggerServerEvent('FiveEye:adminTool', 'reqMenu')
end, false)

RegisterCommand('fiveeyepanel', function()
    TriggerServerEvent('FiveEye:adminTool', 'reqPanel')
end, false)
RegisterKeyMapping('fiveeyemenu', "FiveEye Admin Menu", 'keyboard', 'INSERT')
