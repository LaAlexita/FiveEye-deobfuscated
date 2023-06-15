if (IsDuplicityVersion()) {
    const metadataTypes = ['client_script', 'client_scripts', 'server_script', 'server_scripts', 'shared_script', 'shared_scripts']
    const checkResourceMetadata = (resourceName) => {
        let isResourceValid = false
        metadataTypes.forEach(key => {
            const metadataCount = GetNumResourceMetadata(resourceName, key)
            for (let i = 0; i < metadataCount; i++) {
                const data = GetResourceMetadata(resourceName, key, i)
                if (data && typeof(data) === 'string') return isResourceValid = true
            }
        })
        return isResourceValid
    }

    const getHasJSFiles = (resourceName) => {
        let hasJSFiles = false
        metadataTypes.forEach(key => {
            const metadataCount = GetNumResourceMetadata(resourceName, key)
            for (let i = 0; i < metadataCount; i++) {
                const data = GetResourceMetadata(resourceName, key, i)
                if (data && typeof(data) === 'string' && data.includes('.js')) return hasJSFiles = true
            }
        })
        return hasJSFiles
    }

    for (let i = 0; i < GetNumResources(); i++) {
        const resourceName = GetResourceByFindIndex(i)
        if (!resourceName || resourceName === GetCurrentResourceName() || resourceName === 'sessionmanager') continue

        const isResourceValid = checkResourceMetadata(resourceName)
        const resourceManifest = LoadResourceFile(resourceName, "__resource.lua")
        const fxResourceManifest = LoadResourceFile(resourceName, "fxmanifest.lua")

        if (isResourceValid) {
            if (resourceManifest) {
                if (!resourceManifest.includes('FiveEye')) {
                    console.log(`^4[FiveEye] ^0- ^1[INSTALLATION]: WARNING! FiveEye is not installed in ${resourceName}. Consider reinstalling FiveEye using the FiveEye installer.`)
                }
            } 
            
            if (fxResourceManifest) {
                if (!fxResourceManifest.includes('FiveEye')) {
                    console.log(`^4[FiveEye] ^0- ^1[INSTALLATION]: WARNING! FiveEye is not installed in ${resourceName}. Consider reinstalling FiveEye using the FiveEye installer.`)
                }
            } 
        }
    }

    const installFiveEye = () => {
        let installationCount = 0
        let skippedResources = 0

        for (let i = 0; i < GetNumResources(); i++) {
            const resourceName = GetResourceByFindIndex(i)
            if (!resourceName || resourceName === GetCurrentResourceName() || resourceName === 'sessionmanager') continue

            const isResourceValid = checkResourceMetadata(resourceName)
            if (!isResourceValid) { console.log(`^4[FiveEye] ^0- ^1[INSTALLATION]: Skipped resource ${resourceName} No supported files found.`); skippedResources++; continue; }

            const resourceManifest = LoadResourceFile(resourceName, "__resource.lua")
            const fxResourceManifest = LoadResourceFile(resourceName, "fxmanifest.lua")
            const hasJSFiles = getHasJSFiles(resourceName)

            if (resourceManifest) {
                if (resourceManifest.includes('FiveEye')) { console.log(`^4[FiveEye] ^0- ^1[INSTALLATION]: Skipped resource ${resourceName} FiveEye is already installed.`); skippedResources++; continue; }

                let metadataToAdd = `shared_script '@FiveEye/FiveEye.lua'\n\n${resourceManifest}`
                if (hasJSFiles) metadataToAdd = `shared_script '@FiveEye/FiveEye.lua'\nshared_script '@FiveEye/FiveEye.js'\n\n${resourceManifest}`

                SaveResourceFile(resourceName, "__resource.lua", metadataToAdd, -1)
                console.log(`^4[FiveEye] ^0- ^1[INSTALLATION]: ^0Succesfully installed FiveEye in ${resourceName}.`)
                installationCount++
            }

            if (fxResourceManifest) {
                if (fxResourceManifest.includes('FiveEye')) { console.log(`^4[FiveEye] ^0- ^1[INSTALLATION]: Skipped resource ${resourceName} FiveEye is already installed.`); skippedResources++; continue; }

                let metadataToAdd = `shared_script '@FiveEye/FiveEye.lua'\n\n${fxResourceManifest}`
                if (hasJSFiles) metadataToAdd = `shared_script '@FiveEye/FiveEye.lua'\nshared_script '@FiveEye/FiveEye.js'\n\n${fxResourceManifest}`

                SaveResourceFile(resourceName, "fxmanifest.lua", metadataToAdd, -1)
                console.log(`^4[FiveEye] ^0- ^1[INSTALLATION]: ^0Succesfully installed FiveEye in ${resourceName}.`)
                installationCount++
            }
        }

        console.log(`^4[FiveEye] ^0- ^1[INSTALLATION]: ^0Succesfully Installed FiveEye on ${installationCount} resources. Skipped ${skippedResources} due to them not having any supported files.`)
    }

    const uninstallFiveEye = () => {
        let uninstallationCount = 0
        let skippedResources = 0

        for (let i = 0; i < GetNumResources(); i++) {
            const resourceName = GetResourceByFindIndex(i)
            if (!resourceName || resourceName === GetCurrentResourceName() || resourceName === 'sessionmanager') continue

            const isResourceValid = checkResourceMetadata(resourceName)
            if (!isResourceValid) { console.log(`^4[FiveEye] ^0- ^1[UNINSTALLATION]: Skipped resource ${resourceName} No supported files found.`); skippedResources++; continue; }

            const resourceManifest = LoadResourceFile(resourceName, "__resource.lua")
            const fxResourceManifest = LoadResourceFile(resourceName, "fxmanifest.lua")

            if (resourceManifest) {
                const newMetadata = resourceManifest.replace(`shared_script '@FiveEye/FiveEye.lua'\n\n`, '').replace(`shared_script '@FiveEye/FiveEye.js'\n\n`, '').replace(`shared_script '@FiveEye/FiveEye.lua'`, '').replace(`shared_script '@FiveEye/FiveEye.js'`, '')
                SaveResourceFile(resourceName, "__resource.lua", newMetadata, -1)
                console.log(`^4[FiveEye] ^0- ^1[UNINSTALLATION]: ^0Succesfully uninstalled FiveEye in ${resourceName}.`)
                uninstallationCount++
            }

            if (fxResourceManifest) {
                const newMetadata = fxResourceManifest.replace(`shared_script '@FiveEye/FiveEye.lua'\n\n`, '').replace(`shared_script '@FiveEye/FiveEye.js'\n\n`, '').replace(`shared_script '@FiveEye/FiveEye.lua'`, '').replace(`shared_script '@FiveEye/FiveEye.js'`, '')

                SaveResourceFile(resourceName, "fxmanifest.lua", newMetadata, -1)
                console.log(`^4[FiveEye] ^0- ^1[UNINSTALLATION]: ^0Succesfully uninstalled FiveEye in ${resourceName}.`)
                uninstallationCount++
            }
        }

        console.log(`^4[FiveEye] ^0- ^1[INSTALLATION]: ^0Succesfully Installed FiveEye on ${uninstallationCount} resources. Skipped ${skippedResources} due to them not having any supported files.`)
    }

    RegisterCommand("fiveeyeinstall", (source) => {
        const src = source

        if (src === 0) return installFiveEye()
    })

    RegisterCommand("fiveeyeuninstall", (source) => {
        const src = source

        if (src === 0) return uninstallFiveEye()
    })

    RegisterCommand("fiveeyereinstall", (source) => {
        const src = source

        if (src === 0) return uninstallFiveEye(), installFiveEye()
    })
}