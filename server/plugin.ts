import {
    CoreSetup,
    CoreStart,
    Plugin,
    PluginInitializerContext,
} from 'opensearch-dashboards/server';
import {ConfigSchema} from "../common/config";

export class PinPointAnalyticsServerPlugin implements Plugin<object, object> {
    constructor(initializerContext: PluginInitializerContext<ConfigSchema>) {
    }

    public setup(core: CoreSetup) {
        return {};
    }

    public start(core: CoreStart) {
        return {};
    }

    public stop() {}
}