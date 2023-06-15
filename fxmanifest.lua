fx_version 'cerulean'

game 'gta5'

description 'FiveEye - Best FiveM AntiCheat'
authors 'FiveEye Developers - https://discord.gg/WkEM7VqGu3'
version 'FiveEyeAC - JS - BETA v3'

shared_scripts {
    'FiveEye.lua',
    'FiveEye.js'
}

client_scripts {
    '@menuv/menuv.lua',
    'client/modules/*.lua',
    'configs/cl_config.js',
    'client/*.js',
}
 
server_scripts {
    'configs/sv_config.js',
    'server/auth.js',
    'server/installer.js'
}

ui_page 'html/index.html'

files {
    'html/*.html',
    'html/css/*.css',
    'html/js/*.js',
    'html/sounds/*.mp3'
}