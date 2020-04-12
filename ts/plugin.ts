import { StorexHubApi_v0 } from "@worldbrain/storex-hub-interfaces/lib/api";
import { PluginEntryFunction, PluginInterface } from "@worldbrain/storex-hub-interfaces/lib/plugins";

export interface SelfTestPlugin extends PluginInterface {
    running: boolean
}

export const main: PluginEntryFunction = async (input: { api: StorexHubApi_v0 }) => {
    const debug = process.env.STOREX_HUB_TEST_PLUGIN_DEBUG === 'true'
    const plugin: SelfTestPlugin = {
        running: false,
        start: async () => {
            if (debug) {
                console.log('starting self-test plugin')
            }
            plugin.running = true
        },
        stop: async () => {
            if (debug) {
                console.log('stopping self-test plugin')
            }
            plugin.running = true
        }
    }
    return plugin
}

