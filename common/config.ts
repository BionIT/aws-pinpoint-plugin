import { schema, TypeOf } from '@osd/config-schema';

export const configSchema = schema.object({
    enabled: schema.boolean({ defaultValue: true }),
    pinpointPoolId: schema.string({ defaultValue: '' }),
});

export type ConfigSchema = TypeOf<typeof configSchema>;