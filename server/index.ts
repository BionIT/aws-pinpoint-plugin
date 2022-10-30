import {configSchema, ConfigSchema} from "../common/config";
import { PluginConfigDescriptor, PluginInitializerContext } from 'opensearch-dashboards/server';
import {PinPointAnalyticsServerPlugin} from "./plugin";

export const config: PluginConfigDescriptor<ConfigSchema> = {
    exposeToBrowser: {
        trackingID: true,
    },
    schema: configSchema,
};

export const plugin = (initializerContext: PluginInitializerContext) =>
    new PinPointAnalyticsServerPlugin(initializerContext);