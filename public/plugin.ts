import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';
import { PinPointAnalyticsPluginSetUp, PinPointAnalyticsPluginStart } from "./index";
import { Plugin, PluginInitializerContext, CoreSetup, CoreStart } from '../../../src/core/public';
import { ConfigSchema } from "../common/config";


export class PinPointAnalyticsPlugin
    implements Plugin<PinPointAnalyticsPluginSetUp, PinPointAnalyticsPluginStart> {
    constructor(initializerContext: PluginInitializerContext<ConfigSchema>) {
        const { pinpointPoolId, appClientId, region } = initializerContext.config.get();
        const amplifyConfig = {
            Auth: {
                identityPoolId: pinpointPoolId,
                region
            }
        }
        //Initialize Amplify
        Auth.configure(amplifyConfig);

        const analyticsConfig = {
            AWSPinpoint: {
                // Amazon Pinpoint App Client ID
                appId: appClientId,
                // Amazon service region
                region,
                mandatorySignIn: false,
            }
        }

        Analytics.configure(analyticsConfig)
    }

    public setup(core: CoreSetup):PinPointAnalyticsPluginSetUp {
        Analytics.autoTrack('pageView', {enable: true, type: 'SPA'});

        return {};
    }

    public start(core: CoreStart): PinPointAnalyticsPluginStart {
        return {};
    }
}