import { PluginInitializerContext } from 'opensearch-dashboards/public';
import { PinPointAnalyticsPlugin } from './plugin';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PinPointAnalyticsPluginStart {}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PinPointAnalyticsPluginSetUp {}

export function plugin(initializerContext: PluginInitializerContext) {
    return new PinPointAnalyticsPlugin(initializerContext);
}