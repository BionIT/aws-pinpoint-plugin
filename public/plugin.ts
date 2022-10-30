import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';
import {PinPointAnalyticsPluginSetUp, PinPointAnalyticsPluginStart} from "./index";
import { Plugin, PluginInitializerContext, CoreSetup, CoreStart } from '../../../src/core/public';
import {ConfigSchema} from "../common/config";


export class PinPointAnalyticsPlugin
    implements Plugin<PinPointAnalyticsPluginSetUp, PinPointAnalyticsPluginStart> {
    constructor(initializerContext: PluginInitializerContext<ConfigSchema>) {
        const { pinpointPoolId } = initializerContext.config.get();
        const amplifyConfig = {
            Auth: {
                identityPoolId: pinpointPoolId,
                region: 'us-east-1'
            }
        }
        //Initialize Amplify
        Auth.configure(amplifyConfig);

        const analyticsConfig = {
            AWSPinpoint: {
                // Amazon Pinpoint App Client ID
                appId: 'd163093c6971474fa71110a69f64ee6f',
                // Amazon service region
                region: 'us-east-1',
                mandatorySignIn: false,
            }
        }

        Analytics.configure(analyticsConfig)
    }

    public setup(core: CoreSetup):PinPointAnalyticsPluginSetUp {
        //Record an event
        Analytics.record('some-event-name');

       //Record a custom event
        Analytics.record({
            name: 'Album',
            attributes: {genre: 'Rock', year: '1989'}
        });

        Analytics.autoTrack('pageView', {enable: true});

        return {};
    }

    public start(core: CoreStart): PinPointAnalyticsPluginStart {
        return {};
    }
}